import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus';

import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import 'amfe-flexible'//兼容设置
import { ConfigProvider } from 'vant';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vant);
app.use(ElementPlus);
app.use(ConfigProvider)

app.mount('#app');
