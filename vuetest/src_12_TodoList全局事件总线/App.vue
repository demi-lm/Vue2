<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <my-header @addTodo="addTodo"></my-header>

        <my-list
          :todos="todos"
        ></my-list>

        <my-footer
          :todos="todos"
          @checkAllBox="checkAllBox"
          @clearAllBox="clearAllBox"
        ></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";

export default {
  components: { MyHeader, MyList, MyFooter },
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    //添加todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    },
    //全选or取消全选
    checkAllBox(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllBox() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep:true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: lightgreen;
  border: 1px solid green;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: green;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
