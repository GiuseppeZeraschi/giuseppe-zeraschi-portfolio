<template>
    <div class="v-top-panel"/>
</template>

<style lang="scss">
.v-top-panel {
    background-color: $color-primary;
    height: 105px;
    position: fixed;
    width: 100%;

    @media (min-width: $breakpoint-desk) {
        display: none;
    }

}
</style>
