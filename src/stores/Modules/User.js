import Api from '../../Gateway/Api'

export default {
    namespaced: true,
    state: {
        user: {
            Id: null,
            Username: null,
            Email: null,
            Image: null,
            CreationDate: null,
            Servers: null,
            Members: null,
            Invitations: null,
            Messages: null,
        },
        userToken: null,
    },
    getters: {
        GetUserServers(state) {
            return state.user.Servers;
        },
        GetUserMembers(state) {
            return state.user.Members;
        },
        GetUserInvitations(state) {
            return state.user.Invitations;
        },
        GetUserMessages(state) {
            return state.user.Messages;
        },
        GetUserToken(state) {
            return state.userToken;
        },
        GetUserData(state){
            return state.user;
        }
    },
    mutations: {
        UpdateUserData(state, userData) {
            state.user = userData;
        },
        RemoveUserData(state) {
            state.user = {
                Id: null,
                Username: null,
                Email: null,
                Image: null,
                CreationDate: null,
                Servers: null,
                Members: null,
                Invitations: null,
                Messages: null,
            };
            state.userToken = null;
        },
        UpdateUserToken(state, Token) {
            state.userToken = Token;
            localStorage.setItem('userToken', Token);
        }
    },
    actions: {
        async fetchUserData(context) {
            Api({
                method: 'get',
                url: '/users/me',
            }).then(function (response) {
                context.commit('UpdateUserData', response.data);
            })
        },
        async login(context, { username, password }) {
            Api({
                method: 'post',
                url: '/auth/login',
                data: {
                    username: username,
                    password: password,
                }
            }).then(function (response) {
                if (response.data != null) {
                    context.commit('UpdateUserToken', response.data);
                }
                Api({
                    method: 'get',
                    url: '/users/me',
                }).then(function (response) {
                    context.commit('UpdateUserData', response.data);
                })
                return
            });
        },
        async register(context, { username, password, email }) {
            Api({
                method: 'post',
                url: '/auth/register',
                data: {
                    username: username,
                    password: password,
                    email: email,
                }
            }).then(function (response) {
                context.commit('UpdateUserData', response.data);
                Api({
                    method: 'post',
                    url: '/auth/login',
                    data: {
                        username: username,
                        password: password,
                    }
                }).then(function (response) {
                    if (response.data != null) {
                        context.commit('UpdateUserToken', response.data);
                    }
                });
            })
        }
    }
}