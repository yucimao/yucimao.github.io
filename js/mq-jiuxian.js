/*
<div id="酒仙"></div>
<div id="正文">
［跳转］
</div>
<script>
let 表={ //"名字_不同版本":["颜色","颜色／文字"], 酒、场景、人、价格 绿、白、黄 留空为灰
// "":["酒","／"],
};
let 表_代码={ //"按钮_跳转":"h4_按钮"
    "A":"内容",
};
</script>
<script src="/js/mq-jiuxian.js"></script>
*/

document.getElementById("酒仙").innerHTML="<style>#弹窗{position: absolute;left:0;position:fixed;bottom:0;margin:0 0 15px 20px;line-height:18px;padding:7px;width:300px;border-style:solid;border-radius:5px;border:2pxsolid #535353;background-color:#060f27d3;color:#b6b6b6;font-size:12px;z-index:1000;}#弹窗 .标题{color:#e4e4e4;font-weight:bold;font-size:14px;}#弹窗 .绿{color:#07F602;}#弹窗 .白{color:#e4e4e4;}#弹窗 .黄{color:#EBBC06;}#弹窗 .酒{color:#23A8F2;}#弹窗 .场景{color:#EBBC06;}#弹窗 .人{color:#07F602;}#弹窗 .价格{color:#6551B8;}#弹窗 .使用{color:#CCCCCC;}[onmousemove]{color:#006699;}[onmousemove].x{color:var(--body-color);border-bottom:1.8px solid #08f;}#right_anchor,#right_anchor2{display:none !important;}</style><div id=\"弹窗\" style=\"display:none;\"></div>";

let o="";
let oo="";

let 跳转="";

// window.onload=function(){
    let 正=document.getElementById("正文").innerHTML.split("〈");
    let 文=正[0];
    let 遗漏="";
    for(let i=1;正.length>i;i++){
        let 临时=正[i].split("〉");
        if(临时[0][0]=="h"&&临时[0][1]>0&&临时[0][2]=="|"){
            let 临时2=临时[0].split("|");
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
        }else{
            let 显示=临时[0];
            let 实际=显示;
            if (显示.indexOf("|") != -1){显示=显示.split("|");实际=显示[1];显示=显示[0];}
            显示=显示.split("_")[0];
            let 临时3="";
            if(表_代码[实际+"_跳转"]){临时3=" href=\"#"+表_代码[实际+"_跳转"]+"\""}
            if(表[实际]){
                if(表[实际][0]=="酒"){文+="<a"+临时3+" onmousemove=\"进入(o='"+实际+"')\" onmouseout=\"离开()\">"+显示+"</a>"+临时[1];}
                else{文+="<a"+临时3+" class=\"x\" onmousemove=\"进入(o='"+实际+"')\" onmouseout=\"离开()\">"+显示+"</a>"+临时[1];}
            }else{文+="<a"+临时3+" class=\"x\" onmousemove=\"进入(o='"+实际+"')\" onmouseout=\"离开()\">"+显示+"</a>"+临时[1];遗漏+="<br>"+实际;}
        }
    }
    if(遗漏!=""){文+="<br><br><small><b>出现遗漏：</b>"+遗漏+"</small>";alert("出现遗漏");}
    文=文.split("［跳转］")
    document.getElementById("正文").innerHTML = 文[0]+跳转+文[1];
// }

function 进入(){
    if(表[o]){
        if(oo!=o){
        oo=表[o];
        let dy="";
        for(let i=0;oo.length>i;i++){
            let 临时=oo[i].split("／");
            // if(临时[0]=="酒" && 临时[1]){dy+="<div class='标题 "+临时[1]+"'>"+o+"</div>";}
            if(临时[0]=="价格"){dy+="<div class='标题 价格'>出售单价："+临时[1]+"</div>";}
            else if(临时[0]=="代码"){
                if(临时[2]){}else{临时[2]="使用";}
                if(临时[1].length==2){dy+="<div class='标题 "+临时[2]+"'>"+表_代码[临时[1]]+"</div>";}
                else{dy+="<div class='标题 "+临时[2]+"'>"+临时[1]+"</div>";}
            }
            else if(i==0 && 临时[1]){dy+="<div class='标题 "+临时[0]+"'>"+临时[1]+"</div>";}
            else if(i==0){dy+="<div class='标题 "+临时[0]+"'>"+o.split("_")[0]+"</div>";}
            else{dy+="<div class='"+临时[0]+"'>"+临时[1]+"</div>";}
        }
        document.getElementById("弹窗").innerHTML = dy;
    }
        oo=o;
    }
    else{
        document.getElementById("弹窗").innerHTML = "“<b>"+o+"</b>”条目存在错误，<br>请联系QQ<b>{{ site.mq_qq }}</b>反馈问题。";
    }
    document.getElementById("弹窗").style="";
}
function 离开(){document.getElementById("弹窗").style="display:none;";}
