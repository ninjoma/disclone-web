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