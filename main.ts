import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { Uploader, Toast,Field,RadioGroup, Radio,CellGroup,Cell,DropdownMenu, DropdownItem, Tabs, Tab, NavBar} from 'vant';


import App from './App.vue'
import router from './router'
const pinia = createPinia();




const app = createApp(App)

app.use(router)
app.use(NavBar);
app.use(CellGroup);
app.use(Cell);
app.use(Uploader)
app.use(Field)
app.use(Toast)
app.use(Radio);
app.use(RadioGroup);
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(Tabs);
app.use(Tab);

app.use(pinia)

app.mount('#app')
