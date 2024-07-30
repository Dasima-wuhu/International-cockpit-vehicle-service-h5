<template>
  <div class="wrapper">
    <div class="zz-service-list">
      <div class="zz-service-item">
        <div class="item-icon">
          <div class="icon-img">
            <img src="./小马游戏.png" alt="">
          </div>
        </div>
        <div class="item-name">
          Участник игры "пони"
        </div>
        <div class="item-desc">
          90-Day Card
        </div>
        <div class="item-price">
          <div class="new-price">
            ₽15
          </div>
          <div class="old-price">
            ₽24
          </div>
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
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  .zz-service-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .zz-service-item {
      overflow: hidden;
      width: 257px;
      height: 375px;
      background: #DEE3E8;
      background-size: cover;
      border-radius: 8px;
      margin-right: 15px;
      text-align: center;

      &:last-child {
        margin-right: 0;
      }

      .item-icon {
        margin-top: 47px;
        display: flex;
        justify-content: center;
        .icon-img {
          width: 74px;
          height: 74px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }

      .item-name {
        margin-top: 20px;
        font-size: 18px;
      }

      .item-desc {
        margin-top: 6px;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
      }

      .item-price {
        margin-top: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        .new-price {
          padding: 7.5px 16.5px;
          font-size: 22px;
          color: #DE3117;
          background: rgba(241, 75, 50, 0.15);
          border-radius: 8px;
        }

        .old-price {
          margin-left: 16px;
          font-size: 19px;
          color: rgba(0, 0, 0, 0.5);
        }
      }

      .item-btn {
        margin-top: 36px;
      }
    }
  }
}
</style>
