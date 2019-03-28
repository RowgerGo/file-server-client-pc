<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
              <HomeLeft />
            </el-aside>

            <el-container>
                <el-header style="text-align: left; font-size: 12px">
                    <HomeRightTop />
                </el-header>

                <el-main>
                <HomeRightMain />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
  import HomeLeft from './HomeMain/HomeLeft'
  import HomeRightTop from './HomeMain/HomeRightTop'
  import HomeRightMain from './HomeMain/HomeRightMain'
  export default {
    name: "HomeMainPage",
    components: { HomeLeft,HomeRightTop,HomeRightMain },
    created() {
      //this.$router.push({ path: '/home/login' });
    }
  }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>