//写文记录
let 字数=0;
let 记录编号=1;
let dy2="";

for(let i=0;data.length>i;i++){
    let 临时=data[i].split("／");
    if(临时[0]=="注释"){dy2+="<span class='zhushi'>"+临时[1]+"</span><br>";}
    if(临时[0]=="年"){dy2+="<br><h3>"+临时[1]+"</h3>";}
    if(临时[0]=="日期"){dy2+="<br><b>"+临时[1]+"</b><br>";}
    if(临时[0]=="-"){dy2+=临时[1]+"<br>";}
    if(临时[0]==""){dy2+="<small style='color:#a0a0a0;'>"+记录编号+". </small>"+临时[1]+"<br>";记录编号+=1;}
    if(临时[0]=="写完"){
        字数=字数+临时[3]*1;
        dy2+="<small style='color:#a0a0a0;'>"+记录编号+". </small>写完<a href=\"/i/zk/"+临时[1]+"\" target=\"_blank\">"+临时[2]+"</a>，字数"+临时[3]+"/"+字数+"。<br>";
        记录编号+=1;
    }
}

dy2=dy2.replace(/^<br><h3>/g, "<h3>");
dy2+="<br><br>";

document.getElementById("dy2").innerHTML = dy2;
