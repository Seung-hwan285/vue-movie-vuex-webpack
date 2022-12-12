<template>
  <h1>Page nation</h1>

  <div class="btn-cover">
    <button
      class="page-btn"
      @click="prevPage(),onClickPage()"
    >
      이전
    </button>
    <span class="page-count">{{ pageNum }} / {{ pageCount }} 페이지</span>
    <button
      class="page-btn"
      @click="nextPage(),onClickPage()"
    >
      다음
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/prop-name-casing,vue/require-prop-types
  props:['movies'],

  data(){
    return{
      pageNum :1,
      
    }
  },

  computed:{
    // eslint-disable-next-line vue/return-in-computed-property
    pageCount () {
      return this.movies.totalResults;
    },
  },

  methods:{
    nextPage(){

      this.pageNum+=1;

    },
    prevPage(){
      this.pageNum-=1;
    },

    onClickPage(){
      this.$store.dispatch('getMoviePage',{pageNum:this.pageNum});
      this.$emit('onClickPage',this.pageNum);
    }

  }
}
</script>

<style scoped>



.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}

.page-count{
  color: red;

  font-weight: bold;
}
</style>