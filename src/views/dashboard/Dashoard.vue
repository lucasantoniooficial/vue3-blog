<template>
  <div class="grid grid-cols-2 gap-10 px-10 py-5">
    <div class="flex justify gap-4 bg-white h-36 drop-shadow rounded-md">
      <div
        class="w-56 flex rounded-l-md justify-center items-center h-full bg-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-20 h-20 fill-white stroke-transparent drop-shadow"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </div>
      <div class="self-center w-full text-center justify-self-center">
        <p class="text-5xl font-bold">100</p>
        <p class="font-medium text-slate text-xl">Posts</p>
      </div>
    </div>
    <div class="flex justify gap-4 bg-white h-36 drop-shadow rounded-md">
      <div
        class="w-56 flex rounded-l-md justify-center items-center h-full bg-green-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-20 h-20 fill-white stroke-transparent drop-shadow"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>
      </div>
      <div class="self-center w-full text-center justify-self-center">
        <p class="text-5xl font-bold">100</p>
        <p class="font-medium text-slate text-xl">Comentários</p>
      </div>
    </div>
  </div>
  <div class="bg-white p-5 rounded-md mx-10 drop-shadow">
    <h3 class="font-sans text-xl border-b-4 pb-3 w-64 font-bold text-slate-500">
      Quantidade posts por mês
    </h3>

    <BarChart :chartData="datas" />
  </div>
</template>

<script setup>
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { defineComponent, ref } from "vue";

Chart.register(...registerables);

const datas = ref({
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      label: "Teste",
      data: [30, 40, 60, 70, 5],
      backgroundColor: ["#77CEFF", "#77CEFF", "#77CEFF", "#77CEFF", "#77CEFF"],
    },
  ],
});

defineComponent({
  components: { BarChart },
});
</script>

<style scoped></style>
