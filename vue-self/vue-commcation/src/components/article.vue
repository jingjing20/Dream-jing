<template>
  <div>
    <span v-for="(item, index) in articles" :key="index" @click="jing(index)">{{item}}</span>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  },
  methods: {
    jing(index) {
      this.$emit("onEmit", index);
    }
  }
};
</script>

<style>
</style>