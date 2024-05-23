<template>
  <div class="home">
    <!-- 引入MD编辑器 -->
    <!--    <MDEditor :value="value" :handle-change="onChange" />-->
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import MDEditor from "@/components/MDEditor.vue";

const value = ref();
const onChange = (v: string) => {
  value.value = v;
};
</script>
