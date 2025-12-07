<template>
  <input type="checkbox" class="webwin-checkbox" :name="name" :id="name" v-model="checked"
    @click="$emit('click', $event)" /><label :for="name" class="webwin-checkbox-label">
    <slot></slot>
  </label>
</template>
<style scoped>
.webwin-checkbox[type="checkbox"] {
  position: absolute;
  opacity: 0;
}

.webwin-checkbox-label::before {
  --length: 1.1em;
  content: "";
  display: inline-block;
  width: var(--length);
  height: var(--length);
  font-size: 1.1em;
  border: 2.5px solid black;
  margin-right: 6px;
  user-select: none;
}

.webwin-checkbox-label {
  display: flex;
  align-items: center;
}

.webwin-checkbox[type="checkbox"]:checked+.webwin-checkbox-label::before {
  background-color: #0077d7;
  border-color: #0077d7;
  content: "√";
  color: #ffffff;
  line-height: 1.25em;
  font-size: 1.1em;
  text-align: center;
}

.webwin-checkbox-label:hover::before,
.webwin-checkbox[type="checkbox"]:focus+.webwin-checkbox-label::before {
  border-color: #0077d7;
}

.webwin-checkbox[type="checkbox"]:not(:checked):hover+.webwin-checkbox-label::before,
.webwin-checkbox[type="checkbox"]:not(:checked):focus+.webwin-checkbox-label::before {
  border-color: #0077d7;
}

.webwin-checkbox[type="checkbox"]:checked:hover+.webwin-checkbox-label::before {
  border-color: rgb(0, 0, 0);
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ name: String, checked: Array })
const name = ref(props.name)
const checked = ref(props.checked)
</script>