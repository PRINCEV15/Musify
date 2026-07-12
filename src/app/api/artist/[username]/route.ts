import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { artist } from '@/lib/mock-data';
const profileSchema = z.object({ displayName: z.string().min(2).max(80).optional(), bio: z.string().max(800).optional(), location: z.string().max(120).optional(), genres: z.array(z.string().min(1)).max(8).optional(), website: z.string().url().optional() });
export async function GET(_request: NextRequest, { params }: { params: Promise<{ username: string }> }) { const { username } = await params; return NextResponse.json({ artist: { ...artist, username } }); }
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ username: string }> }) { const { username } = await params; const parsed = profileSchema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 }); return NextResponse.json({ artist: { ...artist, username, ...parsed.data }, optimistic: true }); }
