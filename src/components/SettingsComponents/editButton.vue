<script lang="ts">
import TextInput from "../inputs/TextInput.vue";
import editPopup from "./editPopup.vue";
export default {
  props: {
    property: String,
    msg: String,
    id: String,
    value: String,
    type: {
      type: String,
      validator(val: string) {
        // The value must match one of these strings
        return ["text", "password"].includes(val);
      },
    },
  },
  components: { TextInput, editPopup },
  methods: {
    openPopup: function () {
      this.type === "text"
        ? document
            .getElementById("editpopup-" + this.id)
            ?.classList.add("active")
        : (location.href = "https://www.youtube.com/watch?v=L_jWHffIx5E");
    },
  },
};
</script>

<template>
  <editPopup :property="property" :msg="msg" :id="id" :type="type" />
  <div class="editbutton-container">
    <div class="editbutton-data">
      <h4>{{ property?.toUpperCase() }}</h4>
      <h3 :id="property?.toLocaleLowerCase() + `-text`">
        {{ type === "text" ? value : "**********" }}
      </h3>
    </div>
    <button v-on:click="openPopup()">Editar</button>
  </div>
</template>

<style scoped>
.editbutton-container {
  display: flex;
  width: 100%;
  padding: 5px;
  color: white;
  justify-content: space-between;
}
.editbutton-data {
  display: flex;
  flex-direction: column;
}
.editbutton-data h4 {
  color: #ffffffb3;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
}

.editbutton-container button {
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 15px;
  font-size: 15px;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
}
.editbutton-container button:hover {
  background-color: var(--secondary-color);
}
</style>
