export interface PublicationLinks {
  paper?: string;
  code?: string;
  project?: string;
  bibtex?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string;
  image?: string;
  links: PublicationLinks;
  selected?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "WAM-Flow: Parallel Coarse-to-Fine Motion Planning via Discrete Flow Matching for Autonomous Driving",
    authors:
      "Yifang Xu*, Jiahao Cui*, Feipeng Cai*, Zhihao Zhu*, Hanlin Shang, Shan Luan, Mingwang Xu, Neng Zhang, Yaoyi Li, Jia Cai, Siyu Zhu",
    venue: "CVPR 2026",
    year: "2026",
    description:
      "A discrete flow matching framework for parallel coarse-to-fine motion planning in autonomous driving, enabling efficient bidirectional trajectory refinement with simulator-guided alignment.",
    image: "/papers/wam-flow.jpg",
    links: {
      paper: "https://arxiv.org/abs/2512.06112",
      code: "https://github.com/fudan-generative-vision/WAM-Flow",
      project: "https://github.com/fudan-generative-vision/WAM-Flow",
      bibtex: "#",
    },
    selected: true,
  },
  {
    title:
      "WAM-Diff: A Masked Diffusion VLA Framework with MoE and Online Reinforcement Learning for Autonomous Driving",
    authors:
      "Mingwang Xu*, Jiahao Cui*, Feipeng Cai*, Hanlin Shang*, Zhihao Zhu, Shan Luan, Yifang Xu, Neng Zhang, Yaoyi Li, Jia Cai, et al.",
    venue: "arXiv 2025",
    year: "2025",
    description:
      "A masked diffusion Vision-Language-Action framework for autonomous driving, integrating non-causal trajectory decoding, MoE scaling, and online reinforcement learning for closed-loop planning.",
    image: "/papers/wam-diff.jpg",
    links: {
      paper: "https://arxiv.org/abs/2512.11872",
      code: "https://github.com/fudan-generative-vision/WAM-Diff",
      project: "https://github.com/fudan-generative-vision/WAM-Diff",
      bibtex: "#",
    },
    selected: true,
  },
  {
    title:
      "Hierarchical AR-to-Diffusion Distillation for Efficient Autonomous Driving VLAs",
    authors: "Zhihao Zhu, et al.",
    venue: "Ongoing Research",
    year: "2026",
    description:
      "A research direction on transforming pretrained autoregressive VLAs into efficient block diffusion models through progressive block-wise adaptation, block-wise distillation, and cross-scale model distillation.",
    image: "/papers/ar-to-diffusion.jpg",
    links: {},
    selected: false,
  },
];
