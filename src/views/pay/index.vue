<template>
  <div class="wrapper">
    <Header></Header>
    <div class="order-list">
      <div class="order-item" v-for="(item, index) in orderList" :key="index">
        <div class="oi-left">
          <img src="./信源图片.png" alt="">
        </div>
        <div class="oi-middle">
          <div class="order-name">
            Месячный пакет трафика
          </div>
          <div class="order-number">
            Número de ordem: 123232334343********21324
          </div>
          <div class="order-desc">
            Подробная информация: начало набора начинается с момента окончания выплаты и…
          </div>
        </div>
        <div class="oi-right">
          <div class="order-date">
            Criado em : 2023.04.14--12:30:34
          </div>
          <div class="order-price">
            <span class="price-name">A pagar: </span>
            <span class="price-num">15₽</span>
          </div>
          <div class="order-remark">
            A ser pago
          </div>
        </div>
      </div>
    </div>

    <div class="pay-type-area">
      <div class="pt-header">
        Пожалуйста, выберите способ оплаты
      </div>
      <div class="pt-list">
        <div class="pt-item">
          <div class="pti-icon">
            <img src="./信源图片.png" alt="">
          </div>
          <div class="pti-name">
            Банковская карта плат
          </div>
          <div class="pti-checkbox">
            <div class="checkbox checked-box"
              v-show="false"
            >
              <img src="../../assets/image/checked.png" alt="">
            </div>
            <div class="checkbox unChecked-box"
              v-show="true"
            >
              <img src="../../assets/image/unChecked.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="pt-btn">
          <van-button color="linear-gradient(to right, #FFEADB, #CCBFB6, #B4A49A)" :style="{
            width: '216px',
            height: '55px',
            color: 'rgba(0,0,0,0.86)',
            fontSize: '22px'
          }">
            去支付
          </van-button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Header from '@/components/Header/index.vue'

const orderList = reactive([1, 2])

</script>

<style lang="less" scoped>
.wrapper {
  padding-top: 120px;

  .pay-header {
    position: fixed;
    z-index: 99;
    top: 40px;
    width: 100%;
    height: 39px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .header-left {
      width: 39px;
      height: 39px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .header-middle {
      padding-left: 20px;
      flex: 1;
      height: 100%;
      line-height: 39px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.86);
    }
  }

  .order-list {
    padding: 0 50px;

    .order-item {
      display: flex;
      align-items: center;
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }

      .oi-left {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .oi-middle {
        margin-left: 20px;
        padding-right: 45px;
        flex: 1;

        .order-name {
          font-size: 24px;
        }

        .order-number {
          margin-top: 8px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.50);
        }

        .order-desc {
          margin-top: 8px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.50);
        }
      }

      .oi-right {
        width: 260px;
        text-align: right;

        .order-date {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.50);
        }

        .order-price {
          margin-top: 8px;

          .price-name {
            font-size: 16px;
            color: rgba(0, 0, 0, 0.50);
          }
          
          .price-num {
            font-size: 24px;
            color: #C59377;
          }
        }

        .order-remark {
          margin-top: 8px;
          font-size: 16px;
          color: #C59377;
        }
      }
    }
  }

  .pay-type-area {
    margin-top: 45px;
    padding: 0 50px;

    .pt-header {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.86);
    }

    .pt-list {
      display: flex;
      flex-wrap: wrap;
      .pt-item {
        margin-top: 20px;
        margin-right: 30px;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        background-color: gray;

        .pti-icon {
          width: 44px;
          height: 44px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            max-width: 100%;
            max-height: 100%;
          }
        }

        .pti-name {
          margin-left: 16px;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.86);
        }

        .pti-checkbox {
          margin-left: 40px;
          .checkbox {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }
    }

    .pt-btn {
      margin-top: 100px;
      text-align: center;
    }
  }
}
</style>
