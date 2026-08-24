---
layout: home
title: 南华大学计算机学院区块链++协会
tk:
  teekHome: false
hero:
  name: BRIMS++
  text: 区块链++协会
  tagline: Beyond the Edge.
  image:
    src: /images/logo_1000x1000.png
  actions: 
    - theme: brand
      text: 探索协会
      link: /intro
    - theme: alt
      text: 师资团队
      link: /supervisors
    - theme: alt
      text: 科研成果
      link: /papers
    - theme: alt
      text: 竞赛奖项
      link: /achievements
features:
  - icon: ⛓️
    title: Blockchain
    details: 探索区块链、可信数据与分布式技术
  - icon: 🔬
    title: Research
    details: 以科研问题驱动技术探索与学术创新
  - icon: ✨
    title: Innovation
    details: 将技术想法转化为真实项目与创新成果
  - icon: 🧩
    title: Management
    details: 培养团队协作、项目组织与工程管理能力
  - icon: 🛡️
    title: Security
    details: 聚焦网络攻防、安全实践与数据安全

---

<section class="about-brims">

<div class="section-label">ABOUT BRIMS++</div>

# 南华大学区块链++协会

南华大学区块链++协会（BRIMS++）由学校与衡阳雁城区块链研究院联合组建，聚焦 **区块链、科研创新、软件开发与网络安全**，致力于打造学院创新创业与科研实践的核心平台。

BRIMS++ 不只是协会的英文名称，更代表我们的五大探索方向：**Blockchain、Research、Innovation、Management、Security**。以区块链为技术特色，以科研为驱动，以创新为动力，以团队管理为支撑，以网络安全守护数字世界。

</section>

| 20+  |   10+   |   20+   |      10+      |
|:----:|:-------:|:-------:|:-------------:|
| 保研学生 | 本科生学术论文 | 国家级竞赛奖项 | 大学生创新创业训练计划项目 |

<section class="brims-slogan">

> **探索前沿，连接创新；持续进化，超越边界。**

**BRIMS++ : Beyond the Edge.**

</section>


<style scope>

/* =========================================================
   全局：禁止横向滚动
   ========================================================= */

html,
body {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overscroll-behavior-x: none !important;
}

#app,
.VPApp,
.VPLayout,
.VPContent {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden !important;
}


/* =========================================================
   Hero
   ========================================================= */

/*.VPHero {
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden !important;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(77, 166, 255, 0.18),
      transparent 32%
    ),
    radial-gradient(
      circle at 90% 15%,
      rgba(170, 120, 255, 0.16),
      transparent 32%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(70, 220, 210, 0.13),
      transparent 38%
    ),
    linear-gradient(
      135deg,
      #f8fbff 0%,
      #ffffff 50%,
      #faf8ff 100%
    );
}*/


/* =========================================================
   Hero 顶部彩色光带
   ========================================================= */

/*.VPHero::before {
  content: "";

  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 5px;

  background: linear-gradient(
    90deg,
    #4facfe,
    #43e6d0,
    #8b7cff,
    #d77cff
  );

  z-index: 1;
}*/


/* =========================================================
   Hero 内容
   ========================================================= */

.VPHero .container {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 1200px;

  margin-left: auto !important;
  margin-right: auto !important;

  padding: 64px 24px !important;

  box-sizing: border-box;
}


/* =========================================================
   Hero 标题
   ========================================================= */

.VPHero .name {
  color: #1f2937 !important;

  font-weight: 700;

  font-size:
    clamp(3rem, 6vw, 4.5rem) !important;

  line-height: 1.15 !important;
}

.VPHero .text {
  color: #2563eb !important;

  font-weight: 800;

  font-size:
    clamp(3rem, 6vw, 4.5rem) !important;

  line-height: 1.15 !important;
}

.VPHero .tagline {
  color: #64748b !important;

  font-size:
    clamp(1.15rem, 2vw, 1.5rem) !important;

  margin-top: 18px !important;
}


/* =========================================================
   Hero 按钮
   ========================================================= */

.VPHero .actions {
  position: relative;
  z-index: 5;

  display: flex;

  justify-content: center !important;

  flex-wrap: wrap;

  gap: 16px;

  margin-top: 30px;
}

.VPHero .actions button,
.VPHero .actions a {
  font-size: 1.05rem !important;

  padding: 10px 24px !important;
}


/* =========================================================
   Features
   ========================================================= */

.VPFeatures {
  width: 100%;
  max-width: 100%;

  overflow: hidden !important;
}

.VPFeatures .container {
  width: 100%;

  max-width: 1400px;

  margin-left: auto !important;
  margin-right: auto !important;

  padding-left: 24px;
  padding-right: 24px;

  box-sizing: border-box;
}


