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
            // ↓ 新增：返回頂部按鈕需要的狀態
            showBackToTop: false,
            scrollProgress: 0, // 0~100
        }
    },
    computed: {
        //兩個參數:1.資料庫 2.要取用的(state/getter)
        ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"]),
    },
    //方法
    methods: {
        ...mapActions(indexStore, ["toChinese", "toJapanese"]),
        // 傳入index參數
        inIsLink(index) {
            // 使用index獲取相應的項目鏈接和圖片鏈接
            this.isLink = this.nowLanguage.projectList[index].projectLink;
            this.isImgLink = this.nowLanguage.projectList[index].projectImgLink;
        },

        // 在模板中呼叫這兩個新方法，傳入對應的index
        getProjectLink(index) {
            this.inIsLink(index);
            return this.isLink;
        },

        getProjectImgLink(index) {
            this.inIsLink(index);
            return this.isImgLink;
        },

        // ↓ 新增：捲動處理＆返回頂部
        handleScroll() {
            const doc = document.documentElement;
            const body = document.body;
            const scrollTop = doc.scrollTop || body.scrollTop;
            const scrollHeight = doc.scrollHeight || body.scrollHeight;
            const clientHeight = doc.clientHeight || window.innerHeight;

            const max = Math.max(scrollHeight - clientHeight, 1);
            this.scrollProgress = Math.min(100, Math.max(0, (scrollTop / max) * 100));
            this.showBackToTop = scrollTop > 300;
        },
        scrollToTop() {
            // 尊重減少動畫偏好
            const prefersReduced =
                window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            window.scrollTo({
                top: 0,
                behavior: prefersReduced ? 'auto' : 'smooth'
            });
        },
        // 鍵盤可及性
        onBackToTopKey(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.scrollToTop();
            }
        },
    },
    //生命週期
    mounted() {
        // ↓ 新增：監聽捲動
        this._onScroll = () => this.handleScroll();
        window.addEventListener('scroll', this._onScroll, { passive: true });
        // 初始計算
        this.handleScroll();
    },
    beforeUnmount() {
        // ↓ 新增：移除監聽
        window.removeEventListener('scroll', this._onScroll);
    },
}
</script>

<template>
    <!-- 返回頂部按鈕：保留 #top 錨點，但實際用 JS 平滑捲動 -->
    <a id="top"></a>
    <button
        class="back_to_top"
        type="button"
        :aria-label="nowLanguage?.backToTopLabel || 'Back to top'"
        :title="nowLanguage?.backToTopLabel || 'Back to top'"
        v-show="showBackToTop"
        @click="scrollToTop"
        @keydown="onBackToTopKey"
        :style="{
            // 進度環（圓弧）：使用 conic-gradient
            background: `conic-gradient(var(--btn-accent) ${scrollProgress}%, var(--btn-track) ${scrollProgress}% 100%)`
        }"
    >
        <!-- 中央箭頭：以 SVG 呈現；若需 i18n 可換成 Icon 元件 -->
        <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5l-6 7h4v7h4v-7h4z" />
        </svg>
        <span class="sr-only">{{ nowLanguage?.backToTopLabel || 'Back to top' }}</span>
    </button>

    <div class="container">
        <h1>{{ nowLanguage.project }}</h1>
        <div v-for="(item, index) in nowLanguage.projectList" :key="index" class="bcg_box">
            <div class="frame">
                <div class="info">
                    <h2 class="project_name"><a title="open the page" target="_blank" :href="getProjectLink(index)">{{
                        item.projectName }}</a>
                        <div class="box"></div>
                    </h2>
                    <p class="project_info">{{ item.projectInfo }}</p>
                </div>
                <div class="img_frame">
                    <img :src="getProjectImgLink(index)" alt="project picture">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* ====== 全域小工具：無障礙隱藏文字 ====== */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 1px, 1px);
  white-space: nowrap; border: 0;
}

a {
    font-weight: bold;
}

