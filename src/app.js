import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
      data: {
        todos: [
          {name: "Buy shopping", priority: "high"},
          {name: "Clean bathroom", priority: "low"},
          {name: "Car's MOT", priority: "high"}
        ],
        newItem: "",
        priority: ""
      },
      methods: {
        saveNewItem: function () {
          this.todos.push({name: this.newItem, priority: this.priority})
        },
        deleteAll: function () {
          this.todos = []
        },
        deleteSingle: function (index) {
          this.todos.splice(index, 1)
        }
      }
  });
});
