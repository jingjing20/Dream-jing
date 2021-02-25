## Node 类型

### Node 节点关系

-   `Dom` 文档中所有节点都与其他节点有关系。每个节点都有一个 `childNodes` 属性，其中包含一个 `NodeList` 的实例。`NodeList` 是一个类数组 对象，用于存储可以按位置存取的有序节点。注意，`NodeList` 并不是 `Array` 的实例，但可以使用中括 号访问它的值，而且它也有 length 属性。NodeList 对象独特的地方在于，它其实是一个对 `DOM` 结 构的查询，因此 `DOM` 结构的变化会自动地在 `NodeList` 中反映出来。我们通常说 `NodeList` 是实时的 活动对象，而不是第一次访问时所获得内容的快照。

-   每个节点都有一个 `parentNode` 属性，指向其 DOM 树中的父元素。`childNodes` 中的所有节点都 有同一个父元素，因此它们的 `parentNode` 属性都指向同一个节点。此外，`childNodes` 列表中的每个 节点都是同一列表中其他节点的同胞节点。而使用 `previousSibling` 和 `nextSibling` 可以在这个列 表的节点间导航。这个列表中第一个节点的 `previousSibling` 属性是 `null`，最后一个节点的 `nextSibling` 属性也是 `null`。

### 操纵节点

**1、appendChild() 在 `childNodes` 列表末尾添加一个节点，返回新添加的节点**

-   因为所有关系指针都是只读的，所以 DOM 又提供了一些操纵节点的方法。最常用的方法是 `appendChild()`，用于在 `childNodes` 列表末尾添加节点。添加新节点会更新相关的关系指针，包括 父节点和之前的最后一个子节点。**`appendChild()`方法返回新添加的节点。**

-   如果把文档中已经存在的节点传给 `appendChild()`，则这个节点会从之前的位置被转移到新位置。 即使 `DOM` 树通过各种关系指针维系，一个节点也不会在文档中同时出现在两个或更多个地方。因此， 如果调用 `appendChild()`传入父元素的第一个子节点，则这个节点会成为父元素的最后一个子节点。

```js
let returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true
```

**2、insertBefore() 在一个参照节点的前面插入一个节点，返回插入的节点**

-   如果想把节点**放到 childNodes 中的特定位置而不是末尾**，则可以使用 `insertBefore()`方法。 这个方法接收两个参数: 要插入的节点和参照节点。调用这个方法后，要插入的节点会变成参照节点的前一个同胞节点，并被返回。**如果参照节点是 null，则 `insertBefore()`与 appendChild()效果相同**，如下面的例子所示:

```js
// 作为最后一个子节点插入
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); // true

// 作为新的第一个子节点插入
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); // true
alert(newNode == someNode.firstChild); // true

// 插入最后一个子节点前面
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true
```

**3、replaceChild() 用一个节点替换另一个节点，返回要替换的节点**

-   appendChild()和 insertBefore()在插入节点时不会删除任何已有节点。相对地，replaceChild()方法接收两个参数: 要插入的节点和要替换的节点。要替换的节点会被返回并从文档树中完全移除，要插入的节点会取而代之。

**4、removeChild() 删除一个节点并返回这个节点**

-   要移除节点而不是替换节点，可以使用 removeChild()方法。这个方法接收一个参数，即要移除的节点。被移除的节点会被返回

> 上面介绍的 4 个方法都用于操纵某个节点的子元素，也就是说使用它们之前必须先取得父节点(使 用前面介绍的 parentNode 属性)。并非所有节点类型都有子节点，如果在不支持子节点的节点上调用 这些方法，则会导致抛出错误。
