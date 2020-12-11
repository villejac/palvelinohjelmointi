// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan vatsatreenit-skeema
let vatsatreenit = new Schema ( {

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

        { collection: "vatsatreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("vatsatreenit", vatsatreenit);