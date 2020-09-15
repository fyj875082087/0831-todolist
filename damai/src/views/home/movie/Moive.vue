<template>
    <div class="move">
        <div class="move-q">
            <h3>近期演出</h3>
            <p>日历</p>
        </div>
        <ul>
            <router-link tag="li" to="/home/movie/dayone" active-class="active">今天</router-link>
            <router-link tag="li" to="/home/movie/daytwo" active-class="active">明天</router-link>
            <router-link tag="li" to="/home/movie/daythree" active-class="active">周五</router-link>
            <router-link tag="li" to="/home/movie/dayfour" active-class="active">周六</router-link>
            <router-link tag="li" to="/home/movie/dayfive" active-class="active">周日</router-link>
            <router-link tag="li" to="/home/movie/daysix" active-class="active">周一</router-link>
            <router-link tag="li" to="/home/movie/dayseven" active-class="active">周二</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
.move{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    .move-q{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 324px;
        // background: gold;
        height: 50px;
        margin: 0 auto;
        h3{
            font-weight: 500;
        }
        p{
            width: 55px;
            height: 25px;
            border: 1px solid gray;
            border-radius: 20px;
            text-align: center;
            line-height: 25px;
            font-size: 14px;
        }
    }
    ul{
        display: flex;
        margin: 0 15px 20px;
        // background: chartreuse;
        li{
            flex: 1;
            text-align: center;
            color: #9c9ca5;
            font-size: 14px;
        }
        .active{
            color:#ff2869;
        }
    }
}
</style>