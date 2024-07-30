<template>
  <div class="wrapper">
    <Loading :showFlag="showFlag"></Loading>
    <Header title="流量购买" @backFunc="backFunc"></Header>
    <div class="xf-service-list">
      <div class="xf-service-item" v-for="(item, index) in tpList" :key="index">
        <div class="item-tag">
          <div class="tag-left"></div>
          <div class="tag-right">Базовый пакет услуг</div>
        </div>
        <div class="item-size">
          5GB
        </div>
        <div class="item-desc">
          Используйте этот месяц
        </div>
        <div class="item-price">
          <div class="new-price">
            ₽15
          </div>
          <div class="old-price">
            ₽23
          </div>
        </div>
        <div class="item-btn">
          <van-button color="linear-gradient(to right, #FFEADB, #CCBFB6, #B4A49A)" :style="{
      width: '215px',
      height: '55px',
      color: 'rgba(0,0,0,0.86)'
    }" @click="renewFunc(index)">
            去续费
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header/index.vue'
import Loading from '@/components/Loading/index.vue'

const router = useRouter()

const showFlag = ref(true)

const tpList = reactive([
  {
    size: '5GB',
    oldPrice: '₽23',
    newPrice: '₽15',
  },
  {
    size: '10GB',
    oldPrice: '₽23',
    newPrice: '₽15',
  },
  {
    size: '25GB',
    oldPrice: '₽23',
    newPrice: '₽15',
  },
  {
    size: '50GB',
    oldPrice: '₽23',
    newPrice: '₽15',
  },
])

onMounted(() => {
  setTimeout(() => {
    console.log(`the component is now mounted.`)
    showFlag.value = false
  }, 2000);
})

const renewFunc = (value) => {
  alert(value)
}
// 返回首页
const backFunc = (value) => {
  console.log(123, value);
  router.push('/')
}
</script>

<style scoped lang="less">
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;

  .xf-service-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .xf-service-item {
      overflow: hidden;
      width: 250px;
      height: 375px;
      background: #DEE3E8;
      background-size: cover;
      border-radius: 8px;
      margin-right: 15px;
      text-align: center;
      position: relative;

      &:last-child {
        margin-right: 0;
      }

      .item-tag {
        position: absolute;
        top: 0;
        right: 0;
        height: 27px;
        line-height: 27px;
        padding-left: 27px;
        display: flex;

        .tag-left {
          width: 27px;
          border-radius: 0 0 0 25px;
          background-color: #fff;
        }

        .tag-right {
          padding-right: 10px;
          background-color: #fff;
          color: rgba(0, 0, 0, 0.8);
        }
      }

      .item-size {
        margin-top: 70px;
        font-size: 44px;
        color: rgba(0, 0, 0, 0.86);
      }

      .item-desc {
        margin-top: 15px;
        font-size: 19px;
        color: rgba(0, 0, 0, 0.50);
      }

      .item-price {
        margin-top: 19px;
        display: flex;
        justify-content: center;
        align-items: center;

        .new-price {
          background: rgba(241, 75, 50, 0.15);
          border-radius: 8px;
          width: 70px;
          height: 45px;
          line-height: 45px;
          font-size: 22px;
          color: #DE3117;
          margin-right: 16px;
        }

        .old-price {
          font-size: 19px;
          color: rgba(0, 0, 0, 0.50);
        }
      }

      .item-btn {
        margin-top: 51px;
      }
    }
  }
}
</style>
