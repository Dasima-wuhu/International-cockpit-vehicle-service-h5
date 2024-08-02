<template>
  <div class="wrapper">
    <Header></Header>
    <div class="order-list">
      <div class="order-item">
        <div class="oi-title">
          <span class="title-date">
            2021-07-23 15:35:10
          </span>
          <span class="title-close">
            Transaction Closing
          </span>
        </div>
        <div class="oi-content">
          <div class="content-left">
            <img src="./信源图片.png" alt="">
          </div>
          <div class="content-middle">
            <div class="order-name">
              <span class="name-left">
                Заполнение потока
              </span>
              <span class="name-right">
                2G/ в течение месяца2G/ в течение месяца2G
              </span>
            </div>
            <div class="order-desc">
              <span class="desc-left">
                Способ обмена：
              </span>
              <span class="desc-right">
                Банковская карта
              </span>
            </div>
            <div class="order-number">
              <span class="number-left">
                Номер заказа：
              </span>
              <span class="number-right">
                123456789123456789123456789123456789
              </span>
            </div>
            <div class="order-status">
              Возврат денег не удался
            </div>
          </div>
          <div class="content-right">
            <div class="price">
              <div class="price-left">
                сто:
              </div>
              <div class="price-right">
                ₽15.00
              </div>
            </div>
            <div class="phone-btn">
              <div class="btn-left">
                <img src="../../assets/image/phone.png" alt="">
              </div>
              <div class="btn-right">
                торговц
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Header from '@/components/Header/index.vue'

</script>

<style lang="less" scoped>
.wrapper {
  .order-list {
    .order-item {
      padding: 28px 40px;

      .oi-title {
        display: flex;

        .title-date {
          font-size: 40px;
          color: rgba(0, 0, 0, 0.70);
        }

        .title-date {
          font-size: 40px;
          color: #C59377;
        }
      }

      .oi-content {
        display: flex;

        .content-left {
          width: 112px;
          height: 112px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            max-width: 100%;
            max-height: 100%;
          }
        }

        .content-middle {
          margin-left: 30px;
          flex: 1;

          .order-name {
            .name-left {
              font-size: 24px;
              color: rgba(0, 0, 0, 0.86);
            }

            .name-right {
              font-size: 17px;
              color: rgba(0, 0, 0, 0.50);
            }
          }

          .order-desc {
            .desc-left {
              font-size: 17px;
              color: rgba(0, 0, 0, 0.80);
            }

            .desc-right {
              font-size: 17px;
              color: rgba(0, 0, 0, 0.50);
            }
          }

          .order-number {
            .number-left {
              font-size: 17px;
              color: rgba(0, 0, 0, 0.80);
            }

            .number-right {
              font-size: 17px;
              color: rgba(0, 0, 0, 0.50);
            }
          }

          .order-status {
            font-size: 20px;
            color: #5CB38A;
          }
        }

        .content-right {
          width: 128px;

          .price {
            display: flex;

            .price-left {
              font-size: 24px;
              color: rgba(0, 0, 0, 0.50);
            }

            .price-right {
              font-size: 24px;
              color: #C59377;
            }
          }

          .phone-btn {
            display: flex;

            .btn-left {
              width: 22px;
              height: 22px;
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                max-width: 100%;
                max-height: 100%;
              }
            }

            .btn-right {
              font-size: 20px;
              color: rgba(0, 0, 0, 0.86);
            }
          }
        }
      }
    }
  }
}
</style>
