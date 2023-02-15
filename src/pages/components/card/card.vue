<template>
  <div class="card my-2 card-width">
    <div class="card-body d-flex">
      <img src="../../../assets/images/yellow-circle.svg" class="card-img" />
      <p class="card-text fw-normal">{{ props.body }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["body"]);
</script>

<style scoped>
.card-width {
  width: 90%;
  cursor: pointer;
}
.card-img {
  width: 16px;
  height: 16px;
  margin: 4px;
}
.card-text {
  width: 90%;
}
</style>
