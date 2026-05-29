# 个人学术主页实现需求文档

请帮我实现一个现代、简洁、专业的个人学术主页 homepage。主页主要用于展示我的科研方向、代表论文、项目经历、教育背景和联系方式。页面风格应该偏向机器学习、计算机视觉、自动驾驶方向研究生/科研人员常用的 academic homepage，而不是普通个人博客，也不要做得太花哨。

我的主页核心定位是：

> Efficient Generative Vision-Language-Action Models for Autonomous Driving

主页需要让访问者快速理解：我是谁、我做什么研究、我有哪些代表工作、如何联系我。

---

## 一、整体要求

请优先使用 `Astro + TypeScript + Tailwind CSS` 实现。如果当前项目已经是 React、Next.js、Vue 或其他框架，也可以沿用现有技术栈，但要求保持静态、简洁、易维护、方便部署。

页面整体风格要求：

- 学术风格，简洁专业；
- 白色或浅灰背景；
- 页面内容居中，最大宽度约 `1080px`；
- 不要大面积渐变背景；
- 不要复杂动画；
- 不要过度设计的卡片阴影；
- 不要使用运行时请求 Google Scholar；
- 不要自动爬取 Google Scholar；
- 不要展示引用数、h-index 等容易过期的信息，除非我手动提供。

推荐视觉风格：

- 背景：`#ffffff` 或 `#f8fafc`
- 正文：`#0f172a`
- 次级文字：`#64748b`
- 主色：`#2563eb` 或 `#1d4ed8`
- 边框：`#e2e8f0`
- 字体：`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

页面需要支持桌面端、平板端和移动端。移动端下 Hero、Publication、Project 等区域需要自动变成单列布局。

---

## 二、主页内容结构

请实现一个单页 homepage，包含以下内容：

1. 顶部导航栏 Header
2. 首屏个人介绍 Hero
3. About Me
4. News
5. Research Interests
6. Selected Publications
7. Selected Projects
8. Experience & Education
9. Contact
10. Footer

导航栏点击后跳转到对应 section，例如：

- `#about`
- `#research`
- `#publications`
- `#projects`
- `#experience`
- `#contact`

导航栏左侧显示：

```text
Zhihao Zhu / 朱志浩
```

右侧导航显示：

```text
About
Research
Publications
Projects
Experience
Contact
```

导航栏可以 sticky 在顶部，背景用白色半透明，下面加一条很浅的 border。

---

## 三、个人信息和首屏内容

首屏左侧放头像，右侧放个人信息。如果头像图片不存在，请使用灰色 placeholder，不要让页面报错。

头像路径预留为：

```text
/public/avatar.jpg
```

Hero 区域显示以下内容：

```text
Zhihao Zhu / 朱志浩

Master Student, Fudan University

I work on efficient multimodal generative models for autonomous driving,
with a focus on Vision-Language-Action models, diffusion/flow-based planning,
and AR-to-diffusion distillation.
```

Hero 下方放研究关键词标签：

```text
Vision-Language-Action
Autonomous Driving
Diffusion Models
Flow Matching
Reinforcement Learning
Motion Planning
```

Hero 区域下方放四个按钮：

```text
Google Scholar
GitHub
Email
CV
```

链接信息如下：

```ts
const profileLinks = {
  scholar: "https://scholar.google.com/citations?user=qE0aPcQAAAAJ&hl=en",
  github: "TODO: 填写我的 GitHub 链接",
  email: "mailto:falsestunch@gmail.com",
  cv: "/cv.pdf"
}
```

注意：不要编造我的 GitHub、邮箱、CV 地址。暂时用 TODO 占位即可。

---

## 四、About Me 内容

About Me 区域使用以下英文内容：

```text
I am a master's student at Fudan University, working on multimodal generative
models and autonomous driving. My research focuses on efficient
Vision-Language-Action models, especially diffusion- and flow-based methods
for motion planning.

Recently, I have been exploring how to convert autoregressive VLAs into
parallel generative models through block diffusion, hierarchical distillation,
and reinforcement learning. I am broadly interested in efficient multimodal
reasoning, embodied intelligence, and safety-critical decision making.
```

要求：

- 不要写太长；
- 英文为主；
- 关键词可以适度加粗；
- 排版要舒服，行距不要太密。

---

## 五、News 内容

News 区域使用简单时间线，不要占太大空间。

初始数据如下：

```ts
const news = [
  {
    date: "2026.02",
    text: "WAM-Flow was accepted to CVPR 2026."
  },
  {
    date: "2026.02",
    text: "WAM-Flow pretrained models and evaluation resources were released."
  },
  {
    date: "2025.12",
    text: "WAM-Diff and WAM-Flow were released as preprints."
  },
  {
    date: "2025",
    text: "Started exploring efficient diffusion-based VLA models for autonomous driving."
  }
]
```

