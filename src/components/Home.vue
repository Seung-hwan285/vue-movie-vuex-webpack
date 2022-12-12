<template>
  <div class="home">
    <MovieForm />
    <MovieItems
      :movies="getMovies"
      :pagenum="pageNum"
    />
    <MoviePageList
      :movies="getMoviesTotal"
      @onClickPage="onClickPage"
    />
  </div>
</template>

<script>

import MovieItems from "~/components/MovieItems";
import MovieForm from "~/components/MovieForm";
import {mapGetters} from "vuex";
import MoviePageList from "~/components/MoviePageList";

export default {
  components: {MovieForm, MovieItems,MoviePageList},

  data(){
    return{
      movieList : [],
      pageNum :0,
    }
  },

  computed :mapGetters({
    getMovies : 'getMovie',
    getMoviesTotal :'getMovieTotal'
  }),

  methods:{
    onClickPage(pageNum){
      console.log(pageNum);
      this.pageNum = pageNum;
    }
  }

}

</script>

<style scoped>

h3{
  color: red;
}

</style>