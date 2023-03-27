import Api from '../../Gateway/Api'

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
        }
    },
    actions: {
        fetchServers({ commit, getters }) {
            commit('clearServerList');
            Api({
                method: 'get',
                url: '/members/me',
            }).then(function (response) {
                response.data.forEach(server => {
                    Api({
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
        }

    },
}