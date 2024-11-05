<template>
    <div>
      <h3>{{ contador }}</h3>
      <button @click="accionIncrementar">Incrementar contador</button>
      <button @click="accionDecrementar">Decrementar contador</button>

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
    
      ...mapActions(['accionIncrementar', 'accionDecrementar', 'accionObtenerFrutas']),

    //   botonIncrementar() {
    //     this.$store.dispatch('accionIncrementar')
    //   },
    //   botonDecrementar() {
    //     this.$store.dispatch('accionDecrementar')
    //   },
    //   botonObtenerFrutas() {
    //     this.$store.dispatch('accionObtenerFrutas')
    //   }
    }
  }
  </script>
  