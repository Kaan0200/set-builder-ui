export class Track {
    id: number;
    title: string;
    artist: string;
    label: string;
}

export class Set {
    constructor(title: string, tracks: Track[]) {
        this.title = title;
        this.tracks = tracks;
        this.lastTouched = new Date();
    }

    title: string;
    tracks: Track[];
    _lastTouched: string;

    get lastTouched() {
        return new Date(this._lastTouched);
    }
    set lastTouched(value: Date) {
        this._lastTouched = value.toLocaleDateString();
    }
}