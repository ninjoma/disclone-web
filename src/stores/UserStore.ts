import {createStore} from 'vuex'
import appConfig from '../../appConfig.json'
import Vue from 'vue'

export default createStore({
    state: {
        user: {
            Id: null,
            Username: String,
            Email: String,
            Image: String,
            CreationDate: Date,
            token: String,
            Servers: [],
            Members: [],
            Invitations: [],
            Messages: [],
        }
    },
    getters: {
        GetUserServers(state){
            return state.user.Servers;
        },
        GetUserMembers(state){
            return state.user.Members;
        },
        GetUserInvitations(state){
            return state.user.Invitations;
        },
        GetUserMessages(state){
            return state.user.Messages;
        }
    },
    mutations: {
        UpdateUserData(state, userData){
            state.user = userData;
        }
    },
    actions: {
        LoadUserData(context){
            context.commit
        },
        fetchUserData(context){
            context.commit
        }
    }
})