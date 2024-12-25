// https://router.vuejs.org/guide/advanced/lazy-loading.html#Lazy-Loading-Routes
// TODO 참고 후 수정한다.
const HelloWorld = () => import('@/components/HelloWorld.vue');

export default [
  {
    path: '/hello-world',
    name: 'helloWorld',
    component: HelloWorld,
  },
];
