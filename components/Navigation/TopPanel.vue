<template>
    <div
        :class="{ 'v-top-panel--scrolled': pageIsScrolled }"
        class="v-top-panel"
    />
</template>

<script>
export default {
    props: {
        pageIsScrolled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.v-top-panel {
    background-color: $color-primary;
    height: 10.5rem;
    position: fixed;
    transition: box-shadow .1s ease-in-out;
    width: 100%;

    &--scrolled {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    @media (min-width: $breakpoint-desk) {
        display: none;
    }

}
</style>
