const path = require('path');
const express = require('express');
const lib = require('./videos');

const app = express();
const port = 3000;

app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/videos', express.static(path.join(__dirname, '../public/videos')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.get('/:userQuery', (req, res) => {
  if (req.params.userQuery === 'index') {
    const video = lib.getRqst();
    res.render('index', { video });
  } else {
    res.status(404).send('what?');
  }
});

app.get('/video/:userQuery', (req, res) => {
  const nr = req.params.userQuery;
  const video = lib.getRqst();
  const tengd = lib.tengdf(nr);
  if (lib.avlvideos(nr)) {
    res.render('video', { video, id: nr, tengd });
  } else {
    res.status(404).send('what?');
  }
});
app.listen(port);
