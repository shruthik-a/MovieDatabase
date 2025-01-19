const db = require('../db');

exports.fetchAllActors = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM actors');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertActor = async (req, res) => {
    const { actorName, actorMobileNumber, fanbaseName, address } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO actors (ActorName, MobileNumber, FanBaseName, Address) VALUES (?,?,?,?)', [actorName, actorMobileNumber, fanbaseName, address]
        );
        res.status(200).json({ message: 'Inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleActor = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM actors WHERE ActorID=?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.updateActor = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await db.query('UPDATE actors SET ActorName = ?,MobileNumber = ?,FanBaseName= ?,Address=? WHERE ActorID = ?',
        [data.actorName,data.actorMobileNumber,data.fanbaseName,data.address,id]);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteActor = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM actors WHERE ActorID = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getActorDetails = async (req, res) => {
    const actorId = req.params.id;
    try {
        const [rows] = await db.query(
            `SELECT 
                a.Photo,
                a.DOB, 
                a.ActorName,
                a.Years_Active, 
                GROUP_CONCAT(DISTINCT m.MovieName SEPARATOR ', ') AS MovieNames,
                GROUP_CONCAT(DISTINCT award.AwardName SEPARATOR ', ') AS AwardNames,
                GROUP_CONCAT(DISTINCT award.Category SEPARATOR ', ') AS Categories,
                GROUP_CONCAT(DISTINCT award.Year SEPARATOR ', ') AS AwardYears,
                GROUP_CONCAT(DISTINCT award.MovieName SEPARATOR ', ') AS Work,
                GROUP_CONCAT(DISTINCT g.GenreName SEPARATOR ', ') AS Genre,
                a.Country,
                COUNT(DISTINCT movieDet.MovieID) AS TotalMovies
            FROM actors a
            LEFT JOIN movie_details movieDet ON a.ActorID = movieDet.ActorID
            LEFT JOIN movie m ON movieDet.MovieID = m.MovieID 
            LEFT JOIN genre g ON m.GenreID = g.GenreID 
            LEFT JOIN actorawards award ON a.ActorID = award.ActorID
            WHERE a.ActorID = ?
            GROUP BY a.ActorID`,
            [actorId]
        );
        res.json(rows[0]);
    } catch (err) {
        console.error("Error fetching actor details:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};