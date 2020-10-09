var LocString = String(window.document.location.href);
function GetQueryString(name) {
    var rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) { return decodeURI(tmp[2]); }
    return "";
}
var wzsc2 = GetQueryString("wz");
$(function () {
    $("#dataSet div").each(function () {
        $(this).hide();
        if ($(this).text().indexOf($.trim(wzsc2)) >= 0) { $(this).show(); }
    })
})