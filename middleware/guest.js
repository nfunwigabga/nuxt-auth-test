export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  if (auth.loggedIn) {
    return navigateTo("/");
  }
});
