import {Artist,Playlist,Track} from "./types";
export const tracks:Track[]=[
{id:"1",slug:"midnight-drive",title:"Midnight Drive",artist:"Nova",artistSlug:"nova",cover:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",duration:"3:42",plays:"2.4M",genre:"Electronic",waveform:[20,35,48,30,62,82,44,70,91,58,38,74,95,66,48,30,54,76,88,50,34,61,79,44,68,90,52,36,64,84]},
{id:"2",slug:"afterglow",title:"Afterglow",artist:"Mira",artistSlug:"mira",cover:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",duration:"4:18",plays:"1.8M",genre:"R&B",waveform:[30,42,28,55,76,49,63,87,52,41,70,90,65,45,30,60,80,55,42,68,92,58,36,50,75,62,40,82,55,38]},
{id:"3",slug:"slow-motion",title:"Slow Motion",artist:"Kairo",artistSlug:"kairo",cover:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",duration:"2:56",plays:"987K",genre:"Hip-Hop",waveform:[18,25,48,72,51,35,63,86,45,58,76,39,28,64,82,50,42,69,91,57,31,45,66,88,52,37,61,80,47,33]},
{id:"4",slug:"blue-hour",title:"Blue Hour",artist:"Solace",artistSlug:"solace",cover:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",duration:"5:03",plays:"764K",genre:"Ambient",waveform:[42,55,63,71,48,36,54,67,80,62,45,59,74,88,65,48,35,52,69,83,60,43,57,72,86,64,47,38,56,70]}];
export const artists:Artist[]=[
{id:"1",name:"Nova",slug:"nova",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",followers:"128K",verified:true,genre:"Electronic"},
{id:"2",name:"Mira",slug:"mira",avatar:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",followers:"94K",verified:true,genre:"R&B"},
{id:"3",name:"Kairo",slug:"kairo",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",followers:"71K",genre:"Hip-Hop"},
{id:"4",name:"Solace",slug:"solace",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",followers:"53K",genre:"Ambient"}];
export const playlists:Playlist[]=[
{id:"1",title:"Late Night Frequencies",creator:"Musify Editorial",cover:tracks[0].cover,tracks:42,duration:"2h 51m"},
{id:"2",title:"Fresh Finds",creator:"Musify Editorial",cover:tracks[1].cover,tracks:35,duration:"2h 17m"},
{id:"3",title:"Focus / Flow",creator:"Mira",cover:tracks[3].cover,tracks:28,duration:"1h 49m"}];