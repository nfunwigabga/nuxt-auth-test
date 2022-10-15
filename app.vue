<script setup></script>

<template>
  <Html lang="en" class="h-full scroll-smooth bg-white antialiased">
    <Head>
      <Title>Login Test</Title>
      <Meta
        name="description"
        content="Trying to implement a simple authentication system in Nuxt3"
      />
    </Head>

    <Body class="flex h-full flex-col">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
