new Vue({
    el: '#to-do',
    data: {
        todos: [
            { task: '今日やるタスクを追加', isCompleted: false },
            { task: '今日中にタスク消化！', isCompleted: false },
            { task: 'レッツ　タスク！', isCompleted: false },
        ],
        newTask: '',
    },
    methods: {
        addTodo: function () {
            if (this.newTask == '') return;
            this.todos.push(
                { task: this.newTask, isCompleted: false }
            );
            this.newTask = '';
        },
        deleteTodo: function (todo) {
            var index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
          }
    }
});
