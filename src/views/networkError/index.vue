<template>
  <div class="load-error-wrapper">
    <div class="load-error">
      <div class="load-error-img">
        <img src="../../assets/image/networkError.png" alt="">
      </div>
      <div class="load-error-desc">
        网络异常
      </div>
      <div class="load-error-btn">
        <van-button color="linear-gradient(to right, #FFEADB, #CCBFB6, #B4A49A)" :style="{
          width: '215px',
          height: '55px',
          color: 'rgba(0,0,0,0.86)',
          fontSize: '22px'
        }">
          回到首页
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.load-error-wrapper {
  display: flex;
  justify-content: center;
  .load-error {
    .load-error-img {
      width: 360px;
      height: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 80px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .load-error-desc {
      color: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 21px;
    }

    .load-error-btn {
      margin-top: 14px;
      text-align: center;
    }
  }
}
</style>
