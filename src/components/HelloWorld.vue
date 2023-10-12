<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";

defineProps<{ msg: string, path: string }>()

const router = useRouter();
const route = useRoute();

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button type="primary" @click="router.push(path)">页面转跳</el-button>
    <p>
      当前路由：
      <code>{{ route.fullPath }}</code>
      当前组件：
      <code>{{ route.name }}</code>
    </p>
  </div>
</template>

<style scoped>

</style>
