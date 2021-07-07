<template>
    <!-- Estilos -->
  <div class="row" >
    <h1 class="mt-4 text-center">Producto</h1>

      <div class="mt-5 col-sm-4 offset-sm-4 card" :style="{background: backImg }">
        <img :src="image" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
            {{ precio }}
          </p>
        </div>
        <button href="#" class="btn btn-primary" @click.prevent="setData(data)">Buscar producto</button>
      </div>

  </div>

   
</template>

<script>
// mock es un objeto simulado
import { mockService } from "../../public/productos";
export default {
  data() {
    return {
      precio: 0,
      title: "",
      image: "",
      type: "",
      data: {},
    };
  },
  methods: {
    setData(data) {
      try {
        let randomSearch = Math.floor(Math.random() * 5);
        console.log(randomSearch);
        data = data.mock[randomSearch];
        this.precio = data.precio
        this.title = data.title
        this.image = data.image
        this.type = data.type
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await mockService().then((response) => {
      this.data = response;
      this.setData(response);
    });
  },
  computed: {
    backImg: function(){
      return `var(--${this.type}-back)`
    }
  },
};
</script>

<style>
:root {
  --Movil-back: #A8A878;
  --Notebook-back: #E0C068;
  --Accesorio-back: #883688;
}

.card {
  padding: 10px;
}
</style>