import Api from '../../Gateway/Api'

export default {
    namespaced: true,
    state: {
        servers: [],
        currentServer: {},
    },
    getters: {
        GetServers(state){
            return state.servers;
        }
    },
    mutations: {
        updateServers(state, servers){
            state.servers = servers
        },
        addToServerList(state, server){
            state.servers.push(server);
        },
        updateSelectedServer(state, server){
            state.SelectServer = server;
        }
    },
    actions: {
        fetchServers(context){
            Api({
                method: 'get',
                url: '/members/me',
            }).then(function(response) {
                response.data.forEach(server => {
                    Api({
                        method: 'get',
                        url: '/servers/' + server.serverId
                    }).then(function(response){
                        context.commit('addToServerList', response.data);
                    })
                });
            })
        },
        SelectServer(context, serverId){
            Api({
                method: 'get',
                url: '/servers/' + serverId
            }).then(function(response){
                context.commit('updateSelectedServer', response.data);
            })
        }

    },
}