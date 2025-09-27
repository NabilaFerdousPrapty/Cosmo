import axios from "axios";

// Types for Solar Flare data
export interface Instrument {
  displayName: string;
}

export interface LinkedEvent {
  activityID: string;
}

export interface SolarFlare {
  flrID: string;
  catalog: string;
  instruments: Instrument[];
  beginTime: string;
  peakTime: string;
  endTime: string;
  classType: string;
  sourceLocation: string;
  activeRegionNum: number;
  note: string;
  submissionTime: string;
  versionId: number;
  link: string;
  linkedEvents: LinkedEvent[];
  sentNotifications: string | null;
}

// ✅ Fetch Solar Flare data from NASA DONKI API
export async function getSolarFlares(
  startDate: string,
  endDate: string
): Promise<SolarFlare[]> {
  try {
    const res = await axios.get<SolarFlare[]>(
      `https://api.nasa.gov/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${
        process.env.NASA_API_KEY || "hFdSKUyfxgyOER14PvJAcQdKXGekNFjfh9VlpcgW"
      }`
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching solar flares:", error);
    return [];
  }
}
