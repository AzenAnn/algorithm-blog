import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 指定bundler
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // 站点配置
  lang: 'zh-CN',
  title: 'Azen的算法博客',
  description: '用代码探索算法之美，用C++编织逻辑之网',

  // 基础路径
  base: '/algorithm-blog/',

  // 页面头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'C++,算法,数据结构,编程,计算机科学' }]
  ],

  // 主题配置
  theme: defaultTheme({
    // 导航栏
    navbar: [
      { text: '🏠 首页', link: '/' },
      { text: '🔧 基础语法', link: '/basic-syntax/' },
      { text: '⚙️ 基础算法', link: '/basic-algorithms/' },
      { text: '📦 数据结构', link: '/data-structures/' },
      { text: '🎯 动态规划', link: '/dynamic-programming/' },
      { text: '🕸️ 图论', link: '/graph-theory/' },
      { text: '🌳 树论', link: '/tree-theory/' },
      { text: '🔢 数学', link: '/mathematics/' },
      {
        text: '更多',
        children: [
          { text: '🚀 GitHub', link: 'https://github.com/yourusername' },
          { text: '📝 关于', link: '/about/' }
        ]
      }
    ],

    // 侧边栏配置（修复语法错误）
    sidebar: {
      '/basic-syntax/': [
        {
          text: '🔧 C++ 基础语法',
          children: [
            '/basic-syntax/README.md', // 第一个元素：基础语法首页
            {
              text: '顺序结构', // 子栏目1
              children: [
                '/basic-syntax/sequential-structure/',
                '/basic-syntax/sequential-structure/a+b-problem.md'
              ]
            },
            {
              text: '选择结构', // 子栏目2（修复：添加逗号）
              children: [
                '/basic-syntax/selection-structure/'
              ]
            },
            {
              text: '循环结构', // 子栏目3（修复：添加逗号）
              children: [
                '/basic-syntax/loop-structure/',
                '/basic-syntax/loop-structure/循环入门题.md'

	      ]
            },
            {
              text: '数组', // 子栏目4（修复：添加逗号）
              children: [
                '/basic-syntax/array/'
              ]
            },
            {
              text: '函数', // 子栏目5（修复：添加逗号）
              children: [
                '/basic-syntax/function/'
              ]
            },
            {
              text: '结构体', // 子栏目6（修复：添加逗号）
              children: [
                '/basic-syntax/struct/'
              ]
            },
            {
              text: '指针', // 子栏目7（最后一个元素无逗号）
              children: [
                '/basic-syntax/pointer/'
              ]
            }
          ]
        }
      ],
      '/basic-algorithms/': [
        {
          text: '⚙️ 基础算法',
          children: ['/basic-algorithms/README.md']
        }
      ],
      '/data-structures/': [
        {
          text: '📦 数据结构',
          children: ['/data-structures/README.md']
        }
      ],
      '/dynamic-programming/': [
        {
          text: '🎯 动态规划',
          children: ['/dynamic-programming/README.md']
        }
      ],
      '/graph-theory/': [
        {
          text: '🕸️ 图论',
          children: ['/graph-theory/README.md']
        }
      ],
      '/tree-theory/': [
        {
          text: '🌳 树论',
          children: ['/tree-theory/README.md']
        }
      ],
      '/mathematics/': [
        {
          text: '🔢 数学',
          children: ['/mathematics/README.md']
        }
      ]
    },

    // 仓库配置
    repo: 'https://github.com/AzenAnn/algorithm-blog',
    repoLabel: 'GitHub',

    // 编辑链接
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',

    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',

    // 贡献者
    contributors: true,
    contributorsText: '贡献者'
  }),

  // 插件配置
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索算法知识...'
        }
      }
    })
  ] // 修复：移除多余逗号
})
