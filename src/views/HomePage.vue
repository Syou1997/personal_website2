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
            picShow: false,

        }
    },
    computed: {
        //兩個參數:1.資料庫 2.要取用的(state/getter)
        ...mapState(indexStore, ["nowLanguage", "chinese", "japanese"]),



    },
    //方法
    methods: {
        ...mapActions(indexStore, ["toChinese", "toJapanese"]),
        isShowOn() {
            this.picShow = !this.picShow;

        },
        isShowOff() {
            this.picShow = !this.picShow;

        }


    },
    //生命週期
    mounted() {


    },

}

</script>

<template>
    <div class="container">
        <div class="img_box"></div>
        <main>
            <div class="left_area">
                <div class="img_frame">
                    <img title="查看大頭照" v-on:click="isShowOn" src="https://raw.githubusercontent.com/Syou1997/personal_website2/f590b4f95c103f860bbbe59f1c97d84285173b4e/image/syou2.jpg"
                        alt="個人照片">
                </div>
                <div v-if="picShow" class="imgZoom">
                    <img v-on:click="isShowOff" class="pic"
                        src="https://raw.githubusercontent.com/Syou1997/personal_website2/f590b4f95c103f860bbbe59f1c97d84285173b4e/image/syou2.jpg"
                        alt="個人照片放大">
                </div>
                <h1>張瑞升</h1>
                <br>
                <h2>{{ nowLanguage.homePageH2 }}</h2>
                <div class="link_area">
                    <!-- facebook -->
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100004650665762">
                        <Icon class="icon" icon="logos:facebook" />
                    </a>
                    <!-- X(twitter) -->
                    <a target="_blank" href="https://twitter.com/azwsxrfv2396187">
                        <Icon class="icon" icon="devicon:twitter" />
                    </a>
                    <!-- instagram -->
                    <a target="_blank" href="https://www.instagram.com/azwsxrfv2396187/">
                        <Icon class="icon" icon="skill-icons:instagram" />
                    </a>
                    <!-- youtube -->
                    <a target="_blank" href="https://www.youtube.com/channel/UCWs7mmEuhyz9ze2O1QUFpiA">
                        <Icon class="icon" icon="logos:youtube-icon" />
                    </a>
                    <!-- blog -->
                    <a target="_blank" href="https://syoulive.com/">
                        <img style="border-radius: 50%;" class="icon" src="./../../image/ICONS/blogIcon.svg.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="right_area">
                <h3>{{ nowLanguage.homePageH3 }}</h3>
                <p>{{ nowLanguage.homePageP1 }}</p>

                <div class="btn_area">
                    <button type="button" class="btn_resume">
                        <RouterLink class="link" to="/Resume">履歷</RouterLink>
                    </button>
                    <button type="button" class="btn_resume">
                        <RouterLink class="link" to="/Project">作品集</RouterLink>
                    </button>
                </div>

                <h4>{{ nowLanguage.homePageH4 }}</h4>
                <p>{{ nowLanguage.homePageP2 }}</p>
            </div>

        </main>
    </div>
</template>

<style lang="scss" scoped>
.container {
    // border: 2px solid black;
    width: 100vw;
    height: 90vh;
    position: relative;
    animation-name: loading;
    animation-duration: 1s;


    .img_box {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 40vw;
        height: 100%;
        background-color: #E6DACE;
        z-index: -1;

    }

    main {
        display: flex;
        // border: 2px solid red;
        min-width: 800px;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);


        .left_area {
            // border: 2px solid red;
            min-width: 45%;
            height: 100%;
            position: relative;
            box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, .6));
            background-color: #F4ECE6;
            display: flex;
            flex-direction: column;
            align-items: center;

            .img_frame {
                margin-top: 1rem;
                width: 270px;
                height: 270px;
                border-radius: 50%;
                z-index: 2;
                background-color: white;
                border: 1px solid gray;
                &:hover {
                    box-shadow: rgb(153, 151, 151) 6px 5px 10px;
                    }

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    z-index: 2;
                    padding: 0.5rem;
                    transition: all 0.25s ease;
                    cursor: pointer;

                    &:hover {
                        scale: 1.085;
                    }

                    &:active {
                        scale: 0.98;
                    }
                }
            }

            .imgZoom {
                // border: 2px solid blue;
                position: absolute;
                top: 40%;
                left: 100%;
                width: 50vw;
                height: 50vw;
                transform: translate(-50%, -50%);
                z-index: 100;

                .pic {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    cursor: pointer;
                }

            }


            h1 {
                margin-top: 0.5rem;

            }

            h2 {
                padding: 0 1rem;
                font-size: 1rem;
            }

            .link_area {
                position: absolute;
                bottom: 0;
                left: 0%;
                background-color: white;
                width: 100%;
                height: 10%;
                z-index: 1;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: center;

                .icon {
                    transition: all 0.3s ease;
                    cursor: pointer;
                    font-size: 1.5rem;

                    &:hover {
                        transform: scale(1.2)
                    }


                }


            }
        }

        .right_area {
            min-width: 55%;
            height: 100%;
            padding: 0.5rem;
            margin-left: 1rem;

            h3 {
                font-weight: bold;

            }

            h4 {
                font-weight: bold;

            }

            p {
                white-space: pre-wrap;
                font-size: 0.9rem;
            }

            .btn_area {
                width: 100%;
                height: 15%;
                display: flex;
                justify-content: start;
                align-items: center;

                button {
                    width: 8rem;
                    height: 2rem;
                    border-radius: 5rem;
                    border: 0.5px solid black;
                    background-color: #0050FF;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.2s ease;

                    &:hover {
                        background-color: white;
                        border: 2px solid #0050FF;

                        .link {
                            color: black;
                        }

                    }

                    .link {
                        text-decoration: none;
                        color: white;

                        &:hover {
                            background-color: white;
                            color: black;


                        }



                    }


                }

                .btn_resume {
                    margin-right: 0.5rem;
                }
            }

            h3 {}

            p {}
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
@media screen and (max-width: 800px) {
    .container {
        width: 100vw;


        .img_box {
            // display: none;
        }


        height: 70rem;

        main {
            flex-direction: column;
            align-items: center;

            .left_area {
                width: 80vw;
                height: 150vh;

                .link_area {
                    // display: none;
                }

                .imgZoom {
                // border: 2px solid blue;
                position: absolute;
                top: 100%;
                left: 100%;
                min-width: 180px;
                min-height: 180px;
                transform: translate(-130%, -45%);
                z-index: 100;

                .pic {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    cursor: pointer;
                }

            }

            }

            .right_area {
                height: 100%;
                margin-top: 2rem;
                margin-right: 1rem;
                padding: 1rem;
                width: 80vw;
                box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, .6));
                background-color: white;
                overflow-y: scroll;
            }
        }

    }
}

@media screen and (max-width: 480px) {
    .container {
        width: 90vw;

        .img_box {
            display: none;
        }


        main {
            width: 100%;
            flex-direction: column;
            overflow-y: scroll;
            overflow-x: scroll;

            .left_area {
                min-width: 25%;
                overflow-y: scroll;

                .link_area {
                    display: none;
                }

            }

            .right_area {
                min-width: 25%;
                margin-top: 2rem;
                margin-right: 1rem;
                padding: 1rem;
                box-shadow: var(--shd, 0 1px 4px rgba(0, 0, 0, .6));
                background-color: white;
                overflow-y: scroll;
                // .btn_area{
                //     height: 10%;
                // }
            }
        }

    }
}
</style>
