<template>
  <div class="v-status">
    <h1 class="v-status__heading"><slot /></h1>
    <nuxt-link class="u-button" :to="to">{{ buttonText }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Back to Home'
    },
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss">
.v-status {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;

  &__heading {
    font-size: 3.2rem;
    margin-bottom: $spacing-large;
  }
}
</style>
