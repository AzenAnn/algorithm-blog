import comp from "G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-algorithms/index.html.vue"
const data = JSON.parse("{\"path\":\"/basic-algorithms/\",\"title\":\"⚙️ 基础算法\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"basic-algorithms/README.md\"}")
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
