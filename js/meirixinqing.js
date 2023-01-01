let mr_0="<table class=\"x_table bukexuanzhong\">";
let mr_1="<th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th>";
mr_1="<tr>"+mr_1+"<th>　</th>"+mr_1+"</tr>";
let 周=0;
let dy_style="<style>[class^='xq']{text-align:center;width:1em;height:1em;color:#ffffff;background-color:#f0f0f0;}.xq5{background-color:#2977db;}.xq4{background-color:#7eb0f3;}.xq3{background-color:#B8CDE6;}.xq2{background-color:#FAD4D3;}.xq1{background-color:#F77567;}.xq0{background-color:#DF402A;}.xqx,th{background-color:#ffffff;}.tsx {position: relative;display: inline-block;text-decoration: underline dotted;}.tsx .tsxt {border: 1px solid #c0c0c0;visibility: hidden;width: 400px;background-color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;top: 80%;left: 50%;margin-left: -200px;}.tsx:hover .tsxt {color:var(--body-color);transform:translate(0,20px);transition:all 0.5s;visibility: visible;}[onclick^='dw(dwb='],[onclick^='window.location.href'],[onclick^='dw(dwb='] .tsx,[onclick^='window.location.href'] .tsx{text-decoration: underline;cursor:pointer;}</style>";
let dy=dy_style+mr_0+"<tr><td class=\"xq5\">"+data_a[5]+"</td><td class=\"xq4\">"+data_a[4]+"</td><td class=\"xq3\">"+data_a[3]+"</td><td class=\"xq2\">"+data_a[2]+"</td><td class=\"xq1\">"+data_a[1]+"</td><td class=\"xq0\">"+data_a[0]+"</td></tr></table><small>（左边是猫球的，右边是二扯的）</small><br>"+mr_0;
for(let i=0;data.length>i;i++){
    let 临时=data[i].split("／");
    if(临时[0]=="年"){周=0;dy+="</table><h2>"+临时[1]+"年</h2>"+mr_0+mr_1;}
    else if(临时[0]=="月"){周=0;dy+="</table><h3>"+临时[1]+"月</h3>"+mr_0+mr_1;}
    else{
        if(周==0){dy+="<tr>";}
            // if(临时[1]){}else{临时[1]="3";}
        if(临时[0]=="0"){dy+="<td class=\"xqx\"></td>";}else{
            dy+="<td class=\"xq"+临时[1]+"\"";
            if(临时[3]){
                if(临时[3].substring(0,4)=="http" || 临时[3].substring(0,1)=="/"){dy+=" onclick=\"window.location.href='"+临时[3]+"'\"";}
                else{dy+=" onclick=\"dw(dwb='"+临时[3]+"')\"";}
            }
            dy+=">";
            if(临时[2]){dy+="<div class=\"tsx\">"+临时[0]+"<span class=\"tsxt\">"+临时[2]+"</span></div>";}else{dy+=临时[0];}
        }
        dy+="</td>";
        周+=1;
        if(周==7){dy+="<td></td>";}else if(周==14){dy+="</tr>";周=0;}
    }
}
dy=dy.replace(mr_0+mr_1+"<\/table>","");
dy=dy.replace(mr_0+"<\/table>","");
document.getElementById("dy").innerHTML = dy;