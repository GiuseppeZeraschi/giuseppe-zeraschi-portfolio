<template>
  <section class="v-projects u-section u-text--initial">
    <h1 class="u-text--gigantic u-margin-bottom--large u-text--center u-color-primary">
      Projects
    </h1>
    <h2 class="u-text--large u-color-light-grey-one u-margin-bottom--huge u-text--center u-wrapper--small">
      Have a look at some of the projects I've had the pleasure of contributing to as part of a team at
      <a class="u-color-primary u-underline" href="https://hexdigital.com/" target="_blank">Hex Digital</a>.
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
        <h3 class="v-projects__heading u-text--huge u-margin-bottom--large u-color-primary">
          {{ project.title }}
        </h3>
        <p v-for="(paragraph, index) in project.copy" :key="index" class="v-projects__paragraph">
          {{ paragraph }}
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
          title: 'Whirli',
          copy: [
            'Whirli is a Uk based toy subscription company. Their current website is a Vue Laravel build that I have been fortunate enough to work on pretty much full time since the start of my web development career.',
            'We recently rebuilt the website as a single page application with a Nuxt JS front end and a Laravel API.'
          ]
        },
        {
          buttonHref: 'https://zumarestaurant.com/',
          buttonText: 'Visit Zuma',
          svg: 'ZumaLogoSvg',
          title: 'Zuma',
          copy: [
            'Zuma is a high-end Japanese izakaya style restaurant with locations all around the world.',
            'The website has a Vue JS front end with a Wordpress CMS. Over the past two years I have contributed to maintaining the site and spent three months working on a project to ensure the site meets AA level accessibility.'
          ]
        },
        {
          buttonHref: 'https://inkonitorestaurant.com/',
          buttonText: 'Visit Inko Nito',
          svg: 'InkoLogoSvg',
          title: 'Inko Nito',
          copy: [
            'Inko Nito is a Japanese robatayaki restaurant with locations in London and Los Angeles.',
            'Their website is also a Wordpress CMS with a Vue JS front end. Similarly to Zuma I have made contributions to maintaining the site and spent three months overhauling the entire site to bring it up to AA accessibility standards.'
          ]
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

  &__heading {

    @media (max-width: $breakpoint-desk) {
      display: none;
    }

  }

  &__paragraph {
    &:not(:last-of-type) {
      margin-bottom: $spacing-small;
    }

    &:last-of-type {
      margin-bottom: $spacing-large;
    }
  }

}
</style>
