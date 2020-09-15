<template>
  <div class="detail">
    <div class="detail-q">
      <img :src="item.verticalPic" alt />
    </div>
    <div class="detail-w">
      <p>
        【太原】
        <span>{{item.name}}</span>
      </p>
      <p>费亲子</p>
      <p>￥{{item.priceStr}}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    item() {
      return this.$route.query;
    },
  },
};
</script>
<style lang="scss" scoped>
.detail {
  display: flex;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 20px;
  .detail-q {
    img {
      width: 96px;
      height: 130px;
      border-radius: 10px;
    }
  }
  .detail-w{
    margin-left: 10px;
    position: relative;
    p:nth-of-type(1){
      font-size: 18px;
      margin-bottom: 8px;
    }
    p:nth-of-type(2){
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff6e00;
      font-size: 10px;
      width: 40px;
      height: 14px;
      border: 1px solid #ff6e00;
    }
    p:nth-of-type(3){
      color:#ff2869;
      position: absolute;
      bottom: 0;
      font-size: 20px;
    }
  }
}
</style>