const express = require('express');
const app = express();
const fontanes = require('./models/fontanes.js');
const heartController = require('./controllers/heart.js');

app.use('/heart', heartController)

app.use(express.static('public'));

app.get('/fontan', (req, res) => {
  res.render('show.ejs')
})

// app.get('/fontanes/:index', (req, res) => {
//   res.render('show.ejs', {
//     fontane: fontanes[req.params.index]
//   });
// });

app.listen(3000, ()=> {
  console.log('listening');
});
