export interface ResearchInterest {
  title: string;
  description: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    title: "Efficient VLA Models",
    description:
      "Parallel generation, block diffusion, discrete diffusion, and efficient decoding for Vision-Language-Action models.",
  },
  {
    title: "Autonomous Driving Planning",
    description:
      "Trajectory-as-language, closed-loop planning, NAVSIM / Bench2Drive evaluation, and safety-critical decision making.",
  },
  {
    title: "AR-to-Diffusion Distillation",
    description:
      "Progressive block-wise adaptation, block-wise distillation, and cross-scale distillation from autoregressive VLAs to diffusion models.",
  },
  {
    title: "Reinforcement Learning for Planning",
    description:
      "GRPO, PDMS reward optimization, simulator-guided feedback, and safe trajectory alignment.",
  },
];
