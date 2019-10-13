<template>
  <div class="v-index">
    <Logo class="v-index__logo" :height="logoHeight" />
  </div>
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
  computed: {
    logoHeight() {
      return this.$mq === 'mobile' ? 180 : 400
    }
  }
}
</script>

<style lang="scss">
.v-index {
  align-items: center;
  display: flex;
  justify-content: center;

  &__logo {
    animation: float 6s ease-in-out infinite;
    padding: $spacing-large;
  }

}
</style>
