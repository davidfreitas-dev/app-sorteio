import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            names: null
        }
    },
    getters: {
        getNames(store) {
            return store.names
        },
        getShuffledNames(state) {
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
        setNames(state, names) {
            state.names = names;
        }
    },
    actions: {
        setNames({commit}, names) {
            commit('setNames', names);
        }
    }
});

export default store;