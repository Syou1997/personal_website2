<script>
import { RouterLink, RouterView } from 'vue-router'
//Pinia 方法
import { mapState, mapActions } from 'pinia';
//自己的資料庫
import indexStore from '../store/indexStore';
//figma icon
import { Icon } from '@iconify/vue';
export default {
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


     },
}

</script>

<template>
     <div class="container">
          <h1>{{ nowLanguage.resume }}</h1>
          <!-- 學歷 -->
          <h2 style="margin-top: 0;">{{ nowLanguage.education }}</h2>
          <div class="bcg_box">
               <div style="margin-bottom: 0;" class="frame">
                    <div class="info">
                         <h6 class="year">{{ nowLanguage.resumeYear }}</h6>
                         <h3 class="title">{{ nowLanguage.resumeTitle }}</h3>
                    </div>

                    <p class="text">{{ nowLanguage.resumeText }}</p>
               </div>
          </div>
          <!-- 經歷 -->
          <h2>{{ nowLanguage.experience }} </h2>
          <div class="bcg_box">
               <div class="frame">
                    <div class="info">
                         <h6 class="year">{{ nowLanguage.resumeYear5 }}</h6>
                         <h3 class="title">{{ nowLanguage.resumeTitle5 }}</h3>
                    </div>
                    <p class="text">{{ nowLanguage.resumeText5 }}</p>
               </div>
               <div class="frame">
                    <div class="info">
                         <h6 class="year">{{ nowLanguage.resumeYear4 }}</h6>
                         <h3 class="title">{{ nowLanguage.resumeTitle4 }}</h3>
                    </div>
                    <p class="text">{{ nowLanguage.resumeText4 }}</p>
               </div>

               <div class="frame">
                    <div class="info">
                         <h6 class="year">{{ nowLanguage.resumeYear3 }}</h6>
                         <h3 class="title">{{ nowLanguage.resumeTitle3 }}</h3>
                    </div>
                    <p class="text">{{ nowLanguage.resumeText3 }}</p>
               </div>

               <div class="frame">
                    <div class="info">
                         <h6 class="year">{{ nowLanguage.resumeYear2 }}</h6>
                         <h3 class="title">{{ nowLanguage.resumeTitle2 }}</h3>
                    </div>
                    <p class="text">{{ nowLanguage.resumeText2 }}</p>
               </div>

               <div style="margin-bottom: 0;" class="frame">
                    <div class="info">
                         <h6 class="year">{{ nowLanguage.resumeYear1 }}</h6>
                         <h3 class="title">{{ nowLanguage.resumeTitle1 }}</h3>
                    </div>
                    <p class="text">{{ nowLanguage.resumeText1 }}</p>
               </div>

          </div>
          <!-- 證照 -->
          <h2>{{ nowLanguage.certificate }} </h2>
          <div class="bcg_box">
               <div class="frame2">
                    <div class="left_area area">
                         <ul>
                              <li>{{ nowLanguage.certificate1 }}</li>
                              <li>{{ nowLanguage.certificate2 }}</li>
                              <li>{{ nowLanguage.certificate3 }}</li>

                         </ul>
                    </div>

                    <div class="middle_area area">
                         <ul>
                              <li>{{ nowLanguage.certificate4 }}</li>
                              <li>{{ nowLanguage.certificate5 }}</li>
                         </ul>
                    </div>

                    <div class="right_area area">
                         <ul>
                              <li>{{ nowLanguage.certificate6 }}</li>
                         </ul>
                    </div>

               </div>
          </div>
          <!-- 技能 -->
          <h2>{{ nowLanguage.skill }} </h2>
          <div class="bcg_box">
               <div class="frame2">
                    <div class="left_area area">
                         <img title="HTML" class="icon" src="./../../image/ICONS/icons8-html-5.svg" alt="html-5">
                         <img title="CSS" class="icon" src="./../../image/ICONS/icons8-css3.svg" alt="css3">
                         <img title="JavaScript" class="icon" src="./../../image/ICONS/icons8-javascript.svg"
                              alt="javascript">
                         <img title="Vue" class="icon" src="./../../image/ICONS/icons8-vue.ico" alt="vue">
                         <img title="Java" class="icon" src="./../../image/ICONS/icons8-java.svg" alt="java">
                         <img title="Spring Boot" class="icon" src="./../../image/ICONS/icons8-spring-boot.svg"
                              alt="springBoot">
                         <img title="MySQL" class="icon" src="./../../image/ICONS/icons8-mysql.svg" alt="MySQL">
                    </div>


                    <div class="right_area area">
                         <ul>
                              <li>{{ nowLanguage.skill1 }}</li>
                              <li>{{ nowLanguage.skill2 }}</li>
                         </ul>
                    </div>

               </div>
          </div>


     </div>
</template>

<style lang="scss" scoped>
.container {
     animation-name: loading;
     animation-duration: 1s;
     background-color: #E6DACE;
     padding: 5rem 0;
     display: flex;
     flex-direction: column;
     align-items: center;

     h1 {
          text-align: center;
          height: 5vh;
          font-size: 2.5rem;
          font-weight: bolder;
     }

     h2 {
          text-align: center;
          width: 60vw;
          height: 20vh;
          font-size: 2rem;
          font-weight: bolder;
          margin-top: 2rem;
          padding: 5rem;
          text-align: left;

     }

     .bcg_box {
          // border: 2px solid red;
          width: 50vw;
          background-color: white;
          margin: 3rem 0;
          padding: 1rem;


          .frame {
               width: 100%;
               display: flex;
               margin-bottom: 5rem;

               .info {
                    min-width: 40%;


                    .title {
                         text-align: left;
                         font-size: 1.2rem;
                         font-weight: 550;
                         white-space: pre-wrap;

                    }

                    .year {
                         text-align: left;
                         font-size: 1.2rem;
                         margin-bottom: 0.5rem;
                         color: #0050FF;
                         font-weight: bold;
                         // font-style: oblique;

                    }
               }

               .text {
                    text-align: left;
                    font-size: 1rem;
                    margin-left: 3rem;
                    margin-top: 2.4rem;
                    font-weight: 500;
                    white-space: pre-wrap;
               }

          }

          .frame2 {
               display: flex;
               justify-content: space-around;
               align-items: start;

               .area {
                    margin: 0 1rem;

                    ul {
                         font-size: 1rem;
                         list-style: none;

                         li {
                              list-style: none;
                              white-space: pre-wrap;

                              &::before {
                                   content: "■";
                                   color: #0050FF;
                                   margin-right: 0.5rem;
                                   font-size: 1.5rem;
                              }
                         }
                    }

                    .icon {
                         transition: all 0.5s ease-in-out;
                         cursor: pointer;
                         color: black;
                         margin: 0.2rem;

                         &:hover {
                              transform: translate(0, -0.5rem);

                         }
                    }
               }


          }




     }


}

//進場動畫
@keyframes loading {
     from {
          opacity: 0;
     }

     to {
          opacity: 1;
     }
}

//RWD
@media screen and (max-width: 900px) {
     .container {
          .bcg_box {
               .frame {
                    flex-direction: column;

                 
                         .text {
                              margin-left: 0;
                         }
                    
               }
               .frame2 {
                    flex-direction: column;
                    .left_area area{
                         ul{
                              
                         }
                    }
               }
          }
     }
}
</style>

