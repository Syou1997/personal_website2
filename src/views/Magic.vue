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
        <div class="main_vedio_area">
            <iframe class="vedio" src="https://www.youtube.com/embed/6DWqVwbCSzA?autoplay=1" frameborder="0"
                allowfullscreen></iframe>
        </div>

        <!-- 區域1 -->
        <div class="area1">
            <div class="info_area">
                <div class="img_area">
                    <img src="https://scontent.ftpe2-1.fna.fbcdn.net/v/t39.30808-6/408551140_2579938512171146_7131808705039324415_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_ohc=-Q1gH9D2-4oAX8LIUEm&_nc_ht=scontent.ftpe2-1.fna&oh=00_AfD7UNQf4aT3FhDWJnxwi8okWXPIYKn7dHjKh73MVs7luQ&oe=657C71E0"
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
            <div class="info_area">
                <div class="info">
                    <div class="text">
                        <h2>{{ nowLanguage.magicH2_2 }}</h2>
                        <h3>{{ nowLanguage.magicH3_2 }}
                        </h3>

                    </div>
                </div>
                <div class="img_area">
                    <div class="img1">
                        <img src="https://scontent.ftpe2-1.fna.fbcdn.net/v/t39.30808-6/409192527_2579938648837799_3126824195505575562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_ohc=jTO7KOF-Qj8AX__Y1Oo&_nc_ht=scontent.ftpe2-1.fna&oh=00_AfCDdGPO74kraGdh-401VWvoZuJRw6o-nZBj_LVDTpvG5Q&oe=657D4180"
                            alt="表演照片">

                    </div>
                    <div class="img2">

                    </div>
                    <div class="img3">

                    </div>

                </div>

            </div>



        </div>
        <!-- 區域3 -->
        <h4>{{ nowLanguage.magicH4_1 }} </h4>
        <div class="area3">

            <div class="pic_area">
                <div class="img_area">
                    <img src="https://scontent.ftpe2-2.fna.fbcdn.net/v/t39.30808-6/408402086_2579938702171127_8957810702048681194_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_ohc=AR403mrlytwAX9Mmg3B&_nc_ht=scontent.ftpe2-2.fna&oh=00_AfCJN1YiUzrDezCWNsVULx74x8RDEpncBuQ6t1lQfpKSbg&oe=657BC3DB"
                        alt="performancePic">
                </div>


            </div>
            <div class="pic_area">

                <div class="img_area">
                    <img src="https://scontent.ftpe2-2.fna.fbcdn.net/v/t39.30808-6/408480633_2579938772171120_6945675150519805126_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_ohc=HSvk9MRTSEEAX9KoL7y&_nc_ht=scontent.ftpe2-2.fna&oh=00_AfCvsNEn_cMal30DhjQfXTW8OCLtf98T--DW1XJXxQVhpw&oe=657C09CC"
                        alt="performancePic">
                </div>
            </div>

            <div class="pic_area">

                <div class="img_area">
                    <img src="https://scontent.ftpe2-1.fna.fbcdn.net/v/t39.30808-6/408500322_2579938815504449_2661424703970969869_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_ohc=6lJ1g4p4JoMAX-7YLNU&_nc_ht=scontent.ftpe2-1.fna&oh=00_AfDCMI1IvBG3-5dH9dcYmOxnZuy4RpSmk0xGWd77cQCRlg&oe=657C2516"
                        alt="performancePic">
                </div>
            </div>




        </div>
        <h4>{{ nowLanguage.magicH4_2 }} </h4>
        <!-- 其它影片 -->
        <div class="other_vedio_area">
            <iframe class="vedio" src="https://www.youtube.com/embed/7O-ekYafQcY?autoplay=1" frameborder="0"
                allowfullscreen></iframe>

            <iframe class="vedio" src="https://www.youtube.com/embed/8gyXsRfCkFQ?autoplay=1" frameborder="0"
                allowfullscreen></iframe>

            <iframe class="vedio" src="https://www.youtube.com/embed/kDbrkZdu_yQ?autoplay=1" frameborder="0"
                allowfullscreen></iframe>

            <iframe class="vedio" src="https://www.youtube.com/embed/5-6GbbPdSCM?autoplay=1" frameborder="0"
                allowfullscreen></iframe>


        </div>
        <br>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-color: #E6DACE;

    //主影片區
    .main_vedio_area {
        width: 100vw;
        height: 60vh;
        display: flex;
        justify-content: center;
        margin-bottom: 5vw;

        .vedio {
            width: 50vw;
        }
    }


    //名言
    h1 {
        text-align: center;
        font-weight: bolder;
        margin: 1vw 0;
    }

    //區域1
    .area1 {
        // border: 2px solid red;
        width: 100vw;

        .info_area {
            width: 50%;
            display: flex;
            // flex-wrap: wrap;
            margin-left: 5vw;

            .info {
                width: 50%;
                padding: 1rem;
                // border: 2px solid blue;

                .text {
                    h2 {
                        font-family: "M PLUS 1", sans-serif;
                        font-weight: bold;
                    }

                    h3 {
                        font-family: "M PLUS 1", sans-serif;
                        white-space: pre-wrap;
                    }
                }


            }

            .img_area {
                width: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }


    }

    //區域2
    .area2 {
        width: 100vw;
        display: flex;
        justify-content: end;

        .info_area {
            width: 50%;
            display: flex;
            // flex-wrap: wrap;
            margin-right: 5vw;

            .info {
                width: 50%;
                padding: 1rem;

                .text {
                    h2 {
                        font-family: "M PLUS 1", sans-serif;
                        font-weight: bold;
                    }

                    h3 {
                        font-family: "M PLUS 1", sans-serif;
                        white-space: pre-wrap;
                    }
                }


            }

            .img_area {
                margin-top: 2rem;
                width: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;

                }
            }
        }


    }


    //區域3
    h4 {
        text-align: center;
        margin-top: 2vw;
        font-size: 2rem;
        font-family: "M PLUS 1", sans-serif;
    }

    .area3 {
        // border: 2px solid red;
        margin-top: 2vw;
        width: 100vw;
        max-height: 80vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;



        .pic_area {
            // border: 2px solid blue;
            width: 30%;
            height: 90%;



            .img_area {

                width: 100%;
                height: 90%;
                transition: all 0.2s ease;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;

                }
            }
        }



    }

    .other_vedio_area {
        margin-top: 2vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

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

        .main_vedio_area {


            .vedio {
                width: 90vw;
            }
        }

        .area1 {


            .info_area {
                width: 100%;
                flex-direction: column;
                align-items: center;

                .img_area {
                    margin-right: 10vw;
                }

                .info {
                    width: 80%;
                    margin-right: 10vw;
                }
            }
        }

        .area2 {

            .info_area {
                width: 100%;
                flex-direction: column;
                align-items: center;

                .info {
                    width: 80%;
                }
            }
        }

        .other_vedio_area {
            .vedio{
                margin: 2rem 0;
            }

        }
    }

}
</style>