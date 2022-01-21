const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = 3000;

require('./database/database')

app.use(morgan('dev'));

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hola my server Express');
});

routerApi(app);


app.listen(port, () => console.log(`mi port ${port}`));
