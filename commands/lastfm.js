const fetch = require('node-fetch');
const api_key = process.env.LASTFM_API_KEY;

module.exports = {
  name: 'lastfm',
  permissions: [],
  cooldown: 5,
  aliases: ['lf', 'lfm'],
  description: 'Provides information from the Last.fm API.',
  execute(message, args, cmd, client, Discord, profileData) {
    let user = args[1];
    if (!user) user = profileData.lastfmUsername;

    const methods = ['getinfo', 'getrecenttracks', 'gettopartists', 'gettopalbums', 'gettoptracks'];

    Promise.all(methods.map(method => 
      fetch(`https://ws.audioscrobbler.com/2.0/?method=user.${method}&user=${user}&api_key=${api_key}&format=json`)
      .then(parseJSON)
      .catch(error => console.log(error))
    ))
    .then(data => {
      const getInfo = data[0].user;
      const getRecentTracks = data[1].recenttracks;
      const getTopArtist = data[2].topartists;
      const getTopAlbums = data[3].topalbums;
      const getTopTracks = data[4].toptracks;

      if (args[0] == 'set') {
        if (!args[1]) return;
        const lfSet = require('./lastfm/set');
        if (user == profileData.lastfmUsername) {
          lfSet.alreadySet(getInfo, message);
        } else {
          lfSet.setName(getInfo, message);
        }
      }

      if (args[0] == 'profile') {
        const lfProfile = require('./lastfm/profile');
        lfProfile.profile(getInfo, getRecentTracks, getTopArtist, getTopAlbums, getTopTracks, message);
      }

      if (args[0] == ('playing' || 'p' || 'np')) {
        if (!profileData.lastfmUsername) return;
        const lfPlaying = require('./lastfm/playing');
        lfPlaying.playing(user, api_key, getInfo, getRecentTracks, message);
      }
    });

    function parseJSON(response) {
      return response.json();
    }
  }
}