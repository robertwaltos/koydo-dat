import { EXAM_CONFIG } from "@/lib/act/config";

export interface CrossSellApp {
  slug: string;
  name: string;
  reason: string;
  category: string;
  url?: string;
}

const CROSS_SELL_APPS: CrossSellApp[] = [
  {
    slug: "sat",
    name: "SAT",
    reason: "Build faster reading and quantitative fluency.",
    category: "admissions",
  },
  {
    slug: "mcat",
    name: "MCAT",
    reason: "Stretch science reasoning with higher-volume passage work.",
    category: "admissions",
  },
  {
    slug: "gre",
    name: "GRE",
    reason: "Sharpen verbal precision and data interpretation.",
    category: "admissions",
  },
];

export function getCrossSellApps(category: string): CrossSellApp[] {
  return CROSS_SELL_APPS.filter((app) => app.category === category && app.slug !== EXAM_CONFIG.slug);
}
