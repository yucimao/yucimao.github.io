// 分类：内容
// 按钮名：链接：地址 （或直接链接）
// td 或 ／ </td><td>

dy="<div id=\"排行\"><style>td span.b{display:none}</style></div>"+
"<style>i{position:relative;font-size:75%;line-height:0;vertical-align:baseline;top:-.5em}i[云]:after{content:'[云]';color:#258DF6}i[通]:after{content:'[通]';color:#19D02A}i[弃]:after{content:'[弃]';color:#FF4343}"+
"td:first-child{cursor:default}td span.c{font-size: 0.8em;color:#999999}td:nth-child(5) small{color:#c1c1c1}td[onclick^=\"复(制=\"],td[onclick^=\"dw(dwd=\"]{cursor:pointer}[onclick='排名方式()']{cursor:pointer}.ysa{color:#77C94B}.ysb{color:#DF402A}[onclick^=\"取消\"]:hover{text-decoration:line-through}</style>"+
"<small>点作品名可以复制；点分数展开评分细则；点“排名”改为不并列模式；点标签显示同标签排行。</small>"+dy;
let dy2=dy;

for(let i=0;data.length>i;i++){
    let 临时=0;
    let 临时2=data[i][0].replace(/ /g, "").split("+");
    let 临时3=临时2;
    for(let i2=0;临时2.length>i2;i2++){
        if (临时2[i2].indexOf("*")!=-1){
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
    临时3=data[i].length;
    for(let i2=3;临时3>i2;i2++){
        if(data[i][i2][0]=="："&&data[i][i2].indexOf("_")!=-1){
            临时=data[i][i2].split("：")[1].split("_");
            data[i][i2]="x：<small><b><a onclick=\"dw2('"+临时[0]+"')\">"+临时[0]+"</a>（<a onclick=\"dw2('"+临时[0]+"_"+临时[1]+"')\">"+临时[1]+"</a>）</b></small>";
            data[i][data[i].length]="_"+临时[0];
            data[i][data[i].length]="_"+临时[0]+"_"+临时[1];
        }
    }
}

let datb=[data[0]];
for(let i=1;data.length>i;i++){
    let 临时=datb.length;
    let 记录=0;
    while (datb.length==临时){
        if(datb[记录][0]>data[i][0]){
            if(记录+1==datb.length){datb[datb.length]=data[i]}
        }else{
            datb.splice(记录,0,data[i]);
        }
        记录+=1;
    }
}
data=datb;

let 关键词=[];

function dw2(o){
    let 谁复特=1;
    if(o=="0"){关键词=[]}else if(o=="1"){}else if(o.indexOf(",")!=-1){关键词=o.split(",")}else if(关键词.length==0||谁复特==1){关键词[关键词.length]=o}else{关键词=[o]}
    dy=dy2;

    if(o==0){datb=data}else{
        let 临时="";
        for(let i=0;关键词.length>i;i++){
            if(i!=0){临时+=","}
            临时+="<a onclick=\"取消('"+关键词[i]+"')\">"+关键词[i]+"</a>";
            if(说明[关键词[i]]){临时+="<sup><a onclick=\"dw(dwb='"+说明[关键词[i]]+"',dwd='"+关键词[i]+"')\">[注]</a></sup>"}
        }
        dy="<h2 style='display:inline;'>"+临时+"</h2> <a onclick=\"dw2('0')\">显示全部</a>"+dy;
        datb=[];
        for(let i=0;data.length>i;i++){
            谁复特=1;
            for(let i2=0;关键词.length>i2;i2++){
                if(data[i].indexOf("分类："+关键词[i2])!=-1||data[i].indexOf("_"+关键词[i2])!=-1){}else{谁复特=0}
            }
            if(谁复特==1){datb[datb.length]=data[i]}
        }
    }
    谁复特=0;

    let 并列=[0,0];
    let 排名=1;
    let hr=1;
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
        if(o==0&&标准[hr]&&标准[hr][0]*10+10>datb[i][0]&&标准[hr][0]*10<=datb[i][0]
            ||o==0&&标准[hr]&&标准[hr][0]>9&&datb[i][0]>99){
            dy+="<tr><td></td><td colspan='4'><b><small>"+标准[hr][0]+"+</small> "+标准[hr][1]+"</b></td></tr>";
            hr+=1;
        }
        dy+="<tr><td>"+临时2+"</td><td onclick=\"复(制='"+datb[i][1].split("／")[0].split("<")[0]+"')\">"+datb[i][1]+"</td>";
        临时2=datb[i][0]/10;
        if(临时2>10){临时2="10+"}if(临时2<0){临时2="0-"}
        dy+="<td onclick=\"dw(dwd='"+datb[i][1].split("／")[0]+"',dwb='<table>";
        let 临时=datb[i][2];
            for(let i2=0;临时.length>i2;i2++){
                if(标准[0][i2]){
                    let 百分比=Math.round(临时[i2]/标准[0][i2][1]*10000)/100.00;
                    dy+="<tr><td>"+标准[0][i2][0]+"</td><td>"+临时[i2]+" / "+标准[0][i2][1]+"</td><td";
                    if(百分比>=100){dy+=" class=［引号］ysa［引号］"}else if(百分比<0){dy+=" class=［引号］ysb［引号］"}
                    dy+=">("+百分比+ "%)</td></tr>";
                }else{
                    dy+="<tr><td>额外</td><td>";
                    if(临时[i2]>0){dy+="+"}
                    dy+=临时[i2]+"</td><td></td></tr>";
                }
            }
            临时=临时2*10;
            dy+="<tr><td>　</td><td></td><td></td></tr><tr><td>总计</td><td";
            if(临时>=90){dy+=" class=［引号］ysa［引号］"}else if(临时<60){dy+=" class=［引号］ysb［引号］"}
            dy+=">"+临时+"</td><td></td></tr></table>')\">"+临时2+"</td><td>";
            for(let i2=3;datb[i].length>i2;i2++){
                dy+="<small> / </small>";
                临时2=datb[i][i2]+"";
                if(datb[i][i2][0]=="："){datb[i][i2]="分类"+datb[i][i2]}
                if(临时2.length==1){临时2+=".0"}
                if(datb[i][i2].split("://")[0]=="http"||datb[i][i2].split("://")[0]=="https"){
                    datb[i][i2]="链接：链接："+datb[i][i2];临时2=datb[i][i2];
                }
                if(datb[i][i2].indexOf("：链接：")!=-1){
                    临时2=临时2.split("：链接：");
                    dy+="<a href=\""+临时2[1]+"\" target=\"_blank\">"+临时2[0]+"</a>";
                }else if(datb[i][i2].indexOf("分类：")!=-1){
                    临时2=临时2.split("：")[1];
                    if(关键词.indexOf(临时2)!=-1){}else{dy+="<a onclick=\"dw2('"+临时2+"')\"><small>"+临时2+"</small></a>"}
                }else if(datb[i][i2].indexOf("：")!=-1){
                    临时2=临时2.split("：");
                    if(临时2[0]=="x"){
                        dy+=临时2[1];
                    }else if(临时2[0]=="b"){
                        dy+="<a href=\"https://www.bilibili.com/video/BV"+临时2[1]+"\" target=\"_blank\">视频</a>";
                    
                    }else{
                        dy+="<a onclick=\"dw(dwd='"+datb[i][1]+" "+临时2[0]+"',dwb='"+临时2[1]+"')\">"+临时2[0]+"</a>";
                        if(临时2[2]){dy+="<small>("+临时2[2]+")</small>"}
                    }
                }else if(datb[i][i2][0]=="_"){
                }else if(datb[i][i2]=="td"){dy+="</td><td>";
            }else if(临时2>0||临时2.length>40){ //超过字数为“更多” 原25
                dy+="<a onclick=\"dw(dwd='更多',dwb='"+临时2+"')\">更多</a>";
            }else{
                dy+=临时2;
            }
        }
        dy+="</td></tr>";
    }
dy+="</table>";

dy=dy.replace(/／/g,"</td><td>").replace(/<td><small>\ \/\ <\/small>/g,"<td>").replace(new RegExp(' / </small><small> / ', "g")," / ").replace(new RegExp('<td><small> / </small>', "g"),"<td>").replace(new RegExp('<small> / </small></td>', "g"),"</td>");
dy=dy.replace(/／/g,"</td><td>").replace(/<td><small>\ \/\ <\/small>/g,"<td>").replace(new RegExp(' / </small><small> / ', "g")," / ").replace(new RegExp('<td><small> / </small>', "g"),"<td>").replace(new RegExp('<small> / </small></td>', "g"),"</td>");

document.getElementById("结果").innerHTML=dy;

let 查重列表="／";
for(let i=0;datb.length>i;i++){
    if (查重列表.indexOf("／"+datb[i]+"／")!=-1){
        console.log(datb[i]);
        }else{
            查重列表+=datb[i]+"／";
        }
    }
}

let 排名的方式=0;
function 排名方式(){
    if(排名的方式==0){排名的方式=1;document.getElementById("排行").innerHTML = "<style>td span.a{display:none}</style>"}
    else{排名的方式=0;document.getElementById("排行").innerHTML = "<style>td span.b{display:none}</style>"}
}

dw2(0);
if(location.href.indexOf("?w=")!=-1){
    dw2(decodeURI(location.href.split("?w=")[1]));
}else if(location.href.indexOf("?")!=-1){
    dw2(decodeURI(location.href.split("?")[1]));
}

function 取消(o){
    if(关键词.indexOf(o)!=-1){
        for(let i=0;关键词.length>i;i++){
            if(关键词[i]==o){
                关键词.splice(i,1);
                dw2(1);
                break;
            }
        }
    }
}
