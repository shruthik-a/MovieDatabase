const db = require('../db');

exports.fetchAllLanguages = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM languages');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertLanguage = async (req, res) => {
    const { languageName } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO languages (LanguageName) VALUES (?)',[languageName]
        );
        res.status(200).json({ message: 'Inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleLanguage = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM languages WHERE LanguageID=?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.updateLanguage = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await db.query('UPDATE languages SET LanguageName=? WHERE LanguageID = ?',
        [data.languageName,id]);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteLanguage = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM languages WHERE LanguageID = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};