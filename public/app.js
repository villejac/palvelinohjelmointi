
// Haetaan jalkatreenit mongodb:stä
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "/jalkatreenit", true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if ( myRequest.readyState === 4 && myRequest.status === 200 ) {

// Haetaan rintatreenit mongodb:stä
let myRequest2 = new XMLHttpRequest();
myRequest2.open("GET", "/rintatreenit", true);
myRequest2.send();

myRequest2.onreadystatechange = function() {
    if ( myRequest2.readyState === 4 && myRequest2.status === 200 ) {

// Haetaan selkätreenit mongodb:stä
let myRequest3 = new XMLHttpRequest();
myRequest3.open("GET", "/selkatreenit", true);
myRequest3.send();

myRequest3.onreadystatechange = function() {
    if ( myRequest3.readyState === 4 && myRequest3.status === 200 ) {


// Haetaan käsitreenit mongodb:stä
let myRequest4 = new XMLHttpRequest();
myRequest4.open("GET", "/kasitreenit", true);
myRequest4.send();

myRequest4.onreadystatechange = function() {
    if ( myRequest4.readyState === 4 && myRequest4.status === 200 ) {


// Haetaan olkapäätreenit mongodb:stä
let myRequest5 = new XMLHttpRequest();
myRequest5.open("GET", "/olkapaatreenit", true);
myRequest5.send();

myRequest5.onreadystatechange = function() {
    if ( myRequest5.readyState === 4 && myRequest5.status === 200 ) {


 // Haetaan vatsatreenit mongodb:stä
let myRequest6 = new XMLHttpRequest();
myRequest6.open("GET", "/vatsatreenit", true);
myRequest6.send();

myRequest6.onreadystatechange = function() {
    if ( myRequest6.readyState === 4 && myRequest6.status === 200 ) {

// Haetaan vatsatreenit mongodb:stä
let myRequest7 = new XMLHttpRequest();
myRequest7.open("GET", "/tallennetuttreenit", true);
myRequest7.send();

myRequest7.onreadystatechange = function() {
    if ( myRequest7.readyState === 4 && myRequest7.status === 200 ) {
  


// Funktio jolla valitaan treeni
document.getElementById("slct").onchange = function() {

    // Tähän muuttujaan tulostetaan treeni
    let print = document.getElementById("printworkout");

    // Luodaan treenille otsikko
   let workoutHeader = document.createElement("h3");
   

    let slct = document.getElementById("slct");
    let workOut = slct.options[slct.selectedIndex].text;

    // Otsikkoon kirjoitetaan mikä treeni on valittuna
    workoutHeader.innerHTML = "- " + workOut.toUpperCase() + " -";


    // Funktio jolla muutetaan liikkeen nimi alkamaan isolla kirjaimella
    String.prototype.capitalize = function capi() {
    return this.charAt(0).toUpperCase() + this.slice(1);
     }


    // Tämä toteutuu kun html:stä on valittuna jalkatreeni
    if(workOut == "Jalkatreeni") {
        
        let jalkaArray = JSON.parse(myRequest.response);
        // Tyhjennetään treenialusta ennen uuden lisäämistä
        print.innerHTML = "";    

        // Tuodaan treenin otsikko näkyviin
        print.appendChild(workoutHeader);

        // Loopataan treeni ja tulostetaan se näkyville
        for (let i = 0; i < jalkaArray.length; i++) {
            for (let j = 0; j < jalkaArray[i].liikkeet.length; j++) {
            print.innerHTML += jalkaArray[i].liikkeet[j].liike.capitalize() + ": " + jalkaArray[i].liikkeet[j].sarjat + " sarjaa x " + jalkaArray[i].liikkeet[j].toistot + " toistoa" + "<br>";
            }
            }

            // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
            print.style.display = "block";

        //print.innerHTML = jalkaArray[0].liikkeet[0].liike;
        
        // Tämä toteutuu kun html:stä on valittuna Selkätreeni
    } else if(workOut == "Selkätreeni") {

        let selkaArray = JSON.parse(myRequest3.response);
        // Tyhjennetään treenialusta ennen uuden lisäämistä
        print.innerHTML = "";

        // Tuodaan treenin otsikko näkyviin
        print.appendChild(workoutHeader);
       // Loopataan treeni ja tulostetaan se näkyville
       for (let i = 0; i < selkaArray.length; i++) {
           for (let j = 0; j < selkaArray[i].liikkeet.length; j++) {
           print.innerHTML += selkaArray[i].liikkeet[j].liike.capitalize() + ": " + selkaArray[i].liikkeet[j].sarjat + " sarjaa x " + selkaArray[i].liikkeet[j].toistot + " toistoa" + "<br>";
           }
           }
           
           // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
           print.style.display = "block";
        
        // Tämä toteutuu kun html:stä on valittuna Rintatreeni
    } else if(workOut == "Rintatreeni") {

        let rintaArray = JSON.parse(myRequest2.response);
         // Tyhjennetään treenialusta ennen uuden lisäämistä
         print.innerHTML = "";


        // Tuodaan treenin otsikko näkyviin
        print.appendChild(workoutHeader);
        // Loopataan treeni ja tulostetaan se näkyville
        for (let i = 0; i < rintaArray.length; i++) {
            for (let j = 0; j < rintaArray[i].liikkeet.length; j++) {
            print.innerHTML += rintaArray[i].liikkeet[j].liike.capitalize() + ": " + rintaArray[i].liikkeet[j].sarjat + " sarjaa x " + rintaArray[i].liikkeet[j].toistot + " toistoa" + "<br>";
            }
            }
        
            // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
            print.style.display = "block";

        // Tämä toteutuu kun html:stä on valittuna Käsitreeni
    } else if(workOut == "Käsitreeni") {

        let kasiArray = JSON.parse(myRequest4.response);
        // Tyhjennetään treenialusta ennen uuden lisäämistä
        print.innerHTML = "";


        // Tuodaan treenin otsikko näkyviin
        print.appendChild(workoutHeader);
       // Loopataan treeni ja tulostetaan se näkyville
       for (let i = 0; i < kasiArray.length; i++) {
           for (let j = 0; j < kasiArray[i].liikkeet.length; j++) {
           print.innerHTML += kasiArray[i].liikkeet[j].liike.capitalize() + ": " + kasiArray[i].liikkeet[j].sarjat + " sarjaa x " + kasiArray[i].liikkeet[j].toistot + " toistoa" + "<br>";
           }
           }

           // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
           print.style.display = "block";

        // Tämä toteutuu kun html:stä on valittuna Olkapäätreeni
    } else if(workOut == "Olkapäätreeni") {

        let olkaArray = JSON.parse(myRequest5.response);
        // Tyhjennetään treenialusta ennen uuden lisäämistä
        print.innerHTML = "";

         // Tuodaan treenin otsikko näkyviin
         print.appendChild(workoutHeader);
       // Loopataan treeni ja tulostetaan se näkyville
       for (let i = 0; i < olkaArray.length; i++) {
           for (let j = 0; j < olkaArray[i].liikkeet.length; j++) {
           print.innerHTML += olkaArray[i].liikkeet[j].liike.capitalize() + ": " + olkaArray[i].liikkeet[j].sarjat + " sarjaa x " + olkaArray[i].liikkeet[j].toistot + " toistoa"  + "<br>";
           }
           }
        
            // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
           print.style.display = "block";


        // Tämä toteutuu kun html:stä on valittuna Vatsatreeni
    } else if(workOut == "Vatsatreeni") {

        let vatsaArray = JSON.parse(myRequest6.response);
        // Tyhjennetään treenialusta ennen uuden lisäämistä
        print.innerHTML = "";

        // Tuodaan treenin otsikko näkyviin
        print.appendChild(workoutHeader);
       // Loopataan treeni ja tulostetaan se näkyville
       for (let i = 0; i < vatsaArray.length; i++) {
           for (let j = 0; j < vatsaArray[i].liikkeet.length; j++) {
           print.innerHTML += vatsaArray[i].liikkeet[j].liike.capitalize() + ": " + vatsaArray[i].liikkeet[j].sarjat + " sarjaa x " + vatsaArray[i].liikkeet[j].toistot + " toistoa" + "<br>";
           }
           }
           
           // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
           print.style.display = "block";

    }   else if(workOut == "Tallennetut liikkeet") {
        
        let tallennusArray = JSON.parse(myRequest7.response);
        // Tyhjennetään treenialusta ennen uuden lisäämistä
        print.innerHTML = "";
        
        // Tuodaan treenin otsikko näkyviin
        print.appendChild(workoutHeader);
        let table = document.createElement("table");
        for(let i = 0; i < tallennusArray.length; i++) {
            let newRow = document.createElement("tr");
            newRow.appendChild(createCell(tallennusArray[i].liike.capitalize() + ": "));
            newRow.appendChild(createCell(tallennusArray[i].sarjat + " sarjaa"));
            newRow.appendChild(createCell(tallennusArray[i].toistot + " toistoa"));
            newRow.appendChild(createForm(tallennusArray[i], "update"));
            newRow.appendChild(createForm(tallennusArray[i], "delete"));

            table.appendChild(newRow);
        }
        print.appendChild(table);

        function createCell(value) {
            let newCell = document.createElement("td");
            newCell.innerHTML = value;
            return newCell;
        }

        function createForm(tallennetuttreenit, action) {
            let newCell = document.createElement("td");
            let form = document.createElement("form");
            form.method = (action == "delete") ? "POST" : "GET";
            // Ternääri operaatio jonka avulla päätetään dormin action
            form.action = (action == "delete") ? "/deleteWorkout" : "updateWorkout.html";
            // Lisää piilokenttä id:lle
            let input = document.createElement("input");
            input.value = tallennetuttreenit._id;
            input.type = "hidden";
            input.name = "_id";
            form.appendChild(input);
            // Jos update -> lisää lomakkeelle muutkin tiedot
            // Lisää piilokenttä liikkeelle
             input = document.createElement("input");
            input.value = tallennetuttreenit.liike;
            input.type = "hidden";
            input.name = "liike";
            form.appendChild(input);
            // Lisää piilokenttä sarjoille
             input = document.createElement("input");
            input.value = tallennetuttreenit.sarjat;
            input.type = "hidden";
            input.name = "sarjat";
            form.appendChild(input);
             // Lisää piilokenttä toistoille
             input = document.createElement("input");
            input.value = tallennetuttreenit.toistot;
            input.type = "hidden";
            input.name = "toistot";
            form.appendChild(input);
            // Lisää painike
            input = document.createElement("input");
            input.type = "submit";
            input.value = (action == "delete") ? "poista" : "päivitä";
            form.appendChild(input);
            newCell.appendChild(form);
            return newCell;
        }

           // Muutetaan treenin tulostuskohta näkyväksi kun treeni valitaan
           print.style.display = "block";

    }else {
        return false;
    }
    
 }

 



}
}


}
}

}
}

}
}

}
}

}
}

}
}
