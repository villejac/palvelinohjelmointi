// Ota mongoose käyttöön
const mongoose = require("mongoose");
// Ota express käyttöön
express = require("express");
const app = express();
// Määritä staattisten tiedostojen tiedostojen hakemisto
app.use(express.static("public"));
// Ota jalkatreenit käyttöön
const jalkatreenit = require("./jalkatreenit");
// Ota jalkatreenit käyttöön
const rintatreenit = require("./rintatreenit");
// Luo connectionstringillä vakio
const uri = "mongodb+srv://Ville:KoronaKaranteeni@cluster0.fs5ol.mongodb.net/treenit?retryWrites=true&w=majority";
// Muodostetaan yhteys tietokantaan
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// Luodaan vakio tietokantayhteydelle
const db = mongoose.connection;
// Näytä ilmoitus jos yhteys ok
db.once("open", function() {
    console.log("Tietokantayhteys avattu");
});

// Kirjoita get-funktio
app.get("/jalkatreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    jalkatreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});

// Kirjoita get-funktio
app.get("/rintatreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    rintatreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});
// Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080 , function(){});