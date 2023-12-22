import { createApp } from 'vue';
import App from './App';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import './styles/index.scss';

const app = createApp(App);

dayjs.locale('zh-ch');

app.mount('#app');
