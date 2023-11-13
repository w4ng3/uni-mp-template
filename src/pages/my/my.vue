<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 订单选项
const orderTypes = [
  { type: 1, text: '待付款', icon: 'icon-currency' },
  { type: 2, text: '待发货', icon: 'icon-gift' },
  { type: 3, text: '待收货', icon: 'icon-check' },
  { type: 4, text: '待评价', icon: 'icon-comment' }
]
// 获取会员信息
const memberStore = useMemberStore()
</script>

<template>
  <scroll-view class="viewport" scroll-y enable-back-to-top>
    <!-- 个人资料 -->
    <view class="mt-20 relative" :style="{ paddingTop: safeAreaInsets!.top + 'px' }">
      <!-- 情况1：已登录 -->
      <view class="flex h-120 px-36 text-white" v-if="memberStore.profile">
        <navigator url="/pagesMember/profile/profile" hover-class="none">
          <image class="w-120 h-120 rounded-1" mode="aspectFill" :src="memberStore.profile?.avatar"></image>
        </navigator>
        <view class="flex flex-col justify-center leading-30 py-16 ml-20">
          <view class="max-w-350 mb-16 text-30rpx truncate">
            {{ memberStore.profile.nickname || memberStore.profile.account }}
          </view>
          <navigator class="flex text-20rpx" url="/pagesMember/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
      </view>
      <!-- 情况2：未登录 -->
      <view class="flex h-120 px-36 text-white" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image
            class="w-120 h-120 rounded-1"
            style="filter: grayscale(100%)"
            mode="aspectFill"
            src="../../static/images/default-a.png"
          ></image>
        </navigator>
        <view class="flex flex-col justify-center leading-30 py-16 ml-20">
          <navigator url="/pages/login/login" hover-class="none" class="max-w-350 mb-16 text-30rpx truncate">
            未登录
          </navigator>
          <view class="flex text-20rpx">
            <text class="text-22rpx">点击登录账号</text>
          </view>
        </view>
      </view>
      <navigator
        class="absolute bottom-0 right-40 text-white text-md"
        url="/pagesMember/settings/settings"
        hover-class="none"
      >
        设置
      </navigator>
    </view>
    <!-- 我的订单 -->
    <view
      class="relative z-50 p-30 mt-50 mx-20 bg-white rounded-md"
      style="box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6)"
    >
      <view class="h-40 text-[#1e1e1e] text-base">
        我的订单
        <navigator
          class="float-right text-sm text-[#939393]"
          url="/pagesOrder/list/list?type=0"
          hover-class="none"
        >
          查看全部订单<text class="icon-right"></text>
        </navigator>
      </view>
      <view class="w-full flex justify-between pt-40 px-20 pb-10">
        <!-- 订单 -->
        <navigator
          v-for="item in orderTypes"
          :key="item.type"
          :class="item.icon"
          :url="`/pagesOrder/list/list?type=${item.type}`"
          class="navigator"
          hover-class="none"
        >
          {{ item.text }}
        </navigator>
        <!-- 客服 -->
        <button class="icon-handset navigator p-0 m-0 bg-transparent leading-[inherit]" open-type="contact"
          >售后</button
        >
      </view>
    </view>
    <!-- 猜你喜欢 -->
    <view class="mt-20 bg-light-100"> </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
page {
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f8;
}

.viewport {
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/center_bg.png);
  background-size: 100% auto;
}

/* 用户信息 */

.update {
  padding: 3rpx 10rpx 1rpx;
  color: rgba(255, 255, 255, 0.8);
  border: 1rpx solid rgba(255, 255, 255, 0.8);
  margin-right: 10rpx;
  border-radius: 30rpx;
}
.navigator {
  text-align: center;
  font-size: 24rpx;
  color: #333;
  &::before {
    display: block;
    font-size: 60rpx;
    color: #ff9545;
  }
}
</style>
