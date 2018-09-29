<template>
<div class="header">
  <div class="w1170 header-content">
    <div class="header-title">
      <router-link to="/">
        云笔记
      </router-link>

    </div>
    <div class="btn-wrap">
      <el-button type="primary">
        写笔记
      </el-button>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
.header{
  height: 50px;
  background: #409eff;
  .header-content{
    display: flex;
    justify-content: space-between;
    .header-title a{
      text-decoration: none;
      font-size: 30px;
      color: #fff;
      font-weight: 400;
      line-height: 1.5;
    }
    .btn-wrap{
      margin-top: 5px;
      /deep/ .el-button{
        background: #fff;
        color: #333;
      }
    }
  }
}
</style>
