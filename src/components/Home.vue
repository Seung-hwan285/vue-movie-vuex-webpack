<template>
  <div class="movie-form">
    <form
      class="search-box"
      @submit.prevent="submited"
    >
      <input
        v-model="textValue"
        type="text"
        placeholder="제목"
      >
      <input
        v-model="year"
        type="text"
        placeholder="년도"
      >
      <input
        type="submit"
        class="input-search"
        value="검색"
      >
    </form>

    <div class="movie-list">
      <ul>
        <li
          v-for="item in getMovies"
          :key="item.imdbID"
        >
        <h3>{{ item.Title }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

import {mapGetters} from "vuex";

export default {
  name: "Hello",

  data() {
    return {
      cnt: 0,
      textValue :'',
      year :'',
    }
  },

  computed:mapGetters({
      getMovies : 'getMovie'
  }),

  methods: {
    async submited(){
      this.$store.dispatch('getMovieTitle',{textValue:this.textValue});
      this.textValue="";
    },
  }
}

</script>

<style scoped>

h3{
  color: red;
}

</style>