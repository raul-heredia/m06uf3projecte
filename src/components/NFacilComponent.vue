<script>
export default {
  name: "NivelFacil",
  props: {
    title: String
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
          { id: "a9", num: 2 }
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
          { id: "b9", num: 8 }
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
          { id: "c9", num: 7 }
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
          { id: "d9", num: 3 }
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
          { id: "e9", num: 1 }
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
          { id: "f9", num: 6 }
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
          { id: "g9", num: 4 }
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
          { id: "h9", num: 5 }
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
          { id: "i9", num: 9 }
        ]
      ],
      aInicial: [
        [
          { id: "a1", num: 5 },
          { id: "a2", num: 3 },
          { id: "a3", num: 0 },
          { id: "a4", num: 0 },
          { id: "a5", num: 7 },
          { id: "a6", num: 0 },
          { id: "a7", num: 0 },
          { id: "a8", num: 0 },
          { id: "a9", num: 0 }
        ],
        [
          { id: "b1", num: 6 },
          { id: "b2", num: 0 },
          { id: "b3", num: 0 },
          { id: "b4", num: 1 },
          { id: "b5", num: 9 },
          { id: "b6", num: 5 },
          { id: "b7", num: 0 },
          { id: "b8", num: 0 },
          { id: "b9", num: 0 }
        ],
        [
          { id: "c1", num: 0 },
          { id: "c2", num: 9 },
          { id: "c3", num: 8 },
          { id: "c4", num: 0 },
          { id: "c5", num: 0 },
          { id: "c6", num: 0 },
          { id: "c7", num: 0 },
          { id: "c8", num: 6 },
          { id: "c9", num: 0 }
        ],
        [
          { id: "d1", num: 8 },
          { id: "d2", num: 0 },
          { id: "d3", num: 0 },
          { id: "d4", num: 0 },
          { id: "d5", num: 6 },
          { id: "d6", num: 0 },
          { id: "d7", num: 0 },
          { id: "d8", num: 0 },
          { id: "d9", num: 3 }
        ],
        [
          { id: "e1", num: 4 },
          { id: "e2", num: 0 },
          { id: "e3", num: 0 },
          { id: "e4", num: 8 },
          { id: "e5", num: 0 },
          { id: "e6", num: 3 },
          { id: "e7", num: 0 },
          { id: "e8", num: 0 },
          { id: "e9", num: 1 }
        ],
        [
          { id: "f1", num: 7 },
          { id: "f2", num: 0 },
          { id: "f3", num: 0 },
          { id: "f4", num: 0 },
          { id: "f5", num: 2 },
          { id: "f6", num: 0 },
          { id: "f7", num: 0 },
          { id: "f8", num: 0 },
          { id: "f9", num: 6 }
        ],
        [
          { id: "g1", num: 0 },
          { id: "g2", num: 6 },
          { id: "g3", num: 0 },
          { id: "g4", num: 0 },
          { id: "g5", num: 0 },
          { id: "g6", num: 0 },
          { id: "g7", num: 2 },
          { id: "g8", num: 8 },
          { id: "g9", num: 0 }
        ],
        [
          { id: "h1", num: 0 },
          { id: "h2", num: 0 },
          { id: "h3", num: 0 },
          { id: "h4", num: 4 },
          { id: "h5", num: 1 },
          { id: "h6", num: 9 },
          { id: "h7", num: 0 },
          { id: "h8", num: 0 },
          { id: "h9", num: 5 }
        ],
        [
          { id: "i1", num: 0 },
          { id: "i2", num: 0 },
          { id: "i3", num: 0 },
          { id: "i4", num: 0 },
          { id: "i5", num: 8 },
          { id: "i6", num: 0 },
          { id: "i7", num: 0 },
          { id: "i8", num: 7 },
          { id: "i9", num: 9 }
        ]
      ]
    };
  },
  methods: {
    funcioMatriu() {
      this.aInicial.forEach(linea => {
        linea.forEach(casella => {
          if (casella.num == 0) casella.num = "";
        });
      });
      /* for (var i = 0; i < this.aInicial.length; ++i) {
        for (var k = 0; k < 2; ++k) {
          var indexColumn = Math.floor(Math.random() * this.aInicial.length);
          this.aInicial[i][indexColumn].num = "";
        }
      }*/
    },
    comprovarMatriu() {
      var copiaaInicial = [];
      var copiaaSolucion = [];
      var contEncerts = 0,
        contErros = 0;
      //COPIA ELS NOMBRES DE LA MATRIU DEL USUARI
      for (var i = 0; i < this.aInicial.length; ++i) {
        if (!copiaaInicial[i]) copiaaInicial[i] = [];

        for (var k = 0; k < this.aInicial[i].length; ++k) {
          copiaaInicial[i][k] = this.aInicial[i][k].num;
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
            contEncerts++;
          } else {
            contErros++;
          }
        }
      }
      console.log(contEncerts);
      console.log(contErros);
    }
  }
};
</script>

<template>
  <div
    class="relative overflow-hidden h-screen bg-no-repeat bg-cover animate__animated animate__fadeInDown"
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
      <br>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Sudokus</h1>
      <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">Nivell Infernal</h2>
      <br>
      <br>
      <div class="panel">
        <div
          v-for="row in aInicial"
          :key="row.id"
        >
          <div
            v-for="cell in row"
            :key="cell.id"
            class="grid-cell"
          >
            <input
              type="number"
              min="0"
              max="9"
              class=" border border-solid border-gray-300, cell"
              v-bind:key="cell.id"
              :disabled="cell.num ? '' : disabled"
              v-model="cell.num"
            />
      </div>
      </div>
      </div>
      <br>
      <button
        type="button"
        class="inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
        v-on:click="comprovarMatriu()"
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
          </div>
          </div>
</template>
<style>
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
