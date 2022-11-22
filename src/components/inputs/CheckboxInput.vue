<script lang="ts">
export default {
  props: {
    class: String,
    id: String,
    checked: Boolean,
  },
  methods: {
    addClasses: function () {
      return "default-checkbox-input " + (this.class ? this.class : "");
    },
  },
};
</script>

<template>
  <input type="checkbox" :id="id" :checked="checked" :class="addClasses()" />
</template>

<style scoped>
.default-checkbox-input {
  -webkit-appearance: none;
  appearance: none;
  margin-right: 10px;
  width: 24px;
  height: 24px;
  border: 0.1px solid white;
  border-radius: 7px;
  place-content: center;
}
.default-checkbox-input::before {
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
.default-checkbox-input:checked::before {
  transform: scale(1);
}
</style>
