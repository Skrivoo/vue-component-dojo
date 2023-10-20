  <script setup>
  import { ref } from "vue";

  const id = ref(0)
  const newTodo = ref('')
  const todoList = ref([])

  function addTodo() {
    todoList.value.push({
      id: id.value++,
      text: newTodo.value,
      done: false,
    });
    newTodo.value = ''
  }

  function clearTodo() {
    todoList.value = [];
  }

  </script>

  <template>
    <div class="e-grid e-grid-column e-grid-small e-grid-between" style="height: 200px">
      <div class="e-inputgroup e-cell e-cell-small">
        <form @submit.prevent="addTodo">
          <input class="e-input e-inputgroup__item e-inputgroup__item-fluid e-inputgroup__item-first" v-model="newTodo" type="text" placeholder="Type text here">
          <button class="e-btn">
            Add TODO
          </button>
        </form>
        <button @click="clearTodo" class="e-btn">
          Clear TODO
        </button>
      </div>
      <ul>
        <li v-for="todo in todoList" :key="todo.id">
          <span :class="{ done: todo.done }"> {{ todo.text }} </span>
          <input type="checkbox" v-model="todo.done">
        </li>
      </ul>
    </div>
  </template>

  <style>
  .done {
    text-decoration: line-through;
  }
  </style>
