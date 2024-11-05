import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 0,
    frutas: ["Fruta 1", "Fruta 2", "Fruta 3"],
  },
  mutations: {
    incrementar(state, payload) {
      state.contador += payload;
    },
    decrementar (state, payload) {
      state.contador -= payload;
    },
  },
  actions: {
    accionIncrementar(context) {
      setTimeout(() => {
        context.commit("incrementar", 10);
      }, 3000);
    },
    accionDecrementar(context) {
      setTimeout(() => {
        context.commit("decrementar", 10);
      }, 3000);
    },
    accionObtenerFrutas(context) {
      const frutas = context.getters.obtenerFrutas;
      console.log(frutas.length); 
    },
  },
  getters: {
    obtenerFrutas(state) {
      return state.frutas;
    },
  },
  modules: {},
});
