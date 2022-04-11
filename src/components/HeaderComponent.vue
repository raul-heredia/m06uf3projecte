<template>
  <!-- Background image -->
  <div
    class="relative overflow-hidden h-screen bg-no-repeat bg-cover"
    style="background-position: 50%"
    :style="{ backgroundImage: 'url(' + require('@/assets/sudoku.jpg') + ')' }"
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
      v-bind="taula()"
    >
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="
              text-5xl
              font-bold
              mt-0
              mb-6
              animate__animated animate__bounceInDown
            ">
            {{ title }}
          </h1>
          <h3 class="text-3xl font-bold mb-8">Marc Carbonell i Raúl Heredia</h3>
          <div class="flex-auto">
            <button
              type="button"
              class="
                  inline-block
                  px-6
                  py-2
                  border-2 border-purple-500
                  text-white-500
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  hover:bg-black hover:bg-opacity-5
                  focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out
                  w-30
                  h-10
                  animate__animated animate__fadeInDown
                "
              @click="mostrarModal = !mostrarModal"
            >
              Puntuacions
              </button>
              <transition
                enter-active-class="transition duration-100 ease-out transform animate__animated animate__slideInDown"
                enter-class="scale-95 opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in transform animate__animated animate__slideOutDown"
                leave-class="scale-100 opacity-100"
                leave-to-class="scale-100 opacity-0"
              >
                <TableComponent v-if="mostrarModal"></TableComponent>
                </transition>
          </div>
          <br />
          <div class="flex">
            <div class="flex-auto">
              <a
                href="#/facil"
                v-on:click="this.$parent.navegar"
              >

                <button
                  type="button"
                  class="
                  inline-block
                  px-6
                  py-2
                  border-2 border-green-500
                  text-white-500
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  hover:bg-black hover:bg-opacity-5
                  focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out
                  w-24
                  h-10
                  animate__animated animate__fadeInDown
                "
                >
                  Fàcil
                  </button>
                  </a>
            </div>
            <div class="flex-auto">
              <a
                href="#/normal"
                v-on:click="this.$parent.navegar"
              >
                <button
                  type="button"
                  class="
                  inline-block
                  px-6
                  py-2.5
                  border-2 border-yellow-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  hover:bg-black hover:bg-opacity-5
                  focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out
                  w-24
                  h-10
                  animate__animated animate__fadeInDown
                "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Normal
                  </button>
                  </a>
            </div>
            <div class="flex-auto">
              <a
                href="#/dificil"
                v-on:click="this.$parent.navegar"
              >
                <button
                  type="button"
                  class="
                  inline-block
                  px-6
                  py-2.5
                  border-2 border-red-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  hover:bg-black hover:bg-opacity-5
                  focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out
                  w-24
                  h-10
                  animate__animated animate__fadeInDown
                "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  value="#/contacte"
                  v-on:click="this.$parent.navegar"
                >
                  Difícil
                  </button>
                  </a>
            </div>
          </div>
        </div>

      </div>
      </div>
      </div>
      <!-- Background image -->
</template>

<script>
import TableComponent from "./TableComponent.vue";

export default {
  name: "SudokuGame",
  props: {
    title: String
  },
  components: {
    TableComponent
  },
  data: () => {
    return {
      aPuntuacions: [],
      mostrarModal: false
    };
  },
  methods: {
    taula() {
      var array = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.getItem(localStorage.key(i));
        var obj = JSON.parse(key);
        if (obj.sJugador) array.push(obj);
      }
      this.aPuntuacions = array;
    }
  }
};
</script>

