import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

//  // 設定密碼
//     const correctPassword = "TaiwanSyou";

//     // 顯示密碼提示
//     const input = prompt("請輸入密碼進入本頁面：");

//     if (input !== correctPassword) {
//       // 密碼錯誤時跳轉到其他頁面或顯示錯誤
//       alert("密碼錯誤，將返回首頁");
//       window.location.href = "https://google.com"; // 或任何你希望導向的頁面
//     }

