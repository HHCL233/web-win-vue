<script setup lang="ts">
import winnotifications from './components/webwin/webwin-notifications.vue'
import { ref } from 'vue'

const childRef = ref<InstanceType<typeof winnotifications>>()

// 调用子组件方法
const showNotification = () => {
  if (childRef.value) {
    const result = childRef.value.showNotification();
  }
};
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
    <div class="background">
    <div style="margin-left: 24px;margin-top: 32px;">
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