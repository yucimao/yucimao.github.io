let wzjm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function wzjm_加密(){
    wzjm_输入 = window.btoa(window.encodeURIComponent(wzjm_输入));
    let wzjm_b="";
    for(let i=0;wzjm_密码.length>i;i++){
        if(wzjm_b.indexOf(wzjm_密码[i]) != -1){}
        else{
            wzjm_b+=wzjm_密码[i];
        }
    }
    for(let i=0;wzjm.length>i;i++){
        if(wzjm_b.indexOf(wzjm[i]) != -1){}
        else{
            wzjm_b+=wzjm[i];
        }
    }

    let 替换 = new RegExp('', "g");
    wzjm_输入 = wzjm_输入.replace(替换, '／');

    for(let i=0;wzjm_b.length>i;i++){
        let 临时="／"+wzjm[i];
        let 临时b=wzjm_b[i];

        替换 = new RegExp(临时, "g");
        wzjm_输入 = wzjm_输入.replace(替换, 临时b);
    }
    替换 = new RegExp("／", "g");
    wzjm_输入 = wzjm_输入.replace(替换, "");
}
function wzjm_解密(){
    let wzjm_b="";
    for(let i=0;wzjm_密码.length>i;i++){
        if(wzjm_b.indexOf(wzjm_密码[i]) != -1){}
        else{
            wzjm_b+=wzjm_密码[i];
        }
    }
    for(let i=0;wzjm.length>i;i++){
        if(wzjm_b.indexOf(wzjm[i]) != -1){}
        else{
            wzjm_b+=wzjm[i];
        }
    }

    let 替换 = new RegExp('', "g");
    wzjm_输入 = wzjm_输入.replace(替换, '／');

    for(let i=0;wzjm_b.length>i;i++){
        let 临时="／"+wzjm_b[i];
        let 临时b=wzjm[i];

        替换 = new RegExp(临时, "g");
        wzjm_输入 = wzjm_输入.replace(替换, 临时b);
    }
    替换 = new RegExp("／", "g");
    wzjm_输入 = wzjm_输入.replace(替换, "");
    wzjm_输入 = window.decodeURIComponent(atob(wzjm_输入));
}