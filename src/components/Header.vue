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
          </ul>


     </div>
     <div class="container">
          <!-- 語言切換區 -->
          <div class="switch_language_area">
               <button type="button" @click="toChinese">中文</button>
               <button type="button" @click="toJapanese">日本語</button>
          </div>
          <!-- 導覽列-->
          <nav>
               <!-- 漢堡按鈕 -->
               <Icon v-on:click="hamburgerOpen" class="hamburger" @click="toggleNav" icon="solar:hamburger-menu-bold" />
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
               margin-top: 0.5remF;
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
                         li {}

                         color: #0050FF;
                         padding-right: 3.5rem;
                         padding-left: 0rem;

                    }
               }
          }
     }


}

.container {
     // border: 2px solid black;
     width: 100vw;
     height: 10vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;


     .switch_language_area {
          // border: 2px solid red;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.3rem;



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

               &:hover {
                    transform: scale(1.1);

               }

               &:active {
                    transform: scale(1);
               }

          }


     }

     nav {
          // border: 2px solid green;
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
                         transition: all 0.2s ease;

                         &:hover {
                              transform: scale(1.1);
                              color: #0050FF;
                              font-weight: bold;

                         }

                         &:active {
                              transform: scale(1);
                         }
                    }

               }
          }
     }


}

//RWD
@media screen and (max-width: 1000px) {
     .container {
          nav {
               .hamburger {
                    display: block; // 顯示漢堡選單按鈕
               }

               .nav_list {
                    display: none; // 隱藏原來的導覽列
                    // ... 樣式 ...
               }

               // 如果需要，在這裡添加其他在小螢幕上的樣式調整
          }
     }

}
</style>
