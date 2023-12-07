<script>
//Pinia 方法
import { mapState, mapActions } from 'pinia';
//自己的資料庫
import indexStore from '../store/indexStore';

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
        <!-- 電話區 -->
        <div class="phone_area">
            <h4>Phone</h4>
            <p>{{ nowLanguage.phone }}</p>

        </div>
        <!-- 信箱區 -->
        <div class="email_area">
            <h4>Email</h4>
            <p>{{ nowLanguage.email }}</p>
        </div>
        <!-- 連結區 -->
        <div class="follow_area">
            <h4>Follow Me</h4>
            <!-- icon區 -->
            <div class="icon_area">
                    <!-- facebook -->
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100004650665762">
                        <i class="fa-brands fa-facebook icon"></i>
                    </a>
                    <!-- X(twitter) -->
                    <a target="_blank" href="https://twitter.com/azwsxrfv2396187">
                        <i class="fa-brands fa-x-twitter icon"></i>
                    </a>
                    <!-- instagram -->
                    <a target="_blank" href="https://www.instagram.com/azwsxrfv2396187/?hl=zh-tw">
                        <i class="fa-brands fa-instagram icon"></i>
                    </a>
                    <!-- youtube -->
                    <a target="_blank" href="https://www.youtube.com/channel/UCWs7mmEuhyz9ze2O1QUFpiA">
                        <i class="fa-brands fa-youtube icon"></i>
                    </a>

            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    // border: 2px solid blue;
    width: 100vw;
    height: 10vh;
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 18vh;


    h4 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
    }

    .follow_area {

        .icon_area {
            margin-top: 0.7rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .icon {
                transition: all 0.3s ease;
                cursor: pointer;
                color: black;

                &:hover {
                    transform: translate(0, -0.25rem);

                }

            }


        }
    }














}
</style>
