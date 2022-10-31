let 页面=document.getElementById("游戏厅").innerHTML.split("／");
let 页面dy="<h1 style='display:inline;'>"+页面[0]+"</h1>";
if(页面[0]!="猫球游戏厅"){页面dy+=" <a href='开始游戏.html'>返回游戏厅</a>";}else{页面dy+=" <a href='/'>猫球博客</a>";}
页面dy+=
    "<br><link rel='stylesheet' href='/css/all2.css'>"+
    "<style>body{position: relative;width: 60%;top: 1em;margin: auto auto 100px;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;}"+
    "[onclick]{cursor:pointer;}"+
    "img{image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor;}"+
    ".dui{background:#ffffff00;animation:duib 0.7s linear 1;-webkit-animation:duib 0.7s linear 1;}@keyframes duib{from{background-color:#00ff00;}to{background-color:#ffffff00;}}@-webkit-keyframes duib{from{background-color:#00ff00;}to{background-color:#ffffff00;}}.cuo{background:#ffffff00;animation:cuob 1s linear 1;-webkit-animation:cuob 0.7s linear 1;}@keyframes cuob{from{background-color:#ff0000;}to{background-color:#ffffff00;}}@-webkit-keyframes cuob{from{background-color:#ff0000;}to{background-color:#ffffff00;}}</style>"+
    "<span id='余额'></span><hr>";
document.getElementById("游戏厅").innerHTML=页面dy;

let 钱=0;if(localStorage.getItem("猫球游戏厅")){钱=localStorage.getItem("猫球游戏厅")*1;}
let 变化=钱;
function 余额(o){
    钱=localStorage.getItem("猫球游戏厅")*1;
    if(o){钱=钱+o*1;}
    localStorage.setItem("猫球游戏厅",钱);
    页面dy="余额："+(钱+"").split(".")[0]+"币";
    if(钱>变化){
        页面dy+=" <small class='dui'>+"+(钱-变化)+"</small>";
    }else if(钱<变化){
        页面dy+=" <small class='cuo'>"+(钱-变化)+"</small>";
    }
    document.getElementById("余额").innerHTML=页面dy;
    变化=钱;
}
余额();

let 牌={
    1:["A","2","3","4","5","6","7","8","9","10","J","Q","K"],//扑克牌，没有王，其他各1张
}
牌[2]=牌[1].concat(牌[1]).concat(牌[1]).concat(牌[1]);//扑克牌，没有王
牌[0]=牌[2].concat(["大王","小王"]);//扑克牌，整副

let 输入=[1,2,3,4,5,6,7,8,9];

let 牌堆;
function 洗牌(o){
    牌堆=牌[o];
    let _arr=牌堆.slice();
    for(let i=0;i<_arr.length;i++){
        let j=getRandomInt(0,i);
        let t=_arr[i];
        _arr[i]=_arr[j];
        _arr[j]=t;
    }
    function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
牌堆=_arr;
}

!function(){function n(n,t){for(property in t)t.hasOwnProperty(property)&&(n[property]=t[property]);return n}function t(n,t){var i=document.createElement("div");i.className="notyf";var e=document.createElement("div");e.className="notyf-wrapper";var o=document.createElement("div");o.className="notyf-icon";var a=document.createElement("i");a.className=t;var r=document.createElement("div");r.className="notyf-message",r.innerHTML=n,o.appendChild(a),e.appendChild(o),e.appendChild(r),i.appendChild(e);var c=this;return setTimeout(function(){i.className+=" disappear",i.addEventListener(c.animationEnd,function(n){n.target==i&&c.container.removeChild(i)});var n=c.notifications.indexOf(i);c.notifications.splice(n,1)},c.options.delay),i}function i(){var n,t=document.createElement("fake"),i={transition:"animationend",OTransition:"oAnimationEnd",MozTransition:"animationend",WebkitTransition:"webkitAnimationEnd"};for(n in i)if(void 0!==t.style[n])return i[n]}this.Notyf=function(){this.notifications=[];var t={delay:2e3,alertIcon:"notyf-alert-icon",confirmIcon:"notyf-confirm-icon"};arguments[0]&&"object"==typeof arguments[0]?this.options=n(t,arguments[0]):this.options=t;var e=document.createDocumentFragment(),o=document.createElement("div");o.className="notyf-container",e.appendChild(o),document.body.appendChild(e),this.container=o,this.animationEnd=i()},this.Notyf.prototype.alert=function(n){var i=t.call(this,n,this.options.alertIcon);i.className+=" alert",this.container.appendChild(i),this.notifications.push(i)},this.Notyf.prototype.confirm=function(n){var i=t.call(this,n,this.options.confirmIcon);i.className+=" confirm",this.container.appendChild(i),this.notifications.push(i)}}();
let notyf = new Notyf({delay:3000});