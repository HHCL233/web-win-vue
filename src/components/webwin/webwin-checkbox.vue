<template>
  <input type="checkbox" class="ww-checkbox" :name="name" :id="name" v-model="checked" @click="$emit('click',$event)"/><label :for="name" class="ww-checkbox-label"><slot></slot></label>
</template>
<style scoped>
.ww-checkbox[type="checkbox"] {
  position: absolute;
  opacity: 0;
}

.ww-checkbox-label::before {
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

.ww-checkbox-label {
  display: flex;
  align-items: center;
}

.ww-checkbox[type="checkbox"]:checked+.ww-checkbox-label::before {
  background-color: #0077d7;
  border-color: #0077d7;
  content: "√";
  color: #ffffff;
  line-height: 1.25em;
  font-size: 1.1em;
  text-align: center;
}

.ww-checkbox-label:hover::before,
.ww-checkbox[type="checkbox"]:focus+.ww-checkbox-label::before {
  border-color: #0077d7;
}

.ww-checkbox[type="checkbox"]:not(:checked):hover+.ww-checkbox-label::before,
.ww-checkbox[type="checkbox"]:not(:checked):focus+.ww-checkbox-label::before {
  border-color: #0077d7;
}

.ww-checkbox[type="checkbox"]:checked:hover+.ww-checkbox-label::before {
  border-color: rgb(0, 0, 0);
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ name: String, checked: Array })
const name = ref(props.name)
const checked = ref(props.checked)
console.log(`%c✨Welcome to Web-Win-Vue-Checkbox✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
</script>