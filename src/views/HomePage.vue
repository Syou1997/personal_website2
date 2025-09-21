<script>
import { RouterLink, RouterView } from 'vue-router'
// Pinia
import { mapState, mapActions } from 'pinia'
import indexStore from '../store/indexStore'
// Iconify
import { Icon } from '@iconify/vue'

export default {
    components: { Icon },
    data() {
        return { picShow: false }
    },
    computed: {
        ...mapState(indexStore, ['nowLanguage', 'chinese', 'japanese']),
    },
    methods: {
        ...mapActions(indexStore, ['toChinese', 'toJapanese']),
        isShowOn() { this.picShow = !this.picShow },
        isShowOff() { this.picShow = !this.picShow },
    },
    mounted() { },
}
</script>

<template>
    <div class="home container">
        <div class="img_box" aria-hidden="true"></div>

        <main class="home__main" role="main">
            <!-- LEFT -->
            <section class="left_area" aria-label="Profile">
                <div class="img_frame" title="查看大頭照">
                    <img @click="isShowOn"
                        src="https://raw.githubusercontent.com/Syou1997/personal_website2/f590b4f95c103f860bbbe59f1c97d84285173b4e/image/syou2.jpg"
                        alt="個人照片" />
                </div>

                <!-- 全螢幕燈箱 -->
                <div v-if="picShow" class="imgZoom" role="dialog" aria-modal="true" aria-label="Enlarged photo">
                    <div class="imgZoom__backdrop" @click="isShowOff"></div>
                    <img class="imgZoom__pic" @click="isShowOff"
                        src="https://raw.githubusercontent.com/Syou1997/personal_website2/f590b4f95c103f860bbbe59f1c97d84285173b4e/image/syou2.jpg"
                        alt="個人照片放大" />
                </div>

                <h1 class="home__name">張瑞升</h1>
                <h2 class="home__title">{{ nowLanguage.homePageH2 }}</h2>


                <div class="link_area" role="group" aria-label="Social Links">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100004650665762"
                        aria-label="Facebook">
                        <Icon class="icon" icon="logos:facebook" />
                    </a>
                    <a target="_blank"
                        href="https://tw.amazingtalker.com/teachers-and-tutors/700c83f9-35ad-425f-83d8-e2f5f7b29466"
                        aria-label="AmazingTalker">
                        <Icon class="icon iconAT" icon="uil:letter-english-a" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/azwsxrfv2396187/" aria-label="Instagram">
                        <Icon class="icon" icon="skill-icons:instagram" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCWs7mmEuhyz9ze2O1QUFpiA"
                        aria-label="YouTube">
                        <Icon class="icon" icon="logos:youtube-icon" />
                    </a>
                    <a target="_blank" href="https://syoulive.com/" aria-label="Blog">
                        <img style="border-radius: 50%;" class="icon" src="./../../image/ICONS/blogIcon.svg.svg"
                            alt="Blog" />
                    </a>
                </div>
            </section>

            <!-- RIGHT -->
            <section class="right_area" aria-label="Introduction">
                <h3 class="section__title">{{ nowLanguage.homePageH3 }}</h3>
                <p class="section__text">{{ nowLanguage.homePageP1 }}</p>

                <div class="btn_area" role="group" aria-label="Main actions">
                    <button type="button" class="btn_resume">
                        <RouterLink class="link" to="/Resume">履歷</RouterLink>
                    </button>
                    <button type="button" class="btn_resume">
                        <RouterLink class="link" to="/Project">作品集</RouterLink>
                    </button>
                </div>

                <h4 class="section__subtitle">{{ nowLanguage.homePageH4 }}</h4>
                <p class="section__text" v-html="nowLanguage.homePageP2"></p>
                <h4 class="section__subtitle">{{ nowLanguage.homePageH5 }}</h4>
                <p class="section__text" v-html="nowLanguage.homePageP3"></p>

            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;600;700&display=swap");

