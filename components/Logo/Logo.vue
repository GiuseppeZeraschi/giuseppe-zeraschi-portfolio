<template>
  <LogoSvg
    :class="`v-logo--${size}`"
    class="v-logo"
  />
</template>

<script>
import LogoSvg from '~/assets/svg/logo.svg'

export default {
  components: {
    LogoSvg
  },
  props: {
    size: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style lang="scss">
.v-logo {
  width: auto;

  &--small {
    height: 50px;
  }

  &--base {
    height: 60px;
  }

  &--huge {
    height: 220px;

    @media (min-width: $breakpoint-desk) {
      height: 400px;
    }

  }

}
</style>