const mysql = require('mysql2');
const express = require('express');

// Configuration de la connexion MySQL


const db = mysql.createConnection({
    host: 'https://auth-db1627.hstgr.io',
    user: 'u555445899_shadow',
    password: '09060306Zg@',
    database: 'u555445899_shadow'
  });
  
  // Connexion à la base de données
  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à MySQL:', err.stack);
      return;
    }
    console.log('Connecté à la base de données MySQL');
  });
  

  module.exports = db ;