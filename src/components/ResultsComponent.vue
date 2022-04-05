<template>
    <div class="w-60 h-auto  px-4 sm:px-6 lg:px-6 bg-sky-500 ">
        <div class="justify-center">
            <div class="space-y-1">
                <h1 class="font-bold text-grey-900">Puntuació</h1>
            </div>
            <div class="space-y-1">
                <label>Encerts: {{this.$parent.contEncerts}}</label>
                <br>
                <label>Errors: {{this.$parent.contErrors}}</label>
                <br>
                <label>Temps: {{this.$parent.contTemps}}</label>
            </div>
        </div>
        <a
            href="#/"
            v-on:click="this.$parent.navegar"
        >
            <button
                type="button"
                class="px-4 py-3 border border-transparent rounded text-white bg-indigo-600 hover:bg-indigo-500 transition duration-300 ease-in-out"
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
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                    </svg>
                    </button>
                    </a>
    </div>

</template>
<script>
export default {};
</script>

<style>
html {
  font-family: "Inter", sans-serif;
}
</style>