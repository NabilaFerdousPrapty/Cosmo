import { NextResponse } from "next/server";

// SOHO instruments with their known image URL patterns
const instruments = [
  {
    name: "EIT 171",
    url: "https://soho.nascom.nasa.gov/data/realtime/eit_171/1024/latest.jpg",
  },
  {
    name: "EIT 195",
    url: "https://soho.nascom.nasa.gov/data/realtime/eit_195/1024/latest.jpg",
  },
  {
    name: "EIT 284",
    url: "https://soho.nascom.nasa.gov/data/realtime/eit_284/1024/latest.jpg",
  },
  {
    name: "EIT 304",
    url: "https://soho.nascom.nasa.gov/data/realtime/eit_304/1024/latest.jpg",
  },
  {
    name: "LASCO C2",
    url: "https://soho.nascom.nasa.gov/data/realtime/c2/1024/latest.jpg",
  },
  {
    name: "LASCO C3",
    url: "https://soho.nascom.nasa.gov/data/realtime/c3/1024/latest.jpg",
  },
];

export async function GET() {
  try {
    // Simply return all instrument URLs without checking
    // Let the client handle image loading errors
    const imagesWithTimestamps = instruments.map((instrument) => ({
      ...instrument,
      url: `${instrument.url}?ts=${Date.now()}`, // Add timestamp for cache busting
    }));

    return NextResponse.json(imagesWithTimestamps);
  } catch (error) {
    console.error("SOHO API error:", error);
    // Even if there's an error, return the basic instrument list
    return NextResponse.json(instruments);
  }
}
