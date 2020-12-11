// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan käsitreenit-skeema
let kasitreenit = new Schema ( {

    liikkeet: [{
        liike: {type: String}
       },
       {
        sarjat: {type: Number}
       },
       {
        toistot: {type: Number}
       }
       ]
},

        { collection: "käsitreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("käsitreenit", kasitreenit);