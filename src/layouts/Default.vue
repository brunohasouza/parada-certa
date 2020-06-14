<template>
  <div id="layout-default">
    <custom-header />
    <router-view></router-view>
  </div>
</template>

<script>
import CustomHeader from './../components/ui-elements/CustomHeader'
export default {
  components: {
    CustomHeader
  }
}
</script>

<style>

</style>