.home {
    animation-name: loading;
    animation-duration: 1s;
    --radius-lg: 18px;
    --radius-xl: 26px;
    --elev-1: 0 6px 20px rgba(0, 0, 0, .08);
    --elev-2: 0 12px 34px rgba(0, 0, 0, .12);
    --ring: 0 0 0 3px rgba(0, 80, 255, .25);
    --blur: 12px;
    --t-fast: 160ms;

    font-family: "Zen Kaku Gothic New", system-ui, -apple-system, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
    font-size: clamp(16px, 1.2vw, 18px);
}

.container {
    padding: clamp(16px, 3vw, 30px) 0 max(30px, env(safe-area-inset-bottom));
}

.img_box {
    position: absolute;
    inset: 0 auto 0 0;
    width: min(40vw, 640px);
    background: #E6DACE;
    z-index: -1;
}

/* ===== Layout ===== */
.home__main {
    width: min(1200px, 92vw);
    margin: 0 auto;
    padding: clamp(16px, 3vw, 28px);
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: clamp(16px, 2.4vw, 28px);
    align-items: start;
}

/* ===== LEFT ===== */
.left_area {
    background: #F4ECE6;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: var(--radius-xl);
    box-shadow: var(--elev-1);
    padding: clamp(18px, 2.2vw, 26px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(10px, 2.2vw, 18px);
    min-height: 440px;
}

.img_frame {
    width: clamp(200px, 28vw, 300px);
    height: clamp(200px, 28vw, 300px);
    border-radius: 50%;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 0 12px 34px rgba(0, 0, 0, .12);
    overflow: hidden;
}

.img_frame img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: .5rem;
    cursor: pointer;
    transition: transform var(--t-fast) ease, filter var(--t-fast) ease;
}

.img_frame img:hover {
    transform: scale(1.06);
    filter: brightness(1.03);
}

/* 觸控裝置移除 hover 放大 */
@media (hover:none) {
    .img_frame img:hover {
        transform: none;
        filter: none;
    }
}

/* 燈箱 */
.imgZoom {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    padding: max(10px, env(safe-area-inset-top)) max(10px, env(safe-area-inset-right)) max(10px, env(safe-area-inset-bottom)) max(10px, env(safe-area-inset-left));
}

.imgZoom__backdrop {
    position: absolute;
    inset: 0;
    background: radial-gradient(120% 120% at 50% 50%, rgba(0, 0, 0, .62), rgba(0, 0, 0, .82));
    backdrop-filter: blur(2px);
}

.imgZoom__pic {
    position: relative;
    max-width: 96vw;
    max-height: 88vh;
    object-fit: contain;
    border-radius: var(--radius-lg);
    box-shadow: 0 24px 70px rgba(0, 0, 0, .55);
    cursor: zoom-out;
}

/* 名稱 + 摘要 */
.home__name {
    font-size: clamp(1.6rem, 2.6vw, 2rem);
    font-weight: 800;
    letter-spacing: .2px;
    text-align: center;
    margin-top: .25rem;
}

.home__title {
    font-size: clamp(1.05rem, 1.6vw, 1.2rem);
    line-height: 1.7;
    text-align: center;
}

/* 社群連結 */
.link_area {
    margin-top: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(40px, 1fr));
    justify-content: center;
    gap: 12px;
    padding: 12px 10px;
    background: #fff;
    border-radius: calc(var(--radius-xl) - 6px);
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, .06);
}

.link_area a {
    display: inline-grid;
    place-items: center;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, .06);
    background: rgba(255, 255, 255, .85);
    box-shadow: var(--elev-1);
    transition: transform var(--t-fast) ease, box-shadow var(--t-fast) ease;
}

.link_area a:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: var(--elev-2);
}

.link_area .icon,
.link_area img.icon {
    display: block;
    width: clamp(22px, 2.2vw, 26px);
    height: auto;
    line-height: 1;
}

