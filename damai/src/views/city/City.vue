<template>
  <div style="height:100%">
    <div class="cityContainer" ref="scrollWrapper">
      <section class="city-list-container" style="display: block;" id="city-list">
        <section>
          <div id="locate" class="city-title">定位城市</div>
          <div class="city-list city-list-inline clearfix">
            <div class="location-city">定位失败，请点击重试</div>
          </div>
        </section>

        <section class="history-city-list">
          <div id="history" class="city-title">最近访问城市</div>
          <div class="city-list city-list-inline clearfix">
            <div class="city-item" data-nm="晋中" data-id="134">晋中</div>
          </div>
        </section>

        <section>
          <div id="hot" class="city-title">热门城市</div>
          <div class="city-list city-list-inline clearfix">
            <div
              class="city-item"
              v-for="city in datalist.hotCities"
              :key="city.id"
              @click="selectCity(city)"
            >{{city.name}}</div>
          </div>
        </section>

        <section>
          <div v-for="(items,key) in datalist.cities" :key="key">
            <div :id="key" class="city-title city-title-letter">{{key}}</div>
            <div class="city-list city-list-block clearfix">
              <div
                class="city-item"
                v-for="(city,index) in items"
                :key="index"
                @click="selectCity(city)"
              >{{city.name}}</div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <section class="nav">
      <div class="nav-item" @click="go('locate')">定位</div>

      <div class="nav-item" @click="go('history')">最近</div>

      <div class="nav-item" @click="go('hot')">热门</div>

      <div
        class="nav-letter nav-item"
        v-for="l in getLetters"
        :key="l"
        :ref="l"
        @touchmove="move"
      >{{l}}</div>
    </section>
  </div>
</template>

<script>
import { get } from "@/api/http";
import BScroll from "@better-scroll/core";


export default {
  data() {
    return {
      datalist: {
        cities: [],
        hotCities: [],
      },
    };
  },
  async created() {
    let rs = await get("/cities.json");
    this.datalist = rs.data;
    console.log(rs);
    // 去报dom生成完毕
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  computed: {
    // 让右边的abcd显示出来
    getLetters() {
      return Object.keys(this.datalist.cities);
    },
  },
  methods: {
    selectCity(city) {
      this.$store.commit("setCity", city);
      this.$router.go(-1);
    },
    move(event) {
      // console.log(event);
      // 当前触摸点的坐标值
      let currentY = event.touches[0].pageY;
      // console.log(currentY);
      //字母A距离页面顶部的高度
      let aTop = this.$refs.A[0].getBoundingClientRect().top;
      // console.log(aTop);
      // 每个字母的高度
      let letterHeight = this.$refs.A[0].getBoundingClientRect().height;
      // console.log(letterHeight);
      //A字母到当前触摸点的高度
      let span = currentY - aTop;
      // console.log(span)
      // 计算下标
      let index = Math.floor(span / letterHeight);
      // 获取当前接触的字母
      let letter = this.getLetters[index];
      console.log("letter:", letter);
      if (letter) {
        this.bscroll.scrollToElement(document.querySelector(`#` + letter), 500);
      }
    },
    // 右边滚动的方法
    initScroll() {
      this.bscroll = new BScroll(this.$refs.scrollWrapper, {
        scrollY: true,
        click: true,
      });
    },
    // 最近 定位 热门
    go(position) {
      this.bscroll.scrollToElement(document.querySelector(`#` + position), 500);
    },
  }
};
</script>
<style lang="scss" scoped>
.cityContainer {
  height: 100%;
  overflow: hidden;
}
.city-list-container {
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  width: 100%;
}

.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-title-letter {
  padding-left: 25px;
}

.city-list {
  padding-right: 30px;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}

.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-list-inline .location-city {
  width: auto;
  min-width: 30%;
  padding: 0 20px;
}

.city-list-block {
  background-color: #f5f5f5;
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
}

.city-list-block .city-item:last-child {
  border-bottom: none;
}

.nav {
  position: fixed;
  top: 75px;
  top: 11vh;
  right: 0;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
}

.nav .nav-item {
  height: 16px;
  height: 2.8vh;
}

.nav .nav-letter {
  width: 15px;
  margin-left: 15px;
}
</style>
