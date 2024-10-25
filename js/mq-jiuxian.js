document.getElementById("酒仙").innerHTML="<style>#弹窗{position:absolute;left:0;position:fixed;bottom:0;margin:0 0 15px 20px;line-height:18px;padding:7px;width:300px;border-style:solid;border-radius:5px;border:2pxsolid #535353;background-color:#060f27d3;color:#b6b6b6;font-size:12px;z-index:1000;}#弹窗 .标题{color:#e4e4e4;font-weight:bold;font-size:14px;}.提示.灰,#弹窗 .灰,sup.灰{color:#b6b6b6;}#弹窗 .绿{color:#07F602;}#弹窗 .蓝{color:#1879ce}#弹窗 .紫{color:#A827F7}#弹窗 .白{color:#e4e4e4;}#弹窗 .黄,#弹窗 .金{color:#EBBC06;}#弹窗 .红{color:#ff0000;}#弹窗 .酒{color:#23A8F2;}#弹窗 .水{color:#3fc5ff}#弹窗 .使用{color:#CCCCCC;}[onmousemove]{color:#006699;}[onmousemove].x{color:var(--body-color);border-bottom:1.2px solid #08f;}#right_anchor,#right_anchor2{display:none !important}[onmousemove^='进入(']{cursor:default}a[href]{cursor:pointer;}a[href]:after{font-size:0.6em;content:'⤴';color:#bbbbbb;}i{font-size:0.8em;color:#bbbbbb;font-weight:normal;letter-spacing:2px}[one] i{color:#EBBC06;font-weight:bold}</style><div id=\"弹窗\" style=\"display:none;\"></div>";

let oo="";
let 跳转="";

let 正=document.getElementById("正文").innerHTML.split("〈");
let 文=正[0];
let 遗漏=[];
for(let i=1;正.length>i;i++){
    let 临时=正[i].split("〉");
    let 临时2=临时[0].split("|");
    if(临时[0][0]=="h"&&临时[0][1]>0&&临时[0][2]=="|"){
        文+="<a name='"+临时2[0]+"_"+临时2[1]+"'></a><"+临时2[0]+">"+临时2[1].split("_")[0]+"</"+临时2[0]+">"+临时[1];
        if(临时2[0]=="h2"){跳转+="<h4><a href='#"+临时2[0]+"_"+临时2[1]+"'>"+临时2[1].split("_")[0]+"</a></h4>";}
        if(临时2[0]=="h3"){跳转+="<a href='#"+临时2[0]+"_"+临时2[1]+"'><b>"+临时2[1].split("_")[0]+"</b></a><br>";}
        if(临时2[0]=="h4"){跳转+=" <small><a href='#"+临时2[0]+"_"+临时2[1]+"'>"+临时2[1].split("_")[0]+"</a></small><br>";}
    }else if(临时[0][0]=="跳"&&临时[0][1]=="转"&&临时[0][2]=="|"){
        let 临时2=临时[0].split("|");
        文+="<a href='#"+临时2[1]+"'>"+临时2[1].split("_")[0]+"</a>"+临时[1];
    }else if(临时[0][0]=="目"&&临时[0][1]=="标"&&临时[0][2]=="|"){
        let 临时2=临时[0].split("|");
        文+="<a name='"+临时2[1]+"'></a>"+临时[1];
    }else if(临时[0][0]=="?"&&临时[0][1]=="|"){
        let 临时2=临时[0].split("|");
        if(!临时2[2]){
            临时2[2]="?";
        }
        // 文+="<sup class='提示 灰' data-msg='"+临时2[1]+"'>〔"+临时2[2]+"〕</sup>"+临时[1];


        文+="<sup onclick=\"this.style.display='none';this.nextElementSibling.style.display='inline'\"><a>〔"+临时2[2]+"〕</a></sup><sup class='灰' style='display:none;'>〔"+临时2[1]+"〕</sup>"+临时[1];

    }else if(临时[0]=="h0"){跳转+="<br>"
    }else if(临时2[0]=="zk"){
        if(!临时2[2]){临时2[2]="详情"}if(临时2[3]){}else{临时2[3]=临时2[2]}文+="<a onclick=\"dw(dwb='"+临时2[1]+"',dwd='"+临时2[3]+"')\">"+临时2[2]+"</a>"+临时[1];
    }else{
        let 显示=临时[0];
        let 实际=显示;
        if(显示.indexOf("|")!=-1){显示=显示.split("|");实际=显示[1];显示=显示[0];}
        显示=显示.split("_")[0];

        let 临时3="";
        if(表_代码[实际+"_跳转"]){临时3=" href=\"#"+表_代码[实际+"_跳转"]+"\""}
        if(表[实际]){
            if(表[实际][0][0]=="酒"){文+="[<a"+临时3+" onmousemove=\"进入('"+实际+"')\" onmouseout=\"离开()\">"+显示+"</a>]";文+=临时[1]}
            else{文+="[<a"+临时3+" class=\"x\" onmousemove=\"进入('"+实际+"')\" onmouseout=\"离开()\">"+显示+"</a>]"+临时[1];}
        }else{文+="[<a"+临时3+" class=\"x\" onmousemove=\"进入('"+实际+"')\" onmouseout=\"离开()\">"+显示+"</a>]"+临时[1];
        遗漏[遗漏.length]=实际;表[实际]=[实际,"灰／“<b>"+实际+"</b>”条目存在错误，<br>请联系QQ<b>{{ site.mq_qq }}</b>反馈问题。"]}
    }
}
if(遗漏.length!=0){console.log("〈"+遗漏.join("〉〈")+"〉")}
文=文.replace(new RegExp('\\[',"g"),"<i> [<\/i>").replace(new RegExp('\\]',"g"),"<i>] <\/i>").replace(new RegExp('〔',"g"),"[").replace(new RegExp('〕',"g"),"]");
文=文.split("［跳转］");
文=文[0]+跳转+"<br><a href='#酒的列表'>酒的列表</a>"+文[1]+"<hr><a name='酒的列表'></a><h3>酒的列表</h3><ol>"

