
let dy="<meta name='viewport' content='width=device-width, initial-scale=1'>";
let 临时;
let 博客="https://limaoqiu.com/";

if(typeof(h1)!="undefined"){
dy+="<h1>"+h1+"</h1>"
if(h1=="异梦笔记"){dy+="　<input type='text' id='输入' placeholder='搜索' onkeyup='确定()'/><div id='结果'></div>"}else{dy+=" <nav><a href='0.html'>总目录</a>";
for(let i=0;nav.length>i;i++){
    临时=nav[i].split("／");
    临时=临时[临时.length-1];
    dy+=" / <a href='"+nav[i]+".html'>"+临时+"</a>";
}}
dy+="</nav><hr>";
dy+="<div class='index'><div class='index_top'><a onclick='编辑()'>编辑</a>　<a onclick='javascript:location.reload();'>刷新</a>　<a href='#top'>top</a><br></div><br>";
for(let i=0;index.length>i;i++){
    if(index[i]=="br"){dy+="<br>";}else{dy+="<a href='#"+index[i]+"'>"+index[i]+"</a><br>";}
}
dy+="<br></div>";

临时=h1.replace(/<small>/g, "");
临时=临时.replace(/<\/small>/g, "");
document.title = 临时;
}

if(typeof(sjtk)!="undefined"){dy+="<button onclick='sjtk_随机()'>随机</button> <a onclick='sjtk_全部显示()'>全部显示</a><div id='sjtk'></div>";}
if(typeof(qm)!="undefined"){dy+="<button onclick='打(乱=qm);qm_随机()'>随机</button><input type='text' id='qm_输入' placeholder='抽取次数'/><br><br><div id='qm'></div>";}
dy+="<div id='dy2'></div><textArea id='复制' style='position:absolute;top:-1000px'></textArea>";
document.getElementById("dy").innerHTML = dy;



let 制;function 复(){document.getElementById('复制').value = 制;let 复制 = document.querySelector('#复制');复制.select();document.execCommand("Copy");}
let 客;function 博(){window.location.href=博客+客;}
let 乱;function 打(){let _乱 = 乱.slice();for (let i = 0; i < _乱.length; i++) {let j = getRandomInt(0, i);let t = _乱[i];_乱[i] = _乱[j];_乱[j] = t;}function getRandomInt(min, max) {return Math.floor(Math.random() * (max - min + 1) + min);}乱=_乱;}



let 次数=0;
function sjtk_随机(){
    if(次数==0){打(乱=sjtk);}
    if(乱.length==次数){
        document.getElementById("sjtk").innerHTML = "题库已空";
        次数=0;
    }else{
        document.getElementById("sjtk").innerHTML = "<a onclick='删除码()'>删除码</a><br><iframe src='1/"+乱[次数]+".html' height=100% width=100%></iframe>";
        次数+=1;
    }
}
function sjtk_全部显示(){
    次数="";
    for(let i=0;sjtk.length>i;i++){
        次数+="<br><b><a onclick=\"复(制='"+sjtk[i]+"')\">"+sjtk[i]+"（删除码）</a></b>"+"<iframe src='1/"+sjtk[i]+".html' height=100% width=100%></iframe><br>";
    }
    document.getElementById("sjtk").innerHTML = 次数;
}
function 删除码(){复(制="\""+sjtk[次数-1]+"\"");}

if(typeof(qm)!="undefined"){乱=qm;临时="qm不随机";qm_随机();}
function qm_随机(){
    let qm_输入 = document.getElementById("qm_输入").value;
    if(qm_输入>0){
        dy="<div class='qm'>";
        for(let i=0;qm_输入>i&&乱.length>i;i++){
            if(乱[i][0]!="hr"){
                if(乱[i][1]!=""||乱[i][2]!=""){//<a onclick="复(制='')"></a>
                    dy+="<p onclick=\"复(制='"+乱[i][0]+"')\"><span class='提'>"+乱[i][0]+"<span class='示'><small>说明：</small>"+乱[i][1]+"<br><br><small>使用情况：</small>"+乱[i][2]+"</span></span></p>";
                }else{
                    dy+="<p onclick=\"复(制='"+乱[i][0]+"')\">"+乱[i][0]+"</p>";
                }
            }
        }
        dy+="</div>";
    }else{
        dy="<table><tr><td style='min-width:3em'><b>条目</b></td><td style='min-width:10em'><b>说明</b></td><td style='min-width:10em'><b>使用情况</b></td></tr>";
        for(let i=0;乱.length>i;i++){
            if(临时=="qm不随机"&&乱[i][0]=="hr"){dy+="<tr><td colspan='3'><h3>"+乱[i][1]+" <small>"+乱[i][2]+"</small></h3></td></tr>";}
            if(乱[i][0]!="hr"){dy+="<tr><td onclick=\"复(制='"+乱[i][0]+"')\">"+乱[i][0]+"</td><td>"+乱[i][1]+"</td><td>"+乱[i][2]+"</td></tr>";}
        }
        dy+="</table>";
    }
    document.getElementById("qm").innerHTML = dy;
}

