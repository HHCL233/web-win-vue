<template>
  <button><slot></slot></button>
</template>

<style scoped>
          button {
            cursor: default;
            vertical-align:middle;
            line-height:16.67px;
            min-height:16.67px;
            padding: 10px 20px;
            background: var(--primary-color, #CCCCCC);
            color:rgb(0, 0, 0);
            border: none;
            cursor: default;
            font-size: 16px;
            filter: blur(0px);
            transition: filter 0.3s ease;
            transform: scale(1);
            transition: transform 0.3s ease;
          }
          button:active {
            cursor: default;
            transition: opacity 0.3s ease;
            transform: scale(0.97);
            filter: blur(0.5px);
            outline: 0px solid  #999999;
            background: var(--primary-color, #999999);
          }
          button:hover {
            cursor: default;
            outline: 2.75px solid  #999999;
            outline-offset: -2.75px;
          }
          
          button:disabled {
            transition: opacity 0s ease;
            transform: scale(1);
            filter: blur(0);
            outline: 0px solid  #7A7A7A;;
            color:rgb(145, 145, 145);
            background: #cccccc;
            cursor: not-allowed;
          }
</style>

<script setup>
  console.log(`%c✨Welcome to Web-Win-Vue-Button✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
</script>