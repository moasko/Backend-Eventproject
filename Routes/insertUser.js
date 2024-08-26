const express =require("express")
const router = express.Router()
const db =require('../config/ConnectDatabase')

router.post("/",(req,res)=>{

    const {nom,email,motDePasse} =req.body

    const sql = 'SELECT nom, email, motDePasse FROM utilisateur WHERE email = ?';
    const requete ='INSERT INTO utilisateur(nom,email,motDePasse) VALUES (?,?,?)';

    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }

        // Check if the user exists
        if (results.length != 0) {
            return res.status(404).send('Utilisateur deja existant');

        }

        // If the user doesn't exist, insert the new user
    db.query(requete, [nom, email, motDePasse], (err, results) => {
        
        if (err) {
            return res.status(500).send('Erreur lors de l\'insertion de l\'utilisateur');
        }

        return res.status(201).send('Utilisateur créé avec succès');
    });


})}

)


module.exports = router;