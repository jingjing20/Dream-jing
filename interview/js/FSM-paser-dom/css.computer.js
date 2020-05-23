let htmlStr = `<html>
 <head>
  <style>
    body div #myid {
      width: 100px;
      background-color: #fff;
    }
  </style>
 </head>
 <body>
    <div>
      <div id="myid">
        <span></span>
        <img />
      </div>
    </div>
 </body>
</html>
`;

let currentToken = null;
let stack = [
  { type: 'document', children: [] }
]
function parse(string) {
  let state = start;
  for (let c of string) {
    // \n
    state = state(c);
  }
}
parse(htmlStr);
function start(c) {
  if (c === '<') {
    return tagOpen;
  } else {
    return start;
  }
}
function tagOpen(c) {
  if (c === '/') {
    // </h 结束标签
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    // <h  开始标签 去拼接 
    currentToken = {
      type: 'element',
      tag: 'startTag',
      tagName: c
    }
    return tagName;
  }
}
function tagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    // 
    return tagName;
    // 什么时候拼接完？？
  } else if (c === '>') {
    // 提交 当前 token
    emit(currentToken);
    return start;
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'element',
      tag: 'endTag',
      tagName: c
    }
    // 也要拼接
    return tagName;
  }
}

console.log(JSON.stringify(stack, null, 2));
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  if (token.tag === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attribute: [],
      tagName: token.tagName
    }
    // 当前 element 一定是栈顶的 子元素
    top.children.push(element);
    stack.push(element)
  } else if (token.tag === 'endTag') {
    if (top.tagName === token.tagName) {
      stack.pop()
    } else {
      throw new Error('no match');
    }
  }
}