import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

export function sliceText(text: string, endValue: number): string {
  if (text.length > endValue) {
    return text.slice(0, endValue) + "...";
  } else {
    return text;
  }
}
