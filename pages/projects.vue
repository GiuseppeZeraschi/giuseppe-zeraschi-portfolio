<template>
  <section class="v-projects u-section u-text--initial">
    <h1 class="u-text--huge u-margin-bottom--base u-text--center u-color-primary">
      Projects
    </h1>
    <h2 class="u-text--large u-margin-bottom--large u-text--center u-wrapper--small">
      Have a look at some of the projects I've had the pleasure of contributing to.
    </h2>
    <MediaStack
      v-for="(project, index) in projects"
      :key="index"
      :reverse="isReverseRow(index)"
      :button-href="project.buttonHref"
      :button-text="project.buttonText"
      class="v-projects__media-stack"
    >
      <template v-slot:image>
        <component :is="project.svg" class="v-projects__brand-logo" />
      </template>
      <template v-slot:text>
        <p class="u-margin-bottom--large">
          {{ project.copy }}
        </p>
      </template>
    </MediaStack>
  </section>
</template>

<script>
import MediaStack from '~/components/MediaStack/MediaStack.vue'
import WhirliLogoSvg from '~/assets/svg/brand-logos/whirli-logo.svg'
import ZumaLogoSvg from '~/assets/svg/brand-logos/zuma-logo.svg'
import InkoLogoSvg from '~/assets/svg/brand-logos/inko-logo.svg'

export default {
  head() {
    return {
      title: 'Giuseppe Zeraschi | Projects'
    }
  },
  components: {
    MediaStack,
    WhirliLogoSvg,
    ZumaLogoSvg,
    InkoLogoSvg
  },
  data() {
    return {
      projects: [
        {
          buttonHref: 'https://whirli.com/',
          buttonText: 'Visit Whirli',
          svg: 'WhirliLogoSvg',
          copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.'
        },
        {
          buttonHref: 'https://zumarestaurant.com/',
          buttonText: 'Visit Zuma',
          svg: 'ZumaLogoSvg',
          copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.'
        },
        {
          buttonHref: 'https://inkonitorestaurant.com/',
          buttonText: 'Visit Inko Nito',
          svg: 'InkoLogoSvg',
          copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.'
        }
      ]
    }
  },
  methods: {
    isReverseRow(index) {
      return (index + 1) % 2 === 0;
    }
  }
}
</script>

<style lang="scss">
.v-projects {

  &__media-stack {

    &:not(:first-child) {

      @media (min-width: $breakpoint-desk) {
        padding-top: $spacing-huge;
      }

    }

    &:not(:last-child) {
      padding-bottom: $spacing-huge;
    }

  }

  &__brand-logo {
    width: 20rem;

    @media (min-width: $breakpoint-desk) {
      width: 25rem;
    }

  }

}
</style>
