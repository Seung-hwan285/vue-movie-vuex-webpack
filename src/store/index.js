import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            movieList :[],
            movieListTotal : {},
            textValue :'',
        }
    },

    // store 상태는 뮤테이션(변이)를 통해서만 바꿀수있음
    mutations: {
        setMovieList(state,movies) {
            state.movieList=[];
            state.movieList=[...state.movieList,...movies.Search]
            state.movieListTotal=movies;
        },
        setTitle(state,textValue){
            console.log(textValue);
            state.textValue =textValue;
            console.log(state.textValue);
        }
    },

    getters:{
      getMovie(state){
          return state.movieList;
      },
      getMovieTotal(state){
          return state.movieListTotal;
      },
      getTitle(state){
          return state.textValue;
      }
    },

    // 비동기로 동작하는 로직은 전부 여기에 박아주기
    actions:{
        async getMovieTitle(context,options){
            if(options.textValue){
                // https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3
                const todo = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${options.textValue}`);
                const result = await todo.json();
                // const data =result.Search;
                console.log(result);
                context.commit('setTitle',options.textValue);
                context.commit('setMovieList',result);
            }
        },
        async getMovieTitleAndYear(context,options){
            if(options.year){
             const todo= await  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${options.textValue}&y=${options.year}`);
             const result = await todo.json();
             const data =result.Search;
                context.commit('setTitle',options.textValue);
                context.commit('setMovieList',data);
            }
        },

        async getMoviePage(context,options){
            if(options.pageNum){
                const todo = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${options.textValue}&page=${options.pageNum}`);
                const data = await todo.json();
                console.log(data);
                context.commit('setMovieList',data);
            }
        }
    }
});