export interface PublicationLink {
  label: "Paper" | "Code" | "Model" | "BibTeX";
  href: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  description: string;
  links: PublicationLink[];
  featured?: boolean;
  metrics?: string[];
}

const validHref = (href: string) =>
  href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("/");

export const publications: Publication[] = [
  {
    title: "WAM-Diff2: Hierarchical AR-to-Diffusion Distillation for Highly Efficient Autonomous Driving VLA",
    authors: "Zhihao Zhu*, Hanlin Shang*, Mingwang Xu*, Feipeng Cai*, Zhuolin He, Yaoyi Li, Jianhua Han, Hang Xu, Siyu Zhu†",
    venue: "arXiv 2026",
    description: "WAM-Diff2 converts a pretrained autoregressive driving generalist into a parallel discrete diffusion VLA through progressive block-wise adaptation, block-wise distillation, and model-wise cross-scale distillation—preserving multi-task capabilities while improving inference efficiency.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2608.01035" },
      { label: "Code", href: "https://github.com/fudan-generative-vision/WAM-Diff2" },
      { label: "Model", href: "https://huggingface.co/fudan-generative-ai/WAM-Diff2" },
      { label: "BibTeX", href: "/bib/wam-diff2.bib" },
    ],
    featured: true,
    metrics: ["2.8× decoding speedup", "Up to 15.1× system-level speedup"],
  },
  {
    title: "WAM-Flow: Parallel Coarse-to-Fine Motion Planning via Discrete Flow Matching for Autonomous Driving",
    authors: "Yifang Xu*, Jiahao Cui*, Feipeng Cai*, Zhihao Zhu*, Hanlin Shang, Shan Luan, Mingwang Xu, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu",
    venue: "CVPR 2026",
    description: "A discrete flow-matching VLA that replaces sequential trajectory decoding with parallel, bidirectional coarse-to-fine refinement and simulator-guided alignment.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2512.06112" },
      { label: "Code", href: "https://github.com/fudan-generative-vision/WAM-Flow" },
      { label: "Model", href: "https://huggingface.co/fudan-generative-ai/WAM-Flow" },
      { label: "BibTeX", href: "/bib/wam-flow.bib" },
    ],
  },
  {
    title: "WAM-Diff: A Masked Diffusion VLA Framework with MoE and Online Reinforcement Learning for Autonomous Driving",
    authors: "Mingwang Xu*, Jiahao Cui*, Feipeng Cai*, Hanlin Shang*, Zhihao Zhu, Shan Luan, Yifang Xu, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu",
    venue: "arXiv 2025",
    description: "A masked diffusion VLA for flexible non-causal trajectory decoding, combining sparse MoE scaling with online reinforcement learning for closed-loop planning.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2512.11872" },
      { label: "Code", href: "https://github.com/fudan-generative-vision/WAM-Diff" },
      { label: "Model", href: "https://huggingface.co/fudan-generative-ai/WAM-Diff" },
      { label: "BibTeX", href: "/bib/wam-diff.bib" },
    ],
  },
];

for (const publication of publications) {
  for (const link of publication.links) {
    if (!validHref(link.href) || link.href.includes("TODO") || link.href === "#") {
      throw new Error(`Invalid publication link: ${publication.title} / ${link.label}`);
    }
  }
}
