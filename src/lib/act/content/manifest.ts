// Auto-generated content manifest for Dat
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "dat",
  examName: "Dat",
  totalQuestions: 2300,
  category: "admissions",
  topics: [
  {
    id: "verbal",
    domain: "verbal",
    title: "Verbal",
    icon: "📖",
    color: "#1E40AF",
    questionTarget: 900,
    activityTypes: ["multiple_choice", "reading_passage", "cloze_deletion"],
  },
  {
    id: "quantitative",
    domain: "quantitative",
    title: "Quantitative",
    icon: "🔢",
    color: "#7C3AED",
    questionTarget: 900,
    activityTypes: ["multiple_choice", "numeric_input", "whiteboard"],
  },
  {
    id: "writing",
    domain: "writing",
    title: "Writing",
    icon: "✍️",
    color: "#D97706",
    questionTarget: 500,
    activityTypes: ["essay"],
  }
  ],
};
