import Vue from 'vue';
import Router from 'vue-router';

Vue.useAttrs(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/items'
        },
        {
            path: '/',
            redirect: '/bath'
        },
        {
            path: '/',
            redirect: '/fruit'
        },
        {
            path: '/',
            redirect: '/fridge'
        },
        {
            path: '/',
            redirect: '/freezer'
        },
        {
            path: '/',
            redirect: '/dry'
        }

    ]
});