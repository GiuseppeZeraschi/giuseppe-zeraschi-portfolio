<template>
  <div class="v-social-links">
    <a v-for="(link, index) in socialLinks" :key="index" class="v-social-links__link" :href="link.href" target="_blank">
      <component :is="link.svg" class="v-social-links__icon" />
    </a>
  </div>
</template>

<script>
import GithubSquareSvg from '~/assets/svg/icons/github-square.svg'
import LinkedinSvg from '~/assets/svg/icons/linkedin.svg'

export default {
  components: {
    GithubSquareSvg,
    LinkedinSvg
  },
  data() {
    return {
      socialLinks: [
        { svg: GithubSquareSvg, href: 'https://github.com/GiuseppeZeraschi' },
        { svg: LinkedinSvg, href: 'https://www.linkedin.com/in/giuseppe-zeraschi-25a911ba/' }
      ]
    }
  }
}
</script>

<style lang="scss">
.v-social-links {
  line-height: 0;

  &__link {
    display: inline-block;
    padding: $spacing-tiny;

    &:not(:first-of-type) {
      margin-left: $spacing-small;
    }

    &:last-of-type {
      margin-right: -$spacing-tiny;
    }
  }

  &__icon {
    color: $color-primary-light;
    height: 3.2rem;
    transition: color .2s ease-in-out;

    @media (min-width: $breakpoint-desk) {
      &:hover {
        color: $color-primary;
      }
    }

    @media (max-width: $breakpoint-desk) {
      height: $spacing-large;
    }
  }
}
</style>
