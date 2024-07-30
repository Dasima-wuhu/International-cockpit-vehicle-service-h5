<template>
  <div class="source-list-wrapper">
    <div class="source-list">
      <div class="source-item">
        <div class="item-size">
          <span class="num">381</span>
          <span class="unit">небо</span>
        </div>
        <div class="item-app">
          <div class="app-icon">
            <img src="./信源图片.png" alt="">
          </div>
          <div class="app-name">Остаток дней</div>
        </div>
        <div class="item-date">
          Срок действия：2023.10.01
        </div>
        <div class="item-btn">
          <van-button color="linear-gradient(to right, #FFEADB, #CCBFB6, #B4A49A)" :style="{
            width: '215px',
            height: '55px',
            color: 'rgba(0,0,0,0.86)'
          }">
            去续费
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.source-list-wrapper {
  height: 100%;
  display: flex;
  align-items: center;

  .source-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .source-item {
      overflow: hidden;
      width: 250px;
      height: 375px;
      background: #DEE3E8;
      background-size: cover;
      border-radius: 8px;
      margin-right: 15px;
      text-align: center;

      &:last-child {
        margin-right: 0;
      }

      .item-size {
        margin-top: 90px;
        .num {
          font-size: 44px;
        }
        .unit {
          font-size: 22px;
        }
      }

      .item-app {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        .app-icon {
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .app-name {
          margin-left: 10px;
          font-size: 18px;
        }
      }

      .item-date {
        margin-top: 8.5px;
        font-size: 15px;
      }

      .item-btn {
        margin-top: 68px;
      }

    }
  }
}
</style>
