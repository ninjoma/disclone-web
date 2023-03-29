import { Api } from '../../Gateway/Api'

export default {
    namespaced: true,
    state: {
        channels: [],
        currentChannel: {},
    },
    getters: {
        GetChannels(state) {
            return state.channels;
        },
        GetChannelMsgs(state) {
            return state.currentChannel.messages;
        },
        GetCurrentChannel(state) {
            return state.currentChannel;
        },
        GetCurrentChannelId(state){
            return state.currentChannel.id;
        }
    },
    mutations: {
        updateChannels(state, channels) {
            state.channels = channels;
        },
        updateCurrentChannel(state, channel) {
            state.currentChannel = channel;
        },
        updateMessages(state, messages) {
            state.currentChannel.messages = messages;
        },
        filterMessages(state, messages) {
            console.log(messages)
            state.currentChannel.messages = messages;
        },
        clearCurrentChannel(state){
            state.currentChannel = {}
        },
        clearChannels(state){
            state.channels = [];
        }
    },
    actions: {
        FetchChannels(context, serverId) {
            Api({
                method: 'get',
                url: '/servers/' + serverId + '/channels'
            }).then(function (response) {
                context.commit('updateChannels', response.data);
            })
        },
        UpdateMessages(context, channelId) {
            Api({
                method: 'get',
                url: '/channels/' + channelId + '/messages/'
            }).then(function (response) {
                context.commit('updateMessages', response.data);
            })
        },
        FilterMessages(context, data) {
            Api({ 
                method: 'get', 
                url: '/channels/' + data.channelid + '/messages/',
                params: {
                    Content: data.contentFilter
                } 
            }).then(function (response) { 
                context.commit('filterMessages', response.data); 
            })
        },
        SelectChannel(context, channelId) {
            Api({
                method: 'get',
                url: '/channels/' + channelId
            }).then(function(res1){
                var res = res1.data;
                Api({
                    method: 'get',
                    url: '/channels/' + channelId + '/messages/'
                }).then(function(res2){
                    res.messages = res2.data
                    context.commit('updateCurrentChannel', res);
                })
            })
        },
        ClearCurrentChannel(context){
            context.commit('clearCurrentChannel');
            context.commit('clearChannels');
        }


    },
}