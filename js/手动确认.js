//<div id="yzdy">提示语/按钮 可留空</div>
let yzdy=document.getElementById("yzdy").innerHTML.split("/");
yzdy=[yzdy[0]||"本页可能含有敏感内容",yzdy[1]||"我已成年"];
document.getElementById("yzdy").innerHTML=`
<div style='display:flex;position:fixed;top:0;left:0;width:100%;height:100%;background:#828282;justify-content:center;align-items:center;z-index:9999'>
<div style='background:#ffffff;padding:30px 40px;border-radius:8px;text-align:center;box-shadow:0 2px 10px #00000033'>
<span style='font-weight:bold;font-size:20px'>${yzdy[0]}</span><br><br>
<button style='background:#3498db;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:16px' onclick="document.getElementById('yzdy').innerHTML='';">${yzdy[1]}</button></div></div>`;