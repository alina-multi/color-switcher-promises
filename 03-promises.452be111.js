var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequiref2dc;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequiref2dc=n);var i=n("iQIUW");document.querySelector(".form");const r=document.querySelector("input[name=delay]"),l=document.querySelector("input[name=step]"),u=document.querySelector("input[name=amount]"),a=document.querySelector("button");let s=0;function c(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{o?n({position:e,delay:t}):i({position:e,delay:t})}))}a.addEventListener("click",(function(e){e.preventDefault();const t=r.value,o=l.value,n=u.value,a=setTimeout((()=>{s+=1,c(s,o).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}));const e=setInterval((()=>{s+=1,c(s,o).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),s===Number(n)&&(clearInterval(e),clearTimeout(a),s=0)}),o)}),t)}));
//# sourceMappingURL=03-promises.452be111.js.map