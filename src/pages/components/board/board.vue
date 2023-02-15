<template>
  <div class="board mx-3">
    <div class="board-title">
      <div class="d-flex">
        <div class="fw-bold" id="title">
          {{ props.boardTitle }}
        </div>
        <div class="mx-1 text-secondary fw-bold">
          {{ store.getFilteredTasks(props.boardTitle).length }}
        </div>
      </div>
    </div>
    <draggable
      :list="store.getFilteredTasks(props.boardTitle)"
      :options="{ group: { name: props.boardTitle } }"
      group="tasks"
      class="list-group"
      :id="props.boardTitle"
      @add="DnDColumn"
      @change="Change"
      :itemKey="props.boardTitle"
    >
      <template #item="{ element }">
        <div><Card :body="element.body" /></div>
      </template>
    </draggable>
    <AddTask
      :boardTitle="boardTitle"
      @setAddingBoardTitle="
        (boardTitle) => store.setAddingBoardTitle(boardTitle)
      "
    />
  </div>
</template>

<script setup>
import { useTaskStore } from "../../../store/store.js";

import AddTask from "../add-task/add-task.vue";
import Card from "../card/card.vue";
import draggable from "vuedraggable";

const props = defineProps(["boardTitle"]);
const store = useTaskStore();

function DnDColumn(event) {
  const from = event.from.id;
  const to = event.to.id;
  const oldIndex = event.oldIndex;
  const newIndex = event.newIndex;
  store.addDnd(oldIndex, newIndex, from, to);
}

function Change(event) {
  if (event.moved) {
    const In = event.moved.element.boardTitle;
    const newIndex = event.moved.newIndex;
    const oldIndex = event.moved.oldIndex;
    store.swapInColumn(oldIndex, newIndex, In);
  }
}
</script>

<style scoped>
.board {
  width: 25%;
}
.board-title {
  display: flex;
  justify-content: space-between;
}
</style>
