<template>
  <div class="site-navigation" :class="{ 'expanded': isExpanded }">
    <!-- 触发区域 -->
    <div 
      class="nav-trigger"
      @mouseenter="expandNav"
      @mouseleave="collapseNav"
    >
      <div class="nav-handle">
        <span class="nav-icon">📚</span>
        <span class="nav-text" v-show="isExpanded">全站导航</span>
      </div>
    </div>
    
    <!-- 导航内容 -->
    <div 
      class="nav-content"
      @mouseenter="expandNav"
      @mouseleave="collapseNav"
      v-show="isExpanded"
    >
      <div class="nav-header">
        <h3>📖 全站目录</h3>
      </div>
      
      <!-- 数据结构分类 -->
      <div class="nav-section">
        <h4 class="section-title">
          <span class="section-icon">🏗️</span>
          数据结构
        </h4>
        <div class="nav-group">
          <div class="nav-subgroup">
            <h5>线性结构</h5>
            <ul class="nav-list">
              <li><a href="/algorithm-blog/array/">🔢 数组</a></li>
              <li><a href="/algorithm-blog/linkedlist/">🔗 链表</a></li>
              <li><a href="/algorithm-blog/stack/">📚 栈</a></li>
              <li><a href="/algorithm-blog/queue/">🔄 队列</a></li>
              <li><a href="/algorithm-blog/string/">📝 字符串</a></li>
            </ul>
          </div>
          <div class="nav-subgroup">
            <h5>树形结构</h5>
            <ul class="nav-list">
              <li><a href="/algorithm-blog/tree/">🌳 二叉树</a></li>
              <li><a href="/algorithm-blog/bst/">🌲 二叉搜索树</a></li>
              <li><a href="/algorithm-blog/trie/">🌾 字典树</a></li>
            </ul>
          </div>
          <div class="nav-subgroup">
            <h5>图与其他</h5>
            <ul class="nav-list">
              <li><a href="/algorithm-blog/graph/">🕸️ 图</a></li>
              <li><a href="/algorithm-blog/heap/">🏔️ 堆</a></li>
              <li><a href="/algorithm-blog/hash/">🗂️ 哈希表</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 算法技巧分类 -->
      <div class="nav-section">
        <h4 class="section-title">
          <span class="section-icon">⚡</span>
          算法技巧
        </h4>
        <div class="nav-group">
          <div class="nav-subgroup">
            <h5>基础算法</h5>
            <ul class="nav-list">
              <li><a href="/algorithm-blog/sorting/">🔄 排序算法</a></li>
              <li><a href="/algorithm-blog/search/">🔍 搜索算法</a></li>
              <li><a href="/algorithm-blog/two-pointers/">🎯 双指针</a></li>
            </ul>
          </div>
          <div class="nav-subgroup">
            <h5>高级算法</h5>
            <ul class="nav-list">
              <li><a href="/algorithm-blog/dp/">💡 动态规划</a></li>
              <li><a href="/algorithm-blog/greedy/">🎯 贪心算法</a></li>
              <li><a href="/algorithm-blog/backtrack/">🔙 回溯算法</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 专题分类 -->
      <div class="nav-section">
        <h4 class="section-title">
          <span class="section-icon">📝</span>
          专题练习
        </h4>
        <div class="nav-group">
          <ul class="nav-list">
            <li><a href="/algorithm-blog/hot/">🔥 热门题目</a></li>
            <li><a href="/algorithm-blog/interview/">🎯 面试必考</a></li>
            <li><a href="/algorithm-blog/daily/">💪 每日一题</a></li>
            <li><a href="/algorithm-blog/contest/">🏆 竞赛题目</a></li>
          </ul>
        </div>
      </div>
      
      <!-- 学习工具 -->
      <div class="nav-section">
        <h4 class="section-title">
          <span class="section-icon">🛠️</span>
          学习工具
        </h4>
        <div class="nav-group">
          <ul class="nav-list">
            <li><a href="/algorithm-blog/complexity/">📊 复杂度分析</a></li>
            <li><a href="/algorithm-blog/visualization/">🎨 算法可视化</a></li>
            <li><a href="/algorithm-blog/records/">📝 刷题记录</a></li>
            <li><a href="/algorithm-blog/notes/">📚 学习笔记</a></li>
          </ul>
        </div>
      </div>
      
      <!-- 快速链接 -->
      <div class="nav-section">
        <h4 class="section-title">
          <span class="section-icon">🔗</span>
          快速链接
        </h4>
        <div class="nav-group">
          <ul class="nav-list">
            <li><a href="/algorithm-blog/">🏠 返回首页</a></li>
            <li><a href="/algorithm-blog/about/">👨‍💻 关于我</a></li>
            <li><a href="https://github.com/your-username/algorithm-blog" target="_blank">📂 GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteNavigation',
  data() {
    return {
      isExpanded: false,
      expandTimer: null,
      collapseTimer: null
    }
  },
  methods: {
    expandNav() {
      // 清除折叠定时器
      if (this.collapseTimer) {
        clearTimeout(this.collapseTimer)
        this.collapseTimer = null
      }
      
      // 设置展开定时器
      if (!this.isExpanded) {
        this.expandTimer = setTimeout(() => {
          this.isExpanded = true
        }, 100) // 100ms 延迟，避免意外触发
      }
    },
    
    collapseNav() {
      // 清除展开定时器
      if (this.expandTimer) {
        clearTimeout(this.expandTimer)
        this.expandTimer = null
      }
      
      // 设置折叠定时器
      this.collapseTimer = setTimeout(() => {
        this.isExpanded = false
      }, 300) // 300ms 延迟，给用户时间移动鼠标
    }
  },
  
  beforeUnmount() {
    // 清理定时器
    if (this.expandTimer) {
      clearTimeout(this.expandTimer)
    }
    if (this.collapseTimer) {
      clearTimeout(this.collapseTimer)
    }
  }
}
</script>

