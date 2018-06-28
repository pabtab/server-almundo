const data = require('./data.json');

const express = require('express');
const cors = require('cors');

const router = express.Router();
const app = express();

app.use(cors());
app.use('/api', router);
app.use(express.static('images/hotels/'));

app.get('/', (request, response) => response.send('Almundo'));

router.get('/', (request, response) => {
  response.json(data);
});

// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));