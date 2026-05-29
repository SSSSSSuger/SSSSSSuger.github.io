export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    code?: string;
    paper?: string;
  };
}

export const projects: Project[] = [
  {
    name: "WAM-Flow",
    tagline: "Parallel coarse-to-fine motion planning via discrete flow matching.",
    description:
      "A VLA-based planning framework that casts future trajectory generation as discrete flow matching over structured trajectory tokens.",
    tags: ["VLA", "Flow Matching", "Autonomous Driving", "Planning"],
    links: {
      code: "https://github.com/fudan-generative-vision/WAM-Flow",
      paper: "https://arxiv.org/abs/2512.06112",
    },
  },
  {
    name: "WAM-Diff",
    tagline: "Masked diffusion VLA framework for autonomous driving.",
    description:
      "A diffusion-based VLA framework that iteratively refines discrete future trajectory tokens using masked denoising and reinforcement learning.",
    tags: ["Diffusion", "VLA", "MoE", "RL"],
    links: {
      code: "https://github.com/fudan-generative-vision/WAM-Diff",
      paper: "https://arxiv.org/abs/2512.11872",
    },
  },
  {
    name: "AR-to-Diffusion Distillation",
    tagline: "Turning autoregressive VLAs into efficient parallel generative models.",
    description:
      "A research line on progressive block-wise adaptation, block-wise teacher-student distillation, and cross-scale diffusion model transfer.",
    tags: ["Distillation", "Block Diffusion", "Efficient Decoding", "VLA"],
    links: {},
  },
];
