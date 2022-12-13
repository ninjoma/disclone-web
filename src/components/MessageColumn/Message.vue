<script lang="ts">
import type { VueCookies } from "vue-cookies";
import { inject } from "vue";
export default {
  props: ["date", "user", "text", "id"],
  data() {
    const cookies = inject<VueCookies>("$cookies");
    return cookies;
  },
  methods: {
    deleteMessage: async function () {
      await fetch(
        import.meta.env.VITE_API_URL + "Message/ToggleInactiveById/" + this.id,
        {
          method: "DELETE",
          headers: new Headers({
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$cookies?.get("jwt"),
          }),
        }
      ).then(() => {
        this.$router.push({ name: "server", query: { id: this.$route.query.id, channel: this.$route.query.channel, removedMessage: "true" } }).then(() => {
          this.$router.push({ name: "server", query: { id: this.$route.query.id, channel: this.$route.query.channel } });
        });
      });
      
    },
  },
};
</script>

<template>
  <div class="container">
    <div>
      <span class="date">{{ date }}</span>
      <span class="user">{{ user }}</span>
      <span class="text">{{ text }}</span>
    </div>

    <span class="delete" v-on:click="deleteMessage()"
      ><i class="bi bi-trash3"></i
    ></span>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Open Sans";
  display: flex;
  justify-content: space-between;
}
.container:hover {
  background-color: hsla(0, 0%, 0%, 0.15);
}
.container:hover .delete {
  opacity: 1;
}

.date {
  font-size: 10px;
  color: lightgray;
  padding-right: 3px;
}
.user {
  color: yellow;
  padding-right: 5px;
}
.text {
  color: white;
}
.delete {
  color: white;
  cursor: pointer;
  opacity: 0;
}
.delete:hover {
  color: var(--red-color-1);
}
</style>
