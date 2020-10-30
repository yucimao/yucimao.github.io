$("#输入").keyup(function () {
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
            结果 += "<div class=\"menuDiv\"><h4 onclick=\"zk(zka='" + 临时[1] + "')\">" + 临时[0] + "</h4><ul id=\"／" + 临时[1] + "\" style=\"display:none;\"></ul></div>";
        }
        if (过程 != "0" && 过程2 == "1") {
            结果2 += "<div class=\"menuDiv\"><h4 onclick=\"zk(zka='" + 临时[1] + "')\">" + 临时[0] + "</h4><ul id=\"／" + 临时[1] + "\" style=\"display:none;\"></ul></div>";
        }
    }

    let 打印 = 结果 + 结果2;
    document.getElementById("结果").innerHTML = 打印;
}).keyup();

let zkb = "／";

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

    let dy = "<iframe src=\"/i/zk/" + zka + "\" frameborder=\"0\" width=\"100%\" height=\"100\" id=\"／／" + zka + "\"></iframe><p id=\"／" + zka + "／\">加载中..</p>";
    document.getElementById(yd).innerHTML = dy;
}