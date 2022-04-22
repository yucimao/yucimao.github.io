$(function () { //搜索
    $("#searchBox").keyup(function () {
        var wzsc = $("#searchBox").val();
        wzsc = wzsc.split(" ");
        $("#dataSet div").each(function () {
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
    $('#dataSet div').show();
    $("#dataSet ul").hide();

    $("#dataSet div").each(function () {
        $(this).hide();

        if ($(this).text().indexOf($.trim(sg)) >= 0) {
            $(this).show();
        }
    });
}