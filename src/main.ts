import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';
import UserStore from './stores/UserStore';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faGears, faHeadphonesSimple, faMicrophone, faServer, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const app = createApp(App);

app.use(UserStore);

// Router
app.use(Router);

// Icons
library.add(faBars, faComment, faGears, faUsers, faServer, faHeadphonesSimple, faMicrophone)


// Root Element
app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');


