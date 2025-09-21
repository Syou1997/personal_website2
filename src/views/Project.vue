<script>
import { mapState, mapActions } from 'pinia'
import indexStore from '../store/indexStore'

export default {
  computed: {
    ...mapState(indexStore, ['nowLanguage', 'chinese', 'japanese'])
  },
  methods: {
    ...mapActions(indexStore, ['toChinese', 'toJapanese'])
  }
}
</script>

<template>
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

/* 進場動畫 */
@keyframes loading{ from{opacity:0; transform: translateY(4px);} to{opacity:1; transform:none;} }

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

/* 更小裝置的排版與字級微調 */
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
}
</style>
