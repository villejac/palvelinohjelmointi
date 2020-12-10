
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "/jalkatreenit", true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if ( myRequest.readyState === 4 && myRequest.status === 200 ) {


let myRequest2 = new XMLHttpRequest();
myRequest2.open("GET", "/rintatreenit", true);
myRequest2.send();

myRequest2.onreadystatechange = function() {
    if ( myRequest2.readyState === 4 && myRequest2.status === 200 ) {



// Funktio jolla valitaan treeni
document.getElementById("slct").onchange = function() {

    let print = document.getElementById("printworkout");

    let slct = document.getElementById("slct");
    let workOut = slct.options[slct.selectedIndex].text;

    if(workOut == "Jalkatreeni") {

        let jalkaArray = JSON.parse(myRequest.response);

        
        for (let i = 0; i < jalkaArray.length; i++) {
            for (let j = 0; j < jalkaArray[i].liikkeet.length; j++) {
            print.innerHTML += jalkaArray[i].liikkeet[j].liike + jalkaArray[i].liikkeet[j].sarjat + '*' + jalkaArray[i].liikkeet[j].toistot;
            }
            }

        //print.innerHTML = jalkaArray[0].liikkeet[0].liike;
        
    } else if(workOut == "Selkätreeni") {
        
        print.innerHTML = "TESTI SELKÄTREENI"
        
    } else if(workOut == "Rintatreeni") {

        let rintaArray = JSON.parse(myRequest2.response);

        
        for (let i = 0; i < rintaArray.length; i++) {
            for (let j = 0; j < rintaArray[i].liikkeet.length; j++) {
            print.innerHTML += rintaArray[i].liikkeet[j].liike + rintaArray[i].liikkeet[j].sarjat + '*' + rintaArray[i].liikkeet[j].toistot;
            }
            }
        
    } else if(workOut == "Käsitreeni") {
        
    } else if(workOut == "Olkapäätreeni") {
        
    } else if(workOut == "Vatsatreeni") {
        
    }else {
        return false;
    }
 }


}
}


}
}
