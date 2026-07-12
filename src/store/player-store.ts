import { create } from 'zustand';
type PlayerState = { activeTrackId?: string; isPlaying: boolean; setTrack: (id: string) => void; toggle: () => void };
export const usePlayerStore = create<PlayerState>((set) => ({ isPlaying: false, setTrack: (id) => set({ activeTrackId: id, isPlaying: true }), toggle: () => set((s) => ({ isPlaying: !s.isPlaying })) }));
