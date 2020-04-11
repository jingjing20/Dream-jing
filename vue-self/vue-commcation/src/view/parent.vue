// 父组件中
<template>
  <div class="hello_world">
    <div>{{msg}}</div>
    <com-a></com-a>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import ComA from "../components/chird";
export default {
  name: "parent",
  components: { ComA },
  data() {
    return {
      msg: "Welcome"
    };
  },

  methods: {
    changeA() {
      // 获取到子组件A
      this.$children[0].messageA = "this is new value";
    }
  }
};
</script>
