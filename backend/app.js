const express = require('express');
const bodyParser = require('body-parser');
const actorRoutes = require('./routes/actorRoutes');
const movieRoutes = require('./routes/movieRoutes');
const producerRoutes = require('./routes/producerRoutes');
const directorRoutes = require('./routes/directorRoutes');
const genreRoutes = require('./routes/genreRoutes');
const languageRoutes = require('./routes/languageRoutes');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', actorRoutes);
app.use('/', movieRoutes);
app.use('/', producerRoutes);
app.use('/', directorRoutes);
app.use('/', genreRoutes);
app.use('/', languageRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log("Server running on ", PORT);
});
