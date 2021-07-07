import { mockService } from "../../public/productos";

describe('Obteniendo datos del servicio simulado', () => {
  test('Probando los datos de la promesa resuelta', () => {
    const data = {
      "mock": [
        {
          "precio": 1249150,
          "id": 1,
          "title": "Apple iPhone 12 Pro Max Grafito 256Gb",
          "image": "https://i.linio.com/p/3eebd43470916f18151d45c8e962560e-product.webp",
          "type": "Movil"
        }, 
        {
          "precio": 1700000,
          "id": 2,
          "title": "Macbook PRO",
          "image": "https://http2.mlstatic.com/D_NQ_NP_797920-MLC45629512487_042021-O.webp",
          "type": "Notebook"
        }, 
        {
          "precio": 1990990,
          "id": 4,
          "title": "Notebook gamer MSI G565",
          "image": "https://http2.mlstatic.com/D_NQ_NP_817738-MLC44782210434_022021-O.webp",
          "type": "Notebook"
        }, 
        {
          "precio": 21990,
          "id": 5,
          "title": "Teclado gamer RGB K110",
          "image": "https://i.linio.com/p/d7d86f61626601d087abc86f83f1c8ac-product.webp",
          "type" : "Accesorio"
        }
      ]
    }
    expect.assertions(1) // vamos hacer una sola validación
    // expect.assertions es importante cuando se prueban los escenarios de error del código asincrónico y no es redundante.

    const res = mockService() // nos traemos la promesa
    
    expect(Promise.resolve(res)).resolves.toStrictEqual(data);
  })
});