var LocString = String(window.document.location.href);  //?wz=
function GetQueryString(name) {
    var rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) { return decodeURI(tmp[2]); }
    return "";
}
var wzsc2 = GetQueryString("wz");
$(function () {
    $("#dataSet h4").each(function () {
        $(this).hide();
        if ($(this).text().indexOf($.trim(wzsc2[0])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[1])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[2])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[3])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[4])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[5])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[6])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[7])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[8])) >= 0
            && $(this).text().indexOf($.trim(wzsc2[9])) >= 0
        ) { $(this).show(); }
    })
})

$(function () { //搜索
    $("#searchBox").keyup(function () {
        var wzsc = $("#searchBox").val();
        wzsc = wzsc.split(" ");
        $("#dataSet h4").each(function () {
            $(this).hide();
            $("#dataSet ul").hide();
            if ($(this).text().indexOf($.trim(wzsc[0])) >= 0
                && $(this).text().indexOf($.trim(wzsc[1])) >= 0
                && $(this).text().indexOf($.trim(wzsc[2])) >= 0
                && $(this).text().indexOf($.trim(wzsc[3])) >= 0
                && $(this).text().indexOf($.trim(wzsc[4])) >= 0
                && $(this).text().indexOf($.trim(wzsc[5])) >= 0
                && $(this).text().indexOf($.trim(wzsc[6])) >= 0
                && $(this).text().indexOf($.trim(wzsc[7])) >= 0
                && $(this).text().indexOf($.trim(wzsc[8])) >= 0
                && $(this).text().indexOf($.trim(wzsc[9])) >= 0
            ) { $(this).show(); }
        })
    })
})

function tion() {    //搜索按钮
    $('#dataSet h4').show();
    $("#dataSet ul").hide();

    $("#dataSet h4").each(function () {
        $(this).hide();

        if ($(this).text().indexOf($.trim(sg)) >= 0) {
            $(this).show();
        }
    });
}