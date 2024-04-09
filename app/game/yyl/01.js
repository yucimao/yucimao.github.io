const Sakana=(t=>{const a=document.createElement("style");
a.innerHTML=".sakana-box{width:500px;height:800px;position:relative;transform-origin:50% 100%;pointer-events:none}"+
".sakana-box canvas{position:absolute;left:0;right:0;bottom:0;pointer-events:none}"+
".sakana-box .sakana-character{width:400px;height:400px;position:absolute;left:0;right:0;margin:0 auto;bottom:235px;cursor:pointer;pointer-events:auto;transform-origin:50% 400px;background:no-repeat 50% 50%;background-size:cover}"+
".sakana-box .sakana-bed{width:160px;height:20px;position:absolute;left:0;right:0;margin:0 auto;bottom:0;background:rgba(255,255,255,.5) no-repeat 50% 50%;border-radius:2px;cursor:pointer;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMARLt37hGZzDMiZt2IqlUoxiOvAAACgElEQVRYw+2Xv2/TQBTHHayY2PyQEVOmRv0HiIQQbAghGBDCqSrBglQWBhaCkDpWDahbh0YKYqUDeyY2pHRBQurQ/gfpUHVuWqu/rPb13l19Z8fnPJ86tIO/y/3w+8h37975PVulSl2dvnVomykA8OXIBVh4YoY4bLRnhsyx0b4ZssFGL4wQF5iaRghuJWwZISuJrczUCyEPIKlmAcSGlPa6NPID0mrQyHAM+UAi9hgR0gtbQrNpIeC+o5DqIuueJV7YIJE7aLapZsMWibRZLxJmbsD6I431jeQZWB42R+LJO36SJNLHZlVFwYFFIR4oMwf7X0ikL3wkd3XY0iOURpdAdE7eMEdsc8TqmyMON7nHhM5mzX0SqaLJLs5cxHCFQNCkRK4f0ntoiNQfM8wMGeCtjxFsT0gE1UwiowmICvpGjHgEUlmHNCIu23E+shPERCQX5mCbh/RUPvnbkU6+id+wPOSpTCT/E0c5h7koD+mrPFqBPO2mkF/xtF8YuWWOOADh5ykjxIOXWxaJ5EVybTrWIqC+ynEjB8l4fk1NkIgLXEckkkkghySSPd61wkgN41SWDBSisncPw65TFBnixeeVyR8SSWXvFZmRaaQtSiobyXkakZkM1ydeQyN8D7Aae2G+ALLM6zZZKUUdErEDVU8uYfcVhVSH4iXqSOEfgfyGeCfyNZE/EfnOiWepyIGD7gTkpwhgteNlQD0f9/QMKyLaHJkNAPVRzCuPw+uu/qvv9wTxJvnwLXCd+tqv0vuLp+lVbOv+L24DV2SDzj/uELJVaU0gZ/wuhpki9+5AU5IPQNh6+nOzg2xJju5aeMT/9D5ZGs0O8i90pW6VKnW1OgfC8OvrrM0udwAAAABJRU5ErkJggg==);background-size:20px 20px;box-shadow:0 0 0 2px rgba(0,0,0,.05)}"+
".sakana-box[data-can-switch-character=true] .sakana-bed{pointer-events:auto}.a1{top:10px;}",
document.head.appendChild(a);const{log:e}=console,n="color:#FED;background-color:#C34;padding:2px 4px;",o="color:#CCC;background-color:#235;padding:2px 4px;",
r={chisato:{r:1,y:40,t:0,w:0,d:.99},takina:{r:12,y:2,t:0,w:0,d:.988}},s={chisato:new Audio(""),takina:new Audio(""),isMute:!0};
s.takina.volume=s.chisato.volume=.8,s.takina.muted=s.chisato.muted=s.isMute;
const i="function"==typeof window.structuredClone?t=>window.structuredClone(t):t=>JSON.parse(JSON.stringify(t)),c="https://lab.magiconch.com/sakana/";
return e("代码来自：https://lab.magiconch.com/sakana/"),
{init:(t={})=>{const{decay:a,onSwitchCharacter:c=(t=>{}),scale:u="auto",translateY:d=0,strokeStyle:h="#eee",canSwitchCharacter:l=!1}=t;
let{el:m,character:p="takina",inertia:g,originRotate:b=0,r:k,y:v}=t;
if(m.constructor===String&&(m=document.querySelector(m)),!m)throw new Error("invalid Element");
g||(g=.08),g=Math.min(.5,Math.max(0,g));
let x;
const w=m;
w.classList.add("sakana-box"),w.innerHTML='<canvas></canvas><div class="sakana-character"></div><div class="sakana-bed a1"></div><div class="sakana-bed"></div>';
const y=w.querySelector(".sakana-character"),M=w.querySelector(".sakana-bed"),f=w.querySelector("canvas");
w.style.transform=`translateY(${d||0}) scale(${u})`;
let C=!1;
const E=1*(window.devicePixelRatio||1),L=500*E,S=800*E;
f.width=L,f.height=S,f.style.width="500px",f.style.height="800px";
const q=f.getContext("2d");
q.setTransform(1,0,0,1,0,0),q.scale(E,E);
const R=t=>{let{r:a,y:e,t:n,w:o,d:r}=x;
const s=1*a;
y.style.transform=`rotate(${a}deg) translateX(${s}px) translateY(${e}px)`,q.clearRect(0,0,500,800),q.save(),q.strokeStyle=h,q.lineWidth=10,q.beginPath(),q.translate(250,640),q.moveTo(0,140);
const i=((t,a,e,n,o)=>{const r=Math.PI/180*o,s=Math.cos(r),i=Math.sin(r);
return{x:s*(e-t)+i*(n-a)+t,y:s*(n-a)-i*(e-t)+a}})(0,-100,s,-e,a),c=i.x,u=-i.y-100;
q.quadraticCurveTo(0,75,c,u),q.stroke(),q.restore()};
let A=+new Date;
const $=t=>{if(!C)return;
const a=+new Date;
let e=g;
const n=a-A;
n<16&&(e=g/(1e3/60)*n),A=a;
let{r:o,y:r,t:s,w:i,d:c}=x;
if(o+=(i=i-2*o-b)*e*1.2,x.w=i*c,x.r=o,r+=(s-=2*r)*e*2,x.t=s*c,x.y=r,Math.max(Math.abs(x.w),Math.abs(x.r),Math.abs(x.t),Math.abs(x.y))<.1)return C=!1;
requestAnimationFrame($),R()},D=(t,a)=>{let e=.1*t;
e=Math.max(-60,e),e=Math.min(60,e),a=.1*a*2,a=Math.max(-110,a),a=Math.min(110,a),x.r=e,x.y=a,x.w=0,x.t=0,R()};
y.addEventListener("mousedown",t=>{t.preventDefault(),C=!1;
const{pageX:a,pageY:e}=t,n=e;
s.takina.muted=s.chisato.muted=s.isMute,x.w=0,x.t=0;
const o=t=>{const a=w.getBoundingClientRect(),e=a.left+a.width/2,{pageX:o,pageY:r}=t;
a.top,D(o-e,r-n)},r=t=>{t.preventDefault(),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r),C=!0,X(),requestAnimationFrame($)};
document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)});
y.addEventListener("touchstart",t=>{if(t.preventDefault(),C=!1,!t.touches[0])return;
const{pageX:a,pageY:e}=t.touches[0],n=e;
s.takina.muted=s.chisato.muted=s.isMute,x.w=0,x.t=0;
const o=t=>{if(!t.touches[0])return;
const a=w.getBoundingClientRect(),e=a.left+a.width/2,{pageX:o,pageY:r}=t.touches[0];
a.top,D(o-e,r-n)},r=t=>{document.removeEventListener("touchmove",o),document.removeEventListener("touchend",r),C=!0,X(),requestAnimationFrame($)};
document.addEventListener("touchmove",o),document.addEventListener("touchend",r)});
const Y=t=>{C||(C=!0,requestAnimationFrame($))},T=t=>{y.setAttribute("data-character",t);
const e=r[t];
e&&(x=i(e),a&&(x.d=a),k&&(x.r=k),k&&(x.y=v),Y())},F=t=>{T(p="chisato"===p?"takina":"chisato"),c(p)};
l&&(w.setAttribute("data-can-switch-character",l),M.addEventListener("click",t=>{t.preventDefault(),F()}));
const X=t=>{s.isMute||("chisato"===p?Math.abs(x.r)<=4&&Math.abs(x.y)>=20&&(e("%cchin~a~na~go~",n),s.chisato.play()):x.r>=r.takina.r&&(Math.abs(x.y)<=12||x.r>=3*Math.abs(x.y))&&(e("%csakana~",o),s.takina.play()))};
return T(p),{setCharacter:T,switchCharacter:F,setOriginRotate:t=>b=t,confirmRunning:Y,pause(){C=!1},play(){Y()},getValue:()=>x,getRunning:()=>C}},Voices:s,setMute(t){s.isMute=t,s.takina.muted=s.chisato.muted=t},destroy(){running=!1,el.innerHTML=""}}})();
"object"==typeof module&&module.exports&&(module.exports=Sakana);
