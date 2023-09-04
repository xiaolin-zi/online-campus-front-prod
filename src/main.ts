import { createApp } from 'vue';
import Vant, { ConfigProvider } from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible'//兼容设置
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'font-awesome/css/font-awesome.min.css';
import stores from '@/stores/index';
import router from '@/router';
import App from '@/App.vue';

// 导入全局css
import '@/assets/css/normalize.css';
import '@/assets/css/iconfont.css';

const app = createApp(App);

app.use(stores).use(router).use(Vant).use(ElementPlus).use(ConfigProvider);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app');
