// import products from "./products"
import shop from '../../api/shop'
// 四大家族
const state = {
  items: [],
  checkoutStatus: null // null
}
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++ //
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },
  setCartItems(state, { items }) {
    state.items = items
  }
}
const actions = {
  addProductToCart({commit}, product) {
    // console.log(product);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item=> item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', {id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // mutations products decreateQuantity  树
      commit('products/decrementProductInentory', {id: product.id}, 
      {root: true})
    }
    // return state.items.map(({id, quantity}) => {
    //   // const product = rootState.products.all.find(
    //   //   product => product.id === id) //根节点
    //   return {
    //     title: products.title,
    //     price: product.price
    //   }
    // })
  },
  checkout({commit}, products) {
    // console.log(products);
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    commit('setCartItems', {items: []})
    shop.buyProducts(
      products, 
      // success 
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', {items: savedCartItems})
      }
    ) //api
  }
}
const getters = {
  cartProducts (state, getters, rootState) {
    // 穿梭到 products state.all
    // [{id: 1, quantity:1}]  =>   [{id:1, title:'ipad' price}]
    return state.items.map(({id, quantity}) => {
      const product = rootState.products.all.find(
        product => product.id === id
      ) // product  id 
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice (state, getters) {
    // all id  quantity * price 
    // cartProducts
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity 
    }, 0)
  }
}
export default {
  namespaced: true, //命名空间
  state,
  mutations,
  actions,
  getters
}