// components/Stories/StoryAnimation.tsx
import React, { useEffect, useState } from "react";

interface StoryAnimationProps {
  animations?: string[]; // Array of animation names
  isVisible: boolean; // Control visibility based on parent component
  className?: string; // Additional classes for positioning/sizing
}

const animationClasses: { [key: string]: string } = {
  "phone-ring": "animate-phoneRing", // Defined in globals.css
  "thought-bubble": "animate-fadeInScaleUp", // Defined in globals.css
  // Add more animations here
};

export const StoryAnimation: React.FC<StoryAnimationProps> = ({
  animations,
  isVisible,
  className,
}) => {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible && animations && animations.length > 0) {
      // For simplicity, just pick the first animation.
      // You could add logic here for sequencing or randomizing.
      setActiveAnimation(animations[0]);
      // Remove animation after a short delay if it's meant to be transient
      const timer = setTimeout(() => {
        setActiveAnimation(null);
      }, 3000); // Animation plays for 3 seconds
      return () => clearTimeout(timer);
    } else {
      setActiveAnimation(null);
    }
  }, [animations, isVisible]);

  if (!isVisible || !activeAnimation) return null;

  // Render different visual elements based on the animation name
  let animationContent = null;
  switch (activeAnimation) {
    case "phone-ring":
      animationContent = (
        <span
          role="img"
          aria-label="phone ringing"
          className="text-4xl animate-wiggle"
        >
          📞
        </span>
      );
      break;
    case "thought-bubble":
      animationContent = (
        <span
          role="img"
          aria-label="thought bubble"
          className="text-4xl animate-fadeInScaleUp"
        >
          💭
        </span>
      );
      break;
    default:
      animationContent = null;
  }

  if (!animationContent) return null;

  return (
    <div
      className={`absolute top-4 right-4 z-20 // Default positioning, can be overridden by className
                  bg-white rounded-full p-3 shadow-lg border-2 border-purple-400
                  flex items-center justify-center transition-opacity duration-300
                  ${className || ""}`}
    >
      {animationContent}
    </div>
  );
};
