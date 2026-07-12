import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) { return <button className={cn('focus-ring inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 disabled:opacity-50', className)} {...props}>{children}</button>; }
