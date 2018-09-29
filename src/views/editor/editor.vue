<template>

    <div class="quill-wrap w1170">
      <div class="title mb10">标题</div>
      <el-input placeholder="测试标题" class="mb10"  v-model="formData.title"></el-input>
      <div class="title mb10">内容</div>
      <quill-editor
        v-model="formData.content"
        ref="myQuillEditor"
        :options="editorOption"
      >
      </quill-editor>
      <div class="sign mb10">
        <span>标签:</span>
      </div>
      <el-button type="primary">发布笔记</el-button>
    </div>


</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
    export default {
      components: {quillEditor},
      name: "editor",
      data() {
        return {
          formData:{
            content: '',
            title:'',
          },

          // 富文本框参数设置
          editorOption: {
            modules: {
              ImageExtend: {
                loading: true,
                name: 'img',
                action: '',
                response: (res) => {
                  return res.info
                }
              },
              toolbar: {
                container: container,
                handlers: {
                  'image': function () {
                    QuillWatch.emit(this.quill.id)
                  }
                }
              }
            }
          }
        }
      }
    }
</script>

<style scoped lang="scss">
.quill-wrap{
  background: #fff;
  padding: 25px;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 30px;

}
  .title{
    font-weight: bold;
    font-size: 22px;
  }
  .mb10{
    margin-bottom: 10px;
  }
  /deep/ .quill-editor{
    min-height:200px;

  }
  .sign span{
    color: #409eff;
    font-weight: 300;
  }
</style>
