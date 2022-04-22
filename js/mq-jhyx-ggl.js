document.write("<p align=\"right\">");
document.write("<span id=\"刮刮乐1\" style=\"font-size:1.2em;\">█<\/span>　<button type=\"button\" onclick=\"刮刮乐A()\" style=\"font-size:1.2em;\">刮开<\/button><br\/>");
document.write("<span id=\"刮刮乐2\" style=\"font-size:1.2em;\">█<\/span>　<button type=\"button\" onclick=\"刮刮乐B()\" style=\"font-size:1.2em;\">刮开<\/button><br\/>");
document.write("<span id=\"刮刮乐3\" style=\"font-size:1.2em;\">█<\/span>　<button type=\"button\" onclick=\"刮刮乐C()\" style=\"font-size:1.2em;\">刮开<\/button><br\/>");
document.write("<span id=\"刮刮乐4\" style=\"font-size:1.2em;\">█<\/span>　<button type=\"button\" onclick=\"刮刮乐D()\" style=\"font-size:1.2em;\">刮开<\/button><br\/>");
document.write("<span id=\"刮刮乐5\" style=\"font-size:1.2em;\">█<\/span>　<button type=\"button\" onclick=\"刮刮乐E()\" style=\"font-size:1.2em;\">刮开<\/button><br\/>");
document.write("<br\/>");
document.write("<button type=\"button\" onclick=\"location.reload();\" style=\"font-size:1.2em;\">换一批<\/button>");
document.write("<\/p>");
var p = Array.from(ciku), i, a = [];
while (p.length > 0) { i = parseInt(Math.random() * p.length);
    a.push(p[i]);
    p.splice(i,1); };

var ggl3=0;
for (var ggl1=1;ggl1<6;ggl1++){
    var ggl4="█";
    for (var ggl2=0;ggl2<a[ggl3].length;ggl2++){
        ggl4+="█";
    }
    var ggl5="刮刮乐"+ggl1;
    document.getElementById(ggl5).innerHTML=ggl4;
ggl3+=1;
}
    function 刮刮乐A(){
            document.getElementById("刮刮乐1").innerHTML=a[0];}
    function 刮刮乐B(){
            document.getElementById("刮刮乐2").innerHTML=a[1];}
    function 刮刮乐C(){
            document.getElementById("刮刮乐3").innerHTML=a[2];}
    function 刮刮乐D(){
            document.getElementById("刮刮乐4").innerHTML=a[3];}
    function 刮刮乐E(){
            document.getElementById("刮刮乐5").innerHTML=a[4];}