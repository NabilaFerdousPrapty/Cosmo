import Link from "next/link";
import { stories } from "./data";
import { StoryCard } from "@/components/Stories/StoryCard";
import { Particles } from "@/components/ui/particles";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-black p-6 relative">
      <Particles className="absolute inset-0" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mt-4 mb-5">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-400 bg-clip-text text-transparent my-1.5">
            Learn with Solar Stories
          </h1>
          <p className="text-white text-xl my-1">
            Learn with fun about Space and its Wonders
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/Stories/${story.id}/1`}
              className="block"
            >
              <StoryCard
                coverImage={story.coverImage}
                title={story.title}
                description={story.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
