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

          }
     },
     computed: {
          //兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"]),



     },
     //方法
     methods: {
          ...mapActions(indexStore, ["toChinese", "toJapanese"])


     },
     //生命週期
     mounted() {
          this.toChinese();

     },

}
</script>

<template>
     <div class="container">
          <!-- 語言切換區 -->
          <div class="switch_language_area">
               <button type="button" @click="toChinese">中文</button>
               <button type="button" @click="toJapanese">日本語</button>
          </div>
          <!-- 導覽列-->
          <nav>
               <ul>
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
               </ul>
          </nav>

     </div>
</template>
<style lang="scss" scoped>
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

          ul {
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
</style>
