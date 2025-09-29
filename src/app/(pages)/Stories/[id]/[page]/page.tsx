// app/stories/[id]/[page]/page.tsx
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import Image from "next/image";

import { ReadAloud } from "@/components/Stories/ReadAloud";
import { NavButton } from "@/components/Stories/NavButton";
import { stories } from "../../data";
import { Story, StoryPage as StoryPageType } from "../../types";
import { Particles } from "@/components/ui/particles";

const StoryPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Find the story based on the ID from params
  const story: Story | undefined = stories.find(
    (s) => s.id === (params.id as string)
  );

  // Parse page number and find the current page
  const pageNumber = parseInt(params.page as string, 10);

  // Validate story and page number before using hooks
  const isValidStory = !!story;
  const isValidPageNumber =
    !isNaN(pageNumber) &&
    pageNumber >= 1 &&
    story &&
    pageNumber <= story.pages.length;

  // Get page only if valid
  const page: StoryPageType | undefined =
    isValidStory && isValidPageNumber ? story.pages[pageNumber - 1] : undefined;

  // Function to preload images for current and next page
  const preloadImages = useCallback(() => {
    if (!page || !story) return;

    setLoading(true);
    const imageUrlsToPreload: string[] = [];

    // Current page illustration
    imageUrlsToPreload.push(page.illustration.image);

    // Next page illustration (if exists)
    if (pageNumber < story.pages.length) {
      const nextPage = story.pages[pageNumber];
      imageUrlsToPreload.push(nextPage.illustration.image);
    }

    let loadedCount = 0;
    const totalToLoad = imageUrlsToPreload.length;

    if (totalToLoad === 0) {
      setLoading(false);
      return;
    }

    imageUrlsToPreload.forEach((url) => {
      const img = new window.Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalToLoad) {
          setLoading(false);
        }
      };
    });
  }, [page, pageNumber, story]);

  useEffect(() => {
    if (page && story) {
      preloadImages();
    } else {
      setLoading(false);
    }
  }, [preloadImages, page, story]);

  // Navigation handlers
  const goToPreviousPage = () => {
    if (pageNumber > 1 && story) {
      router.push(`/Stories/${story.id}/${pageNumber - 1}`);
    }
  };

  const goToNextPage = () => {
    if (story && pageNumber < story.pages.length) {
      router.push(`/Stories/${story.id}/${pageNumber + 1}`);
    }
  };

  // Return notFound if story or page is invalid
  if (!isValidStory || !isValidPageNumber || !page) {
    return notFound();
  }

  // The main page always has a gradient background.
  // The specific page illustrations and content are on the white card.
  const gradientBackgroundClass = `bg-gradient-to-br ${
    pageNumber % 2 === 0
      ? "from-black-900 to-gray-800" // Deep blues and purples
      : "from-slate-900 to-zinc-800" // Deep indigos and dark reds
  }`; // Dynamic gradient for a cosmic/dark theme

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${gradientBackgroundClass} text-purple-800 text-2xl font-bold`}
      >
        <span className="animate-pulse">Loading adventure...</span>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 transition-all duration-500 ease-in-out font-sans ${gradientBackgroundClass} relative`}
    >
      <Particles className="absolute inset-0 z-0" />
      {/* Main Story Card */}
      <div
        className={`
          relative z-10 w-full max-w-4xl mt-4 sm:mt-8 p-6 sm:p-8 md:p-10
          bg-black bg-opacity-95 rounded-3xl shadow-2xl
          flex flex-col
          border-4 border-yellow-400
          transform transition-transform duration-300 ease-in-out
          md:flex-row-reverse md:gap-8 // Illustration is always present, so this layout can be default on md+
        `}
      >
        <Particles className="absolute inset-0 z-0" />
        {/* Page Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 flex-shrink-0">
          <Image
            src={page.illustration.image}
            alt={
              page.illustration.description ||
              `Illustration for ${story.title} - Page ${pageNumber}`
            }
            width={600}
            height={600}
            layout="responsive"
            objectFit="contain"
            className="rounded-2xl border-4 border-orange-300 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-700 mb-4 sm:mb-6 leading-tight font-display tracking-wide">
            {page.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 md:mb-10 whitespace-pre-line leading-relaxed text-left">
            {page.text}
          </p>

          {/* Read Aloud */}

          <div className="mb-6 sm:mb-8">
            <ReadAloud text={page.text} audioUrl={page.audioUrl} />
          </div>
        </div>
      </div>
      <Particles className="absolute inset-0 z-0" />
      {/* Navigation and Page Indicator */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mt-6 sm:mt-8 mb-4">
        <div className="flex justify-between w-full gap-4 px-4">
          <NavButton
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="bg-purple-500 hover:bg-purple-600 focus:ring-purple-300"
          >
            <span className="mr-2 text-2xl">👈</span> Previous
          </NavButton>

          <NavButton
            onClick={goToNextPage}
            disabled={pageNumber >= story.pages.length}
            className="bg-green-500 hover:bg-green-600 focus:ring-green-300"
          >
            Next <span className="ml-2 text-2xl">👉</span>
          </NavButton>
        </div>

        <div className="mt-4 text-xl font-bold text-gray-100 bg-black bg-opacity-70 px-4 py-2 rounded-full shadow-md border border-gray-300">
          Page {pageNumber} of {story.pages.length}
        </div>
      </div>
      <Particles className="absolute inset-0 z-0" />
      {/* Explore More! Section (PDF & Video) */}
      {(story.pdfUrl || story.videoUrl) && (
        <div className="relative z-10 mt-8 mb-12 w-full max-w-5xl text-center p-4">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-8 font-display">
            🚀 Explore More!
          </h2>

          <div className="flex flex-col justify-center items-stretch gap-8">
            {story.pdfUrl && (
              <div className="flex-1 bg-black bg-opacity-95 p-6 rounded-3xl shadow-2xl border-4 border-red-400 flex flex-col justify-between items-center text-center">
                <h3 className="text-3xl font-bold text-red-700 mb-4 font-display">
                  📖 Storybook PDF
                </h3>
                <p className="text-gray-100 mb-6 text-lg sm:text-xl">
                  Download or view the complete story as a beautiful PDF to read
                  anywhere!
                </p>
                <div className="relative w-full max-w-5xl h-[500px] bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300 shadow-inner mb-6">
                  <iframe
                    src={story.pdfUrl}
                    title={`${story.title} PDF`}
                    className="absolute inset-0 w-full h-full border-none"
                  >
                    Your browser does not support PDFs. You can download it
                    below.
                  </iframe>
                </div>
                <a
                  href={story.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-xl shadow-md transition-transform active:scale-95 whitespace-nowrap"
                >
                  <span className="mr-3 text-2xl">⬇️</span> Download PDF
                </a>
              </div>
            )}

            {story.videoUrl && (
              <div className="flex-1 bg-black bg-opacity-95 p-6 rounded-3xl shadow-2xl border-4 border-blue-400 flex flex-col justify-between items-center text-center">
                <h3 className="text-3xl font-bold text-blue-700 mb-4 font-display">
                  🎬 Story Video
                </h3>
                <p className="text-gray-100 mb-6 text-lg sm:text-xl">
                  Watch an animated version or a special message about the
                  story!
                </p>
                <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden border-2 border-gray-300 shadow-inner mb-6 h-[500px]">
                  <iframe
                    src={`${story.videoUrl}?rel=0&modestbranding=1&playsinline=1`}
                    title={`${story.title} Video`}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
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
            )}
          </div>
        </div>
      )}
      <Particles className="absolute inset-0 z-0" />
    </div>
  );
};

export default StoryPage;
