<template>
  <div
    class="add-task"
    data-bs-target="#staticBackdrop"
    data-bs-toggle="modal"
    @click="$emit('setAddingBoardTitle', props.boardTitle)"
  >
    <img src="../../../assets/images/addButton.svg" class="img" />
    Add Task
  </div>
</template>

<script setup>
const props = defineProps(["boardTitle"]);
</script>

<style scoped>
.img {
  width: 25px;
  height: 25px;
  margin: 2px;
  cursor: pointer;
}
.add-task {
  cursor: pointer;
  display: flex;
  width: 30%;
  align-items: center;
}
</style>
