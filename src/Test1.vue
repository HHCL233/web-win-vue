<script setup lang="ts">
import winnotifications from './components/webwin/webwin-notifications.vue'
import { ref } from 'vue'

const childRef = ref<InstanceType<typeof winnotifications>>()

let progress = ref(0);
let progress1 = ref(20);
let progress2 = ref(40);
let progress3 = ref(60);
let progress4 = ref(80);
let progress5 = ref(100);
let progress6 = ref(50);
let progress7 = ref(30);


const showNotification = () => {
  if (childRef.value) {
    childRef.value.showNotification();
    progress.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress1.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress2.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress3.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress4.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress5.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress6.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    progress7.value = Math.floor(Math.random() * (100 - 0 + 1)) + 0; 

  }
};
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
  { name: '设置', icon: 'M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z' }
])
</script>
<template>
    <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
        <h1 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 20px">主页</h1>
        <h2 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 10px;font-size: 24px;">WoW</h2>
        <p style="font-size: 15px;">欢迎来到Web-Win-Vue的世界！</p>
        <wininputbox placeholder="单行输入框" @change='console.log($event.target.value)' />
        <winpasswordbox placeholder="密码" @change='console.log($event.target.value)' />
        <winricheditbox placeholder="多行输入框" />
        <winbutton @click="showNotification()">显示通知</winbutton>
            <wincheckbox name="cheakbox" checked="true" @click="console.log">复选框</wincheckbox>
            <winradio name="cheakbox" checked="true" @click="console.log">单选框</winradio>
            <winradio name="cheakbox" checked="true" @click="console.log">单选框</winradio>
            <winradio name="cheakbox" checked="true" @click="console.log">单选框</winradio>
        <winlistbox :items="menu"/>
        <winprogressbar :progress="progress"/>
        <winprogressbar :progress="progress1"/>
        <winprogressbar :progress="progress2"/>
        <winprogressbar :progress="progress3"/>
        <winprogressbar :progress="progress4"/>
        <winprogressbar :progress="progress5"/>
        <winprogressbar :progress="progress6"/>
        <winprogressbar :progress="progress7"/>
    </div>
    </div>
     <winnotifications img="https://ts2.tc.mm.bing.net/th/id/ODF.uqqGbikGC1X6ig79E3GIhw?w=32&h=32&qlt=97&pcl=fffffa&o=6&pid=1.2" ref="childRef" name="Web-Win" title="你好！" text="目前显示中文效果有点差，但是英文还可以！" @click="console.log('已经点击了')"/>
</template>
<style scoped>
@media (prefers-color-scheme: dark) {
    h1, h2, p {
        color: #ffffff;
    }
}
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

</style>