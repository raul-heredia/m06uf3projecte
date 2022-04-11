<script>
import ResultsComponent from "./ResultsComponent.vue";
export default {
  name: "NivelFacil",
  props: {
    title: String
  },
  components: {
    ResultsComponent
  },
  data: () => {
    return {
      aSolucion: JSON.parse(localStorage.getItem("Matriu Solucio nDificil")),
      aUsuari: JSON.parse(localStorage.getItem("Matriu nDificil")),
      nomJugador: "",
      modalOpen: false,
      bCheckButton: true,
      contEncerts: 0,
      contErrors: 0,
      contTemps: 0,
      nPuntuacio: 0
    };
  },
  methods: {
    funcioMatriu() {
      this.tiempo();
    },
    comprovarMatriu() {
      var copiaaInicial = [];
      var copiaaSolucion = [];
      //COPIA ELS NOMBRES DE LA MATRIU DEL USUARI
      for (var i = 0; i < this.aUsuari.length; ++i) {
        if (!copiaaInicial[i]) copiaaInicial[i] = [];

        for (var k = 0; k < this.aUsuari[i].length; ++k) {
          copiaaInicial[i][k] = this.aUsuari[i][k].num;
          this.aUsuari[i][k].editable = false;
        }
      }
      //COPIA ELS NOMBRES DE LA MATRIU INICIAL
      for (var j = 0; j < this.aSolucion.length; ++j) {
        if (!copiaaSolucion[j]) copiaaSolucion[j] = [];

        for (var h = 0; h < this.aSolucion[j].length; ++h) {
          copiaaSolucion[j][h] = this.aSolucion[j][h].num;
        }
      }
      //COMPROVAR LES MATRIUS
      for (i = 0; i < copiaaSolucion.length; i++) {
        for (j = 0; j < copiaaSolucion[i].length; j++) {
          if (copiaaSolucion[i][j] == copiaaInicial[i][j]) {
            this.contEncerts++;
          } else {
            this.contErrors++;
          }
        }
      }
      this.modalOpen ? (this.modalOpen = false) : (this.modalOpen = true);
      this.bCheckButton = false;
      this.calcularPuntuacio();
    },
    tiempo() {
      clearInterval(this.cronometro);
      if (this.bCheckButton) {
        this.cronometro = setInterval(() => {
          this.contTemps++;
        }, 1000);
      }
    },
    calcularPuntuacio() {
      this.nPuntuacio = this.contEncerts * 300;
      this.nPuntuacio = this.nPuntuacio - this.contErrors * 2;
      this.nPuntuacio = this.nPuntuacio - this.contTemps;
      //Guardem dades al local Storage
      var oJugador = {
        sJugador: this.nomJugador,
        puntuacio: this.nPuntuacio
      };
      localStorage.setItem(this.nomJugador, JSON.stringify(oJugador));
    }
  }
};
</script>

<template>
  <div
    class="
      relative
      overflow-hidden
      h-screen
      bg-no-repeat bg-cover
      animate__animated animate__fadeInDown
    "
    style="background-position: 50%"
    :style="{ backgroundImage: 'url(' + require('@/assets/sudoku.jpg') + ')' }"
    v-bind="funcioMatriu()"
  >
    <div
      class="
        absolute
        top-0
        right-0
        bottom-0
        left-0
        w-full
        h-full
        overflow-hidden
        bg-fixed
      "
      style="background-color: rgba(0, 0, 0, 0.75)"
    >
      <br />
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Sudokus
      </h1>
      <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Nivell Difícil
      </h2>
      <h3 class="font-medium leading-tight text-4xl mt-0 mb-2 text-green-600">
        Temps: {{contTemps}}
      </h3>
      <br />
      <div class="flex justify-center">
        <input
          type="text"
          class="
                form-control
                block
                w-50%
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-green-600
                focus:outline-none
              "
          v-model="nomJugador"
          placeholder="Nom Jugador"
        />
      </div>
      <br />

      <div class="panel">
        <div
          v-for="row in aUsuari"
          :key="row.id"
          class="row"
        >
          <div
            v-for="cell in row"
            :key="cell.id"
            class="grid-cell"
          >
            <div v-if="cell.editable">
              <input
                type="number"
                min="0"
                max="9"
                class="border border-solid border-gray-300 cell"
                v-bind:key="cell.id"
                v-model="cell.num"
              />
            </div>
            <div v-else>
              <input
                type="number"
                min="0"
                max="9"
                class="border border-solid border-neutral-300 cell"
                v-bind:key="cell.id"
                disabled
                v-model="cell.num"
                readonly
              />
            </div>
      </div>
      </div>
      </div>
      <br />
      <button
        type="button"
        class="
          inline-block
          px-6
          py-2.5
          bg-green-800
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-900 hover:shadow-lg
          focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-900 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
        v-on:click="comprovarMatriu()"
        v-if="bCheckButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          </svg>
          </button>

          <transition
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <ResultsComponent
              v-if="modalOpen"
              class="result"
            ></ResultsComponent>
              </transition>
              </div>
              </div>
</template>
<style>
.result {
  align-items: center;
  position: relative;
  margin-top: -300px;
  margin-left: 250px;
}
.panel {
  margin: 0 auto;
  display: table;
  background: white;
  border: 3px solid rgb(118, 118, 118);
}
.grid-cell {
  display: table-cell;
  height: 40px;
  width: 40px;
  text-align: center;
}
.cell {
  text-align: center;
  height: 40px;
  width: 40px;
}

table {
  border-collapse: collapse;
  border: 2px solid;
}

td {
  border: 1px solid;
  text-align: center;
  height: 40px;
  width: 40px;
}

.grid-cell:nth-child(3),
.grid-cell:nth-child(6) {
  border-right: 2px solid;
}

.panel div.row:nth-child(3),
.panel div.row:nth-child(6) {
  border-bottom: 2px solid;
}

input:focus {
  outline: none !important;
}

input[disabled] {
  background-color: #eeeeee;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
