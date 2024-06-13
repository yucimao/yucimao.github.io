let dy="<link rel='stylesheet' href='/css/all2.css'><style>[灰]{color:#00000020;}</style>";

let t=10;
let 记=0,录=0;

let 编号=1;

for(let i=0;d.length>i;i++){
    if(d[i][0][0]=="h"&&d[i][0][1]>0&&d[i][0].length==2){
        编号=1;

        if(录>=t){dy+="</table></div>"}else if(i!=0){dy+="</table>";}
        记+=1;
        dy+="<"+d[i][0]+">"+d[i][1]+"</"+d[i][0]+">";
        if(d[i][2]){dy+=d[i][2]}
        dy+="<table>";
        录=0;
    }else{
        录+=1;
        if(录==t){
            dy+="</table><a onclick=\"显示('_"+记+"')\" id='显示_"+记+"'><b>更多</b></a><div id='隐藏_"+记+"' style='display:none;'><table>";
        }

        dy+="<tr><td>";
            if(d[i][3]&&d[i][3]==1){dy+="<i 灰>-</i>"}
            else{dy+=编号;编号+=1;}
            dy+="</td><td>";
            if(d[i][0]){
                d[i][0]=d[i][0].split("／");
                if(d[i][0][1]){d[i][0][1]="　"+d[i][0][1]}else{d[i][0][1]="";}
                if(d[i][0][2]){d[i][0][2]="<small>　"+d[i][0][2]+"</small>"}else{d[i][0][2]="";}
                dy+="<b>"+d[i][0][0]+"</b>"+d[i][0][1]+d[i][0][2];
            }
            dy+="</td><td>";
            if(d[i][1]){dy+=d[i][1]}
            if(d[i][2]){
                dy+=" <fieldset id='隐藏"+i+"' style='display:none;'><legend></legend>"+d[i][2]+"</fieldset><a onclick='显示("+i+")' id='显示"+i+"'>详情</a>";
            }
        dy+="</td></tr>";
    }
}
document.getElementById("结果").innerHTML=dy+"</table>";

function 显示(o){
    document.getElementById("显示"+o).style="display:none;";
    document.getElementById("隐藏"+o).style="";
}