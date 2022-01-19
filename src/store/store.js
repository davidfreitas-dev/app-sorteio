import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        names: [],
        quantity: null,
        selectedNames: [],
        error: {}
    },
    getters: {
        shuffle(state) {
            var currentIndex = state.names.length, temporaryValue, randomIndex
        
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex -= 1
                temporaryValue = state.names[currentIndex]
                state.names[currentIndex] = state.names[randomIndex]
                state.names[randomIndex] = temporaryValue
            }
        
            return state.names
        }
    },
    mutations: {

    }
})