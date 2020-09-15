<template>
  <div class="container" ref="daylist">
    <ul>
      <li v-for="item in daylist.nearByCity" :key="item.currentTime">
        <img :src="item.verticalPic" alt @click="handleClick(item)" />
        <span>{{item.name}}</span>
        <p>
          ￥{{item.priceLow}}
          <i>起</i>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import { get } from "@/api/http";
// 加载完的数据提示
import { Toast } from "vant";
export default {
  data() {
    return {
      daylist: {
        nearByCity: [],
        limit: 12,
        // 是否有更多的数据
        hasMore: true,
      },
    };
  },
  // computed: {
  //    getWidth() {
  //     // console.log(this.expect.expectlist);
  //     // 1vw = 3.75px   375px = 100vw
  //     // 100px / 3.75 = 26.667vw
  //     return 26.667 * this.daylist.nearByCity.length + "vw";
  //   },
  // },
  created() {
    this.getExpectList();
  },
  methods: {
    async getExpectList() {
      let rs = await get("/day7.json");
      console.log(rs);
      this.daylist = rs.data.data;
      // console.log(rs.data.data.nearByCity.length);
      // 判断数据是否全部完毕
      if (rs.data.data.nearByCity.length < this.daylist.limit) {
        this.daylist.hasMore = false;
      }
      // 确保dom生成完毕
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    // 实现水平滚动
    initScroll() {
      // 确保dom生成完毕
      this.bs = new BScroll(this.$refs.daylist, {
        scrollX: true,
        probeType: 3, //listening scroll hook
      });
      // 拖到最右侧
      this.bs.on("scrollEnd", () => {
        if (this.daylist.hasMore) {
          this.getExpectList();
        } else {
          Toast("没有更多的数据了");
        }
      });
    },
    handleClick(item) {
      this.$router.push({ path: "/detail", query: item });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  overflow: hidden;
  display: flex;
  ul {
    padding-left: 15px;
    display: flex;
    li {
      margin: 0 5px;
      img {
        width: 96px;
        height: 130px;
      }
      span {
        font-size: 14px;
        display: block;
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        // margin-bottom: 4px;
      }
      p {
        color: #ff195c;
        i {
          color: gray;
          font-style: normal;
          font-size: 12px;
        }
      }
    }
  }
}
</style>