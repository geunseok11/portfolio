<template>
  <div id="app">
    <Header />
    <!-- <Card /> -->
    <div id="content" class="content">
      <router-view></router-view>>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Card from './components/layout/Card.vue'

export default {
  name: 'App',
  components: {
    Header,
    Card,
  }
}
</script>

<style>
</style>
