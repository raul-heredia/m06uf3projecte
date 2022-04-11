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
import NDificilComponent from "./components/NDificilComponent.vue";
import NNormalComponent from "./components/NNormalComponent.vue";
import ResultsComponent from "./components/ResultsComponent.vue";

const rutes = {
  "#/": HeaderComponent,
  "#/contacte": TestComponent,
  "#/facil": NFacilComponent,
  "#/dificil": NDificilComponent,
  "#/normal": NNormalComponent,
  "#/results": ResultsComponent
};
//Portarem les matrius per a carregarles després

const aNDificilSolucion = [
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
];
const aNDificilInicial = [
  [
    { id: "a1", num: 5, editable: false },
    { id: "a2", num: 3, editable: false },
    { id: "a3", num: "", editable: true },
    { id: "a4", num: "", editable: true },
    { id: "a5", num: 7, editable: false },
    { id: "a6", num: "", editable: true },
    { id: "a7", num: "", editable: true },
    { id: "a8", num: "", editable: true },
    { id: "a9", num: "", editable: true }
  ],
  [
    { id: "b1", num: 6, editable: false },
    { id: "b2", num: "", editable: true },
    { id: "b3", num: "", editable: true },
    { id: "b4", num: 1, editable: false },
    { id: "b5", num: 9, editable: false },
    { id: "b6", num: 5, editable: false },
    { id: "b7", num: "", editable: true },
    { id: "b8", num: "", editable: true },
    { id: "b9", num: "", editable: true }
  ],
  [
    { id: "c1", num: "", editable: true },
    { id: "c2", num: 9, editable: false },
    { id: "c3", num: 8, editable: false },
    { id: "c4", num: "", editable: true },
    { id: "c5", num: "", editable: true },
    { id: "c6", num: "", editable: true },
    { id: "c7", num: "", editable: true },
    { id: "c8", num: 6, editable: false },
    { id: "c9", num: "", editable: true }
  ],
  [
    { id: "d1", num: 8, editable: false },
    { id: "d2", num: "", editable: true },
    { id: "d3", num: "", editable: true },
    { id: "d4", num: "", editable: true },
    { id: "d5", num: 6, editable: false },
    { id: "d6", num: "", editable: true },
    { id: "d7", num: "", editable: true },
    { id: "d8", num: "", editable: true },
    { id: "d9", num: 3, editable: false }
  ],
  [
    { id: "e1", num: 4, editable: false },
    { id: "e2", num: "", editable: true },
    { id: "e3", num: "", editable: true },
    { id: "e4", num: 8, editable: false },
    { id: "e5", num: "", editable: true },
    { id: "e6", num: 3, editable: false },
    { id: "e7", num: "", editable: true },
    { id: "e8", num: "", editable: true },
    { id: "e9", num: 1, editable: false }
  ],
  [
    { id: "f1", num: 7, editable: false },
    { id: "f2", num: "", editable: true },
    { id: "f3", num: "", editable: true },
    { id: "f4", num: "", editable: true },
    { id: "f5", num: 2, editable: false },
    { id: "f6", num: "", editable: true },
    { id: "f7", num: "", editable: true },
    { id: "f8", num: "", editable: true },
    { id: "f9", num: 6, editable: false }
  ],
  [
    { id: "g1", num: "", editable: true },
    { id: "g2", num: 6, editable: false },
    { id: "g3", num: "", editable: true },
    { id: "g4", num: "", editable: true },
    { id: "g5", num: "", editable: true },
    { id: "g6", num: "", editable: true },
    { id: "g7", num: 2, editable: false },
    { id: "g8", num: 8, editable: false },
    { id: "g9", num: "", editable: true }
  ],
  [
    { id: "h1", num: "", editable: true },
    { id: "h2", num: "", editable: true },
    { id: "h3", num: "", editable: true },
    { id: "h4", num: 4, editable: false },
    { id: "h5", num: 1, editable: false },
    { id: "h6", num: 9, editable: false },
    { id: "h7", num: "", editable: true },
    { id: "h8", num: "", editable: true },
    { id: "h9", num: 5, editable: false }
  ],
  [
    { id: "i1", num: "", editable: true },
    { id: "i2", num: "", editable: true },
    { id: "i3", num: "", editable: true },
    { id: "i4", num: "", editable: true },
    { id: "i5", num: 8, editable: false },
    { id: "i6", num: "", editable: true },
    { id: "i7", num: "", editable: true },
    { id: "i8", num: 7, editable: false },
    { id: "i9", num: 9, editable: false }
  ]
];
localStorage.setItem("Matriu nDificil", JSON.stringify(aNDificilInicial));
localStorage.setItem(
  "Matriu Solucio nDificil",
  JSON.stringify(aNDificilSolucion)
);
const aNNormalSolucion = [
  [
    { id: "a1", num: 9 },
    { id: "a2", num: 4 },
    { id: "a3", num: 5 },
    { id: "a4", num: 2 },
    { id: "a5", num: 7 },
    { id: "a6", num: 1 },
    { id: "a7", num: 8 },
    { id: "a8", num: 3 },
    { id: "a9", num: 6 }
  ],
  [
    { id: "b1", num: 8 },
    { id: "b2", num: 1 },
    { id: "b3", num: 6 },
    { id: "b4", num: 3 },
    { id: "b5", num: 9 },
    { id: "b6", num: 5 },
    { id: "b7", num: 4 },
    { id: "b8", num: 2 },
    { id: "b9", num: 7 }
  ],
  [
    { id: "c1", num: 7 },
    { id: "c2", num: 3 },
    { id: "c3", num: 2 },
    { id: "c4", num: 6 },
    { id: "c5", num: 8 },
    { id: "c6", num: 4 },
    { id: "c7", num: 5 },
    { id: "c8", num: 1 },
    { id: "c9", num: 9 }
  ],
  [
    { id: "d1", num: 2 },
    { id: "d2", num: 5 },
    { id: "d3", num: 8 },
    { id: "d4", num: 4 },
    { id: "d5", num: 6 },
    { id: "d6", num: 7 },
    { id: "d7", num: 3 },
    { id: "d8", num: 9 },
    { id: "d9", num: 1 }
  ],
  [
    { id: "e1", num: 6 },
    { id: "e2", num: 9 },
    { id: "e3", num: 4 },
    { id: "e4", num: 1 },
    { id: "e5", num: 3 },
    { id: "e6", num: 8 },
    { id: "e7", num: 7 },
    { id: "e8", num: 5 },
    { id: "e9", num: 2 }
  ],
  [
    { id: "f1", num: 3 },
    { id: "f2", num: 7 },
    { id: "f3", num: 1 },
    { id: "f4", num: 5 },
    { id: "f5", num: 2 },
    { id: "f6", num: 9 },
    { id: "f7", num: 6 },
    { id: "f8", num: 4 },
    { id: "f9", num: 8 }
  ],

  [
    { id: "g1", num: 4 },
    { id: "g2", num: 6 },
    { id: "g3", num: 7 },
    { id: "g4", num: 9 },
    { id: "g5", num: 5 },
    { id: "g6", num: 2 },
    { id: "g7", num: 1 },
    { id: "g8", num: 8 },
    { id: "g9", num: 3 }
  ],
  [
    { id: "h1", num: 1 },
    { id: "h2", num: 2 },
    { id: "h3", num: 3 },
    { id: "h4", num: 8 },
    { id: "h5", num: 4 },
    { id: "h6", num: 6 },
    { id: "h7", num: 9 },
    { id: "h8", num: 7 },
    { id: "h9", num: 5 }
  ],
  [
    { id: "i1", num: 5 },
    { id: "i2", num: 8 },
    { id: "i3", num: 9 },
    { id: "i4", num: 7 },
    { id: "i5", num: 1 },
    { id: "i6", num: 3 },
    { id: "i7", num: 2 },
    { id: "i8", num: 6 },
    { id: "i9", num: 4 }
  ]
];
const aNNormalInicial = [
  [
    { id: "a1", num: "", editable: true },
    { id: "a2", num: "", editable: true },
    { id: "a3", num: 5, editable: false },
    { id: "a4", num: "", editable: true },
    { id: "a5", num: "", editable: true },
    { id: "a6", num: "", editable: true },
    { id: "a7", num: 8, editable: false },
    { id: "a8", num: "", editable: true },
    { id: "a9", num: "", editable: true }
  ],
  [
    { id: "b1", num: 8, editable: false },
    { id: "b2", num: 1, editable: false },
    { id: "b3", num: 6, editable: false },
    { id: "b4", num: "", editable: true },
    { id: "b5", num: "", editable: true },
    { id: "b6", num: 5, editable: false },
    { id: "b7", num: 4, editable: false },
    { id: "b8", num: 2, editable: false },
    { id: "b9", num: 7, editable: false }
  ],
  [
    { id: "c1", num: 7, editable: false },
    { id: "c2", num: "", editable: true },
    { id: "c3", num: 2, editable: false },
    { id: "c4", num: 6, editable: false },
    { id: "c5", num: "", editable: true },
    { id: "c6", num: "", editable: true },
    { id: "c7", num: "", editable: true },
    { id: "c8", num: 1, editable: false },
    { id: "c9", num: 9, editable: false }
  ],
  [
    { id: "d1", num: 2, editable: false },
    { id: "d2", num: "", editable: true },
    { id: "d3", num: "", editable: true },
    { id: "d4", num: "", editable: true },
    { id: "d5", num: "", editable: true },
    { id: "d6", num: 7, editable: false },
    { id: "d7", num: 3, editable: false },
    { id: "d8", num: "", editable: true },
    { id: "d9", num: 1, editable: false }
  ],
  [
    { id: "e1", num: 6, editable: false },
    { id: "e2", num: 9, editable: false },
    { id: "e3", num: "", editable: true },
    { id: "e4", num: 1, editable: false },
    { id: "e5", num: "", editable: true },
    { id: "e6", num: 8, editable: false },
    { id: "e7", num: 7, editable: false },
    { id: "e8", num: "", editable: true },
    { id: "e9", num: "", editable: true }
  ],
  [
    { id: "f1", num: 3, editable: false },
    { id: "f2", num: 7, editable: false },
    { id: "f3", num: 1, editable: false },
    { id: "f4", num: 5, editable: false },
    { id: "f5", num: "", editable: true },
    { id: "f6", num: "", editable: true },
    { id: "f7", num: "", editable: true },
    { id: "f8", num: 4, editable: false },
    { id: "f9", num: "", editable: true }
  ],
  [
    { id: "g1", num: "", editable: true },
    { id: "g2", num: 6, editable: false },
    { id: "g3", num: "", editable: true },
    { id: "g4", num: 9, editable: false },
    { id: "g5", num: "", editable: true },
    { id: "g6", num: 2, editable: false },
    { id: "g7", num: "", editable: true },
    { id: "g8", num: "", editable: true },
    { id: "g9", num: "", editable: true }
  ],
  [
    { id: "h1", num: 1, editable: false },
    { id: "h2", num: "", editable: true },
    { id: "h3", num: 3, editable: false },
    { id: "h4", num: "", editable: true },
    { id: "h5", num: 4, editable: false },
    { id: "h6", num: "", editable: true },
    { id: "h7", num: 9, editable: false },
    { id: "h8", num: 7, editable: false },
    { id: "h9", num: "", editable: true }
  ],
  [
    { id: "i1", num: 5, editable: false },
    { id: "i2", num: 8, editable: false },
    { id: "i3", num: "", editable: true },
    { id: "i4", num: 7, editable: false },
    { id: "i5", num: "", editable: true },
    { id: "i6", num: "", editable: true },
    { id: "i7", num: 2, editable: false },
    { id: "i8", num: 6, editable: false },
    { id: "i9", num: 4, editable: false }
  ]
];

