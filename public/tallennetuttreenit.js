// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan olkapäätreenit-skeema
let tallennetuttreenit = new Schema ( {

    liikkeet: [{
        liike: {type: String}
       },
       {
        sarjat: {type: String}
       },
       {
        toistot: {type: String}
       }
       ]
},

        { collection: "tallennetuttreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("tallennetuttreenit", tallennetuttreenit);