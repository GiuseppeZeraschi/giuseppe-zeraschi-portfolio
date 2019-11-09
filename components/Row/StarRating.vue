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
.v-star-rating {
    display: flex;

    &__icon-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: $spacing-huge;
        width: $spacing-huge;
    }

    &__star-row {
        align-items: center;
        display: flex;
        margin-left: $spacing-large;
        width: 100%;
    }

    &__star-container {
        background-color: $color-quaternary;
        border-radius: 50%;
        height: $spacing-base;
        position: relative;
        min-width: $spacing-base;

        &:not(:first-child) {
            margin-left: $spacing-base;
        }

    }

    &__star {
        border-radius: 50%;
        background-color: $color-tertiary;
        height: $spacing-small;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: $spacing-small;
    }

}
</style>
