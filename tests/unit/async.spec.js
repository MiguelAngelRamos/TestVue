import { getDataFromApi } from '../../src/api/requestApi';
/** Importamos el getDataFrom api que es la funcion que hace la peticion 
 * al Api externa lo hace por medio de axios, debes instalar axios
 * npm install axios, una vez instalado confirma que aparezca en tu package.json
 */
describe('Probar Async/Await', () => {
    test('Realizar una peticion a una api', async () => {
      // Traemos a todos los personajes
        const api = 'https://rickandmortyapi.com/api/character/';

      // Traemos uno por su id en este caso a Rick que tiene un id de 1
      // esto lo puedes ver en la documentación del API.
        const getRick = 'https://rickandmortyapi.com/api/character/1'

        // Vamos a enviar por parameto los end points (api, getRick)
        // a la función que estamos importando
        await getDataFromApi(api).then(data => {
          // comprobamos que la data que recibimos sea mayor a cero.
            expect(data.results.length).toBeGreaterThan(0);
        });

        // Vamos a probar los datos de Rick en este caso el "name"
        // Y comprobamos que el persona con id 1 sea efectivamente Rick Sanchez
        await getDataFromApi(getRick).then(data => {
          // si el nombre es distinto a Rick Sanchez la prueba deberia fallar
            expect(data.name).toEqual('Rick Sanchez');
        });
    });

    test('Manejando el Error en la petición', async () => {
      // vamos a causar un error http://httpstat.us es un servicio que me permite 
      // capturar error de peticiones en caso vamos a traer el error 404
      const apiError = 'http://httpstat.us/404';
      // a nuestra funcion que hace la peticion le vamos a pasar el end point que va generar el error
      const peticion = getDataFromApi(apiError);
      await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
      // de esta forma la prueba va pasar,  por que se va generar el error 404, que pase la prueba no significa que este bien
      // tenemos un error y debemos solucionarlo. de esta manera podemos testear errores que vengan de Api Rest

    });

    test('Manejando el Error en la petición API rick and morty', async () => {
      // capturar error de peticiones en caso vamos a traer el error 500
      // cuando enviamos un Id que no existe el Api de rick and morty nos devuelve un error 500
      const apiError = 'https://rickandmortyapi.com/api/character/0t40t40t';
      // a nuestra funcion que hace la peticion le vamos a pasar el end point que va generar el error
      const peticion = getDataFromApi(apiError);
      await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'));
      // de esta forma la prueba va pasar,  por que se va generar el error 404, que pase la prueba no significa que este bien
      // tenemos un error y debemos solucionarlo. de esta manera podemos testear errores que vengan de Api Rest

    });


    //
});
// para correr esta prueba ejecute el comando
// npm run test:unit async