.link_area .iconAT {
    color: red;
}

/* ===== RIGHT ===== */
.right_area {
    border-radius: var(--radius-xl);
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .06);
    box-shadow: var(--elev-1);
    padding: clamp(20px, 2.6vw, 30px);
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 2vw, 20px);
    min-height: 460px;
}

.right_area .section__title {
    font-weight: 800;
    font-size: clamp(1.35rem, 2.1vw, 1.6rem);
    letter-spacing: .2px;
}

.right_area .section__subtitle {
    font-weight: 800;
    font-size: clamp(1.22rem, 2vw, 1.45rem);
    margin-top: .4rem;
}

/* 正文 */
.right_area .section__text {
    white-space: pre-wrap;
    font-weight: 400;
    font-size: clamp(1.04rem, 1.55vw, 1.15rem);
    line-height: 2.05;
    letter-spacing: .18px;
    word-spacing: 1px;
    max-width: 70ch;
}

.section__subtitle+.section__text {
    margin-top: 1.1em;
}

.section__text strong {
    font-weight: 800;
    letter-spacing: .2px;
}

/* 按鈕 */
.btn_area {
    display: flex;
    gap: 14px;
    align-items: center;
    margin: 12px 0 6px;
    flex-wrap: wrap;
}

.btn_area button {
    width: 9.8rem;
    height: 2.9rem;
    border-radius: 999px;
    border: 1px solid black;
    background: #0050FF;
    font-weight: 800;
    box-shadow: 0 10px 24px rgba(0, 80, 255, .22);
    transition: transform var(--t-fast) ease, box-shadow var(--t-fast) ease, background var(--t-fast) ease, border var(--t-fast) ease;
}

.btn_area button:hover {
    background: #fff;
    border: 2px solid #0050FF;
    transform: translateY(-1px);
    box-shadow: var(--elev-2);
}

.btn_area .link {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 0 10px;
}

.btn_area button:hover .link {
    color: black;
}

/* ====== RWD 斷點 ====== */

/* Laptop ~ Tablet：單欄堆疊、背景條淡化 */
@media (max-width: 1024px) {
    .home__main {
        grid-template-columns: 1fr;
    }

    .img_box {
        width: 100%;
        opacity: .35;
    }
}

/* 平板：縮小內距、icon 更緊湊 */
@media (max-width: 820px) {
    .home__main {
        width: 94vw;
        padding: 14px;
        gap: 14px;
    }

    .left_area,
    .right_area {
        padding: clamp(14px, 2.4vw, 22px);
    }

    .link_area {
        grid-template-columns: repeat(5, minmax(36px, 1fr));
        gap: 10px;
    }
}

/* 手機：按鈕滿版、社群自動換 3 欄、卡片陰影減輕、燈箱留更多邊距 */
@media (max-width: 640px) {
    .btn_area {
        gap: 10px;
    }

    .btn_area button {
        flex: 1 1 46%;
        min-width: 120px;
    }

    .link_area {
        grid-template-columns: repeat(3, 1fr);
    }

    .left_area,
    .right_area {
        box-shadow: 0 6px 16px rgba(0, 0, 0, .10);
    }

    .imgZoom {
        padding: 16px;
    }

    .imgZoom__pic {
        max-width: 100%;
        max-height: 80vh;
    }
}

/* 極小手機：字距加大、按鈕直排、社群 2 欄 */
@media (max-width: 400px) {
    .home__title {
        line-height: 1.8;
    }

    .btn_area {
        flex-direction: column;
        align-items: stretch;
    }

    .btn_area button {
        width: 100%;
    }

    .link_area {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
}

/* 避免動畫造成暈眩的使用者 */
@media (prefers-reduced-motion: reduce) {
    * {
        transition: none !important;
        animation: none !important;
    }
}

/* 進場動畫 */
@keyframes loading {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
