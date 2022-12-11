import Home from "~/components/Home";
import {createRouter, createWebHistory} from "vue-router";
import MovieDetail from "~/components/MovieDetail";

const routes = [
    {path: '/', component: Home},
    {
        path : '/movie/:id',
        name : 'Movie Detail',
        component: MovieDetail
    }

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;