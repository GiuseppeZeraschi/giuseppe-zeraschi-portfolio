<template>
  <div class="v-default">
    <TopPanel :page-is-scrolled="pageIsScrolled"/>
    <Navigation :page-is-scrolled="pageIsScrolled"/>
    <Hamburger />
    <main class="v-default__page u-wrapper">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
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
  data() {
    return {
      pageIsScrolled: false
    }
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
  },
  mounted() {
    window.addEventListener('scroll', throttle(this.handleScroll, 300))
  },
  destroyed() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 300))
  },
  methods: {
    handleScroll() {
      this.pageIsScrolled = window.pageYOffset > 0
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
