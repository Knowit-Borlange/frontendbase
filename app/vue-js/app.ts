import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp, defineAsyncComponent  } from 'vue';
import helloWorld from './features/hello-world.vue';


var app = createApp({
  components: {
    'hello-world':  helloWorld
  }
});
// app.component('hello-world', defineAsyncComponent(() => import(/* webpackChunkName: "hello-world" */'./features/hello-world.vue')))


// app.component('',  () => import(/* webpackChunkName: "hello-world" */ ""));
app.mount('#app');

  