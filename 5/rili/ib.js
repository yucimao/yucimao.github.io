/* 希尔历 */
let rlx = new Date('146-6-21');
let rlxa = new Date();
rlxa = rlxa - rlx;
var 希尔日 = Math.floor(rlxa / (24 * 3600 * 1000));
var 希尔月;
var 希尔年 = 4300 + parseInt(希尔日/47619)*100;
	希尔日 = 希尔日 % 47619;
let rlxend=0;
let 临时年;

if(希尔日<476){ //00年
    希尔月=parseInt(希尔日/34)+1;
    希尔日=希尔日%34+1;
    rlxend=1;
}

if(希尔日>475){ //其他情况
    希尔日=希尔日-476;
    希尔年=希尔年+1+parseInt(希尔日/2381)*5;
}

希尔日=希尔日%2381;

if(希尔日>1903){ //闰年
    希尔日=希尔日-1904;
    希尔年=希尔年+4;
    rlxend=2;
}

if(希尔日==306 && rlxend==2){
	希尔月=9;
	希尔日=35;
    rlxend=1;
}

if(希尔日>306 && rlxend==2){
	希尔日=希尔日-307;
	希尔月=10+parseInt(希尔日/34);
	希尔日=希尔日%34+1;
    rlxend=1;
}

if(希尔日<306 && rlxend==2){
	希尔月=1+parseInt(希尔日/34);
	希尔日=希尔日%34+1;
    rlxend=1;
}

if(rlxend==0){
	希尔年=希尔年+parseInt(希尔日/476);
	希尔日=希尔日%476;
	希尔月=1+parseInt(希尔日/34);
    希尔日=1+希尔日%34;
}

/* 阴历 */
let dNow = new Date();
let CalendarData = new Array(100);
let madd = new Array(12);
let tgString = "";
let dzString = "";
let numString = "";
let monString = "";
var cYear, cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;
function GetBit(m, n) {
    return (m >> n) & 1;
}
function e2c() {
    TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    let total, m, n, k;
    let isEnd = false;
    let tmp = TheDate.getFullYear();
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;
    if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
       total++;
    }
    for (m = 0;; m++) {
        k = (CalendarData[m] < 0xfff) ? 11 : 12;
        for (n = k; n >= 0; n--) {
             if (total <= 29 + GetBit(CalendarData[m], n)) {
                isEnd = true;
                break;
            }
            total = total - 29 - GetBit(CalendarData[m], n);
        }
        if (isEnd) break;
    }
    cYear = 1921 + m;
    cMonth = k - n + 1;
    cDay = total;
    if (k == 12) {
        if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth = 1 - cMonth;
        }
        if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
            cMonth--;
        }
    }
}
function GetcDateString() {
    let tmp = "";
    tmp += tgString.charAt((cYear - 4) % 10);
    tmp += dzString.charAt((cYear - 4) % 12);
    tmp += "";
    if (cMonth < 1) {
        tmp += "";
        tmp += monString.charAt( - cMonth - 1);
    } else {
        tmp += monString.charAt(cMonth - 1);
    }

    return tmp;
}
function GetLunarDay(solarYear, solarMonth, solarDay) {
    if (solarYear < 1921 || solarYear > 2020) {
        return "";
    } else {
        solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
        e2c(solarYear, solarMonth, solarDay);
        return GetcDateString();
    }
}
let D = new Date();
let yy = D.getFullYear();
let mm = D.getMonth() + 1;
let dd = D.getDate();

function getFullYear(d) { // 修正firefox下year错误
    yr = d.getYear();
    if (yr < 1000) yr += 1900;
    return yr;
}

let sValue = GetLunarDay(yy, mm, dd);
let 闰 = 0;

if (cMonth<0){
cMonth=Math.abs(cMonth);
闰 = 1;
}

var 农历月;
if (cMonth == 1){农历月="正";}
if (cMonth == 2){农历月="二";}
if (cMonth == 3){农历月="三";}
if (cMonth == 4){农历月="四";}
if (cMonth == 5){农历月="五";}
if (cMonth == 6){农历月="六";}
if (cMonth == 7){农历月="七";}
if (cMonth == 8){农历月="八";}
if (cMonth == 9){农历月="九";}
if (cMonth == 10){农历月="十";}
if (cMonth == 11){农历月="十一";}
if (cMonth == 12){农历月="腊";}
if (闰 == 1){农历月="闰"+农历月;}

var 农历日 = cDay;
let 农历日计算;
if (农历日 == 30){农历日计算="三";农历日="十";}
if (农历日 == 20){农历日计算="廿";农历日="十";}
if (农历日 == 10){农历日计算="初";农历日="十";}
if (农历日 < 10){农历日计算="初";}
if (农历日 > 20){农历日计算="廿";农历日=农历日-20;}
if (农历日 > 10){农历日计算="十";农历日=农历日-10;}
if (农历日 == 1){农历日="一";}
if (农历日 == 2){农历日="二";}
if (农历日 == 3){农历日="三";}
if (农历日 == 4){农历日="四";}
if (农历日 == 5){农历日="五";}
if (农历日 == 6){农历日="六";}
if (农历日 == 7){农历日="七";}
if (农历日 == 8){农历日="八";}
if (农历日 == 9){农历日="九";}
农历日=农历日计算+农历日;

/* 盖亚历 阳历 */
var 盖亚年=new Date().getFullYear();
var 盖亚月=new Date().getMonth()+1;
var 盖亚日=new Date().getDate();
var 星期=new Date().getDay();
if (星期==0){星期=7;}
var 盖亚星期;
if (星期==1){盖亚星期="一";}
if (星期==2){盖亚星期="二";}
if (星期==3){盖亚星期="三";}
if (星期==4){盖亚星期="四";}
if (星期==5){盖亚星期="五";}
if (星期==6){盖亚星期="六";}
if (星期==7){盖亚星期="日";}

/* x月第x个星期x */
let 第x个=parseInt(盖亚日/7);
let 第y个=盖亚日%7;
if (第y个!=0){第x个=第x个+1;}
let 剩余天数 = new Date(盖亚年, 盖亚月, 0).getDate()-盖亚日+1;
let 倒数第x个=parseInt(剩余天数/7);
let 倒数第y个=剩余天数%7;
if (倒数第y个!=0){倒数第x个=倒数第x个+1;}

let 盖亚历=盖亚年+"年"+盖亚月+"月"+盖亚日+"日 星期"+盖亚星期;
let 农历=农历月+"月"+农历日;
let 希尔历=希尔年+"年"+希尔月+"月"+希尔日+"日";
var rili_日期="<b>盖亚历</b> " + 盖亚历 + "<br/><b>农历</b> " + 农历 + "<br/><b>希尔历</b> " + 希尔历;
