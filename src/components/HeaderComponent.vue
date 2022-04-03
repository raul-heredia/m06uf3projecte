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
    >
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1
            class="
              text-5xl
              font-bold
              mt-0
              mb-6
              animate__animated animate__bounceInDown
            "
          >
            {{ title }}
          </h1>
          <h3 class="text-3xl font-bold mb-8">Marc Carbonell i Raúl Heredia</h3>
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
              id="exampleText0"
              placeholder="Nom Jugador"
            />
          </div>
          <br />
          <div class="flex">
            <div class="flex-auto">
             <a href="#/facil" v-on:click="this.$parent.navegar">
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
            </div>
            <div class="flex-auto">
             <a href="#/contacte" 
               v-on:click="this.$parent.navegar">
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
export default {
  name: "SudokuGame",
  props: {
    title: String
  }
};
</script>

