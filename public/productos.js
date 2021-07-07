const productos = {
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
  },
  {
    "precio": 100990,
    "id": 6,
    "title": "Micrófono gamer profesional HyperX",
    "image": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw9934c3bd/images/imagenes-productos/800/MKES/MKESSLAB4R-001.jpg?sw=513&sh=654&sm=fit",
    "type": "Accesorio"
  },
  {
    "precio": 1700000,
    "id": 6,
    "title": "Cámara semiprofesional SX540",
    "image": "https://i.linio.com/p/4ba7c9a09fcf7efbf8e2fc9216d3df0c-product.webp",
    "type": "Accesorio"
  }, 
]
}

export let mockService = () => new Promise(resolve => resolve(productos));

// Mock Objeto simulado