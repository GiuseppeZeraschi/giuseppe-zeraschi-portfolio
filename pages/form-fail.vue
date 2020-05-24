<template>
  <div class="v-success">
    <Status button-text="Contact Form" to="/contact">
      Unfortunately the form submission failed. Please try again
    </Status>
  </div>
</template>

<script>
import Status from '~/components/Status/Status.vue'

export default {
  head() {
    return {
      title: 'Form Submission Failed'
    }
  },
  layout: 'plain',
  components: { Status }
}
</script>
