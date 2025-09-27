"use client";
import React from "react";
import { getSolarFlares } from "../../../lib/nasaDONKIApi";
import { Particles } from "../ui/particles";
const Donki = () => {
  interface SolarFlare {
    flrID: string;
    classType: string;
    peakTime: string;
    sourceLocation: string;
    activeRegionNum: number;
    link: string;
  }

  const [flares, setFlares] = React.useState<SolarFlare[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Get today's date
  const today = new Date();
  const endDate = today.toISOString().split("T")[0]; // YYYY-MM-DD

  // Get date 1 month ago
  const lastMonth = new Date();
  lastMonth.setMonth(today.getMonth() - 1);
  const startDate = lastMonth.toISOString().split("T")[0];

  // Fetch NASA DONKI data
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSolarFlares(startDate, endDate);
        setFlares(data);
      } catch (err) {
        console.error("Failed to fetch solar flares:", err);
        setError("Failed to load solar flare data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [startDate, endDate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Particles */}
      <Particles className="absolute inset-0 z-0" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
            Solar Flare Activity
          </h1>
          <p className="mt-3 text-lg text-gray-400 sm:text-xl">
            Recent data from NASA&apos;s DONKI archive
          </p>
          <p className="mt-2 text-md text-gray-500">
            Reporting Period:{" "}
            <span className="font-semibold text-gray-300">{startDate}</span> to{" "}
            <span className="font-semibold text-gray-300">{endDate}</span>
          </p>
        </header>

        <section className="rounded-xl border border-gray-800 bg-gray-950/50 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
              <p className="ml-3 text-lg text-gray-400">
                Loading solar flares...
              </p>
            </div>
          ) : error ? (
            <div className="rounded-md border border-red-700 bg-red-900/30 p-4 text-red-300">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          ) : flares.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p className="text-xl font-medium mb-2">
                No Solar Flares Detected
              </p>
              <p>During the specified period, no solar flares were reported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {flares.map((flare) => (
                <div
                  key={flare.flrID}
                  className="rounded-lg border border-gray-700 bg-gray-900/60 p-5 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-600 hover:bg-gray-800/70"
                >
                  <h3 className="mb-2 text-xl font-semibold text-blue-400">
                    Flare ID: {flare.flrID}
                  </h3>
                  <div className="space-y-1 text-gray-300">
                    <p>
                      <span className="font-medium text-gray-200">Class:</span>{" "}
                      {flare.classType}
                    </p>
                    <p>
                      <span className="font-medium text-gray-200">Peak:</span>{" "}
                      {new Date(flare.peakTime).toLocaleString()}
                    </p>
                    {flare.sourceLocation && (
                      <p>
                        <span className="font-medium text-gray-200">
                          Location:
                        </span>{" "}
                        {flare.sourceLocation}
                      </p>
                    )}
                    {flare.activeRegionNum !== -1 && ( // Assuming -1 means no active region
                      <p>
                        <span className="font-medium text-gray-200">
                          Region:
                        </span>{" "}
                        {flare.activeRegionNum}
                      </p>
                    )}
                  </div>
                  <div className="mt-4">
                    <a
                      href={flare.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mr-1 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      NASA Report
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Donki;
