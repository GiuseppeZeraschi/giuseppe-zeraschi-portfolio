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
  computed: {
    logoHeight() {
      return this.$mq === 'mobile' ? 150 : 400
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

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>
