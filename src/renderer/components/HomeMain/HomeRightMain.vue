<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="FileHash" label="文件hash" width="240">
            </el-table-column>
            <el-table-column prop="FileName" label="文件名" width="120">
            </el-table-column>
            <el-table-column prop="FileSize" label="文件大小">
            </el-table-column>
            <el-table-column prop="UploadAt" label="上传时间">
            </el-table-column>
            <el-table-column prop="LastUpdated" label="最近更新">
            </el-table-column>
            <el-table-column prop="Cancer" label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    name: "HomeRightMain",
    data(){
      const item = {
        FileHash: 'jdfopwfopwjfwopjeotjowejtowejteotj',
        FileName: 'xxxxx.pdf',
        FileSize: '1546545',
        UploadAt: '2019-03-28',
        LastUpdated: '2019-03-29',
        Cancer: '下载',
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
  }
</script>

<style scoped>

</style>