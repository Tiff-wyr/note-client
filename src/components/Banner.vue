<template>
  <div class="content-middle w1170">
    <div class="banner">
      <div class="banner-title">
        十三亿人都会用的云笔记
      </div>
    </div>
    <div class="former" v-if="Show">
        <el-input class="mt30" v-model="formData.email" placeholder="邮箱"></el-input>
        <el-input class="mt30" v-model="formData.password" placeholder="密码" type="password"></el-input>
        <el-button class="mt30" type="primary" @click="login">登录</el-button>
        <el-button class="mt30" @click="register">注册</el-button>
    </div>
    <!--登录成功后-->
    <div class="former" v-else>
      <div class="avatar">
        <img :src="formData.avatar" alt="" class="mt30">
      </div>

      <div class="name mt30">{{formData.username}}</div>
      <el-button @click="logout" class="mt30" type="primary">退出登录</el-button>
    </div>

  </div>

</template>

<script>
  import router from '../router/index'
    export default {
       data(){
         return{
           Show:true,
           formData:{
             email:'',
             password:'',
             username:'',
             avatar:'',
           }
         }
       },
      methods:{
        register(){
          router.push('/register')
        },
        login(){
          this.$axios.post('/login',this.formData).then(res=>{
            if(res.code ==200){
              this.$message.success(res.msg)
              this.formData.username=res.data.username
              this.formData.avatar=res.data.avatar
              this.Show=false
            }else{
              this.$message.error(res.msg)
            }
          })
        },
        logout(){
          this.$axios.get('/logout').then(res=>{
            console.log(res);
            if(res.code == 200){
              this.$message.success(res.msg)
              setTimeout(()=>{
                this.Show=true
              },1000)

            }else{
              this.$message.error(res.msg)
            }
          })
        },
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
  .name{
    font-size: 32px;
    color: #000;
    text-align: center;
  }
  .avatar{
    text-align: center;
    img{
      width: 70px;
      height: 70px;
    }
  }
</style>
