<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <ul class="show-e" v-show="$store.state.flag">
      <li>全部分类</li>
      <li>全部时间</li>
      <li>推荐排序</li>
      <li>距离最近</li>
    </ul>
    <div class="main" ref="constlist">
      <div>
        <ListBar></ListBar>
        <Music></Music>
        <!-- <Movie></Movie>  -->
        <router-view></router-view>
        <Costume></Costume>
      </div>
    </div>
  </div>
</template>
<script>
// 页面滚动
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
// get传输模式
import { get } from "@/api/http";
// 加载完的数据提示
import { Toast } from "vant";
BScroll.use(Pullup);

import HeaderBar from "../../components/HeaderBar";
import ListBar from "../home/movie/ListBar";
import Music from "../home/movie/Music";
import Movie from "../home/movie/Moive";
import Costume from "../home/movie/Costume";
export default {
  data() {
    return {
      constlist: {
        projectInfo: [],
        limit: 20,
        hasMore: true,
      },
    };
  },
  created() {
    this.CostumeList();
  },
  components: {
    HeaderBar,
    ListBar,
    Music,
    Movie,
    Costume,
  },
  methods: {
    async CostumeList() {
      this.$store.commit('setConstlistNull')
      let rs = await get("/Costume.json");
      console.log(rs);
      console.log(rs.data.data.projectInfo);
      // this.constlist = rs.data.data;
      this.$store.commit("setConstlist", rs.data.data.projectInfo);
      // this.constlist.projectInfo.push(...rs.data.data.projectInfo);
      if (rs.data.data.projectInfo.length < this.$store.state.constlist.limit){
        this.$store.state.constlist.hasMore = false;
      }
      // 确保dom生成完毕
      this.$nextTick(() => {
        this.initMovielistScroll();
      });
    },
    // 实现垂直页面滚动
    initMovielistScroll() {
      // 确保dom生成完毕
      this.bscroll = new BScroll(this.$refs.constlist, {
        pullUpLoad: true,
        click: true,
      });
      this.bscroll.on("pullingUp", () => {
        console.log("up...");
        // 判断一下数据还有没有了
        if (this.$store.state.constlist.hasMore) {
          this.CostumeList();
        } else {
          Toast("没有更多的数据了");
        }
      });

      // 垂直页面滚动到一定距离让消失
      this.bscroll.on("scroll", (position) => {
        // console.log(position.y);
        if (position.y < -600) {
          this.$store.commit("setFlag", true);
        } else {
          this.$store.commit("setFlag", false);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.container {
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  .show-e {
    display: flex;
    padding-left: 20px;
    li {
      flex: 1;
      font-size: 14px;
      color: #9c9ca5;
    }
  }
  .main {
    overflow: hidden;
    // overflow: hidden;
    flex: 1;
  }
  ul {
    display: flex;
  }
}
</style>