如果觉得某些新闻信息需要之后确认，可以在数据文件里保留 TODO 注释，但页面先正常显示。

---

## 六、Research Interests 内容

Research Interests 区域用 2x2 卡片布局。移动端变成单列。

四个卡片内容如下：

```ts
const researchInterests = [
  {
    title: "Efficient VLA Models",
    description: "Parallel generation, block diffusion, discrete diffusion, and efficient decoding for Vision-Language-Action models."
  },
  {
    title: "Autonomous Driving Planning",
    description: "Trajectory-as-language, closed-loop planning, NAVSIM / Bench2Drive evaluation, and safety-critical decision making."
  },
  {
    title: "AR-to-Diffusion Distillation",
    description: "Progressive block-wise adaptation, block-wise distillation, and cross-scale distillation from autoregressive VLAs to diffusion models."
  },
  {
    title: "Reinforcement Learning for Planning",
    description: "GRPO, PDMS reward optimization, simulator-guided feedback, and safe trajectory alignment."
  }
]
```

卡片要求：

- 简洁；
- 高度尽量统一；
- 可以使用很轻的 hover 效果；
- 不要加入复杂图标，最多使用简单 icon。

---

## 七、Selected Publications 内容

Publication 卡片采用左图右文布局。移动端变成上下布局。

图片路径预留：

```text
/public/papers/wam-flow.jpg
/public/papers/wam-diff.jpg
/public/papers/ar-to-diffusion.jpg
```

如果图片不存在，请显示灰色 placeholder，不要报错。

论文卡片字段建议：

```ts
interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  description: string
  image?: string
  links: {
    paper?: string
    code?: string
    project?: string
    bibtex?: string
  }
  selected?: boolean
}
```

Publication 1：

```ts
{
  title: "WAM-Flow: Parallel Coarse-to-Fine Motion Planning via Discrete Flow Matching for Autonomous Driving",
  authors: "Yifang Xu*, Jiahao Cui*, Feipeng Cai*, Zhihao Zhu*, Hanlin Shang, Shan Luan, Mingwang Xu, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu",
  venue: "CVPR 2026",
  year: "2026",
  description: "A discrete flow matching framework for parallel coarse-to-fine motion planning in autonomous driving, enabling efficient bidirectional trajectory refinement with simulator-guided alignment.",
  image: "/papers/wam-flow.jpg",
  links: {
    paper: "https://arxiv.org/abs/2512.06112",
    code: "https://github.com/fudan-generative-vision/WAM-Flow",
    project: "https://github.com/fudan-generative-vision/WAM-Flow",
    bibtex: "#"
  },
  selected: true
}
```

Publication 2：

```ts
{
  title: "WAM-Diff: A Masked Diffusion VLA Framework with MoE and Online Reinforcement Learning for Autonomous Driving",
  authors: "Mingwang Xu*, Jiahao Cui*, Feipeng Cai*, Hanlin Shang*, Zhihao Zhu, Shan Luan, Yifang Xu, Neng Zhang, Yaoyi Li, Jia Cai, et al.",
  venue: "arXiv 2025",
  year: "2025",
  description: "A masked diffusion Vision-Language-Action framework for autonomous driving, integrating non-causal trajectory decoding, MoE scaling, and online reinforcement learning for closed-loop planning.",
  image: "/papers/wam-diff.jpg",
  links: {
    paper: "https://arxiv.org/abs/2512.11872",
    code: "https://github.com/fudan-generative-vision/WAM-Diff",
    project: "https://github.com/fudan-generative-vision/WAM-Diff",
    bibtex: "#"
  },
  selected: true
}
```

Publication 3，作为 ongoing research，不要伪装成正式论文：

```ts
{
  title: "Hierarchical AR-to-Diffusion Distillation for Efficient Autonomous Driving VLAs",
  authors: "Zhihao Zhu, et al.",
  venue: "Ongoing Research",
  year: "2026",
  description: "A research direction on transforming pretrained autoregressive VLAs into efficient block diffusion models through progressive block-wise adaptation, block-wise distillation, and cross-scale model distillation.",
  image: "/papers/ar-to-diffusion.jpg",
  links: {},
  selected: false
}
```

Publication 卡片要求：

- 标题加粗；
- venue 使用 badge；
- 作者列表中 `Zhihao Zhu` 自动加粗；
- 链接为空时不显示按钮；
- 按钮包括 Paper、Code、Project、BibTeX；
- 图片缺失时显示 placeholder；
- 不要因为图片或链接缺失导致页面报错。

---

## 八、Selected Projects 内容

Selected Projects 区域使用三列卡片。移动端变成单列。

