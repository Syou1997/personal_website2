<!-- Header.vue -->
<script>
import { RouterLink, RouterView } from 'vue-router'
//Pinia 方法
import { mapState, mapActions } from 'pinia';
//自己的資料庫
import indexStore from '../store/indexStore';
//figma icon
import { Icon } from '@iconify/vue';

export default {
     components: {
          Icon,
     },
     data() {
          return {
               isShow: false

          }
     },
     computed: {
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"]),
     },
     //方法
     methods: {
          ...mapActions(indexStore, ["toChinese", "toJapanese"]),
          //開啟漢堡選單
          hamburgerOpen() {
               this.isShow = !this.isShow;
          }
     },
     //生命週期
     mounted() {
          this.toChinese();
     },
}
</script>

<template>
     <!-- 漢堡選單 -->
     <div v-if="isShow" class="hamburger_list">
          <div class="icon_area">
               <Icon v-on:click="hamburgerOpen" class="cross_icon" icon="maki:cross" />
          </div>
          <ul class="nav_list">
               <li>
                    <RouterLink class="link" to="/">{{ nowLanguage.home }}</RouterLink>
               </li>
               <li>
                    <RouterLink class="link" to="/Resume">{{ nowLanguage.resume }}</RouterLink>
               </li>
               <li>
                    <RouterLink class="link" to="/Project">{{ nowLanguage.project }}</RouterLink>
               </li>
               <li>
                    <RouterLink class="link" to="/Magic">{{ nowLanguage.magic }}</RouterLink>
               </li>
               <!-- <li>
                    <RouterLink class="link" to="/JT">{{ nowLanguage.JT }}</RouterLink>
               </li> -->
               <li>
                    <RouterLink class="link" to="/YT">{{ nowLanguage.YT }}</RouterLink>
               </li>
          </ul>
     </div>

     <div class="container">
          <!-- 語言切換區（按鈕回原始樣式與 hover） -->
          <div class="switch_language_area">
               <button type="button" @click="toChinese">中文</button>
               <button type="button" @click="toJapanese">日本語</button>
          </div>

          <!-- 導覽列-->
          <nav>
               <!-- 漢堡按鈕 -->
               <Icon v-on:click="hamburgerOpen" class="hamburger" icon="solar:hamburger-menu-bold" />
               <ul class="nav_list">
                    <li>
                         <RouterLink class="link" to="/">{{ nowLanguage.home }}</RouterLink>
                    </li>
                    <li>
                         <RouterLink class="link" to="/Resume">{{ nowLanguage.resume }}</RouterLink>
                    </li>
                    <li>
                         <RouterLink class="link" to="/Project">{{ nowLanguage.project }}</RouterLink>
                    </li>
                    <li>
                         <RouterLink class="link" to="/Magic">{{ nowLanguage.magic }}</RouterLink>
                    </li>
                    <!-- <li>
                         <RouterLink class="link" to="/JT">{{ nowLanguage.JT }}</RouterLink>
                    </li> -->
                    <li>
                         <RouterLink class="link" to="/YT">{{ nowLanguage.YT }}</RouterLink>
                    </li>
               </ul>
          </nav>
     </div>
</template>

<style lang="scss" scoped>
.hamburger_list {
     width: 40vw;
     height: 100vh;
     background-color: #F4ECE6;
     box-shadow: -5px -5px 10px -4px white, -5px 5px 10px -4px white;
     position: fixed;
     top: 0;
     right: 0;
     z-index: 10;

     .icon_area {
          display: flex;
          justify-content: end;

          .cross_icon {
               margin-top: 0.5rem;
               /* 修正原本 0.5remF 的 typo */
               font-size: 2rem;
               cursor: pointer;

               &:hover {
                    background-color: white;
                    border-radius: 50%;
                    color: gray;
               }

               &:active {
                    transform: scale(1);
               }
          }
     }

     .nav_list {
          list-style: none;

          li {
               text-align: center;
               margin: 1rem 0;
               padding: 1.5rem;
               transition: all 0.3s ease;

               &:hover {
                    background-color: white;
               }

               a {
                    text-decoration: none;
                    color: black;
                    font-weight: bold;
                    transition: all 0.5s ease;
                    font-size: 1.2rem;

                    &:hover {
                         color: #0050FF;
                         padding-right: 3.5rem;
                         padding-left: 0rem;
                    }
               }
          }
     }
}

.container {
     width: 100vw;
     height: 10vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;

     /* 語言切換按鈕 */
     .switch_language_area {
          button {
               width: 4rem;
               height: 2rem;
               color: white;
               background-image: linear-gradient(315deg, #616161 0%, #343434 74%);
               font-size: 0.8rem;
               font-style: italic;
               margin: 0.5rem 1rem 1rem 1rem;
               border-radius: 5px;
               border: none;
               cursor: pointer;
               transition: all 0.3s ease;
               /* transition 全部 */

               /* 這裡是新的 hover 效果 */
               &:hover {
                    transform: translateY(-2px) scale(1.08);
                    /* 輕微上浮+放大 */
                    background-image: linear-gradient(135deg, #7a7a7a 0%, #1c1c1c 74%);
                    /* 漸層角度換 */
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25), 0 0 0 3px rgba(255, 255, 255, 0.15);
                    /* 光暈 */
                    filter: brightness(1.1);
                    /* 微亮感 */
               }

               &:active {
                    transform: translateY(0) scale(0.97);
                    /* 按下回彈 */
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
               }
          }
     }

     nav {
          margin-right: 3vw;

          .hamburger {
               display: none;
               cursor: pointer;
               font-size: 2rem;
               transition: all 0.2s ease;

               &:hover {
                    transform: scale(1.1);
               }

               &:active {
                    transform: scale(1);
               }
          }

          .nav_list {
               display: flex;
               flex-wrap: wrap;
               list-style: none;
               cursor: pointer;

               li {
                    margin: 1rem;
                    font-size: 1.5rem;

                    .link {
                         text-decoration: none;
                         color: black;
                         transition: all 0.1s ease;
                         font-weight: bold;

                         &:hover {
                              color: #0050FF;
                         }
                    }
               }
          }
     }
}

/* RWD */
@media screen and (max-width: 1000px) {
     .container {
          nav {
               .hamburger {
                    display: block; // 顯示漢堡選單按鈕
               }

               .nav_list {
                    display: none; // 隱藏原來的導覽列
               }
          }
     }
}
</style>
