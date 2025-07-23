export const redirects = JSON.parse("{\"/basic-syntax/sequential-structure/a+b-problem.html\":\"/basic-syntax/sequential-structure/a_b-problem.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"🌟 Azen的算法刷题博客"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"📝 关于"} }],
  ["/basic-syntax/", { loader: () => import(/* webpackChunkName: "basic-syntax_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/index.html.js"), meta: {"title":"🔧 C++ 基础语法"} }],
  ["/basic-algorithms/", { loader: () => import(/* webpackChunkName: "basic-algorithms_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-algorithms/index.html.js"), meta: {"title":"⚙️ 基础算法"} }],
  ["/graph-theory/", { loader: () => import(/* webpackChunkName: "graph-theory_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/graph-theory/index.html.js"), meta: {"title":"🕸️ 图论"} }],
  ["/mathematics/", { loader: () => import(/* webpackChunkName: "mathematics_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/mathematics/index.html.js"), meta: {"title":"🔢 数学"} }],
  ["/data-structures/", { loader: () => import(/* webpackChunkName: "data-structures_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/data-structures/index.html.js"), meta: {"title":"📦 数据结构"} }],
  ["/dynamic-programming/", { loader: () => import(/* webpackChunkName: "dynamic-programming_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/dynamic-programming/index.html.js"), meta: {"title":"🎯 动态规划"} }],
  ["/tree-theory/", { loader: () => import(/* webpackChunkName: "tree-theory_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/tree-theory/index.html.js"), meta: {"title":"🌳 树论"} }],
  ["/basic-syntax/array/", { loader: () => import(/* webpackChunkName: "basic-syntax_array_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/array/index.html.js"), meta: {"title":"数组"} }],
  ["/basic-syntax/function/", { loader: () => import(/* webpackChunkName: "basic-syntax_function_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/function/index.html.js"), meta: {"title":"函数"} }],
  ["/basic-syntax/loop-structure/", { loader: () => import(/* webpackChunkName: "basic-syntax_loop-structure_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/loop-structure/index.html.js"), meta: {"title":"循环结构"} }],
  ["/basic-syntax/pointer/", { loader: () => import(/* webpackChunkName: "basic-syntax_pointer_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/pointer/index.html.js"), meta: {"title":"指针"} }],
  ["/basic-syntax/selection-structure/", { loader: () => import(/* webpackChunkName: "basic-syntax_selection-structure_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/selection-structure/index.html.js"), meta: {"title":"选择结构"} }],
  ["/basic-syntax/sequential-structure/a_b-problem.html", { loader: () => import(/* webpackChunkName: "basic-syntax_sequential-structure_a_b-problem.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/sequential-structure/a_b-problem.html.js"), meta: {"title":"A+B问题 - 您的第一个C++程序"} }],
  ["/basic-syntax/sequential-structure/", { loader: () => import(/* webpackChunkName: "basic-syntax_sequential-structure_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/sequential-structure/index.html.js"), meta: {"title":"顺序程序设计：算法竞赛新手的第一堂课"} }],
  ["/basic-syntax/struct/", { loader: () => import(/* webpackChunkName: "basic-syntax_struct_index.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/struct/index.html.js"), meta: {"title":"结构体"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/algorithm-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
