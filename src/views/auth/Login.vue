<template>
  <div class="flex justify-center items-center">
    <div class="bg-white mt-10 p-10 drop-shadow-lg rounded-md">
      <h1 class="text-xl uppercase font-bold mb-5 text-center">Blog</h1>
      <form action="">
        <div class="flex flex-col mb-4">
          <label for="email" class="text-sm">E-mail</label>
          <input
            type="email"
            class="border rounded focus:outline-none focus:border-slate-600 bg-slate-100 p-1 w-full"
            id="email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="text-sm">Senha</label>
          <input
            type="password"
            class="border rounded focus:outline-none focus:border-slate-600 bg-slate-100 p-1 w-full"
            id="password"
          />
        </div>
        <button
          class="mt-5 px-3 p-1 bg-blue-500 text-center font-bold drop-shadow font-sans uppercase text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
