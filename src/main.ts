import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';
import UserStore from './stores/UserStore';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faGears, faHeadphonesSimple, faMicrophone, faServer, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { useSignalR } from "@dreamonkey/vue-signalr";
import { HubConnectionBuilder } from '@microsoft/signalr';


const app = createApp(App);

app.use(UserStore);

// Router
app.use(Router);

// Icons
library.add(faBars, faComment, faGears, faUsers, faServer, faHeadphonesSimple, faMicrophone)


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


