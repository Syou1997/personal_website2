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
        <h1>{{ nowLanguage.youtubeH1 }}</h1>
        <div class="video_area">
            <!-- 影片1 -->
            <h2>{{ nowLanguage.youtubeH2_1 }}</h2>
            <iframe class="video" src="https://www.youtube.com/embed/FpxkipOzEU4?autoplay=1" frameborder="0"
                allowfullscreen></iframe>
            <div class="memo_area">
                <i class="memo_icon fa-solid fa-pen-clip"></i>
                <h3>{{ nowLanguage.youtubeH3_1 }}</h3>
            </div>
            <!-- 影片2 -->
            <h2>{{ nowLanguage.youtubeH2_2 }}</h2>
            <iframe class="video" src="https://www.youtube.com/embed/y3Z-X0qtU_s?autoplay=1" frameborder="0"
                allowfullscreen></iframe>

            <div class="memo_area">
                <i class="memo_icon fa-solid fa-pen-clip"></i>
                <h3>{{ nowLanguage.youtubeH3_2 }}</h3>
            </div>
            <!-- 影片3 -->
            <h2>{{ nowLanguage.youtubeH2_3 }}</h2>
            <iframe class="video" src="https://www.youtube.com/embed/0YJ0_fYavdo?autoplay=1" frameborder="0"
                allowfullscreen></iframe>

            <div class="memo_area">
                <i class="memo_icon fa-solid fa-pen-clip"></i>
                <h3>{{ nowLanguage.youtubeH3_3 }}</h3>
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



    .video_area {
        width: 60vw;
        background-color: white;
        margin: 3rem 0;
        padding: 1rem;


        h2 {
            width: 60vw;
            height: 15vh;
            font-size: 2rem;
            font-weight: bolder;
            padding-top: 1rem;
            text-align: center;

        }

        .video {
            width: 100%;
            height: 30vw;

        }

        .memo_area {
            background-color: #f9ecdf;
            margin-top: 1rem;
            margin-bottom: 4rem;
            padding: 1.5rem;
            border-radius: 60px;
            box-shadow: 5px 5px 5px#c5905a;

        }

        .memo_icon {
            font-size: 25px;
            margin-bottom: 0.5rem;

        }
        h3{
            white-space:pre-wrap;
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
</style>