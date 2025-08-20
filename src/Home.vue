<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
const menu = ref([
  { name: '主页', icon: 'M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '设置', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' }
])
</script>

<template>
  <div class="sidebar">
    <p class="sidebar-text">窗口</p>
  </div>
  <!--<winbutton>ddd1</winbutton>
  <winitem v-model="activeIndex" :items="menu" class="my-sidebar" />
  <wintile title="照片"
    icon='M12 3C6.5 3 2 6.6 2 11c0 2.1 1 4 2.6 5.4-.1.4-.4 1.6-.4 2.6 0 .5.4 1 .9 1 .2 0 .3 0 .5-.1.8-.3 2.4-1.1 3.5-1.6.9.3 1.9.5 3 .5 5.5 0 10-3.6 10-8 0-4.4-4.5-8-10-8zm0 14c-4.4 0-8-2.7-8-6s3.6-6 8-6 8 2.7 8 6-3.6 6-8 6z' />-->
  <wintab :menu="menu"
    :url="['http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test', 'http://localhost:5173/#/test']"
    style="height: calc( 100% - 0.9px );" />
</template>

<style>
html,
body,
#app {
  height: calc(100% - 1px);
  margin: 0;
  overflow: hidden;
}

.sidebar {
  width: 380px;height: 36px;display: flex;align-items: center;background-color: #e6e6e6;
}

.sidebar-text {
  user-select: none;
  margin-left: 16px;font-size: 16px;margin-top: 0;margin-bottom: 0;background-color:#e6e6e6;
}
</style>
<style>
::-webkit-scrollbar {
  width: 4px;
  height: 16px;
  background-color: #e6e6e6;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #ffffff00;
}

::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: #818181;
}

@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar {
    width: 4px;
    height: 16px;
    background-color: #242424;
  }

  html,
  body,
  #app {
    background-color: black;
  }
  .sidebar {
    background-color: #1b1b1b;
    user-select: none;
  }
  .sidebar-text {
    color: #ffffff;
    background-color: #1b1b1b;
    user-select: none;
  }
}
</style>