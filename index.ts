import * as express from 'express';
import * as cors from 'cors';
import * as router from './src/routes/router';


const app = express.default();

app.use([cors.default(), express.json(), router.default])

const PORT:number = 4000;

app.listen(PORT,():void=>console.log(`Server is listening on PORT: ${PORT}`));