/* =========================================================
   五个方向：桌面端严格一行
   ========================================================= */

.VPFeatures .container .items {
  width: 100%;
  max-width: 100%;

  display: grid !important;

  grid-template-columns:
    repeat(5, minmax(0, 1fr)) !important;

  /*gap: 0px !important;*/

  margin-left: auto !important;
  margin-right: auto !important;

  box-sizing: border-box;
}

.VPFeatures .container .items .item {
  width: 100% !important;

  max-width: 100% !important;

  min-width: 0 !important;

  flex: none !important;

  box-sizing: border-box;
}

.VPFeature {
  width: 100%;

  max-width: 100% !important;

  min-width: 0 !important;

  box-sizing: border-box;
}


/* =========================================================
   Feature 文字
   ========================================================= */

.VPFeature .title {
  font-size: 1.15rem !important;
}

.VPFeature .details {
  font-size: 0.95rem !important;

  max-width: 100%;

  overflow-wrap: anywhere;

  word-break: break-word;
}


/* =========================================================
   协会简介
   ========================================================= */

.about-brims {
  width: min(
    1050px,
    calc(100% - 48px)
  );

  margin: 90px auto 60px;

  text-align: center;
}


/* ABOUT BRIMS++ */

.section-label {
  margin-bottom: 14px;

  font-size: 0.82rem;

  font-weight: 700;

  letter-spacing: 0.2em;

  color: #2563eb;
}


/* 简介标题 */

.about-brims h1 {
  margin-top: 0;

  margin-bottom: 30px;

  border-top: none !important;

  font-size: 2.3rem;

  font-weight: 700;

  /*color: #1f2937;*/
}


/* 简介段落 */

.about-brims p {
  max-width: 900px;

  margin-left: auto;
  margin-right: auto;

  font-size: 1rem;

  line-height: 1.95;

  color: #64748b;
}


/* 第一段稍微突出 */

.about-brims p:first-of-type {
  font-size: 1.08rem;

  color: #475569;
}


/* =========================================================
   数据统计表
   ========================================================= */

.about-brims + table,
.about-brims ~ table {
  width: min(
    950px,
    calc(100% - 48px)
  ) !important;

  margin: 55px auto 80px !important;

  border-collapse: separate !important;

  border-spacing: 16px 0 !important;

  background: transparent !important;
}


/* 表头 */

.about-brims ~ table th {
  width: 25%;

  padding: 24px 12px 5px !important;

  text-align: center !important;

  border: none !important;

  background-color: var(--vp-c-bg-soft);

  border-radius: 16px 16px 0 0 !important;

  font-size: 2.2rem !important;

  font-weight: 800 !important;

  color: #2563eb !important;
}


/* 数据说明 */

.about-brims ~ table td {
  width: 25%;

  padding: 5px 12px 24px !important;

  text-align: center !important;

  border: none !important;

  background-color: var(--vp-c-bg-soft);

  border-radius: 0 0 16px 16px !important;

  font-size: 0.95rem !important;

  color: #64748b !important;
}

.vp-doc p, .vp-doc summary {
    margin: 16px auto;
}


/* =========================================================
   Slogan
   ========================================================= */

.brims-slogan {
  width: min(
    900px,
    calc(100% - 48px)
  );

  margin: 20px auto 100px;

  text-align: center;
}

.brims-slogan blockquote {
  margin: 0 0 18px;

  padding: 0;

  border-left: none !important;

  font-size: 1.25rem;

  font-weight: 600;

  color: #334155;
}

.brims-slogan strong {
  color: #334155;
}

.brims-slogan > p:last-child {
  margin-top: 15px;

  font-size: 0.95rem;

  font-weight: 700;

  letter-spacing: 0.08em;

  color: #2563eb;
}


/* =========================================================
   平板
   ========================================================= */

@media (max-width: 900px) {

  .VPFeatures .container .items {
    grid-template-columns:
      repeat(3, minmax(0, 1fr)) !important;
  }

}


/* =========================================================
   手机
   ========================================================= */

@media (max-width: 640px) {

  .VPHero .container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .VPFeatures .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .VPFeatures .container .items {
    grid-template-columns:
      1fr !important;
  }

  .about-brims {
    width: calc(100% - 32px);

    margin-top: 60px;
  }

  .about-brims h1 {
    font-size: 1.8rem;
  }

  .about-brims + table,
  .about-brims ~ table {
    width: calc(100% - 32px) !important;

    border-spacing: 8px 0 !important;
  }

  .about-brims ~ table th {
    padding: 18px 5px 4px !important;

    font-size: 1.6rem !important;
  }

  .about-brims ~ table td {
    padding: 4px 5px 18px !important;

    font-size: 0.82rem !important;
  }

  .brims-slogan {
    width: calc(100% - 32px);
  }

}

</style>