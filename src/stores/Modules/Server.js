import {Api} from '../../Gateway/Api'

export default {
    namespaced: true,
    state: {
        servers: [],
        currentServer: {},
    },
    getters: {
        GetServers(state) {
            return state.servers;
        },
        GetCurrentServer(state) {
            return state.currentServer;
        },
        GetCurrentServerId(state){
            return state.currentServer.id;
        },
        GetMembers(state){
            return state.currentServer.members;
        }
    },
    mutations: {
        updateServers(state, servers) {
            state.servers = servers
        },
        addToServerList(state, server) {
            state.servers.push(server);
        },
        updateSelectedServer(state, server) {
            state.currentServer = server;
        },
        clearServerList(state){
            state.servers = [];
        },
        clearCurrentServer(state){
            state.currentServer = {};
        }
    },
    actions: {
        async fetchServers({ commit, getters }) {
            commit('clearServerList');
            await Api({
                method: 'get',
                url: '/members/me',
            }).then(function (response) {
                response.data.forEach(async server => {
                    await Api({
                        method: 'get',
                        url: '/servers/' + server.serverId
                    }).then(function (response) {
                        commit('addToServerList', response.data);
                    })
                });
            })
        },
        SelectServer(context, serverId) {
            Api({
                method: 'get',
                url: '/servers/' + serverId
            }).then(function (response) {
                context.commit('updateSelectedServer', response.data);
            })
        },
        clearCurrentServer(context){
            context.commit('clearCurrentServer');
        }

    },
}