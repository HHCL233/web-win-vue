<script setup lang="ts">
import wininputbox from './components/webwin/webwin-inputbox.vue'
import winpasswordbox from './components/webwin/webwin-passwordbox.vue'
import winricheditbox from './components/webwin/webwin-richeditbox.vue'
import winnotifications from './components/webwin/webwin-notifications.vue'
import winbutton from './components/webwin/webwin-button.vue'
import { ref } from 'vue'

const childRef = ref<InstanceType<typeof winnotifications>>()

// 调用子组件方法
const showNotification = () => {
  if (childRef.value) {
    const result = childRef.value.showNotification();
  }
};
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
    </div>
    </div>
     <winnotifications ref="childRef" name="Web-Win" title="你好！" text="目前显示中文效果有点差，但是英文还可以！" @click="console.log('已经点击了')"/>
</template>
<style scoped>
@media (prefers-color-scheme: dark) {
    h1, h2, p {
        color: #ffffff;
    }
}
</style>