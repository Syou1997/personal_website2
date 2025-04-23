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
            JT: "日語課程",
            YT: "Youtube",
            //HomePage分頁
            homePageH2: "台灣南投人。畢業於明道大學 應用日語系學系。專長有日語教學、近景魔術表演、網頁開發。興趣是魔術、旅遊、料理和聽音樂。",
            homePageH3: "「除了變化，沒有什麼是永恆的」",
            homePageP1: "此話出自古希臘哲學家赫拉克利特。我們生活中的每一刻都在變化，不管是好的還是壞的都要勇敢面對，活出好玩且精采的每一天是我的目標。",
            homePageH4: "關於我",
            homePageP2: "畢業於明道大學 應用日語系學系。大二擔任魔術社社長、大三到日本留學、大四到韓國留學。2020年~2023年在百家泰擔任電腦Driver測試工程師。2023年開始學習網頁開發。2024~2025年前往日本打工度假。目前正在AmazingTalker上任日文老師。\n\n專長\n日語:\n50音教學、口說指導、日常會話、JLPT N5~N2指導、隨行口譯。擁有被誤認為是日本人的良好日語發音，擅長用簡單易懂的例子及圖像來讓學生理解。\n\n魔術:\n近景魔術、派對魔術、近景魔術教學。最擅長的是撲克牌魔術，此外，花式撲克牌也略有涉獵。\n\n網頁開發:\nHTML、CSS、JavaScript、Vue、Spring Boot、MySQL。\n\nYoutube:\n2024年開始經營各個人Youtube頻道，主要分享旅遊的VLOG影片。\n\n部落格:\n2024年開始經營各個人部落格，分享內容有:旅遊介紹、日語教學、台日生活...等等。",
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
            resumeTitle2: "地區觀光的Facebook文章翻譯(日文→中文)\n打工",
            resumeText2: "透過翻譯的中文，讓更多台灣人知道當地的自然景觀與文化。",
            resumeYear3: "2018年 2月",
            resumeTitle3: "標茶車站的觀光導覽員\n打工",
            resumeText3: "「SL冬季濕原號」運行期間的打工。主要的工作內容是中日口譯及對來訪遊客做周邊的導覽解說。",
            resumeYear4: "2019年 3月 - 8月",
            resumeTitle4: "韓國濟州觀光大學交換留學",
            resumeText4: "邊在學校語學堂學習的韓語，邊參與學校的日語課程。在這半年間，體驗韓國文化、品嘗了當地的美食也與來自各個國家的人交流。",
            resumeYear5: "2020年7月 - 2023年5月",
            resumeTitle5: "台灣百佳泰 Driver測試工程師\n正職",
            resumeText5: "主要的工作內容是驅動測試與驗證、測試環境準備、機器組裝、作為PL的驅動測試的評價管理。",
            resumeYear6: "2023年 7月 - 2024年 1月",
            resumeTitle6: "台南應用科技大學國際產訓中心\n「JAVA全端整合Web實務運用」\n課程結訓",
            resumeText6: "從0開始學習，包含了前端到後端的網頁開發。\n在培訓課程結束後擁有了一定的網頁開發能力。\n目前我用有的網頁開發技能如下:\n\n前端:HTML、CSS(SCSS)、JavaScript、Vue\n後端:Java、SpingBoot\n資料庫:MySQL\n\n相關作品請參考「作品集」分頁。",
            resumeYear7: "2024年 7月 - 11月",
            resumeTitle7: "淺野屋輕井澤舊道本店\n日本打工度假",
            resumeText7: "透過日本打工度假簽證在「BOULANGERIE ASANOYA 旧道本店」的麵包店擔任販賣部的店員。工作內容有包裝麵包、麵包的裁切、收銀...等等。另外，除了接待一般的日本顧客外，還負責接待台灣、中國、香港、新加玻...使用中文的顧客。",
            resumeYear8: "2025年 12月 - 3月",
            resumeTitle8: "京都高島屋 GRAMERCY NEWYORK\n日本打工度假",
            resumeText8: "以打工度假簽證，在京都高島屋裡面的「Gramercy New York」的蛋糕店擔任銷售員。工作內容包括包裝蛋糕、補貨以及書寫蛋糕牌...等等。此外，也負責接待日本人以及來自台灣、中國、香港、新加坡等會說中文的顧客。",
            resumeYear9: "2025年 2月 - 4月",
            resumeTitle9: "Let's! China 中文教室\n日本打工度假",
            resumeText9: "透過「レッツ!チャイナ中国語教室」這個網站，擔任中文老師，在咖啡廳進行一對一的教學打工。",
            resumeYear10: "2025年 1月 - 現在",
            resumeTitle10: "AmazingTalker 日語老師\n正職",
            resumeText10: "目前在AmazingTalker上擔任日文老師。",

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
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Bulls_and_Cows.png?raw=true",

                    },
                    {
                        projectName: "匯率轉換器",
                        projectInfo: "轉換匯率用的網站，使用方法請看網站內部的說明。",
                        projectLink: "https://exchange-rate3.netlify.app/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Exchange_rate.png?raw=true",

                    },
                    {
                        projectName: "記帳網站",
                        projectInfo: "計算收支。\n注意事項:\n1.要申請帳號否則無法使用。\n2.收入是正數，支出請填入負數。",
                        projectLink: "https://income-and-expense2.netlify.app/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/money_memo.png?raw=true",

                    },
                    {
                        projectName: "圍棋資訊網",
                        projectInfo: "圍棋的基本介紹及韓國、日本、中國、台灣的圍棋文化介紹。",
                        projectLink: "https://syou1997.github.io/Go_info/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Go_info.png?raw=true",

                    },
                    {
                        projectName: "日本旅遊網站首頁",
                        projectInfo: "日本旅遊景點的推薦網站。",
                        projectLink: "https://syou1997.github.io/Japan-travel-website/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Japan_travel_website.png?raw=true",

                    },
                    {
                        projectName: "人員抽籤系統",
                        projectInfo: "可以隨機抽出一位人員，且能夠指定勾選條件做篩選。",
                        projectLink: "https://syou1997.github.io/ottery-system/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/ottery_system.png?raw=true",

                    },
                    {
                        projectName: "成績計算網站",
                        projectInfo: "美國大學用來計算成績網站。",
                        projectLink: "https://syou1997.github.io/Grade-calculation/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Grade_calculation.png?raw=true",

                    },
                    {
                        projectName: "貪食蛇",
                        projectInfo: "使用方向鍵操控一條長長的蛇不斷吞下果實，同時蛇身隨著吞下的果實不斷變長，當蛇頭撞到蛇身時遊戲結束。",
                        projectLink: "https://syou1997.github.io/Snake/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Snake%20.png?raw=true",

                    },
                    {
                        projectName: "打磚塊",
                        projectInfo: "操縱地板控制球的回彈方向，當磚塊被全部打完後遊戲結束。",
                        projectLink: "https://syou1997.github.io/Breakout-clone/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Breakout_clone.png?raw=true",

                    },
                    {
                        projectName: "碼表",
                        projectInfo: "碼表功能的網站。",
                        projectLink: "https://syou1997.github.io/Stopwatch/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Stopwatch.png?raw=true",

                    },
                    {
                        projectName: "公司內部管理系統",
                        projectInfo: "使用了前端、後端、資料庫。\n內容包含「登入系統」與「請假系統」。",
                        projectLink: "https://docs.google.com/presentation/d/1yjp67DnTtWFXf2kRgZOoUQBphUH6I7WH/edit#slide=id.p1",
                        projectImgLink: "https://raw.githubusercontent.com/Syou1997/personal_website2/main/image/officeSystem.png",

                    },
                    {
                        projectName: "代辦事項",
                        projectInfo: "記錄代辦事項的網站。",
                        projectLink: "https://syou1997.github.io/todoList/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/todoList.png?raw=true",

                    },
                    {
                        projectName: "淺野屋本店-研修網站",
                        projectInfo: "ASANOYA淺野屋本店的新人研修網站。網站密碼請詢問網站管理人。",
                        projectLink: "https://asanoya.vercel.app/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/asanoya.png?raw=true",

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
            //Youtube
            youtubeH1: "推薦影片",
            youtubeH2_1: "日本歌手專訪影片",
            youtubeH3_1: "介紹日本歌手「璃杏(RIAN)」及本人專訪的影片。全日文發音(中文字幕)。",
            youtubeH2_2: "鹿兒島旅遊VLOG",
            youtubeH3_2: "日語發音，中日雙字幕。為了去見日本網友而飛去鹿兒島旅遊。\n\n遊玩景點:指宿的伊布家族人孔蓋、砂浴會館 砂樂、櫻島、仙巖園、仙巖園星巴克、鹿兒島水族館",
            youtubeH2_3: "2024年日本插畫家Caho的台灣個展「Caho's palette Taiwan」",
            youtubeH3_3: "在日本擁有超高人氣的軟萌少女系插畫家Caho，首次來台展出！Caho擅長以空氣感的閃亮畫風表達戀愛中的女孩感情，柔和的色彩與充滿粉紅泡泡的插畫，可愛到讓人無法抗拒。 1/11起Caho首次台灣快閃正式入駐華山文創園區，展開為期一個月的「Caho's palette Taiwan」特展。\n\n這次快閃品牌 0% TAIPEI  將「Caho's palette」日本展覽原汁原味搬到台灣，邀請台灣消費者走進Caho用獨特調色盤創造出的可愛夢幻世界，絕對激發大家的少女心。\n\n快展店中除了展出並販售部分Caho原創畫作、生活雜貨、服飾等周邊，也引進Caho親自打造的品牌「Caho's palette」人氣腮紅，塗上立刻擁有畫中少女的同款戀愛氣色，包裝設計一樣圍繞著Caho畫作展開，希望與粉絲分享插畫家心中激盪的感動和想像。",
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
            JT: "日本語講座",
            YT: "Youtube",
            //HomePage分頁
            homePageH2: "台湾南投出身。明道大学 応用日本語学科を卒業しました。スキルは日本語、近距離手品、Webサイト制作。趣味は手品、旅行、料理と音楽を聴くことです。",
            homePageH3: "「変化以外に永久のものはない」",
            homePageP1: "これは古代ギリシアの哲学者ヘラクレイトスが言った言葉です。私たちが送っている毎日はくるくる変わっていくものです。良いことであろうと悪いことであろうと、変化に立ち向かい、面白くて素敵な毎日を送ることが私の目標です。",
            homePageH4: "私について",
            homePageP2: "台湾で明道大学 応用日本語学科を卒業し、二年生の時はマジック部長、三年の時には日本に留学し、四年生では韓国に留学。卒業後、2020～2023年、台湾アリオンでドライバーテストエンジニアを担当。2023年からWebの開発を勉強し始めた。2024年～2025年、日本でワーキングホリデー。現在、AmazingTalkerで日本語の先生をしている。\n\nスキル\n日本語:\n50音授業、フリートーク、日常会話、日本語能力試験 N5~N2授業、アテンド通訳。日本人だと勘違いされるぐらい発音がよく、例文や絵を使い「分かりやすく説明できる」のがアピールポイント。\n\n手品:\n近距離手品、パーティー手品、近距離手品の指導。トランプマジックが得意。カーディストリーもできる。\n\nWebサイト制作:\nHTML、CSS、JavaScript、Vue、Spring Boot、MySQL。\n\nYoutube:\n2024年からユーチューブを撮り始め、旅行のVLOGを中心に投稿している。\n\nブログ:\n2024年からブログを書き始め、旅行、日本語勉強と台日生活など、色々な記事を書いている。",
            //Resume分頁
            //學歷
            education: "学歴",
            resumeYear: "2016年 - 2019年",
            resumeTitle: "台湾明道大学\n応用日本語学科 学士",
            resumeText: "在学中に日本と韓国に留学。JLPT N1を取得。  ",
            experience: "経歴",
            resumeYear1: "2017年 - 2018年",
            resumeTitle1: "日本釧路公立大学へ留学",
            resumeText1: "日本で生活した時、文化や人との付き合い方を知り、日本語を日常生活に取り入れるようになった。その結果、日本を深く知り、日本語を更に上達させることができた。",
            resumeYear2: "2017年 - 2018年",
            resumeTitle2: "Facebook投稿の翻訳(日本語→中国語)\nアルバイト",
            resumeText2: "約一年間くしろ地域観光情報Facebook中文(繁体字)の翻訳の仕事に従事した。",
            resumeYear3: "2018年 2月",
            resumeTitle3: "観光案内スタッフ\nアルバイト",
            resumeText3: "「SL冬の湿原号」運行期間のアルバイト(約一ヶ月間)。JR標茶駅周辺における外国人旅行者への観光案内業務に従事した。",
            resumeYear4: "2019年 3月 - 8月",
            resumeTitle4: "韓国済州観光大学へ留学",
            resumeText4: "語学堂で韓国語を勉強しながら、大学の日本語の授業も受ける。半年間で韓国の文化を体験したり、現地の料理を食べたり、沢山の国の方と交流した。",
            resumeYear5: "2020年 - 2023年",
            resumeTitle5: "台湾アリオン ドライバーテスターエンジニア\n正社員",
            resumeText5: "主にコンピューターのドライバーの評価と検証、評価環境の用意、パソコンの組み立て、PLとしての評価管理。",
            resumeYear6: "2023年 7月 - 2024年 1月",
            resumeTitle6: "「台南應用科技大學國際產訓中心」という台湾の大学で\n「JAVA全端整合Web實務運用」というWebサイトの制作の授業\n研修終了",
            resumeText6: "フロントエンドもバックエンドもゼロから習い、授業終了後、ある程度Web制作の能力を取得した。\n取得したスキルは以下:\n\nフロントエンド:HTML、CSS(SCSS)、JavaScript、Vue\nバックエンド:Java、SpingBoot\nデータベース:MySQL\n\n詳細は「作品集」タブをご参照。",
            resumeYear7: "2024年 7月 - 11月",
            resumeTitle7: "ブランジェ浅野屋 旧道本店\n日本でのワーキングホリデー",
            resumeText7: "ワーキングホリデービザで、「ブランジェ浅野屋 旧道本店」というパン屋さんで販売員としてアルバイト。勤務内容はパンの包みやスライス、レジなど。また、日本人他、台湾、中国、香港、シンガポール等、中国語を話すお客様の接客を担当。",
            resumeYear8: "2025年 12月 - 3月",
            resumeTitle8: "京都高島屋 グラマシーニューヨーク\n日本でのワーキングホリデー",
            resumeText8: "ワーキングホリデービザで、「グラマシーニューヨーク」というケーキ屋さんで販売員としてアルバイト。勤務内容はケーキの包みや補充、プレート書きなど。また日本人他、台湾、中国、香港、シンガポール等、中国語を話すお客様の接客を担当。",
            resumeYear9: "2025年 2月 - 4月",
            resumeTitle9: "レッツ!チャイナ中国語教室\n日本でのワーキングホリデー",
            resumeText9: "「レッツ!チャイナ中国語教室」というサイトを通じて、中国語の先生として、カフェで一対一レッスンのアルバイト。",
            resumeYear10: "2025年 1月 - 現在",
            resumeTitle10: "AmazingTalker 日本語の先生\n正社員",
            resumeText10: "AmazingTalkerというサイトで、日本語の先生を担当中。",
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
            skill1: "日本語",
            skill2: "手品(close-up magic)",
            //Project分頁
            projectList:
                [
                    {
                        projectName: "数字当てゲーム",
                        projectInfo: "範囲は1から100まで。答えは毎回ランダムに生成される。",
                        projectLink: "https://syou1997.github.io/Bulls-and-Cows/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Bulls_and_Cows.png?raw=true",

                    },
                    {
                        projectName: "為替レートサイト",
                        projectInfo: "為替レート計算ができるサイト。使い方はサイトページに表示されている。",
                        projectLink: "https://exchange-rate3.netlify.app/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Exchange_rate.png?raw=true",

                    },
                    {
                        projectName: "家計簿サイト",
                        projectInfo: "収支の現状を把握するサイト。\n注意点:\n1.アカウントの作成が必要。\n2.収入は金額がプラスに対して支出は金額がマイナス。",
                        projectLink: "https://income-and-expense2.netlify.app/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/money_memo.png?raw=true",

                    },
                    {
                        projectName: "碁の紹介サイト",
                        projectInfo: "碁の紹介と韓国、日本、中国、台湾の業界の紹介。",
                        projectLink: "https://syou1997.github.io/Go_info/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Go_info.png?raw=true",

                    },
                    {
                        projectName: "日本の旅行サイトのホームページ",
                        projectInfo: "日本旅行のおすすめ。",
                        projectLink: "https://syou1997.github.io/Japan-travel-website/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Japan_travel_website.png?raw=true",

                    },
                    {
                        projectName: "メンバーの抽選ツール",
                        projectInfo: "ランダムに一名のメンバーが抽選される。チェックボックスによる条件付きの抽選も可能。",
                        projectLink: "https://syou1997.github.io/ottery-system/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/ottery_system.png?raw=true",

                    },
                    {
                        projectName: "成績統計サイト",
                        projectInfo: "アメリカの大学での成績を計算するアプリ。",
                        projectLink: "https://syou1997.github.io/Grade-calculation/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Grade_calculation.png?raw=true",

                    },
                    {
                        projectName: "スネーク",
                        projectInfo: "蛇を操作して餌を食べ続けるゲーム。壁にぶつかっても死なないが、自身にぶつかったらゲームオーバー。",
                        projectLink: "https://syou1997.github.io/Snake/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Snake%20.png?raw=true",

                    },
                    {
                        projectName: "ブレイクアウトクローン",
                        projectInfo: "このゲームでは、ポテンショメータを利用し、ブレイクアウトクローンゲームをプレイする。",
                        projectLink: "https://syou1997.github.io/Breakout-clone/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Breakout_clone.png?raw=true",

                    },
                    {
                        projectName: "ストップウォッチ",
                        projectInfo: "ストップウォッチアプリ。",
                        projectLink: "https://syou1997.github.io/Stopwatch/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/Stopwatch.png?raw=true",

                    },
                    {
                        projectName: "会社内部管理システム",
                        projectInfo: "フロントエンドとバックエンド、データベースを使用し、「ログインシステム」と「休暇管理のシステム」の機能がついている。",
                        projectLink: "https://docs.google.com/presentation/d/1yjp67DnTtWFXf2kRgZOoUQBphUH6I7WH/edit#slide=id.p1",
                        projectImgLink: "https://raw.githubusercontent.com/Syou1997/personal_website2/main/image/officeSystem.png",

                    },
                    {
                        projectName: "やることリスト",
                        projectInfo: "やることを管理するWebアプリケーション。",
                        projectLink: "https://syou1997.github.io/todoList/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/todoList.png?raw=true",

                    },
                    {
                        projectName: "ブランジェ浅野屋軽井沢旧道本店-研修サイト",
                        projectInfo: "ブランジェ浅野屋軽井沢旧道本店の新人研修用のサイト。\nパスポートはサイトの管理者にお尋ねください。",
                        projectLink: "https://asanoya.vercel.app/",
                        projectImgLink: "https://github.com/Syou1997/personal_website2/blob/main/image/asanoya.png?raw=true",

                    },
                ],
            //Magic
            magicH1: "私たちが経験できる最も美しいものは神秘である - アルベルト・アインシュタイン (1879-1955)",
            magicH2_1: "手品",
            magicH3_1: "15歳から独学で手品を学び始め、今まで10年以上経ちました。観客とコミュニケーションを取る近距離マジック(close-up magic)が得意で、特にトランプマジックです。大学二年生の時、マジック部長として学内のみならず、学外でも多くのところで実演しました。例えば：学園祭、クリスマスパーティー、小学校、忘年会。社会に出てもスキルを磨き続けております。一生やり続ける趣味です。",
            magicH2_2: "カーディストリー",
            magicH3_2: "2021年にネットで見たTobias Levinの動画をきっかけに、北欧スタイルのカーディストリーにハマりました。特にCombo。その後Tobiasの技をはじめとして学び始めました。これは手品と違って、トランプを操る技術が重視されており、すごくかっこいいジャグリングだと思っています。好きな技は:Flip Phone、Barolo2、Legolove、Bloom、Mantra、Skirt、Fairfax。",
            magicH4_1: "実演写真",
            //影片區
            magicH4_2: "実演動画",
            //Youtube
            youtubeH1: "推薦影片",
            youtubeH2_1: "日本人の歌手のインタビュー動画",
            youtubeH3_1: "日本人の歌手「璃杏(RIAN)」の紹介とインタビューの動画です。音声は日本語で字幕は中国語です。",
            youtubeH2_2: "鹿児島旅行のVLOG",
            youtubeH3_2: "音声は日本語で字幕は日本語と中国語のダブル字幕です。ネットの日本人の友達に会いに行きました。\n\n今回行ったスポット:指宿のイーブイマンホール、砂むし会館 砂楽、桜島、仙巌園、スターバックス 鹿児島仙巌園店、いおワールドかごしま水族館",
            youtubeH2_3: "2024年Caho先生の台湾個展",
            youtubeH3_3: "日本人のイラストレーターCaho先生の個展に行ったVLOG。\n\n音声は中国語で日本語の字幕はCC字幕を使用されています。",
            //footer
            phone: "080-7390-3706",
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