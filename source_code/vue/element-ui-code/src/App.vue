<template>
  <div id="app">
    <el-alert
    title="错误提示的文案"
    type="error"
    :showIcon="false"
    >
    </el-alert>
    <router-view/>
  </div>
</template>
<script>
import ElAlert from './components/ElAlert'

export default {
  components: {
    ElAlert,
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
