<template>
  <div class="v-success">
    <Status>
      Thanks for getting in touch. We'll get back to you as soon as possible!
    </Status>
  </div>
</template>

<script>
import Status from '~/components/Status/Status.vue'

export default {
  head() {
    return {
      title: 'Form Submission Successful'
    }
  },
  transition: 'fade',
  layout: 'plain',
  components: { Status }
}
</script>
