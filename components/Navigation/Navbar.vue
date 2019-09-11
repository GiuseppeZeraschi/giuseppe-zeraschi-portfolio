<template>
    <nav class="v-navbar">
        <ul class="v-navbar__links u-text--large">
            <li class="v-navbar__logo">
                <nuxt-link to="/" class="v-navbar__link">
                    <Logo />
                </nuxt-link>
            </li>
            <li class="v-navbar__item">
                <nuxt-link to="/skills" class="v-navbar__link">
                    Skills
                </nuxt-link>
            </li>
            <li class="v-navbar__item">
                <nuxt-link to="/work" class="v-navbar__link">
                    Work
                </nuxt-link>
            </li>
            <li class="v-navbar__item">
                <nuxt-link to="/projects" class="v-navbar__link">
                    Projects
                </nuxt-link>
            </li>
            <li class="v-navbar__item">
                <nuxt-link to="/contact" class="v-navbar__link">
                    Contact
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import Logo from '~/components/Logo/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss">
.v-navbar {
    padding-bottom: $spacing-base;
    padding-top: $spacing-base;
    
    &__links {
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }

    &__logo {
        display: inline-flex;
        margin-right: auto;
    }

    &__item {

        &:not(:first-child) {
            margin-left: $spacing-base;
        }

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
}
</style>
