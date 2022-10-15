<template>
  <div>
    <header class="bg-white py-6 shadow-xl shadow-gray-100">
      <ul class="flex items-center space-x-4 container mx-auto font-bold">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <template v-if="$auth.loggedIn">
          <li>
            <NuxtLink to="/dashboard">Dashboard</NuxtLink>
          </li>
          <li>
            <button @click="$auth.logout()">Logout</button>
          </li>
        </template>
        <li v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </header>
    <main>
      <div class="container py-8 mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style></style>
