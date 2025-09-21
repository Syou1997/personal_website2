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
        <h1>{{ nowLanguage.magicH1 }}</h1>

        <!-- 主影片區域 -->
        <div class="main_vedio_area card">
            <div class="video-wrap">
                <iframe
                    class="vedio"
                    src="https://www.youtube.com/embed/6DWqVwbCSzA?autoplay=1"
                    frameborder="0"
                    allowfullscreen
                    title="main video"
                ></iframe>
            </div>
        </div>

        <!-- 區域1 -->
        <div class="area1">
            <div class="info_area card">
                <div class="img_area media-shadow">
                    <img src="https://github.com/Syou1997/personal_website2/blob/main/image/magic.JPG?raw=true"
                        alt="表演照片">
                </div>
                <div class="info">
                    <div class="text">
                        <h2>{{ nowLanguage.magicH2_1 }}</h2>
                        <h3>{{ nowLanguage.magicH3_1 }}</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- 區域2 -->
        <div class="area2">
            <div class="info_area card">
                <div class="info">
                    <div class="text">
                        <h2>{{ nowLanguage.magicH2_2 }}</h2>
                        <h3>{{ nowLanguage.magicH3_2 }}</h3>
                    </div>
                </div>
                <div class="img_area media-shadow">
                    <div class="img1">
                        <img src="https://github.com/Syou1997/personal_website2/blob/main/image/Mantra.jpg?raw=true"
                            alt="表演照片">
                    </div>
                </div>
            </div>
        </div>

        <!-- 區域3 -->
        <h4 class="gallery-title">{{ nowLanguage.magicH4_1 }} </h4>
        <div class="area3">
            <div class="pic_area card-sm">
                <div class="img_area media-shadow">
                    <img src="https://github.com/Syou1997/personal_website2/blob/main/image/performance1.jpg?raw=true"
                        alt="performancePic">
                </div>
            </div>

            <div class="pic_area card-sm">
                <div class="img_area media-shadow">
                    <img src="https://github.com/Syou1997/personal_website2/blob/main/image/performance2.JPEG?raw=true"
                        alt="performancePic">
                </div>
            </div>

            <div class="pic_area card-sm">
                <div class="img_area media-shadow">
                    <img src="https://github.com/Syou1997/personal_website2/blob/main/image/performance3.JPG?raw=true"
                        alt="performancePic">
                </div>
            </div>
        </div>

        <h4 class="gallery-title">{{ nowLanguage.magicH4_2 }} </h4>
        <!-- 其它影片 -->
        <div class="other_vedio_area">
            <div class="video-wrap card-sm">
                <iframe class="vedio" src="https://www.youtube.com/embed/7O-ekYafQcY?autoplay=1" frameborder="0"
                    allowfullscreen title="video 1"></iframe>
            </div>

            <div class="video-wrap card-sm">
                <iframe class="vedio" src="https://www.youtube.com/embed/8gyXsRfCkFQ?autoplay=1" frameborder="0"
                    allowfullscreen title="video 2"></iframe>
            </div>

            <div class="video-wrap card-sm">
                <iframe class="vedio" src="https://www.youtube.com/embed/kDbrkZdu_yQ?autoplay=1" frameborder="0"
                    allowfullscreen title="video 3"></iframe>
            </div>

            <div class="video-wrap card-sm">
                <iframe class="vedio" src="https://www.youtube.com/embed/_y6Hki57pwg?autoplay=1" frameborder="0"
                    allowfullscreen title="video 4"></iframe>
            </div>
        </div>
        <br>
    </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;600;700;800&display=swap");

