<template>
  <section class="v-index u-section">
    <Logo class="v-index__logo" size="huge" />
  </section>
</template>

<script>
import Logo from '~/components/Logo/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'Giuseppe Zeraschi | Web Developer'
    }
  },
}
</script>

<style lang="scss">
.v-index {
  align-items: center;
  display: flex;
  justify-content: center;

  &__logo {
    animation: float 6s ease-in-out infinite;
  }

}
</style>
