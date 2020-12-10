// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan rintatreenit-skeema
let rintatreenit = new Schema ( {

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

        { collection: "rintatreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("rintatreenit", rintatreenit);