<template>
  <div>
    <div class="u-wrapper">
      <Navbar />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navigation/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
