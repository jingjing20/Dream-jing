<template>
  <div id="app">
    <products/>
    <cart/>
    
    
    <!-- {{this.$store.state.userInfo}}
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart';
import ProductList from '@/components/ProductList';
export default {
  mounted() {
    // 获取商品 mvvm list 展示
    // this.dispatch('')
    // console.log(this.$store.state.products.all);
    // console.log(this.$store.state.cart);
  },
  components: {
    'products': ProductList,
    'cart': ShoppingCart
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

[disabled] {
  cursor: not-allowed;
}
</style>

