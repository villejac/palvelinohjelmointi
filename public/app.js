
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "/jalkatreenit", true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if ( myRequest.readyState === 4 && myRequest.status === 200 ) {
        


// Funktio jolla valitaan treeni
document.getElementById("slct").onchange = function() {

    let print = document.getElementById("printworkout");

    let slct = document.getElementById("slct");
    let workOut = slct.options[slct.selectedIndex].text;

    if(workOut == "Jalkatreeni") {

        print.innerHTML = myRequest.responseText;
        
    } else if(workOut == "Selkätreeni") {
        
        print.innerHTML = "TESTI SELKÄTREENI"
        
    } else if(workOut == "Rintatreeni") {
        
    } else if(workOut == "Käsitreeni") {
        
    } else if(workOut == "Olkapäätreeni") {
        
    } else if(workOut == "Vatsatreeni") {
        
    }else {
        return false;
    }
 }


}
}
