<script setup lang="ts">
import editButton from "@/components/SettingsComponents/editButton.vue";
</script>
<template>
  <div class="settings-container">
    <div class="settings-info">
      <div class="settings-topbuttons">
        <button class="settings-logout">
          <i class="bi bi-box-arrow-left"></i>
          Cerrar Sesión
        </button>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRf6AzB4fjsezZG0e9DTpAwci9v8hvHOzhZ2XvwR6&s"
        alt=""
      />
      <editButton
        value="Juan"
        property="nombre de usuario"
        msg="Introduce un nuevo
  nombre de usuario y tu contraseña existente"
        id="usernameEdit"
        type="text"
      />
      <editButton
        value="Roberto"
        property="email"
        msg="Introduce un nuevo
  email y tu contraseña existente"
        id="emailEdit"
        type="text"
      />
      <editButton
        value="Juan"
        property="contraseña"
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
