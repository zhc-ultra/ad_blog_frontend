<template>
  <div id="userLayout">
    <router-view />
  </div>
</template>
<script setup lang="ts"></script>

<style  scoped>
#userLayout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ecf0f3;
}
</style>
