import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 0,
    frutas: ["Fruta 1", "Fruta 2", "Fruta 3"],
  },
  mutations: {
    modificarContador(state, payload) {
      state.contador += payload;
    },
  },
  actions: {
    accionModificarContador(context, payload) {
      setTimeout(() => {
        context.commit("modificarContador", payload);
      }, 3000);
    },
    accionObtenerFrutas({ getters }) {
      console.log(getters.obtenerFrutas.length); 
    },
  },
  getters: {
    obtenerFrutas(state) {
      return state.frutas;
    },
  },
});
