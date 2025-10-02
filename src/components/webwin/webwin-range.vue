<template>
     <input type="range" v-model="model" class="webwin-slider" min="1" max="100" value="50">
</template>
<style scoped>
.webwin-slider {
  --l: 2px;
  --s: 20px;
  

  width: 600px;
  appearance :none;
  background: none;
  cursor: default;
  overflow: hidden;
}

.webwin-slider[type="range" i]::-webkit-slider-thumb{
  height: var(--s);
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 0 3px inset v-bind(color);
  border-image: linear-gradient(90deg,v-bind(color) 50%,#ababab 0) 0 1/calc(50% - 1px) 100vw/0 calc(100vw + 0px);
  -webkit-appearance: none;
  appearance:none;
}

</style>

<script setup>
import { ref } from 'vue'
const model = defineModel()

const props = defineProps({
  color: { type:String, default: '#006fd0' },
})


</script>