"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";

import { ReadAloud } from "@/components/Stories/ReadAloud";
import { stories } from "../../data";

const StoryPage = () => {
  const params = useParams();

  const story = stories.find((s) => s.id === (params.id as string));
  if (!story) return notFound();

  const pageNumber = parseInt(params.page as string);
  const page = story.pages.find((p) => p.id === pageNumber);
  if (!page) return notFound();

  return (
    <div className="p-10 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">{page.title}</h1>
      <img
        src={page.illustration.image}
        alt={page.illustration.description}
        className="w-full max-h-96 object-contain mx-auto mb-6"
      />
      <p className="text-lg text-white mb-6 whitespace-pre-line">{page.text}</p>

      {/* Read Aloud */}
      <ReadAloud text={page.text} audioUrl={page?.audioUrl} />

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {pageNumber > 1 ? (
          <a
            href={`/stories/${story.id}/${pageNumber - 1}`}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            ⬅️ Previous
          </a>
        ) : (
          <div />
        )}
        {pageNumber < story.pages.length && (
          <a
            href={`/stories/${story.id}/${pageNumber + 1}`}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Next ➡️
          </a>
        )}
      </div>
    </div>
  );
};

export default StoryPage;
