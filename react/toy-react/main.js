let arr = [1, 4, 67, 8]
for (let val of arr) {
  console.log(val);
}

function createElement(tagName, attributes, ...children) {
  // return document.createElement(tagName);
  let Element = document.createElement(tagName);
  for (let obj in attributes) {
    Element.setAttribute(obj, attributes[obj]);
  }
  for (let val of children) {
    if(typeof val === "string") {
      val = document.createTextNode(val);
    }
    Element.appendChild(val);
  }
  return Element;
}

window.a = <div id="a" class="jing">
  <div>jingjing</div>
  <div></div>
</div>