let keys=Object.keys(表);
keys.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));

for(let i=0;keys.length>i;i++){
    if(表[keys[i]][0][0]=="酒"){
        let 临时=表[keys[i]].join("／")+"／";

        let 临时3="";
        if(表_代码[keys[i]+"_跳转"]){临时3=" href=\"#"+表_代码[keys[i]+"_跳转"]+"\""}

        if(临时.indexOf("／金／")!=-1){
            临时=临时.split("／金／")[1].split("／")[0];
            文+="<li><a"+临时3+" onmousemove=\"进入('"+keys[i]+"')\" onmouseout=\"离开()\">"+keys[i].split("_")[0]+"</a>："+临时+"</li>";
        }else{
            文+="<li><a"+临时3+" onmousemove=\"进入('"+keys[i]+"')\" onmouseout=\"离开()\">"+keys[i].split("_")[0]+"</a></li>";
        }
    }

    if(表_代码[keys[i]+"_跳转"]){表[keys[i]][表[keys[i]].length]="灰／(点击跳转)"}

    let dy="";
    for(let i2=0;表[keys[i]].length>i2;i2++){
        let 临时=表[keys[i]][i2].split("／");
        
        // if(临时[0]=="酒"&&临时[1]){dy+="<div class='标题 "+临时[1]+"'>"+o+"</div>";}
        if(临时[0]=="代码"){
            if(表_代码[临时[1]]){临时=表_代码[临时[1]].split("／");}
            else{console.log(临时[1])}
        }

        if(i2==0){
            if(临时[2]&&临时[2]!=""){临时[0]=临时[2]}
            if(临时[1]&&临时[1]!=""){dy+="<span class='标题 "+临时[0]+"'>"+临时[1]+"</span>"}
            else{dy+="<span class='标题 "+临时[0]+"'>"+keys[i].split("_")[0]+"</span>"}

        }else{
            if(临时.length<2){临时[1]=临时[0];临时[0]="";console.log(keys[i])}
            if(!临时[2]&&临时[2]!="x"){dy+="<br>"}dy+="<span class='"+临时[0]+"'>"+临时[1]+"</span>";
        }
    }
    表[keys[i]]=dy;
}
文+="</ol>";
document.getElementById("正文").innerHTML=文;


function 进入(o){
    if(表[o]){
        if(oo!=o){
        document.getElementById("弹窗").innerHTML = 表[o];
    }
        oo=o;
    }
    else{
        document.getElementById("弹窗").innerHTML = "“<b>"+o+"</b>”条目存在错误，<br>请联系QQ<b>{{ site.mq_qq }}</b>反馈问题。";
    }
    document.getElementById("弹窗").style="";
}
function 离开(){document.getElementById("弹窗").style="display:none"}
