<script lang="ts">
import ServerColumn from "../components/ServerColumn/ServerColumn.vue";
import MessageColumn from "../components/MessageColumn/MessageColumn.vue";
import UsersColumn from "../components/UserColumn/UsersColumn.vue";
import SearchInput from "../components/inputs/SearchInput.vue";
import type { VueCookies } from "vue-cookies";
import { inject } from "vue";

export default {
    data() {
        const cookies = inject<VueCookies>("$cookies");
        var channelname = "";
        return {
        cookies,
        channelname,
        };
    },
    created() {
        this.$watch(
        () => this.$route.params,
        () => {
            this.fetchInfo();
        }
        );
    },
    mounted() {
        this.fetchInfo();
    },
    methods: {
        fetchInfo: async function(){
            if(!this.$route.query.channel){
                return
            }
            let res = await fetch(import.meta.env.VITE_API_URL + "Channel/GetByIdAsync/" + this.$route.query.channel, {
                method: "GET",
                headers: new Headers({
                    'Accept': "*/*",
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + this.cookies?.get("jwt")
                }),
            });
            res.json().then((r) => {
                this.channelname = r.name
            })
        }   
    },
    components: {
        UsersColumn,
        ServerColumn,
        MessageColumn,
        SearchInput
    }
}

</script>

<template>
  <div class="fill-height">
    <div class="view-columns">
      <ServerColumn />
      <div class="message-container">
        <div class="message-col-header">
          <div>
            <i class="bi bi-quote icon-big"></i>
            <span id="currentchannelname">{{ channelname }}</span>
          </div>
          <SearchInput />
        </div>
        <div class="message-column">
          <MessageColumn />
          <UsersColumn />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fill-height {
  background-color: #5f5da6;
  min-height: auto;
}
.view-columns {
  display: flex;
}

.message-column {
  display: flex;
  flex: 1;
  max-height: 100vh;
  overflow: hidden;
}

.message-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.message-col-header {
  background-color: #5f5da6;
  height: 50px;
  position: sticky;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  font-family: "Open Sans";
  font-weight: bolder;
  color: white;
}
</style>
