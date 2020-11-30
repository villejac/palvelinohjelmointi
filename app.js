

// Luodaan yhteys Node.js:n ja MongoDB:n välille mongoose-paketin asentamisella.

// Otetaan Mongoose käyttöön.

// Yhdistetään tietokanta connect()-komennolla ja MongoDB Atlaksesta saatavalla connection stringillä ja useUnifiedTopology: true, useNewUrlParser: true asetuksilla.

// Haetaan tietokannasta treenejä.

// Näytetään käyttäjän hakema treeni sivustolla.

document.getElementById("slct").onchange = function() {

    let slct = document.getElementById("slct");
    let workOut = slct.options[slct.selectedIndex].text;

    if(workOut == "Jalkatreeni") {

        console.log(workOut);
   
    } else if(workOut == "Selkätreeni") {
        
    } else if(workOut == "Rintatreeni") {
        
    } else if(workOut == "Käsitreeni") {
        
    } else if(workOut == "Olkapäätreeni") {
        
    } else if(workOut == "Vatsatreeni") {
        
    }else {
        return false;
    }
 }