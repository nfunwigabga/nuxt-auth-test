export default defineNuxtConfig({
  modules: [
    "@nuxtjs-alt/auth",
    "@nuxtjs-alt/http",
    "@nuxtjs-alt/proxy",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  http: {
    baseURL: "http://api-example.test/api",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  },

  auth: {
    watchLoggedIn: true,
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/",
    },
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "token",
          global: true,
          maxAge: 1800,
        },
        refreshToken: {
          required: false,
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/auth/token", method: "post" },
          refresh: { url: "/auth/refresh", method: "post" },
          user: { url: "/auth/me", method: "get" },
          logout: { url: "/auth/logout", method: "post" },
        },
      },
    },
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
