<template>
    <div class="register">
      <div class="title">新用户注册</div>
        <el-input class="mt30" v-model="formData.username" placeholder="用户名"></el-input>
        <el-input class="mt30" v-model="formData.email" placeholder="邮箱"></el-input>
        <el-input class="mt30" v-model="formData.password" placeholder="密码" type="password"></el-input>
      <el-button class="but mt30" type="primary" @click="register">注册</el-button>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
      name: "register",
      data(){
          return {
            formData:{
              username:'',
              email:'',
              password:''
            }
          }
      },
      methods:{
        register(){
          this.$axios.post('/register',this.formData).then(res=>{
            if(res.code == 200){
              this.$message.success(res.msg)
              setTimeout(()=>{
                router.push('/index')
              },1000)
            }else{
              this.$message.error(res.msg)
            }

          })
        }
      }
    }
</script>

<style scoped lang="scss">
.register{
  width: 500px;
  height: 380px;
  background: #fff;
  border-radius: 6px;
  margin: 50px auto 0;
  padding: 20px 30px;
  box-sizing: border-box;
}
  .title{
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
  .but{
    width: 100%;
  }
</style>
