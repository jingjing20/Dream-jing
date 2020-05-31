console.log(['1', '2', '2'].map(parseInt))

let unary = fn => val => fn(val);
let parse = unary(parseInt);
console.log(['1', '2', '3'].map(parse))