import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from "@/pages/PokemonPage"
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import { mockPokemons, pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })

    test("debe de hacer match con el snapshot", () => {

        expect(wrapper.html).toMatchSnapshot();
    
    });

    test("debe de llamar mixPokemonArray al montar", () => {

        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray')
        // se vuelve a ejecutar el shallowMount para que primero pueda espiar el metodo mixPokemonArray antes de que se monte la pagina
        shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    
    });

    test("debe de hacer match con el snapshot cuando cargan los pokemons", () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0], 
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            },
        })

        expect( wrapper.html() ).toMatchSnapshot()
    
    });

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        //Tarea 111

        //PokemonPicture debe existir
        //PokemonOptions debe existir

        //PokemonPicture attribute pokemon === 5
        //PokemonOptions attribute pokemons toBe true

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0], 
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            },
        })

        // Busco los componentes
        const pictureComponent = wrapper.findComponent(PokemonPicture)
        const optionsComponent = wrapper.findComponent(PokemonOptions)

        console.log('Soy el componente PokemonPicture', pictureComponent.html())
        console.log('Soy el componente PokemonOptions', optionsComponent.html())

        // desestructuro el id
        const { id } = mockPokemons[0]

        console.log('soy el id', id)

        expect(pictureComponent.exists()).toBeTruthy()
        expect(optionsComponent.exists()).toBeTruthy()
        expect( id ).toBe(5)
        expect(optionsComponent.attributes('pokemons')).toBeTruthy()

        // Solucion FH

        // const pictureComponent = wrapper.find('pokemon-picture-stub')
        // const optionsComponent = wrapper.find('pokemon-options-stub')

        // expect(pictureComponent.exists()).toBeTruthy()
        // expect(optionsComponent.exists()).toBeTruthy()

        // expect( pictureComponent.attributes('pokemonid') ).toBe('5')
        // expect( optionsComponent.attributes('pokemons') ).toBeTruthy()

    })

    test("pruebas con checkAnswer", async() => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0], 
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            },
        })

        await wrapper.vm.checkAnswer(5)
        console.log(wrapper.vm)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Muy bien Lolita! es, ${ mockPokemons[0].name }`)


        // tarea 112 - evaluar la salida de checkAnswer con otro pokemon

        await wrapper.vm.checkAnswer(10)

        // vm permite evaluar props reactivas de la funcion data
        expect(wrapper.vm.message).toBe(`Ese no era Loli!, era ${mockPokemons[0].name.toUpperCase()}`)
    
    });

})