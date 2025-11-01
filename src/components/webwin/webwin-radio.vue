<template>
  <input type="radio" class="ww-radio" :name="name" :id="name" v-model="checked"
    @click="$emit('click', $event)" /><label :for="name" class="ww-radio-label">
    <slot></slot>
  </label>
</template>
<style scoped>
.ww-radio[type="radio"] {
  position: absolute;
  opacity: 0;
}

.ww-radio-label::before {
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

.ww-radio-label {
  display: flex;
  align-items: center;
}

.ww-radio[type="radio"]:checked+.ww-radio-label::before {
  background-color: #0077d7;
  border-color: #0077d7;
  color: #ffffff;
  box-shadow: inset 0 0 0 2px white;
  line-height: 1.25em;
  font-size: 1.1em;
  text-align: center;
}

.ww-radio-label:hover::before,
.ww-radio[type="radio"]:focus+.ww-radio-label::before {
  border-color: #0077d7;
}

.ww-radio[type="radio"]:not(:checked):hover+.ww-radio-label::before,
.ww-radio[type="radio"]:not(:checked):focus+.ww-radio-label::before {
  border-color: #0077d7;
}

.ww-radio[type="radio"]:checked:hover+.ww-radio-label::before {
  border-color: rgb(0, 0, 0);
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ name: String, checked: Array })
const name = ref(props.name)
const checked = ref(props.checked)
console.log(`%c✨Welcome to Web-Win-Vue-radio✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
</script>