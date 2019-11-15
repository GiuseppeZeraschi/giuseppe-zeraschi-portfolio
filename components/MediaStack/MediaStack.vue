<template>
    <div
        :class="{ 'v-media-stack--reverse': reverse }"
        class="v-media-stack"
    >
      <div class="v-media-stack__cell v-media-stack__image-wrapper">
        <slot name="image"/>
      </div>
      <div class="v-media-stack__cell v-media-stack__text">
        <slot name="text"/>
        <a
          :href="buttonHref"
          target="_blank"
          class="v-media-stack__button u-button"
        >
          {{ buttonText }}
        </a>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        reverse: {
            type: Boolean,
            default: false
        },
        buttonHref: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.v-media-stack {
    display: flex;
    flex-direction: column;

    @media (min-width: $breakpoint-desk) {
        flex-direction: row;
    }

    &__cell {
        width: 100%;

        @media (min-width: $breakpoint-desk) {
            width: 50%;
        }

        @media (max-width: $breakpoint-desk) {
            margin-bottom: $spacing-large;
        }

    }

    &__image-wrapper {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: $spacing-base;
    }

    &__text {

        @media (min-width: $breakpoint-desk) {
            margin-left: $spacing-large;
        }

    }

    &__button {
        float: right;
    }

    &--reverse {

        @media (min-width: $breakpoint-desk) {
            flex-direction: row-reverse;
        }

        .v-media-stack__image-wrapper {
            
            @media (min-width: $breakpoint-desk) {
                margin-left: $spacing-large;
            }

        }

        .v-media-stack__text {
            margin-left: 0;
        }

        .v-media-stack__button {
            float: none;
        }

    }

}
</style>
