<template>
    <div>
      <h1>Hello from results route {{ $route.params.id }}</h1>
      {{ albumData }}
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "_id",
    data () {
      return {
        albumData: ''
      }
    },
    asyncData({params}) {
      return axios.get(`https://itunes.apple.com/search?term=${params}&limit=3`)
        .then((response) => {
          // store.commit('add', response.data.results)
          return {albumData: response.data.results}
        })
    }
  }
</script>

<style scoped>

</style>
