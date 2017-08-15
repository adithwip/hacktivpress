import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        articles: [],
        user: '',
        searches: []
    },
    mutations: {
        getArticles(state, payload) {
            state.articles = payload
        },
        getUser(state, payload) {
            state.user = payload
        }
        logout(state) {
            state.user = ''
        }
    },
    actions: {

        getUser(store) {
            axios.post('http://localhost:3000/userdata', {
                    token: localStorage.getItem('token')
                })
                .then(response => {
                    store.commit('getUser', response.data)
                })
        }
    },

})