<script lang="ts">
import TextInput from "../inputs/TextInput.vue";
import CheckboxInput from "../inputs/CheckboxInput.vue";
import { checkEmail } from "../../assets/scripts.js";

export default {
  components: {
    TextInput,
    CheckboxInput,
  },
  methods: {
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
    checkInputFields: function () {
      const rTos = document.getElementById("r-tos") as HTMLInputElement | null;
      const rEmail = document.getElementById(
        "r-email"
      ) as HTMLInputElement | null;
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
    },

    createAccount: async function () {
      if (!this.checkInputFields()) return;
      const rEmail = document.getElementById(
        "r-email"
      ) as HTMLInputElement | null;
      const rPassword = document.getElementById(
        "r-password"
      ) as HTMLInputElement | null;
      const rUsername = document.getElementById(
        "r-username"
      ) as HTMLInputElement | null;
      let res = await fetch(
        import.meta.env.VITE_API_URL + "Users/AddEditAsync",
        {
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
        }
      );
      if (res.status == 200) {
        this.changePage();
      }
    },
    toggleButton: function (e: any) {
      if (registerComps.includes(e.target?.id)) {
        const rButton = document.getElementById(
          "r-button"
        ) as HTMLInputElement | null;
        if (this.checkInputFields() && rButton) {
          rButton.disabled = false;
        } else if (rButton) {
          rButton.disabled = true;
        }
      }
    },
  },
};
const registerComps = ["r-tos", "r-email", "r-password", "r-username"];
</script>

<template>
  <div id="r-container">
    <div class="r-content">
      <div class="r-header">
        <h1 class="r-onlyMobile">Disclone</h1>
        <h1>Crear Cuenta</h1>
      </div>
      <div class="r-form" @input="toggleButton">
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
        <div class="r-checkbox">
          <CheckboxInput id="r-tos" />
          <label for="r-tos">
            He leido y aceptado los Términos de Servicios y Políticas de
            Privacidad de Disclone
          </label>
        </div>
        <button id="r-button" disabled v-on:click="createAccount()">
          Continuar
        </button>
        <div>
          <a v-on:click="changePage()">¿Ya tienes cuenta?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#r-container {
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
.r-content {
  background-color: var(--dark-color-1);
  border-radius: 5px;
  box-sizing: content-box;
  width: 416px;
  padding: 32px;
  text-align: center;
  font-weight: bold;
}
.r-header h1 {
  color: white;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 8px;
}
.r-header h4 {
  color: white;
}
.r-form {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
}
.r-form div {
  width: 100%;
  text-align: left;
}
.r-form a {
  text-decoration: none;
  color: var(--light-color);
  cursor: pointer;
}
.r-form a:hover {
  text-decoration: underline;
}
.r-form button {
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

.r-form button:hover {
  background-color: var(--secondary-color);
}

.r-form button:disabled {
  cursor: not-allowed;
  background-color: gray;
}

.r-form label:not(.r-checkbox > *) {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}
.r-checkbox {
  display: flex;
  align-items: center;
}
.r-checkbox > * {
  cursor: pointer;
}

.r-checkbox > label {
  font-size: 12px;
}

.r-onlyMobile {
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
  #r-container {
    min-height: 100vh;
    height: auto;
  }
  .r-content {
    border-radius: 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .r-onlyMobile {
    display: block;
  }
}
</style>
