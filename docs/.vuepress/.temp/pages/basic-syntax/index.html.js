import comp from "G:/algorithm-blog/docs/.vuepress/.temp/pages/basic-syntax/index.html.vue"
const data = JSON.parse("{\"path\":\"/basic-syntax/\",\"title\":\"🔧 C++ 基础语法\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"basic-syntax/README.md\"}")
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
