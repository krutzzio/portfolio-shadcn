import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export interface Project {
  project: {
    name: string,
    desc: string,
    techs: string[],
    img: string
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
