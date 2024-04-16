let 作品={}

let 排名=0;
let dy头="<link rel='stylesheet' href='/css/all2.css'><style>.灰{color:#00000020;}td:nth-child(2) sub,li sub{color:#00000060;}</style>";
let dy=dy头+"<a onclick='作品分类()'>按作品分类</a><br><br>";
for(let i=0;data.length>i;i++){
    dy+="<table><tr><td colspan='2'><b>"+data[i][0]+"</b></td></tr>"
    for(let o=1;data[i].length>o;o++){
        dy+="<tr><td>";
        if(data[i][o][3]){
            dy+="<span class='灰'>-</span>"
        }else{
            排名+=1;
            dy+=排名;
        }
        dy+="</td><td><b>"+data[i][o][0]+"</b>";
        if(data[i][o][1]&&data[i][o][1]!=""){
            data[i][o][1]=data[i][o][1].split("／");
            if(!data[i][o][1][1]){data[i][o][1][1]=""}
            dy+=" <sub>«"+data[i][o][1][0]+"»"+data[i][o][1][1]+"</sub>";
            let 分=5-i;if(分<0){分=0}
            if(作品[data[i][o][1][0]]){
                作品[data[i][o][1][0]][0]+=分;
            }else{
                作品[data[i][o][1][0]]=[分];
            }
            作品[data[i][o][1][0]].push(data[i][o]);
        }else{
            作品["."+data[i][o][0]]=[0,data[i][o]];
        }
        dy+="　"+data[i][o][2]+"</td></tr>";
    }
dy+="</table><br>";
}
document.getElementById("dy").innerHTML=dy;

function 作品分类(){
    dy=dy头+"<a onclick='location.replace(location.href)'>总排名</a>";
    data=Object.keys(作品);
    let 排序=[];
    let 其他=[];
    for(let i=0;data.length>i;i++){
        if(data[i][0]=="."||作品[data[i]][0]==1){//||作品[data[i]].length==2
            其他[其他.length]=作品[data[i]][1];
        }else{
            let 比较=0;
            for(let o=0;排序.length>o;o++){
                if(作品[data[i]][0]>作品[排序[o]][0]){
                    排序.splice(o,0,data[i]);
                    比较=1;
                    break;
                }
            }
            if(比较==0){
                排序[排序.length]=data[i];
            }
        }
    }
    for(let i=0;排序.length>i;i++){
        //<span class="提示" data-msg="内容">表面</span>
        dy+="<h4>"+排序[i]+" <small class='提示' data-msg='平均"+(作品[排序[i]][0]/(作品[排序[i]].length-1)+"").split(".")[0]+"'>♥"+作品[排序[i]][0]+"</small></h4><ol>"
        for(let o=1;作品[排序[i]].length>o;o++){
            dy+="<li><b>"+作品[排序[i]][o][0]+"</b></li>";
            // dy+="<li><b>"+作品[排序[i]][o][0]+"</b> <small>"+作品[排序[i]][o][2]+"</small></li>";
        }
        dy+="</ol>"
    }
    dy+="<h4>其他</h4><ol>";
    for(let i=0;其他.length>i;i++){
        dy+="<li><b>"+其他[i][0]+"</b>";
        if(其他[i][1]&&其他[i][1]!=""){
            dy+=" <sub>«"+其他[i][1][0]+"»"+其他[i][1][1]+"</sub>";
        }
        dy+="</li>";
        // dy+=" <small>"+其他[i][2]+"</small></li>";
    }
    dy+="</ol>";
    document.getElementById("dy").innerHTML=dy;
}