---
permalink: mq/目录/0.js
---
let 替换表={
"":"C:/",
"目录":"C:/MQ/目录/",
"博客本地":"C:/MQ/博客/yucimao.github.io/",
"博客":"https://limaoqiu.com/",
"steam":"steam://rungameid/",
}
let code="Code";

let 钮;
function 按(){
    钮=钮.split("／");
    if(钮[1]&&钮[1].indexOf("／")!=-1){
        钮[1]=钮[1].split("／");
        钮[1]=替换表[钮[1][0]]+钮[1][1];
    }
    制="";
    if(钮[0]=="文件夹"){制=钮[1].split(":")[0]+": & explorer \""+钮[1].replace(/\//g, "\\")+"\" & exit";}
    else if(钮[0]=="html"){制=钮[1].split(":")[0]+": & "+code+" \""+钮[1]+"\" & exit";}
    else if(钮[0]=="网页"){
        if (event.button==2){window.open(钮[1],"_blank");
        }else{window.open(钮[1]);}
    }
    else if(钮[0]=="程序"){制=钮[1].split(":")[0]+": & \""+钮[1]+"\" & exit";}
    else if(钮[0]=="复制"){制=钮[1];复();制="";}
    else if(钮[0]=="更多"){document.getElementById("更多_"+钮[2]).innerHTML = 钮[1];}
    else{
        if(钮[0].indexOf("#") != -1){钮[0]=钮[0].split("#");钮[0]=钮[0][0]+".html#"+钮[0][1];}else{钮[0]=钮[0]+".html";}
        if (event.button==2){window.open("file:///C:/MQ/目录/"+钮[0],"_blank");
        }
        else{window.open("file:///C:/MQ/目录/"+钮[0]);}
    }

    if(制!=""){
        复();
        window.location.href="pvocmd://";
    }
}

let 制;function 复(){document.getElementById('复制').value = 制;let 复制 = document.querySelector('#复制');复制.select();document.execCommand("Copy");}

function 编辑(){
    if(window.location.href.indexOf("file:///")!=-1){
        制=window.location.href.replace(/file:\/\/\//g,"").split(":/");
        制=制[0]+": & "+code+" /"+decodeURI(制[1].split("#")[0])+" & exit";
        复();
        window.location.href="pvocmd://";
    }else{alert("编辑功能仅在本地有效。");制="C:/MQ/博客/yucimao.github.io/wen/"+decodeURI(decodeURI(window.location.href.split(".com/wen/")[1]));复();}
}

let 统一dy="<textArea id='复制' style='position:absolute;top:-1000px'></textArea><div id='index' class='index'></div>";
统一dy+="<style>h2,h3,h4,h5,h6{display:inline;line-height:1.8;}h1{display:inline;}#all{position: relative;width: 60%;top: 1em;margin: auto;}.index{position: fixed;top:1em;left:2.5%;width:15%;height: 100%;overflow:auto;}</style>";
if(typeof(h1)!="undefined"){统一dy+="<h1>"+h1+"</h1> <a href='0.html'>返回目录</a>";}

let 搜索data=[];
if(模式.indexOf("搜索")!=-1){
统一dy+="<style>#搜索结果 p {display: block;line-height: 50px;text-decoration: none;color: #5c5c5c}p b{color: #58a4dd;font-size:1.5em;}#搜索结果 p:hover {background: #eef6fc;text-decoration: none;cursor:pointer;}#搜索结果 a{color:#006699;}</style><br><input type='text' id='搜索输入' placeholder='输入' onkeyup='搜索确定()' autocomplete='off' style='font-size:1.1em'/><div id='搜索结果'></div>";
}

统一dy+="<hr class='【tydy】'>";
let index=[];
function 更新(){
let 本地收藏夹=document.getElementById("all").innerHTML.split("〈");
for(let i=1;本地收藏夹.length>i;i++){
    let 本地收藏夹2=本地收藏夹[i].split("〉")[0].split("|");
    if(本地收藏夹2[1]){
        if(本地收藏夹2[3]){本地收藏夹2[0]+=" <small>"+本地收藏夹2[3]+"</small>";}
    }else{
        本地收藏夹2[1]="网页";
        if(本地收藏夹2[0].indexOf("#")!=-1){
            本地收藏夹2[2]=本地收藏夹2[0].split("#")[0]+".html#"+本地收藏夹2[0].split("#")[1];
        }else{
            本地收藏夹2[2]=本地收藏夹2[0]+".html";
        }
    }
    if(本地收藏夹2[0][0]=="h"&&本地收藏夹2[0][1]>0&&本地收藏夹2[0].length==2){}else{
        if(本地收藏夹2[2]&&本地收藏夹2[2].indexOf("／")!=-1){
            本地收藏夹2[2]=本地收藏夹2[2].split("／");
            本地收藏夹2[2]=替换表[本地收藏夹2[2][0]]+本地收藏夹2[2][1];
        }
        搜索data[搜索data.length]=[本地收藏夹2[1],本地收藏夹2[0],本地收藏夹2[2]];
    }
}


let 临时=document.getElementById("all").innerHTML.split("〈");
let dy=临时[0];
if (dy.indexOf("【tydy】") != -1){
}else{
    dy=统一dy+dy;
}
for(let i=1;临时.length>i;i++){
    let 临时2=临时[i].split("〉");
    临时2[0]=临时2[0].split("|");
    if(临时2[0][2]&&临时2[0][2].indexOf("／")!=-1){
        临时2[0][2]=临时2[0][2].split("／");
        临时2[0][2]=替换表[临时2[0][2][0]]+临时2[0][2][1];
    }
    if(临时2[0][0][0]=="h"&&临时2[0][0][1]>0){index[index.length]="<"+临时2[0][0]+">"+临时2[0][1]+"</"+临时2[0][0]+">";dy+="<a name='"+index[index.length-1]+"'></a>";dy+="<"+临时2[0][0]+">"+临时2[0][1]+"</"+临时2[0][0]+">";}
    // else if(临时2[0][0]=="b"){dy+="<small><b>"+临时2[0][1]+"</b></small>";}
    else if(临时2[0][1]&&临时2[0][1]=="网页"){dy+="<a href='"+临时2[0][2]+"'>"+临时2[0][0]+"</a>";}
    else if(临时2[0][1]&&临时2[0][1]=="更多"){dy+="<a id='更多_"+i+"' onclick=\"按(钮='"+临时2[0][1]+"／"+临时2[0][2]+"／"+i+"')\">"+临时2[0][0]+"</a>";}
    else if(临时2[0][1]&&临时2[0][2]){dy+="<a onclick=\"按(钮='"+临时2[0][1]+"／"+临时2[0][2]+"')\">"+临时2[0][0]+"</a>";}
    else{
        let 临时3=临时2[0][0].split("#");
        if(临时3[1]){临时3[1]="#"+临时3[1];}else{临时3[1]="";}
        临时3[2]=临时3[0].split("_");
        临时3[2]=临时3[2][临时3[2].length-1];
        if(临时2[0][1]){临时3[2]=临时2[0][1]}
        dy+="<a href='"+临时3[0]+".html"+临时3[1]+"'>"+临时3[2]+临时3[1]+"</a>";
    }
    dy+=临时2[1];
}
dy=dy.replace(/<\/div><br>/g, "</div><br class='a'>");
dy=dy.replace(/ \| /g, "<span class=\"a\"> | </span>");
if(模式.indexOf("底部x")!=-1){}else{dy+="<br><br><br><br><br>";}

document.getElementById("all").innerHTML = dy;

dy="<a onclick=\"编辑()\">编辑</a><br><br>";
if(模式.indexOf("index")!=-1){
    for(let i=0;index.length>i;i++){
        dy+="<a href='#"+index[i]+"'>"+index[i]+"</a><br>";
    }
}else{
    document.getElementById("index").style = "height:50px;overflow:hidden";
}
document.getElementById("index").innerHTML = dy+"<br><br><br>";
}

function 搜索确定() {
    let 输入=document.getElementById("搜索输入").value.toLowerCase().split(" ");
    let 结果="";
    for (let i=0;搜索data.length>i;i++) {
        let 过程="0";
        for (let i2=0;输入.length>i2;i2++) {
            if (搜索data[i][1].toLowerCase().indexOf(输入[i2]) != -1 && 输入[i2] != "") {}
            else {过程="1";}
        }
        if(过程=="0"){
            结果+="<p onclick=\"按(钮='"+搜索data[i][0]+"／"+搜索data[i][2]+"')\"><b>"+搜索data[i][1].split("／")[0]+" <small>("+搜索data[i][0]+")</small></b> "+搜索data[i][2]+"</p>";
        }
    }
    if(结果==""){结果+="<p>无结果</p>";}
    if(输入==""){结果="";}
    document.getElementById("搜索结果").innerHTML = 结果;
    if (event.keyCode == 13){
        按(钮=结果.split("按(钮='")[1].split("')")[0]);
    }
}

window.onload=function (){
    if(window.location.href.indexOf("#")!=-1){window.location.href=window.location.href;}更新();if(window.location.href.indexOf("#")!=-1){window.location.href=window.location.href;}
}