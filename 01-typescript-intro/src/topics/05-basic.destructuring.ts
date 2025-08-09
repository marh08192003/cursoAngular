interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "AAAA",
    details: {
        author: 'aaa',
        year: 2025 
    }
}

const song = 'New Song'

const {song:anotherSong, songDuration:duration, details:detailsSong} = audioPlayer;

const {author:authorSong} = detailsSong;

//console.log('Song: ', anotherSong)
//console.log('NewSong: ', song)
//console.log('Duration: ', duration)
//console.log('Author: ', authorSong)

const [ p1, p2, trunks = 'not found']: string[] = ['Goku', 'Vegetta'];



console.log('Personaje 3:', trunks);

export{}