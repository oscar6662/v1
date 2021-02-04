const fs = require('fs');

const videos = JSON.parse(fs.readFileSync('videos.json', 'utf8'));

function getRqst() {
  return videos;
}

function avlvideos(nr) {
  for (let i = 0; i < videos.videos.length; i += 1) {
    if (videos.videos[i].id === nr) {
      return true;
    }
  }
  return false;
}

function timef(nr) {
  const time = new Date().getTime();
  let years = 0;
  let months = 0;
  let weeks = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = videos.videos[nr].duration;
  const timeCreated = time - videos.videos[nr].created;

  if (timeCreated / 3.154e10 >= 1) {
    years = Math.floor(timeCreated / 3.154e10);
  } else if (timeCreated / 2.628e9 >= 1) {
    months = Math.floor(timeCreated / 2.628e9);
  } else if (timeCreated / 6.048e8 >= 1) {
    weeks = Math.floor(timeCreated / 6.048e8);
  } else if (timeCreated / 8.64e7 >= 1) {
    days = Math.floor(timeCreated / 8.64e7);
  } else {
    hours = Math.floor(timeCreated / 3.6e6);
  }
  if (seconds / 60 >= 1) {
    minutes = Math.floor(seconds / 60);
    seconds -= 60 * minutes;
  }
  if (years !== 0) {
    if (years === 1) {
      return 'Fyrir 1 ári síðan';
    }
    return `Fyrir ${years} árum síðan`;
  } if (months !== 0) {
    if (months === 1) {
      return 'Fyrir 1 mánuði síðan';
    }
    return `Fyrir ${months} mánuðum síðan`;
  } if (weeks !== 0) {
    if (weeks === 1) {
      return 'Fyrir 1 viku síðan';
    }
    return `Fyrir ${weeks} vikum síðan`;
  } if (days !== 0) {
    if (days === 1) {
      return 'Fyrir 1 degi síðan';
    }
    return `Fyrir ${days} dögum síðan`;
  }
  if (hours === 1) {
    return 'Fyrir 1 klukkutíma síðan';
  }
  return `Fyrir ${hours} klukkustundum síðan`;
}

function tengdf(nr) {
  const tengd = [];
  for (let i = 0; i < videos.videos[nr].related.length; i += 1) {
    tengd.push(videos.videos[nr].related[i]);
    tengd.push(timef(videos.videos[nr].related[i]));
  }
  return tengd;
}

module.exports = { getRqst, avlvideos, tengdf };
