<template>
  <div class="footer d-flex flex-column">
    <div class="d-flex flex-row justify-content-around">
      <div class="navFooter">
        <ul class="d-flex flex-row flex-wrap">
          <li><router-link to="/Farmacia">Farmacia</router-link></li>
          <li><router-link to="/Juguetes">Juguetes</router-link></li>
          <li><router-link to="/Contacto">Contacto</router-link></li>
        </ul>
      </div>
      <div class="accessRS d-flex flex-column align-content-around">
        <div>
          <p>Encuéntranos en:</p>
        </div>
        <div>
          <a href="https://www.facebook.com" target="_blank"
            ><img src="@/assets/LogoFB.png" alt="LogoFB"
          /></a>
          <a href="https://www.instagram.com" target="_blank"
            ><img src="@/assets/LogoInsta.png" alt="LogoTwitter"
          /></a>
          <a href="https://www.twitter.com" target="_blank"
            ><img src="@/assets/LogoTwitter.png" alt="LogoInsta"
          /></a>
        </div>
      </div>
    </div>
    <div class="copy">
      <p class="text-center">&copy; Sofii Menichelli - Pablo Herrera</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  width: 100%;
  height: 15vh;
  background-color: #bfbfbf;
}
.navFooter {
  align-self: center;
  width: 40vw;
}
.navFooter li {
  list-style-type: none;
}
.navFooter a {
  color: #f27979;
  text-decoration: none;
  margin-left: 0.3rem;
}
.navFooter a:hover {
  background: #f2f2f2;
  color: #f27979;
  border-radius: 5%;
  padding: 0.2rem;
}
.accessRS {
  align-self: center;
}
.accessRS img {
  margin: 0.2rem;
  width: 2rem;
}
.accessRS p {
  margin-top: 0.5rem;
  font-size: 12px;
}
.copy {
  align-self: center;
  font-size: 12px;
}
</style>