<template>
  <div class="v-logo">
    <img
      src="/z-logo.svg"
      alt="Z Logo"
      :height="`${height}px`"
      width="auto"
      class="v-logo__image"
    >
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 70
    }
  }
}
</script>

<style lang="scss">
.v-logo {
  &__image {
    display: block;
  }
}
</style>
