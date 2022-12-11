<script setup lang="ts">
import editButton from "@/components/SettingsComponents/editButton.vue";
import type { VueCookies } from "vue-cookies";
import { inject, onMounted } from "vue";
import router from "@/router";
const $cookies = inject<VueCookies>("$cookies");
async function getUserInfo() {
  let res = await fetch(import.meta.env.VITE_API_URL + "User/getUserInfo", {
    method: "GET",
    headers: new Headers({
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + $cookies?.get("jwt"),
    }),
  });
  return res.json().then((result: any) => {
    return result;
  });
}

async function changePageValues() {
  let result = await getUserInfo();
  document.getElementById("email-text").innerText = result.email;
  document.getElementById("username-text").innerText = result.userName;
  document.getElementById("settings-profile").src = result.image
    ? result.image
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRf6AzB4fjsezZG0e9DTpAwci9v8hvHOzhZ2XvwR6&s";
}

function closeSession() {
  $cookies?.remove("jwt");
  router.push("signin");
}
onMounted(() => {
  changePageValues();
});
</script>
<template>
  <div class="settings-container">
    <div class="settings-info">
      <div class="settings-topbuttons">
        <i
          class="bi bi-arrow-left settings-back"
          v-on:click="router.back()"
        ></i>
        <button class="settings-logout" v-on:click="closeSession()">
          <i class="bi bi-box-arrow-left"></i>
          Cerrar Sesión
        </button>
      </div>
      <img
        id="settings-profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRf6AzB4fjsezZG0e9DTpAwci9v8hvHOzhZ2XvwR6&s"
        alt=""
      />
      <editButton
        value="Cargando..."
        property="username"
        msg="Introduce un nuevo
  nombre de usuario y tu contraseña existente"
        id="usernameEdit"
        type="text"
      />
      <editButton
        value="Cargando..."
        property="email"
        msg="Introduce un nuevo
  email y tu contraseña existente"
        id="emailEdit"
        type="text"
      />
      <editButton
        value="Cargando..."
        property="password"
        msg="Introduce una nueva
  contraseña y tu contraseña existente"
        id="passwordEdit"
        type="password"
      />
    </div>
  </div>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
.settings-container {
  height: 100vh;
  background-color: var(--dark-color-2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.settings-back {
  color: white;
  font-size: 25px;
  cursor: pointer;
}
.settings-logout {
  display: flex;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 15px;
  font-size: 18px;
  width: 170px;
  cursor: pointer;
  transition: background-color 0.2s;
  align-items: center;
  justify-content: space-between;
}
.settings-logout:hover {
  background-color: var(--red-color-1);
}
.settings-topbuttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings-info {
  margin-top: 2rem;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: var(--dark-color-1);
  padding: 20px 20px 20px 20px;
  width: 40%;
}
.settings-info img {
  border: 10px solid var(--dark-color-2);
  width: 150px;
  border-radius: 50%;
}
</style>
