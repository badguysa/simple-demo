<template>
  <Header v-if="showHeader"></Header>
  <router-view/>
</template>
<script setup>
import { ref, onMounted,watch } from 'vue'
import Header from '@/components/header.vue'
import { useRoute } from 'vue-router'

const showHeader = ref(true)
const route = useRoute()

onMounted(() => {
  showHeader.value = route.name !== 'login'
  watch(() => route.name, (name) => {
    showHeader.value = name !== 'login'
  })
})

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
