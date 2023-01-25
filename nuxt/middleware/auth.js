export default defineNuxtRouteMiddleware(async (to, from) => {
    const loginData = useLoginState();
    if (!loginData.value.isAuth) {
      return navigateTo('/login')
    }
});