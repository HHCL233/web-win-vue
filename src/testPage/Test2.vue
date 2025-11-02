<script setup>
import { ref } from 'vue'
const window1 = ref(null)

function showWindows(top) {
  window1.value.showDialog();
  console.log(top)
}
</script>

<template>
  <winwindow @clickBotton="console.log" ref="window1">这是web-win-vue的弹窗!(目前按钮安排了)</winwindow>
  <wintopappbar :items="[{ 'name': '促销品' }, { 'name': '主页' }, { 'name': '主页' }]" :rightMenu="[{ 'name': '设置' }]"
    @update="showWindows"></wintopappbar>
  <div style="height: 125px;width: 100%;background-color: #0377d7;">
    <p style="height: 24px;width: 100%;margin: 0;"></p>
    <h1 style="margin:0 ;color: #FFF;text-align: center;">促销品</h1>
    <p style="margin-top:12px;color: #FFF;text-align: center;">一点都不值得买</p>
  </div>
  <div style="margin-top: 24px;justify-content: center;display: flex;gap: 12px;flex-wrap: wrap;margin-bottom: 24px;">
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
    <wincard style="width: 256px;">
      <img style="min-width: 100%;min-height: 200px;margin: 0;box-shadow: 0px 0px 0px 1px red inset;" alt=""></img>
      <p style="margin-left: 12px;margin-top: 12px;">精选猪饲料</p>
    </wincard>
  </div>
</template>

<style scoped></style>