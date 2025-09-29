import React from "react";
import { Story } from "../../app/(pages)/Stories/types";

interface PDFViewerProps {
  story: Story;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ story }) => {
  // Add a safety check to ensure pdfUrl exists
  if (!story.pdfUrl) {
    return null;
  }

  return (
    <div className="flex-1 bg-black bg-opacity-95 p-6 rounded-3xl shadow-2xl border-4 border-red-400 flex flex-col justify-between items-center text-center">
      <h3 className="text-3xl font-bold text-red-700 mb-4 font-display">
        📖 Storybook PDF
      </h3>
      <p className="text-gray-100 mb-6 text-lg sm:text-xl">
        Download or view the complete story as a beautiful PDF to read anywhere!
      </p>
      <div className="relative w-full max-w-5xl h-[500px] bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300 shadow-inner mb-6">
        <iframe
          src={story.pdfUrl}
          title={`${story.title} PDF`}
          className="absolute inset-0 w-full h-full border-none"
        >
          Your browser does not support PDFs. You can download it below.
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
  );
};
