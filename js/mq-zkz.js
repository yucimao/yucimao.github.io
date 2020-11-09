$(function(){   //展开的子页面
    var bodyH = $(document).height();
    var bodyJ = window.location.href.split('/i/zk/')[1];
    var bodyK = "／／"+bodyJ;
    var bodyL = "／"+bodyJ+"／";
    
    window.parent.document.getElementById(bodyK).height=bodyH;
    window.parent.document.getElementById(bodyL).innerHTML="";
    });