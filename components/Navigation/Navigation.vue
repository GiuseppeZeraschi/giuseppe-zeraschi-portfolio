<template>
    <nav
        v-if="$mq === 'desk' || mobileNavIsActive"
        :class="{ 'v-navigation--scrolled': pageIsScrolled }"
        class="v-navigation"
    >
        <ul class="v-navigation__links u-wrapper">
            <li
                v-if="!mobileNavIsActive"
                @click="closeMobileNav()"
                class="v-navigation__logo"
            >
                <nuxt-link to="/" class="v-navigation__link">
                    <Logo />
                </nuxt-link>
            </li>
            <li
                v-for="(mobileNavLink, index) in mobileNavLinks"
                :key="index"
                @click="closeMobileNav()"
                class="v-navigation__item u-text--huge-alt"
            >
                <nuxt-link
                    :to="`/${mobileNavLink.to}`"
                    class="v-navigation__link"
                >
                    {{ mobileNavLink.text }}
                </nuxt-link>
            </li>
            <SocialLinks class="v-navigation__social-links" />
        </ul>
    </nav>
</template>

<script>
import Logo from '~/components/Logo/Logo.vue'
import SocialLinks from '~/components/Social/SocialLinks.vue'

export default {
    components: {
        Logo,
        SocialLinks
    },
    props: {
        pageIsScrolled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mobileNavLinks: [
                {
                    text: 'Skills',
                    to: 'skills'
                },
                // TODO - Uncomment when work page is done
                // {
                //     text: 'Work',
                //     to: 'work'
                // },
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
    background-color: $grey-three;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: $z-index-mobile-nav;

    &__links {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
        padding-bottom: $spacing-large;
    }

    &__item {
        margin-bottom: $spacing-large;

        &:last-of-type {
            margin-bottom: $spacing-huge;
        }
    }

    &__link {
        margin-left: -$spacing-tiny;
        padding: $spacing-tiny;

        &--active {
            color: $color-primary;
        }

    }

    &__social-links {
        margin-left: -$spacing-tiny;
    }

    @media (min-width: $breakpoint-desk) {
        background-color: $grey-two;
        height: $top-panel-height;
        position: fixed;
        transition: box-shadow .2s ease-in-out;

        &--scrolled {
            box-shadow: 0 1px 3px rgba($black, 0.4);
        }
        
        .v-navigation__links {
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
            padding-bottom: 0;
        }

        .v-navigation__logo {
            margin-right: auto;
            position: initial;
        }

        .v-navigation__item {
            font-size: 1.8rem;
            letter-spacing: .1rem;
            margin-bottom: 0;
            margin-right: $spacing-base;
        }

        &__link {
            transition: text-shadow .2s ease-in-out;

            &:hover:not(.v-navigation__link--active) {
                text-shadow: 0 0 3px $color-primary, 0 0 6px $color-primary-light;
            }

        }

    }
}
</style>
