<template>
  <!-- <button :class="[size, mode]">
    <slot></slot>
  </button> -->
  <button :class="[mode]"><slot></slot></button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "fill",
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;

  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  margin: 0 5px;
}

button.fill,
a.fill {
  background-color: var(--primary-color-1);
  border: 2px solid var(--primary-color-1);
  color: white;
}
button.fill:hover,
a.fill:hover {
  background-color: var(--primary-color-2);
  border: 2px solid var(--primary-color-2);
}
button.outline,
a.outline {
  border: 2px solid var(--primary-color-1);
  color: var(--primary-color-1);
}
button.outline:hover,
a.outline:hover {
  background-color: var(--primary-color-3);
}
</style>
