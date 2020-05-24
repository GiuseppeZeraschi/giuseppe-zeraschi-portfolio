<template>
    <div class="v-404">
        <transition name="fade">
            <Status>
                Oops! Looks like this page doesn't exist...
            </Status>
        </transition>
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
