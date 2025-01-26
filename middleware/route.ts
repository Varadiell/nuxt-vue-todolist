export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`from "${String(from.name)}" to "${String(to.name)}"`)
})
