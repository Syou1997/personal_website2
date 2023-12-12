//狀態資料庫
import { defineStore } from "pinia";

//兩個參數 1.資料庫名稱 2.資料庫內容
//自己定義名稱
export default defineStore("indexStatus", {
    state: () => ({
        nowLanguage: {},
        //中文
        chinese: {
            //header
            home: "關於我",
            resume: "履歷",
            project: "作品集",
            magic: "魔術",
            //HomePage分頁
            homePageH2: "台灣南投人。畢業於明道大學 應用日語系學系。專長有日語教學、近景魔術表演、網頁開發。興趣是魔術、料理和聽音樂。",
            homePageH3: "「除了變化，沒有什麼是永恆的」",
            homePageP1: "此話出自古希臘哲學家赫拉克利特。我們生活中的每一刻都在變化，不管是好的還是壞的都要勇敢面對，活出好玩且精采的每一天是我的目標。",
            homePageH4: "關於我",
            homePageP2: "畢業於明道大學 應用日語系學系。大二擔任魔術社社長、大三到日本留學、大四到韓國留學。2020年~2023年在百家泰擔任Driver測試工程師。2023年開始學習網頁開發。\n\n專長\n日語:\n50音教學、口說指導、日常會話、JLPT N5~N2指導、隨行口譯。擁有被誤認為是日本人的良好日語發音，擅長用簡單易懂的例子及圖像來讓學生理解。\n\n魔術:\n近景魔術、派對魔術、近景魔術教學。最擅長的是撲克牌魔術，此外，花式撲克牌也略有涉獵。\n\n網頁開發:\nHTML、CSS、JavaScript、Vue、Spring Boot、MySQL",
            //Resume分頁
            //學歷
            education: "學歷",
            resumeYear: "2016年 - 2019年",
            resumeTitle: "台灣明道大學\n應用日語系學系 學士",
            resumeText: "在學期間到日本與韓國交換留學，並取得JLPT N1證照。",
            experience: "經歷",
            resumeYear1: "2017年 - 2018年",
            resumeTitle1: "日本北海道釧路公立大學交換留學",
            resumeText1: "這一年的留學，不僅日文口說能力大幅成長，透過實際生活在日本來學習日本文化，讓我更能融入日本社會與日本人相處",
            resumeYear2: "2017年 - 2018年",
            resumeTitle2: "地區觀光的Facebook文章翻譯(日文→中文)",
            resumeText2: "透過翻譯的中文，讓更多台灣人知道當地的自然景觀與文化。",
            resumeYear3: "2018年 2月",
            resumeTitle3: "標茶車站的觀光導覽員",
            resumeText3: "「SL冬季濕原號」運行期間的打工。主要的工作內容是中日口譯及對來訪遊客做周邊的導覽解說。",
            resumeYear4: "2019年 3月 - 8月",
            resumeTitle4: "韓國濟州觀光大學交換留學",
            resumeText4: "邊在學校語學堂學習的韓語，邊參與學校的日語課程。在這半年間，體驗韓國文化、品嘗了當地的美食也與來自各個國家的人交流。",
            resumeYear5: "2020年 - 2023年",
            resumeTitle5: "台灣百佳泰 Driver測試工程師",
            resumeText5: "主要的工作內容是驅動測試與驗證、測試環境準備、機器組裝、作為PL的驅動測試的評價管理。",
            //證照
            certificate: "證照",
            certificate1: "JLPT 日本語能力試驗 N1",
            certificate2: "BJT商業⽇語能⼒考試 J2",
            certificate3: "J-TEST 實用日語檢定 A級",
            certificate4: "丙級餐旅服務技術士",
            certificate5: "丙級飲料調製技術士",
            certificate6: "TQC-OA -日文輸入",
            //技能
            skill: "技能",
            skill1: "日語教學",
            skill2: "魔術(close-up magic)",
            //Project分頁
            projectList:
                [
                    {
                        projectName: "猜數字",
                        projectInfo: "猜數字遊戲。每次會從範圍1~100產生一個答案。",
                        projectLink: "https://syou1997.github.io/Bulls-and-Cows/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV85Wmy3zGr7zW2ZL48RailLC55OM97D1N--yV8yqFrCEOMTdwPDqJxAYTiLL4w3M9sQO4ziKY-0TJD15T6Vj-WUtlqycFTD0thT_UKx25D3scrV8FZVL1lkOm1mvJKOqplD5KY9NDiVYvmoP7rGZQiS5PK2-Vr2boxM2tWxWzwnLzTSz5derBkfkfpnqDExDHJVcVzTLBRszQylLo8ENyspyYHBYB3ZHzMTpU6liyLs6Qz-PukZ-Amhai8puTZgqNfi845MpK7AumXmqfQ6hzSfRPAIVu2cWSexRm_7tymacOS0VjGDsaAzsATEUT77TccXuthPMDO5c1AEYThrmS2Wi1_EBMQCoIRcTPq2_YbA6AsJBCh4hKOz0UGsv7E2gbbjkSbVRTmKYv8DyRyIkwtH2Xn0se_9--DbhhsClBr2LW4F2WncMeoFxhQm_fmXTHxol6lwCUbfIpNQ94e54SI5mmAdhhVfwRx1Y4n-kOy_G0Zu7-D3CJkNXwqg_ZOF3gPPS_mxGkGYZkeiFsIQCgrF3oFy-YqewDR4OQ4MI3h2fKQTvnGIzwOChexysVdEn_Wc7UMqnGwGjw3-KjbwqtfXKVYxQaWR7EdRaRXp8Fy8tAVxd2Jju3gTJ6h7qbNAwcKmz5DjGBUjQ2NI4w1Wpq8qN1htu6KXoyw_ZNJF11nFYtu7R2njVH5Yeu-KDXvIZ0CDbif03MvuLknCsSbZ3HMmD8hbKba3SqsWNdy9lHnKpDB_GbymheYf7YY1i5OR50ltxn8FN8K3pE7B3NlagMsw6hfBq1XCdlVfiTqddd9Oqs1aCes6lnXx_TmUKRzaS1VV9jrDZD3AurP0KRBMd8EdxBN1rd6R4JFZCZPiok70Rdm0mzws2rXmSs_ePYV5f48Kyp9P_IfqEvzARK1xy9A3Fkw7peQm3jKHrvaHJULG8EXM97VLZwAnCDJFn1NqUBHhFuFnY5-3HEA76ZMS-aqnCroFzDXGHRdriwudv4gPMNx48U4n3OIJL42HHOgGFQBfxdWXsjt2PQVGN3Fc=w469-h450-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "匯率轉換器",
                        projectInfo: "轉換匯率用的網站，使用方法請看網站內部的說明。",
                        projectLink: "https://exchange-rate3.netlify.app/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV86X9Eg8SLFyNc-cOn9nMDeqxnkgXDbBfkKkzY6rMeIZni3nuWgXV9nxgBH1mpbcKOW1Cn6zGh6YvOeo7r9aaZDDnU1-qxVkqYVUoXv5Y-4zhjIpqFAm1mbyrw0aVkK4gC18DjSxSiitF9Ik6NTu-XrhWvmqLMydbUM4ZOxtmqM2eNuI13dIbupwt4Xs1-0IhSnCeINWpe0iPeRB1RkDpnQfWV61_2V5Aelx1-GT6mSbLLhJVLEE-8ZlGGF72_g8cA5iM84FqipcaVNgVeATRwzoh9D_aoTmUV2fwEiYYZW6mfbcaOTq52lMykQ2fei3God8pMdFitR-eHDyHNuN3AGKyqYlE8AbkYEySC62_F3x6Vb7Rx4t1dknYdhuUOK4mW7miJ4ex5P32fkQdinvNuhqFyamYTiBCu-jzrSaH7QC8cyeYmNEojQsU7fNM6qQiPINV1RHm2VIv94f8f5XokXk3gEcGTOa8p67I1QQUjPbkDw-442xqFor2cW_9bZGWRXzFbWRf3DM1ul350HHOLH6GYcPOJzMcT5tmxtItTJZ-hU1AB_iIwycRmU2ZaYzNPexc7mLnbtg2z4LWmZtqGtEi8jPETqvex5ngwxpobODLGARKjV8x7eLEP7zl2AYYFSSCHBSGwBIrXBmy4eXkAZXqP2UzRF82SNwmucRxS8tDMZh-9iw4sZye1r5zOpc7MFucc41XJkJnz1VwVh4dCZmEJY9968qUy3b3HjvJPAppRTPK66nUI8oyMKv0WLMN3dASyEC5YDHEU36GeN3-vnSD1FoT7SxGrwsbGVJa18fREqiyshEVNNUXTK4nhGF-z-PHOqGi1id9LMAcJeI-fzqXQJQyOlCt9KjMlZ2VgMWYcITGlFiPUOeMpaG9K46x_aaZvA8yE71Ce-8o2P3IzsLeQytesKeVQ7dXGEaYhQ2dcD1y5GJqQgAH5e26mmVKHnxvKYwE_L65LsZq3I2AfW8iOujCYOlQ6DeCzr9H06_Xh0SGrHEbVzzhd_kPf_Q0QZ328sadqaFsr_9CA8=w1143-h608-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "記帳網站",
                        projectInfo: "計算收支。\n注意事項:\n1.要申請帳號否則無法使用。\n2.收入是正數，支出請填入負數。",
                        projectLink: "https://income-and-expense2.netlify.app/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ADCreHfjMwcSgpBF5aHok5FYQRUzLCBRb13xPbop6znCGWP6I8nGtIqDkyRpFZy0AHJCjlDE_RCiU3vvu1BbwVmZI5MQiWkSRcLv5xhBbURaXagDTg2cTq2Lm6bml0WyO6goHpsVMLBbLJxYfMmYe2no14R8q9IKGTgTPxaWeKfxYi8WKCmLsT6UtzrT1xCtI3tFaGhQKbIy6gWhdtxK6rOJMWrx0Hfv4c54PTsiK4uG_A6j8OB0Bq6eiRBJyf2fLlN5oVsHDn7qarO3j9_lu_LdyPiVnLccaV6k_u385P8s-f9NstPmAblrOdFAlkFZyrvOJsk5Wzi36ZktZd5jCbxNiMJE_QBFVcYJAUgLEU6kgF8AjvfNhPmVnGxklKOe16GqNSyiB07oDpdO9R4gnXyIN-ZdHXJT4uXhqz0osfs0AkRoW1WyhMukylBT9wlHF9BcT7wARnFaPXZ_cVwx5Ujk13FC2VQ6dvXx7edCuOew2LO2PODl-yvWKHTKfaM6DIvdZnZQgWJNNsje_Mq-iutOm45W_W5_nyl4qLBHx9vEjBAPCQ6MijtS3g9mfRlK_zrouqOb9q9FUGjdhy_vt8pd_VLWUAYf-Q4PFwU3M8eRPcGCPugiLRdAzRTVW6BSdAYB3x2hQqUby-R5Wqcbikdj0nQJOKE3_AAazNGMP_Vykt8NPwVdd8rSUzBFn2vAZ9lXLXiHIcw3aHHXdElvgFiP2Vn3kN3Hf49nSg22B7LmiQIhGwRlXdA4lz9IyTKqMUDq9qJvtoOd63fLzwKrHRoPyVaic1o_FLbD_gddKw8ofhOT_zACMnwWfmH9Rkscrpng2m9LgQEvlYLLWzDoPP9E0aRvNzvKT18FJHlZAS6gQ0NXBYQfr2ewWKlNX2zlGkc1siTM2IaA4JMSQ-QUUCBciM6KVM4ZacOSJEJMbBZbHP74WuWu0-66JyEm1UDuceXkJMlmhhyqivFPAfmaRGj0oLBJ7X4iwUSGqOe5fY4wByfRpj5aH7vr5nvhVQy9gaPQZ77v62HI-7nwNAghSt8=w1814-h804-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "圍棋資訊網",
                        projectInfo: "圍棋的基本介紹及韓國、日本、中國、台灣的圍棋文化介紹。",
                        projectLink: "https://syou1997.github.io/Go_info/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ADCreHeoGGc0Xx1DMdKcWM25DpTtIRWBl42si2LC_YS-nMe4Zhb5smnMBeVPd6CDK6HtmJhhAeepoyQrpfk4ZtM7oyFARYh7hlSwmCGVoW4jBBNBl_4VQqlaKMgKt-Ftij-QIFySoL2SGOQ1WJiKSCtLpyH3Pj-fGXoW2TTo78XTdHpTgEYkpQvXzbe3USvoRXo_bp3qRrE8Ulxr_oLNUnwYI2XH-Cs4BmUaAUd-HFonMPq-EVcuGzjJKI8nJ00FlgkDoErns9WPFsYEA_rz41VtugjDuoxUEn2LvjHo8r2lVm3rTcoWjMl4mrHpbfEXphLbjAjDdnPbJrtcyHUha8LgM-wby9Zx9Noa8s4FO3X-IWPnl3Pj6qCV_gTyiHYhQseJwKUSGgH-6UXbkDxuLSvTS2L8n5jR6fkTtsM7gIdq84FR5Hn195NxoLDkWI9b-fQJUCiykv3f8q4f1In1hpPQ1o_RUSigShySEff4F-ChIccML7jV-puXU-YqEKoJYl5TE3zTcxhdRG_Bg9zrb0SWGcG4uzWEbjNF5uy4G2CfOhzqq6gQnKuvVHtjCSirNR9Cqrlh_FxmB8xeYVrkHkXeXG_0LJEhOzTrAZ_x7X80OCahWB-XOk0HBRe5IWajMQENj2NVT3zZk9fh1Rm0aBg311OYsmyYT8m2lDoF4p95VxHh3-iqaxcP3ROqUlw_-ax40o6m69De11OddxJt5j6VSpM29jW_cCvXr1Zu68eKrqKkXtyVPo61jzH4zz99LHacwboSosMKhYKy7Fl-Ys4NZlbfenHzIsie5V5npN-QegR7b5UGLqgU1hPV10N8vGB_nEbXwWZFCEe6zLV9UmFxC6PcV8yfFVex0R-ILMugHIDJynJxmav6piMhcAcjX1OyF_HQ_LPTKQkGLYNrDA94Ng2X_n3eJPoyW1rKhlQaWVA5dfbqqalOWzr4tTLK9HSsXLzv181Zx8hl2mfWHm7jn4LkrXkNe2vLTjm6yVo9M3io9_60b9Lic6JMpFrsE7RHJcxuplqnVrrkns9vM5Q=w1839-h822-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "日本旅遊網站首頁",
                        projectInfo: "日本旅遊景點的推薦網站。",
                        projectLink: "https://syou1997.github.io/Japan-travel-website/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV86MfGkNt16zFD-C_G3AFu1IgN7o2fb9D5mKbUuxC73hxfTn2oLyTXY5TcTJosMmM3DysCaK2islQFu-_mrnqZCEcIxCsokjK-9n9ySHCOZvy9u0V7HF_7Bw_CU8ZoB1roqZ6zgV1ij420xRYHL8bZhNv5e0zxrPCJk-58UJX7VDT8NMMtLKoCNcmkjfibXt73J6345_EKnBxrrEckN1W_YPQiuncTwQCNDH6rxwkw-cwIbtuEMKUiO-4_2AbKOG90b0GC16JmC2gWrOYACKO_a9Eaz-aj63InrN7gTnPU4BkAayqrmYp-4ibAHKacMQnx3FBWpfejYUjU_r2_Yb0olKaGgIXP7z_7XXJksq1UuCWk0cJ49qO9d3ANZJjMglnKCBsJAKBcAKRAamw_MIIsooHgQT5-ijD3Qii2vvQVazCeD9nXgYV7nUcRWYBU2OdlAtlChxEfn1OzvvGPSlXPfrTzcTn1FJ0ghOFEs_0zt4x93e_ffmw93M_rspWUSnJxZW_XYldpsY7KYQjRUop8Th1cDcP66XoH36IKFpudHg0Aft4xwH2HhY_gyGvi_ZBM03zpy8hTfjc1G5C3Wb2ODvySyQJXn5t4e0a--2amTA0h0dZqxTBJqR_wI43WKuPtLAJ9P0PtHEI13fTQzK8JDQCDWAMQOnfm8MRRibGRFfVuS6bb_cLXPosRuD0_wIZfZHZt-ZtAiXClM9gUlF2S-3_HlcEDQQE1Ewgx2-cPTAGZaTRhVH9idVCg5QxmpymwDzYlcGWzATvQYzkiRj6vTq0aYeYvwCGg4azD-Xd27ouOAG4mABg_MvE47iSmtepQmDGvCoNgsrZXkGfMEFFQWecxOKwA3cxjtS3NvaiISRc3RGy7KFjM-up_hZv600X83x_fuXChmqMSOaU1lqHFrnkekmoYxpGFn4ij3H1DnHgQWyObsyM8FlzmW--wbygyy-7RHezeigoym3EGzoIes5K6QHRAGzQkJ8OmVV1NQOlGFrbu6btFsjPetmggKfaCOys6QUrM8Mr-YbZSM=w1855-h924-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "人員抽籤系統",
                        projectInfo: "可以隨機抽出一位人員，且能夠指定勾選條件做篩選。",
                        projectLink: "https://syou1997.github.io/ottery-system/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV84oZCIi2aw7ZlPRNJUZCrIiOkcRMzanAs86bfMAbfxlUR62XfVcPE5h2-zynA83w_9xE04NITNe26d0HnFPEyVXSXvi-miURshBdxrkKuKB4Aic2EKLCjmyO1F8XO4tJIZFlrjaUGggevWJyTFwwx4zyXDb0w6ZjQ6G8vefGE5hgThiMhbp3PBtCQ6la7UWtrAG-fG2DUGqTQ5cZaudNjlRrvkkGraFraBusCVSPLuuIfH_gj5x4xWooGfpyMyY4MvjTeeOzZMqvyiX-M401Nfz8GwFJZ9rjgHsEPNTXVyJqpFMBdbfddpUjMVlGQlp4CDJfvskP0VLJ8YktcV1lxcHdO52c2N0i1NFS1FuXmSuj9XqOSFUboldCOAqCgjH8rpMp988R2qUtRoELjWR8nkADuBj70FiuhWqYKJq9asZGUOYdZ9rdeiire-do_aDlr_9ouSJeqPXA-qdHZ4n1htorGxejPiJ1TDdXqHIuP1ApuiyZHNNLfUPiVMPqAlS22tnaLHtzCMAhw0E00_bPFg8DXAXcUAxBCV2L8Vho-IIhmjK9M2LGr_nwqyREetnlEvtPR1TWbf686LmjxrU6ZpNA-abMAXGTRaswByh-CaVWC0ZAQWWCn5Px10gRswzP3yNyW74Z86TX4o7IigFkYKQYcBxMususF0QnAP2tnUHD260qxMkWQD7jWEAC2aN-hKPDPxfDVbhvTEePG_1Y3WiV8b29JVsSxY5Hzb7HLPpMRySisZFexPdm0__D40pIiIuIi0T4sRISfSupYHBBQORoqGIDoIYex-KWszYH8kKfvT6HpsLZ1m3hEH1Y-SsyW1ANbbR5MSZb9OFNzfNFRxGmTUQLaI5Yew03GacC5kkPE_51QagEh_xfhY_9CqU8waQ3_5O98v55feOpB4KXq6mxvZdeXfNCA6rhaeerKw2AwiTcnbKkGw_1q4LhkatPlrF1QvnA18xhsTW86SGaaFKFxxlhsl1iTtS1bics7PYXmgoRi__fdYK_CvsAkv0Darb03Gk_uYfU06_JsE=w1662-h804-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "成績計算網站",
                        projectInfo: "美國大學用來計算成績網站。",
                        projectLink: "https://syou1997.github.io/Grade-calculation/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV85u6w_u1fyeSpF5sKeKhvyZAqAwmJH6XO35rJ4mqmkiqsspbOYpYb-XzUQ5u9h8crZpyffcqRm3sLPzRnHHhGGzAP5VZFIykrxulFKodWT2DyQzxaM3U4deEo6sUPwp5XIAHGMhfDkx2V_sVbJ7LivRnWxFTB9njMfHZo5hS4PpxgruhfaVCHMBLUCda0T9nV0RoYq66xveN0BQObkftjeM49Or0keCkbHqjEduvBYE--maFXiVcb2OZgoN-njMpQSY2wL0sB1AkdMn1FoHZNDOaVFoADRjAsLI0xkfP_YaexzNKkaA85cC9wQQa3ShQykRNzUX60VJgc2TrPtF8zXcCnq0UNKCBa5O3ai0gOIDgHbB0rfuKM2donNVkW48uZnjIDP9Z8V90d6l4zB-SwWDgrkxThD-p4l8QgFCXOqGAWnCn_a-lNwI0NPKd2yPKT2Da2fqnZrIFvGxYCul5bvrZM57QQM0ISqcHm5c2DVZk5Se_ib3DFdZZeTzHjfydo9SoSh_K-Uf079n9WmUtUchYhi66oGEnmu0IUXpKVeJ4rEB3pT82jaEsYFWm7DfKnn3iDiDFqQ1RJRICpjVv0s-HwLrsX21_LEiDh79cJRH1n9uGfcaMDdfZnsRThCrWGegfSHDVY9-CJDhVgHIT_a_DFwxiWeSYDhdJyiZH9ZVzFuHrP1bPh-UALeRyxBop1RkNcrw27zu00966TW8-UNNfbBNorNcY7n-VmOnQ4bNkEziRyh8rT1eJrRxIdvsv0rZEU6H8LWeziohzA5Jp9YZdS8-y9xxiEo1Wv5Iqyw03lS9-KdEgGQcQWCIydBdVlsOFUEMDvMncw4BJAxYehWFDGHyhtfPIclkGm8I1NIn4CqZ_2iWnT75TkhJ_oOqvfKI12Y1qLhFj5RprZflyBHWIZYz5ZWiCYuRyEqs0dt33n827CrMXrckvTF8CNXn-qOtz44y6uZewIOeGq6pmm-Wjc05EOzjUak_H3RBICPdzCCa2DPCmpdTbwOgZpIQR1MV2kSEftn7Vrv1E_M=w1904-h887-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "貪食蛇",
                        projectInfo: "使用方向鍵操控一條長長的蛇不斷吞下果實，同時蛇身隨著吞下的果實不斷變長，當蛇頭撞到蛇身時遊戲結束。",
                        projectLink: "https://syou1997.github.io/Snake/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV86uvPqOd_sXJQnxlA1OPY4OwB4N7LIpm7a6jVNlR1kp1IbtY5BDN6TwK4DpO5I4VMLE4-v8YylTq1Y5O8HdwENt6ZqyDtEiblOKrVFoOQBPASj7C_hmQ5-GW-NA-yyF3w1fS4kmSXfodrAEMa2q-ov8jAsI95YclFUMsBVevUDcWYVv68IRP7x5UEwg74qdDideTQQ9Z35592KlEWcPiOke_4tXfTlCkW5vV7R6f-aiQpeUXANu5_H-Oxa_lelxZdUf-lQ_x1W5vvLcQBp0BIc_0Jc6EtJ20oMDEILWGEiFm7ZDWvHjTdhDPJhnxkWGdHQT6_OLGVkg4Y8N4fHIfnUsi-H-F-6Xxm4_1lRTukeDXOuLypwqEbOEG8XNwxoNVjtLhdwehrKqoNzv0S15OFKRbBOO50Ur45U5STWD2jYuNxQoMedUntkanGnpolONOpfIUKoJp9QCCqLjqVfbpapnDjT3Xlt82HBwwzkHnc2lLmZ3Gfrb7ls8q3huQVPF2ntJwSWCBsY120yUfkeZ9LSAN0T_o9bwnwomvEJMVADLtAzE-abV1cC9FpICI7E08YW0gqxjRl1w2AvEUeN-81jn-auWrGE1F1F3fewihDC_Zn4vGT5es8Hg0as86oBgQ2SULp_YNg-Z81qkurq4OK8FjGJNrk-YrChjai6-wtMUHY_EOwr6D0MRl3zUhU5Djon9i-Cy4ntEvsDe6YNn5F9rz9tHAwIhyQGnAch3jPP8VstVGmnJHORr4SpWffxSPE8U-Jj3MKONv6PzHD3enLGem41udMQmDJOn_uo_m0r28SuF05sabJZjcXfM427Qoz0ZBHPU9odkqT-651qM5_Ttd5ZHn6982um4cXTAKSbST1cbbj7aFuNYyugwYhd-ZAGCcm1foioUDowHW2xn5SCkmT5MMt_b1v-NmyP5xduqJ1KLudp36UV6Lv7PtRprhdKtWcy9UpoEzeuqD6rcO5BS6Zj8r856SdqsEw-WlyOjjmjHF4sZI363iWwZOJuskxwNNbTelgPI3G7gCfs=w1747-h891-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "打磚塊",
                        projectInfo: "操縱地板控制球的回彈方向，當磚塊被全部打完後遊戲結束。",
                        projectLink: "https://syou1997.github.io/Breakout-clone/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ADCreHeDuzeKkRVhVAunmLt41yYA7AE7faHEeB7tPFVfCT5E5k8WiGnacUlU6y8ieWI9rpICyiKZz3BTJ7uOeO6LnpQmBf1cQKnQJxN7MfXhZ6Eb_bEAcOEC-Ogc6BUpWbplWWfjpnQJR2X6jLcm9T4Exo0znyg67h0wbJkCJkaBD7p9EXo3Lyo8m0yt88CFtgYb9xLdG1JGfZV8_G7nV-DGEZxWciqbcdm78yWluLOkVT65jW1e1EgMZ95M2ZDB6jadGWZ7NtcOFU1YXs5uldDXrAEzhYTCW8iIt6Xil9nTqr7n7g0046dXVEbzoLOG9wGOulATl8pzodDoXl4pjwtTCpVuBEoWyN7-mYV9_Cuu3TkYYC4_Vycepl1VExUYn4u8DxcST4wcvPQU9F6j7fEXwPwOup1MTRnndOccc0l4O4AZg9PQDrXA3XSGKUICLveEA8jQDEP8ZbZ-l4ZSC-EhFoelZJzWtDv49An-0Ov-plwEvz4G25E5Mr_0uAwFPVS4mB0OPadLYduWEybTBT3J5xoxrpxGVAIrndUJpul-ORI8z96RN2dVfZ9XrHajT2Dug1Mr9MPF0_HF0c4eMzJMpfD4Fb9SflPhs6ZODG5XrPxi0pF_dIQRKUx79PWOPW-Ymiq_4Ghz4wctb6CxM3EjpAsVLvoOytk5OiEcuU-NImfjWDIQaqUSJsooo6HCBSgbhDujhP3RZtlrUCNlno5IJGdKZrIn4eP_6_IHKp5jgvXKiWycfnujCt0TRtF5c3Nj2K7zoopOeHpKbIClq9QB1OEoTcFP6gobGjbrtpWMKDxJqKWU9D96MEq7TbhpEwDqKeRR4VSOLUEtMe0OCpjwEENSf1FwbDVzrw26bolyu_fxg93eMkPgm60tpkompE_HR8JsW55JfMJsEkgztkd4_UD_Hbb57IPrkFw3Ttmru1RIuCzfEVJD8uRgzIcTQpNy0psDsYAH0yJCQ1vzDS9aVfOTgn3EWK4J1MYtqOONYAccojhTvkQitabv38F2QtXFJ0ogvWffRBg-90zTSXM=w1260-h904-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "碼表",
                        projectInfo: "碼表功能的網站。",
                        projectLink: "https://syou1997.github.io/Stopwatch/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV85fFQsA1BEU90UvGXvSupCghjOPSLwsambt0CO5Cle9UeLtup-zVc58OoM4KeMIlevL7UxEgfITackNBZ0argVBH1MYPRGU4eHHzJjpevUJoV7o3OnT_f4IJLEhW7mcXyk4h5h4Gm-Ql5Q2sXGKw9_bVxsmQEl7UDA7it61IZVI__2D8o2tqDeatKkaZLtMSKqN9456ETDtf7WGwE1DNv8WBD7tvTU0HqOquuttas5m66BWJF7jhcle7slvtD3fxxvRH8YijRmzYcQ3BNjMhWV54SfJVgjGCGimFFapHv8hb4T3ZValqVcFZp5BuujGi-HqjDk3uV8cp0x7A1A6dji0203qkN3lwcmsy8KhDgXg75FOJPcR553KscDQXicjlnsqKgxvomRE1C5hluGdeBdHSzFidBa6KYqRo54Iwehp1p2kLdGInGw6FjSxQv9BnGf5FdSVRvxYM2S9WDW-nzc3aCMz2yn2fn85GBeTxXxPgAQrgJsEoZHZ92_RBNjMnUTssunI1Xska_zmdgMgeltQ-rDlWyBC5cXftooJztOf9p5xElukKQJg7af0fDkKXLB7Wm_rO25XXm9Ov02AwjhMRbEhvTXmlDV3l3vK4rYQl3U6xzcaP2vw1E67a3YB4BVD88aVN2e115wtubCULc-ooqvi4Dwd9dKd1TJJ7KojCkBf8S8_DokVKTYQK9VYDzJdgFH5k8zs6qPrRg1Dwknkz4P7S9SVVLuCKaTJaXdCC4QfuasTLEhkFCHBwSUh9jess8GVf6zPHgbrSxawkA08hmG_kCh8CY42NwRF5IvW5sNrbXUsOENEKKKax6lnH2IdabMIdF8rwIzPkHq4SuQDCa4rx2LmM5tujGACyIkve4z4Ae1OWNsorJ9sLnNyus-xPgouatbEQ6-mvsUTdOjosFYWBEXpG66t0KEk2Qc9rBXOgB3tt485aMazf0mqddkTcjqeedwZf2AJhNwriveOZ4UhG9joz5AU9CYmBH0NulXLjrv_8YoszvI-gMPq5_3fDk19EQusSA1KgXk=w1628-h679-s-no-gm?authuser=0",

                    },
                ],

            //Magic
            magicH1: "世界上最美好的體驗就是未知的神秘 - 阿爾伯特·愛因斯坦 (1879-1955)",
            magicH2_1: "魔術",
            magicH3_1: "我從15歲開始自學魔術到現在已經有10年以上的時間。最擅長與人互動的近距離魔術，特別是撲克牌魔術。大學二年級擔任魔術社社長，在此期間不管是在校內還是校外都有豐富的表演經驗。例如:園遊會、聖誕晚會、國小、公司尾牙。出社會後也不停地在學習新的魔術，我覺得這是我會持續一輩子的興趣。",
            magicH2_2: "花式切牌",
            magicH3_2: "2021年在網路上看到了Tobias Levin的影片後，從此就愛上了北歐風格的花切，尤其是Combo。之後學習的招式大多也都是Tobias的招式。花式切牌與魔術不同的是著重於操縱撲克牌的技術，我覺得是非常帥氣的一項雜技。喜歡的招式有:Flip Phone、Barolo2、Legolove、Bloom、Mantra、Skirt、Fairfax。",
            magicH4_1: "演出相片",
            //影片區
            magicH4_2: "表演影片",
            //footer
            phone: "0968961867",
            email: "azwsxrfv2396187@gmail.com",
        },
        //日文
        japanese: {
            //header
            home: "私について",
            resume: " 履歴",
            project: "作品集",
            magic: "手品",
            //HomePage分頁
            homePageH2: "台湾南投出身。台湾明道大学 応用日本語学科を卒業しました。スキルは日本語の先生、近距離手品、Webサイト制作。趣味は手品、料理と音楽を聴くことです。",
            homePageH3: "「変化以外に永久のものはない」",
            homePageP1: "これは古代ギリシアの哲学者ヘラクレイトスが言った言葉です。私たちが送っている毎日はくるくる変わっていくものです。良いことであろうと悪いことであろうと、変化にに立ち向かい、面白くて素敵な毎日を送ることが私の目標です。",
            homePageH4: "私について",
            homePageP2: "台湾明道大学 応用日本語学科を卒業し、二年生はマジック部長、三年生は日本に留学し、四年生は韓国に留学しました。2020年~2023台湾アリオンでドライバーテストエンジニアを担当していました。2023年からWebの開発を勉強し始めました。\n\nスキル\n日本語:\n50音授業、フリートーク、日常会話、日本語能力試験 N5~N2授業、アテンド通訳。日本人だと勘違いされるぐらい良い発音を持ち，分かりやすい例文や絵を使い、「分かりやすく説明できる」は特徴です。\n\n手品:\n近距離手品、パーティー手品、近距離手品の指導。トランプマジックが一番得意です。また、カードフラリッシュもできます。\n\nWebサイト制作:\nHTML、CSS、JavaScript、Vue、Spring Boot、MySQL",
            //Resume分頁
            //學歷
            education: "学歴",
            resumeYear: "2016年 - 2019年",
            resumeTitle: "台湾明道大学\n応用日本語学科 学士",
            resumeText: "在学中に日本と韓国に留学、そしてJLPT N1を取得しました。",
            experience: "経歴",
            resumeYear1: "2017年 - 2018年",
            resumeTitle1: "日本釧路公立大学へ留学",
            resumeText1: "日本で生活した時、文化や人との付き合い方を知り、日本語を日常生活に取り入れるようになりました。その結果、日本のことを深く知ることができ、日本語をさらに上達させることができました。",
            resumeYear2: "2017年 - 2018年",
            resumeTitle2: "Facebook投稿の翻訳(日本語→中国語)",
            resumeText2: "約一年間くしろ地域観光情報Facebook中文(繁体字)の翻訳の仕事に従事していました。",
            resumeYear3: "2018年 2月",
            resumeTitle3: "観光案内スタッフ",
            resumeText3: "「SL冬の湿原号」運行期間のアルバイトです(約一ヶ月間)。JR標茶駅周辺における、外国人旅行者への観光案内業務に従事していました。",
            resumeYear4: "2019年 3月 - 8月",
            resumeTitle4: "韓国済州観光大学へ留学",
            resumeText4: "語学堂で韓国語を勉強しながら、大学の日本語の授業も受けていました。この半年間、韓国の文化を体験したり、現地の料理を食べたり、沢山の国の方と交流していました。",
            resumeYear5: "2020年 - 2023年",
            resumeTitle5: "台湾アリオン ドライバーテスターエンジニア",
            resumeText5: "主にドライバーの評価と検証、評価環境の用意、パソコンの組み立て、PLとしての評価管理でした。",
            //證照
            certificate: "資格",
            certificate1: "JLPT 日本語能力試験 N1",
            certificate2: "BJT ビジネス日本語能力テスト J2",
            certificate3: "J.TEST 実用日本語検定 A 級",
            certificate4: "餐旅服務丙級\n(ホテル、レストランサービス技能検定)",
            certificate5: "飲料調製丙級\n(日本のカクテル検定3級相当)",
            certificate6: "TQC 日本語入力レベル 3",
            //技能
            skill: "スキル",
            skill1: "日本語の先生",
            skill2: "手品(close-up magic)",
            //Project分頁
            projectList:
                [
                    {
                        projectName: "数字当てゲーム",
                        projectInfo: "範囲は1から100まで。また、答えは毎回ランダムに生成される。",
                        projectLink: "https://syou1997.github.io/Bulls-and-Cows/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV85Wmy3zGr7zW2ZL48RailLC55OM97D1N--yV8yqFrCEOMTdwPDqJxAYTiLL4w3M9sQO4ziKY-0TJD15T6Vj-WUtlqycFTD0thT_UKx25D3scrV8FZVL1lkOm1mvJKOqplD5KY9NDiVYvmoP7rGZQiS5PK2-Vr2boxM2tWxWzwnLzTSz5derBkfkfpnqDExDHJVcVzTLBRszQylLo8ENyspyYHBYB3ZHzMTpU6liyLs6Qz-PukZ-Amhai8puTZgqNfi845MpK7AumXmqfQ6hzSfRPAIVu2cWSexRm_7tymacOS0VjGDsaAzsATEUT77TccXuthPMDO5c1AEYThrmS2Wi1_EBMQCoIRcTPq2_YbA6AsJBCh4hKOz0UGsv7E2gbbjkSbVRTmKYv8DyRyIkwtH2Xn0se_9--DbhhsClBr2LW4F2WncMeoFxhQm_fmXTHxol6lwCUbfIpNQ94e54SI5mmAdhhVfwRx1Y4n-kOy_G0Zu7-D3CJkNXwqg_ZOF3gPPS_mxGkGYZkeiFsIQCgrF3oFy-YqewDR4OQ4MI3h2fKQTvnGIzwOChexysVdEn_Wc7UMqnGwGjw3-KjbwqtfXKVYxQaWR7EdRaRXp8Fy8tAVxd2Jju3gTJ6h7qbNAwcKmz5DjGBUjQ2NI4w1Wpq8qN1htu6KXoyw_ZNJF11nFYtu7R2njVH5Yeu-KDXvIZ0CDbif03MvuLknCsSbZ3HMmD8hbKba3SqsWNdy9lHnKpDB_GbymheYf7YY1i5OR50ltxn8FN8K3pE7B3NlagMsw6hfBq1XCdlVfiTqddd9Oqs1aCes6lnXx_TmUKRzaS1VV9jrDZD3AurP0KRBMd8EdxBN1rd6R4JFZCZPiok70Rdm0mzws2rXmSs_ePYV5f48Kyp9P_IfqEvzARK1xy9A3Fkw7peQm3jKHrvaHJULG8EXM97VLZwAnCDJFn1NqUBHhFuFnY5-3HEA76ZMS-aqnCroFzDXGHRdriwudv4gPMNx48U4n3OIJL42HHOgGFQBfxdWXsjt2PQVGN3Fc=w469-h450-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "為替レートサイト",
                        projectInfo: "為替レート計算ができるサイト。使い方はサイトページに表示されている。",
                        projectLink: "https://exchange-rate3.netlify.app/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV86X9Eg8SLFyNc-cOn9nMDeqxnkgXDbBfkKkzY6rMeIZni3nuWgXV9nxgBH1mpbcKOW1Cn6zGh6YvOeo7r9aaZDDnU1-qxVkqYVUoXv5Y-4zhjIpqFAm1mbyrw0aVkK4gC18DjSxSiitF9Ik6NTu-XrhWvmqLMydbUM4ZOxtmqM2eNuI13dIbupwt4Xs1-0IhSnCeINWpe0iPeRB1RkDpnQfWV61_2V5Aelx1-GT6mSbLLhJVLEE-8ZlGGF72_g8cA5iM84FqipcaVNgVeATRwzoh9D_aoTmUV2fwEiYYZW6mfbcaOTq52lMykQ2fei3God8pMdFitR-eHDyHNuN3AGKyqYlE8AbkYEySC62_F3x6Vb7Rx4t1dknYdhuUOK4mW7miJ4ex5P32fkQdinvNuhqFyamYTiBCu-jzrSaH7QC8cyeYmNEojQsU7fNM6qQiPINV1RHm2VIv94f8f5XokXk3gEcGTOa8p67I1QQUjPbkDw-442xqFor2cW_9bZGWRXzFbWRf3DM1ul350HHOLH6GYcPOJzMcT5tmxtItTJZ-hU1AB_iIwycRmU2ZaYzNPexc7mLnbtg2z4LWmZtqGtEi8jPETqvex5ngwxpobODLGARKjV8x7eLEP7zl2AYYFSSCHBSGwBIrXBmy4eXkAZXqP2UzRF82SNwmucRxS8tDMZh-9iw4sZye1r5zOpc7MFucc41XJkJnz1VwVh4dCZmEJY9968qUy3b3HjvJPAppRTPK66nUI8oyMKv0WLMN3dASyEC5YDHEU36GeN3-vnSD1FoT7SxGrwsbGVJa18fREqiyshEVNNUXTK4nhGF-z-PHOqGi1id9LMAcJeI-fzqXQJQyOlCt9KjMlZ2VgMWYcITGlFiPUOeMpaG9K46x_aaZvA8yE71Ce-8o2P3IzsLeQytesKeVQ7dXGEaYhQ2dcD1y5GJqQgAH5e26mmVKHnxvKYwE_L65LsZq3I2AfW8iOujCYOlQ6DeCzr9H06_Xh0SGrHEbVzzhd_kPf_Q0QZ328sadqaFsr_9CA8=w1143-h608-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "家計簿サイト",
                        projectInfo: "収支の現状を把握するサイト。\n注意点:\n1.アカウントを作らないとご利用できない。\n注意点2.収入は金額がプラスに対して支出は金額がマイナス。",
                        projectLink: "https://income-and-expense2.netlify.app/",
                        projectImgLink: "https://scontent.ftpe2-2.fna.fbcdn.net/v/t39.30808-6/408562363_2579938665504464_7785218608524072776_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_ohc=EZB4wpWKR1EAX_D-vgf&_nc_ht=scontent.ftpe2-2.fna&oh=00_AfAkgbHAZsYuUMGPnQLuLQQHkixgSHrPOdiC91gr3Vat5Q&oe=657CC4A1",

                    },
                    {
                        projectName: "碁の紹介サイト",
                        projectInfo: "碁の紹介と韓国、日本、中国、台湾の業界の紹介。",
                        projectLink: "https://syou1997.github.io/Go_info/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ADCreHeoGGc0Xx1DMdKcWM25DpTtIRWBl42si2LC_YS-nMe4Zhb5smnMBeVPd6CDK6HtmJhhAeepoyQrpfk4ZtM7oyFARYh7hlSwmCGVoW4jBBNBl_4VQqlaKMgKt-Ftij-QIFySoL2SGOQ1WJiKSCtLpyH3Pj-fGXoW2TTo78XTdHpTgEYkpQvXzbe3USvoRXo_bp3qRrE8Ulxr_oLNUnwYI2XH-Cs4BmUaAUd-HFonMPq-EVcuGzjJKI8nJ00FlgkDoErns9WPFsYEA_rz41VtugjDuoxUEn2LvjHo8r2lVm3rTcoWjMl4mrHpbfEXphLbjAjDdnPbJrtcyHUha8LgM-wby9Zx9Noa8s4FO3X-IWPnl3Pj6qCV_gTyiHYhQseJwKUSGgH-6UXbkDxuLSvTS2L8n5jR6fkTtsM7gIdq84FR5Hn195NxoLDkWI9b-fQJUCiykv3f8q4f1In1hpPQ1o_RUSigShySEff4F-ChIccML7jV-puXU-YqEKoJYl5TE3zTcxhdRG_Bg9zrb0SWGcG4uzWEbjNF5uy4G2CfOhzqq6gQnKuvVHtjCSirNR9Cqrlh_FxmB8xeYVrkHkXeXG_0LJEhOzTrAZ_x7X80OCahWB-XOk0HBRe5IWajMQENj2NVT3zZk9fh1Rm0aBg311OYsmyYT8m2lDoF4p95VxHh3-iqaxcP3ROqUlw_-ax40o6m69De11OddxJt5j6VSpM29jW_cCvXr1Zu68eKrqKkXtyVPo61jzH4zz99LHacwboSosMKhYKy7Fl-Ys4NZlbfenHzIsie5V5npN-QegR7b5UGLqgU1hPV10N8vGB_nEbXwWZFCEe6zLV9UmFxC6PcV8yfFVex0R-ILMugHIDJynJxmav6piMhcAcjX1OyF_HQ_LPTKQkGLYNrDA94Ng2X_n3eJPoyW1rKhlQaWVA5dfbqqalOWzr4tTLK9HSsXLzv181Zx8hl2mfWHm7jn4LkrXkNe2vLTjm6yVo9M3io9_60b9Lic6JMpFrsE7RHJcxuplqnVrrkns9vM5Q=w1839-h822-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "日本の旅行サイトのホームページ",
                        projectInfo: "日本旅行のおすすめ。",
                        projectLink: "https://syou1997.github.io/Japan-travel-website/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV86MfGkNt16zFD-C_G3AFu1IgN7o2fb9D5mKbUuxC73hxfTn2oLyTXY5TcTJosMmM3DysCaK2islQFu-_mrnqZCEcIxCsokjK-9n9ySHCOZvy9u0V7HF_7Bw_CU8ZoB1roqZ6zgV1ij420xRYHL8bZhNv5e0zxrPCJk-58UJX7VDT8NMMtLKoCNcmkjfibXt73J6345_EKnBxrrEckN1W_YPQiuncTwQCNDH6rxwkw-cwIbtuEMKUiO-4_2AbKOG90b0GC16JmC2gWrOYACKO_a9Eaz-aj63InrN7gTnPU4BkAayqrmYp-4ibAHKacMQnx3FBWpfejYUjU_r2_Yb0olKaGgIXP7z_7XXJksq1UuCWk0cJ49qO9d3ANZJjMglnKCBsJAKBcAKRAamw_MIIsooHgQT5-ijD3Qii2vvQVazCeD9nXgYV7nUcRWYBU2OdlAtlChxEfn1OzvvGPSlXPfrTzcTn1FJ0ghOFEs_0zt4x93e_ffmw93M_rspWUSnJxZW_XYldpsY7KYQjRUop8Th1cDcP66XoH36IKFpudHg0Aft4xwH2HhY_gyGvi_ZBM03zpy8hTfjc1G5C3Wb2ODvySyQJXn5t4e0a--2amTA0h0dZqxTBJqR_wI43WKuPtLAJ9P0PtHEI13fTQzK8JDQCDWAMQOnfm8MRRibGRFfVuS6bb_cLXPosRuD0_wIZfZHZt-ZtAiXClM9gUlF2S-3_HlcEDQQE1Ewgx2-cPTAGZaTRhVH9idVCg5QxmpymwDzYlcGWzATvQYzkiRj6vTq0aYeYvwCGg4azD-Xd27ouOAG4mABg_MvE47iSmtepQmDGvCoNgsrZXkGfMEFFQWecxOKwA3cxjtS3NvaiISRc3RGy7KFjM-up_hZv600X83x_fuXChmqMSOaU1lqHFrnkekmoYxpGFn4ij3H1DnHgQWyObsyM8FlzmW--wbygyy-7RHezeigoym3EGzoIes5K6QHRAGzQkJ8OmVV1NQOlGFrbu6btFsjPetmggKfaCOys6QUrM8Mr-YbZSM=w1855-h924-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "メンバーの抽選ツール",
                        projectInfo: "ランダムに一名のメンバーが抽選される。チェックボックスによる条件付きの抽選も可能。",
                        projectLink: "https://syou1997.github.io/ottery-system/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV84oZCIi2aw7ZlPRNJUZCrIiOkcRMzanAs86bfMAbfxlUR62XfVcPE5h2-zynA83w_9xE04NITNe26d0HnFPEyVXSXvi-miURshBdxrkKuKB4Aic2EKLCjmyO1F8XO4tJIZFlrjaUGggevWJyTFwwx4zyXDb0w6ZjQ6G8vefGE5hgThiMhbp3PBtCQ6la7UWtrAG-fG2DUGqTQ5cZaudNjlRrvkkGraFraBusCVSPLuuIfH_gj5x4xWooGfpyMyY4MvjTeeOzZMqvyiX-M401Nfz8GwFJZ9rjgHsEPNTXVyJqpFMBdbfddpUjMVlGQlp4CDJfvskP0VLJ8YktcV1lxcHdO52c2N0i1NFS1FuXmSuj9XqOSFUboldCOAqCgjH8rpMp988R2qUtRoELjWR8nkADuBj70FiuhWqYKJq9asZGUOYdZ9rdeiire-do_aDlr_9ouSJeqPXA-qdHZ4n1htorGxejPiJ1TDdXqHIuP1ApuiyZHNNLfUPiVMPqAlS22tnaLHtzCMAhw0E00_bPFg8DXAXcUAxBCV2L8Vho-IIhmjK9M2LGr_nwqyREetnlEvtPR1TWbf686LmjxrU6ZpNA-abMAXGTRaswByh-CaVWC0ZAQWWCn5Px10gRswzP3yNyW74Z86TX4o7IigFkYKQYcBxMususF0QnAP2tnUHD260qxMkWQD7jWEAC2aN-hKPDPxfDVbhvTEePG_1Y3WiV8b29JVsSxY5Hzb7HLPpMRySisZFexPdm0__D40pIiIuIi0T4sRISfSupYHBBQORoqGIDoIYex-KWszYH8kKfvT6HpsLZ1m3hEH1Y-SsyW1ANbbR5MSZb9OFNzfNFRxGmTUQLaI5Yew03GacC5kkPE_51QagEh_xfhY_9CqU8waQ3_5O98v55feOpB4KXq6mxvZdeXfNCA6rhaeerKw2AwiTcnbKkGw_1q4LhkatPlrF1QvnA18xhsTW86SGaaFKFxxlhsl1iTtS1bics7PYXmgoRi__fdYK_CvsAkv0Darb03Gk_uYfU06_JsE=w1662-h804-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "成績統計サイト",
                        projectInfo: "アメリカの大学での成績を計算するアプリです。",
                        projectLink: "https://syou1997.github.io/Grade-calculation/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV85u6w_u1fyeSpF5sKeKhvyZAqAwmJH6XO35rJ4mqmkiqsspbOYpYb-XzUQ5u9h8crZpyffcqRm3sLPzRnHHhGGzAP5VZFIykrxulFKodWT2DyQzxaM3U4deEo6sUPwp5XIAHGMhfDkx2V_sVbJ7LivRnWxFTB9njMfHZo5hS4PpxgruhfaVCHMBLUCda0T9nV0RoYq66xveN0BQObkftjeM49Or0keCkbHqjEduvBYE--maFXiVcb2OZgoN-njMpQSY2wL0sB1AkdMn1FoHZNDOaVFoADRjAsLI0xkfP_YaexzNKkaA85cC9wQQa3ShQykRNzUX60VJgc2TrPtF8zXcCnq0UNKCBa5O3ai0gOIDgHbB0rfuKM2donNVkW48uZnjIDP9Z8V90d6l4zB-SwWDgrkxThD-p4l8QgFCXOqGAWnCn_a-lNwI0NPKd2yPKT2Da2fqnZrIFvGxYCul5bvrZM57QQM0ISqcHm5c2DVZk5Se_ib3DFdZZeTzHjfydo9SoSh_K-Uf079n9WmUtUchYhi66oGEnmu0IUXpKVeJ4rEB3pT82jaEsYFWm7DfKnn3iDiDFqQ1RJRICpjVv0s-HwLrsX21_LEiDh79cJRH1n9uGfcaMDdfZnsRThCrWGegfSHDVY9-CJDhVgHIT_a_DFwxiWeSYDhdJyiZH9ZVzFuHrP1bPh-UALeRyxBop1RkNcrw27zu00966TW8-UNNfbBNorNcY7n-VmOnQ4bNkEziRyh8rT1eJrRxIdvsv0rZEU6H8LWeziohzA5Jp9YZdS8-y9xxiEo1Wv5Iqyw03lS9-KdEgGQcQWCIydBdVlsOFUEMDvMncw4BJAxYehWFDGHyhtfPIclkGm8I1NIn4CqZ_2iWnT75TkhJ_oOqvfKI12Y1qLhFj5RprZflyBHWIZYz5ZWiCYuRyEqs0dt33n827CrMXrckvTF8CNXn-qOtz44y6uZewIOeGq6pmm-Wjc05EOzjUak_H3RBICPdzCCa2DPCmpdTbwOgZpIQR1MV2kSEftn7Vrv1E_M=w1904-h887-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "スネーク",
                        projectInfo: "蛇を操作して餌を食べ続けるゲーム。壁にぶつかっても死なないけど、自身にぶつかったらゲームオーバーです。",
                        projectLink: "https://syou1997.github.io/Snake/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV86uvPqOd_sXJQnxlA1OPY4OwB4N7LIpm7a6jVNlR1kp1IbtY5BDN6TwK4DpO5I4VMLE4-v8YylTq1Y5O8HdwENt6ZqyDtEiblOKrVFoOQBPASj7C_hmQ5-GW-NA-yyF3w1fS4kmSXfodrAEMa2q-ov8jAsI95YclFUMsBVevUDcWYVv68IRP7x5UEwg74qdDideTQQ9Z35592KlEWcPiOke_4tXfTlCkW5vV7R6f-aiQpeUXANu5_H-Oxa_lelxZdUf-lQ_x1W5vvLcQBp0BIc_0Jc6EtJ20oMDEILWGEiFm7ZDWvHjTdhDPJhnxkWGdHQT6_OLGVkg4Y8N4fHIfnUsi-H-F-6Xxm4_1lRTukeDXOuLypwqEbOEG8XNwxoNVjtLhdwehrKqoNzv0S15OFKRbBOO50Ur45U5STWD2jYuNxQoMedUntkanGnpolONOpfIUKoJp9QCCqLjqVfbpapnDjT3Xlt82HBwwzkHnc2lLmZ3Gfrb7ls8q3huQVPF2ntJwSWCBsY120yUfkeZ9LSAN0T_o9bwnwomvEJMVADLtAzE-abV1cC9FpICI7E08YW0gqxjRl1w2AvEUeN-81jn-auWrGE1F1F3fewihDC_Zn4vGT5es8Hg0as86oBgQ2SULp_YNg-Z81qkurq4OK8FjGJNrk-YrChjai6-wtMUHY_EOwr6D0MRl3zUhU5Djon9i-Cy4ntEvsDe6YNn5F9rz9tHAwIhyQGnAch3jPP8VstVGmnJHORr4SpWffxSPE8U-Jj3MKONv6PzHD3enLGem41udMQmDJOn_uo_m0r28SuF05sabJZjcXfM427Qoz0ZBHPU9odkqT-651qM5_Ttd5ZHn6982um4cXTAKSbST1cbbj7aFuNYyugwYhd-ZAGCcm1foioUDowHW2xn5SCkmT5MMt_b1v-NmyP5xduqJ1KLudp36UV6Lv7PtRprhdKtWcy9UpoEzeuqD6rcO5BS6Zj8r856SdqsEw-WlyOjjmjHF4sZI363iWwZOJuskxwNNbTelgPI3G7gCfs=w1747-h891-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "ブレイクアウトクローン",
                        projectInfo: "このゲームでは、ポテンショメータを利用してブレイクアウトクローンゲームをプレイします。",
                        projectLink: "https://syou1997.github.io/Breakout-clone/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ADCreHeDuzeKkRVhVAunmLt41yYA7AE7faHEeB7tPFVfCT5E5k8WiGnacUlU6y8ieWI9rpICyiKZz3BTJ7uOeO6LnpQmBf1cQKnQJxN7MfXhZ6Eb_bEAcOEC-Ogc6BUpWbplWWfjpnQJR2X6jLcm9T4Exo0znyg67h0wbJkCJkaBD7p9EXo3Lyo8m0yt88CFtgYb9xLdG1JGfZV8_G7nV-DGEZxWciqbcdm78yWluLOkVT65jW1e1EgMZ95M2ZDB6jadGWZ7NtcOFU1YXs5uldDXrAEzhYTCW8iIt6Xil9nTqr7n7g0046dXVEbzoLOG9wGOulATl8pzodDoXl4pjwtTCpVuBEoWyN7-mYV9_Cuu3TkYYC4_Vycepl1VExUYn4u8DxcST4wcvPQU9F6j7fEXwPwOup1MTRnndOccc0l4O4AZg9PQDrXA3XSGKUICLveEA8jQDEP8ZbZ-l4ZSC-EhFoelZJzWtDv49An-0Ov-plwEvz4G25E5Mr_0uAwFPVS4mB0OPadLYduWEybTBT3J5xoxrpxGVAIrndUJpul-ORI8z96RN2dVfZ9XrHajT2Dug1Mr9MPF0_HF0c4eMzJMpfD4Fb9SflPhs6ZODG5XrPxi0pF_dIQRKUx79PWOPW-Ymiq_4Ghz4wctb6CxM3EjpAsVLvoOytk5OiEcuU-NImfjWDIQaqUSJsooo6HCBSgbhDujhP3RZtlrUCNlno5IJGdKZrIn4eP_6_IHKp5jgvXKiWycfnujCt0TRtF5c3Nj2K7zoopOeHpKbIClq9QB1OEoTcFP6gobGjbrtpWMKDxJqKWU9D96MEq7TbhpEwDqKeRR4VSOLUEtMe0OCpjwEENSf1FwbDVzrw26bolyu_fxg93eMkPgm60tpkompE_HR8JsW55JfMJsEkgztkd4_UD_Hbb57IPrkFw3Ttmru1RIuCzfEVJD8uRgzIcTQpNy0psDsYAH0yJCQ1vzDS9aVfOTgn3EWK4J1MYtqOONYAccojhTvkQitabv38F2QtXFJ0ogvWffRBg-90zTSXM=w1260-h904-s-no-gm?authuser=0",

                    },
                    {
                        projectName: "ストップウォッチ",
                        projectInfo: "ストップウォッチアプリです。",
                        projectLink: "https://syou1997.github.io/Stopwatch/",
                        projectImgLink: "https://lh3.googleusercontent.com/pw/ABLVV85fFQsA1BEU90UvGXvSupCghjOPSLwsambt0CO5Cle9UeLtup-zVc58OoM4KeMIlevL7UxEgfITackNBZ0argVBH1MYPRGU4eHHzJjpevUJoV7o3OnT_f4IJLEhW7mcXyk4h5h4Gm-Ql5Q2sXGKw9_bVxsmQEl7UDA7it61IZVI__2D8o2tqDeatKkaZLtMSKqN9456ETDtf7WGwE1DNv8WBD7tvTU0HqOquuttas5m66BWJF7jhcle7slvtD3fxxvRH8YijRmzYcQ3BNjMhWV54SfJVgjGCGimFFapHv8hb4T3ZValqVcFZp5BuujGi-HqjDk3uV8cp0x7A1A6dji0203qkN3lwcmsy8KhDgXg75FOJPcR553KscDQXicjlnsqKgxvomRE1C5hluGdeBdHSzFidBa6KYqRo54Iwehp1p2kLdGInGw6FjSxQv9BnGf5FdSVRvxYM2S9WDW-nzc3aCMz2yn2fn85GBeTxXxPgAQrgJsEoZHZ92_RBNjMnUTssunI1Xska_zmdgMgeltQ-rDlWyBC5cXftooJztOf9p5xElukKQJg7af0fDkKXLB7Wm_rO25XXm9Ov02AwjhMRbEhvTXmlDV3l3vK4rYQl3U6xzcaP2vw1E67a3YB4BVD88aVN2e115wtubCULc-ooqvi4Dwd9dKd1TJJ7KojCkBf8S8_DokVKTYQK9VYDzJdgFH5k8zs6qPrRg1Dwknkz4P7S9SVVLuCKaTJaXdCC4QfuasTLEhkFCHBwSUh9jess8GVf6zPHgbrSxawkA08hmG_kCh8CY42NwRF5IvW5sNrbXUsOENEKKKax6lnH2IdabMIdF8rwIzPkHq4SuQDCa4rx2LmM5tujGACyIkve4z4Ae1OWNsorJ9sLnNyus-xPgouatbEQ6-mvsUTdOjosFYWBEXpG66t0KEk2Qc9rBXOgB3tt485aMazf0mqddkTcjqeedwZf2AJhNwriveOZ4UhG9joz5AU9CYmBH0NulXLjrv_8YoszvI-gMPq5_3fDk19EQusSA1KgXk=w1628-h679-s-no-gm?authuser=0",

                    },
                ],
            //Magic
            magicH1: "私たちが経験できる最も美しいものは神秘である - アルベルト・アインシュタイン (1879-1955)",
            magicH2_1: "手品",
            magicH3_1: "15歳から独学で手品を学び始め、今まで10年以上経ちました。観客とコミュニケーションを取る近距離マジック(close-up magic)が一番得意で特にトランプマジックです。大学二年生の時、部長を担当し、その期間に校内みならず、外でも多くのところで実演しました。例えば：学園祭、クリスマスパーティー、小学校、忘年会。社会に出てもスキルを磨き続いております。一生やり続ける趣味です。",
            magicH2_2: "カード・フラリッシュ",
            magicH3_2: "2021年にネットで見たTobias Levinの動画がきっかけに、北欧スタイルのカード・フラリッシュにハマりました。特にCombo。その後Tobiasの技をはじめとして学び始めた。これは手品と違って、トランプを操る技術を重視されていて、すごくかっこいいジャグリングだと思います。好きな技は:Flip Phone、Barolo2、Legolove、Bloom、Mantra、Skirt、Fairfax。",
            magicH4_1: "実演写真",
            //影片區
            magicH4_2: "実演動画",
            //footer
            phone: "+886 968961867",
            email: "azwsxrfv2396187@gmail.com",

        }
    }),
    //computed
    //沒有this
    getters: {

    },
    //methods
    //有this
    actions: {
        //切換中文
        toChinese() {
            this.nowLanguage = this.chinese;
        },
        //切換日文
        toJapanese() {
            this.nowLanguage = this.japanese;
        }

    }

});