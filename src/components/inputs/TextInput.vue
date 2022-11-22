<script lang="ts">
export default {
  props: {
    class: String,
    type: {
      type: String,
      validator(val: string) {
        // The value must match one of these strings
        return ["text", "password"].includes(val);
      },
    },
    id: String,
    value: String,
    placeholder: String,
  },
  methods: {
    addClasses: function () {
      return "default-text-input " + (this.class ? this.class : "");
    },
  },
};
</script>

<template>
  <input
    :class="addClasses()"
    :type="type"
    :id="id"
    :value="value"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.default-text-input {
  border-radius: 3px;
  border: 0;
  height: 40px;
  padding: 10px;
  color: white;
  background-color: var(--dark-color-2);
  width: 100%;
}

.default-text-input:focus-visible {
  outline: none;
}
</style>
