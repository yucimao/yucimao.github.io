function MenuSwitch(className) {    //展开
    this._elements = [];
    this._default = -1;
    this._className = className;
    this._previous = false;
}
MenuSwitch.prototype.setDefault = function (id) {
    this._default = Number(id);
}
MenuSwitch.prototype.setPrevious = function (flag) {
    this._previous = Boolean(flag);
}
MenuSwitch.prototype.collectElementbyClass = function () {
    this._elements = [];
    var allelements = document.getElementsByTagName("div");
    for (var i = 0; i < allelements.length; i++) {
        var mItem = allelements[i];
        if (typeof mItem.className == "string" && mItem.className == this._className) {
            var h3s = mItem.getElementsByTagName("h4");
            var uls = mItem.getElementsByTagName("ul");
            if (h3s.length == 1 && uls.length == 1) {
                h3s[0].style.cursor = "hand";
                if (this._default == this._elements.length) {
                    uls[0].style.display = "block";
                } else {
                    uls[0].style.display = "none";
                }
                this._elements[this._elements.length] = mItem;
            }
        }
    }
}
MenuSwitch.prototype.open = function (mElement) {
    var uls = mElement.getElementsByTagName("ul");
    uls[0].style.display = "block";
}
MenuSwitch.prototype.close = function (mElement) {
    var uls = mElement.getElementsByTagName("ul");
    uls[0].style.display = "none";
}
MenuSwitch.prototype.isOpen = function (mElement) {
    var uls = mElement.getElementsByTagName("ul");
    return uls[0].style.display == "block";
}
MenuSwitch.prototype.toggledisplay = function (header) {
    var mItem;
    if (window.addEventListener) {
        mItem = header.parentNode;
    } else {
        mItem = header.parentElement;
    }
    if (this.isOpen(mItem)) {
        this.close(mItem);
    } else {
        this.open(mItem);
    }
    if (!this._previous) {
        for (var i = 0; i < this._elements.length; i++) {
            if (this._elements[i] != mItem) {
                var uls = this._elements[i].getElementsByTagName("ul");
                uls[0].style.display = "none";
            }
        }
    }
}
MenuSwitch.prototype.init = function () {
    var instance = this;
    this.collectElementbyClass();
    if (this._elements.length == 0) {
        return;
    }
    for (var i = 0; i < this._elements.length; i++) {
        var h3s = this._elements[i].getElementsByTagName("h4");
        if (window.addEventListener) {
            h3s[0].addEventListener("click", function () { instance.toggledisplay(this); }, false);
        } else {
            h3s[0].onclick = function () { instance.toggledisplay(this); }
        }
    }
}

var mSwitch = new MenuSwitch("menuDiv");
mSwitch.setDefault(0);
mSwitch.setPrevious(false);
mSwitch.init();

let zkld="／";

function zk() {
    window.location.href="#／"+zka;
        if (zkld=="／"||zkld!=zka){
            zkld=zka;
            window.scrollBy(0, -20);
        }
        else{
            zkld="／";
            window.scrollBy(0, -150);
        }

    var yd = "／"+zka;
    var dy = "<iframe src=\"/i/" + zka + "\" frameborder=\"0\" width=\"100%\" height=\"50\" id=\"／／" +zka+ "\"></iframe><p id=\"／"+zka+"／\">加载中..</p>";
    document.getElementById(yd).innerHTML=dy;
    console.log("/i/"+zka);
}