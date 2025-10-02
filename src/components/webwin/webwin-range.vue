<template>
     <input type="range" class="slider" min="1" max="100" value="50" @change="console.log">
</template>
<style scoped>
input {
  --c: rgb(98, 0, 255);
  --l: 2px;
  --s: 20px;
  
  width: 600px;
  height: var(--s); /* needed for Firefox*/
  appearance :none;
  background: none;
  cursor: pointer;
  overflow: hidden;
}

input[type="range" i]::-webkit-slider-thumb{
  height: var(--s);
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 0 3px inset var(--c);
  border-image: linear-gradient(90deg,var(--c) 50%,#ababab 0) 0 1/calc(50% - 1px) 100vw/0 calc(100vw + 0px);
  -webkit-appearance: none;
  appearance:none;
}

</style>