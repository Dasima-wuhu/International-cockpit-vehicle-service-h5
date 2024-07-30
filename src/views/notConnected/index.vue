<template>
  <div class="wrapper">
    <div class="not-connected">
      <div class="nc-img">
        <img src="../../assets/image/notConnected.png" alt="">
      </div>
      <div class="nc-desc">
        未接入支付
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.not-connected {
  .nc-img {
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

  .nc-desc {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: 21px;
  }
}
</style>
