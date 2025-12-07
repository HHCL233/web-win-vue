<template>
  <input type="radio" class="webwin-radio" :name="name" :id="name" v-model="checked"
    @click="$emit('click', $event)" /><label :for="name" class="webwin-radio-label">
    <slot></slot>
  </label>
</template>
<style scoped>
.webwin-radio[type="radio"] {
  position: absolute;
  opacity: 0;
}

.webwin-radio-label::before {
  --length: 1.1em;
  content: "";
  display: inline-block;
  width: var(--length);
  height: var(--length);
  font-size: 1.1em;
  border: 2.5px solid black;
  margin-right: 6px;
  user-select: none;
  border-radius: 50px;
}

.webwin-radio-label {
  display: flex;
  align-items: center;
}

.webwin-radio[type="radio"]:checked+.webwin-radio-label::before {
  background-color: #0077d7;
  border-color: #0077d7;
  color: #ffffff;
  box-shadow: inset 0 0 0 2px white;
  line-height: 1.25em;
  font-size: 1.1em;
  text-align: center;
}

.webwin-radio-label:hover::before,
.webwin-radio[type="radio"]:focus+.webwin-radio-label::before {
  border-color: #0077d7;
}

.webwin-radio[type="radio"]:not(:checked):hover+.webwin-radio-label::before,
.webwin-radio[type="radio"]:not(:checked):focus+.webwin-radio-label::before {
  border-color: #0077d7;
}

.webwin-radio[type="radio"]:checked:hover+.webwin-radio-label::before {
  border-color: rgb(0, 0, 0);
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ name: String, checked: Array })
const name = ref(props.name)
const checked = ref(props.checked)
</script>