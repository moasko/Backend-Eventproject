const express = require("express")
const router = express.Router()
const db =require('../config/ConnectDatabase')



router.get('/', (req, res) => {
    const sql = 'SELECT id, titre,date,lieu FROM evenement '; // On récupère juste les informations sur les événements
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la récupération des événements' });
      }
      res.json(results);
    });
  })


module.exports = router ;