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
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV85MnryKo4QiUKvTU-fifjX83lf4nsx7D6P5WXtgxQXcWx8Rb7ify6MY2hOlhqZjKqEu7g2knuUqjz0hNd8SIcL33EidlfxjD4mj4CNSOtqa3PfpTrccRN0kiaEQDXrvcdR3j7J-CnHAfawYNpmxSt2hkrGVyyU5t3kMaM0OprY6kXtBeDtfUyE2yYDGRBD6KvjZRdmAhE_7kqWKqjcd0UJy-_ppNmQDaffVNQwfAsqU08ESIpGlLNeGjWvotiD_kG8vGbkusjxw9wLPfESrcFOn6puiDokoAceazgeHEol3rnHGHCoUMzBRZwBjuWlgioKvvhBIHpt1LjWL5dzOVAosEAjoFX-NXzsBd3uN1_laar_CyiyihYVxdGZIIkX5oqV5bJl6rSA-omZ-vpfJQVqC0Tdkh82PMjNZEVVDUUHtd65HvVNZFYEBLk_lRA17FoGwZavSU6etQUSYwk69h5GJ8MogB_JzbejXjPVob1ndyaHJRlZIQuvrD-9jdECDp0PEqmlNZYfTzBkaHeSbejf5RdGNsKode4YdWW-Ca7Lk5YCfz8yI7lR8ron_sfcuFqNCc5WxuyW9I1yF-x_RrzJ02UuvROlHzDnEf1dekQYyRClnenB-7DdiVo5jFBfi7YAi_PRR2VjyPoojSRCK4__q7IrkqlnacqRa0ErK4t1w89ZiZb280pvmC9jbX-Uhh3QxgCjti8VMFws6Lj_ibOplAqPIAYJdom8hEmqdBFp0k6JgmspgDA7upP7a1yzIxY5mB9lJNv8QRif7brZhlwThfvGyHE3RVlRn9eI4zoKFNP00b5nuBHCimm8Omai1qMTJRp1slk1g72V8bSrXGXQ_CF3lDyOtGngPY2rocJl7SXF0cGrQP2Wk2Ae9Yyf50jPr6eM84ETn7sDtz9HIMJ-DQTO6jsJF_sQ2bViET98UcLPypiTEulYbS4M_qx4Rh3ddJEiTh7DpGxgUIw6gyyF0f8vCrPk2X04JH_R-XqwttV_0_De21l9XNvA8K8hA_F3Ckj4sFqhscqKAoNs=w615-h924-s-no-gm?authuser=0"
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
                        <img src="https://lh3.googleusercontent.com/pw/ABLVV85YFh7-nMeGVReXl9ADvDzi43VtxdLD0CS11b858fFCZX9jdV5-1N-kzftCbnsdFnYKSafRugBlV6yggVoUhovIBpbY1KVyLVX4aMjq6pw4uN1QmwRvKonirnH62wYL9WGWd7ueAsZQjfJRamNuLcpBMN4MOZb8XoqYtN_vtTQ-2JOcCM-lNFYXF5b9V5UShkF4ZdIgTg013qS7M7kHklHC94hwhSNC-doLnfwnGFixV0LjsOBb_xbl3I8ROQoHvdVC6IuOXmQlBuYsoqSQLv1tpLTNT0ILWDJM4o-lFGlonZZiz3sz2ajnHgLHFXxYTxgVCAzZlCEKBYL2P_F-fscrRwIJHFh_dmLGRypSiYAZVeafP3cbJTI5ylOKdirDigQFsm3vtyJ2W-uhGlry0mVhja9ok4w77gIZ2XQFaGV5XETZj9r6RLutaXt1t04Vb4UvovxQ5aICFos9MnsYlnXWh5pEYtivDFXyZjvziGjdMQCro84xkJwfcY1AsQDT_NQJgnxJyAtoB7o-z__YHjpFb3ihUbUmD19fIAkr_keEZc14SsobpK42NSaqud51nJy2lGQvoFpNsHD53e4oKQ-717u_RPCyqGk20gIkRjU519FU_sDjKh4g12h6S_40W-8X-Lis1bp_tDZMFsNqVBZEuvTJiqvU86NkJiSVaDMhPzUBW1pljElgdwWebmy0NxVDXXR-vrLBohP3EFCQoikxnOft6rIVk29B1xJV6H4qdQwbj4uvXu4B42GSTm40IWJzp3AiwPuscvvTaf6Ugl9Y-rPbYoLELubEgffKIjXh9NNUHMBsQG5hVzkGEnkWoizWSiYNRI-Wdw3Tf8EOpFsSNvRsxwaaAwiNC8zeb_DSDnCDCCIkxa7m1ED-bKGZyuSKGa4nPkKu6-5GWubNuOLAAjwTRusTHKCw7VG75QBH9ZcbsSsIUnt2QNwcGNYcF-1KLtqyk5NKc5ypBDSSi2XIndcz2whNJruKXNkoSwd7aJUoaBbGBBphSzy2gBdYwkQL1MUlP2fvT8hfw2g=w924-h924-s-no-gm?authuser=0"
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
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV86udJo-kDgpoC3eO3KEBJxSOTVFSBRwf5ekNXpTBTr7bUV9tBQxK0u8jej81BLK52gBwufSnokxu3Ea-ayWVm0qBYPk-xVlrBUXrBR26w3sybTzOiJG6XhSVAVun2mClNeCrDnHFScKgAptfTfRzcyU7ji2tyOYxeVIFDNr2DatQGAl2RGWcM1cCc3Cb-Ct2AWtQOMGxLW5fERrc3KemL-quQLxXVE06C911lJPc5RdWcffm0AQS0FBdMFPMSEIYW4BOKBCmcKOiQumuGzEdt5c504HUoIj9Ku1YCpAm8I0pHk1KzGRYZXHM02VmX8jYRdbpL9P8QsXbgYCZZuOjh9Vb9v7COysJUzht-AKSRGt028wuoOaRpfcM0Fwuj8alfARhddZzxsDWqZupl6Xv7fNMLUs8Vtaw1QI_ZlQdbgN8-TSwntElq1suEpV6vp0m3FEJy_N06AUKLEheBF65SHnzoW6hJhuQ3GvtccynX40jeBBXKl1Fjx7FYuNVOmJOHosPdZk5WXHdwEG8J7T2msrz8l3gIZY0N1WRjO_GgNEIzz7OsKATxGNp0rmbbGjs649OVOfHS2ClUOOfsV-dI7kFQiyFjLixk0VZKFJcjS8_PbU7HcOlCm-whnY9GNmJXfn47uBqJLEn7FPTew1b1bRfF1kdU-Y6Wh1qfAasXzOT0M4QiI7iGVtKMiUf-VHZfsz-v6-FoDjjdUFFazKj2jvS8e7wsrqph-EpGSozwPJWF2NL_OzpckuugIvFx8idD5x96pymMO_WFtHpXlbbzJbGN5hsyFeOUgfMBO5llXxd7WSL2zn_hTPvl2A8PR-QERd0mlEJSGoKIpN02_DTzaqPwCMCxo-ZP107Dkc02ayxZZAacyIxj3153k-FjA8ELQTD2tcqu_Gv5TB1ic9BY5hwuF0nFjd_8rFdVJF-wKf27tNuDVDMqqPlxATinFDQM_eH8bA6IhOclTrRGPYJi9CXUDZdlwHFWYng_MINIJP8Tp984GTr7bZPnJ4c1pEp0-uLfjbDemDDIMf4qQ=w1233-h924-s-no-gm?authuser=0"
                        alt="performancePic">
                </div>


            </div>
            <div class="pic_area">

                <div class="img_area">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV86CaCGSFDmuMjWXrElZqXHWBrzQToNoJcKEOB100JPhXEVbfywTA4N90oY6sO_5kzHKgJyRZxaSVpWnlynmzChWpb4U1atN_87F1WfvAI2OMrW9uBzH-6Pq7UHn4cdbbnOHlyO8bjxxULGrwAGWO9t1xO-eoiozNn4O6C2fm4ZVE9jzvTNnBKUNIaw8Mw7Nl34Q_1d27PQg2Y9QloqhUGZgE4b7MTmiEnxiWP0ku8IOebkBCSpq317SoujqWIESOzzoop_Fd8YHJMBI2Q2MzEsOtmaEgM6HjMslZtuuWBI7K1lbMVH01x-9DNCTyfmet0qPT33hF8RwWJ1E0c7Eaom0zSc8Kv5hMXN8bpMD84Gu0iR_anNROHVM4M1fjTLdDf_WO3u5NT9GvkAcu5HGNallJPNwyp-atCI8bd9PNkiM2m_M3k3yZFAVNYQwft5KWc9D8sGehuZFrEbLoZY5UIkC6COeS3dGI83RN3fHsPn2c7BITLhO8Fk_zbHiQy5gAcW1Pj8fXnMrlroi899Z6ZS7mw-qxYU8vrda0-rtZfqS4EUOHIztYtiSrjiNnnGVAnKP2SqWkXD1M8MLmUbtQ0lilAgp4qLqfk34JA-YFhRJQ6mV-9cM6hk4_-fFm8z8e1woeFDAk9c4JPU-g2s5ExG7L0WOUSZsZOn2nzFDRMIHeXyVHQbRPbCKCt9myU7_-k4lBWKbzdjN4xZaDY5xRU7SfoHCjFtdE-vioII_CA3cLRbBEJ9cez1oX0jFsZIQP337MdkAViJCcdMcVcYoM_z5bVouCUZiN_s1uUJ-nhUhM_c90RylIPWEQjdFrNboaJZV_un8LF-zLajNeMhN87QWMJztsrPFeriPIg6CxIHw1dPZz74lAjKVbUD8ELeZdUARvh9xLDKkXg9xWWRTPK3nEDny1Ov9BPJGgdnXUVkBgX2-_nZFDcJMfCcsYBO2PfLYN4ZA1FqGtKOML3m44UPVDZ8b7Ry_zNupV1pm6URD88zvazKSaYiD-83jarBLcUwZz4RFFz2vbB7qHvQ=w1231-h924-s-no-gm?authuser=0"
                        alt="performancePic">
                </div>
            </div>

            <div class="pic_area">

                <div class="img_area">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV85kWRcMBS9yWEBCnj9xXSietfJ2j4F7YzVlBkI7fD26msA6tMXe1qcSsfOmMNWzRGUVZVISUcSrK72iEg6YYbp1NCFoSQuHLzDUUsBmScJ0ChFbU-2tRwLSOUPP-7dWQZnkoc4COljsA7ASzoLdYzzoFFeI6LfoPfcL3yeK5HGqdgpFuOTYUJjQPpU1p8n5TldIL0hQ8cA5lBc1hM8APNvIIfwBGWbEpCGxV7HMG5HgTyNZw8-COs2LxM0C-Xwr9gS9tyAYDZtN9x4PFJ8cKQBxq0GEvthojH0tcrT4VIiBtt7y7rFiBQPd7pbM51VBWur4vqvOnRN0GHcWItn-x5T9gUCHdr00QrgkJZfH50D6lyP9iYCyUsp22CCdag6VOsd86UTGlo81x7Tq_e01X6eKgyWXMSblqngQtwoU9iChZ38TdIQwPT3HHeFFE5fv0tcn4kw3k_PacmOu-7mbGG9XeK1Osg0h4yytyrLKbWYkWTwQmtak5_9NjD1IcILaIcNfpFi2Jfn14v3QTRlpgdubXNU-t1N7dFmhVS4aY57a0JD8snXGyuKL_mZtt3WvWv14enqicYYnEsDw0JpJrZ46HJJ1Hz9vA0Ool_HWE3NNTozQ2a6758mKFSUdPazSF4mprDIY9PXwnUsukWvRkkG9EiONa3v31xmKF_IeFHs_vbXJ5hDjgLKW3lJ4EGTAsYfqkTOTBnAunowhLHn7DszX6NTEXjlsjZubrPkYaZxTkE77PcYQLMzIf12cSrmiPcJGF1bYU806eJ2fAlbsG-qDTQO0IkuB10QDrdjyh3SNRkCW_cQIl7i_6X2r1KKJ7CtZKvsGAa_kiFhy38mqNYIpwa-MYSu3-MkVXBC7Hy4W6DhNyMd1Tz2xD1m0LWqCWbnxmnzxIsSSZZbm8CP4NWB0rMKvdPclXS1Qh1x_2KRJFchgW88rXFJsJTJySqMFMmyX0R8ZtHQMGtFBSdk_8BnjgXn7Yeaog6x3-LOgvEanPxRTloCH_LrBWqldtXj1NaSRuN2j5wFTD3KAZeM=w1231-h924-s-no-gm?authuser=0"
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