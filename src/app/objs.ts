export class Track {
    id: number;
    title: string;
    artist: string;
    label: string;
}

export class Set {
    title: string;
    tracks: Track[];
    lastTouched: Date;
}