/* ====== 返回頂部按鈕（全新樣式） ====== */
.back_to_top {
    /* 位置與尺寸：行動裝置更好點擊 */
    position: fixed;
    right: 1.25rem;
    bottom: 1.5rem;
    width: 3.25rem;
    height: 3.25rem;
    min-width: 44px; /* 可及性：最小觸控大小 */
    min-height: 44px;
    z-index: 1000;

    /* 視覺：外圈進度環由 inline style 的 conic-gradient 控制 */
    --btn-accent: #0ea5e9; /* 藍青色進度 */
    --btn-track: rgba(0,0,0,.12); /* 未完成軌道 */
    --btn-inner: #0050FF; /* 內圈底色 */

    border: none;
    border-radius: 9999px;
    display: grid;
    place-items: center;
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08);
    cursor: pointer;
    transition: transform .15s ease, box-shadow .2s ease, opacity .2s ease;

    /* 內圈：用 ::before 疊出實心圓，避免覆蓋外圈進度環 */
    &::before {
        content: "";
        position: absolute;
        inset: .2rem; /* 控制外環寬度 */
        background: var(--btn-inner);
        border-radius: inherit;
    }

    /* 箭頭圖示：保持獨立層，避免被 ::before 蓋掉 */
    .arrow {
        position: relative;
        width: 1.25rem;
        height: 1.25rem;
        fill: white;
        transform: translateY(-1px);
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 28px rgba(0,0,0,.16), 0 10px 10px rgba(0,0,0,.10);
    }
    &:active {
        transform: translateY(0);
    }

    /* 鍵盤聚焦 */
    &:focus-visible {
        outline: 3px solid #93c5fd;
        outline-offset: 3px;
    }

    /* 深色模式微調 */
    @media (prefers-color-scheme: dark) {
        --btn-track: rgba(255,255,255,.2);
        --btn-inner: #1f2937;
        .arrow { fill: #e5e7eb; }
    }

    /* 減少動畫偏好 */
    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
}

/* 使用 v-show 時的淡入效果（可選） */
.back_to_top[v-cloak],
.back_to_top[style*="display: none"] {
    opacity: 0;
    pointer-events: none;
}
.back_to_top {
    opacity: 1;
}

/* ====== 你原本的樣式（僅保留、未更動其餘結構） ====== */

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

    .bcg_box {
        // border: 2px solid red;
        width: 50vw;
        height: auto; /* ← 上次已調整，讓白底自動撐高 */
        background-color: white;
        margin: 3rem 0;

        .frame {
            width: 100%;
            height: auto;
            display: flex;
            margin-bottom: 5rem;

            .info {
                width: 40%;

                .project_name {
                    text-align: left;
                    font-size: 1.5rem;
                    font-weight: 550;
                    white-space: pre-wrap;
                    padding: 1.5rem;
                    position: relative;
                    transition: all 0.3s ease-out;

                    &:hover {
                        transform: translate(0, -0.4rem);

                        a {
                            color: #08c033;
                            font-weight: bolder;
                        }

                        .box {
                            background-color: #08c033;
                        }
                    }

                    a {
                        text-decoration: none;
                        color: #0050FF;
                    }

                    .box {
                        position: absolute;
                        top: 1.7rem;
                        left: 0;
                        width: 10px;
                        height: 30px;
                        background-color: #0050FF;
                    }
                }

                .project_info {
                    text-align: left;
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                    color: black;
                    font-weight: bold;
                    padding: 1.5rem;
                    white-space: pre-wrap;
                }
            }

            .img_frame {
                // border: 2px solid red;
                width: 60%;
                height: auto;
                margin-left: 1rem;
                background-color: #FBE7D7;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
}

//進場動畫
@keyframes loading {
    from { opacity: 0; }
    to { opacity: 1; }
}

//RWD
@media screen and (max-width: 1200px) {
    .container {
        .bcg_box {
            height: auto;

            .frame {
                flex-direction: column;

                .info {
                    width: 90%;
                }
                .img_frame {
                    width: 80%;
                    height: auto;
                    margin-left: 0;
                    margin-top: 1rem;
                }
            }
        }
    }
}
</style>
