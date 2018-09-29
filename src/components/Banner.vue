<template>
  <div class="content-middle w1170">
    <div class="banner">
      <div class="banner-title">
        十三亿人都会用的云笔记
      </div>
    </div>
    <div class="former">
        <el-input class="mt30" v-model="formData.email" placeholder="邮箱"></el-input>
        <el-input class="mt30" v-model="formData.password" placeholder="密码"></el-input>
        <el-button class="mt30" type="primary">登录</el-button>
        <el-button class="mt30" >注册</el-button>
    </div>
  </div>

</template>

<script>
    export default {
       data(){
         return{
           formData:{
             email:'',
             password:'',
           }
         }
       }
    }
</script>

<style scoped lang="scss">
.content-middle{
  display: flex;
  justify-content: space-between;
  .banner{
    width: 750px;
    height: 340px;
    background: url("/static/imgs/banner.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    .banner-title{
      position: absolute;
      background: rgba(0,0,0,0.5);
      color: #fff;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 14px 20px;

    }
  }
  .former{
    width: 360px;
    height: 340px;
    background: #fff;
    border-radius: 6px;
    padding: 30px;
    box-sizing: border-box;
    /deep/ .el-button{
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
