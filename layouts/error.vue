<template>
    <div class="v-error u-wrapper">
        <h1 class="v-error__title">Oops! Looks like this page doesn't exist...</h1>
        <nuxt-link class="u-button" to="/">Back to home</nuxt-link>
    </div>
</template>

<script>
export default {
    layout: 'plain',
    head() {
        return {
            title: 'Page not found...'
        }
    },
}
</script>

<style lang="scss">
.v-error {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;

    &__title {
        font-size: 32px;
        margin-bottom: $spacing-large;
    }
}
</style>
