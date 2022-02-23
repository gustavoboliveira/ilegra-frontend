const lib = require("../src/functions");

describe('should return total tracks on albums per artist', () => {
    test('artist Arctic Monkeys tracks greater than 0', () => {
        const actual = lib.getTotalTracksInAlbuns('Arctic Monkeys');
        const expected = 0;
        return expect(actual).resolves.toBeGreaterThan(expected);
    })

    test('artist Arctic Monkeys tracks return type number', () => {
        const actual = lib.getTotalTracksInAlbuns('Arctic Monkeys').then(data => { return typeof data });
        const expected = "number";
        return expect(actual).resolves.toBe(expected);
    })

    test('when no artist', () => {
        const actual = lib.getTotalTracksInAlbuns();
        const expected = 'Albums not found!';
        return expect(actual).rejects.toThrow(expected);
    })
})

describe('should return total followers per artist', () => {
    test('artist Arctic Monkeys followers greater than 0', () => {
        const actual = lib.getQuantityArtistFollowers('Arctic Monkeys');
        const expected = 0;
        return expect(actual).resolves.toBeGreaterThan(expected);
    })
    test('artist Arctic Monkeys followers return type number', () => {
        const actual = lib.getQuantityArtistFollowers('Arctic Monkeys').then(data => { return typeof data });
        const expected = 'number';
        return expect(actual).resolves.toBe(expected);
    })
    test('when no artist', () => {
        const actual = lib.getQuantityArtistFollowers();
        const expected = 'Artist not found!';
        return expect(actual).rejects.toThrow(expected);
    })
})

describe('should return total playlists found in the research', () => {
    test('playlist Top Brasil total tracks greater than 0', () => {
        const actual = lib.getTotalPlaylistResearched('Top Brasil');
        const expected = 0;
        return expect(actual).resolves.toBeGreaterThan(expected);
    })
    test('playlist Top Brasil total tracks return type number', () => {
        const actual = lib.getTotalPlaylistResearched('Top Brasil').then(data => { return typeof data });
        const expected = 'number';
        return expect(actual).resolves.toBe(expected);
    })
    test('when no playlist', () => {
        const actual = lib.getTotalPlaylistResearched();
        const expected = 'Playlist not found!';
        return expect(actual).rejects.toThrow(expected);
    })
})

describe('should return total tracks in the researched playlist', () => {
    test('total tracks in the research playlist Top Brasil greater than 0', () => {
        const actual = lib.getTotalTrackInPlaylist('Top Brasil');
        const expected = 0;
        return expect(actual).resolves.toBeGreaterThan(expected);
    })
    test('total tracks in the research playlist Top Brasil return type number', () => {
        const actual = lib.getTotalPlaylistResearched('Top Brasil').then(data => { return typeof data });
        const expected = 'number';
        return expect(actual).resolves.toBe(expected);
    })
    test('playlist Run error', () => {
        const actual = lib.getTotalTrackInPlaylist('Olha');
        const expected = 'Playlist not found!';
        return expect(actual).rejects.toThrow(expected);
    })
    test('when no playlist', () => {
        const actual = lib.getTotalTrackInPlaylist();
        const expected = 'Playlist not found!';
        return expect(actual).rejects.toThrow(expected);
    })
})

describe('should return track and artist in the research', () => {
    test('search Californication', () => {
        const actual = lib.getTrackAndArtistsByResearch('Californication');
        const expected = ['Name: Californication - Artist: Red Hot Chili Peppers', 'Name: Californication (Main Title Theme) - Artist: Californication Band', 'Name: Californication - Artist: Syn Cole', 'Name: Otherside - Artist: Red Hot Chili Peppers', 'Name: Californication (Live) - Artist: Von Andion', 'Name: Californication - Artist: Barbara Mendes', 'Name: Scar Tissue - Artist: Red Hot Chili Peppers', 'Name: Californication - Artist: Twinkle Twinkle Little Rock Star', 'Name: Around the World - Artist: Red Hot Chili Peppers', 'Name: Californication - Live - Artist: Black Music Big Band', 'Name: Californication / Onde Haja Sol - Artist: Lu & Robertinho', "Name: Road Trippin' - Artist: Red Hot Chili Peppers", 'Name: Californication (Bossa Version) - Artist: Barbara Mendes', 'Name: Californication - Sharapov Radio Mix - Artist: West.K', 'Name: Californication - Artist: Acid AP', 'Name: Parallel Universe - Artist: Red Hot Chili Peppers', 'Name: Californication - Instrumental - Artist: Nylonwings']
        return expect(actual).resolves.toStrictEqual(expected);
    })
    test('search Californication length return greater than 0', () => {
        const actual = lib.getTrackAndArtistsByResearch('Californication').then(data => { return data.length });
        const expected = 0
        return expect(actual).resolves.toBeGreaterThan(expected);
    })
    test('when error research', () => {
        const actual = lib.getTrackAndArtistsByResearch();
        const expected = 'Tracks not found!'
        return expect(actual).rejects.toThrow(expected);
    })
})

describe('should return total duration of tracks researched in minutes', () => {
    test('search Californication return total duration greater than 0', () => {
        const actual = lib.getDurationTotalTracksResearched('Californication');
        const expected = 0;
        return expect(actual).resolves.toBeGreaterThan(expected);
    })
    test('search Californication return total duration type number', () => {
        const actual = lib.getDurationTotalTracksResearched('Californication').then(data => { return typeof data });
        const expected = 'number';
        return expect(actual).resolves.toBe(expected);
    })
    test('when error search', () => {
        const actual = lib.getDurationTotalTracksResearched();
        const expected = 'Tracks not found!'
        return expect(actual).rejects.toThrow(expected);
    })
})

describe('should return tracks total in the research', () => {
    test('search Californication return tracks total greater than 0', () => {
        const actual = lib.getQuantityTracksResearched('Californication');
        const expected = 0;
        return expect(actual).resolves.toBeGreaterThan(expected);
    })
    test('search Californication return tracks total type number', () => {
        const actual = lib.getQuantityTracksResearched('Californication').then(data => { return typeof data });
        const expected = 'number';
        return expect(actual).resolves.toBe(expected);
    })
    test('when error search', () => {
        const actual = lib.getQuantityTracksResearched();
        const expected = 'Tracks not found!';
        return expect(actual).rejects.toThrow(expected);
    })
})