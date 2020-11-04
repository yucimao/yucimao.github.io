/*
<a onclick="随机排序()">随机</a>
<a onclick="tion(sg='关键词')">链接</a> 搜索关键词 '+关键词'则是在已有的输入后面加关键词
"标题／编号／搜索关键词" zk模式
"标题／【ID】／搜索关键词／内容" 直接显示模式
*/
let zkb;
$("#输入").keyup(function () {
    zkb = "／";
    let 输入 = $("#输入").val();
    let 输入2 = 输入.split(" ");
    let 结果 = "";
    let 结果2 = "";
    for (let i = 0; data.length > i; i++) {
        let 临时 = data[i].split("／");
        let 过程 = "0";
        let 过程2 = "0";
        for (let i2 = 0; 输入2.length > i2; i2++) {
            let 临时2 = data[i].split("／");
            临时2 = 临时2[0] + 临时2[2];
            if (临时2.indexOf(输入2[i2]) != -1 && 输入2[i2] != "") { 过程2 = "1"; }
            else { 过程 = "1"; }
        }
        if (过程 == "0" || 输入.length == 0) {
            结果 += "<h4 onclick=\"zk(zka='" + 临时[1] + "')\">" + 临时[0] + "</h4><ul id=\"／" + 临时[1] + "\" style=\"display:none;\">" + 临时[3] + "</ul>";
        }
        if (过程 != "0" && 过程2 == "1") {
            结果2 += "<h4 onclick=\"zk(zka='" + 临时[1] + "')\">" + 临时[0] + "</h4><ul id=\"／" + 临时[1] + "\" style=\"display:none;\">" + 临时[3] + "</ul>";
        }
    }

    let 打印 = 结果 + "<br/><hr>" + 结果2;
    document.getElementById("结果").innerHTML = 打印;
}).keyup();

zkb = "／" + data[0].split("／")[1];
document.getElementById(zkb).style.display = "block";

function zk() {
    if (document.getElementById(zkb) != null) {
        document.getElementById(zkb).style.display = "none";
    }
    let yd = "／" + zka;
    window.location.href = "#" + yd;
    if (yd == zkb) {
        zkb = "／";
        window.scrollBy(0, -20);
    }
    else {
        zkb = "／" + zka;
        document.getElementById(zkb).style.display = "block";
        window.scrollBy(0, -150);
    }
    if (zka[0] != "【") {
        let dy = "<iframe src=\"/i/zk/" + zka + "\" frameborder=\"0\" width=\"100%\" height=\"100\" id=\"／／" + zka + "\"></iframe><p id=\"／" + zka + "／\">加载中..</p>";
        document.getElementById(yd).innerHTML = dy;
    }
}

let sg;
function tion() {
    if (sg[0] == "+") {
        sg = sg.replace(/\+/g, ' ')
        sg = document.getElementById("输入").value + sg;
    }
    document.getElementById("输入").value = sg;
    $("input").keyup();
}

var LocString = String(window.document.location.href);
function GetQueryString(name) {
    var rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) { return decodeURI(tmp[2]); }
    return "";
}
var wza = GetQueryString("wz");
if (wza) {
    document.getElementById("输入").value = wza;
    $("input").keyup();
}

function 随机排序() {
    let 随机结果 = "";
    let 随机临时;

    let p = Array.from(data), i, a = [];
    while (p.length > 0) {
        i = parseInt(Math.random() * p.length);
        a.push(p[i]);
        p.splice(i, 1);
    }
    let 随机 = a;

    for (let i2 = 0; 随机.length > i2; i2++) {
        随机临时 = 随机[i2].split("／");
        随机结果 += "<h4 onclick=\"zk(zka='" + 随机临时[1] + "')\">" + 随机临时[0] + "</h4><ul id=\"／" + 随机临时[1] + "\" style=\"display:none;\">" + 随机临时[3] + "</ul>";
    }
    document.getElementById("结果").innerHTML = 随机结果;
}