<script lang="ts">
import TextInput from "../inputs/TextInput.vue";

export default {
  props: ["property", "msg", "id", "type"],
  components: { TextInput },
  methods: {
    closePopup: function () {
      document
        .getElementById("editpopup-" + this.id)
        ?.classList.remove("active");
    },

    action: async function () {
      let value = document.getElementById("editpopup-input-" + this.id).value;
      console.log(this.$parent?.$cookies.get("jwt"));
      let result = await this.getUserInfo();
      let otherProperty = this.property === "email" ? "userName" : "email";
      let otherValue = result[otherProperty];

      let res = await fetch(
        import.meta.env.VITE_API_URL + "User/AddEditAsync",
        {
          method: "POST",
          headers: new Headers({
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$parent?.$cookies?.get("jwt"),
          }),
          body: JSON.stringify({
            isActive: result.isActive,
            image: result.image,
            id: result.id,
            [this.property]: value.trim(),
            [otherProperty]: otherValue,
          }),
        }
      );
      res.json().then((r) => {
        if (res.status === 200) {
          location.reload();
        }
      });
    },

    getUserInfo: async function () {
      let res = await fetch(import.meta.env.VITE_API_URL + "User/getUserInfo", {
        method: "GET",
        headers: new Headers({
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$parent?.$cookies?.get("jwt"),
        }),
      });
      return res.json().then((result: any) => {
        return result;
      });
    },
  },
};
</script>

<template>
  <div class="editpopup-container" :id="`editpopup-` + id">
    <div class="editpopup-content">
      <div class="editpopup-header">
        <h1>Cambia tu {{ property }}</h1>
        <h4>{{ msg }}</h4>
      </div>
      <div class="editpopup-form">
        <div>
          <label :for="`editpopup-input-` + id">{{
            property.toUpperCase()
          }}</label>
          <TextInput
            :id="`editpopup-input-` + id"
            :type="type === `password` ? `password` : `text`"
          />
        </div>
        <!-- <div>
          <label for="editpopup-currentpassword">CONTRASEÑA ACTUAL</label>
          <TextInput :id="`editpopup-currentpassword-` + id" type="password" />
        </div> -->
      </div>
      <div class="editpopup-buttons">
        <button class="editpopup-cancel" v-on:click="closePopup()">
          Cancelar
        </button>
        <button class="editpopup-accept" v-on:click="action()">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editpopup-container {
  display: flex;
  position: fixed;
  opacity: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  justify-content: center;
  height: 100vh;
  align-items: center;
  transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
  background-color: hsla(0, 0%, 0%, 0.5);
}
.editpopup-content {
  background-color: var(--dark-color-1);
  border-radius: 5px;
  box-sizing: content-box;
  width: 440px;
  height: fit-content;
  padding: 32px;
  text-align: center;
  font-weight: bold;
}
.editpopup-header h1 {
  color: white;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 8px;
}
.editpopup-header h4 {
  color: white;
}
.editpopup-form {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  color: #ffffffb3;
}
.editpopup-form div {
  width: 100%;
  text-align: left;
}
.editpopup-form label {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}
.editpopup-buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
.editpopup-accept {
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 15px;
  font-size: 15px;
  width: 50%;
  cursor: pointer;
  margin-top: 5px;
  transition: background-color 0.1s ease-in-out;
}
.editpopup-cancel {
  background-color: grey;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 15px;
  font-size: 15px;
  width: 50%;
  cursor: pointer;
  margin-top: 5px;
  transition: background-color 0.1s ease-in-out;
}
.editpopup-accept:hover {
  background-color: var(--secondary-color);
}
.editpopup-cancel:hover {
  background-color: var(--red-color-1);
}
</style>
