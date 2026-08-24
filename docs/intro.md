---
title: 协会简介

outline: false

articleAnalyze:
  showIcon: false
  dateFormat: false
  dateUTC: false
  showInfo: false
  showAuthor: false
  showCreateDate: false
  showUpdateDate: false
  showCategory: false
  showTag: false

#articleBanner:
#  enabled: true
---

# 区块链++协会

> **BRIMS++ · Beyond the Edge.**

南华大学区块链++协会（BRIMS++）由学校与衡阳雁城区块链研究院联合组建，由万亚平院长支持、田纹龙副院长牵头创办，聚焦**区块链、科研创新、软件开发与网络安全**，致力于打造学院创新创业与科研实践的核心平台。

---

## 我们为什么关注区块链

区块链是一种融合密码学、分布式网络与共识机制的可信共享账本技术，通过构建可验证、难篡改、多方协同的数据环境，为数字世界建立可信连接。

如今，区块链与数据安全、人工智能、物联网、供应链管理等技术不断融合，正成为数字经济时代探索可信数据流通与数字基础设施的重要技术之一。

对我们而言，区块链不仅是一项技术，更是一条连接**密码学、分布式系统、数据安全、人工智能与软件工程**的技术纽带。

---

## BRIMS++ 不只是一个名字

**BRIMS++** 代表着我们的五个探索方向：

|       B        |      R       |       I        |       M        |      S       |
|:--------------:|:------------:|:--------------:|:--------------:|:------------:|
| **Blockchain** | **Research** | **Innovation** | **Management** | **Security** |
|      区块链       |      科研      |       创新       |       管理       |      安全      |

以区块链为技术特色，以科研为驱动，以创新为动力，以团队管理为支撑，以网络安全守护数字世界。

“BRIMS”源于 *brim*，寓意**边缘、前沿，也象征充满与洋溢**，代表我们始终关注技术前沿、探索未知边界。

而“++”呼应“区块链加加”，意味着**知识、能力、实践与创新成果的持续叠加，不断突破自我、超越边界**。

---

## 从兴趣出发，让技术走向真实世界

协会搭建覆盖**软件开发、网络安全、科研创新、学科竞赛**的多元成长平台，为学生提供从技术学习到工程实践、从竞赛备赛到科研创新的全链路培养支持。

在这里，你可以参与真实项目开发，探索区块链与前沿技术的融合应用；可以开展网络攻防与数据安全实践；可以在导师指导下进行论文研究与科研创新；也可以组队参加国家级学科竞赛，在真实问题中提升技术能力、工程能力与团队协作能力。

我们希望提供的不只是一个学习技术的地方，而是一个能够让想法真正落地、让能力不断成长的平台。

---

## 我们已经走了多远

| 20+  |   10+   |   20+   |      10+      |
|:----:|:-------:|:-------:|:-------------:|
| 保研学生 | 本科生学术论文 | 国家级竞赛奖项 | 大学生创新创业训练计划项目 |

同时，协会多次接待省市领导调研指导，拥有**多位优秀导师**提供长期科研与技术指导。

---

## 我们相信

大学阶段真正重要的不只是掌握多少知识，而是能否将知识转化为**解决问题的能力、持续探索的勇气和创造真实价值的实践**。

无论你是否具备编程基础，只要你对技术保持好奇、愿意钻研、乐于协作，都可以加入 BRIMS++，找到属于自己的方向。

---

> **探索前沿，连接创新；持续进化，超越边界。**
>
> **BRIMS++ : Beyond the Edge.**

<style>

/* =========================================================
   BRIMS++ 协会简介
   页面整体布局
   ========================================================= */


/* =========================================================
   1. 页面整体宽度
   ========================================================= */

.VPDoc:has(.vp-doc._intro) {
  width: 100% !important;
  max-width: 1680px !important;
  margin: 0 auto !important;
  padding: 0 32px !important;
}


/* =========================================================
   2. 主内容 + 右侧导航
   让正文真正展开
   ========================================================= */

.VPDoc:has(.vp-doc._intro).has-aside .content-container {
  width: 100% !important;
  max-width: none !important;
}


/* 正文区域 */

.VPDoc:has(.vp-doc._intro).has-aside .content {
  width: 100% !important;
  max-width: 1240px !important;
  margin: 0 !important;
}


/* =========================================================
   3. 右侧导航
   整体向页面最右侧移动
   ========================================================= */

.VPDoc:has(.vp-doc._intro) .aside {
  padding-left: 48px !important;
  padding-right: 0 !important;
}


