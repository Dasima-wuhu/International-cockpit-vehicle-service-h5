<template>
  <div class="header-wrapper">
    <div class="header-box">
      <div class="header-left" @click="backFunc">
        <van-icon name="arrow-left" size="39" />
      </div>
      <div class="header-middle">
        {{ title }}
      </div>
      <div class="header-right">

      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['backFunc'])

const props = defineProps({
  title: {
    type: [String, Number],
    default: '标题'
  }
})

const backFunc = () => {
  emit('backFunc', 'some data')
}

</script>

<style lang="less" scoped>
.header-wrapper {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;

  .header-box {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .header-left {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header-middle {
      padding-left: 20px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.86);
    }
  }
}
</style>