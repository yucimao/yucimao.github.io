if(xiangce3_wz.indexOf("://") != -1){}
else{xiangce3_wz="{{ site.mq_d }}/xiangce/3/o/"+xiangce3_wz+".json";}

let GetJson = $.ajax({
    url: xiangce3_wz,
    type: "GET",
    dataType: "json",
    async: false,
    success: function (data) {
    }
});
    GetJson = GetJson.responseText;

let xiangce3_jm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let  xiangce3_sr = GetJson;

let xiangce3_jm_b="";
    let xiangce3_jm_c="";
    for(let i=0;xiangce3_m.length>i;i++){
        if(xiangce3_jm_b.indexOf(xiangce3_m[i]) != -1){}
        else{
            xiangce3_jm_b+=xiangce3_m[i];
        }
    }
    for(let i=0;xiangce3_jm.length>i;i++){
        if(xiangce3_jm_b.indexOf(xiangce3_jm[i]) != -1){}
        else{
            xiangce3_jm_b+=xiangce3_jm[i];
        }
    }

    let 替换 = new RegExp('', "g");
     xiangce3_sr =  xiangce3_sr.replace(替换, '／');

    for(let i=0;xiangce3_jm_b.length>i;i++){
        let 临时="／"+xiangce3_jm_b[i];
        let 临时b=xiangce3_jm[i];

        替换 = new RegExp(临时, "g");
         xiangce3_sr =  xiangce3_sr.replace(替换, 临时b);
    }
    替换 = new RegExp("／", "g");
     xiangce3_sr =  xiangce3_sr.replace(替换, "");
    替换 = new RegExp("【", "g");
     xiangce3_sr =  xiangce3_sr.replace(替换, "data:image/");
    替换 = new RegExp("】", "g");
     xiangce3_sr =  xiangce3_sr.replace(替换, ";base64,");

    if(typeof xiangce3!=="undefined"){
        document.getElementById("img").src =  xiangce3_sr;
    }