TODO disable button when not filled form register FIX .lr-form > label
:not(.lr-checkbox > *)
<script setup lang="ts">
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
            <input class="lr-input" type="text" id="l-email" />
          </div>
          <div>
            <label for="l-password">CONTRASEÑA</label>
            <input class="lr-input" type="password" id="l-password" />
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
            <input class="lr-input" type="text" id="r-email" />
          </div>
          <div>
            <label for="r-username">NOMBRE DE USUARIO</label>
            <input class="lr-input" type="text" id="r-username" />
          </div>
          <div>
            <label for="r-password">CONTRASEÑA</label>
            <input
              class="lr-input"
              v-model="algo"
              type="password"
              id="r-password"
            />
          </div>
          <div class="lr-checkbox">
            <input type="checkbox" id="r-tos" />
            <label for="r-tos"
              >He leido y aceptado los Términos de Servicios y Políticas de
              Privacidad de Disclone</label
            >
          </div>
          <button>Continuar</button>
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
  display: flex !important;
}
#r-container,
#l-container {
  display: none;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.r-content {
  height: 480px;
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
  gap: 10px;
  color: white;
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
.lr-form > label :not(.lr-checkbox > *) {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
}
.lr-checkbox {
  display: flex;
  align-items: center;
}
.lr-checkbox > * {
  cursor: pointer;
}
.lr-checkbox > input {
  -webkit-appearance: none;
  appearance: none;
  margin-right: 10px;
  width: 24px;
  height: 24px;
  border: 0.1px solid white;
  border-radius: 7px;
  place-content: center;
}
.lr-checkbox > input::before {
  content: "";
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxMiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTIgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZD0iTTQuNTc1IDguOTc3cy0uNDA0LS4wMDctLjUzNi0uMTY1TC4wNTcgNS42NGwuODI5LTEuMjI3TDQuNDcgNy4yNjggMTAuOTIxLjA4NmwuOTIzIDEuMTAzLTYuODYzIDcuNjRjLS4xMzQtLjAwMy0uNDA2LjE0OC0uNDA2LjE0OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPg0KPC9zdmc+");
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--main-color);
}
.lr-checkbox > input:checked::before {
  transform: scale(1);
}
.lr-checkbox > label {
  font-size: 12px;
}
.lr-input {
  border-radius: 3px;
  border: 0;
  height: 40px;
  padding: 10px;
  color: white;
  background-color: var(--dark-color-2);
  width: 100%;
}

.lr-input:focus-visible {
  outline: none;
}
.onlyMobile {
  display: none;
}

@media screen and (max-height: 545px) {
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
