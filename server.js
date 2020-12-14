
// Ota mongoose käyttöön
const mongoose = require("mongoose");
// Ota bodyparser käyttöön
const bodyparser = require("body-parser");
// Ota express käyttöön
express = require("express");
const app = express();
// Määritä staattisten tiedostojen tiedostojen hakemisto
app.use(express.static("public"));
// Ota jalkatreenit käyttöön
const jalkatreenit = require("./jalkatreenit");
// Ota jalkatreenit käyttöön
const rintatreenit = require("./rintatreenit");
// Ota selkätreenit käyttöön
const selkatreenit = require("./selkatreenit");
// Ota käsitreenit käyttöön
const kasitreenit = require("./kasitreenit");
// Ota olkapäätreenit käyttöön
const olkapaatreenit = require("./olkapaatreenit");
// Ota vatsatreenit käyttöön
const vatsatreenit = require("./vatsatreenit");
const tallennetuttreenit = require("./public/tallennetuttreenit");
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
// Aseta määritykset express-palvelimelle
// Staattinen hakemisto
app.use(express.static("public"));
// Käyät bodyparseria lomakedatan käsittelyssä
app.use(bodyparser.urlencoded( { extended: false }));
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

// Kirjoita get-funktio
app.get("/selkatreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    selkatreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});

// Kirjoita get-funktio
app.get("/kasitreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    kasitreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});

// Kirjoita get-funktio
app.get("/olkapaatreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    olkapaatreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});

// Kirjoita get-funktio
app.get("/vatsatreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    vatsatreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});

// Kirjoita get-funktio
app.get("/tallennetuttreenit", function(req, res) {
    // Hae käyttäjät tietokannasta
    tallennetuttreenit.find({  }, function(err, result) {
        if(err) {
            res.send(err);
        }else {
            res.send(result);
        }
    })
});

// Treenin lisäys post-funktio 
app.post("/tallennetuttreenit", function(req, res) {
    console.log(req.body);
    // Varmuuden vuoksi poistetaan _id
    delete req.body._id;
    // Lisää collectioniin uusi treeni
    db.collection("tallennetuttreenit").insertOne(req.body);
    let outCome = JSON.stringify(req.body);
    let finalOutcome = JSON.parse(outCome);
    res.send("Treeni lisätty:" + "<br>" + finalOutcome.liike + ": " + finalOutcome.sarjat + " sarjaa x " + finalOutcome.toistot + " toistoa" + "<br>" + "Takaisin".link('index.html'));
});

// Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080 , function(){});