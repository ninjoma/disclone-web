<script lang="ts">
import { defineComponent } from 'vue';
import userProfile from './UserProfile.vue'

export default defineComponent({
    components: {
      userProfile
    }
})
</script>
<template>
<div className="drawer drawer-end drawer-mobile">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <slot></slot>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu w-80 bg-base-100 text-base-content">
        <div className="flex flex-col grow bg-base-200">
            <div className="h-16 border-b-2 p-2 px-4 flex items-center border-zinc-700">
              <font-awesome-icon class="pr-3" icon="fa-solid fa-users" />
              <span>{{ this.$t('SERVER.MEMBERLIST') }}</span>
            </div>
            <div className="flex flex-col p-3 gap-2 grow">
                <div className="flex flex-col p-2 gap-3">
                    <userProfile v-for="user in this.$store.getters['Server/GetMembers']" :user="user"></userProfile>
                </div>
            </div>
        </div>
    </ul>
  </div>
</div>
</template>