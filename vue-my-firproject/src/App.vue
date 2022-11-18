<script>
  import Modal from './Modal.vue'
  import Todo from './Todo.vue'

  export default {
    components: {
      Modal,
      Todo
    },
    data() {
      return {
        showModal: false
      }
    }
  }
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
       <template #body>
        <todo></todo>
       </template>
       
    </modal>
  </Teleport>
</template>