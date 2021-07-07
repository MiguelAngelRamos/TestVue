import {mount} from '@vue/test-utils';
import Home from '../../src/Views/Home.vue';

const wrapper = mount(Home);

describe('Probando el rendering correcto de elementos', ()=>{
    test('deberia renderizar card card-body  card-title',()=>{
        //comprueba que exista la clase y luego comprueba si el elemento es un div 
        expect(wrapper.find('.card').exists()).toBeTruthy();
        expect(wrapper.find('.card').element.tagName.toLowerCase() == 'div').toBeTruthy();
        expect(wrapper.find('.card-body').exists()).toBeTruthy();
        //comprueba que exista la clase y luego comprueba si el elemento es un h5
        expect(wrapper.find('.card-title').element.tagName.toLowerCase() == 'h5').toBeTruthy();
    });
    test('deberia renderizar 1 image',()=>{
        //comprueba que exista la img y luego comprueba si el elemento en la que esta dicha imagen es una etiqueta img
        expect(wrapper.find('img').exists()).toBeTruthy();
        expect(wrapper.find('img').element.tagName.toLowerCase() == 'img').toBeTruthy();
    });
    test('deberia renderizar 1 p',()=>{
        //comprueba que exista la clase y luego comprueba si el elemento es un parrafo
        expect(wrapper.find('.card-text').exists()).toBeTruthy();
        expect(wrapper.find('.card-text').element.tagName.toLowerCase() == 'p').toBeTruthy();
     
    });
    test('deberia renderizar 1 button', () => {

        expect(wrapper.find('button').exists()).toBeTruthy();

        expect(wrapper.find('button').element.tagName.toLowerCase() == 'button').toBeTruthy();

    });
})