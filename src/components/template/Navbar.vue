<template>
  <div class="w-full bg-white px-10 py-4 flex justify-between h-14">
    <div class="flex gap-10">
      <div class="w-full h-20">Logo</div>

      <nav>
        <ul class="flex items-center gap-6">
          <li class="font-sans uppercase font-bold">
            <RouterLink to="/dashboard">Dashboard</RouterLink>
          </li>
          <li class="font-sans uppercase font-bold">
            <RouterLink to="/posts">Posts</RouterLink>
          </li>
          <li class="font-sans uppercase font-bold">
            <RouterLink to="/dashboard">Usuários</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <nav>
      <ul class="flex items-center gap-6">
        <li class="font-sans uppercase font-bold" v-if="true">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          v-if="true"
          class="px-3 p-1 bg-blue-500 text-center font-bold drop-shadow font-sans uppercase text-white rounded hover:bg-blue-700"
        >
          <RouterLink to="/login">Login</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