/* 导航容器 */

.VPDoc:has(.vp-doc._intro) .aside-container {
  width: 220px !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: auto !important;
}


/* 导航内容 */

.VPDoc:has(.vp-doc._intro) .aside-content {
  width: 220px !important;
  margin-left: auto !important;
  margin-right: 0 !important;
}


/* =========================================================
   4. 页面顶部标题
   ========================================================= */

.VPDoc:has(.vp-doc._intro) h1 {
  position: relative;

  margin-top: 30px !important;
  margin-bottom: 12px !important;

  padding-bottom: 18px;

  text-align: center;

  font-size: clamp(2.2rem, 5vw, 3.4rem) !important;

  font-weight: 800 !important;

  letter-spacing: -0.02em;

  color: var(--vp-c-text-1) !important;
}


/* 标题下面的渐变短线 */

.VPDoc:has(.vp-doc._intro) h1::after {
  content: "";

  display: block;

  width: 56px;
  height: 3px;

  margin: 18px auto 0;

  border-radius: 999px;

  background: linear-gradient(
    90deg,
    #4facfe,
    #43e6d0,
    #8b7cff
  );
}


/* =========================================================
   5. BRIMS++ 品牌语句
   ========================================================= */

.VPDoc:has(.vp-doc._intro) h1 + blockquote {
  margin: 0 auto 48px !important;

  padding: 0 !important;

  border-left: none !important;

  text-align: center;

  background: transparent !important;
}


.VPDoc:has(.vp-doc._intro) h1 + blockquote p {
  margin: 0 !important;

  font-size: 0.95rem;

  font-weight: 700;

  letter-spacing: 0.08em;

  color: var(--vp-c-brand-1);
}


/* =========================================================
   6. 第一段协会简介
   ========================================================= */

.VPDoc:has(.vp-doc._intro) h1 + blockquote + p {
  width: 100%;

  margin: 0 auto 55px !important;

  padding: 28px 36px;

  border: 1px solid var(--vp-c-divider);

  border-radius: 16px;

  background: var(--vp-c-bg-soft);

  text-align: center;

  font-size: 1.03rem;

  line-height: 1.95;

  color: var(--vp-c-text-2);

  box-sizing: border-box;
}


/* =========================================================
   7. 分割线
   ========================================================= */

.VPDoc:has(.vp-doc._intro) hr {
  margin: 55px 0 !important;

  border: 0;

  border-top: 1px solid var(--vp-c-divider);
}


/* =========================================================
   8. 二级标题
   ========================================================= */

.VPDoc:has(.vp-doc._intro) h2 {
  position: relative;

  margin-top: 65px !important;
  margin-bottom: 25px !important;

  padding-top: 0 !important;

  border-top: none !important;

  font-size: 1.7rem !important;

  font-weight: 750 !important;

  color: var(--vp-c-text-1);
}


/* 标题左侧渐变竖线 */

.VPDoc:has(.vp-doc._intro) h2::before {
  content: "";

  display: inline-block;

  width: 4px;
  height: 22px;

  margin-right: 12px;

  vertical-align: -3px;

  border-radius: 999px;

  background: linear-gradient(
    180deg,
    #4facfe,
    #43e6d0
  );
}


/* =========================================================
   9. 正文段落
   ========================================================= */

.VPDoc:has(.vp-doc._intro) p {
  font-size: 1rem;

  line-height: 1.95;

  color: var(--vp-c-text-2);
}


/* =========================================================
   10. 强调文字
   ========================================================= */

.VPDoc:has(.vp-doc._intro) strong {
  color: var(--vp-c-text-1);
}


/* =========================================================
   11. BRIMS 五大方向表格
   ========================================================= */

.VPDoc:has(.vp-doc._intro) table {
  width: 100%;

  margin: 32px auto 40px;

  border-collapse: separate;

  border-spacing: 8px;

  background: transparent;
}


/* 五大方向表格表头 */

.VPDoc:has(.vp-doc._intro) table:first-of-type th {
  padding: 18px 10px;

  border: 1px solid var(--vp-c-divider);

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.08),
      rgba(139, 124, 255, 0.06)
    );

  font-size: 1rem;

  color: var(--vp-c-brand-1);
}


/* 五大方向内容 */

.VPDoc:has(.vp-doc._intro) table:first-of-type td {
  padding: 12px 10px;

  border: none;

  text-align: center;

  color: var(--vp-c-text-2);
}


/* =========================================================
   12. 成果数据表格
   ========================================================= */

