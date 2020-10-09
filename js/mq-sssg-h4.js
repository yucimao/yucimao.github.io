function tion(){    //搜索按钮
    $('#dataSet h4').show();
    $("#dataSet ul").hide();

    $("#dataSet h4").each(function () {
        $(this).hide();
    
    if ($(this).text().indexOf($.trim(sg)) >= 0) {
                    $(this).show();
                }
            });
}