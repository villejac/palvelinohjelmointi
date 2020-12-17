document.body.onload = function() {
    document.getElementById("liike").value = getParam("liike");
    document.getElementById("sarjat").value = getParam("sarjat");
    document.getElementById("toistot").value = getParam("toistot");
    document.getElementById("id").value = getParam("_id");
}
function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

document.forms[0].onsubmit = function() {
    
    
    let inputs = document.getElementsByTagName("input");
    let formOk = true;
    
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type != "submit" ) {
    if(inputs[i].value == "") {
        inputs[i].style = "border: 1px solid red;";
        formOk = false;
    }else {
        inputs[i].style = "border: 1px solid black;"
          }
      }
    }
    if(formOk) {
       
    }else {
     return formOk;
    }
}
