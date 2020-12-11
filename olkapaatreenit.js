// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan olkapäätreenit-skeema
let olkapaatreenit = new Schema ( {

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

        { collection: "olkapäätreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("olkapäätreenit", olkapaatreenit);