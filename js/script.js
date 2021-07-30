Vue.config.devtools = true;

const root = new Vue({
  el: "#root",
  data: {
    newTask: "",
    isInputVisible: true,
    searchTerm: "",

    tasks: [
      { text: "fare la spesa", done: false },
      { text: "fare la valigia", done: false },
      { text: "buttare la spazzatura", done: false },
      { text: "tagliando macchina", done: false },
    ],
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
      // alt.2 (add task to run)===== this.tasks = this.tasks.filter((item) => item !== task);
      // alt.3 (add task to run)===== this.tasks = this.tasks.filter((item, itemIndex)==>itemIndex !== index );
    },
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, done: false });
        console.log(this.tasks);
        //this.tasks = [...this.tasks, this.newTask];
        //spread operator* crea nuovo array e aggiunge un lemento l'ordine dei paarametri puo essere invertito
      }
      this.newTask = "";
    },
    toggleInput() {
      this.isInputVisible = !this.isInputVisible;
      this.newTask = "";
    },
    showItem(text) {
      if (!this.searchTerm || this.searchTerm.trim() === "") {
        return true;
      }
      const filter = this.searchTerm.trim().toLowerCase();
      text = text.toLowerCase();
      return text.includes(filter);
    },
    toggleDone(index) {
      const updatedTask = this.tasks.map((task, i) => {
        if (i === index) {
          task.done = !task.done;
        }
        return task;
      });
      this.tasks = updatedTask;
    },
    isDone(index) {
      return this.tasks[index].done;
    },
  },
});
