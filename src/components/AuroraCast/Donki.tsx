"use client";
import React from "react";
import { getSolarFlares } from "../../../lib/nasaDONKIApi";
import { Particles } from "../ui/particles";

// Sun icon component
const SunIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-6 w-6 text-yellow-400 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M1a2 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.06l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.243 18.894a.75.75 0 101.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18zM5.007 17.243a.75.75 0 00-1.061 1.06l1.591 1.59a.75.75 0 001.06-1.06l-1.59-1.591zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.166 5.007a.75.75 0 00-1.06-1.061l-1.591 1.591a.75.75 0 001.061 1.06l1.59-1.591z"
      clipRule="evenodd"
    />
  </svg>
);

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
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");

  // Initialize with default dates (last month to today)
  React.useEffect(() => {
    const today = new Date();
    const defaultEndDate = today.toISOString().split("T")[0];

    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    const defaultStartDate = lastMonth.toISOString().split("T")[0];

    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
  }, []);

  // Format date as "X days ago"
  const formatDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  // Convert location to more readable format (mock conversion)
  const formatLocation = (location: string) => {
    if (!location) return "Unknown location";

    // Mock conversion - in a real app, you'd use actual coordinate conversion
    const randomDistance = Math.floor(Math.random() * 50000) + 1000;
    const randomDirection = ["north", "south", "east", "west"][
      Math.floor(Math.random() * 4)
    ];

    return `${randomDistance.toLocaleString()} km ${randomDirection}`;
  };

  // Fetch NASA DONKI data
  React.useEffect(() => {
    if (!startDate || !endDate) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSolarFlares(startDate, endDate);
        setFlares(data);
      } catch (err) {
        console.error("Failed to fetch solar flares:", err);
        setError(
          "Oops! Something went wrong getting the sun's info. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [startDate, endDate]);

  const getClassEmoji = (classType: string) => {
    if (classType.startsWith("X")) return "💥";
    if (classType.startsWith("M")) return "🔥";
    if (classType.startsWith("C")) return "☀️";
    return "✨";
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Particles className="absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="flex items-center justify-center text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text">
            <SunIcon className="mr-3 h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
            Super Sun Flares!
            <SunIcon className="ml-3 h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
          </h1>
          <p className="mt-3 text-lg font-medium text-yellow-300 sm:text-xl">
            See what our big star has been up to!
          </p>
        </header>

        {/* Date Range Selector */}
        <section className="mb-8 rounded-xl border border-yellow-700 bg-yellow-950/20 p-6 shadow-2xl backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-yellow-300 text-center">
            Choose Your Time Range
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col">
              <label
                htmlFor="startDate"
                className="mb-2 text-yellow-200 font-medium"
              >
                From Date:
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="px-4 py-2 rounded-lg bg-yellow-900/30 border border-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {startDate && (
                <p className="mt-1 text-sm text-yellow-300">
                  {formatDaysAgo(startDate)}
                </p>
              )}
            </div>

            <div className="text-yellow-400 font-bold text-xl">→</div>

            <div className="flex flex-col">
              <label
                htmlFor="endDate"
                className="mb-2 text-yellow-200 font-medium"
              >
                To Date:
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="px-4 py-2 rounded-lg bg-yellow-900/30 border border-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {endDate && (
                <p className="mt-1 text-sm text-yellow-300">
                  {formatDaysAgo(endDate)}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="rounded-xl border border-yellow-700 bg-yellow-950/20 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <SunIcon className="mr-3 h-10 w-10 animate-spin" />
              <p className="ml-3 text-lg text-yellow-300">
                Making the sun shine brighter... please wait!
              </p>
            </div>
          ) : error ? (
            <div className="rounded-md border border-red-500 bg-red-900/30 p-4 text-red-300">
              <p className="mb-2 text-xl font-bold">Oh no!</p>
              <p>{error}</p>
              <p className="mt-2">
                Ask an adult to help check the internet connection.
              </p>
            </div>
          ) : flares.length === 0 ? (
            <div className="text-center py-8 text-yellow-400">
              <p className="mb-2 text-3xl">😴</p>
              <p className="mb-2 text-xl font-medium">
                The Sun is taking a nap!
              </p>
              <p>No big solar flares during this time. Maybe tomorrow!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {flares.map((flare) => (
                <div
                  key={flare.flrID}
                  className="relative transform overflow-hidden rounded-xl border-2 border-orange-500 bg-gradient-to-br from-yellow-900/40 to-orange-900/40 p-5 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/30"
                >
                  <div className="absolute -right-4 -top-4 z-0 h-16 w-16 rounded-full bg-yellow-500 opacity-20 blur-md"></div>
                  <div className="absolute -bottom-4 -left-4 z-0 h-16 w-16 rounded-full bg-orange-500 opacity-20 blur-md"></div>

                  <h3 className="relative z-10 mb-2 flex items-center text-2xl font-bold text-yellow-300">
                    <span className="mr-2 text-3xl">
                      {getClassEmoji(flare.classType)}
                    </span>
                    Flare!{" "}
                    <span className="text-xl text-yellow-400">
                      ({flare.classType})
                    </span>
                  </h3>
                  <div className="relative z-10 space-y-2 text-lg text-orange-200">
                    <p>
                      <span className="font-semibold text-yellow-100">
                        When:
                      </span>{" "}
                      {formatDaysAgo(flare.peakTime)}
                      <br />
                      <span className="text-sm text-yellow-300">
                        {new Date(flare.peakTime).toLocaleString()}
                      </span>
                    </p>
                    {flare.sourceLocation && (
                      <p>
                        <span className="font-semibold text-yellow-100">
                          Where:
                        </span>{" "}
                        {formatLocation(flare.sourceLocation)}
                      </p>
                    )}
                    {flare.activeRegionNum !== -1 && (
                      <p>
                        <span className="font-semibold text-yellow-100">
                          Sun Spot:
                        </span>{" "}
                        {flare.activeRegionNum}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-yellow-100">ID:</span>{" "}
                      {flare.flrID}
                    </p>
                  </div>
                  <div className="relative z-10 mt-6 text-center">
                    <a
                      href={flare.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-lg font-bold text-white shadow-xl ring-2 ring-transparent transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-orange-600 hover:ring-yellow-300 active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-2 h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Explore This Flare!
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
