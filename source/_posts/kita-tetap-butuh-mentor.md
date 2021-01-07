---
title: 我们仍然需要导师
date: 2020-12-03 16:11:59
tags: [观点, 网页]
thumbnail: forest.jpg
---

![](forest.jpg)

<span>照片由 <a href="https://unsplash.com/@olipaulgibbs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Oli Gibbs</a> 于 <a href="https://unsplash.com/s/photos/forest-from-top?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> 提供

比斯米拉

我已经一个月没写东西了，我想我很怀念写些随意而轻松的东西来享受时光。

我想告诉你我对学习的一个看法。作为免责声明，我写的这个观点完全没有文学基础。我几乎没写那么重的东西，呵呵。

这种想法其实是我从个人观察中得到的（我的大部分写作都是[自我参照](https://en.wikipedia.org/wiki/Self-reference#In_language)），此外，这种观点也仅限于我研究它时所经历的，但可能更为普遍。

{% blockquote %}
不管怎样，我们仍然需要导师。
{% endblockquote %}

我曾经认为，独立学习意味着在课堂之外学习新事物，也就是说做自己[经验性](https://pendidikan.co.id/pengertian-empiris/#:~:text=Empiris%20merupakan%20suatu%20keadaan%20yang,juga%20eksperimen%20yang%20pernah%20dilakukan.)的观察和实验。

当我学到很多的时候，我总是这样做。然后在这段加速的时间里，我学到了一点我错过的东西：只要我自己学会了，它仍然不如和导师一起学习有效。

我经历过的一个例子是，当我在JavaScript中学习[对象和数组解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)的概念时（下面的代码只是示例，请记住，呵呵）。

我在Udemy参加的在线课程中遇到了一个挑战，那就是应用破坏的概念来显示来自`practice.js`变成一个不可更改的JSX代码。

```js
//practice.js
const cars = [
  {
    model: "Honda Civic",
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

export default cars;

```

我必须将这些数据输入到下面的JSX代码中，而不进行任何更改，因此我必须首先进行销毁。

```js
//...
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
```

因为我已经学会了这个概念，当然，通过在这里搜索，我终于可以完成它。然后我继续进行下一个环节，这是一个解决问题的环节，包括解决问题和指导挑战。

以下是我的方式和我的导师在毁灭中的结果：

```js
// My solution sucks, but it still works tho haha.
const [honda, tesla] = cars;

const [
  {
    coloursByPopularity: [hondaTopColour],
    speedStats: {topSpeed: hondaTopSpeed}
  },
  {
    coloursByPopularity: [teslaTopColour],
    speedStats: {topSpeed: teslaTopSpeed}
  }
] = cars;

// Best practice from my mentor, it was so much better than mine.
const [honda, tesla] = cars;

const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;

const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;
```
我正在研究的解决方案实际上是在研究它所需要的东西，但是它仍然很小而且很难阅读（因为它必须将`colorsByPopularity`和`speedStats`放在一个常量中）。而我导师的解决方案显然更具可读性和模块化。

如果我在没有导师的情况下学习，我肯定会继续使用程序开始运行时的糟糕做法（就像我在许多项目中使用`Mongoose`一样）。

从这件小事上我相信，我们学习新事物的方式，对于那些在导师帮助下学习新事物的人来说仍然是有效的，即使只有一个方向（见教程、在线课程等）。

此外，没有导师我学不到的是课程/路线图方面的不足。一般来说，导师更了解学习某些东西的正确路线图，特别是对那些无名小卒来说。

最后，好消息是，在这一点上，它已经打开了每一个机会，学习几乎一切。甚至有许多组织免费提供学习和指导设施。好吧，这取决于我们如何应对这样的机会。

哈哈哈，下次再见 😁
