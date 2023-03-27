import {Api} from '../../Gateway/Api'

export default {
    namespaced: true,
    state: {
        channels: [],
        currentChannel: {},
    },
    getters: {
        GetChannels(state){
            return state.channels;
        },
        GetChannelMsgs(state){
            return state.currentChannel.messages;
        },
        GetCurrentChannel(state){
            return state.currentChannel;
        }
    },
    mutations: {
        updateChannels(state, channels){
            state.channels = channels;
        },
        updateCurrentChannel(state, channel){
            state.currentChannel = channel;
        },
        updateMessages(state, messages) {
            state.currentChannel.messages = messages;
        }
    },
    actions: {
        FetchChannels(context, serverId){
            Api({
                method: 'get',
                url: '/servers/' + serverId + '/channels'
            }).then(function(response){
                context.commit('updateChannels', response.data);
            })
        },
        UpdateMessages(context, channelId) {
            Api({
                method: 'get',
                url: '/channels/' + channelId + '/messages/'
            }).then(function(response){
                context.commit('updateMessages', response.data);
            })
        },
        SelectChannel(context, channelId){
            Api({
                method: 'get',
                url: '/channels/' + channelId
            }).then(function(response){
                context.commit('updateCurrentChannel', response.data);
            })
        }

    },
}