项目数据如下：

```ts
const projects = [
  {
    name: "WAM-Flow",
    tagline: "Parallel coarse-to-fine motion planning via discrete flow matching.",
    description: "A VLA-based planning framework that casts future trajectory generation as discrete flow matching over structured trajectory tokens.",
    tags: ["VLA", "Flow Matching", "Autonomous Driving", "Planning"],
    links: {
      code: "https://github.com/fudan-generative-vision/WAM-Flow",
      paper: "https://arxiv.org/abs/2512.06112"
    }
  },
  {
    name: "WAM-Diff",
    tagline: "Masked diffusion VLA framework for autonomous driving.",
    description: "A diffusion-based VLA framework that iteratively refines discrete future trajectory tokens using masked denoising and reinforcement learning.",
    tags: ["Diffusion", "VLA", "MoE", "RL"],
    links: {
      code: "https://github.com/fudan-generative-vision/WAM-Diff",
      paper: "https://arxiv.org/abs/2512.11872"
    }
  },
  {
    name: "AR-to-Diffusion Distillation",
    tagline: "Turning autoregressive VLAs into efficient parallel generative models.",
    description: "A research line on progressive block-wise adaptation, block-wise teacher-student distillation, and cross-scale diffusion model transfer.",
    tags: ["Distillation", "Block Diffusion", "Efficient Decoding", "VLA"],
    links: {}
  }
]
```

项目卡片要求：

- 每个项目显示 name、tagline、description、tags、links；
- tags 使用 pill 样式；
- 链接为空时不显示按钮；
- hover 效果轻微即可。

---

## 九、Experience & Education 内容

Experience & Education 区域使用简单时间线或列表。

初始数据如下：

```ts
const experience = [
  {
    title: "Master Student",
    institution: "Fudan University",
    location: "Shanghai, China",
    period: "2025 - Present",
    description: "Research on multimodal generative models, Vision-Language-Action models, and autonomous driving."
  },
  {
    title: "B.Eng. / B.S. in Information Management and Information Systems",
    institution: "South China University of Technology",
    location: "Guangzhou, China",
    period: "2021 - 2025",
    description: "Undergraduate study in the School of Mathematics."
  }
]
```

如果具体学历名称或年份需要我之后确认，可以在代码中用 TODO 注释，但页面先能正常展示。

---

## 十、Contact 内容

Contact 区域显示以下文案：

```text
I am always open to research discussions and collaborations on efficient
multimodal generative models, autonomous driving, and embodied intelligence.
```

下方显示四个按钮：

```text
Email
Google Scholar
GitHub
CV
```

链接和 Hero 区域保持一致。

---

## 十一、Footer 内容

Footer 显示：

```text
© 2026 Zhihao Zhu. Built with Astro.
```

也可以加：

```text
Last updated: 2026.
```

Footer 要简洁，不需要复杂内容。

---

## 十二、代码组织要求

请把内容数据和 UI 组件分开，方便之后维护论文、项目和新闻。

如果使用 Astro，推荐结构如下：

```text
src/
  components/
    Header.astro
    Hero.astro
    Section.astro
    NewsList.astro
    ResearchCard.astro
    PublicationCard.astro
    ProjectCard.astro
    ExperienceTimeline.astro
    Footer.astro

  data/
    profile.ts
    news.ts
    publications.ts
    projects.ts
    experience.ts

  pages/
    index.astro

  styles/
    global.css

public/
  avatar.jpg
  cv.pdf
  papers/
    wam-flow.jpg
    wam-diff.jpg
    ar-to-diffusion.jpg
```

如果使用其他框架，也请采用类似结构：

- `components/` 放组件；
- `data/` 放内容数据；
- `public/` 放静态资源；
- 页面入口只负责组合组件。

---

## 十三、SEO 和页面 metadata

请在页面 head 中加入：

```html
<title>Zhihao Zhu | Efficient Generative VLA Models for Autonomous Driving</title>
<meta name="description" content="Personal academic homepage of Zhihao Zhu. Research on efficient Vision-Language-Action models, diffusion and flow-based planning, AR-to-diffusion distillation, and autonomous driving." />
<meta name="keywords" content="Zhihao Zhu, Vision-Language-Action, VLA, Autonomous Driving, Diffusion Models, Flow Matching, Motion Planning, Fudan University" />
<meta name="author" content="Zhihao Zhu" />
<meta property="og:title" content="Zhihao Zhu" />
<meta property="og:description" content="Efficient Generative VLA Models for Autonomous Driving" />
<meta property="og:type" content="website" />
```

---

## 十四、响应式和可访问性要求

响应式要求：

