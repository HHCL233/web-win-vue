<script setup lang="ts">
import { ref } from 'vue'


const activeIndex = ref(0)
const menu = ref([
  { name: '主页', icon: 'M904.699382 574.392002l58.97416-58.97416-118.529557-118.520347 0.005117-213.882252-81.07041 0 0.00307 132.827191L513.284761 65.066925l-1.11438 1.113357-1.113357-1.113357L60.696896 515.416819l58.993602 58.95574 70.992891-70.991868 0.008186 456.137715 81.050967 0L271.742543 959.485661l492.354568 0.027629 0 0.005117 81.032548 0 0 0 0.019443 0L845.149101 878.429577l-0.017396 0 0.00921-363.590925L904.699382 574.392002zM764.095064 878.434693l-168.609139 0.010233L595.485925 607.621824l-166.594249 0 0 270.831288-157.149133 0.00921 0-456.138738 239.313457-239.308341 1.113357 1.113357 1.11438-1.113357 250.80007 250.77551L764.095064 878.434693z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '测试', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { name: '设置', icon: 'M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z' }
])
</script>

<template>
  <!--<winbutton>ddd1</winbutton>
  <winitem v-model="activeIndex" :items="menu" class="my-sidebar" />
  <wintile title="照片"
    icon='M12 3C6.5 3 2 6.6 2 11c0 2.1 1 4 2.6 5.4-.1.4-.4 1.6-.4 2.6 0 .5.4 1 .9 1 .2 0 .3 0 .5-.1.8-.3 2.4-1.1 3.5-1.6.9.3 1.9.5 3 .5 5.5 0 10-3.6 10-8 0-4.4-4.5-8-10-8zm0 14c-4.4 0-8-2.7-8-6s3.6-6 8-6 8 2.7 8 6-3.6 6-8 6z' />-->
  <wintab :menu="menu" titlebar="true" titlebartext="Web-Win-Vue"
    :url="['test/test1/', 'test/test1/', 'test/test1/', 'test/test1/', 'test/test1/', 'test/test1/', 'test/test1/', 'test/test1/', 'test/test1/', 'test/test1/']"
    style="height: calc( 100% - 0.9px );"></wintab>
</template>

<style scoped>
html,
body,
#app {
  height: calc(100% - 13px);
  margin: 0;
  background-color: #e6e6e6;
}
</style>
<style scoped>
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