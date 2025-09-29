// app/stories/[id]/[page]/page.tsx
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import { stories } from "../../data";
import { Story, StoryPage as StoryPageType } from "../../types";
import { StoryLoading } from "@/components/Stories/StoryLoading";
import { StoryLayout } from "@/components/Stories/StoryLayout";
import { StoryContent } from "@/components/Stories/StoryContent";
import { StoryNavigation } from "@/components/Stories/StoryNavigation";
import { ExploreMoreSection } from "@/components/Stories/ExploreMoreSection";

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

  if (loading) {
    return <StoryLoading pageNumber={pageNumber} />;
  }

  return (
    <StoryLayout pageNumber={pageNumber}>
      <StoryContent story={story} page={page} pageNumber={pageNumber} />

      <StoryNavigation
        pageNumber={pageNumber}
        totalPages={story.pages.length}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
      />

      <ExploreMoreSection story={story} />
    </StoryLayout>
  );
};

export default StoryPage;
