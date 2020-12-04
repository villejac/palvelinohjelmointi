// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan jalkatreenit-skeema
let jalkatreenit = new Schema ( {

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

        { collection: "jalkatreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("jalkatreenit", jalkatreenit);