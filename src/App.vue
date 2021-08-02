<template>
  <div id="nav">
    <the-header/>
    <side-bar/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
    SideBar,
    TheHeader
  }
}
</script>