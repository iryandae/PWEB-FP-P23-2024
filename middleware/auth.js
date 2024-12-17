export default defineNuxtRouteMiddleware((to, from) => {
    const user = { role: 'user' };
    if (to.path === '/admin' && user.role !== 'admin') {
      return navigateTo('/');
    }
  });  