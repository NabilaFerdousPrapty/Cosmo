import Link from "next/link";
import { stories } from "./data";

export default function StoriesPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">
        📚 Our Stories
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Cover */}
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-56 object-cover"
            />

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {story.title}
                </h2>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/Stories/${story.id}/1`}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                >
                  📖 Read
                </Link>
                <a
                  href={story.pdfUrl}
                  download
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                  ⬇️ PDF
                </a>
                <a
                  href={story.videoUrl}
                  target="_blank"
                  className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                >
                  🎬 Video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
