Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            'fare la spesa',
            'fare la valigia',
            'buttare spazzatura',
            'tagliando macchina'
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
                // this.tasks.push(this.newTask);

                this.tasks = [...this.tasks, this.newTask];
                // *spread operator* crea nuovo array e aggiunge un lemento l'ordine dei paarametri puo essere invertito

            }
            this.newTask = '';

        }
    },
})