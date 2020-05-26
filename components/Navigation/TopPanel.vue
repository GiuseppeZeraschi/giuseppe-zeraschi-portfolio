<template>
    <div
        :class="{ 'v-top-panel--scrolled': pageIsScrolled }"
        class="v-top-panel"
    >
        <nuxt-link v-if="$route.path !== '/'" class="v-top-panel__logo" to="/">
            <Logo size="small" />
        </nuxt-link>
    </div>
</template>

<script>
import Logo from '~/components/Logo/Logo.vue'

export default {
    components: { Logo },
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
    align-items: center;
    background-color: $grey-two;
    display: flex;
    height: 10.5rem;
    justify-content: space-between;
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

    &__logo {
        left: $spacing-base;
        margin-left: -$spacing-tiny;
        padding: $spacing-tiny;
        position: absolute;
    }

}
</style>
