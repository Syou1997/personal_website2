<script>
import { mapState, mapActions } from 'pinia'
import indexStore from '../store/indexStore'

export default {
  computed: {
    ...mapState(indexStore, ['nowLanguage', 'chinese', 'japanese'])
  },
  data () {
    return {
      scrollProgress: 0,   // 0~100 的進度
      showScrollTop: false // 是否顯示返回頂部按鈕
    }
  },
  methods: {
    ...mapActions(indexStore, ['toChinese', 'toJapanese']),
    handleScroll () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      this.scrollProgress = progress
      // 捲動一點點後才顯示按鈕
      this.showScrollTop = scrollTop > 120
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>
  <div>
    <div class="container">
      <h1>{{ nowLanguage.project }}</h1>

      <div
        v-for="(item, index) in (nowLanguage?.projectList || [])"
        :key="index"
        class="bcg_box"
      >
        <!-- 整個 frame 變成超連結 -->
        <a
          class="frame"
          :href="item.projectLink"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Open project: ${item.projectName}`"
          title="open the page"
        >
          <div class="info">
            <h2 class="project_name">
              {{ item.projectName }}
              <div class="box"></div>
            </h2>
            <p class="project_info">{{ item.projectInfo }}</p>
          </div>

          <div class="img_frame">
            <img :src="item.projectImgLink" alt="project picture" />
          </div>
        </a>
      </div>
    </div>

    <!-- 右下角：返回頂部 + 進度條按鈕（從 container 移到外層） -->
    <button
      v-show="showScrollTop"
      class="scrollTopBtn"
      :style="{ '--progress': scrollProgress + '%' }"
      @click="scrollToTop"
      aria-label="Back to top"
      type="button"
    >
      <span class="scrollTopBtn__inner">
        <span class="scrollTopBtn__icon">▲</span>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;600;700&display=swap");

.container{
  animation: loading .9s ease both;
  background:#E6DACE;
  padding: clamp(48px, 6vw, 80px) 0;
  display:flex; flex-direction:column; align-items:center;
  font-family:"Zen Kaku Gothic New", system-ui, -apple-system, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;

  h1{
    text-align:center;
    font-size:clamp(1.8rem, 3.2vw, 2.5rem);
    font-weight:800;
    letter-spacing:.2px;
    margin: 0 0 1rem;
  }

  .bcg_box{
    width: min(980px, 88vw);
    background:#fff;
    margin: clamp(18px, 2.2vw, 28px) 0;
    padding: clamp(10px, 1.4vw, 16px) clamp(10px, 1.8vw, 20px);
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0,0,0,.08);
  }

  a.frame{
    display:flex; gap: clamp(12px, 2vw, 20px); align-items:stretch;
    padding: clamp(14px, 1.8vw, 18px);
    border-radius: 14px;
    background:#fff;
    border:1px solid rgba(0,0,0,.06);
    box-shadow: 0 6px 18px rgba(0,0,0,.06);
    transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, filter .22s ease;
    position:relative;
    text-decoration:none; color:inherit; cursor:pointer;

    &::before{
      content:"";
      position:absolute; left:0; top:0; bottom:0;
      width:4px; border-radius: 4px 0 0 4px;
      background: linear-gradient(180deg, #0050FF, rgba(0,80,255,0));
      opacity:.9; transition: opacity .22s ease, width .22s ease;
    }

    &:hover, &:focus-visible{
      transform: translateY(-2px);
      box-shadow: 0 14px 34px rgba(0,0,0,.16);
      border-color: rgba(0,80,255,.25);
      filter: drop-shadow(0 6px 16px rgba(0,80,255,.08));

      &::before{ width:6px; opacity:1; }
      .project_name .box{ width:12px; }
      img{ transform: scale(1.02); }
    }

    .info{
      width:40%;
      display:flex; flex-direction:column;

      .project_name{
        text-align:left;
        font-size: clamp(1.2rem, 2.2vw, 1.5rem);
        font-weight:700;
        white-space: pre-wrap;
        padding: 1rem 1.5rem .5rem 1.5rem; /* 讓標題與說明中間只空一行 */
        position:relative;

        .box{
          position:absolute; top:1.05rem; left:0;
          width:10px; height:30px; background:#0050FF;
          border-radius: 2px; transition: width .22s ease;
        }
      }

      .project_info{
        text-align:left;
        font-size: clamp(.98rem, 1.6vw, 1rem);
        margin-top: .75rem; /* 僅空一行 */
        color:#111; font-weight:500;
        padding: 0 1.5rem 1.25rem 1.5rem;
        white-space: pre-wrap;
        line-height: 1.9;
        letter-spacing:.15px;
      }
    }

    .img_frame{
      width:60%;
      margin-left:1rem;
      background:#FBE7D7;
      display:flex; align-items:center; justify-content:center;
      border-radius: 12px;
      overflow:hidden;

      img{
        width:100%; height:100%;
        object-fit:contain;
        transition: transform .25s ease;
      }
    }
  }
}

/* 返回頂部＋進度條按鈕：固定在視窗右下角 */
.scrollTopBtn{
  position: fixed;
  right: clamp(16px, 3vw, 26px);
  bottom: clamp(16px, 3vw, 26px);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background:
    conic-gradient(
      #0050FF var(--progress, 0%),
      rgba(0,0,0,0.08) 0
    );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(0,0,0,.22);
  transition:
    transform .22s ease,
    box-shadow .22s ease,
    background .22s ease,
    opacity .22s ease;
  z-index: 999;
  opacity: 0.96;

  .scrollTopBtn__inner{
    width: 86%;
    height: 86%;
    border-radius: 50%;
    background: #ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .scrollTopBtn__icon{
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #0050FF;
    transform: translateY(-1px); /* 讓箭頭視覺上更置中 */
  }

  &:hover,
  &:focus-visible{
    outline: none;
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 14px 32px rgba(0,0,0,.30);
    opacity: 1;
  }

  &:active{
    transform: translateY(0) scale(.97);
    box-shadow: 0 8px 20px rgba(0,0,0,.22);
  }
}

/* 進場動畫 */
@keyframes loading{ 
  from{opacity:0; transform: translateY(4px);} 
  to{opacity:1; transform:none;} 
}

/* RWD：直排、圖文比例調整與圖片高度保護 */
@media screen and (max-width: 1200px){
  .container{
    .bcg_box{
      a.frame{
        flex-direction: column;

        .info{ width:100%; }
        .img_frame{
          width:100%; margin-left:0; margin-top:.75rem;
          max-height: 58vw; /* 防止圖片在窄裝置異常拉高 */
        }
      }
    }
  }
}

/* 更小裝置的排版與字級微調 & 按鈕縮小 */
@media screen and (max-width: 640px){
  .container{
    padding: 42px 0;

    h1{ font-size: clamp(1.5rem, 6vw, 1.8rem); }

    .bcg_box{
      width: 92vw; padding: 8px 10px;
      a.frame{
        padding: 12px;

        .info{
          .project_name{
            padding: .8rem 1rem .4rem 1rem;
            .box{ top:.9rem; height:26px; }
          }
          .project_info{
            padding: 0 1rem 1rem 1rem;
            line-height: 1.8;
          }
        }

        .img_frame{ max-height: 60vw; }
      }
    }
  }

  .scrollTopBtn{
    width: 52px;
    height: 52px;
    right: 14px;
    bottom: 14px;

    .scrollTopBtn__icon{
      font-size: 1.05rem;
    }
  }
}
</style>
