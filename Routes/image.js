const express =require("express")
const router = express.Router()
const db =require('../config/ConnectDatabase')

// Route pour servir une image spécifique
router.get("/:id", (req, res) => {
    const eventId = req.params.id;
    const sql = 'SELECT photo FROM evenement WHERE id = ?';
  
    db.query(sql, [eventId], (err, results) => {
        if (err) {
          console.error('Erreur lors de la récupération de la photo:', err);
          return res.status(500).json({ error: 'Erreur lors de la récupération de la photo' });
        }
    
        console.log('Données récupérées :', results);
    
        if (results.length === 0) {
          console.error('Aucun résultat trouvé pour l\'ID:', eventId);
          return res.status(404).json({ error: 'Photo non trouvée' });
        }
    
        const photo = results[0].photo;
        if (!photo || photo.length === 0) {
          console.error('Photo vide pour l\'ID:', eventId);
          return res.status(404).json({ error: 'Photo non trouvée' });
        }
    
        console.log('Photo récupérée avec succès');
        res.set('Content-Type', 'image/jpeg'); // Ajustez en fonction du format de la photo
        res.send(photo);
      });
        

      }




   
  );


module.exports = router;