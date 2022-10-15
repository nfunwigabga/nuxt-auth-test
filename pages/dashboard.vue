<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div class="p-20 space-y-4">
    <div>Private Dashboard</div>
    <div>{{ $auth.user?.name }}</div>
  </div>
</template>
