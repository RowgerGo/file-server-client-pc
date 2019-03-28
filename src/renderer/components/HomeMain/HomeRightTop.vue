<template>
    <div>

        <el-upload
                class="upload-demo"
                action=""
                :before-upload="beforeUpload"
                multiple
                :show-file-list="false"
                :limit="3"
                :on-exceed="handleExceed"
        >
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-upload>
    </div>
</template>

<script>
  import {singleUpload} from "../../utils/fileFunc"
  export default {
    name: "HomeRightTop",
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      handleExceed(files, fileList) {
         //文件超出限制的时候的钩子
      },
      beforeUpload(file) {
        singleUpload(file)
        return false
      }
    }
  }
</script>

<style scoped>

</style>