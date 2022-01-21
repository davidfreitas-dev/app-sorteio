import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        names: [],
        quantity: null,
        selectedNames: [],
        clear: false,
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
        clearMemory(state) {
            state.names = []
            state.selectedNames = []
            state.clear = true
            setTimeout(() => {
                state.clear = false
            }, 1)
        },
        pushValues(state, name) {
            state.selectedNames.push(name)
        }
    }
})