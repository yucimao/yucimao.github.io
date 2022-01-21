
let dy="<meta name='viewport' content='width=device-width, initial-scale=1'>";

if(typeof(h1)!="undefined"){
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

临时=h1.replace(/<small>/g, "");
临时=临时.replace(/<\/small>/g, "");
document.title = 临时;
}

if(typeof(sjtk)!="undefined"){
    dy+="<button onclick='随_机()'>随机</button><div id='sjtk'></div>";
}

dy+="<textArea id='复制' style='position:absolute;top:-1000px'></textArea>";
document.getElementById("dy").innerHTML = dy;

function 打乱(){
    let _arr = sjtk.slice();
    for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
    }
    function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
    sjtk=_arr;
}

let 次数=0;
function 随_机(){
    if(次数==0){打乱();}
    if(sjtk.length==次数){
        document.getElementById("sjtk").innerHTML = "题库已空";
        次数=0;
    }else{
        document.getElementById("sjtk").innerHTML = "<a onclick='删除码()'>删除码</a><br><iframe src='1/"+sjtk[次数]+".html' height=100% width=100%></iframe>";
        次数+=1;
    }
}

let 制;function 复(){document.getElementById('复制').value = 制;let 复制 = document.querySelector('#复制');复制.select();document.execCommand("Copy");}
let 客;function 博(){window.location.href="https://limaoqiu.com/"+客;}
function 删除码(){复(制="&quot;"+sjtk[次数-1]+"&quot;");}
