<template>
  <div class="header d-flex justify-content-between">
    <div class="logo d-flex flex-column mt-3">
      <router-link to="/">
        <img src="../assets/logo-petshop.png" alt="Logo" />
      </router-link>
      <h1>PetShop Bianca</h1>
    </div>
    <div class="nav d-flex flex-row justify-content-between mx-auto flex-wrap">
      <router-link to="/">Inicio <span> | </span></router-link>
      <router-link to="Productos/Farmacia"
        >Farmacia <span> | </span>
      </router-link>
      <router-link to="Productos/Juguetes"
        >Juguetes <span> | </span>
      </router-link>
      <router-link to="/Contacto">Contacto</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.header {
  width: 100%;
  height: 20vh;
  background-color: #f2f2f2;
}
.nav {
  align-self: center;
}
.nav a {
  text-decoration: none;
  padding-left: 0.5rem;
  color: #595959;
}
.nav a:hover {
  background: #f2f2f2;
  color: #f27979;
  border-radius: 5%;
  padding: 0.2rem;
}
.logo {
  min-width: 200px;
  width: 40vw;
}
.logo img {
  width: 8rem;
}
.logo h1 {
  font-size: 1.6rem;
  color: #f27979;
}
.nav span {
  color: #f27979;
}
</style>