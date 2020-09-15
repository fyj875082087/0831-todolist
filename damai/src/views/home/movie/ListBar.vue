<template>
  <div class="list">
    <div class="list-q">
      <div>
        <img src="../../../assets/images/mian1.jpg" alt />
        <span>演唱会</span>
      </div>
      <div>
        <img src="../../../assets/images/mian2.jpg" alt />
        <span>话剧歌剧</span>
      </div>
      <div>
        <img src="../../../assets/images/mian3.jpg" alt />
        <span>音乐会</span>
      </div>
      <div>
        <img src="../../../assets/images/mian4.jpg" alt />
        <span>体育</span>
      </div>
      <div>
        <img src="../../../assets/images/mian5.jpg" alt />
        <span>曲苑杂坛</span>
      </div>
      <div>
        <img src="../../../assets/images/mian6.jpg" alt />
        <span>亲子</span>
      </div>
      <div>
        <img src="../../../assets/images/mian7.jpg" alt />
        <span>展览悠闲</span>
      </div>
      <div>
        <img src="../../../assets/images/mian8.jpg" alt />
        <span>境外</span>
      </div>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.list {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  .list-q {
    width: 324px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 25%;
      margin-bottom: 25px;
      img {
        margin: 0 auto;
        width: 34px;
        height: 34px;
      }
      span {
        display: block;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>