<template>
  <div class="px-10">
    <div class="flex justify-between items-center w-full">
      <h2 class="py-7 uppercase font-bold text-xl">Posts</h2>
      <RouterLink to="/posts" class="px-3 p-1 bg-blue-500 text-center font-bold drop-shadow font-sans uppercase text-white rounded hover:bg-blue-700">Voltar</RouterLink>
    </div>
    <div class="bg-white rounded p-5">
      <form action="">
        <div class="flex flex-col mb-4">
          <label for="title" class="text-sm">Título</label>
          <input
              type="text"
              class="border rounded focus:outline-none focus:border-slate-600 bg-slate-100 p-1 w-full"
              id="title"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="content" class="text-sm">Conteúdo</label>
          <textarea
              class="border resize-none h-32 rounded focus:outline-none focus:border-slate-600 bg-slate-100 p-1 w-full"
              id="content"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="status" class="text-sm">Status</label>
          <select
              type="text"
              class="border resize-none rounded focus:outline-none focus:border-slate-600 bg-slate-100 p-1 w-full"
              id="status"
          >
            <option value="">Selecione</option>
            <option>Rascunho</option>
            <option>Publicar</option>
          </select>
        </div>
        <button class="px-3 p-1 bg-blue-500 text-center font-bold drop-shadow font-sans uppercase text-white rounded hover:bg-blue-700">Postar</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
