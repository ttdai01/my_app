import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response } from 'express';

const app = express();

const port = 3000
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export default app;
