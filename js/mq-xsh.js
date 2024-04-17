if(xsh_border_color.length>5){
    xsh_border_color="border-width:1px;border-color:#"+xsh_border_color+";border-style:solid;";
}else{
    xsh_border_color="border:none;";
}

let xsh_width=xsh_width_max/xsh_data[0].split("／").length;

let xsh_dy_style="<style>table{border-collapse:collapse;}td{width:"+xsh_width+"px;height:"+xsh_width+"px;"+xsh_border_color+"}";
for(let i=0;xsh_style.length>i;i++){
    let i2=xsh_style[i].split("／");
    xsh_dy_style+="."+i2[0]+"{background-color:#"+i2[1]+";}";
}
xsh_dy_style+="</style>";

let xsh_dy_data="<table border=\"0\">";
for(let i=0;xsh_data.length>i;i++){
    xsh_dy_data+="<tr>";
        let i2=xsh_data[i].split("／");
    for(let i3=0;i2.length>i3;i3++){
        if(i2[i3].length<6){
            xsh_dy_data+="<td class=\""+i2[i3]+"\">";
        }else{
            xsh_dy_data+="<td style=\"background-color:#"+i2[i3]+"\">";
        }
        xsh_dy_data+="</td>";
    }
    xsh_dy_data+="</tr>";
}
xsh_dy_data+="</table>";

document.getElementById("xsh_style").innerHTML = xsh_dy_style;
document.getElementById("xsh_data").innerHTML = xsh_dy_data;