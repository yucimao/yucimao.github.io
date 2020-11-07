let LocString = String(window.document.location.href);
function GetQueryString(name) {
    let rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) { return decodeURI(tmp[2]); }
    return "";
}
let nan = GetQueryString("h").split(" ");
let nv = GetQueryString("m").split(" ");
let p;
let dy = "";

if (top.location == self.location) {
    let dy0 = "<h3 style=\"color:#0bb1f5\">真心话大冒险 - " + dt + "</h3><a href=\"/\">limaoqiu.com</a> / <a href=\"/juhuiyouxi\">聚会游戏</a><br/><br/>男玩家 <input id=\"男生\" style=\"width:70%\" placeholder=\"用空格分隔\"\/><br\/>女玩家 <input id=\"女生\" style=\"width:70%\" placeholder=\"用空格分隔\"\/><br\/><button onclick=\"刷新()\">确定<\/button>"
    document.getElementById("yd0").innerHTML = dy0;
}
else {
    for (let i = 0; i < nan.length; i++) {
        dy += "<button onclick=\"玩家(p='" + nan[i] + "／男')\">" + nan[i] + "</button><br/>";
    }

    for (let i = 0; i < nv.length; i++) {
        dy += "<button onclick=\"玩家(p='" + nv[i] + "／女')\">" + nv[i] + "</button><br/>";
    }
    document.getElementById("yd").innerHTML = dy;
}

function 刷新() {
    nan = document.getElementById("男生").value.split(" ");
    nv = document.getElementById("女生").value.split(" ");
    for (let i = 0; i < nan.length; i++) {
        dy += "<button onclick=\"玩家(p='" + nan[i] + "／男')\">" + nan[i] + "</button><br/>";
    }

    for (let i = 0; i < nv.length; i++) {
        dy += "<button onclick=\"玩家(p='" + nv[i] + "／女')\">" + nv[i] + "</button><br/>";
    }
    document.getElementById("yd").innerHTML = dy;
}

function 玩家() {
    let 随机数 = Math.floor(Math.random() * data.length);
    p = p.split("／"); //p[0]玩家名 p[1]性别
    let boll;
    let dy2 = data[随机数];
    let lin1;
    let 替换;


    boll = dy2.indexOf("／");
    if (boll > 0) {
        if (p[1] == "男") {
            let lin3 = dy2.split("／");
            dy2 = lin3[0];
        }
        if (p[1] == "女") {
            let lin3 = dy2.split("／");
            dy2 = lin3[1];
        }
    }


    boll = dy2.indexOf("［同］");
    if (boll > 0) {
        if (p[1] == "男") {
            if (nan.length < 2) {
                dy2 = "x";
            }
            else {
                lin1 = nan;

                let lin2 = Array.from(lin1), i, a = [];
                while (lin2.length > 0) {
                    i = parseInt(Math.random() * lin2.length);
                    a.push(lin2[i]);
                    lin2.splice(i, 1);
                }
                lin1 = a;
                let lin3;
                if (lin1[0] == p[0]) {
                    lin3 = lin1[1];
                }
                else {
                    lin3 = lin1[0];
                }
                替换 = new RegExp('［同］', "g");
                dy2 = dy2.replace(替换, lin3);
            }
        }
        if (p[1] == "女") {
            if (nv.length < 2) {
                dy2 = "x";
            }
            else {
                lin1 = nv;

                let lin2 = Array.from(lin1), i, a = [];
                while (lin2.length > 0) {
                    i = parseInt(Math.random() * lin2.length);
                    a.push(lin2[i]);
                    lin2.splice(i, 1);
                }
                lin1 = a;
                let lin3;
                if (lin1[0] == p[0]) {
                    lin3 = lin1[1];
                }
                else {
                    lin3 = lin1[0];
                }
                替换 = new RegExp('［同］', "g");
                dy2 = dy2.replace(替换, lin3);
            }
        }
    }

    if (dy2 != "x") {
        boll = dy2.indexOf("［异］");
        if (boll > 0) {
            if (p[1] == "男") {
                if (nv.length < 1) {
                    dy2 = "x";
                }
                else {
                    随机数 = Math.floor(Math.random() * nv.length);
                    替换 = new RegExp('［异］', "g");
                    dy2 = dy2.replace(替换, nv[随机数]);
                }
            }
            if (p[1] == "女") {
                if (nan.length < 1) {
                    dy2 = "x";
                }
                else {
                    随机数 = Math.floor(Math.random() * nan.length);
                    替换 = new RegExp('［异］', "g");
                    dy2 = dy2.replace(替换, nan[随机数]);
                }
            }
        }
    }

    if (dy2 != "x") {
        boll = dy2.indexOf("［全］");
        if (boll > 0) {
            lin1 = nan.concat(nv);
            let lin2 = Array.from(lin1), i, a = [];
            while (lin2.length > 0) {
                i = parseInt(Math.random() * lin2.length);
                a.push(lin2[i]);
                lin2.splice(i, 1);
            }
            lin1 = a;
            let lin3;
            if (lin1[0] == p[0]) {
                lin3 = lin1[1];
            }
            else {
                lin3 = lin1[0];
            }
            替换 = new RegExp('［全］', "g");
            dy2 = dy2.replace(替换, lin3);
        }
    }

    if (dy2 == "x") {
        dy2 = "恭喜你逃过一劫。"
    }
    else{
        dy2=p[0]+"：<hr>"+dy2;
    }

    document.getElementById("yd2").innerHTML = dy2;
}