- 桌面端：内容宽度控制在 1080px 左右；
- 平板端：卡片布局自动收缩；
- 移动端：全部主要内容变成单列；
- 移动端 Hero 中头像在上，文字在下；
- 移动端 Publication 卡片图片在上，文字在下；
- Navbar 不要挤压变形。

可访问性要求：

- 图片必须有 alt；
- 链接文本要明确；
- button 和 a 标签语义正确；
- 文本颜色对比度足够；
- 支持键盘 Tab 访问；
- section id 和 navbar href 必须对应；
- 页面无明显 console error。

---

## 十五、部署要求

页面需要支持静态部署到 GitHub Pages 或 Vercel。

如果使用 Astro，请确保以下命令可用：

```bash
npm install
npm run dev
npm run build
```

如果部署到 GitHub Pages，需要注意 Astro 的 `base` 配置。如果仓库名是 `username.github.io`，通常不需要额外 base；如果仓库是普通项目名，需要配置 base。

请在 README 中写清楚：

```markdown
## Local Development

npm install
npm run dev

## Build

npm run build
```

---

## 十六、内容准确性要求

非常重要，请严格遵守：

1. 不要编造我的论文；
2. 不要编造我的奖项；
3. 不要编造我的引用数、h-index；
4. 不要编造我的邮箱；
5. 不要编造我的 GitHub；
6. 不要动态请求 Google Scholar；
7. 不要爬取 Google Scholar；
8. 未公开项目必须标注为 `Ongoing Research`；
9. 链接为空时不显示按钮；
10. 图片不存在时显示 placeholder，不要报错。

已知 Google Scholar 链接是：

```text
https://scholar.google.com/citations?user=qE0aPcQAAAAJ&hl=en
```

已知研究方向包括：

```text
Vision-Language-Action Models
Autonomous Driving
Diffusion Models
Flow Matching
Motion Planning
AR-to-Diffusion Distillation
Reinforcement Learning for Planning
```

已知代表项目包括：

```text
WAM-Diff
WAM-Flow
AR-to-Diffusion Distillation
```

---

## 十七、页面最终效果草图

最终页面大致应该长这样：

```text
------------------------------------------------------------
Zhihao Zhu / 朱志浩              About Research Publications Projects ...

[Avatar]   Zhihao Zhu / 朱志浩
           Master Student, Fudan University

           I work on efficient multimodal generative models
           for autonomous driving...

           [Google Scholar] [GitHub] [Email] [CV]

           Vision-Language-Action  Autonomous Driving
           Diffusion Models        Flow Matching

------------------------------------------------------------

About Me

I am a master's student at Fudan University...

------------------------------------------------------------

News

[2026.02] WAM-Flow was accepted to CVPR 2026.
[2026.02] WAM-Flow pretrained models and evaluation resources were released.
[2025.12] WAM-Diff and WAM-Flow were released as preprints.

------------------------------------------------------------

Research Interests

[Efficient VLA Models]       [Autonomous Driving Planning]
[AR-to-Diffusion Distill.]   [RL for Planning]

------------------------------------------------------------

Selected Publications

[teaser] WAM-Flow: Parallel Coarse-to-Fine Motion Planning...
         Yifang Xu*, Jiahao Cui*, Feipeng Cai*, Zhihao Zhu*, ...
         CVPR 2026
         A discrete flow matching framework...
         [Paper] [Code] [Project] [BibTeX]

[teaser] WAM-Diff: A Masked Diffusion VLA Framework...
         Mingwang Xu*, Jiahao Cui*, ..., Zhihao Zhu, ...
         arXiv 2025
         A masked diffusion VLA framework...
         [Paper] [Code] [Project] [BibTeX]

------------------------------------------------------------

Selected Projects

[WAM-Flow] [WAM-Diff] [AR-to-Diffusion Distillation]

------------------------------------------------------------

Experience & Education

Fudan University
South China University of Technology

------------------------------------------------------------

Contact

Email / Google Scholar / GitHub / CV

------------------------------------------------------------
```

---

## 十八、验收标准

实现完成后，请确保：

- 页面可以正常启动；
- 页面可以正常 build；
- 页面包含 Header、Hero、About、News、Research、Publications、Projects、Experience、Contact、Footer；
- Google Scholar 链接正确；
- Publication 中 `Zhihao Zhu` 被加粗；
- 移动端布局正常；
- 图片缺失时不会导致页面崩溃；
- 不动态请求 Google Scholar；
- 不编造邮箱、GitHub、CV、引用数、h-index；
- 页面整体风格简洁、专业、学术；
- 内容数据集中放在 `src/data/` 下；
- 可以部署到 GitHub Pages 或 Vercel；
- README 中包含本地运行和构建说明。

最终效果要像一个适合机器学习 / 计算机视觉 / 自动驾驶方向研究生使用的个人学术主页。
