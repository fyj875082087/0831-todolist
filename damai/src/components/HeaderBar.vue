<template>
  <div class="headerBar">
    <div class="header-q">
      <router-link to="/city" tag="span">{{$store.state.city.name}}</router-link>
      <i></i>
    </div>
    <div class="header-w">
      <i><van-icon name="search" /></i>
      <span>搜索明星,演出比赛,场馆</span>
    </div>
    <div class="header-e">
      <span><van-icon name="contact" /></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.headerBar{
  position: relative;
  display: flex;
  height: 50px;
  // background: greenyellow;
  justify-content: space-around;
  align-items: center;
  .header-q{
    position: relative;
    margin-left: 10px;
    span{
      font-size: 16px;
    }
    i{
      position: absolute;
      top: 9px;
      left: 36px;
      border-width: 4px;
      border-color: black transparent transparent transparent;
      border-style: solid;
    }
  }
  .header-w{
    width: 240px;
    height: 27px;
    background-image: linear-gradient(90deg,#fff3e7,#ffe9f7 51%,#f0f1fe);
    border-radius: 20px;
    display: flex;
    align-items: center;
    i{
      margin-left: 8px;
      margin-top: 2px;
    }
    span{
      font-size: 12px;
      color: #9c9ca5;
      margin-left: 6px;
    }
  }
  .header-e{
    display: flex;
    span{
      font-size: 24px;
      color: black;
      margin-top: 6px;
      margin-left: -20px;
      display: block;
    }
  }
}
</style>
