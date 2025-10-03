"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SohoImage {
  name: string;
  url: string;
}

export default function SohoStory() {
  const [availableImages, setAvailableImages] = useState<SohoImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageLoadError, setImageLoadError] = useState<boolean>(false);

  // Fetch latest images from our API
  const fetchImages = async () => {
    try {
      setError(null);
      setImageLoadError(false);

      // Add cache busting to the API request too
      const res = await fetch(`/api/soho/latest-images?ts=${Date.now()}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch solar images: ${res.status}`);
      }

      const data: SohoImage[] = await res.json();
      setAvailableImages(data);
      setCurrentIndex(0); // Reset to first image when we get new data
    } catch (err) {
      console.error("Failed to fetch images from API", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();

    // Refresh data every 10 minutes
    const dataInterval = setInterval(fetchImages, 10 * 60 * 1000);
    return () => clearInterval(dataInterval);
  }, []);

  // Rotate images every 30 seconds
  useEffect(() => {
    if (availableImages.length === 0) return;

    const imageInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % availableImages.length;
        setImageLoadError(false); // Reset error state for new image
        return nextIndex;
      });
    }, 30 * 1000); // 30 seconds for testing

    return () => clearInterval(imageInterval);
  }, [availableImages]);

  // Manual refresh function
  const handleRefresh = () => {
    setLoading(true);
    fetchImages();
  };

  // Manual next image function
  const handleNextImage = () => {
    if (availableImages.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % availableImages.length);
    setImageLoadError(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-200 text-xl">
          Loading solar images from SOHO observatory...
        </p>
      </main>
    );
  }

  const currentImage = availableImages[currentIndex];

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <div className="flex flex-col justify-between items-center w-full max-w-4xl mb-6">
        <h1 className="text-4xl font-bold text-yellow-300 text-center flex-1">
          🌌 Solara&apos;s CME Adventure! 🌌
        </h1>
      </div>

      <p className="text-lg text-gray-200 mb-4 max-w-2xl text-center">
        High above Earth, the Sun, Solara, sometimes sends out enormous bursts
        of energy called Coronal Mass Ejections (CMEs)! Scientists watch them
        using the SOHO telescope.
      </p>

      <div className="mb-4 relative">
        {currentImage && !imageLoadError ? (
          <Image
            key={currentImage.url} // This forces re-render when URL changes
            src={currentImage.url}
            alt={`Latest SOHO image: ${currentImage.name}`}
            width={600}
            height={600}
            className="rounded-2xl border-4 border-yellow-500 shadow-2xl"
            priority
            onError={(e) => {
              console.error(`Failed to load image: ${currentImage.url}`);
              setImageLoadError(true);
            }}
            onLoad={() => setImageLoadError(false)}
          />
        ) : (
          <div className="w-[600px] h-[600px] rounded-2xl border-4 border-red-500 flex items-center justify-center bg-gray-800">
            <p className="text-red-400 text-xl">Failed to load image</p>
          </div>
        )}

        {/* Image indicator dots */}
        {availableImages.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {availableImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setImageLoadError(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-yellow-500" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleNextImage}
          disabled={availableImages.length <= 1}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          Next Image ⏭️
        </button>

        <div className="text-gray-400">
          {currentImage ? (
            <>
              <strong>{currentImage.name}</strong>
              <span className="ml-2">
                ({currentIndex + 1} of {availableImages.length})
              </span>
            </>
          ) : (
            "No images available"
          )}
        </div>
      </div>

      <p className="text-gray-200 max-w-2xl text-center mb-4">
        🌟 Look at Solara&apos;s latest fiery eruption captured by{" "}
        <strong>{currentImage?.name || "SOHO"}</strong>! Sometimes these CMEs
        can reach Earth in just a couple of days, creating magical auroras near
        the poles. Keep watching, young explorers! 🚀
      </p>

      {error && (
        <div className="text-orange-400 text-sm mt-2 text-center">
          Note: {error} - Showing available images
        </div>
      )}
    </main>
  );
}
