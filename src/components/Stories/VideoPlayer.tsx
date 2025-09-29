import React, { useState } from "react";
import { Story } from "../../app/(pages)/Stories/types";

interface VideoPlayerProps {
  story: Story;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ story }) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  // Add safety check for videoUrl
  if (!story.videoUrl) {
    return null;
  }

  const handleThumbnailClick = () => {
    setHasInteracted(true);
  };

  const getVideoSrc = () => {
    // Always return the same URL without autoplay
    // Let users click the native YouTube play button
    if (
      story.videoUrl?.includes("youtube.com") ||
      story.videoUrl?.includes("youtu.be")
    ) {
      return `${story.videoUrl}?rel=0&modestbranding=1&playsinline=1`;
    }
    return story.videoUrl;
  };

  return (
    <div className="flex-1 bg-black bg-opacity-95 p-6 rounded-3xl shadow-2xl border-4 border-blue-400 flex flex-col justify-between items-center text-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4 font-display">
        🎬 Story Video
      </h3>
      <p className="text-gray-100 mb-6 text-lg sm:text-xl">
        Watch an animated version or a special message about the story!
      </p>

      {/* Video Player */}
      <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden border-2 border-gray-300 shadow-inner mb-6">
        {!hasInteracted && (
          <div
            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 cursor-pointer"
            onClick={handleThumbnailClick}
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-xl font-bold">Click to load video</p>
              <p className="text-sm text-gray-300 mt-2">
                Then click the play button to start
              </p>
            </div>
          </div>
        )}

        {hasInteracted && (
          <iframe
            src={getVideoSrc()}
            title={`${story.title} Video`}
            className="absolute inset-0 w-full h-full border-none"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* YouTube Link */}
      {story.videoUrl.includes("youtube.com") && (
        <a
          href={story.videoUrl.replace("/embed/", "/watch?v=")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full text-xl shadow-md transition-transform active:scale-95 whitespace-nowrap"
        >
          <span className="mr-3 text-2xl">▶️</span> Watch on YouTube
        </a>
      )}
    </div>
  );
};
