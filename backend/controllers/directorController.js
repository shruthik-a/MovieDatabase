const db = require('../db');

exports.fetchAllDirectors = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM directors');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertDirector = async (req, res) => {
    const { directorName, directorMobileNumber, address } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO directors (DirectorName, MobileNumber, Address) VALUES (?,?,?)', [directorName, directorMobileNumber, address]
        );
        res.status(200).json({ message: 'Inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleDirector = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM directors WHERE DirectorID=?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.updateDirector = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await db.query('UPDATE directors SET DirectorName=?,MobileNumber=?,Address=? WHERE DirectorID = ?',
        [data.directorName,data.directorMobileNumber,data.address,id]);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDirector = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM directors WHERE DirectorID = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDirectorDetails = async (req, res) => {
    const directorId = req.params.id;
    try {
        const [rows] = await db.query(
            `SELECT
    d.Photo,
    d.DOB,
    d.DirectorName,
    d.Years_Active,
    d.Country,
    GROUP_CONCAT(DISTINCT g.GenreName) AS Genre,
    GROUP_CONCAT(DISTINCT m.MovieName) AS MovieNames,
    GROUP_CONCAT(award.AwardName) AS AwardNames,
    GROUP_CONCAT(award.Category) AS Categories,
    GROUP_CONCAT(award.Year) AS AwardYears,
    GROUP_CONCAT(award.MovieName) AS Work,
    COUNT(DISTINCT m.MovieID) AS TotalMovies
FROM directors d
JOIN movie m ON m.DirectorID = d.DirectorID
LEFT JOIN directorawards award ON d.DirectorID = award.DirectorID
JOIN genre g ON m.GenreID = g.GenreID
WHERE d.DirectorID = ?
GROUP BY d.DirectorID`,
            [directorId]
        );
        res.json(rows[0]);
    } catch (err) {
        console.error("Error fetching actor details:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};