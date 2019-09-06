<template>
  <div class="app">
    Hello World
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  created(){
    console.log(process.env.NODE_ENV)
  },
  mounted(){

  },
  methods: {

  },
}
</script>
<style lang="stylus" scoped>
  div
    color red
</style>
