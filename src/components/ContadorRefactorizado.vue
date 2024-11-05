<template>
    <div>
      <h3>{{ contador }}</h3>
      <button @click="accionModificarContador(10)">Incrementar contador</button>
      <button @click="accionModificarContador(-10)">Decrementar contador</button>
      <button @click="accionObtenerFrutas">Contar frutas</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['contador', 'frutas']),
    },
    methods: {
      ...mapActions(['accionModificarContador', 'accionObtenerFrutas']),
    }
  }
  </script>
  