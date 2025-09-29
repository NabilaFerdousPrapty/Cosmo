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
        <div className="text-center mb-0">
          <h1 className="text-4xl font-bold text-white mb-2">Solar Stories</h1>
          <p className="text-white text-xl my-1">
            Learn with fun about Space and its Wonders
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
