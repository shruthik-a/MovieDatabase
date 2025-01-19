const db = require('../db');

exports.fetchAllGenres = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM genre');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertGenre = async (req, res) => {
    const { genreName } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO genre (GenreName) VALUES (?)',[genreName]
        );
        res.status(200).json({ message: 'Inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleGenre = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM genre WHERE GenreID=?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.updateGenre = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await db.query('UPDATE genre SET GenreName=? WHERE GenreID = ?',
        [data.genreName,id]);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteGenre = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM genre WHERE GenreID = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};