<template>
    <div>
        <textarea rows="5" v-model="names" @blur="setNames" 
            placeholder="Digite os nomes separados por vírgula" 
            @keyup.enter="$event.target.nextElementSibling.focus()">
        </textarea>
        
        <input class="ion-margin" placeholder="Quantidade a ser sorteada por vez" 
            v-model="quantity" @keyup.enter="$event.target.nextElementSibling.focus()">

        <button class="btn-draw" @click="drawNames">Sortear</button>

        <button class="btn-clear" @click="clearNames">Limpar</button>

        <div class="display" v-if="selectedNames.length">
            <span size="12" class="result" v-for="(names, i) in selectedNames" :key="i">
                {{ displayNames(names) }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: null,
            quantity: null,
            selectedNames: []
        }
    },
    methods: {
        setNames() {
            this.$store.dispatch('setNames', this.names.split(','))
        },
        drawNames() {
            if (!this.names) {
                return this.$emit('error', 'Não há nomes para sortear.')
            }

            const quantity = this.quantity ? this.quantity : 1
            const shuffledNames = this.$store.getters.getShuffledNames
            const selectedNames = shuffledNames.splice(0, quantity)

            if (selectedNames.length) {
                this.selectedNames.push(selectedNames)
            }
        },
        displayNames(names) {
            return names.join(', ')
        },
        clearNames() {
            Object.assign(this.$data, this.$options.data())
        },
    },
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 100%;
    margin: auto;
}

textarea, input {
    width: 100%;
    margin-top: .75rem;
    padding: .85rem;
    border-radius: 5px;
    border: 1px solid var(--secondary);
    background-color: var(--primary);
}

textarea:focus, input:focus {
    border-color: var(--main);
    box-shadow: 0 0 0 0;
    outline: 0;
}

button {
    width: 49%;
    height: 45px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 5px;
}

button:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

.btn-draw {
    color: #fff;
    background-color: var(--main);
    align-self: flex-start;
    margin-right: .25rem;
}

.btn-clear {
    color: #3c3c3c;
    border: 1px solid var(--secondary);
    background-color: #fff;
    align-self: flex-end;
    margin-left: .25rem;
    margin-top: -45px;
}

span {
    color: #fff;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: var(--success);
    border: 1px solid var(-success);
    border-radius: 5px;
    margin-top: .5rem;
    padding: .5rem 1.5rem;
}

.action-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.display {
    margin: .5rem 0 1rem 0;
}

@media only screen and (min-width: 550px) {
	div {
		width: 65%;
		margin: auto;
	}
}

@media only screen and (min-width: 768px) {
	div {
		width: 50%;
		margin: auto;
	}
}

@media only screen and (min-width: 990px) {
	div {
		width: 40%;
		margin: auto;
	}
}
</style>