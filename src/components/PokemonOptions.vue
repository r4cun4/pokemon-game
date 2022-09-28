<template>
  <div class="options-container">

    <ul>
        <li
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit( 'selectedPokemon', pokemon.id )"
          @mouseover="speechNames"
        >
          {{ pokemon.name }}
        </li>
    </ul>

<!-- colocar el :key es una buena practica para identificar el elemento de manera unica -->

  </div>
</template>

<script>
export default {
// Se definen las props que se pasaron como argumento en la PokemonPage en el llamado del componente
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        speechNames(e) {

            const msg = new SpeechSynthesisUtterance()
            msg.text = ''
            msg.lang = 'es-MX'

            if(e.target.matches('li:nth-child(1)')) {
                msg.text = this.pokemons[0].name;
                console.log(msg)
                window.speechSynthesis.speak(msg);
            } else if(e.target.matches('li:nth-child(2)')) {
                msg.text = this.pokemons[1].name;
                console.log(msg)
                window.speechSynthesis.speak(msg);
            } else if(e.target.matches('li:nth-child(3)')) {
                msg.text = this.pokemons[2].name;
                console.log(msg)
                window.speechSynthesis.speak(msg);
            } else {
                msg.text = this.pokemons[3].name;
                console.log(msg)
                window.speechSynthesis.speak(msg);
            }
        }
    }
}
</script>

<style scoped>

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        list-style-type: none;
        padding: 0;
    }
    li {
        background-color: #fff;
        border-radius: inherit;
        border: 2px solid red;
        cursor: pointer;
        padding: 10px;
        width: 250px;
        text-transform: capitalize;
        font-weight: bold;
        color: gray;
    }

    li:hover {
        background-color: red;
        border: 2px solid red;
        color: #fff;
        transition: 1s;
    }

    .options-container {
        display: flex;
        justify-content: center;
    }

</style>