.container {
    animation-name: loading;
    animation-duration: 1s;
    background-color: #E6DACE;
    font-family: "Zen Kaku Gothic New", system-ui, -apple-system, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
    color: #111;

    /* 名言標題 */
    h1 {
        text-align: center;
        font-weight: 800;
        font-size: clamp(1.2rem, 2.2vw, 1.6rem);
        line-height: 1.7;
        letter-spacing: .2px;
        padding: 2.2rem 1rem 1.2rem;
        margin: 0 auto;
        max-width: 1100px;
        filter: drop-shadow(0 2px 6px rgba(0,0,0,.08));
    }

    /* 共用卡片質感（黑/灰模糊陰影） */
    .card {
        width: min(1100px, 92vw);
        margin: 2rem auto 3rem;
        background: #fff;
        border-radius: 18px;
        border: 1px solid rgba(0,0,0,.06);
        box-shadow:
            0 10px 26px rgba(0,0,0,.12),
            0 2px 6px rgba(0,0,0,.08);
        padding: clamp(16px, 2vw, 24px);
        transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow:
                0 18px 44px rgba(0,0,0,.18),
                0 6px 16px rgba(0,0,0,.12);
            border-color: rgba(0,0,0,.12);
        }
    }
    .card-sm{
        background: #fff;
        border-radius: 16px;
        border: 1px solid rgba(0,0,0,.06);
        box-shadow:
            0 8px 22px rgba(0,0,0,.10),
            0 2px 6px rgba(0,0,0,.06);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        &:hover{
            transform: translateY(-2px);
            box-shadow:
                0 16px 36px rgba(0,0,0,.16),
                0 6px 14px rgba(0,0,0,.10);
            border-color: rgba(0,0,0,.12);
        }
    }

    /* 影片容器：維持 16:9 比例 */
    .video-wrap{
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 16px;
        overflow: hidden;
        background: #000;
        box-shadow:
            0 10px 26px rgba(0,0,0,.18),
            inset 0 1px 0 rgba(255,255,255,.06);
    }
    .vedio {
        width: 100%;
        height: 100%;
        display: block;
    }

    /* 主影片外層（保留你的區塊命名） */
    .main_vedio_area {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* 內容區：一致的閱讀版型 */
    .area1, .area2 {
        width: 100%;
        display: flex;
        justify-content: center;

        .info_area {
            width: min(1100px, 92vw);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(14px, 2vw, 24px);
            align-items: center;

            .info {
                width: 100%;
                padding: clamp(8px, 1.2vw, 14px);
                

                .text {
                    h2 {
                        font-weight: 800;
                        font-size: 2.5rem;
                        letter-spacing: .2px;
                        margin: 0 0 .6rem;
                    }

                    h3 {
                        white-space: pre-wrap;
                        font-weight: 400;
                        font-size: clamp(1.02rem, 1.45vw, 1.15rem);
                        line-height: 1.95;
                        letter-spacing: .18px;
                        word-spacing: 1px;
                        margin: 0;
                        max-width: 70ch;
                    }
                }
            }

            .img_area {
                width: 100%;
                border-radius: 16px;
                overflow: hidden;
                position: relative;
                background: #F4ECE6;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
    
                }

        
            }
        }
    }

    /* 黑 & 灰 模糊陰影在媒體塊上更明顯 */
    .media-shadow{
        box-shadow:
            0 18px 44px rgba(0,0,0,.22),
            0 6px 18px rgba(0,0,0,.12);
    }

    /* 圖庫與標題 */
    .gallery-title{
        text-align: center;
        margin: 1.2rem auto 0.8rem;
        font-size: 2.5rem;
        margin-top: 5rem;
        font-weight: 800;
        width: min(1100px, 92vw);
        filter: drop-shadow(0 2px 6px rgba(0,0,0,.08));
    }

    .area3 {
        width: min(1100px, 92vw);
        margin: 1rem auto 2.4rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(12px, 1.8vw, 18px);

        .pic_area {
            .img_area {
                width: 100%;
                border-radius: 16px;
                overflow: hidden;
                background: #fff;
                transition: transform .2s ease;
                cursor: pointer;

                &:hover {
                    transform: translateY(-2px);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform .28s ease, filter .28s ease;
                }

                &:hover img{
                    transform: scale(1.04);
                }
            }
        }
    }

    /* 其它影片區 */
    .other_vedio_area {
        width: min(1100px, 92vw);
        margin: 1rem auto 2.8rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: clamp(12px, 1.8vw, 18px);

        .vedio{
            display: block;
        }
    }
}

/* 進場動畫 */
@keyframes loading {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* RWD */
@media screen and (max-width: 960px) {
    .container {
        .area1 .info_area,
        .area2 .info_area {
            grid-template-columns: 1fr;
        }
        .area2 .info_area {
            /* 讓文字在上、圖片在下的順序一致好閱讀 */
            .info { order: 0; }
            .img_area { order: 1; }
        }
        .area3 {
            grid-template-columns: 1fr 1fr;
        }
        .other_vedio_area {
            grid-template-columns: 1fr;
        }
    }
}

@media (prefers-reduced-motion: reduce) {
    .container * {
        transition: none !important;
    }
}
</style>