.VPDoc:has(.vp-doc._intro) table:nth-of-type(2) {
  margin-top: 35px;

  margin-bottom: 35px;
}


/* 数据数字 */

.VPDoc:has(.vp-doc._intro) table:nth-of-type(2) th {
  padding: 22px 8px 5px;

  border: none;

  background: transparent;

  font-size: 2rem;

  font-weight: 800;

  color: var(--vp-c-brand-1);
}


/* 数据名称 */

.VPDoc:has(.vp-doc._intro) table:nth-of-type(2) td {
  padding: 4px 8px 22px;

  border: none;

  background: transparent;

  font-size: 0.88rem;

  color: var(--vp-c-text-2);
}


/* =========================================================
   13. 底部结束语
   ========================================================= */

.VPDoc:has(.vp-doc._intro) blockquote:last-child {
  position: relative;

  margin: 70px auto 30px !important;

  padding: 32px 30px !important;

  border: 1px solid var(--vp-c-divider) !important;

  border-left: 3px solid var(--vp-c-brand-1) !important;

  border-radius: 14px;

  background: var(--vp-c-bg-soft) !important;

  text-align: center;
}


.VPDoc:has(.vp-doc._intro) blockquote:last-child p {
  margin: 5px 0;

  font-size: 1rem;

  line-height: 1.8;
}


.VPDoc:has(.vp-doc._intro) blockquote:last-child strong {
  color: var(--vp-c-brand-1);
}


/* =========================================================
   14. 大屏幕
   ========================================================= */

@media (min-width: 1440px) {

  .VPDoc:has(.vp-doc._intro) {
    max-width: 1760px !important;
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .VPDoc:has(.vp-doc._intro).has-aside .content {
    max-width: 1280px !important;
  }

  .VPDoc:has(.vp-doc._intro) .aside {
    padding-left: 60px !important;
  }

}


/* =========================================================
   15. 超宽屏
   ========================================================= */

@media (min-width: 1700px) {

  .VPDoc:has(.vp-doc._intro) {
    max-width: 1840px !important;
  }

  .VPDoc:has(.vp-doc._intro).has-aside .content {
    max-width: 1320px !important;
  }

  .VPDoc:has(.vp-doc._intro) .aside {
    padding-left: 70px !important;
  }

}


/* =========================================================
   16. 平板
   ========================================================= */

@media (max-width: 1100px) {

  .VPDoc:has(.vp-doc._intro) {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .VPDoc:has(.vp-doc._intro).has-aside .content {
    max-width: calc(100% - 220px) !important;
  }

  .VPDoc:has(.vp-doc._intro) .aside {
    padding-left: 24px !important;
  }

}


/* =========================================================
   17. 手机端
   ========================================================= */

@media (max-width: 960px) {

  .VPDoc:has(.vp-doc._intro) {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .VPDoc:has(.vp-doc._intro).has-aside .content {
    max-width: 100% !important;
  }

  .VPDoc:has(.vp-doc._intro) .aside {
    display: none !important;
  }

  .VPDoc:has(.vp-doc._intro) h1 {
    font-size: 2.4rem !important;
  }

  .VPDoc:has(.vp-doc._intro) h2 {
    font-size: 1.5rem !important;
  }

  .VPDoc:has(.vp-doc._intro) h1 + blockquote + p {
    padding: 24px 22px;

    text-align: left;
  }

}


/* =========================================================
   18. 小屏手机
   ========================================================= */

@media (max-width: 640px) {

  .VPDoc:has(.vp-doc._intro) {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .VPDoc:has(.vp-doc._intro) h1 {
    font-size: 2.2rem !important;
  }

  .VPDoc:has(.vp-doc._intro) h2 {
    font-size: 1.45rem !important;
  }

  .VPDoc:has(.vp-doc._intro) h1 + blockquote + p {
    padding: 22px 20px;

    text-align: left;
  }

  .VPDoc:has(.vp-doc._intro) table {
    border-spacing: 4px;
  }

  .VPDoc:has(.vp-doc._intro) table:first-of-type th {
    padding: 12px 5px;

    font-size: 0.82rem;
  }

  .VPDoc:has(.vp-doc._intro) table:first-of-type td {
    padding: 8px 4px;

    font-size: 0.8rem;
  }

  .VPDoc:has(.vp-doc._intro) table:nth-of-type(2) th {
    font-size: 1.45rem;
  }

  .VPDoc:has(.vp-doc._intro) table:nth-of-type(2) td {
    font-size: 0.72rem;
  }

}
</style>