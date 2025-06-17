// plugins/navigation-guard.client.js
export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.beforeEach((to, from, next) => {
    // Clear any cached components that might cause issues
    if (process.client) {
      // Force component refresh on navigation
      document.body.classList.add("page-transitioning");
    }
    next();
  });

  router.afterEach(() => {
    if (process.client) {
      document.body.classList.remove("page-transitioning");
    }
  });
});
