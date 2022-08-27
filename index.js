import express from 'express';
import xyzControllers from './controllers/xyzControllers.js';
import generateToken from './controllers/generateToken.js';
import JwtGuard from './controllers/Guard/JwtGuard.js';

const app = express();

app.get('/api/xyz',JwtGuard,(req, res) => {
  console.log(xyzControllers(req,res));
});
  
app.get('/api/generateToken',(req,res) => {
  res.json(generateToken(req.query.name))
})

app.listen(3001, () =>
  console.log('Example app listening on port 3000!'),
);
