<template>
  <div class="v-logo">
    <img src="/z-logo.svg" alt="Z Logo" :height="`${height}px`" width="auto">
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 50
    }
  }
}
</script>
