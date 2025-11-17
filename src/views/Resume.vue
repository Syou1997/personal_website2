<script>
import { RouterLink, RouterView } from 'vue-router'
// Pinia 方法
import { mapState, mapActions } from 'pinia'
// 自己的資料庫
import indexStore from '../store/indexStore'
// figma icon
import { Icon } from '@iconify/vue'

export default {
     data() {
          return {
               // 新增：滾動進度 & 返回頂部按鈕顯示控制
               scrollProgress: 0,   // 0~100
               showScrollTop: false // 是否顯示返回頂部按鈕
          }
     },
     computed: {
          // 兩個參數:1.資料庫 2.要取用的(state/getter)
          ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"]),
     },
     // 方法
     methods: {
          ...mapActions(indexStore, ["toChinese", "toJapanese"]),
          // 新增：監聽滾動，計算進度
          handleScroll() {
               const scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0

               const docHeight =
                    document.documentElement.scrollHeight -
                    document.documentElement.clientHeight

               const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

               this.scrollProgress = progress
               this.showScrollTop = scrollTop > 120
          },
          // 新增：平滑返回頂部
          scrollToTop() {
               window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
               })
          }
     },
     // 生命週期
     mounted() {
          // 原本是空的，現在掛上滾動監聽
          window.addEventListener('scroll', this.handleScroll, { passive: true })
          this.handleScroll()
     },
     beforeUnmount() {
          window.removeEventListener('scroll', this.handleScroll)
     }
}
</script>

<template>
     <!-- 外層多包一層，不動原本 .container 裡面的結構 -->
     <div>
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
                              <h6 class="year">{{ nowLanguage.resumeYear12 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle12 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText12 }}</p>
                    </div>
                    <div class="frame">
                         <div class="info">
                              <h6 class="year">{{ nowLanguage.resumeYear11 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle11 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText11 }}</p>
                    </div>
                    <div class="frame">
                         <div class="info">
                              <h6 class="year">{{ nowLanguage.resumeYear10 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle10 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText10 }}</p>
                    </div>
                    <div class="frame">
                         <div class="info">
                              <h6 class="year">{{ nowLanguage.resumeYear9 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle9 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText9 }}</p>
                    </div>
                    <div class="frame">
                         <div class="info">
                              <h6 class="year">{{ nowLanguage.resumeYear8 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle8 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText8 }}</p>
                    </div>
                    <div class="frame">
                         <div class="info">
                              <h6 class="year">{{ nowLanguage.resumeYear7 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle7 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText7 }}</p>
                    </div>
                    <div class="frame">
                         <div class="info">
                              <h6 class="year">{{ nowLanguage.resumeYear6 }}</h6>
                              <h3 class="title">{{ nowLanguage.resumeTitle6 }}</h3>
                         </div>
                         <p class="text">{{ nowLanguage.resumeText6 }}</p>
                    </div>
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

          <!-- 新增：右下角固定的返回頂部＋進度條按鈕 -->
          <button v-show="showScrollTop" class="scrollTopBtn" :style="{ '--progress': scrollProgress + '%' }"
               @click="scrollToTop" aria-label="Back to top" type="button">
               <span class="scrollTopBtn__inner">
                    <span class="scrollTopBtn__icon">▲</span>
               </span>
          </button>
     </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;600;700&display=swap");

.container {
     animation-name: loading;
     animation-duration: 1s;
     background-color: #E6DACE;
     padding: 5rem 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     font-family: "Zen Kaku Gothic New", system-ui, -apple-system, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
     font-size: clamp(16px, 1.2vw, 18px);

     h1 {
          text-align: center;
          height: 5vh;
          font-size: 2.5rem;
          font-weight: bolder;
     }

     h2 {
          width: 60vw;
          height: 20vh;
          font-size: 2rem;
          font-weight: bolder;
          margin-top: 2rem;
          padding: 5rem;
          text-align: left;
     }

     .bcg_box {
          width: 50vw;
          background-color: white;
          margin: 3rem 0;
          padding: 1rem;
          cursor: pointer;
          border-radius: 16px;
          box-shadow:
               0 10px 26px rgba(0, 0, 0, .18),
               inset 0 1px 0 rgba(255, 255, 255, .06);

          .frame {
               width: 100%;
               display: flex;
               margin-bottom: 5rem;
               padding: 1rem;
               border-radius: 12px;
               background: #fff;
               border: 1px solid rgba(0, 0, 0, .06);
               box-shadow: 0 6px 20px rgba(0, 0, 0, .08);
               transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
               position: relative;

               &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(180deg, #0050FF, rgba(0, 80, 255, .0));
                    opacity: .85;
                    border-radius: 4px;
               }

               &:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 14px 34px rgba(0, 0, 0, .18);
                    border-color: rgba(0, 80, 255, .25);
               }

               .info {
                    min-width: 40%;

                    .title {
                         text-align: left;
                         font-size: 1.2rem;
                         font-weight: 700;
                         white-space: pre-wrap;
                    }

                    .year {
                         text-align: left;
                         font-size: 1.2rem;
                         margin-bottom: 0.5rem;
                         color: #0050FF;
                         font-weight: bold;
                    }
               }

               .text {
                    text-align: left;
                    font-size: 1rem;
                    margin-left: 3rem;
                    margin-top: 2.4rem;
                    font-weight: 500;
                    white-space: pre-wrap;
                    line-height: 1.6;
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

/* 新增：返回頂部＋進度條按鈕（固定視窗右下角） */
.scrollTopBtn {
     position: fixed;
     right: clamp(16px, 3vw, 26px);
     bottom: clamp(16px, 3vw, 26px);
     width: 60px;
     height: 60px;
     border-radius: 50%;
     border: none;
     padding: 0;
     background:
          conic-gradient(#0050FF var(--progress, 0%),
               rgba(0, 0, 0, 0.08) 0);
     display: inline-flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
     box-shadow: 0 10px 26px rgba(0, 0, 0, .22);
     transition:
          transform .22s ease,
          box-shadow .22s ease,
          background .22s ease,
          opacity .22s ease;
     z-index: 999;
     opacity: 0.96;

     .scrollTopBtn__inner {
          width: 86%;
          height: 86%;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
     }

     .scrollTopBtn__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0050FF;
          transform: translateY(-1px);
     }

     &:hover,
     &:focus-visible {
          outline: none;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 14px 32px rgba(0, 0, 0, .30);
          opacity: 1;
     }

     &:active {
          transform: translateY(0) scale(.97);
          box-shadow: 0 8px 20px rgba(0, 0, 0, .22);
     }
}

// 進場動畫
@keyframes loading {
     from {
          opacity: 0;
     }

     to {
          opacity: 1;
     }
}

// RWD
@media screen and (max-width: 900px) {
     .container {
          h2 {
               width: 100vw;
               margin-bottom: 1rem;
               text-align: left;
          }

          .bcg_box {
               width: 80vw;

               .frame {
                    flex-direction: column;

                    .text {
                         margin-left: 0;
                    }
               }

               .frame2 {
                    flex-direction: column;
               }
          }
     }

     .scrollTopBtn {
          width: 52px;
          height: 52px;
          right: 14px;
          bottom: 14px;

          .scrollTopBtn__icon {
               font-size: 1.05rem;
          }
     }
}
</style>
