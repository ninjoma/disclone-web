TODO disable button when not filled form register FIX .lr-form > label
:not(.lr-checkbox > *)
<script setup lang="ts">
import TextInput from "../components/inputs/TextInput.vue";
import CheckboxInput from "../components/inputs/CheckboxInput.vue";
import { checkEmail } from "../assets/scripts.js";

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
window.addEventListener("input", (e) => {
  if (registerComps.includes(e.target?.id)) {
    const rButton = document.getElementById("r-button");
    if (checkInputFields()) {
      rButton.disabled = false;
    } else {
      rButton.disabled = true;
    }
  }
});

function checkInputFields() {
  const rTos = document.getElementById("r-tos"),
    rEmail = document.getElementById("r-email"),
    rPassword = document.getElementById("r-password"),
    rUsername = document.getElementById("r-username");
  return (
    rTos?.checked &&
    checkEmail(rEmail?.value.trim()) &&
    rPassword?.value.trim() !== "" &&
    rUsername?.value.trim() !== ""
  );
}

async function createAccount() {
  if(!checkInputFields()) return;
  const rEmail = document.getElementById("r-email"),
    rPassword = document.getElementById("r-password"),
    rUsername = document.getElementById("r-username");
    let res = await fetch(import.meta.env.VITE_API_URL + "AddEditAsync", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: `{
    email: ${rEmail?.value.trim()},
    username: ${rUsername?.value.trim()},
    password: ${rPassword?.value.trim()},
    }`,
  });
  res.json().then((data) => {
    console.log(data);
  });
}
</script>

<template>
  <main>
    <!-- LOGIN CONTAINER -->

    <div id="l-container" class="active">
      <div class="l-content">
        <div class="lr-header">
          <h1 class="onlyMobile">Disclone</h1>
          <h1>¡Bienvenido!</h1>
          <h4>¡Estamos encantados de verte de nuevo!</h4>
        </div>
        <div class="lr-form">
          <div>
            <label for="l-email">EMAIL O NÚMERO DE TELÉFONO</label>
            <TextInput id="l-email" />
          </div>
          <div>
            <label for="l-password">CONTRASEÑA</label>
            <TextInput id="l-password" type="password" />
          </div>
          <a href="#">¿Has olvidado tu contraseña?</a>
          <button>Iniciar Sesión</button>
          <div>
            ¿Necesitas una cuenta?
            <a v-on:click="changePage()">Regístrate</a>
          </div>
        </div>
      </div>
    </div>

    <!-- REGISTER CONTAINER -->
    <div id="r-container">
      <div class="r-content">
        <div class="lr-header">
          <h1 class="onlyMobile">Disclone</h1>
          <h1>Crear Cuenta</h1>
        </div>
        <div class="lr-form">
          <div>
            <label for="r-email">EMAIL</label>
            <TextInput id="r-email" />
          </div>
          <div>
            <label for="r-username">NOMBRE DE USUARIO</label>
            <TextInput id="r-username" />
          </div>
          <div>
            <label for="r-password">CONTRASEÑA</label>
            <TextInput id="r-password" type="password" />
          </div>
          <div class="lr-checkbox">
            <CheckboxInput id="r-tos" />
            <label for="r-tos">
              He leido y aceptado los Términos de Servicios y Políticas de
              Privacidad de Disclone
            </label>
          </div>
          <button id="r-button" disabled v-on:click="createAccount()">Continuar</button>
          <div>
            <a v-on:click="changePage()">¿Ya tienes cuenta?</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.active {
  opacity: 1 !important;
  z-index: 1;
}
#r-container,
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

.r-content {
  height: 400px;
}
.l-content {
  height: 340px;
}
.r-content,
.l-content {
  background-color: var(--dark-color-1);
  border-radius: 5px;
  box-sizing: content-box;
  width: 416px;
  padding: 32px;
  text-align: center;
  font-weight: bold;
}
.lr-header h1 {
  color: white;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 8px;
}
.lr-header h4 {
  color: white;
}
.lr-form {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
}
.lr-form div {
  width: 100%;
  text-align: left;
}
.lr-form a {
  text-decoration: none;
  color: var(--light-color);
  cursor: pointer;
}
.lr-form a:hover {
  text-decoration: underline;
}
.lr-form button {
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

.lr-form button:hover {
  background-color: var(--secondary-color);
}

.lr-form button:disabled {
  cursor: not-allowed;
  background-color: gray;
}

.lr-form label:not(.lr-checkbox > *) {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}
.lr-checkbox {
  display: flex;
  align-items: center;
}
.lr-checkbox > * {
  cursor: pointer;
}

.lr-checkbox > label {
  font-size: 12px;
}

.onlyMobile {
  display: none;
}

@media screen and (max-height: 464px) {
  #r-container {
    align-items: initial;
  }
}
@media screen and (max-height: 404px) {
  #l-container {
    align-items: initial;
  }
}

@media screen and (max-width: 480px) {
  #lr-container,
  #r-container {
    min-height: 100vh;
    height: auto;
  }
  .l-content,
  .r-content {
    border-radius: 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .onlyMobile {
    display: block;
  }
}
</style>
