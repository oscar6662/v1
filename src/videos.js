const fs = require('fs');
var time = new Date().getTime();
var years, months, weeks, days, hours;
var minutes, seconds;
let videos;
function getRqst(){
  return JSON.parse(fs.readFileSync('videos.json', 'utf8'));
}

function buildHtml(){
  return "<!DOCTYPE html><html><head></head><body><p>Hello hello</p></body></html>";
}
module.exports = {getRqst};