let wzjm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let 锁;function 解(){
    let 锁id=锁.split("／")[0];
    锁=锁.split("／")[1];
    let wzjm_b="";
    let wzjm_c=localStorage.getItem("异梦笔记");
    for(let i=0;wzjm_c.length>i;i++){
        if(wzjm_b.indexOf(wzjm_c[i]) != -1){}
        else{
            wzjm_b+=wzjm_c[i];
        }
    }
    for(let i=0;wzjm.length>i;i++){
        if(wzjm_b.indexOf(wzjm[i]) != -1){}
        else{
            wzjm_b+=wzjm[i];
        }
    }

    wzjm_c = new RegExp('', "g");
    锁 = 锁.replace(wzjm_c, '／');

    for(let i=0;wzjm_b.length>i;i++){
        let 临时="／"+wzjm_b[i];
        let 临时b=wzjm[i];

        wzjm_c = new RegExp(临时, "g");
        锁 = 锁.replace(wzjm_c, 临时b);
    }
    wzjm_c = new RegExp("／", "g");
    锁 = 锁.replace(wzjm_c, "");
    锁 = window.decodeURIComponent(atob(锁));
    document.getElementById(锁id).innerHTML = 锁;
}

function 编辑(){
    if (window.location.href.indexOf("file:///") != -1){
        制=window.location.href.replace(/file:\/\/\//g, "").split(":/");
        制=制[0]+": & Code /"+decodeURI(制[1].split("#")[0])+" & exit";
        复();
        window.location.href="pvocmd://";
    } else {
        alert("编辑功能仅在本地有效。");
        制="D:/MQ/博客/yucimao.github.io/wen/"+decodeURI(decodeURI(window.location.href.split(".com/wen/")[1]));
        复();
    }
}




window.onload = function () {
    乱="a";
    for(let i=0;2>i;i++){
        if(document.getElementById(乱)){
        临时=document.getElementById(乱).innerHTML;
        临时=临时.split("〈");
        dy=临时[0];
        for(let i=1;临时.length>i;i++){
            let 临时2=临时[i].split("〉");
            if (临时2[0].indexOf("|") != -1){
                let 临时3=临时2[0].split("|");
                if(临时3[0]=="解锁"){dy+="<span id='"+i+"' onclick=\"解(锁='"+i+"／"+临时3[1]+"')\" class='zhushi'></span>";}
                else if(临时3[0]=="提示"){dy+="<div class='提'>"+临时3[1]+"<span class='示'>"+临时3[2]+"</span></div>";}
                else if(临时3[0]=="复制"){dy+="<a onclick=\"复(制='"+临时3[2]+"')\">"+临时3[1]+"</a>";}
                else if(临时3[0]=="图片"){dy+="<a href='2/"+临时3[1]+".jpg' target='_blank'><img src='2/"+临时3[1]+".jpg' width="+临时3[2]+" "+临时3[3]+"></a>";}
                else if(临时3[0]=="随机题库"){
                    客="sjtk?t="+临时3[2];
                    if(临时3[3]){客+="&c="+临时3[3];}
                    if(临时3[4]){客+="&f="+临时3[4];}
                    if(临时3[5]){客+="&m="+临时3[5];}else{客+="&m="+localStorage.getItem("sjtk_异梦笔记");}
                    dy+="<a onclick=\"博(客='"+客+"')\">"+临时3[1]+"</a>";
                }
                else{dy+="<a href='"+临时3[1]+".html'>"+临时3[0]+"</a>";}
            }else{
                if(临时2[0]=="博客"){dy+=博客;}
                else{dy+="<a href='"+临时2[0]+".html'>"+临时2[0]+"</a>";}
            }
            dy+=临时2[1];
        }
        if(乱=="a"){dy+="<br class='a'><br class='a'><br class='a'><br class='a'><br class='a'>";}
        dy=dy.replace(/\n/g, "");
        dy=dy.replace(/<br><br><br><br><br>/g, "<br><br class='a'><br class='a'><br class='a'><br class='a'>");
        dy=dy.replace(/<br><br><br><br>/g, "<br><br class='a'><br class='a'><br class='a'>");
        dy=dy.replace(/<br><br><br>/g, "<br><br class='a'><br class='a'>");
        dy=dy.replace(/<br><br>/g, "<br><br class='a'>");
        dy=dy.replace(/<\/div><br>/g, "</div><br class='a'>");
        dy=dy.replace(/ \| /g, "<span class=\"a\"> | </span>");
        dy=dy.replace(/ &gt; /g, "<span class=\"a\"> > </span>");
        document.getElementById(乱).innerHTML = dy;
        }
    乱="dy";
    }
}