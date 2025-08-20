import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import WebWin from './components/webwin'

const app = createApp(App);

app.use(router);

app.use(WebWin);

app.mount("#app");