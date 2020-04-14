<template>
  <section class="v-skills u-section">
    <h1 class="u-text--large u-margin-bottom--base u-text--center u-color-primary">
      Skills
    </h1>
    <h2 class="u-text--small u-margin-bottom--huge u-text--center u-wrapper--small">
      Here's a selection of the core web development technologies I am proficient with.
    </h2>
    <div class="u-flex u-flex--column u-flex--row@fromDevice u-flex__justify-content--space-evenly u-flex__align-items--center">
      <div v-for="(list, index) in skills" :key="index" class="u-flex u-flex--column">
        <StarRating
          v-for="(skill, index) in list"
          :key="index"
          class="v-skills__star-rating"
          :text="skill.text"
          :stars="skill.stars"
        >
          <component :is="skill.svg" class="v-skills__star-rating-icon" />
        </StarRating>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from '~/components/Row/StarRating.vue'
import JavascriptSvg from '~/assets/svg/icons/javascript.svg'
import VueSvg from '~/assets/svg/icons/vue.svg'
import PhpSvg from '~/assets/svg/icons/php.svg'
import LaravelSvg from '~/assets/svg/icons/laravel.svg'
import GitSvg from '~/assets/svg/icons/git.svg'
import CssSvg from '~/assets/svg/icons/css.svg'
import SassSvg from '~/assets/svg/icons/sass.svg'
import HtmlSvg from '~/assets/svg/icons/html.svg'

export default {
  head() {
    return {
      title: 'Giuseppe Zeraschi | Skills'
    }
  },
  components: {
    StarRating,
    JavascriptSvg,
    VueSvg,
    PhpSvg,
    LaravelSvg,
    GitSvg,
    CssSvg,
    SassSvg,
    HtmlSvg,

  },
  data() {
    return {
      skills: [
        [
          {
            svg: 'JavascriptSvg',
            text: 'JS',
            stars: 4
          },
          {
            svg: 'VueSvg',
            text: 'Vue',
            stars: 5
          },
          {
            svg: 'PhpSvg',
            text: 'PHP',
            stars: 3
          },
          {
            svg: 'LaravelSvg',
            text: 'Laravel',
            stars: 2
          }
        ],
        [
          {
            svg: 'GitSvg',
            text: 'Git',
            stars: 4
          },
          {
            svg: 'CssSvg',
            text: 'CSS',
            stars: 4
          },
          {
            svg: 'SassSvg',
            text: 'Sass',
            stars: 4
          },
          {
            svg: 'HtmlSvg',
            text: 'HTML',
            stars: 5
          }
        ]
      ]
    };
  }
}
</script>

<style lang="scss">
.v-skills {
  &__star-rating {
    margin-bottom: $spacing-large;

    @media (min-width: $breakpoint-desk) {
      margin-bottom: $spacing-huge;
    }

  }

  &__star-rating-icon {
    color: $color-primary-light;
    height: 100%;
    width: 100%;
  }

}
</style>
