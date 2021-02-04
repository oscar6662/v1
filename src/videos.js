const fs = require('fs');
let videos = JSON.parse(fs.readFileSync('videos.json', 'utf8'))
function getRqst(){
  return videos;
}

function avlvideos(nr){
  for (var i = 0; i < videos.videos.length; i++) {
      if(videos.videos[i].id==nr){
        return true;
      }
  }
  return false;
}

function tengd(nr){
  var tengd = new Array();
  for(var i = 0; i<videos.videos[nr].related.length; i++){
    tengd.push(videos.videos[nr].related[i]);
    tengd.push(time(videos.videos[nr].related[i]));
  } 
  return tengd;
}

function time(nr){
  var time = new Date().getTime();
  var years= 0, months= 0, weeks= 0, days= 0, hours= 0,minutes = 0;
  var seconds = videos.videos[nr].duration;
  var timeCreated = time - videos.videos[nr].created;

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
    seconds = seconds - 60 * minutes;
  }
  if (years != 0) {
    if (years == 1) {
      return `Fyrir 1 ári síðan`;
    } else {
      return 'Fyrir '+years+' árum síðan';
    }
  } else if (months != 0) {
    if (months == 1) {
      return `Fyrir 1 mánuði síðan`;
    } else {
      return 'Fyrir '+ months +' mánuðum síðan';
    }
  } else if (weeks != 0) {
    if (weeks == 1) {
      return `Fyrir 1 viku síðan`;
    } else {
      return 'Fyrir '+ weeks+' vikum síðan';
    }
  } else if (days != 0) {
    if (days == 1) {
      return `Fyrir 1 degi síðan`;
    } else {
      return 'Fyrir '+ days +' dögum síðan';
    }
  } else {
    if (hours == 1) {
      return `Fyrir 1 klukkutíma síðan`;
    } else {
      return 'Fyrir '+hours+' klukkustundum síðan';
    }
  }
}

module.exports = {getRqst,avlvideos,tengd};