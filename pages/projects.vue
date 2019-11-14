<template>
  <div class="v-projects u-section u-text--initial">
    <MediaStack
      button-href="https://www.whirli.com"
      button-text="Visit Whirli.com"
      class="u-margin-bottom--huge"
    >
      <template v-slot:image>
        Image
      </template>
      <template v-slot:text>
        <p class="u-margin-bottom--large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.
        </p>
      </template>
    </MediaStack>
    <MediaStack
      reverse
      button-href="https://www.whirli.com"
      button-text="Visit Whirli.com"
      class="u-margin-bottom--huge"
    >
      <template v-slot:image>
        Image
      </template>
      <template v-slot:text>
        <p class="u-margin-bottom--large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.
        </p>
      </template>
    </MediaStack>
    <MediaStack
      button-href="https://www.whirli.com"
      button-text="Visit Whirli.com"
    >
      <template v-slot:image>
        Image
      </template>
      <template v-slot:text>
        <p class="u-margin-bottom--large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo magni praesentium earum officiis assumenda. Dicta libero ipsam esse pariatur possimus adipisci nulla tenetur, soluta dolore repellat aperiam nemo non excepturi sunt fugit, eligendi aspernatur officiis veniam cumque at a, quis minima quibusdam distinctio! Veritatis aliquam quod cum nobis quidem.
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
}
</script>
