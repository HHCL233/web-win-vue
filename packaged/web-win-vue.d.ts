declare module 'web-win-vue' {
  import type { App } from 'vue';
  
  // 导出组件
  export const winrange: any;
  export const wintopappbar: any;
  export const windropdown: any;
  export const wincard: any;
  export const wincontentdialog: any;
  export const winprogressbar: any;
  export const wincombobox: any;
  export const winradio: any;
  export const wincheckbox: any;
  export const winbutton: any;
  export const winitem: any;
  export const wintile: any;
  export const wintab: any;
  export const wininputbox: any;
  export const winpasswordbox: any;
  export const winricheditbox: any;
  export const winnotifications: any;
  export const winswitch: any;
  export const winlistview: any;
  export const winlistbox: any;
  
  // 导出安装函数
  const WebWin: {
    install(app: App): void;
  };
  
  export default WebWin;
}