import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faGears, faHeadphonesSimple, faMicrophone, faServer, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';
import es from './locales/es.json';
import Store from './stores/Store';

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

//API ENDPOINT
app.config.globalProperties.$myGlobalVariable = 'localhost:5001';

// Icons
library.add(faBars, faComment, faGears, faUsers, faServer, faHeadphonesSimple, faMicrophone)


// Root Element
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');


