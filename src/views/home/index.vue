<template>
  <div class="home-wrapper">
    <div class="home-list">
      <div class="home-item">
        <div class="item-title">
          服务标题
        </div>
        <div class="item-desc">
          <span>服务描述</span>
          <img :class="['refresh-icon', isRotating1 ? 'active' : '']" src="../../assets/image/fresh.png" alt=""
            @click="refreshFunc(1)">
        </div>
        <div class="item-data">
          500M
        </div>
        <div class="item-date">
          Годен до：2022.12.30
        </div>
        <div class="item-btn">
          <van-button color="linear-gradient(to right, #FFEADB, #CCBFB6, #B4A49A)" :style="{
            width: '250px',
            height: '55px',
            color: 'rgba(0,0,0,0.86)'
          }" @click="renewFunc(1)">
            去续费
          </van-button>
        </div>
      </div>
      <div class="home-item">
        <div class="item-title" @click="routerToXfServiceList">
          <span>流量购买</span>
          <van-icon class="right-icon" name="arrow" size="30" />
        </div>
        <div class="item-desc">
          <span>服务描述</span>
          <img :class="['refresh-icon', isRotating2 ? 'active' : '']" src="../../assets/image/fresh.png" alt=""
            @click="refreshFunc(2)">
        </div>
        <div class="item-data pink">
          500M
        </div>
        <div class="item-date">
          Годен до：2022.12.30
        </div>
        <div class="item-btn">
          <van-button color="linear-gradient(to right, #FFEADB, #CCBFB6, #B4A49A)" :style="{
            width: '250px',
            height: '55px',
            color: 'rgba(0,0,0,0.86)'
          }" @click="renewFunc(2)">
            去续费
          </van-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isRotating1 = ref(false)
const isRotating2 = ref(false)

const routerToXfServiceList = () => {
  router.push('/xfServiceList')
}

const refreshFunc = (value) => {
  if (value === 1) {
    isRotating1.value = true
    setTimeout(() => {
      isRotating1.value = false
    }, 300);
  } else {
    isRotating2.value = true
    setTimeout(() => {
      isRotating2.value = false
    }, 300);
  }
}

const renewFunc = (value) => {
  alert(value)
}

</script>

<style scoped lang="less">
.home-wrapper {
  height: 100%;

  .home-list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .home-item {
      background-color: #DEE3E8;
      width: 440px;
      height: 375px;
      border-radius: 8px;
      text-align: center;

      &:first-child {
        margin-right: 35px;
      }

      .item-title {
        margin-top: 27px;
        font-size: 27px;
        display: flex;
        justify-content: center;
        align-items: center;

        .right-icon {
          margin-left: 16px;
        }
      }

      .item-desc {
        margin-top: 50px;
        color: rgba(0, 0, 0, 0.5);
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;

        .refresh-icon {
          width: 32px;
          height: 32px;
          margin-left: 10px;

          &.active {
            transform: rotate(360deg);
            transition: all .3s ease;
          }
        }
      }

      .item-data {
        margin-top: 20px;
        font-size: 60px;

        &.pink {
          color: rgba(228, 82, 83, 0.86);
        }
      }

      .item-date {
        font-size: 19px;
      }

      .item-btn {
        margin-top: 30px;
      }
    }
  }
}
</style>
