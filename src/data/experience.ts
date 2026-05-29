export interface ExperienceItem {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "Master Student",
    institution: "Fudan University",
    location: "Shanghai, China",
    period: "2025 - Present",
    description:
      "Research on multimodal generative models, Vision-Language-Action models, and autonomous driving.",
  },
  {
    title: "B.Eng. / B.S. in Information Management and Information Systems",
    institution: "South China University of Technology",
    location: "Guangzhou, China",
    period: "2019 - 2023",
    description: "Undergraduate study in the School of Mathematics.",
  },
];
