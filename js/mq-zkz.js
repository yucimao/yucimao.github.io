$(function(){   //展开的子页面
    var bodyH = $(document).height();
    var bodyJ = window.location.href.split('/i/zk/')[1];
    bodyJ = "／／"+bodyJ;
    window.parent.document.getElementById(bodyJ).height=bodyH;
    window.parent.document.getElementById("加载").innerHTML="";
    });