export interface NewsItem {
  date: string;
  text: string;
}

export const news: NewsItem[] = [
  { date: "2026.08", text: "WAM-Diff2 was released as a preprint." },
  { date: "2026.02", text: "WAM-Flow was accepted to CVPR 2026." },
  { date: "2025.12", text: "WAM-Diff and WAM-Flow were released as preprints." },
];
