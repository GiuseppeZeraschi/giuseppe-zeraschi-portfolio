<template>
  <div class="v-projects u-section u-text--initial">
    <MediaStack
      v-for="(project, index) in projects"
      :key="index"
      :reverse="isReverseRow(index)"
      :button-href="project.buttonHref"
      :button-text="project.buttonText"
      class="v-projects__media-stack"
    >
      <template v-slot:image>
        <img
          class="v-projects__brand-logo"
          :src="require(`~/assets/img/${project.imgFilename}.png`)"
          :alt="project.imgAlt"
        >
      </template>
      <template v-slot:text>
        <p class="u-margin-bottom--large">
          {{ project.copy }}
        </p>
      </template>
    </MediaStack>
  </div>
</template>

<script>
import MediaStack from '~/components/MediaStack/MediaStack.vue'

export default {
  components: {
    MediaStack
  },
  head() {
    return {
      title: 'Giuseppe Zeraschi | Projects'
    }
  },
  data() {
    return {
      projects: [
        {
          buttonHref: 'https://whirli.com/',
          buttonText: 'Visit Whirli',
          imgFilename: 'whirli-logo',
          imgAlt: 'Whirli Logo',
          copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.'
        },
        {
          buttonHref: 'https://zumarestaurant.com/',
          buttonText: 'Visit Zuma',
          imgFilename: 'whirli-logo',
          imgAlt: 'Zuma Logo',
          copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.'
        },
        {
          buttonHref: 'https://inkonitorestaurant.com/',
          buttonText: 'Visit Inko Nito',
          imgFilename: 'whirli-logo',
          imgAlt: 'Inko Nito Logo',
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
