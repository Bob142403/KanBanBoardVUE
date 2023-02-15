import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => {
    return { tasks: [], addingBoardTitle: "" };
  },
  getters: {
    getFilteredTasks(state) {
      return (boardTitle) =>
        state.tasks.filter((task) => task.boardTitle === boardTitle);
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
      console.log(task);
    },
    setAddingBoardTitle(boardTitle) {
      this.addingBoardTitle = boardTitle;
    },
    setTaskBoardTitle(index, newBoardTitle) {
      this.tasks[index].boardTitle = newBoardTitle;
    },
    addDnd(oldIndex, newIndex, from, to) {
      let newTask = JSON.parse(JSON.stringify(this.tasks));
      let arr = this.tasks.filter((task) => task.boardTitle === from);
      let arr2 = this.tasks.filter((task) => task.boardTitle === to);
      arr2.splice(newIndex, 0, arr[oldIndex]);
      arr2[newIndex].boardTitle = to;
      arr.splice(oldIndex, 1);
      newTask = newTask.filter(
        (task) => task.boardTitle !== from && task.boardTitle !== to
      );
      this.tasks = [...newTask, ...arr, ...arr2];
    },
    swapInColumn(oldIndex, newIndex, In) {
      const othersTasks = JSON.parse(JSON.stringify(this.tasks)).filter(
        (task) => task.boardTitle !== In
      );
      const tasksinIn = JSON.parse(JSON.stringify(this.tasks)).filter(
        (task) => task.boardTitle === In
      );
      const removedElement = tasksinIn.splice(oldIndex, 1);
      const obj = {
        boardTitle: removedElement[0].boardTitle,
        body: removedElement[0].body,
        id: removedElement[0].id,
      };
      tasksinIn.splice(newIndex, 0, obj);
      this.tasks = [...tasksinIn, ...othersTasks];
    },
  },
});
