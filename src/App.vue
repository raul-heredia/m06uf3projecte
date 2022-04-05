<template>
  <div id="app">
    <component :is="vistaActual" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import TestComponent from "./components/TestComponent.vue";
import NoTrobat from "./components/NoTrobat.vue";
import NFacilComponent from "./components/NFacilComponent.vue";
import ResultsComponent from "./components/ResultsComponent.vue";

const rutes = {
  "#/": HeaderComponent,
  "#/contacte": TestComponent,
  "#/facil": NFacilComponent,
  "#/results": ResultsComponent
};

export default {
  name: "App",
  components: {
    HeaderComponent
  },
  data: function() {
    return {
      rutaActual: window.location.hash,
      rutes: rutes
    };
  },
  methods: {
    navegar: function($event) {
      this.rutaActual = $event.target.value;
    }
  },
  computed: {
    vistaActual: function() {
      return this.rutes[this.rutaActual] || NoTrobat;
    }
  },
  //Esta funcion hace que cuando se canvia el #/ de la ruta, se ponga la vista que queremos
  mounted() {
    window.addEventListener("hashchange", () => {
      this.rutaActual = window.location.hash;
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
