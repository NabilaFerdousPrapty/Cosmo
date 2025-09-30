"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface StoryCardProps {
  coverImage: string;
  title: string;
  description: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  coverImage,
  title,
  description,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 relative group/card w-auto sm:w-[22rem] h-auto">
        {/* Cover */}
        <CardItem translateZ="60" className="w-full">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-80 object-cover rounded-t-xl group-hover/card:shadow-xl"
          />
        </CardItem>

        {/* Content */}
        <div className="p-5">
          <CardItem
            translateZ="60"
            as="h3"
            className="text-lg font-semibold text-white mb-2 line-clamp-2"
          >
            {title.slice(0, 20)}...
          </CardItem>
          <CardItem
            translateZ="70"
            as="p"
            className="text-gray-400 text-sm line-clamp-2"
          >
            {description.slice(0, 40)}....
          </CardItem>
        </div>

        {/* Footer buttons (optional) */}
        {/* Footer buttons */}
        <div className="flex justify-between items-center p-5 pt-0">
          <CardItem
            translateZ={20}
            as="div" // was "a"
            className="px-3 py-1 rounded-lg text-xs font-medium text-yellow-400 hover:text-yellow-300 transition"
          >
            Read More →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-3 py-1 rounded-lg bg-yellow-500 text-black text-xs font-bold hover:bg-yellow-400 transition"
          >
            Save
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
