<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Task</h1>
        </div>
        <div class="modal-body">
          <textarea class="form-control" v-model="state.body" />
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-success"
            data-bs-dismiss="modal"
            @click="addTask"
          >
            Save
          </button>
          <button
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

import { useTaskStore } from "../../../store/store";

const state = reactive({ body: "" });
const store = useTaskStore();

function addTask() {
  store.addTask({
    boardTitle: store.addingBoardTitle,
    body: state.body,
    id: store.tasks.length + 1,
  });
  state.body = "";
}

function closeModal() {
  state.body = "";
}
</script>
