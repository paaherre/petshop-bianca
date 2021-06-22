<template>
  <div class="farmacia">
    <h2>{{ $route.params.tipo }}</h2>

    <div class="d-flex flex-row flex-wrap">
      <div
        v-for="producto in productosPorTipo"
        :key="producto._id"
        class="wrapper d-flex flex-row mx-auto"
      >
        <div
          class="left"
          :style="{ 'background-image': 'url(' + producto.imagen + ')' }"
        >
          <div class="d-flex flex-column align-self">
            <p class="badge bg-success precio">
              &dollar;{{ producto.precio.toFixed(2) }}
            </p>
            <div
              class="stock badge bg-danger align-self-baseline"
              v-show="producto.stock <= 5"
            >
              <span>Ultimas Unidades</span>
            </div>
          </div>
        </div>
        <div class="rigth">
          <div class="cardNombre">
            <h5>{{ producto.nombre }}</h5>
          </div>
          <div class="desc">
            <p>{{ producto.descripcion }}</p>
          </div>
          <Contador :producto="producto" :key="producto._id" />
        </div>
      </div>
    </div>
  </div>
  <i @click="click" class="material-icons fa fa-cart-plus"></i>
  <i class="material-icons fa fa-check"></i>
  <i class="material-icons fa fa-info"></i>
  <i @click="click" class="material-icons fa fa-times"></i>
</template>

<script>
import Contador from "@/components/Contador.vue";
export default {
  components: {
    Contador,
  },
  data() {
    return {
      buy: false,
    };
  },
  methods: {
    click() {
      this.buy = !this.buy;
    },
  },
  data() {
    return {
      todosLosProductos: [],
    };
  },
  mounted() {
    fetch("https://apipetshop.herokuapp.com/api/articulos")
      .then((res) => res.json())
      .then((json) => {
        this.todosLosProductos = json.response;
      });
  },
  computed: {
    productosPorTipo() {
      let tipoProducto =
        this.$route.params.tipo === "Farmacia" ? "Medicamento" : "Juguete";
      return this.todosLosProductos.filter(
        (producto) => producto.tipo === tipoProducto
      );
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 40vw;
  height: 40vh;
  border: 2px solid black;
  border-radius: 5px;
  margin: 1rem;
}
.left {
  width: 50%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  /* object-fit: contain; // se utiliza para posicionar la imagen no el background */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.precio {
  font-size: 20px;
}
.rigth {
  width: 50%;
  height: 100%;
  padding: 0.5rem;
}
.rigth .cardNombre {
  height: 20%;
}
.rigth .desc {
  height: 35%;
  overflow: auto;
}
@media only screen and (min-width: 375px) and (max-width: 1000px) {
  .wrapper {
    width: 80vw;
    font-size: 14px;
  }
  .wrapper h5 {
    font-size: 16px;
  }
}

@media only screen and (max-width: 375px) {
  .wrapper {
    width: 80vw;
    font-size: 10px;
  }
  .wrapper h5 {
    font-size: 12px;
  }
}
</style>