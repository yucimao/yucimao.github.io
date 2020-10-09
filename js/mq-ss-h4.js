$(function () { //搜索
    $("#searchBox").keyup(function () {
        var wzsc = $("#searchBox").val();
        if (wzsc3 == "0"){
            wzsc = wzsc2;
            wzsc3 = "1";
        }
        wzsc = wzsc.split(" ");
        $("#dataSet h4").each(function () {
            $(this).hide();
            //$("#dataSet ul").hide();
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