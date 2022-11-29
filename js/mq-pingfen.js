dy="<div id=\"排行\"><style>td span.b{display:none;}</style></div>"+
"<small>点击作品名可以复制；点击评分展开评分细则；点击“排名”改为不并列模式。</small>"+dy;

for(let i=0;data.length>i;i++){
    let 临时=0;
    let 临时2=data[i][0].replace(/ /g, "").split("+");
    let 临时3=临时2;
    for(let i2=0;临时2.length>i2;i2++){
        if (临时2[i2].indexOf("*") != -1){
            let 临时4=临时2[i2].split("*");
            临时4=临时4[0]*临时4[1];
            临时+=临时4;
            临时3[i2]=临时4;
        }else{
            临时+=临时2[i2]*1;
        }
    }
    data[i][0]=临时;
    data[i][2]=临时3;
}

let datb=[data[0]];

for(let i=1;data.length>i;i++){
    let 临时=datb.length;
    let 记录=0;
    while (datb.length==临时){
        if(datb[记录][0]>data[i][0]){
            if(记录+1==datb.length){datb[datb.length]=data[i];}
        }else{
            datb.splice(记录,0,data[i]);
        }
        记录+=1;
    }
}

    let 分类排行="／";
    let 分类排行榜={};
    let dwb2="";

    let 并列=[0,0];
    let 排名=1;
    for(let i=0;datb.length>i;i++){
        let 临时2=排名;
        if(datb[i][0]==并列[1]){
            临时2="<span class='a c'>-</span><span class='b c'>"+(i+1)+"</span>";
        }else{
            并列[0]=临时2;
            临时2="<span class='a'>"+临时2+"</span><span class='b'>"+(i+1)+"</span>";
            并列[1]=datb[i][0];
            排名+=1;
        }
        dy+="<tr><td>"+临时2+"</td><td onclick=\"复(制='"+datb[i][1].split("／")[0].split("<")[0]+"')\">"+datb[i][1]+"</td>";
        临时2=datb[i][0]/10;
        if(临时2>10){临时2="10+";}if(临时2<0){临时2="0-";}
        dy+="<td onclick=\"dw(dwd='"+datb[i][1].split("／")[0]+"',dwb='<table>";
        let 临时=datb[i][2];
            for(let i2=0;临时.length>i2;i2++){
                if(打分标准[i2]){
                    let 百分比=Math.round(临时[i2] / 打分标准[i2][1] * 10000) / 100.00;
                    dy+="<tr><td>"+打分标准[i2][0]+"</td><td>"+临时[i2]+" / "+打分标准[i2][1]+"</td><td";
                    if(百分比>=100){dy+=" class=［引号］ysa［引号］";}else if(百分比<0){dy+=" class=［引号］ysb［引号］";}
                    dy+=">("+百分比+ "%)</td></tr>";
                }else{
                    dy+="<tr><td>额外</td><td>";
                    if(临时[i2]>0){dy+="+";}
                    dy+=临时[i2]+"</td><td></td></tr>";
                }
            }
            临时=临时2*10;
            dy+="<tr><td>　</td><td></td><td></td></tr><tr><td>总计</td><td";
            if(临时>=90){dy+=" class=［引号］ysa［引号］";}else if(临时<60){dy+=" class=［引号］ysb［引号］";}
            dy+=">"+临时+"</td><td></td></tr></table>')\">"+临时2+"</td><td>";
            for(let i2=3;datb[i].length>i2;i2++){
                dy+="<small> / </small>";
                临时2=datb[i][i2]+"";
                if(临时2.length==1){临时2+=".0";}
                if (datb[i][i2].indexOf("：链接：") != -1){
                    临时2=临时2.split("：链接：");
                    dy+="<a href=\""+临时2[1]+"\" target=\"_blank\" class=\"dk\">"+临时2[0]+"</a>";
                }else if (datb[i][i2].indexOf("分类：") != -1){
                    临时2=临时2.split("：")[1];
                    if (分类排行.indexOf("／"+临时2+"／") == -1){分类排行+=临时2+"／";分类排行榜[临时2]="“<b>"+临时2+"</b>”分类排名：<br><ol>";}
                    分类排行榜[临时2]+="<li><b>"+datb[i][1].split("<")[0]+"</b> <small>"+datb[i][0]+"分</small></li>";
                    dy+="<a onclick=\"dw2(dwb2='"+临时2+"')\">"+临时2+"</a><small>(分类)</small>";
                }else if (datb[i][i2].indexOf("：") != -1){
                    临时2=临时2.split("：");
                    dy+="<a onclick=\"dw(dwd='"+datb[i][1]+" "+临时2[0]+"',dwb='"+临时2[1]+"')\">"+临时2[0]+"</a>";
                    if(临时2[2]){dy+="<small>("+临时2[2]+")</small>";}
            }else if(临时2>0||临时2.length>25){ //超过字数为“更多”
                dy+="<a onclick=\"dw(dwd='更多',dwb='"+临时2+"')\">更多</a>";
            }else{
                dy+=临时2;
            }
        }
        dy+="</td></tr>";
    }
dy+="</table>";

dy=dy.replace(/／/g, "</td><td>").replace(/<td><small>\ \/\ <\/small>/g, "<td>");

dy+="<style>i{position:relative;font-size:75%;line-height:0;vertical-align:baseline;top:-.5em;}i[云]:after{content:'[云]';color:#258DF6;}i[通]:after{content:'[通]';color:#19D02A;}i[弃]:after{content:'[弃]';color:#FF4343;}td span.c{font-size: 0.8em;color:#999999;}td small{color:#8c8b8b;}td[onclick^=\"复(制=\"],td[onclick^=\"dw(dwd=\"]{cursor:pointer;}.ysa{color:#77C94B;}.ysb{color:#DF402A;}</style>";

document.getElementById("结果").innerHTML = dy;

    let 查重列表="／";
    for(let i=0;datb.length>i;i++){
        if (查重列表.indexOf("／"+datb[i]+"／") != -1){
            console.log(datb[i]);
            }else{
                查重列表+=datb[i]+"／";
            }
    }
    console.log("结束");

if(分类排行!="／"){
    分类排行=分类排行.replace(/^／/g, "").replace(/／$/g, "").split("／");
    for(let i=0;分类排行.length>i;i++){
        分类排行榜[分类排行]+="</ol>";
    }
}

function dw2(){
    dw(dwb=分类排行榜[dwb2]);
}

let 排名的方式=0;
function 排名方式(){
    if(排名的方式==0){排名的方式=1;document.getElementById("排行").innerHTML = "<style>td span.a{display:none;}</style>";}
    else{排名的方式=0;document.getElementById("排行").innerHTML = "<style>td span.b{display:none;}</style>";}
}