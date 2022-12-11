<template>
    <ul class="movie-list">
      <li
        v-for="movie in movies"
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

export default {
  
  
  // eslint-disable-next-line vue/require-prop-types
  props: ['movies'],

}
</script>

<style scoped>
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