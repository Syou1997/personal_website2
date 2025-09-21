<script>
import { mapState, mapActions } from 'pinia'
import indexStore from '../store/indexStore'

export default {
  data() {
    return {
      isLink: '',
      isImgLink: ''
    }
  },
  computed: {
    ...mapState(indexStore, ['nowLanguage', 'chinese', 'japanese'])
  },
  methods: {
    ...mapActions(indexStore, ['toChinese', 'toJapanese']),
    inIsLink(index) {
      this.isLink = this.nowLanguage.projectList[index].projectLink
      this.isImgLink = this.nowLanguage.projectList[index].projectImgLink
    },
    getProjectLink(index) {
      this.inIsLink(index)
      return this.isLink
    },
    getProjectImgLink(index) {
      this.inIsLink(index)
      return this.isImgLink
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ nowLanguage.project }}</h1>
    <div v-for="(item, index) in nowLanguage.projectList" :key="index" class="bcg_box">
      <!-- 整個 frame 變成 a -->
      <a class="frame"
         :href="getProjectLink(index)"
         target="_blank"
         rel="noopener noreferrer"
         title="open the page">
        <div class="info">
          <h2 class="project_name">
            {{ item.projectName }}
            <div class="box"></div>
          </h2>
          <p class="project_info">{{ item.projectInfo }}</p>
        </div>
        <div class="img_frame">
          <img :src="getProjectImgLink(index)" alt="project picture" />
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;600;700&display=swap");

.container {
  animation-name: loading;
  animation-duration: 1s;
  background-color: #E6DACE;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Zen Kaku Gothic New", system-ui, -apple-system, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .bcg_box {
    width: min(980px, 88vw);
    background-color: #fff;
    margin: 2.2rem 0;
    padding: clamp(10px, 1.4vw, 16px) clamp(10px, 1.8vw, 20px);
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0,0,0,.08);

    a.frame {
      display: flex;
      gap: clamp(12px, 2vw, 20px);
      align-items: stretch;
      padding: clamp(14px, 1.8vw, 18px);
      border-radius: 14px;
      background: #fff;
      border: 1px solid rgba(0,0,0,.06);
      box-shadow: 0 6px 18px rgba(0,0,0,.06);
      transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, filter .22s ease;
      position: relative;
      text-decoration: none;
      color: inherit;
      cursor: pointer;

      &::before {
        content:"";
        position:absolute;
        left:0; top:0; bottom:0;
        width:4px;
        background: linear-gradient(180deg, #0050FF, rgba(0,80,255,0));
        opacity:.9;
        border-radius: 4px 0 0 4px;
        transition: opacity .22s ease, width .22s ease;
      }

      &:hover, &:focus-visible {
        transform: translateY(-2px);
        box-shadow: 0 14px 34px rgba(0,0,0,.16);
        border-color: rgba(0,80,255,.25);
        filter: drop-shadow(0 6px 16px rgba(0,80,255,.08));
        &::before { width: 6px; opacity: 1; }
        img { transform: scale(1.02); }
      }

      .info {
        width: 40%;
        display: flex;
        flex-direction: column;

        .project_name {
          text-align: left;
          font-size: 1.5rem;
          font-weight: 700;
          white-space: pre-wrap;
          padding: 1rem 1.5rem 0.5rem 1.5rem; /* 上下間距縮小 */
          position: relative;

          .box {
            position: absolute;
            top: 1.2rem;
            left: 0;
            width: 10px;
            height: 30px;
            background-color: #0050FF;
          }
        }

        .project_info {
          text-align: left;
          font-size: 1rem;
          margin-top: 0.75rem; /* project_name 與 project_info 中間空一行 */
          color: black;
          font-weight: 500;
          padding: 0 1.5rem 1.5rem 1.5rem;
          white-space: pre-wrap;
        }
      }

      .img_frame {
        width: 60%;
        height: auto;
        margin-left: 1rem;
        background-color: #FBE7D7;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform .25s ease;
        }
      }
    }
  }
}

@keyframes loading {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media screen and (max-width: 1200px) {
  .container {
    .bcg_box {
      a.frame {
        flex-direction: column;

        .info {
          width: 90%;
        }
        .img_frame {
          width: 80%;
          margin-left: 0;
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
