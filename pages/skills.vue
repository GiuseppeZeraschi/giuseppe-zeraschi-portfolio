<template>
  <div class="v-skills u-section u-flex u-flex--column u-flex--row@fromDevice u-flex__justify-content--space-evenly u-flex__align-items--center">
    <div class="u-flex u-flex--column">
      <StarRating
        class="v-skills__star-rating"
        text="JS"
        :stars="4"
      >
        <JavascriptSvg class="v-skills__star-rating-icon" />
      </StarRating>
      <StarRating
        class="v-skills__star-rating"
        text="Vue"
        :stars="5"
      >
        <VueSvg class="v-skills__star-rating-icon" />
      </StarRating>
      <StarRating
        class="v-skills__star-rating"
        text="PHP"
        :stars="3"
      >
        <PhpSvg class="v-skills__star-rating-icon" />
      </StarRating>
      <StarRating
        class="v-skills__star-rating"
        text="Laravel"
        :stars="2"
      >
        <LaravelSvg class="v-skills__star-rating-icon" />
      </StarRating>
    </div>
    <div class="u-flex u-flex--column">
      <StarRating
        class="v-skills__star-rating"
        text="Git"
        :stars="4"
      >
        <GitSvg class="v-skills__star-rating-icon" />
      </StarRating>
      <StarRating
        class="v-skills__star-rating"
        text="CSS"
        :stars="4"
      >
        <CssSvg class="v-skills__star-rating-icon" />
      </StarRating>
      <StarRating
        class="v-skills__star-rating"
        text="Sass"
        :stars="4"
      >
        <SassSvg class="v-skills__star-rating-icon" />
      </StarRating>
      <StarRating
        class="v-skills__star-rating"
        text="HTML"
        :stars="4"
      >
        <HtmlSvg class="v-skills__star-rating-icon" />
      </StarRating>
    </div>
  </div>
</template>

<script>
import StarRating from '~/components/Row/StarRating.vue'
import JavascriptSvg from '~/assets/svg/javascript.svg'
import VueSvg from '~/assets/svg/vue.svg'
import PhpSvg from '~/assets/svg/php.svg'
import LaravelSvg from '~/assets/svg/laravel.svg'
import GitSvg from '~/assets/svg/git.svg'
import CssSvg from '~/assets/svg/css.svg'
import SassSvg from '~/assets/svg/sass.svg'
import HtmlSvg from '~/assets/svg/html.svg'

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
}
</script>

<style lang="scss">
.v-skills {

  &__star-rating {
    margin-bottom: $spacing-huge;
  }

  &__star-rating-icon {
    color: $color-secondary;
    height: 100%;
    width: 100%;
  }

}
</style>
