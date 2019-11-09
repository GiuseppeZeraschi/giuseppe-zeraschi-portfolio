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
$_logo-dimensions-map: (
  // Add more sizes if required
    'base':
    (
      height: 70px,
      width: 70px
    ),
    'huge':
    (
      height: 220px,
      width: 220px,
      responsive: (
        device: (
          height: 400px,
          width: 400px
        )
      )
    )
);

.v-logo {
  width: auto;

  @each $_size, $_dimensions-map in $_logo-dimensions-map {
    $_responsive-map: map-get($_dimensions-map, 'responsive');
    &--#{$_size} {
      height: map-get($_dimensions-map, 'height');
      width: map-get($_dimensions-map, 'width');
      @if $_responsive-map {
        @each $_responsize-size, $_responsive-dimensions-map in $_responsive-map
        {
          @media (min-width: $breakpoint-desk) {
            height: map-get($_responsive-dimensions-map, 'height');
            width: map-get($_responsive-dimensions-map, 'width');
          }
        }
      }
    }
  }

}
</style>