import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

import { mockPokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        })
    })

    test('debe de hacer match con el snapshot', () => {

        console.log( wrapper.html() )

        expect( wrapper.html ).toMatchSnapshot()
    })

})