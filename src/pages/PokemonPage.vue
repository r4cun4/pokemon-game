<template>

    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este Pokémon?</h1>
        <!-- los atributos que se le pasan al componente deben escribirse en kebab-case -->
        <PokemonPicture
          :pokemon-id="pokemon.id"
          :show-pokemon="showPokemon"
        />

        <PokemonOptions
          :pokemons="pokemonArr"
          @selected-pokemon="checkAnswer"
          @click="speechAnswer"
        />

        <div v-if="showAnswer">

            <h2 class="fade-in">{{ message }}</h2>
            <button
              @click="newGame">Nuevo Juego
            </button>

        </div>

    </div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log( getPokemonOptions() )

export default {
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonArr: [],
            // pokemon tiene el id y el nombre, se inicializa null porque no sabemos q pokemon sera el de la img
            pokemon: null, 
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            
            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {
            this.showAnswer = true

            if( selectedId === this.pokemon.id ) {
                this.showPokemon = true
                this.message = `Muy bien Lolita! es, ${ this.pokemon.name[0].toUpperCase() }` + `${this.pokemon.name.substring(1)}`
            } else {
                this.message = `Ese no era Loli!, era ${ this.pokemon.name.toUpperCase() }`
            }
        },
        speechAnswer() {
            const msg = new SpeechSynthesisUtterance();
            msg.text = this.message;
            window.speechSynthesis.speak(msg);
        },
        newGame() {
            this.mixPokemonArray(),
            this.showPokemon = false,
            this.showAnswer = false,
            this.message = ''
            this.pokemonArr = [],
            this.pokemon = null
        }
    },
    // El metodo mounted ejecuta el codigo que tenga una vez que el componente este montado
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style scoped>

button {
    width: 60px;
    height: 60px;
    background-image: url('@/assets/restart-icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
    color: transparent;
}


</style>