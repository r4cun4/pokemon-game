// Logica respectiva para que el componente PokemonOptions reciba 4 pokemones de manera aleatoria

import pokemonApi from '@/api/pokemonApi'


export const getPokemons = () => {
// Creo un array de 650 posiciones
    const pokemonsArr = Array.from( Array(650) )

// Recorro el arreglo con el metodo map y lo transformo
    return pokemonsArr.map( ( _, index ) => index + 1 )

}


const getPokemonOptions = async() => {

// el metodo sort devuelve un nuevo arreglo con numeros desde el 1 al 650, al pasarle como argumento el metodo Math.random el orden sera aleatorio
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    // console.log(mixedPokemons)


// el metodo splice retorna un arreglo con unicamente los primeros 4 elementos
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )

    return pokemons

}


export const getPokemonNames = async( [a, b, c, d] = [] ) => {

    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp)
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

// Promise.all espera un arreglo de promesas
// desestructuro el arreglo promiseArr
    const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )

    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]


}

export default getPokemonOptions