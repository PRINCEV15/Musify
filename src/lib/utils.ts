import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function compactNumber(value: number) { return new Intl.NumberFormat('en', { notation: 'compact' }).format(value); }
