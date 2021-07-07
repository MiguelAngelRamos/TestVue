import { cuentaBancaria, cliente } from './jestTest';

describe('Se probará el estado de cuenta del cliente', () => {
  test('Cuenta esta activada?', () => {

    // Escriba aqui sus validaciones
    expect(cuentaBancaria().estado[0]).toBe('Activa');
  });

  test('Estado de cuenta del cliente', () => {
    // Escriba aqui sus validaciones
    expect(cliente()).toEqual({
      estado: 1,
      color: 'green'
    });
  });
});

// .toBe Compara valores primitivos. Utiliza la función Object.is para hacer las validaciones, la cual es mucho más confiable que un ===.

// .toEqual Compara recursivamente los valores de las propiedades de la instancia del objeto enviado