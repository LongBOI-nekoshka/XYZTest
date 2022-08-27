import express from 'express';
import xyzControllers from './controllers/xyzControllers.js';
const app = express();

app.get('/api/xyz', (req, res) => {
    console.log(xyzControllers(req,res));
});
  
app.listen(3001, () =>
    console.log('Example app listening on port 3000!'),
);
