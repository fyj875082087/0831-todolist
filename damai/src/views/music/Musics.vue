<template>
  <div class="time">
    <div v-for="item in datalist.modules" :key="item.type">
      <div class="time-q">
        <h2>{{item.title}}</h2>
        <p>{{item.tip}}</p>
      </div>
      <div class="time-w" v-for="vale in item.items" :key="vale.upTime">
        <div class="time-e">
          <img :src="vale.verticalPic" alt />
        </div>
        <div class="time-r">
          <p>{{vale.name}}</p>
          <p>{{vale.showTime}}</p>
          <p>{{vale.venueName}}</p>
          <p>{{vale.ipvuv}}</p>
          <span>
            ￥{{vale.priceLow}}
            <i>起</i>
          </span>
        </div>
        <div class="time-a">
          <p>后天11.18开始</p>
          <p>
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </p>
          <p>去看看</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// get传输模式
import { get } from "@/api/http";
export default {
  data() {
    return {
      time: 24 * 60 * 60 * 1000,
      datalist: {
        modules: [],
      },
    };
  },
  created() {
    this.Musiclist();
    this.aaaa();
  },
  methods: {
    async Musiclist() {
      let rs = await get("/music.json");
      console.log(rs);
      // console.log(rs.data.data.modules)
      // console.log(rs.data.data.modules[0].items);
      this.datalist = rs.data.data;
    },
    async aaaa() {
      let rs = await get("/details.json");
      console.log(rs);
      // console.log(rs.data.data.modules)
      // console.log(rs.data.data.modules[0].items);
      // this.datalist = rs.data.data;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";

.time {
  height: 100%;
  background: #fafafa;
  .time-q {
    height: 72px;
    display: flex;
    align-items: center;
    h2 {
      text-indent: 18px;
    }
    p {
      margin-left: 16px;
      font-size: 10px;
      margin-top: 10px;
    }
  }
  .time-w {
    margin: 0px auto;
    width: 343px;
    height: 223px;
    box-shadow: 0 2px 4px 0 gray;
    display: flex;
    flex-wrap: wrap;
    .time-e {
      margin: 14px 0;
      margin-left: 14px;
      img {
        width: 111px;
        height: 148px;
      }
    }
    .time-r {
      margin: 14px 0;
      height: 148px;
      margin-left: 14px;
      width: 190px;
      p:nth-of-type(1) {
        font-weight: 700;
        font-size: 16spx;
        margin-bottom: 6px;
      }
      p:nth-of-type(2) {
        font-size: 14px;
        color: #666666;
      }
      p:nth-of-type(3) {
        font-size: 14px;
        color: #666666;
        width: 198px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 4px;
      }
      p:nth-of-type(4) {
        width: 80px;
        height: 16px;
        background: #ffc569;
        font-size: 10px;
        color: white;
        text-align: center;
        line-height: 16px;
        border-radius: 0 10px 10px 0;
        margin-bottom: 22px;
      }
      span {
        font-size: 20px;
        color: #ff2d79;
        i {
          font-size: 12px;
          font-style: normal;
          color: #666666;
        }
      }
    }
    .time-a {
      border-top: 3px dashed #eeeeee;
      width: 320px;
      margin: 0 auto;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:nth-of-type(1) {
        font-size: 14px;
      }
      p:nth-of-type(2) {
        margin-left: -30px;
      }
      p:nth-of-type(3) {
        color: white;
        font-size: 12px;
        border-radius: 10px;
        text-align: center;
        line-height: 26px;
        width: 58px;
        height: 26px;
        background-image: linear-gradient(90deg, #ff7f81, #ff2d79);
      }
      .colon {
        display: inline-block;
        color: black;
      }
      .block {
        display: inline-block;
        width: 22px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: black;
      }
    }
  }
}
</style>