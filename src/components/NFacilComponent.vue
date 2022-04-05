<script>
import ResultsComponent from "./ResultsComponent.vue";
export default {
  name: "NivelFacil",
  props: {
    title: String,
  },
  components: {
    ResultsComponent,
  },
  data: () => {
    return {
      aSolucion: [
        [
          { id: "a1", num: 5 },
          { id: "a2", num: 3 },
          { id: "a3", num: 4 },
          { id: "a4", num: 6 },
          { id: "a5", num: 7 },
          { id: "a6", num: 8 },
          { id: "a7", num: 9 },
          { id: "a8", num: 1 },
          { id: "a9", num: 2 },
        ],
        [
          { id: "b1", num: 6 },
          { id: "b2", num: 7 },
          { id: "b3", num: 2 },
          { id: "b4", num: 1 },
          { id: "b5", num: 9 },
          { id: "b6", num: 5 },
          { id: "b7", num: 3 },
          { id: "b8", num: 4 },
          { id: "b9", num: 8 },
        ],
        [
          { id: "c1", num: 1 },
          { id: "c2", num: 9 },
          { id: "c3", num: 8 },
          { id: "c4", num: 3 },
          { id: "c5", num: 4 },
          { id: "c6", num: 2 },
          { id: "c7", num: 5 },
          { id: "c8", num: 6 },
          { id: "c9", num: 7 },
        ],
        [
          { id: "d1", num: 8 },
          { id: "d2", num: 5 },
          { id: "d3", num: 9 },
          { id: "d4", num: 7 },
          { id: "d5", num: 6 },
          { id: "d6", num: 1 },
          { id: "d7", num: 4 },
          { id: "d8", num: 2 },
          { id: "d9", num: 3 },
        ],
        [
          { id: "e1", num: 4 },
          { id: "e2", num: 2 },
          { id: "e3", num: 6 },
          { id: "e4", num: 8 },
          { id: "e5", num: 5 },
          { id: "e6", num: 3 },
          { id: "e7", num: 7 },
          { id: "e8", num: 9 },
          { id: "e9", num: 1 },
        ],
        [
          { id: "f1", num: 7 },
          { id: "f2", num: 1 },
          { id: "f3", num: 3 },
          { id: "f4", num: 9 },
          { id: "f5", num: 2 },
          { id: "f6", num: 4 },
          { id: "f7", num: 8 },
          { id: "f8", num: 5 },
          { id: "f9", num: 6 },
        ],
        [
          { id: "g1", num: 9 },
          { id: "g2", num: 6 },
          { id: "g3", num: 1 },
          { id: "g4", num: 5 },
          { id: "g5", num: 3 },
          { id: "g6", num: 7 },
          { id: "g7", num: 2 },
          { id: "g8", num: 8 },
          { id: "g9", num: 4 },
        ],
        [
          { id: "h1", num: 2 },
          { id: "h2", num: 8 },
          { id: "h3", num: 7 },
          { id: "h4", num: 4 },
          { id: "h5", num: 1 },
          { id: "h6", num: 9 },
          { id: "h7", num: 6 },
          { id: "h8", num: 3 },
          { id: "h9", num: 5 },
        ],
        [
          { id: "i1", num: 3 },
          { id: "i2", num: 4 },
          { id: "i3", num: 5 },
          { id: "i4", num: 2 },
          { id: "i5", num: 8 },
          { id: "i6", num: 6 },
          { id: "i7", num: 1 },
          { id: "i8", num: 7 },
          { id: "i9", num: 9 },
        ],
      ],
      aInicial: [
        [
          { id: "a1", num: 5, editable: false },
          { id: "a2", num: 3, editable: false },
          { id: "a3", num: 0, editable: true },
          { id: "a4", num: 0, editable: true },
          { id: "a5", num: 7, editable: false },
          { id: "a6", num: 0, editable: true },
          { id: "a7", num: 0, editable: true },
          { id: "a8", num: 0, editable: true },
          { id: "a9", num: 0, editable: true },
        ],
        [
          { id: "b1", num: 6, editable: false },
          { id: "b2", num: 0, editable: true },
          { id: "b3", num: 0, editable: true },
          { id: "b4", num: 1, editable: false },
          { id: "b5", num: 9, editable: false },
          { id: "b6", num: 5, editable: false },
          { id: "b7", num: 0, editable: true },
          { id: "b8", num: 0, editable: true },
          { id: "b9", num: 0, editable: true },
        ],
        [
          { id: "c1", num: 0, editable: true },
          { id: "c2", num: 9, editable: false },
          { id: "c3", num: 8, editable: false },
          { id: "c4", num: 0, editable: true },
          { id: "c5", num: 0, editable: true },
          { id: "c6", num: 0, editable: true },
          { id: "c7", num: 0, editable: true },
          { id: "c8", num: 6, editable: false },
          { id: "c9", num: 0, editable: true },
        ],
        [
          { id: "d1", num: 8, editable: false },
          { id: "d2", num: 0, editable: true },
          { id: "d3", num: 0, editable: true },
          { id: "d4", num: 0, editable: true },
          { id: "d5", num: 6, editable: false },
          { id: "d6", num: 0, editable: true },
          { id: "d7", num: 0, editable: true },
          { id: "d8", num: 0, editable: true },
          { id: "d9", num: 3, editable: false },
        ],
        [
          { id: "e1", num: 4, editable: false },
          { id: "e2", num: 0, editable: true },
          { id: "e3", num: 0, editable: true },
          { id: "e4", num: 8, editable: false },
          { id: "e5", num: 0, editable: true },
          { id: "e6", num: 3, editable: false },
          { id: "e7", num: 0, editable: true },
          { id: "e8", num: 0, editable: true },
          { id: "e9", num: 1, editable: false },
        ],
        [
          { id: "f1", num: 7, editable: false },
          { id: "f2", num: 0, editable: true },
          { id: "f3", num: 0, editable: true },
          { id: "f4", num: 0, editable: true },
          { id: "f5", num: 2, editable: false },
          { id: "f6", num: 0, editable: true },
          { id: "f7", num: 0, editable: true },
          { id: "f8", num: 0, editable: true },
          { id: "f9", num: 6, editable: false },
        ],
        [
          { id: "g1", num: 0, editable: true },
          { id: "g2", num: 6, editable: false },
          { id: "g3", num: 0, editable: true },
          { id: "g4", num: 0, editable: true },
          { id: "g5", num: 0, editable: true },
          { id: "g6", num: 0, editable: true },
          { id: "g7", num: 2, editable: false },
          { id: "g8", num: 8, editable: false },
          { id: "g9", num: 0, editable: true },
        ],
        [
          { id: "h1", num: 0, editable: true },
          { id: "h2", num: 0, editable: true },
          { id: "h3", num: 0, editable: true },
          { id: "h4", num: 4, editable: false },
          { id: "h5", num: 1, editable: false },
          { id: "h6", num: 9, editable: false },
          { id: "h7", num: 0, editable: true },
          { id: "h8", num: 0, editable: true },
          { id: "h9", num: 5, editable: false },
        ],
        [
          { id: "i1", num: 0, editable: true },
          { id: "i2", num: 0, editable: true },
          { id: "i3", num: 0, editable: true },
          { id: "i4", num: 0, editable: true },
          { id: "i5", num: 8, editable: false },
          { id: "i6", num: 0, editable: true },
          { id: "i7", num: 0, editable: true },
          { id: "i8", num: 7, editable: false },
          { id: "i9", num: 9, editable: false },
        ],
      ],
      modalOpen: false,
      bCheckButton: true,
      contEncerts: 0,
      contErrors: 0,
      contTemps: 0,
      bContador: false,
      polling: null,
    };
  },
  methods: {
    funcioMatriu() {
      this.aInicial.forEach((linea) => {
        linea.forEach((casella) => {
          if (casella.num == 0) casella.num = "";
        });
      });
      this.bContador = true;
    },
    comprovarMatriu() {
      var copiaaInicial = [];
      var copiaaSolucion = [];
      //COPIA ELS NOMBRES DE LA MATRIU DEL USUARI
      for (var i = 0; i < this.aInicial.length; ++i) {
        if (!copiaaInicial[i]) copiaaInicial[i] = [];

        for (var k = 0; k < this.aInicial[i].length; ++k) {
          copiaaInicial[i][k] = this.aInicial[i][k].num;
          this.aInicial[i][k].editable = false;
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
      console.log(this.contEncerts);
      console.log(this.contErrors);
      this.modalOpen ? (this.modalOpen = false) : (this.modalOpen = true);
      this.bCheckButton = false;
      this.bContador = false;
    },
  },
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
      <br />
      <br />
      <div class="panel">
        <div v-for="row in aInicial" :key="row.id" class="row">
          <div v-for="cell in row" :key="cell.id" class="grid-cell">
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
        <ResultsComponent v-if="modalOpen" class="result"></ResultsComponent>
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
