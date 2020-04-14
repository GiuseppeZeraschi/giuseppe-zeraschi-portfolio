<template>
  <section class="v-contact u-section">
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from '~/components/Form/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  head() {
    return {
      title: 'Giuseppe Zeraschi | Contact'
    }
  },
}
</script>

<style lang="scss">
.v-contact {
  display: flex;
  justify-content: center;
}
</style>
