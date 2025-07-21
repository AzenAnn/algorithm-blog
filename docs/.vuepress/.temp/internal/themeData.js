export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"🏠 首页\",\"link\":\"/\"},{\"text\":\"🔧 基础语法\",\"link\":\"/basic-syntax/\"},{\"text\":\"⚙️ 基础算法\",\"link\":\"/basic-algorithms/\"},{\"text\":\"📦 数据结构\",\"link\":\"/data-structures/\"},{\"text\":\"🎯 动态规划\",\"link\":\"/dynamic-programming/\"},{\"text\":\"🕸️ 图论\",\"link\":\"/graph-theory/\"},{\"text\":\"🌳 树论\",\"link\":\"/tree-theory/\"},{\"text\":\"🔢 数学\",\"link\":\"/mathematics/\"},{\"text\":\"更多\",\"children\":[{\"text\":\"🚀 GitHub\",\"link\":\"https://github.com/yourusername\"},{\"text\":\"📝 关于\",\"link\":\"/about/\"}]}],\"sidebar\":{\"/basic-syntax/\":[{\"text\":\"🔧 C++ 基础语法\",\"children\":[\"/basic-syntax/README.md\",{\"text\":\"顺序结构\",\"children\":[\"/basic-syntax/sequential-structure/\",\"/basic-syntax/sequential-structure/a+b-problem.md\"]},{\"text\":\"选择结构\",\"children\":[\"/basic-syntax/selection-structure/\"]},{\"text\":\"循环结构\",\"children\":[\"/basic-syntax/loop-structure/\"]},{\"text\":\"数组\",\"children\":[\"/basic-syntax/array/\"]},{\"text\":\"函数\",\"children\":[\"/basic-syntax/function/\"]},{\"text\":\"结构体\",\"children\":[\"/basic-syntax/struct/\"]},{\"text\":\"指针\",\"children\":[\"/basic-syntax/pointer/\"]}]}],\"/basic-algorithms/\":[{\"text\":\"⚙️ 基础算法\",\"children\":[\"/basic-algorithms/README.md\"]}],\"/data-structures/\":[{\"text\":\"📦 数据结构\",\"children\":[\"/data-structures/README.md\"]}],\"/dynamic-programming/\":[{\"text\":\"🎯 动态规划\",\"children\":[\"/dynamic-programming/README.md\"]}],\"/graph-theory/\":[{\"text\":\"🕸️ 图论\",\"children\":[\"/graph-theory/README.md\"]}],\"/tree-theory/\":[{\"text\":\"🌳 树论\",\"children\":[\"/tree-theory/README.md\"]}],\"/mathematics/\":[{\"text\":\"🔢 数学\",\"children\":[\"/mathematics/README.md\"]}]},\"repo\":\"yourusername/cpp-algorithm-blog\",\"repoLabel\":\"GitHub\",\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdated\":true,\"lastUpdatedText\":\"最后更新\",\"contributors\":true,\"contributorsText\":\"贡献者\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
