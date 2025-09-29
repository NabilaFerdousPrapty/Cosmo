// app/stories/types.ts
export interface StoryPage {
  id: number;
  title: string;
  text: string;
  narrationTone: string;
  illustration: {
    description: string;
    image: string;
  };
  animation?: string[];
  audioUrl?: string;
}

export interface Story {
  id: string; // e.g. "solar-diary"
  title: string; // e.g. "The Diary of a Solar Storm"
  description: string;
  coverImage: string;
  pages: StoryPage[];
  pdfUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
}
