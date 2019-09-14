<template>
    <div
        class="v-hamburger"
        v-if="$mq === 'mobile'"
        @click="toggleMobileNav()"
    >
        <span
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
// Animation from https://codepen.io/designcouch/pen/Atyop
.v-hamburger {
    cursor: pointer;
    margin-right: -$spacing-tiny;
    padding: $spacing-tiny;
    position: absolute;
    right: $spacing-base;
    top: $spacing-base;
    width: 54px;
    z-index: $z-index-hamburger;

    &:hover .v-hamburger__bar {
        box-shadow: 0 0 3px $color-secondary, 0 0 $spacing-tiny $color-tertiary;
    }

    &__bar {
        background-color: $color-white;
        display: block;
        height: 5px;
        margin-bottom: 10px;
        transition: all .2s ease-in-out;
        width: 100%;

        &:nth-child(1) {
            top: 0px;
            -webkit-transform-origin: right center;
            -moz-transform-origin: right center;
            -o-transform-origin: right center;
            transform-origin: right center;
        }

        &:nth-child(2) {
            top: 18px;
            -webkit-transform-origin: right center;
            -moz-transform-origin: right center;
            -o-transform-origin: right center;
            transform-origin: right center;
        }

        &:nth-child(3) {
            margin-bottom: 0;
            top: 36px;
            -webkit-transform-origin: right center;
            -moz-transform-origin: right center;
            -o-transform-origin: right center;
            transform-origin: right center;
        }

        &--active {
            background-color: $color-secondary;

            &:nth-child(1) {
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
                top: -3px;
                left: 8px;
            }

            &:nth-child(2) {
                width: 0%;
                opacity: 0;
            }

            &:nth-child(3) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
                top: 39px;
                left: 8px;
            }

        }

    }

}
// .v-hamburger {
//     cursor: pointer;
//     margin-right: -$spacing-tiny;
//     padding: $spacing-tiny;
//     position: absolute;
//     right: $spacing-base;
//     top: $spacing-base;
//     width: 65px;
//     z-index: $z-index-hamburger;

//     &:hover .v-hamburger__bar {
//         box-shadow: 0 0 3px $color-secondary, 0 0 $spacing-tiny $color-tertiary;
//     }

//     &__bar {
//         background-color: $color-white;
//         height: 5px;
//         margin-bottom: 10px;
//         transition: box-shadow .2s ease-in-out;
//         width: 100%;

//         &:last-child {
//             margin-bottom: 0;
//         }

//         &--active {
//             background-color: $color-secondary;
//         }
//     }
// }
</style>
