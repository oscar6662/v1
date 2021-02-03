const lib = require("./videos");
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/css',express.static(path.join(__dirname, '../css')));
app.use('/videos',express.static(path.join(__dirname, '../public/videos')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.get('/:userQuery',(req,res)=>{
  if(req.params.userQuery == 'index'){

      let video = lib.getRqst();
      
      res.render('index',{video:video});
 
    
  }else{
    res.status(404).send('what?')
  }

}); 
app.get('/video/:userQuery',(req,res)=>{
  let nr= req.params.userQuery;
  if(nr == '1' || nr == '2' || nr == '3' || nr == '4' || nr == '5' || nr == '6'){

      let video = lib.getRqst();
      
      res.render('index',{video:video});
 
    
  }else{
    res.status(404).send('what?')
  }

}); 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})