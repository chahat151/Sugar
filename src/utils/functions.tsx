import { lighten, desaturate, tint, shade, darken, saturate } from "polished";

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export interface GenerateSimilarColorsType {
  lighten: string[];
  darken: string[];
  saturate: string[];
  desaturate: string[];
  tints: string[];
  shade: string[];
}

export const generateSimilarColors = (
  color: string,
  numVariation: number
): GenerateSimilarColorsType => {
  return {
    lighten: Array.from({ length: numVariation }, (_, i) =>
      lighten((i + 1) * 0.1, color)
    ),
    darken: Array.from({ length: numVariation }, (_, i) =>
      darken((i + 1) * 0.1, color)
    ),
    saturate: Array.from({ length: numVariation }, (_, i) =>
      saturate((i + 1) * 0.1, color)
    ),
    desaturate: Array.from({ length: numVariation }, (_, i) =>
      desaturate((i + 1) * 0.1, color)
    ),
    tints: Array.from({ length: numVariation }, (_, i) =>
      tint((i + 1) * 0.1, color)
    ),
    shade: Array.from({ length: numVariation }, (_, i) =>
      shade((i + 1) * 0.1, color)
    ),
  };
};

export function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}
