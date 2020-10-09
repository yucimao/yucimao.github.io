function tion(){    //搜索按钮
    $('#dataSet div').show();
    $("#dataSet ul").hide();

    $("#dataSet div").each(function () {
        $(this).hide();
    
    if ($(this).text().indexOf($.trim(sg)) >= 0) {
                    $(this).show();
                }
            });
}