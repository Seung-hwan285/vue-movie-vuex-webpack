<template>
  <div class="movie-form">
    <form
        class="search-box"
        @submit.prevent="onSubmit"
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

  </div>
</template>

<script>
import MovieItems from "~/components/MovieItems";

export default {

  // eslint-disable-next-line vue/no-unused-components
  components: {MovieItems},
  // eslint-disable-next-line vue/require-prop-types

  data() {
    return {
      textValue: '',
      year: '',
    }
  },

  methods: {
    async onSubmit() {
      if (!this.year) {
        this.$store.dispatch('getMovieTitle', {textValue: this.textValue});
        this.textValue = "";
      } else {
        this.$store.dispatch('getMovieTitleAndYear', {textValue: this.textValue, year: this.year});
        this.textValue = "";
        this.year = "";
      }
    }
  }
}
</script>

<style scoped>

</style>