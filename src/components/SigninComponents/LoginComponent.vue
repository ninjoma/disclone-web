<script lang="ts">
import TextInput from "../inputs/TextInput.vue";
import type { VueCookies } from "vue-cookies";
import { inject } from "vue";
import router from "@/router";
const $cookies = inject<VueCookies>("$cookies");

export default {
  components: {
    TextInput,
  },
  methods: {
    login: async function () {
      const lPassword = document.getElementById(
        "l-password"
      ) as HTMLInputElement | null;
      const lUsername = document.getElementById(
        "l-username"
      ) as HTMLInputElement | null;
      let res = await fetch(import.meta.env.VITE_API_URL + "Users/login", {
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
        if (res.status == 200) {
          $cookies?.set("jwt", txt);
        }
        router.push("home");
      });
    },
    changePage: function () {
      const login = document.getElementById("l-container"),
        register = document.getElementById("r-container");
      if (login?.classList.contains("active")) {
        login.classList.remove("active");
        register?.classList.add("active");
      } else {
        login?.classList.add("active");
        register?.classList.remove("active");
      }
    },
  },
};
</script>

<template>
  <div id="l-container" class="active">
    <div class="l-content">
      <div class="l-header">
        <h1 class="l-onlyMobile">Disclone</h1>
        <h1>¡Bienvenido!</h1>
        <h4>¡Estamos encantados de verte de nuevo!</h4>
      </div>
      <div class="l-form">
        <div>
          <label for="l-username">NOMBRE DE USUARIO</label>
          <TextInput id="l-username" />
        </div>
        <div>
          <label for="l-password">CONTRASEÑA</label>
          <TextInput id="l-password" type="password" />
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >¿Has olvidado tu contraseña?</a
        >
        <button v-on:click="login()">Iniciar Sesión</button>
        <div>
          ¿Necesitas una cuenta?
          <a v-on:click="changePage()">Regístrate</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#l-container {
  display: flex;
  position: absolute;
  opacity: 0;
  width: 100%;
  justify-content: center;
  height: 100vh;
  align-items: center;
  transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
}
.l-content {
  height: 340px;
  background-color: var(--dark-color-1);
  border-radius: 5px;
  box-sizing: content-box;
  width: 416px;
  padding: 32px;
  text-align: center;
  font-weight: bold;
}
.l-header h1 {
  color: white;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 8px;
}
.l-header h4 {
  color: white;
}
.l-form {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
}
.l-form div {
  width: 100%;
  text-align: left;
}
.l-form a {
  text-decoration: none;
  color: var(--light-color);
  cursor: pointer;
}
.l-form a:hover {
  text-decoration: underline;
}
.l-form button {
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 15px;
  font-size: 15px;
  width: 100%;
  cursor: pointer;
  margin-top: 5px;
  transition: background-color 0.1s ease-in-out;
}

.l-form button:hover {
  background-color: var(--secondary-color);
}

.l-form button:disabled {
  cursor: not-allowed;
  background-color: gray;
}

.l-form label {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}
.l-onlyMobile {
  display: none;
}
@media screen and (max-width: 480px) {
  #l-container {
    min-height: 100vh;
    height: auto;
  }
  .l-content {
    border-radius: 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .l-onlyMobile {
    display: block;
  }
}
</style>
