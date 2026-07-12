'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MoreHorizontal, Pause, Play } from 'lucide-react';
import { compactNumber, cn } from '@/lib/utils';
import type { Track } from '@/lib/types';
import { usePlayerStore } from '@/store/player-store';
export function MusicCard({ track, index }: { track: Track; index: number }) { const { activeTrackId, isPlaying, setTrack, toggle } = usePlayerStore(); const active = activeTrackId === track.id; return <motion.article initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:index*.04}} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-3xl border border-white/10 bg-white/70 p-3 shadow-sm transition hover:shadow-glow dark:bg-white/[.06]">
<Image src={track.cover} alt={`${track.title} cover`} width={72} height={72} className="rounded-2xl object-cover" />
<div className="min-w-0"><div className="flex items-center gap-3"><button aria-label={`${active&&isPlaying?'Pause':'Play'} ${track.title}`} onClick={()=>active?toggle():setTrack(track.id)} className="focus-ring rounded-full bg-primary p-2 text-primary-foreground shadow-lg">{active&&isPlaying?<Pause size={18}/>:<Play size={18}/>}</button><div className="min-w-0"><h3 className="truncate font-bold">{track.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{track.duration} • {compactNumber(track.plays)} plays • {compactNumber(track.likes)} likes</p></div></div><div aria-hidden className="mt-3 flex h-9 items-end gap-0.5 overflow-hidden">{track.waveform.map((bar,i)=><span key={i} className={cn('w-1 rounded-full bg-slate-300 dark:bg-slate-600', active && 'bg-primary')} style={{height:`${bar}%`}} />)}</div></div>
<div className="flex items-center gap-2 text-sm text-slate-500"><span className="hidden sm:inline">{new Date(track.releasedAt).toLocaleDateString()}</span><button aria-label={`More options for ${track.title}`} className="focus-ring rounded-full p-2 opacity-70 transition group-hover:opacity-100"><MoreHorizontal/></button></div></motion.article> }
