<script>
export default {};
</script>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">Puntuacions</slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th class="
              border-slate-600
              ...
              ">Nom Jugador</th>
                  <th class="
              border-slate-600
              ...
              ">Puntuacio</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="jug
              in
              $parent.aPuntuacions
              "
                  :key="jug.sJugador
              "
                >
                  <td>{{ jug.sJugador }}</td>
                  <td>{{ jug.puntuacio }}</td>
                  </tr>
              </tbody>
            </table>
          </slot>
        </div>

        <div class="modal-footer
              ">
          <slot name="footer
              ">
            <button
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              @click="$parent.mostrarModal=!
              $parent.mostrarModal
              "
            >OK</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #000000e8;
  border-radius: 3px;
  box-shadow: 2px 3px 8px rgba(217, 0, 255, 0.545);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>