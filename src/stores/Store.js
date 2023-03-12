import { createStore } from 'vuex'
import appConfig from '../../appConfig.json'
import axios from 'axios'

export default createStore({
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
        }
    },
    actions: {
        LoadUserData(context) {
            context.commit
        },
        fetchUserData(context) {
            context.commit
        },
        async login(context, { username, password }) {
            axios({
                method: 'post',
                url: '/auth/login',
                data: {
                    user: {
                        username: username,
                        password: password,
                    }
                }
            })
        }
    }
})