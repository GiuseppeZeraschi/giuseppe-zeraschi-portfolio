<template>
    <div v-if="$mq === 'desk'" class="v-footer">
        <div class="v-footer__inner u-text--small">
            &copy; {{ new Date().getFullYear() }}
        </div>
    </div>
</template>

<style lang="scss">
.v-footer {
    padding-bottom: $spacing-large;

    &__inner {
        align-items: center;
        bottom: 0;
        display: flex;
        height: $spacing-large;
        justify-content: center;
        position: absolute;
        width: 100%;
    }
}
</style>
