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
  <footer class="footer" role="contentinfo">
    <!-- 柔光與玻璃擬態層次（不改色相，只提升質感與亮度） -->
    <div class="footer__surface">
      <div class="container">
        <!-- 電話區 -->
        <section class="block phone_area" aria-labelledby="phone-title">
          <h4 id="phone-title" class="title">Phone</h4>
          <p class="text">{{ nowLanguage.phone }}</p>
        </section>

        <!-- 信箱區 -->
        <section class="block email_area" aria-labelledby="email-title">
          <h4 id="email-title" class="title">Email</h4>
          <p class="text">{{ nowLanguage.email }}</p>
        </section>

        <!-- 連結區 -->
        <section class="block follow_area" aria-labelledby="follow-title">
          <h4 id="follow-title" class="title">Follow Me</h4>

          <div class="icon_area" role="group" aria-label="Social Links">
            <!-- facebook -->
            <a
              class="icon_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100004650665762"
              aria-label="Facebook"
              title="Facebook"
            >
              <i class="fa-brands fa-facebook icon"></i>
            </a>

            <!-- AmazingTalker -->
            <a
              class="icon_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://tw.amazingtalker.com/teachers-and-tutors/700c83f9-35ad-425f-83d8-e2f5f7b29466"
              aria-label="AmazingTalker"
              title="AmazingTalker"
            >
              <i class="fa-solid fa-a icon"></i>
            </a>

            <!-- instagram -->
            <a
              class="icon_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/azwsxrfv2396187/"
              aria-label="Instagram"
              title="Instagram"
            >
              <i class="fa-brands fa-instagram icon"></i>
            </a>

            <!-- youtube -->
            <a
              class="icon_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCWs7mmEuhyz9ze2O1QUFpiA"
              aria-label="YouTube"
              title="YouTube"
            >
              <i class="fa-brands fa-youtube icon"></i>
            </a>

            <!-- blog -->
            <a
              class="icon_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://syoulive.com/"
              aria-label="Blog"
              title="Blog"
            >
              <i class="fa-solid fa-user-pen icon"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;600;700&display=swap");

.footer{
  --radius-lg: 16px; --radius-xl:22px;
  --elev-1: 0 6px 20px rgba(0,0,0,.08); --elev-2: 0 12px 34px rgba(0,0,0,.12);
  --blur: 10px; --t-fast: 160ms;

  font-family: "Zen Kaku Gothic New", system-ui, -apple-system, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
  font-size: clamp(16px, 1.1vw, 18px);
  color:black;
}

/* 頂部黑灰模糊陰影，與 Home 分界更明顯 */
.footer__surface{
  position:relative; width:100%;
  background: rgba(255,255,255,.7); backdrop-filter: blur(var(--blur)) saturate(1.02);
  box-shadow: 0 -10px 26px rgba(0,0,0,.18); /* ↑ 上緣陰影分界 */
}

.container{
  max-width:1200px; margin:0 auto; padding: 24px min(4vw, 28px);
  display:grid; grid-template-columns: 1fr 1fr 1fr; gap:24px; align-items:start; min-height: 18vh;
}
.block{
  background: rgba(255,255,255,.7);
  border:1px solid rgba(0,0,0,.06);
  border-radius: var(--radius-lg);
  box-shadow: var(--elev-1);
  padding: 16px 18px;
  transition: box-shadow var(--t-fast) ease, transform var(--t-fast) ease, background var(--t-fast) ease;
}
.block:hover{ box-shadow: var(--elev-2); transform: translateY(-1px); }

.title{ font-size: clamp(1.22rem, 1.9vw, 1.45rem); font-weight:700; margin-bottom:.5rem; letter-spacing:.2px; }
.text{ font-size: clamp(1.04rem, 1.55vw, 1.15rem); line-height:1.9; word-break: break-word; }

/* icon 區 */
.icon_area{
  margin-top:.7rem;
  display:grid; grid-template-columns: repeat(5, minmax(36px, 44px));
  gap:10px; align-items:center; justify-content:start;
}
.icon_link{
  display:inline-grid; place-items:center; width:44px; height:44px; border-radius:12px;
  background: rgba(255,255,255,.85); border:1px solid rgba(0,0,0,.06); box-shadow: var(--elev-1);
  transition: transform var(--t-fast) ease, box-shadow var(--t-fast) ease;
}
.icon_link:hover{ transform: translateY(-2px) scale(1.03); box-shadow: var(--elev-2); }
.icon_link .icon{ font-size:1.25rem; line-height:1; color:black; }

@media (max-width:1024px){
  .container{ grid-template-columns: 1fr 1fr; gap:18px; min-height: unset; }
}
@media (max-width:640px){
  .container{ grid-template-columns: 1fr; gap:14px; padding: 16px 16px 22px; }
  .icon_area{ grid-template-columns: repeat(5, 1fr); gap:8px; }
  .icon_link{ width:42px; height:42px; }
}
</style>

