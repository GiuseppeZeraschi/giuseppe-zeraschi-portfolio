<template>
    <div
        class="v-hamburger"
        v-if="$mq === 'mobile'"
        @click="toggleMobileNav()"
    >
        <div
            v-for="(bar, index) in bars" :key="index"
            :class="hamburgerBarClasses"
            class="v-hamburger__bar"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            bars: 3
        }
    },
    computed: {
        hamburgerBarClasses() {
            return {
                'v-hamburger__bar--active': this.$store.state.mobileNavIsActive
            }
        }
    },
    methods: {
        toggleMobileNav() {
            this.$store.commit('toggleMobileNav')
        }
    }
}
</script>

<style lang="scss">
.v-hamburger {
    cursor: pointer;
    margin-right: -$spacing-tiny;
    padding: $spacing-tiny;
    position: absolute;
    right: $spacing-base;
    top: $spacing-base;
    width: 51px;
    z-index: $z-index-hamburger;

    &:hover .v-hamburger__bar {
        box-shadow: 0 0 3px $color-secondary, 0 0 $spacing-tiny $color-tertiary;
    }

    &__bar {
        background-color: $color-white;
        height: 4px;
        margin-bottom: $spacing-tiny;
        transition: box-shadow .2s ease-in-out;
        width: 100%;

        &:last-child {
            margin-bottom: 0;
        }

        &--active {
            background-color: $color-secondary;
        }
    }
}
</style>