localStorage.setItem(
  "Matriu nNormal Solucion",
  JSON.stringify(aNNormalSolucion)
);
localStorage.setItem("Matriu nNormal", JSON.stringify(aNNormalInicial));

const aNFacilSolucion = [
  [
    { id: "a1", num: 4 },
    { id: "a2", num: 1 },
    { id: "a3", num: 5 },
    { id: "a4", num: 3 },
    { id: "a5", num: 7 },
    { id: "a6", num: 8 },
    { id: "a7", num: 2 },
    { id: "a8", num: 9 },
    { id: "a9", num: 6 }
  ],
  [
    { id: "b1", num: 2 },
    { id: "b2", num: 3 },
    { id: "b3", num: 7 },
    { id: "b4", num: 1 },
    { id: "b5", num: 6 },
    { id: "b6", num: 9 },
    { id: "b7", num: 4 },
    { id: "b8", num: 8 },
    { id: "b9", num: 5 }
  ],
  [
    { id: "c1", num: 6 },
    { id: "c2", num: 8 },
    { id: "c3", num: 9 },
    { id: "c4", num: 4 },
    { id: "c5", num: 2 },
    { id: "c6", num: 5 },
    { id: "c7", num: 7 },
    { id: "c8", num: 3 },
    { id: "c9", num: 1 }
  ],
  [
    { id: "d1", num: 8 },
    { id: "d2", num: 9 },
    { id: "d3", num: 3 },
    { id: "d4", num: 7 },
    { id: "d5", num: 5 },
    { id: "d6", num: 1 },
    { id: "d7", num: 6 },
    { id: "d8", num: 2 },
    { id: "d9", num: 4 }
  ],
  [
    { id: "e1", num: 5 },
    { id: "e2", num: 7 },
    { id: "e3", num: 4 },
    { id: "e4", num: 2 },
    { id: "e5", num: 3 },
    { id: "e6", num: 6 },
    { id: "e7", num: 9 },
    { id: "e8", num: 1 },
    { id: "e9", num: 8 }
  ],
  [
    { id: "f1", num: 1 },
    { id: "f2", num: 6 },
    { id: "f3", num: 2 },
    { id: "f4", num: 9 },
    { id: "f5", num: 8 },
    { id: "f6", num: 4 },
    { id: "f7", num: 3 },
    { id: "f8", num: 5 },
    { id: "f9", num: 7 }
  ],

  [
    { id: "g1", num: 9 },
    { id: "g2", num: 2 },
    { id: "g3", num: 8 },
    { id: "g4", num: 6 },
    { id: "g5", num: 1 },
    { id: "g6", num: 7 },
    { id: "g7", num: 5 },
    { id: "g8", num: 4 },
    { id: "g9", num: 3 }
  ],
  [
    { id: "h1", num: 7 },
    { id: "h2", num: 4 },
    { id: "h3", num: 1 },
    { id: "h4", num: 5 },
    { id: "h5", num: 9 },
    { id: "h6", num: 3 },
    { id: "h7", num: 8 },
    { id: "h8", num: 6 },
    { id: "h9", num: 2 }
  ],
  [
    { id: "i1", num: 3 },
    { id: "i2", num: 5 },
    { id: "i3", num: 6 },
    { id: "i4", num: 8 },
    { id: "i5", num: 4 },
    { id: "i6", num: 2 },
    { id: "i7", num: 1 },
    { id: "i8", num: 7 },
    { id: "i9", num: 9 }
  ]
];
const aNFacilInicial = [
  [
    { id: "a1", num: 4, editable: false },
    { id: "a2", num: "", editable: true },
    { id: "a3", num: 5, editable: false },
    { id: "a4", num: 3, editable: false },
    { id: "a5", num: 7, editable: false },
    { id: "a6", num: 8, editable: false },
    { id: "a7", num: 2, editable: false },
    { id: "a8", num: 9, editable: false },
    { id: "a9", num: 6, editable: false }
  ],
  [
    { id: "b1", num: 2, editable: false },
    { id: "b2", num: 3, editable: false },
    { id: "b3", num: 7, editable: false },
    { id: "b4", num: "", editable: true },
    { id: "b5", num: 6, editable: false },
    { id: "b6", num: 9, editable: false },
    { id: "b7", num: 4, editable: false },
    { id: "b8", num: 8, editable: false },
    { id: "b9", num: 5, editable: false }
  ],
  [
    { id: "c1", num: 6, editable: false },
    { id: "c2", num: 8, editable: false },
    { id: "c3", num: 9, editable: false },
    { id: "c4", num: 4, editable: false },
    { id: "c5", num: 2, editable: false },
    { id: "c6", num: 5, editable: false },
    { id: "c7", num: 7, editable: false },
    { id: "c8", num: "", editable: true },
    { id: "c9", num: 1, editable: false }
  ],
  [
    { id: "d1", num: 8, editable: false },
    { id: "d2", num: 9, editable: false },
    { id: "d3", num: 3, editable: false },
    { id: "d4", num: 7, editable: false },
    { id: "d5", num: 5, editable: false },
    { id: "d6", num: 1, editable: false },
    { id: "d7", num: 6, editable: false },
    { id: "d8", num: 2, editable: false },
    { id: "d9", num: "", editable: true }
  ],
  [
    { id: "e1", num: "", editable: true },
    { id: "e2", num: 7, editable: false },
    { id: "e3", num: 4, editable: false },
    { id: "e4", num: 2, editable: false },
    { id: "e5", num: 3, editable: false },
    { id: "e6", num: 6, editable: false },
    { id: "e7", num: 9, editable: false },
    { id: "e8", num: 1, editable: false },
    { id: "e9", num: 8, editable: false }
  ],
  [
    { id: "f1", num: 1, editable: false },
    { id: "f2", num: 6, editable: false },
    { id: "f3", num: 2, editable: false },
    { id: "f4", num: 9, editable: false },
    { id: "f5", num: 8, editable: false },
    { id: "f6", num: "", editable: true },
    { id: "f7", num: 3, editable: false },
    { id: "f8", num: 5, editable: false },
    { id: "f9", num: 7, editable: false }
  ],

  [
    { id: "g1", num: 9, editable: false },
    { id: "g2", num: 2, editable: false },
    { id: "g3", num: "", editable: true },
    { id: "g4", num: 6, editable: false },
    { id: "g5", num: 1, editable: false },
    { id: "g6", num: 7, editable: false },
    { id: "g7", num: 5, editable: false },
    { id: "g8", num: 4, editable: false },
    { id: "g9", num: 3, editable: false }
  ],
  [
    { id: "h1", num: 7, editable: false },
    { id: "h2", num: 4, editable: false },
    { id: "h3", num: 1, editable: false },
    { id: "h4", num: 5, editable: false },
    { id: "h5", num: 9, editable: false },
    { id: "h6", num: 3, editable: false },
    { id: "h7", num: "", editable: true },
    { id: "h8", num: 6, editable: false },
    { id: "h9", num: 2, editable: false }
  ],
  [
    { id: "i1", num: 3, editable: false },
    { id: "i2", num: 5, editable: false },
    { id: "i3", num: 6, editable: false },
    { id: "i4", num: 8, editable: false },
    { id: "i5", num: 4, editable: false },
    { id: "i6", num: 2, editable: false },
    { id: "i7", num: "", editable: true },
    { id: "i8", num: 7, editable: false },
    { id: "i9", num: 9, editable: false }
  ]
];
localStorage.setItem("Matriu nFacil Solucion", JSON.stringify(aNFacilSolucion));
localStorage.setItem("Matriu nFacil", JSON.stringify(aNFacilInicial));
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
