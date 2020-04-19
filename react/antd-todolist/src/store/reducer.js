const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    let newStore = JSON.parse(JSON.stringify(state))
    newStore.inputValue = action.value
    return newStore
  }
  if (action.type === 'btn_click') {
    let newStore = JSON.parse(JSON.stringify(state))
    newStore.list.push(action.value)
    newStore.inputValue = ''
    return newStore
  }
  if (action.type === 'del_item') {
    let newStore = JSON.parse(JSON.stringify(state))
    newStore.list.splice(action.index, 1)
    return newStore
  }
  console.log(state, action)
  return state
}