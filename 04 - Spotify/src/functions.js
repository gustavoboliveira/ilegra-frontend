module.exports = { getTotalTracksInAlbuns, getQuantityArtistFollowers, getTotalPlaylistResearched, getTotalTrackInPlaylist, getTrackAndArtistsByResearch, getDurationTotalTracksResearched, getQuantityTracksResearched }

global.fetch = require('node-fetch');

const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token:
    "BQCwLCc3lsEn0vtCyO5Dqg9Is6hZ9QxQvhuwwAa6XkIxc8lZh4bxG10O4DVtzxEHb0RjHrq314bqr2rtB7TIgmiO47Zi2UHVFMW1-CZE7TSDWljppwDmWMzezDf8Vjiz05EAC66cv7AbwutpsrXTKRy01Iu3EQfxNMs",
});

function getTotalTracksInAlbuns(artist) {
  const arrTracks = [];

  return new Promise((resolve, reject) => {

    if (!(artist === null || artist === undefined)) {
      spotify.search.albums(artist).then((data) => {
        data.albums.items.map((item) => arrTracks.push(item.total_tracks));

        const totalTracksAlbums = arrTracks.reduce((x, y) => x + y)
        
        resolve(totalTracksAlbums);
      });
    } else
      reject(new Error('Albums not found!'))
  })
}

function getQuantityArtistFollowers(artist) {
  return new Promise((resolve, reject) => {

    if (!(artist === null || artist === undefined)) {
      spotify.search.artists(artist).then((data) => {
        const followers = data.artists.items
          .filter((item) => item.name === artist)
          .map((item) => item.followers.total)[0];

        resolve(followers)
      });
    } else
      reject(new Error('Artist not found!'))
  })
}

function getTotalPlaylistResearched(playlist) {
  return new Promise((resolve, reject) => {

    if (!(playlist === null || playlist === undefined)) {
      spotify.search.playlists(playlist).then((data) => {
        const quantityPlaylists = data.playlists.total;

        resolve(quantityPlaylists)
      });
    } else
      reject(new Error('Playlist not found!'))
  })
}

function getTotalTrackInPlaylist(playlist) {
  return new Promise((resolve, reject) => {

    if (!(playlist === null || playlist === undefined)) {
      spotify.search.playlists(playlist).then((data) => {
        const totalTrack = data.playlists.items
          .filter((item) => item.name === playlist)
          .map((item) => item.tracks.total)[0];

        if (totalTrack >= 0)
          resolve(totalTrack);

        reject(new Error('Playlist not found!'))
      });
    }
    else
      reject(new Error('Playlist not found!'))
  })
}

function getTrackAndArtistsByResearch(track) {
  const listTracksAndArtist = new Set();

  return new Promise((resolve, reject) => {

    if (!(track === null || track === undefined)) {
      spotify.search.tracks(track).then((data) => {
        data.tracks.items.map((item) =>
          listTracksAndArtist.add(
            `Name: ${item.name} - Artist: ${item.artists[0].name}`
          )
        );

        const arrTracksAndArtist = [];
        for (item of listTracksAndArtist) arrTracksAndArtist.push(item);

        resolve(arrTracksAndArtist)
      });
    } else
      reject(new Error('Tracks not found!'))
  })
}

function getDurationTotalTracksResearched(track) {
  const arrDuration = [];

  return new Promise((resolve, reject) => {

    if (!(track === null || track === undefined)) {
      spotify.search.tracks(track).then((data) => {
        data.tracks.items.map((item) => arrDuration.push(item.duration_ms));

        const totalInMinute = Math.ceil(
          arrDuration.reduce((x, y) => x + y) / 60000
        );

        resolve(totalInMinute)
      });
    } else
      reject(new Error('Tracks not found!'))
  })
}

function getQuantityTracksResearched(track) {
  return new Promise((resolve, reject) => {
    if (!(track === null || track === undefined)) {
      spotify.search.tracks(track).then((data) => {
        const tracksQuantity = data.tracks.total;

        resolve(tracksQuantity)
      });
    } else
      reject(new Error('Tracks not found!'))
  })
}