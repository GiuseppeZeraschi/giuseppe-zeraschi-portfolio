<template>
  <section class="v-contact u-section">
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from '~/components/Form/ContactForm.vue'

export default {
  head() {
    return {
      title: 'Giuseppe Zeraschi | Contact'
    }
  },
  components: {
    ContactForm
  },
}
</script>

<style lang="scss">
.v-contact {
  display: flex;
  justify-content: center;
}
</style>
