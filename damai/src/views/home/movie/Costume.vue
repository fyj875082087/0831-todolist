<template>
  <div class="show">
    <div class="show-q">
      <h3>更多演出</h3>
    </div>
    <ul class="show-e">
      <li>全部分类</li>
      <li>全部时间</li>
      <li>推荐排序</li>
      <li>距离最近</li>
    </ul>
    <div class="shows">
      <div class="show-r" v-for="item in $store.state.constlist.projectInfo" :key="item.id">
        <div class="show-a">
          <img :src="item.verticalPic" alt @click="handleClick(item)" />
        </div>
        <div class="show-s">
          <h4>{{item.name}}</h4>
          <p>{{item.showTime}}</p>
          <p>
            {{item.venueCity}}|
            <span>{{item.venueName}}</span>
          </p>
          <p>可选座</p>
          <span>
            {{item.priceLow}}
            <i>起</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(item) {
      this.$router.push({ path: "/details", query: item });
    },
  },
};
</script>
<style lang="scss" scoped>
.show {
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  .show-q {
    h3 {
      padding-left: 20px;
      margin-bottom: 16px;
      font-weight: 300;
    }
  }
  .show-e {
    display: flex;
    padding-left: 20px;
    li {
      flex: 1;
      font-size: 14px;
      color: #9c9ca5;
    }
  }
  .shows {
    // overflow: hidden;
    // height: 100%;
    .show-r {
      display: flex;
      padding-left: 20px;
      padding-top: 20px;
      .show-a {
        img {
          width: 96px;
          height: 130px;
          border-radius: 10px;
        }
      }
      .show-s {
        margin-left: 10px;
        margin-right: 10px;
        h4 {
          font-weight: 300;
          line-height: 20px;
        }
        p:nth-of-type(1) {
          font-size: 12px;
          color: #aaa;
        }
        p:nth-of-type(2) {
          font-size: 12px;
          color: #aaa;
          margin-bottom: 6px;
        }
        p:nth-of-type(3) {
          width: 48px;
          height: 17px;
          border: 1px solid #aaa;
          border-radius: 10px;
          text-align: center;
          font-size: 10px;
          color: #6a7a99;
          margin-bottom: 28px;
        }
        span {
          color: #ff195c;
          i {
            font-size: 12px;
            font-style: normal;
            color: #aaa;
          }
        }
      }
    }
  }
}
</style>