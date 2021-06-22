<template>
  <div class="d-flex flex-column justify-content-around">
    <div class="contador d-flex flex-row justify-content-around m-3">
      <button
        class="btn btn-success"
        @click="counter++"
        :disabled="counter == producto.stock"
      >
        +
      </button>
      <span>{{ counter }}</span>
      <button
        class="btn btn-danger"
        @click="counter--"
        :disabled="counter == 0"
      >
        -
      </button>
    </div>
    <button class="btn btn-primary addToCart">
      <i @click="click" class="material-icons fa fa-cart-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Contador",
  props: {
    producto: {
      required: true,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style>
.addToCart {
  align-self: center;
  width: 8rem;
}
</style>