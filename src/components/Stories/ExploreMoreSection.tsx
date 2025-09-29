import React from "react";
import { Particles } from "@/components/ui/particles";
import { Story } from "../../app/(pages)/Stories/types";
import { PDFViewer } from "./PDFViewer";
import { VideoPlayer } from "./VideoPlayer";

interface ExploreMoreSectionProps {
  story: Story;
}

export const ExploreMoreSection: React.FC<ExploreMoreSectionProps> = ({
  story,
}) => {
  // Check if either pdfUrl or videoUrl exists
  const hasPDF = !!story.pdfUrl;
  const hasVideo = !!story.videoUrl;

  if (!hasPDF && !hasVideo) {
    return null;
  }

  return (
    <div className="relative z-10 mt-8 mb-12 w-full max-w-5xl text-center p-4">
      <Particles className="absolute inset-0 z-0" />
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 font-display">
        🚀 Explore More!
      </h2>

      <div className="flex flex-col justify-center items-stretch gap-8">
        {hasPDF && <PDFViewer story={story} />}
        {hasVideo && <VideoPlayer story={story} />}
      </div>
    </div>
  );
};
