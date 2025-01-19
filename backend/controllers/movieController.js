const db = require('../db');

exports.fetchAllMovies = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM movie');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertMovie = async (req, res) => {
    const { movieName,release,duration,synopsis,theaterLastDay,days,budget,languageID,genreID,directorID,producerID,poster } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO movie (MovieName, ReleaseDate, MovieDuration, Synopsis, LastDateAtTheater, DaysInTheater, TotalBudget, LanguageID, GenreID, DirectorID, ProducerID, poster) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',[movieName,release,duration,synopsis,theaterLastDay,days,budget,languageID,genreID,directorID,producerID,poster]
        );
        res.status(200).json({ message: 'Inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleMovie = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM movie WHERE MovieID=?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.updateMovie = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await db.query('UPDATE movie SET MovieName=?, ReleaseDate=?,MovieDuration=?,Synopsis=?,LastDateAtTheater=?,DaysInTheater=?,TotalBudget=?,LanguageID=?,GenreID=?,DirectorID=?,ProducerID=?,poster=? WHERE MovieID = ?',
        [data.movieName,data.release,data.duration,data.synopsis,data.theaterLastDay,data.days,data.budget,data.languageID,data.genreID,data.directorID,data.producerID,data.poster,id]);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMovie = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM movie WHERE MovieID = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMovies = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT m.MovieID, m.MovieName, m.ReleaseDate, m.MovieDuration, m.Synopsis, m.LastDateAtTheater, m.DaysInTheater, m.TotalBudget, 
                                      l.LanguageName, g.GenreName, d.DirectorName, p.ProducerName, m.poster
                                      FROM movie m
                                      JOIN languages l ON m.LanguageID = l.LanguageID
                                      JOIN genre g ON m.GenreID = g.GenreID
                                      JOIN directors d ON m.DirectorID = d.DirectorID
                                      JOIN producers p ON m.ProducerID = p.ProducerID`);
        res.json(rows);
    } catch (err) {
        console.error("Error fetching movies:", err);
        res.status(500).json({ error: err.message });
    }
};

exports.getMovieDetails = async (req, res) => {
    const movieId = req.params.id;
    try {
        const [rows] = await db.query(
            `SELECT m.MovieID, m.MovieName, m.ReleaseDate, m.MovieDuration, m.Synopsis, 
                    m.LastDateAtTheater, m.DaysInTheater, m.TotalBudget, 
                    l.LanguageName, g.GenreName, d.DirectorName, p.ProducerName, m.poster
             FROM movie m
             JOIN languages l ON m.LanguageID = l.LanguageID
             JOIN genre g ON m.GenreID = g.GenreID
             JOIN directors d ON m.DirectorID = d.DirectorID
             JOIN producers p ON m.ProducerID = p.ProducerID
             WHERE m.MovieID = ?`, 
            [movieId] 
        );
        res.json(rows[0]);
    } catch (err) {
        console.error("Error fetching movie details:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};