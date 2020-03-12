<template>
  <div id="app">
    <!-- <div v-for="(user, index) in $store.state.users" :key="index"> -->
    <div v-for="(user, index) in getUsers" :key="index">
      {{user.id}} {{user.name}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// 本地map 借 要什么都可以 $store.state 读操作
export default {
  name: 'App',
  // 自己做主 跟别的组件不搭嘎  私有 
  // 兄弟， 没有任何关系 数据就不一致
  // data() {
  //   return {
  //     // 组件做不了主， 数据驱动页面  template 
  //     // 不利于数据的管理 请了财务
  //      // vuex  两部分   UI 用户界面工程师 地方 申请
  //         //数据流管理 vuex 中央 发放
  // 中央数据的到来
  computed:{
    ...mapGetters(['getUsers'])
  },
  components: {
  },
  methods:{  // vuex action
    ...mapActions(['fetchUsers'])
  },
  mounted() { //使用生命周期取数据
    // this.fetchUsers();
    // ajax  二层   TCP 三次握手 安全
    // 派发动作
    this.$store.dispatch('fetchUsers');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
