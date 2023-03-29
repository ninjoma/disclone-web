import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faGears, faHeadphonesSimple, faMicrophone, faServer, faUsers, faPlus, faHashtag, faTrashCan, faPenToSquare, faHouse, faSearch, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';
import es from './locales/es.json';
import Store from './stores/Store';
import { VueSignalR, VueSignalRConfig } from '@dreamonkey/vue-signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';


const app = createApp(App);


const i18n = createI18n<[any], 'es' | 'en-US'>({
    locale: 'es',
    messages: {
        'es': es,
        'en-US' : enUS
    }
})

app.use(Store);
app.use(i18n);

// Router
app.use(Router);

app.config.globalProperties.$isLoading = false;

// Icons
library.add(faBars, faComment, faGears, faUsers, faServer, faHeadphonesSimple, faMicrophone, faPlus, faHashtag, faTrashCan, faPenToSquare, faHouse, faSearch, faFloppyDisk, faXmark)

const signalRConfig: VueSignalRConfig = {
    connection: new HubConnectionBuilder()
    .withUrl("http://localhost:5610/hub", {
        accessTokenFactory: async() => {
            return "123";
        }
    })
    .withAutomaticReconnect([250, 250, 750, 1000, 3000, 10000, 10000, 25000])
    .build(),
    autoOffInsideComponentScope: false,
    failFn: (error: any) => { console.error(error) }
}

app.use(VueSignalR, signalRConfig);

// Root Element
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');


