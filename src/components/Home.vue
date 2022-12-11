<template>
  <div class="home">
    <MovieForm />
    <MovieItems :movies="getMovies" />
  </div>
</template>

<script>

import MovieItems from "~/components/MovieItems";
import MovieForm from "~/components/MovieForm";
import {mapGetters} from "vuex";

export default {
  components: {MovieForm, MovieItems},
  
  data(){
    return{
      movies :[],
    }
  },

  computed :mapGetters({
    getMovies : 'getMovie'
  })
}

</script>

<style scoped>

h3{
  color: red;
}

</style>