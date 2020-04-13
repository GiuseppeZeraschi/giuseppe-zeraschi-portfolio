<template>
    <div class="v-star-rating">
        <div class="v-star-rating__icon-wrapper">
            <slot />
            <p class="u-text--base">{{ text }}</p>
        </div>
        <div class="v-star-rating__star-row">
            <div
                v-for="(container, index) in 5"
                :key="index"
                class="v-star-rating__star-container"
            >
                <span
                    v-if="index < stars"
                    :class="`v-star-rating__star--${index + 1}`"
                    class="v-star-rating__star"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        stars: {
            type: Number,
            default: 0
        }
    },
}
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
      opacity: 0;
    }
  to {
      opacity: 1;
    }
}

$icon-dimensions: 8.4rem;

.v-star-rating {
    display: flex;

    &__icon-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: $icon-dimensions;
        width: $icon-dimensions;

        @media (min-width: $breakpoint-desk) {
            height: $spacing-huge;
            width: $spacing-huge;
        }

    }

    &__star-row {
        align-items: center;
        display: flex;
        margin-left: $spacing-base;
    }

    &__star-container {
        background-color: $grey-three;
        border-radius: 50%;
        height: $spacing-base;
        position: relative;
        min-width: $spacing-base;

        &:not(:first-child) {
            margin-left: $spacing-small;
        }

    }

    &__star {
        border-radius: 50%;
        background-color: $color-secondary;
        height: $spacing-small;
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: $spacing-small;

        &--1 {
            animation: fadeIn .5s ease-in forwards;
        }

        &--2 {
            animation: fadeIn .6s ease-in .4s forwards;
        }

        &--3 {
            animation: fadeIn .8s ease-in .8s forwards;
        }

        &--4 {
            animation: fadeIn 1.2s ease-in 1.2s forwards;
        }

        &--5 {
            animation: fadeIn 2s ease-in 1.6s forwards;
        }

    }

}
</style>
