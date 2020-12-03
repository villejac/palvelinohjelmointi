
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