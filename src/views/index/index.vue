<template>
    <div class="index">
      <banner></banner>
      <div class="w1170">
        <router-link to="#" class="content">
          <div class="contentTop">
            <div class="content-left">
              <img src="/static/imgs/banner.jpg" alt="">
            </div>
            <div class="content-right">
              <div class="author-msg">
                <span class="author-name">莫言</span>
                <span class="divide">|</span>
                <span class="author-title">VUE</span>
              </div>
              <div class="row">
              <span class="strong">
                浏览：998
              </span>
                <span class="strong">
                回复：2
              </span>
                <span class="strong">
                  分类 ：2
              </span>
              </div>
            </div>

          </div>
          <div class="contentBottom">
            是电视剧韩剧韩剧啊接啊
          </div>
        </router-link>
      </div>

    </div>
</template>

<script>
  import banner from '@/components/Banner'
    export default {
      components:{
        banner
      }
    }
</script>

<style scoped lang="scss">
.index{
  margin-top: 50px;
}
  .content{
    background: #fff;
    width: 740px;
    border-radius: 6px;
    padding: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    .contentTop{
      display: flex;
      .content-left img{
        width: 70px;
        height: 70px;
      }
      .content-right{
        display: flex;
        flex-direction: column;
      }
  }
  }
.content-right .author-msg{
  margin-left: 15px;
  .author-name{
    color: #409eff;
    font-size: 18px;
    font-weight: 700;
  }
  .author-title{

  }
}
.content-right .row{
  margin-top: 20px;
  margin-left: 15px;
  background: #555;
  width: 650px;
  height: 30px;
  border-radius: 6px;
  span{
    color: #ccc;
    line-height: 30px;
    margin-right: 10px;
  }
}
  .contentBottom{
    margin-top: 10px;
    margin-left: 10px;
  }
</style>
