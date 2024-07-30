<template>
  <div class="loading-wrapper" v-show="showFlag">
    <div class="loading-box">
      <img class="loading-img" src="../../assets/image/loading.png" alt="">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showFlag: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="less" scoped>
.loading-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.6);

  .loading-box {
    position: fixed;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 208px;
    height: 208px;
    background-color: #fff;
    border-radius: 15px;

    .loading-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
