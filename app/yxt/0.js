let 页面=document.getElementById("游戏厅").innerHTML.split("／");
let 页面dy="<h1 style='display:inline;'>"+页面[0]+"</h1>";

if(页面[0]=="猫球游戏厅"){页面dy+=" <a href='/'>猫球博客</a>"}
else if(页面[1]){页面dy+=" <a href='"+页面[2]+".html'>"+页面[1]+"</a>"}
else{页面dy+=" <a href='0.html'>返回游戏厅</a>"}

if(window.location.href.indexOf("file:///")!=-1){页面dy+=" <small><a onclick='编辑本页()'>编辑</a></small>"}

页面dy+=
"<br><meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"+
"<title>"+页面[0]+"</title><link rel='stylesheet' href='/css/all.css'>"+
"<style>@media screen and (min-width:768px){body{position: relative;width: 60%;top: 1em;margin: auto auto 100px;}}body{user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;}"+
"[onclick]{cursor:pointer;}"+
"img{image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor;}"+
".dui{background:#ffffff00;animation:duib 0.7s linear 1;-webkit-animation:duib 0.7s linear 1;}@keyframes duib{from{background-color:#00ff00;}to{background-color:#ffffff00;}}@-webkit-keyframes duib{from{background-color:#00ff00;}to{background-color:#ffffff00;}}.cuo{background:#ffffff00;animation:cuob 1s linear 1;-webkit-animation:cuob 0.7s linear 1;}@keyframes cuob{from{background-color:#ff0000;}to{background-color:#ffffff00;}}@-webkit-keyframes cuob{from{background-color:#ff0000;}to{background-color:#ffffff00;}}"+
".ycql{opacity:0;animation:ycqlb 4s linear 1;-webkit-animation:ycqlb 4s linear 1;}@keyframes ycqlb{0%,40%{opacity:1;}100%{opacity:0;}}@-webkit-keyframes ycqlb{0%,40%{opacity:1;}100%{opacity:0;}}"+
".fanka{animation:fankab 0.3s linear 1;-webkit-animation:fankab 0.3s linear 1;}@keyframes fankab{from{transform:rotateY(90deg);}to{transform:rotateY(0deg);}}@-webkit-keyframes fankab{from{transform:rotateY(90deg);}to{transform:rotateY(0deg);}}"+
"</style><div id='预加载' style='display:none;'></div>"+
"<span id='余额'></span><hr><textArea id='复制' style='position:absolute;top:-1000px'></textArea>";
document.getElementById("游戏厅").innerHTML=页面dy;

let 制;function 复(o){制=o||制;制=制.replace(/［换行］/g,'\n');notyf.confirm('已复制');document.getElementById('复制').value=制;let 复制=document.querySelector('#复制');复制.select();document.execCommand('Copy')}

let 钱=0;if(localStorage.getItem("猫球游戏厅")){钱=localStorage.getItem("猫球游戏厅")*1;}
let 钱_页面变化=钱;
function 余额(o){
    钱=localStorage.getItem("猫球游戏厅")*1;
    if(o){if(钱+o<=0){钱=0;}else{钱=钱+o*1;}}
    localStorage.setItem("猫球游戏厅",钱);
    页面dy="余额："+(钱+"").split(".")[0]+"币";
    if(钱>钱_页面变化){
        页面dy+=" <small class='dui ycql' style='color:#00ff00'>+"+(钱-钱_页面变化)+"</small>";
    }else if(钱<钱_页面变化){
        页面dy+=" <small class='cuo ycql' style='color:#ff0000'>"+(钱-钱_页面变化)+"</small>";
    }
    document.getElementById("余额").innerHTML=页面dy;
    钱_页面变化=钱;
}
余额();

let 牌={
    1:["A","2","3","4","5","6","7","8","9","10","J","Q","K"],
    "全角":["０","１","２","３","４","５","６","７","８","９","１０"],
    "汉字":["零","一","二","三","四","五","六","七","八","九","十"],
    "骰子":["点1","点2","点3","点4","点5","点6"],
    "猜拳":["石头","剪刀","布"],
}
let 牌值={
    "A":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13,"小王":14,"大王":15,
}
牌[2]=牌[1].concat(牌[1]).concat(牌[1]).concat(牌[1]);
牌[0]=牌[2].concat(["大王","小王"]);
牌[3]=牌[1].concat(["大王","小王"]);
let 牌堆;

let arr;
function 随机(){
    let _arr=arr.slice();
    for(let i=0;i<_arr.length;i++){
        let j=getRandomInt(0,i);
        let t=_arr[i];
        _arr[i]=_arr[j];
        _arr[j]=t;
    }
    function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
    arr=_arr;
}

function 洗牌(o){
    arr=牌[o];
    随机();
    牌堆=arr;
}

let 预加载_dy="";
function 预加载(o){
    for(let i=0;牌[o].length>i;i++){
        预加载_dy+="<img src='img/"+牌[o][i]+".png' width='1px'>";
    }
    document.getElementById("预加载").innerHTML=预加载_dy;
}

!function(){function n(n,t){for(property in t)t.hasOwnProperty(property)&&(n[property]=t[property]);return n}function t(n,t){var i=document.createElement("div");i.className="notyf";var e=document.createElement("div");e.className="notyf-wrapper";var o=document.createElement("div");o.className="notyf-icon";var a=document.createElement("i");a.className=t;var r=document.createElement("div");r.className="notyf-message",r.innerHTML=n,o.appendChild(a),e.appendChild(o),e.appendChild(r),i.appendChild(e);var c=this;return setTimeout(function(){i.className+=" disappear",i.addEventListener(c.animationEnd,function(n){n.target==i&&c.container.removeChild(i)});var n=c.notifications.indexOf(i);c.notifications.splice(n,1)},c.options.delay),i}function i(){var n,t=document.createElement("fake"),i={transition:"animationend",OTransition:"oAnimationEnd",MozTransition:"animationend",WebkitTransition:"webkitAnimationEnd"};for(n in i)if(void 0!==t.style[n])return i[n]}this.Notyf=function(){this.notifications=[];var t={delay:2e3,alertIcon:"notyf-alert-icon",confirmIcon:"notyf-confirm-icon"};arguments[0]&&"object"==typeof arguments[0]?this.options=n(t,arguments[0]):this.options=t;var e=document.createDocumentFragment(),o=document.createElement("div");o.className="notyf-container",e.appendChild(o),document.body.appendChild(e),this.container=o,this.animationEnd=i()},this.Notyf.prototype.alert=function(n){var i=t.call(this,n,this.options.alertIcon);i.className+=" alert",this.container.appendChild(i),this.notifications.push(i)},this.Notyf.prototype.confirm=function(n){var i=t.call(this,n,this.options.confirmIcon);i.className+=" confirm",this.container.appendChild(i),this.notifications.push(i)}}();
let notyf = new Notyf({delay:3000});

document.body.insertAdjacentHTML('afterend', '<br><br><br><br><br>');

function 编辑本页(){
    制=window.location.href.replace(/file:\/\/\//g,"").split(":/");
    制="C:/mq/app/code.lnk /"+decodeURI(制[1].split("#")[0].split("?")[0])+" & exit";
    复();
    window.location.href="pvocmd://";
}