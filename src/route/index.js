import Home from "~/components/Home";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import MovieDetail from "~/components/MovieDetail";

const route=[
    {
        path :'/',
        name :'home',
        component : Home,
    },

    {
        path :'/movie/:id',
        name : 'Movie Detail',
        component: MovieDetail
    }

]

const router = createRouter({
    history : createWebHistory(),
    route,
})
export default router;