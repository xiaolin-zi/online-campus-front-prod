import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'font-awesome/css/font-awesome.min.css';
import stores from '@/stores/index';
import routers from '@/routers';
import App from '@/App.vue';
<<<<<<< HEAD

// 导入全局css
import '@/assets/css/normalize.css';
import '@/assets/css/iconfont.css';

const app = createApp(App);

app.use(stores).use(routers).use(Vant).use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
=======
import router from '@/router';

import 'amfe-flexible'//兼容设置
import { ConfigProvider } from 'vant';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vant);
app.use(ElementPlus);
app.use(ConfigProvider)
>>>>>>> 824f9147ed59108a5aefae92b4a9d1ceaf904e4a

app.mount('#app');
