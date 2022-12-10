import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            movieList :[],
        }
    },

    // store 상태는 뮤테이션(변이)를 통해서만 바꿀수있음
    mutations: {
        setMovieList(state,movies) {
            state.movieList=[...state.movieList,...movies]

            console.log(state.movieList);
        }
    },

    getters:{
      getMovie(state){
          console.log(state.movieList);
          return state.movieList;
      }
    },

    // 비동기로 동작하는 로직은 전부 여기에 박아주기 
    actions:{

        async getMovieTitle(context,options){
            if(options.textValue){

                const todo = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${options.textValue}`);
                const result = await todo.json();
                const data =result.Search;
                context.commit('setMovieList',data);
            }
            

        }
    }
});