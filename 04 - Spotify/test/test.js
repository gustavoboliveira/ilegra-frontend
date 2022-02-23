const lib = require("../src/functions");

describe('should return total tracks on albums per artist', () => {
    test('artist Arctic Monkeys', () => {
        return expect(lib.getTotalTracksInAlbuns('Arctic Monkeys')).resolves.toBe(144);
    })

    test('artist Soundgarden', () => {
        return expect(lib.getTotalTracksInAlbuns('Soundgarden')).resolves.toBe(470);
    })

    test('when no artist', () => {
        const error = new Error('Albums not found!')
        return expect(lib.getTotalTracksInAlbuns()).rejects.toStrictEqual(error);
    })
})

describe('should return total followers per artist', () => {
    test('artist Arctic Monkeys', () => {
        return expect(lib.getQuantityArtistFollowers('Arctic Monkeys')).resolves.toBe(13807919);
    })
    test('artist Soundgarden', () => {
        return expect(lib.getQuantityArtistFollowers('Soundgarden')).resolves.toBe(3413613);
    })
    test('when no artist', () => {
        const error = new Error('Artist not found!');
        return expect(lib.getQuantityArtistFollowers()).rejects.toStrictEqual(error);
    })
})

describe('should return total playlists found in the research', () => {
    test('playlist Top Brasil', () => {
        return expect(lib.getTotalPlaylistResearched('Top Brasil')).resolves.toBe(2377);
    })
    test('playlist Run', () => {
        return expect(lib.getTotalPlaylistResearched('Run')).resolves.toBe(10015);
    })
    test('when no playlist', () => {
        const error = new Error('Playlist not found!');
        return expect(lib.getTotalPlaylistResearched()).rejects.toStrictEqual(error);
    })
})

describe('should return total tracks in the researched playlist', () => {
    test('playlist Top Brasil', () => {
        return expect(lib.getTotalTrackInPlaylist('Top Brasil')).resolves.toBe(50);
    })
    test('playlist Run error', () => {
        const error = new Error("Playlist not found!")
        return expect(lib.getTotalTrackInPlaylist('Olha')).rejects.toStrictEqual(error);
    })
    test('when no playlist', () => {
        const error = new Error("Playlist not found!")
        return expect(lib.getTotalTrackInPlaylist()).rejects.toStrictEqual(error);
    })
})

describe('should return track and artist in the research', () => {
    test('search Californication', () => {
        const arr = ['Name: Californication - Artist: Red Hot Chili Peppers', 'Name: Californication (Main Title Theme) - Artist: Californication Band', 'Name: Californication - Artist: Syn Cole', 'Name: Otherside - Artist: Red Hot Chili Peppers', 'Name: Californication (Live) - Artist: Von Andion', 'Name: Californication - Artist: Barbara Mendes', 'Name: Scar Tissue - Artist: Red Hot Chili Peppers', 'Name: Californication - Artist: Twinkle Twinkle Little Rock Star', 'Name: Around the World - Artist: Red Hot Chili Peppers', 'Name: Californication - Live - Artist: Black Music Big Band', 'Name: Californication / Onde Haja Sol - Artist: Lu & Robertinho', "Name: Road Trippin' - Artist: Red Hot Chili Peppers", 'Name: Californication (Bossa Version) - Artist: Barbara Mendes', 'Name: Californication - Sharapov Radio Mix - Artist: West.K', 'Name: Californication - Artist: Acid AP', 'Name: Parallel Universe - Artist: Red Hot Chili Peppers', 'Name: Californication - Instrumental - Artist: Nylonwings']
        return expect(lib.getTrackAndArtistsByResearch('Californication')).resolves.toStrictEqual(arr);
    })
    test('search Fun Run', () => {
        const arr = ["Name: Fun Run - Artist: Badanamu", "Name: Run To You - Artist: Bryan Adams", "Name: Fun Run Run - Artist: Queens Road", "Name: Symphony No. 3 in E-Flat Major, Op. 55 \"Eroica\": II. Marcia funébre (Adagio assai) - Artist: Ludwig van Beethoven", "Name: Fun Run - Artist: Gregori Fort", "Name: Fun Run Mirrors - Artist: Auroramagician", "Name: You Can't Run (Friday Night Funkin' Vs. Sonic.EXE Mod) - Artist: MarStarBro", "Name: Fun Run - Artist: Crossfit", "Name: RUN FUN RUN - Artist: miwa", "Name: A Midsummer Night's Dream, Incidental Music, Op. 61, MWV M 13: No. 10b) Funeral March - Live - Artist: Felix Mendelssohn", "Name: Fun Run - Artist: Cbdb", "Name: 10k Fun Run for Nothing - Artist: Doug Stanhope", "Name: Fun Run - Artist: Pinkfong", "Name: Fun Run on Campus - Artist: Dewke Sounds", "Name: Girls Just Wanna Have Fun - Girls Just Wanna Have Fun - Artist: Cyndi Lauper", "Name: Fun Run - Artist: Tiger Hu", "Name: It's Not Funny - Artist: Run–D.M.C.", "Name: Funiculì, funiculà - Live - Artist: Luigi Denza", "Name: Fun Run - Artist: Mayed Abdullah"]
        return expect(lib.getTrackAndArtistsByResearch('Fun Run')).resolves.toStrictEqual(arr);
    })
    test('when error research', () => {
        const error = new Error('Tracks not found!')
        return expect(lib.getTrackAndArtistsByResearch()).rejects.toStrictEqual(error);
    })
})

describe('should return total duration of tracks researched in minutes', () => {
    test('search Californication', () => {
        return expect(lib.getDurationTotalTracksResearched('Californication')).resolves.toStrictEqual(84);
    })
    test('search Alive', () => {
        return expect(lib.getDurationTotalTracksResearched('Alive')).resolves.toStrictEqual(83);
    })
    test('when error search', () => {
        const error = new Error('Tracks not found!')
        return expect(lib.getDurationTotalTracksResearched()).rejects.toStrictEqual(error);
    })
})

describe('should return tracks total in the research', () => {
    test('search Californication', () => {
        return expect(lib.getQuantityTracksResearched('Californication')).resolves.toStrictEqual(971);
    })
    test('search Alive', () => {
        return expect(lib.getQuantityTracksResearched('Alive')).resolves.toStrictEqual(10319);
    })
    test('when error search', () => {
        const error = new Error('Tracks not found!')
        return expect(lib.getQuantityTracksResearched()).rejects.toStrictEqual(error);
    })
})