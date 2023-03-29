import { createStore } from 'vuex'
import User from './Modules/User'
import Server from './Modules/Server'
import Channel from './Modules/Channel'

export default createStore({
    modules: {
        User,
        Server,
        Channel
    }
})