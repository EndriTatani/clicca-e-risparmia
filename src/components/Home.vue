<template>
  <Header></Header>
    <div class="row px-5 justify-content-between">
      <div class="col-12 col-md-3 p-3 mt-3 h-75 cta-luce">
        <router-link to="/luce">
        <div class="d-flex justify-content-between">
          <h1 class="display-5">Risparmio Luce</h1>
          <i class="bi bi-lightbulb-fill display-4"></i>
        </div>
        <div>Risparmia grazie ai nostri esperti</div>
      </router-link>
        </div>
      <div class="col-12 col-md-3 p-3 mt-3 h-75 cta-gas">
        <router-link to="/gas">
        <div class="d-flex justify-content-between">
          <h1 class="display-5">Risparmio Gas</h1>
          <i class="bi bi-fire display-4"></i>
        </div>
        <div>Risparmia grazie ai nostri esperti</div>
      </router-link>
        </div>
      <div class="col-12 col-md-3 p-3 mt-3 h-75 cta-telefonia">
          <router-link to="/telefonia">
          <div class="d-flex justify-content-between">
            <h1 class="display-5">Risparmio Telefonia</h1>
            <i class="bi bi-telephone-fill display-4"></i>
          </div>
          <div>Risparmia grazie ai nostri esperti</div>
        </router-link>
        </div>
    </div>
</template>

<script setup>
  import Header from './Header.vue'
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
    text-shadow: 0 0 1px rgb(178, 241, 188);
  }

  a:hover {
    color: white;
    transform: scale(1.1);
    transition: 0.4s;
  }

  .cta-luce {
    background-color: rgb(139, 215, 113);
    border-radius: 10px;
  }

  .cta-gas {
    background-color: rgba(139, 215, 113, 0.805);
    border-radius: 10px;
  }

  .cta-telefonia {
    background-color: rgba(139, 215, 113, 0.432);
    border-radius: 10px;
  }
</style>