import {shallowMount } from '@vue/test-utils';
import Home from '../../src/Views/Home.vue';
const wrapper = shallowMount(Home);

describe('Prueba de las propiedades de data()', ()=>{
    test('debería tener propiedad de nombre',()=>{
        //Se valida la propiedad precio de data()
        expect(wrapper.vm.$data).toHaveProperty('precio');
        //Se valida el tipo de dato de la propiedad precio
        expect(typeof wrapper.vm.precio).toBe('number');
    });
    test('debería tener propiedad de nombre',()=>{
        //Se valida la propiedad title de data()
        expect(wrapper.vm.$data).toHaveProperty('title');
        //Se valida el tipo de dato de la propiedad title
        expect(typeof wrapper.vm.title).toBe('string');
    });
    test('debería tener propiedad de nombre',()=>{
        //Se valida la propiedad image de data()
        expect(wrapper.vm.$data).toHaveProperty('image');
        //Se valida el tipo de dato de la propiedad image
        expect(typeof wrapper.vm.image).toBe('string');
    });
    test('debería tener propiedad de nombre',()=>{
        //Se valida la propiedad nombre de data()
        expect(wrapper.vm.$data).toHaveProperty('type');
        //Se valida el tipo de dato de la propiedad nombre
        expect(typeof wrapper.vm.type).toBe('string');
    });
})