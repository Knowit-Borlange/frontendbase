<template>
  <h1>{{ state.helloWorld }}</h1>
</template>

<script>
  import { reactive } from 'vue';

  export default {
    name: 'hello-world',
    setup() {
      const state = reactive({
        helloWorld: 'Hello world from a vue 3 component'
      })

      return {
        state
      }
    }
  }
</script>
