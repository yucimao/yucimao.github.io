var LocString = String(window.document.location.href);
function GetQueryString(name) {
    var rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) { return decodeURI(tmp[2]); }
    return "";
}
var wzsc2 = GetQueryString("wz");
var wzsc3 = "0";