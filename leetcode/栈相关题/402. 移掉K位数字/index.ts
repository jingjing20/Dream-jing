/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

interface props {
  num: string,
  k: number
}

const jing = (params: props) => {
  let stack: string[] = [];
  for (let i = 0; i < params.num.length; i++) {
    const c = params.num[i];
    while (params.k > 0 && stack.length && stack[stack.length - 1] > c) {
      stack.pop();
      params.k--;
    }
    if (c != '0' || stack.length > 0) {
      stack.push(c);
    }
  }
  while (params.k > 0) {
    stack.pop();
    params.k--;
  }
  return stack.length === 0 ? '0' : stack.join('');
}

let params =  {
  num: "1432219", 
  k: 3
}
console.log(jing(params));