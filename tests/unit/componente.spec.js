import { shallowMount } from '@vue/test-utils';
import Biblioteca from '../../src/Views/Biblioteca.vue';
import Categorias from '../../src/components/Categorias.vue';
import Libro from '../../src/components/Libro.vue';

describe('Biblioteca Componente', () => {

  it('Probando si se renderiza el componente', () => {
    // envolverlo
    const wrapper = shallowMount(Biblioteca);

    // hacemos la afirmación
    expect(wrapper.html()).toMatchSnapshot();
    // saca una fotografia si borramos o cambiamos algo del componente biblioteca lo va comparar con su snapshot y si encuentra
    // diferencias el test va dar error.
  });

  it('probando renderizacion de componentes hijos', () => {
    
    const wrapper = shallowMount(Biblioteca);
    const categorias = wrapper.findComponent(Categorias);
    const libro = wrapper.findComponent(Libro)

    // hacemos las afirmaciones

    expect(categorias.exists()).toBe(true);
    expect(libro.exists()).toBe(true);
  })
});