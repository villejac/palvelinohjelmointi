document.body.onload = function() {
    document.getElementById("liike").value = getParam("liike");
    document.getElementById("sarjat").value = getParam("sarjat");
    document.getElementById("toistot").value = getParam("toistot");
    document.getElementById("id").value = getParam("_id");
}
function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}