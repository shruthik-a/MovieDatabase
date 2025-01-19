const db = require('../db');

exports.fetchAllProducers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM producers');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertProducer = async (req, res) => {
    const { producerName, companyName,producerMobileNumber, address } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO producers (ProducerName, CompanyName, ContactNo, Address) VALUES (?,?,?,?)',[producerName,companyName,producerMobileNumber,address]
        );
        res.status(200).json({ message: 'Inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSingleProducer = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.query('SELECT * FROM producers WHERE ProducerID=?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ err });
    }
};

exports.updateProducer = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await db.query('UPDATE producers SET ProducerName=?,CompanyName=?,ContactNo=?,Address=? WHERE ProducerID = ?',
        [data.producerName,data.companyName,data.producerMobileNumber,data.address,id]);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProducer = async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('DELETE FROM producers WHERE ProducerID = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};