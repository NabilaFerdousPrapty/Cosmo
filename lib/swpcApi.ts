import axios from "axios";

// --- Types ---
export interface KpIndex {
  time_tag: string;
  kp_index: number;
}

// NOAA solar wind type
export interface SolarWind {
  time_tag: string;
  density: number | null;
  speed: number | null;
  temperature: number | null;
}

export interface XRayPoint {
  time_tag: string;
  satellite: number;
  flux: number;
  observed_flux?: number;
  energy: string;
  electron_correction?: number;
  electron_contamination?: boolean;
}

// --- API Functions ---

// 1. Get latest Kp index (geomagnetic activity)
export async function getKpIndex(): Promise<KpIndex[]> {
  try {
    const res = await axios.get<KpIndex[]>(
      "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json"
    );
    return res.data;
  } catch (err: unknown) {
    console.error("Error fetching Kp index:", err);
    return [];
  }
}

// 2. Get solar wind data
export async function getSolarWind(): Promise<SolarWind[]> {
  try {
    const res = await axios.get<SolarWind[]>(
      "https://services.swpc.noaa.gov/json/ace/swepam/ace_swepam_1h.json"
    );
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Error fetching solar wind (1h):", err.message);
    } else {
      console.error("Unknown error fetching solar wind:", err);
    }
    return [];
  }
}

// 3. Get solar X-ray flux
export async function getXRayFlux1Day(): Promise<XRayPoint[]> {
  try {
    const url =
      "https://services.swpc.noaa.gov/json/goes/primary/xrays-1-day.json";
    const res = await axios.get<XRayPoint[]>(url);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Error fetching GOES X-ray flux 1-day:", err.message);
    } else {
      console.error("Unknown error fetching GOES X-ray flux 1-day:", err);
    }
    return [];
  }
}

// 4. Aurora forecast images (not JSON, just direct PNG links)
export const auroraForecast = {
  north:
    "https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.png",
  south:
    "https://services.swpc.noaa.gov/images/aurora-forecast-southern-hemisphere.png",
};
