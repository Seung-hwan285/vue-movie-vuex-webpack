import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            movieList :[],
            movieListTotal : {},
            title :'',
        }
    },

    // store 상태는 뮤테이션(변이)를 통해서만 바꿀수있음
    mutations: {
        setMovieList(state,movies) {
            state.movieList=[];
            state.movieList=[...state.movieList,...movies.Search]
            state.movieListTotal=movies;
        },
        setTitle(state,title){
            console.log(title);
            state.title  =title;
        }
    },

    getters:{
      getMovie(state){
          console.log(state.movieList);
          return state.movieList;
      },
      getMovieTotal(state){
          return state.movieListTotal;
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
                context.commit('setMovieList',result);
            }
        },

        async getMovieTitleAndYear(context,options){
            if(options.year){
             const todo= await  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${options.textValue}&y=${options.year}`);
             const result = await todo.json();
             const data =result.Search;
             context.commit('setMovieList',data);
            }
        },

        async getMoviePage(context,options){
            console.log(options.pageNum);
            if(options.pageNum){
                const todo = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=car&page=${options.pageNum}`);
                const data=await todo.json();
                console.log(data);
                context.commit('setTitle',options.title);
                context.commit('setMovieList',data);
            }
        }
    }
});