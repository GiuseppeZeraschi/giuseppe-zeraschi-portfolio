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
    background-color: $grey-two;
    height: 10.5rem;
    position: fixed;
    transition: box-shadow .2s ease-in-out;
    width: 100%;
    z-index: $z-index-top-panel;

    &--scrolled {
        box-shadow: 0 1px 3px $black;
    }

    @media (min-width: $breakpoint-desk) {
        display: none;
    }

}
</style>
