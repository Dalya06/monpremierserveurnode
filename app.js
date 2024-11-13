// import du frameword ExpressJs
import expres from "express";

// on crée l'application Expressjs
const app = express();

// notre serveur Node est maintenant capable de gérer les requêtes 
// et de retourner une réponse
app.use((req, res) => {
    res.end("Bonjour, je le nouveau serveur!");
});


// On exporte notre application
// pour la rendre visible par les autres fichiers du dossier du projet
moudule.exports = app;