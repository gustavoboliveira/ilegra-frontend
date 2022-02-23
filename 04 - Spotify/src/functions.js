global.fetch = require('node-fetch');

const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token:
    "BQCzI1E5h5pbhnPJZ1Dls19gJRg72EbcKOqwIqVrQbnhspXJdpy050nwqxSHDedLRIH4G1iGXmZ2e_StaSzWXvH2208Tyesq57ilDVoFrAo-oSZqb00ePRzwWgZGvXUUIlTmL6Gpj4jvdUvb9Nhhh0PIEFrvtL3436Y",
});

module.exports.getTotalTracksInAlbuns = (artist) => {
  const arrTracks = [];

  return new Promise((resolve, reject) => {

    if (!(artist === null || artist === undefined)) {
      spotify.search.albums(artist).then((data) => {
        data.albums.items.map((item) => arrTracks.push(item.total_tracks));

        totalTracksAlbums = arrTracks.reduce((x, y) => x + y)

        resolve(totalTracksAlbums);
      });
    } else
      reject(new Error('Albums not found!'))
  })
}

module.exports.getQuantityArtistFollowers = (artist) => {
  return new Promise((resolve, reject) => {

    if (!(artist === null || artist === undefined)) {
      spotify.search.artists(artist).then((data) => {
        followers = data.artists.items
          .filter((item) => item.name === artist)
          .map((item) => item.followers.total)[0];

        resolve(followers)
      });
    } else
      reject(new Error('Artist not found!'))
  })
}

module.exports.getTotalPlaylistResearched = (playlist) => {
  return new Promise((resolve, reject) => {

    if (!(playlist === null || playlist === undefined)) {
      spotify.search.playlists(playlist).then((data) => {
        quantityPlaylists = data.playlists.total;

        resolve(quantityPlaylists)
      });
    } else
      reject(new Error('Playlist not found!'))
  })
}

module.exports.getTotalTrackInPlaylist = (playlist) => {
  return new Promise((resolve, reject) => {

    if (!(playlist === null || playlist === undefined)) {
      spotify.search.playlists(playlist).then((data) => {
        totalTrack = data.playlists.items
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

module.exports.getTrackAndArtistsByResearch = (track) => {
  let list = new Set();

  return new Promise((resolve, reject) => {

    if (!(track === null || track === undefined)) {
      spotify.search.tracks(track).then((data) => {
        data.tracks.items.map((item) =>
          list.add(
            `Name: ${item.name} - Artist: ${item.artists[0].name}`
          )
        );

        const arr = [];

        for (const item of list) arr.push(item);

        resolve(arr)
      });
    } else
      reject(new Error('Tracks not found!'))
  })
}

module.exports.getDurationTotalTracksResearched = (track) => {
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

module.exports.getQuantityTracksResearched = (track) => {
  return new Promise((resolve, reject) => {
    if (!(track === null || track === undefined)) {
      spotify.search.tracks(track).then((data) => {
        tracksQuantity = data.tracks.total;

        resolve(tracksQuantity)
      });
    } else
      reject(new Error('Tracks not found!'))
  })
}