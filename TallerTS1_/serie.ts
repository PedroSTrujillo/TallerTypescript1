export class Serie {
    id: number;
    name: string;
    channel: string;
    nm_seasons: number;
    description: string;
    webpage: string;
    image: string;

    constructor(id: number, name: string, channel: string, nm_seasons: number, description: string, webpage: string, image: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.nm_seasons = nm_seasons;
        this.description = description;
        this.webpage = webpage;
        this.image = image;
    }

}