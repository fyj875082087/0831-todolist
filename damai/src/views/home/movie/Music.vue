<template>
  <div class="music">
    <div class="music-q">
      <img src="../../../assets/images/qiaopiao.png" alt />
      <transition-group name="act">
        <router-link v-if="1 === l" key="1" tag="p" to="/music">
          后天11.18
          <span>2020青岛凤凰音乐节开始抢票</span>
        </router-link>
        <router-link v-if="0 === l" key="2" tag="p" to="/music">
          今天20.30
          <span>2020长沙草莓音乐节开始抢票</span>
        </router-link>
      </transition-group>
      <!-- <router-view></router-view> -->
      <i>
        <van-icon name="arrow" />
      </i>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style lang="scss" scoped>
.music {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  div {
    overflow: hidden;
    width: 324px;
    height: 40px;
    box-shadow: 0 2px 4px 0 gray;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 10px;
    img {
      width: 92px;
      height: 14px;
      margin-left: 8px;
    }
    p {
      color: #ff195c;
      font-size: 14px;
      margin-left: 6px;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        font-size: 13px;
        color: black;
        margin-left: 4px;
        font-weight: bold;
        width: 120px;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      i {
        font-size: 14px;
        margin-left: 4px;
      }
    }
  }

  .act-enter {
    transform: translateY(200%);
  }
  .act-enter-active {
    transition: all 0.2s linear;
  }
  .act-enter-to {
    transform: translateY(0);
  }
  .act-leave {
    transform: translateY(0);
  }
  .act-leave-active {
    transition: all 0.2s linear;
  }
  .act-leave-to {
    transform: translateY(-200%);
  }
}
</style>
<script>
import { get } from "@/api/http";
export default {
  data() {
    return {
      i: 1,
      l: 0,
      timer: null,
    };
  },
  created() {
    clearInterval(this.timer);
    this.timer = null;
    this.isShoow();
    // this.tommrow();
  },
  methods: {
    isShoow() {
      this.timer = setInterval(() => {
        this.l++;
        if (this.l === 2) {
          this.l = 0;
        }
      }, 2000);
    },
    // async tommrow() {
    //   let rs = await get("/h5/mtop.damai.wireless.search.project.classify/1.0");
    //   console.log(rs);
    // },
    
  },
};
</script>