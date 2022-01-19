
let dy="";
let 临时;
dy+="<h1>"+h1+"</h1>"
if(h1=="异梦笔记"){dy+="　<input type='text' id='输入' placeholder='搜索' onkeyup='确定()'/><div id='结果'></div>"}else{dy+=" <nav><a href='0.html'>总目录</a>";
for(let i=0;nav.length>i;i++){
    临时=nav[i].split("／");
    临时=临时[临时.length-1];
    dy+=" / <a href='"+nav[i]+".html'>"+临时+"</a>";
}}
dy+="</nav><hr>";
dy+="<div class='index'><br>";
for(let i=0;index.length>i;i++){
    if(index[i]=="br"){dy+="<br>";}else{dy+="<a href='#"+index[i]+"'>"+index[i]+"</a><br>";}
}
dy+="</div><div id='back-top'><a href='#top'></a></div>";
dy+="<textArea id='复制' style='position:absolute;top:-1000px'></textArea>";

document.getElementById("dy").innerHTML = dy;

临时=h1.replace(/<small>/g, "");
临时=临时.replace(/<\/small>/g, "");
document.title = 临时;

let 制;function 复(){document.getElementById('复制').value = 制;let 复制 = document.querySelector('#复制');复制.select();document.execCommand("Copy");}

let 客;function 博(){window.location.href="https://limaoqiu.com/"+客;}
