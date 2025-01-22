let datb=Object.keys(d);
for(let i=0;datb.length>i;i++){
    datb[i]=[0,datb[i],0];
    for(let k=0;d[datb[i][1]].length>k;k++){
        datb[i][0]+=d[datb[i][1]][k][0]*(d[datb[i][1]][k].length-1);
        datb[i][2]+=d[datb[i][1]][k].length-1;
    }
}

let y=[];

for(let i=0;datb.length>i;i++){
let 临时=0;
for(let ii=0;y.length>ii;ii++){
    if(datb[i][0]>y[ii][0]){
        y.splice(ii,0,datb[i]);
        临时=1;
        break;
    }
}
if(临时==0){
    y[y.length]=datb[i];
}
}

let dy="<link rel='stylesheet' href='/css/all2.css'><style>legend{font-size:1.2em;font-weight:bold}tr td:first-child small{color:#aaaaaa;}.正{color:#FB8B00;font-weight:bold}.负{color:#ff0000}</style>";

for(let i=0;y.length>i;i++){
    dy+="<fieldset><legend>"+y[i][1]+" <span class='提示' data-msg='平均"+(y[i][0]/y[i][2]*10+"").split(".")[0]/10+"'>♥"+y[i][0]+"</span></legend><div id='"+y[i][1]+"'><ol>";
    let 数字=3;
    for(let i2=0;d[y[i][1]].length>i2;i2++){
        for(let i3=1;d[y[i][1]][i2].length>i3;i3++){
            dy+="<li><b>"+d[y[i][1]][i2][i3].split("／")[0]+"</b></li>";
            数字-=1;
            if(数字==0){break;}
        }
        if(数字==0){break;}
    }
    if(y[i][2]>3){dy+="<li><a onclick=\"更多('"+y[i][1]+"')\">更多 <small>(共"+y[i][2]+")</small></a></li>"}
    dy+="</ol></div></fieldset><br>";
}

document.getElementById("dy").innerHTML=dy;

let 星={
    5:["★★★★★","超级喜欢"],
    4:["★★★★","非常喜欢"],
    3:["★★★","很喜欢"],
    2:["★★","喜欢"],
    1:["★","还行"],
    0:["〇","无感"],
    "-1":["×","不喜欢"],
    "-2":["××","反感"],
    "-3":["×××","讨厌"],
    "-4":["××××","厌恶"],
    "-5":["×××××","仇恨"],
}

function 更多(o){
    dy="<table>";
    let 数字=1;
    for(let i=0;d[o].length>i;i++){

        dy+="<tr><td colspan='3' class='";
        if(d[o][i][0]>0){dy+="正"}else{dy+="负"}
        dy+="'>";

        if(星[d[o][i][0]]){dy+="<span class='提示' data-msg='"+星[d[o][i][0]][1]+"'>"+星[d[o][i][0]][0]+"</span>";}
        else if(d[o][i][0]>0){dy+="".padStart(d[o][i][0],'★')}
        else{dy+=d[o][i][0]}

        dy+="</td></tr>"
        
        for(let k=1;d[o][i].length>k;k++){
            if(d[o][i][k].indexOf("／")!=-1){
                dy+="<tr><td><small>"+数字+"</small></td><td><b>"+d[o][i][k].replace(new RegExp('／',"g"),"</b></td><td>")+"</td></tr>";
            }else{
                dy+="<tr><td><small>"+数字+"</small></td><td><b>"+d[o][i][k]+"</b></td><td></td></tr>";
            }
        数字+=1;
        }
    }
    dy+="</table>";
    document.getElementById(o).innerHTML=dy;
}