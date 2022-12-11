<script setup lang="ts">
import TextInput from "../components/inputs/TextInput.vue";
import CheckboxInput from "../components/inputs/CheckboxInput.vue";
import { checkEmail } from "../assets/scripts.js";
import type { VueCookies } from "vue-cookies";
import { inject } from 'vue';
import router from "@/router";
const $cookies = inject<VueCookies>('$cookies');

function changePage() {
  const login = document.getElementById("l-container"),
    register = document.getElementById("r-container");
  if (login?.classList.contains("active")) {
    login.classList.remove("active");
    register?.classList.add("active");
  } else {
    login?.classList.add("active");
    register?.classList.remove("active");
  }
}

const registerComps = ["r-tos", "r-email", "r-password", "r-username"];
window.addEventListener("input", (e:any) => {
  if (registerComps.includes(e.target?.id)) {
    const rButton = document.getElementById(
      "r-button"
    ) as HTMLInputElement | null;
    if (checkInputFields() && rButton) {
      rButton.disabled = false;
    } else if(rButton){
      rButton.disabled = true;
    }
  }
});

function checkInputFields() {
  const rTos = document.getElementById("r-tos") as HTMLInputElement | null;
  const rEmail = document.getElementById("r-email") as HTMLInputElement | null;
  const rPassword = document.getElementById(
    "r-password"
  ) as HTMLInputElement | null;
  const rUsername = document.getElementById(
    "r-username"
  ) as HTMLInputElement | null;
  return (
    rTos?.checked &&
    checkEmail(rEmail?.value.trim()) &&
    rPassword?.value.trim() !== "" &&
    rUsername?.value.trim() !== ""
  );
}

async function createAccount() {
  if (!checkInputFields()) return;
  const rEmail = document.getElementById("r-email") as HTMLInputElement | null;
  const rPassword = document.getElementById("r-password") as HTMLInputElement | null;
  const rUsername = document.getElementById("r-username") as HTMLInputElement | null;
  let res = await fetch(import.meta.env.VITE_API_URL + "User/AddEditAsync", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email: rEmail?.value.trim(),
    username: rUsername?.value.trim(),
    password: rPassword?.value.trim(),
    }),
  });
  if(res.status == 200){
    changePage();
  }
}

async function login() {
  const lPassword = document.getElementById("l-password") as HTMLInputElement | null;
  const lUsername = document.getElementById("l-username") as HTMLInputElement | null;
  let res = await fetch(import.meta.env.VITE_API_URL + "User/login", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: lUsername?.value.trim(),
      password: lPassword?.value.trim(),
    }),
  });
  res.text().then((txt) => { 
    if(res.status == 200){
      $cookies?.set("jwt", txt);
    }
    router.push("home")
  });
}
import loginComponent from "../components/SigninComponents/LoginComponent.vue";
import registerComponent from "../components/SigninComponents/RegisterComponent.vue";
</script>

<template>
  <main>
    <div class="rl-bg"></div>
    <loginComponent />
    <registerComponent />
  </main>
</template>

<style scoped>
.rl-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("https://images-ext-1.discordapp.net/external/SXMP-tiLu-A5ThDh8fZ3JwfRCh_qqTTtvjrrcIiMX5Q/https/discord.com/assets/d20e43cdcadf850cfd8d4e953df0f3b4.png");
}
</style>
