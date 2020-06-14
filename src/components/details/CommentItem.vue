<template>
  <div class="commentItem">
    <div class="commentItem__header">
      <v-icon size="3rem" color="blue-grey lighten-4">account_circle</v-icon>
      <p class="font-weight-bold text-h6">{{ author }}</p>
    </div>
    <div class="commentItem__message">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>