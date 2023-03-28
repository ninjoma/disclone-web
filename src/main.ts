import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faGears, faHeadphonesSimple, faMicrophone, faServer, faUsers, faPlus, faHashtag, faTrashCan, faPenToSquare, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';
import es from './locales/es.json';
import Store from './stores/Store';
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';


const app = createApp(App);

type MessageSchema = typeof es

const i18n = createI18n<[MessageSchema], 'es' | 'en-US'>({
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
library.add(faBars, faComment, faGears, faUsers, faServer, faHeadphonesSimple, faMicrophone, faPlus, faHashtag, faTrashCan, faPenToSquare, faHouse)


// SignalR (Real Time API)
const connection: any = new HubConnectionBuilder()
    .withUrl("http://localhost:5610/hub", {
        accessTokenFactory: async() => {
            return "123";
        }
    })
    .withAutomaticReconnect([250, 250, 750, 1000, 3000, 10000, 10000, 25000])
    .build();

app.use(VueSignalR, { connection });

// Root Element
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');


