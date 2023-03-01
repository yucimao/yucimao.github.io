let 天=[0,31,28,31,30,31,30,31,31,30,31,30,31];
let th="<table class='x_table bukexuanzhong xqc'><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr><tr>";
let 猫球二扯=["猫球","二扯"];

function 打印(o){
let 空=d[0][1];
let dy="";
let 天数=[];
let 猫球=[];
let 二扯=[];

dy+="<style>"+
    ":root{--xq:#f0f0f0;--xq5:#2977db;--xq4:#7eb0f3;--xq3:#B8CDE6;--xq2:#FAD4D3;--xq1:#F77567;--xq0:#DF402A;}"+
    ".xq{background-color:#f0f0f0;color:#ffffff;}"+
    ".xqc td,.xqc th{font-size:1.2em;text-align:center;}"+
    ".tsx{position: relative;display: inline-block;text-decoration: underline dotted;}.tsx .tsxt{border: 1px solid #c0c0c0;visibility: hidden;width: 400px;background-color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;top: 80%;left: 50%;margin-left: -200px;}.tsx:hover .tsxt{color:var(--body-color);transform:translate(0,20px);transition:all 0.5s;visibility: visible;}.tsx{text-decoration:underline;}"+
    "</style>";

dy+="<table class='x_table xqc'><tr>";
for(let i=5;i>-1;i--){
    dy+="<td class='xq' style='background-color:var(--xq"+i+")'>"+评分[i][0]+"<br>"+评分[i][1]+"</td>";
}
dy+="</tr></table>";

if(o!=2){dy+="<b>";}
dy+="<a onclick='打印(1)'>猫球</a> ";
if(o!=2){dy+="</b>";}
dy+=" / ";
if(o!=1){dy+="<b>";}
dy+="<a onclick='打印(2)'>二扯</a>";
if(o!=1){dy+="</b>";}
if(o!=0){dy+="<small>（<a onclick='打印(0)'>猫球和二扯</a>）</small>";}

dy+="<h2>"+d[0][0]+"年</h2>";
if(d[0]%4==0&&d[0]%100!=0||d[0]%400==0){d[0][2]=29;}

for(let i=1;13>i;i++){
    if(d[i]){
        天数[i]=0;
        猫球[i]=[0,0,0,0,0,0];
        二扯[i]=[0,0,0,0,0,0];
        dy+="<h3>"+i+"月</h3>"+th;
        for(let i2=0;空>i2;i2++){
            dy+="<td></td>";
        }
        let 当前=0;
        for(let i2=1;天[i]+1>i2;i2++){
            if(空==7){dy+="</tr><tr>";空=1;}else{空+=1;}
            if(d[i][当前]){
                天数[i]+=1;
                let 临时=d[i][当前].split(".");
                if(i2==临时[0]){
                    if(临时[3]){
                        临时[3]="<div class=\"tsx\">"+i2+"<span class=\"tsxt\">"+临时[3]+"</span></div>"
                    }else{临时[3]=i2;}
                    猫球[i][临时[1]]+=1;
                    二扯[i][临时[2]]+=1;
                    if(o==1){临时[2]=临时[1]}else if(o==2){临时[1]=临时[2];}
                    dy+="<td class='xq' style='background:linear-gradient(to top left,var(--xq"+临时[2]+") 0%,var(--xq"+临时[2]+") 40%,var(--xq"+临时[1]+") 60%,var(--xq"+临时[1]+") 100%);'>"+临时[3]+"</td>";
                    当前+=1;
                }else if(d[i][当前]){
                    猫球[i][3]+=1;二扯[i][3]+=1;
                    dy+="<td class='xq' style='background-color:var(--xq3)'>"+i2+"</td>";
                }else{
                    dy+="<td class='xq'>"+i2+"</td>";
                }
            }else{
                break;
            }
        }
        dy+="<tr><td style='font-size:10px;'>　</td></tr>";


        for(let i2=0;2>i2;i2++){
            let 临时;
            if(i2==0){临时=猫球[i].slice();}else{临时=二扯[i].slice();}
            if(i2==0&&o!=2||i2==1&&o!=1){
                临时[1]+=临时[0];
                临时[2]+=临时[1];
                临时[3]+=临时[2];
                临时[4]+=临时[3];
                dy+="<tr><td class='xq' colspan='7' style='font-size:10px;background:linear-gradient(to right,"+
                "var(--xq0) 0%,"+
                "var(--xq0) "+临时[0]/天数[i]*100+"%,"+
                "var(--xq1) "+临时[0]/天数[i]*100+"%,"+
                "var(--xq1) "+临时[1]/天数[i]*100+"%,"+
                "var(--xq2) "+临时[1]/天数[i]*100+"%,"+
                "var(--xq2) "+临时[2]/天数[i]*100+"%,"+
                "var(--xq3) "+临时[2]/天数[i]*100+"%,"+
                "var(--xq3) "+临时[3]/天数[i]*100+"%,"+
                "var(--xq4) "+临时[3]/天数[i]*100+"%,"+
                "var(--xq4) "+临时[4]/天数[i]*100+"%,"+
                "var(--xq5) "+临时[4]/天数[i]*100+"%,"+
                "var(--xq5) 100%);'><b>"+猫球二扯[i2]+"</b></td></tr>";
            }
        }

        dy+="</table>"
    }else{
        break;
    }
}

dy+="<br><hr><br><table class='x_table bukexuanzhong xqc'>";
天数[0]=0;for(let i=1;天数.length>i;i++){天数[0]+=天数[i];}

for(let i=0;2>i;i++){
    let 临时=[0,0,0,0,0,0],临时2;
    if(i==0){临时2=猫球.slice();}else{临时2=二扯.slice();}
    if(i==0&&o!=2||i==1&&o!=1){
        for(let i2=1;临时2.length>i2;i2++){
            临时[0]+=临时2[i2][0];
            临时[1]+=临时2[i2][1];
            临时[2]+=临时2[i2][2];
            临时[3]+=临时2[i2][3];
            临时[4]+=临时2[i2][4];
            临时[5]+=临时2[i2][5];
        }
        
        临时2=临时.slice();
        for(let i2=0;6>i2;i2++){
            临时[i2+1]+=临时[i2];
            临时[i2]=(临时[i2]/天数[0]*1000+"").split(".")[0]/10;
        }
        dy+="<tr><td class='xq' style='width:100vh;background:linear-gradient(to right,"+
        "var(--xq0) 0%,"+
        "var(--xq0) "+临时[0]+"%,"+
        "var(--xq1) "+临时[0]+"%,"+
        "var(--xq1) "+临时[1]+"%,"+
        "var(--xq2) "+临时[1]+"%,"+
        "var(--xq2) "+临时[2]+"%,"+
        "var(--xq3) "+临时[2]+"%,"+
        "var(--xq3) "+临时[3]+"%,"+
        "var(--xq4) "+临时[3]+"%,"+
        "var(--xq4) "+临时[4]+"%,"+
        "var(--xq5) "+临时[4]+"%,"+
        "var(--xq5) 100%);'>"+猫球二扯[i]+" ";
        for(let i2=0;临时2.length>i2;i2++){
            dy+=" / <small>"+评分[i2]+" </small>"+临时2[i2];
        }
        dy+="</td></tr>";
    }
}

document.getElementById("dy").innerHTML=dy;
}

打印(0);