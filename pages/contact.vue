<template>
  <div class="v-contact u-section">
    <ContactForm />
  </div>
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
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
      }
    }
  }
}
</script>

<style lang="scss">
.v-contact {
  display: flex;
  justify-content: center;
}
</style>