<style scoped>
.site-navigation {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 触发区域 */
.nav-trigger {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-trigger:hover {
  transform: translateX(5px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-handle {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
}

.nav-icon {
  font-size: 18px;
  margin-right: 8px;
}

.nav-text {
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

/* 导航内容 */
.nav-content {
  position: absolute;
  left: 50px;
  top: 0;
  width: 320px;
  max-height: 80vh;
  background: white;
  border-radius: 0 12px 12px 0;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e1e8ed;
}

/* 展开状态 */
.site-navigation.expanded .nav-trigger {
  width: 120px;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.site-navigation.expanded .nav-text {
  opacity: 1;
}

/* 导航头部 */
.nav-header {
  padding: 16px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0 12px 0 0;
}

.nav-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

/* 导航分区 */
.nav-section {
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.nav-section:last-child {
  border-bottom: none;
}

.section-title {
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
}

.section-icon {
  margin-right: 8px;
  font-size: 16px;
}

/* 导航分组 */
.nav-group {
  padding: 0 20px;
}

.nav-subgroup {
  margin-bottom: 16px;
}

.nav-subgroup:last-child {
  margin-bottom: 0;
}

.nav-subgroup h5 {
  margin: 0 0 8px 0;
  font-size: 12px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 导航列表 */
.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin-bottom: 4px;
}

.nav-list a {
  display: block;
  padding: 6px 12px;
  font-size: 13px;
  color: #5a6c7d;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-list a:hover {
  background-color: #f8f9fa;
  color: #667eea;
  transform: translateX(4px);
}

/* 滚动条样式 */
.nav-content::-webkit-scrollbar {
  width: 4px;
}

.nav-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.nav-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.nav-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 动画效果 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-content {
    width: 280px;
  }
  
  .nav-group {
    padding: 0 16px;
  }
  
  .section-title {
    padding: 0 16px;
  }
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  .nav-content {
    background: #1e1e1e;
    border-color: #333;
  }
  
  .section-title {
    color: #e1e1e1;
  }
  
  .nav-subgroup h5 {
    color: #999;
  }
  
  .nav-list a {
    color: #b3b3b3;
  }
  
  .nav-list a:hover {
    background-color: #2a2a2a;
    color: #667eea;
  }
  
  .nav-section {
    border-bottom-color: #333;
  }
}
</style>
