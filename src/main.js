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
const correctPasswordBase64 = "VGFpd2FuU3lvdQ==";

// 顯示密碼提示
const userInput = prompt("請輸入密碼進入本頁面：");

// 關鍵點：必須先將 userInput 轉成 Base64 再比對
if (userInput === null || btoa(userInput) !== correctPasswordBase64) {
  alert("密碼錯誤，將返回首頁");
  window.location.href = "https://google.com";
} else {
  // 密碼正確後的邏輯...
}
