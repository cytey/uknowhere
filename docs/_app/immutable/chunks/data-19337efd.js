import{w as e}from"./singletons-fd3f2160.js";let a=localStorage.getItem("data");const o=e(a?JSON.parse(a):{});o.subscribe(t=>{t?localStorage.setItem("data",JSON.stringify(t)):localStorage.removeItem("data")});export{o as d};