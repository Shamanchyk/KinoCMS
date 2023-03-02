<template>
  <main class="main">
    <component :is="layout">
      <router-view/>
    </component>
  </main>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default {
  

  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
      // console.log(this.$route.meta)
      // return 'admin-layout'
    }
  },


  components: { 
    EmptyLayout, AdminLayout
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
