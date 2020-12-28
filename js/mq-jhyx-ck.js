document.write("<center><span>（点击黑色部分查看内容）<br\/><\/span>");
document.write("<span id=\"标签A\" class=\"heimu\" style=\"font-size:5em;border:5px solid #74b8e5;\">无<\/span><br\/><br\/>");
document.write("<button type=\"button\" onclick=\"标签B()\" style=\"font-size:1.2em;\">换一个词<\/button>");
document.write("<\/center><br\/>");
document.write("<center><span>倒计时：<\/span><span id=\"标签C\" style=\"font-size:2em\">0<\/span><br\/>");
document.write("<span>每局时间（秒）：<\/span><br\/><input type=\"text\" id=\"wzsc\" value=\"60\" style=\"width:40px\"\/>");
document.write("<button type=\"button\" onclick=\"标签D()\" style=\"font-size:1em;\">开始计时<\/button>");
document.write("<button type=\"button\" onclick=\"标签E()\" style=\"font-size:1em;\">停止<\/button>");
document.write("<\/center>");
document.write("<audio id=\"m1\"><source = src=\"\/i\/0\/jhyx-ciku-m1.wav\" type=\"audio\/wav\"><\/audio>");
document.write("<audio id=\"m2\"><source = src=\"\/i\/0\/jhyx-ciku-m2.wav\" type=\"audio\/wav\"><\/audio>");

var p = Array.from(ciku), i, a = [];
while (p.length > 0) {
    i = parseInt(Math.random() * p.length);
    a.push(p[i]);
    p.splice(i, 1);
};

var b = 0;
var c = a.length;

function 标签B() {
    document.getElementById("标签A").innerHTML = a[b];
    b = b + 1;
    if (c == b) {
        p = Array.from(ciku), i, a = [];
        while (p.length > 0) {
            i = parseInt(Math.random() * p.length);
            a.push(p[i]);
            p.splice(i, 1);
        };
        b = 0;
    }
}

var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var wzsc;
var wzsd = 0;
function checkTime() {
    if (wzsc == 0 && wzsd == 0) {
        m2.play();
        document.getElementById("标签C").innerHTML = "计时结束";
        wzsd = 1;
    }
    if (wzsc > 0) {
        m1.play();
        document.getElementById("标签C").innerHTML = wzsc;
        wzsc = wzsc - 1;
    }
}
setInterval("checkTime()", "1000");

function 标签D() {
    wzsc = document.getElementById("wzsc").value;
    wzsd = 0;
}

function 标签E() {
    if (wzsc > 0) {
        wzsd = 1;
        wzsc = 0;
        document.getElementById("标签C").innerHTML = "停止";
    }
}