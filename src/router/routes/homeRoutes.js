// https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes
const HelloWorld = () => import('@/components/HelloWorld.vue');

export default [
  {
    path: '/hello-world',
    name: 'helloWorld',
    component: HelloWorld,
  },
];
