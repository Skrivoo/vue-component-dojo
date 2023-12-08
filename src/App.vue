  <script setup>
  import { ref } from "vue";

  const todoList = ref([])

  </script>

  <template>
    <div class="e-grid e-grid-column e-grid-small e-grid-between" style="height: 200px">
      <div class="e-inputgroup e-cell e-cell-small">
        <form>
          <input class="e-input e-inputgroup__item e-inputgroup__item-fluid e-inputgroup__item-first" type="text" placeholder="Type text here">
          <button class="e-btn">
            Add TODO
          </button>
        </form>
        <button class="e-btn">
          Clear TODO
        </button>
      </div>
      <ul>
        <li>
          Brush your teeth
          <input type="checkbox">
        </li>
        <li style="text-decoration: line-through">
          This one is done
          <input type="checkbox" checked="checked">
        </li>
      </ul>
    </div>
  </template>

  <style>
  </style>
