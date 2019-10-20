<template>
  <div class="v-default">
    <TopPanel />
    <Navigation />
    <Hamburger />
    <main class="v-default__page u-wrapper">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation/Navigation.vue'
import TopPanel from '~/components/Navigation/TopPanel.vue'
import Hamburger from '~/components/Navigation/Hamburger.vue'
import Footer from '~/components/Footer/Footer.vue'

export default {
  components: {
    Navigation,
    TopPanel,
    Hamburger,
    Footer
  },
  computed: {
    isDeskOrAbove() {
      return this.$mq === 'desk'
    }
  },
  watch: {
    isDeskOrAbove() {
      this.$store.commit('closeMobileNav')
    }
  }
}
</script>

<style lang="scss">
.v-default {

  &__page {
    padding-top: $top-panel-height;
  }

}
</style>
