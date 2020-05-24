<template>
    <div class="v-error">
        <Status>
            Oops! Looks like this page doesn't exist...
        </Status>
    </div>
</template>

<script>
import Status from '~/components/Status/Status.vue'

export default {
    layout: 'plain',
    head() {
        return {
            title: 'Page not found...'
        }
    },
    components: { Status },
}
</script>
