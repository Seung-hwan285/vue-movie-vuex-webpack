<template>
    <ul class="movie-list">
      <li
        v-for="movie in (pagenum > 1 ? movies2:movies)"
        :key="movie.imdbId"
        class="movie-item"
      >
        <router-link
          :to="'/movie/' + movie.imdbID"
          class="movie-link"
        >
          <div class="movie-image">
            <img :src="movie.Poster">
            <p class="type">
              {{ movie.Type }}
            </p>
          </div>

          <div class="movie-info">
            <p class="movie-year">
              {{ movie.Year }}
            </p>
            <h3 class="movie-title">
              {{ movie.Title }}
            </h3>
          </div>
        </router-link>
      </li>
    </ul>

</template>

<script>


import {mapGetters} from "vuex";

export default {

  // eslint-disable-next-line vue/require-prop-types
  props: ['movies','pagenum'],
  data(){
    return{
      // eslint-disable-next-line vue/no-dupe-keys
      movies2 :[],
    }
  },

  computed:mapGetters({
    getMovie :'getMovie',
  }),

  updated() {
    // eslint-disable-next-line vue/no-mutating-props
    this.movies2=this.getMovie;
    console.log(this.movies2);
  }

}
</script>

<style scoped>
h1{
  color: red;
}

h3 {
  color: #FFF;
  margin-bottom: 16px;
}

p {
  color: #FFF;
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
}

.movie-item {
  max-width: 50%;
  padding: 26px 20px;
}

</style>