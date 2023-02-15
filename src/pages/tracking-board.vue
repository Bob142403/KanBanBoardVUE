<template>
  <Modal />
  <div class="p-2 tracking-board">
    <Board boardTitle="New" />
    <Board boardTitle="In Progress" />
    <Board boardTitle="In Review" />
    <Board boardTitle="Fixed" />
  </div>
</template>

<script setup>
import Board from "./components/board/board.vue";
import Modal from "./components/modal/modal.vue";
</script>

<style scoped>
.tracking-board {
  display: flex;
  user-select: none;
}
</style>
