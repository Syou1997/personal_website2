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


    },
    //生命週期
    mounted() {

    },

}

</script>

<template>
    <a href="#top"><button class="back_to_top" type="button"></button></a>
    <div id="top" class="container">
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
a {
    font-weight: bold;

    .back_to_top {
        position: fixed;
        right: 0;
        top: 10rem;
        width: 6vw;
        height: 6vw;
        min-width: 40px;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0050FF;
        border: none;
        border: 2px solid white;
        cursor: pointer;
        transition: all 0.2s ease;
        color: white;
        clip-path: polygon(30% 120%, 70% 100%, 70% 60%, 100% 60%, 50% 0, 0 60%, 30% 60%);



        &:hover {
            scale: 1.1;
            background-color: white;
            color: black;

        }

        &:active {
            scale: 0.95;
        }

    }

}

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
        height: 300px;
        background-color: white;
        margin: 3rem 0;


        .frame {
            width: 100%;
            height: 100%;
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
                height: 100%;
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
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
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
                }
            }
        }
    }

}


// @media screen and (max-width: 500px) {
// a{
//     .back_to_top{
//         bottom: 21rem;
//     }
// }

// }
</style>
