<template>
  <Navbar />
  <slot />
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";

export default defineComponent({
  components: { Navbar },
});
</script>
