<template>
    <transition name="fade">
        <nav
            v-if="$mq === 'desk' || mobileNavIsActive"
            :class="navClasses"
            class="v-navigation"
        >
            <ul class="v-navigation__links u-wrapper">
                <li
                    @click="closeMobileNav()"
                    class="v-navigation__logo"
                >
                    <nuxt-link to="/" class="v-navigation__link">
                        <Logo :height="logoHeight"/>
                    </nuxt-link>
                </li>
                <li
                    v-for="(mobileNavLink, index) in mobileNavLinks"
                    :key="index"
                    @click="closeMobileNav()"
                    class="v-navigation__item"
                >
                    <nuxt-link
                        :to="`/${mobileNavLink.to}`"
                        class="v-navigation__link"
                    >
                        {{ mobileNavLink.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </transition>
</template>

<script>
import Logo from '~/components/Logo/Logo.vue'

export default {
    components: {
        Logo
    },
    data() {
        return {
            mobileNavLinks: [
                {
                    text: 'Skills',
                    to: 'skills'
                },
                {
                    text: 'Work',
                    to: 'work'
                },
                {
                    text: 'Projects',
                    to: 'projects'
                },
                {
                    text: 'Contact',
                    to: 'contact'
                },
            ]
        }
    },
    computed: {
        mobileNavIsActive() {
            return this.$store.state.mobileNavIsActive
        },
        logoHeight() {
            if (this.$mq === 'desk') return 50
        },
        navClasses() {
            return {
                'v-navigation--desk': this.$mq === 'desk',
            }
        }
    },
    methods: {
        closeMobileNav() {
            this.$store.commit('closeMobileNav')
        }
    }
}
</script>

<style lang="scss">
.v-navigation {
    background-color: $color-quaternary;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    z-index: $z-index-mobileNav;

    &__logo {
        display: flex;
        left: $spacing-base;
        margin-left: -$spacing-tiny;
        position: absolute;
        top: $spacing-base;
    }

    &__links {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
    }

    &__item {
        font-size: 32px;
        letter-spacing: 2px;
        margin-bottom: $spacing-large;
    }

    &__link {
        padding: $spacing-tiny;
        transition: all .2s ease-in-out;

        &:hover {
            text-shadow: 0 0 3px $color-secondary, 0 0 6px $color-tertiary;
        }

        &--active {
            color: $color-secondary;
        }

    }

    &--desk {
        background-color: $color-primary;
        padding-bottom: $spacing-base;
        padding-top: $spacing-base;
        position: initial;
        
        .v-navigation__links {
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
        }

        .v-navigation__logo {
            margin-right: auto;
            position: initial;
        }

        .v-navigation__item {
            font-size: 18px;
            letter-spacing: 1px;
            margin-bottom: 0;

            &:not(:first-child) {
                margin-left: $spacing-base;
            }

        }

    }
}
</style>
