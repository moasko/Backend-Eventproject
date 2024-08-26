const express =require("express")
const router = express.Router()
const db =require('../config/ConnectDatabase')


router.post("/", (req,res)=>{
    const {email,motDePasse} = req.body
    // SQL query to select user by email
    const sql = 'SELECT nom, email, motDePasse FROM utilisateur WHERE email = ?';

    // Execute the query with the email as the parameter
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur serveur');
        }

        // Check if the user exists
        if (results.length === 0) {
            return res.status(404).send('Utilisateur inexistant');
        }


        // Compare the entered password with the stored hashed password
        const user = results[0];
        const isMatch = motDePasse === user.motDePasse ;
    
        if (!isMatch) {
           
          return res.status(400).send('motDePasse incorrect');
        }
    
            // Password matches, proceed with the login
            res.send('Connexion réussie');
        });
    });




module.exports = router;