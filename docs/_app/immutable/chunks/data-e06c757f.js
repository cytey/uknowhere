import{w as e}from"./singletons-b52f9a50.js";let a=localStorage.getItem("data");const o=e(a?JSON.parse(a):{});o.subscribe(t=>{t?localStorage.setItem("data",JSON.stringify(t)):localStorage.removeItem("data")});export{o as d};