<template>
  <div>
    <Navigation />
    <Hamburger />
    <div class="u-wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation/Navigation.vue'
import Hamburger from '~/components/Navigation/Hamburger.vue'
import Footer from '~/components/Footer/Footer.vue'

export default {
  components: {
    Navigation,
    Hamburger,
    Footer
  },
  computed: {
    isDeskOrAbove() {
      return this.$mq !== 'mobile'
    }
  },
  watch: {
    isDeskOrAbove() {
      this.$store.commit('closeMobileNav')
    }
  }
}
</script>
