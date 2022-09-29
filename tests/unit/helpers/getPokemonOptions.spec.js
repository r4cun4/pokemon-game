import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {

    test('debe regresar un arreglo de numeros', () => {

        const pokemons = getPokemons()

        expect( pokemons.length ).toBe(650)
        expect( pokemons[0] ).toBe(1)
        expect( pokemons[500] ).toBe(501)
        expect( pokemons[649] ).toBe(650)

    })

    test('debe de retornar un arreglo de 4 elementos con nombres de sus respectivos pokemons', async() => {

        const pokemons = await getPokemonNames( [1,2,3,4] )

        // console.log(pokemons)

        expect( pokemons ).toStrictEqual([
            { 
                name: 'bulbasaur',
                 id: 1
            },
            { 
                name: 'ivysaur',
                id: 2
            },
            { 
                name: 'venusaur',
                id: 3 
            },
            { 
                name: 'charmander',
                id: 4
            }
          ])
     

        // pokemons.forEach( (pokemon) => {
            
            // if(pokemon.name === 'bulbasaur' || pokemon.name === 'ivysaur' || pokemon.name === 'venusaur' || pokemon.name === 'charmander') {
                
            //     console.log('esta retornando los primeros 4 pokemons de manera correcta', pokemon.name)

            // } else {

            //     console.log('no esta retornando los primeros 4 pokemons de manera correcta')

            // }
        // })

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async() => {
        
        const pokemons = await getPokemonOptions()

        expect( pokemons.length ).toBe(4)
        expect( pokemons ).toEqual([
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            }
          ])

    })

})