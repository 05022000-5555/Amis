import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DatePicker from 'vuejs-datepicker';
/**Khai báo thư viện vue-awesome-paginate */
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import userService from './baseAxios/user-service';
import ResourceVN from './Resource/Resource'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';



// import event bus
import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
// app.component("MisaCombobox", Combobox)
app.config.globalProperties.emitter = emitter;
app.component("DatePicker", DatePicker)

app.use(router).use(userService).use(VueAwesomePaginate).use(VueToast).use(ResourceVN).mount('#app')

