<template>
    <div class="pokemon-container">

        <img :src="imgSrc"
            class="hidden-pokemon"
            alt="pokemon">

        <img
          v-if="showPokemon"
          :src="imgSrc"
          class="fade-in"
          alt="pokemon">

    </div>

    
</template>

<script>
export default {

// en las props recibo el argumento pokemonID que lo estamos pasando en la pokemonPage en el llamado del componente PokemonPicture

// en este caso lo definimos como Number ya que el endpoint que se usa en cada call a la API termina en un numero

// la property showPokemon es para poder mostrar la imagen dependiendo es booleana ya que si es true mostrara la imagen y si es false no

    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
// pasamos la property con interpolacion para que sea dinamica
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}
</script>

<style scoped>

    .pokemon-container {
        display: flex;
        position: relative;
        justify-content: center;
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }

</style>