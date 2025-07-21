import comp from "G:/algorithm-blog/docs/.vuepress/.temp/pages/dynamic-programming/index.html.vue"
const data = JSON.parse("{\"path\":\"/dynamic-programming/\",\"title\":\"🎯 动态规划\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"dynamic-programming/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
