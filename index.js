import express from 'express';
import xyzControllers from './controllers/xyzControllers.js';
import generateToken from './controllers/generateToken.js';
import JwtGuard from './controllers/Guard/JwtGuard.js';

const app = express();

app.get('/api/xyz',JwtGuard,(req, res) => {
  console.log(xyzControllers(req,res));
});
  
app.get('/api/generateToken',(req,res) => {
  res.json({token:generateToken(req.query.name),message:'available only in 60s'})
})

app.listen(3001, () =>
  console.log('Example app listening on port 3000!'),
);
