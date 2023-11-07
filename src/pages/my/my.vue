<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
</script>

<template>
  <view class="my">
    <view>用户信息：{{ memberStore.profile }}</view>
    <button @tap="memberStore.setProfile({ nickname: '王東' })" size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>

    <uni-section title="设置" type="line">
      <uni-list>
        <uni-list-item showArrow title="去登录" :to="`/pages/login/login`" />
      </uni-list>
    </uni-section>
  </view>
</template>

<style lang="scss">
//
</style>
