import{S as W,i as J,s as L,k as m,a as M,l as d,m as v,h as n,c as x,C as T,n as a,b as D,D as r,B,E as Y,q as I,r as z,F as R,u as le,G as ne,w as Z,H as oe,x as ee,y as te,I as ce,J as ie,K as ue,f as G,t as K,z as ae}from"../../chunks/index-d1dd279f.js";import{p as fe}from"../../chunks/stores-f38928a1.js";import{l as pe}from"../../chunks/logo-ec041307.js";import{d as he}from"../../chunks/data-9b533562.js";import{b as U}from"../../chunks/paths-6cd3a76e.js";const me=""+new URL("../../assets/warning-4963f440.png",import.meta.url).href;function de(b){let e,c,o,t,u,i,f,y;return{c(){e=m("a"),c=I("Home"),o=M(),t=m("a"),u=I("About"),i=M(),f=m("a"),y=I("UKnoWHere"),this.h()},l(s){e=d(s,"A",{href:!0,class:!0});var p=v(e);c=z(p,"Home"),p.forEach(n),o=x(s),t=d(s,"A",{href:!0,class:!0});var g=v(t);u=z(g,"About"),g.forEach(n),i=x(s),f=d(s,"A",{href:!0,class:!0});var h=v(f);y=z(h,"UKnoWHere"),h.forEach(n),this.h()},h(){a(e,"href",U+"/"),a(e,"class","tab svelte-eh9uz6"),R(e,"tab-active",b[1].url.pathname==="/"),a(t,"href",U+"/about"),a(t,"class","tab svelte-eh9uz6"),R(t,"tab-active",b[1].url.pathname==="/about"),a(f,"href",U+"/app"),a(f,"class","tab svelte-eh9uz6"),R(f,"tab-active",b[1].url.pathname.startsWith("/app"))},m(s,p){D(s,e,p),r(e,c),D(s,o,p),D(s,t,p),r(t,u),D(s,i,p),D(s,f,p),r(f,y)},p(s,p){p&2&&R(e,"tab-active",s[1].url.pathname==="/"),p&2&&R(t,"tab-active",s[1].url.pathname==="/about"),p&2&&R(f,"tab-active",s[1].url.pathname.startsWith("/app"))},d(s){s&&n(e),s&&n(o),s&&n(t),s&&n(i),s&&n(f)}}}function _e(b){let e,c=b[0].address+"",o;return{c(){e=m("a"),o=I(c),this.h()},l(t){e=d(t,"A",{href:!0,class:!0});var u=v(e);o=z(u,c),u.forEach(n),this.h()},h(){a(e,"href",U+"/app"),a(e,"class","tab tab-active svelte-eh9uz6")},m(t,u){D(t,e,u),r(e,o)},p(t,u){u&1&&c!==(c=t[0].address+"")&&le(o,c)},d(t){t&&n(e)}}}function ve(b){let e,c,o,t,u,i,f,y,s,p,g,h,H;function E(k,$){return k[0].addressFlag&&k[0].address?_e:de}let l=E(b),_=l(b);return{c(){e=m("header"),c=m("div"),o=m("a"),t=m("img"),i=M(),f=m("nav"),y=m("div"),_.c(),s=M(),p=m("div"),g=m("a"),h=m("img"),this.h()},l(k){e=d(k,"HEADER",{class:!0});var $=v(e);c=d($,"DIV",{class:!0});var A=v(c);o=d(A,"A",{href:!0,class:!0});var w=v(o);t=d(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(n),A.forEach(n),i=x($),f=d($,"NAV",{class:!0});var P=v(f);y=d(P,"DIV",{class:!0});var q=v(y);_.l(q),q.forEach(n),P.forEach(n),s=x($),p=d($,"DIV",{class:!0});var V=v(p);g=d(V,"A",{href:!0,class:!0});var C=v(g);h=d(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(n),V.forEach(n),$.forEach(n),this.h()},h(){T(t.src,u=pe)||a(t,"src",u),a(t,"alt","Home"),a(t,"class","svelte-eh9uz6"),a(o,"href",U+"/"),a(o,"class","svelte-eh9uz6"),a(c,"class","corner svelte-eh9uz6"),a(y,"class","tabs tabs-boxed svelte-eh9uz6"),a(f,"class","svelte-eh9uz6"),T(h.src,H=me)||a(h,"src",H),a(h,"alt","Help"),a(h,"class","svelte-eh9uz6"),a(g,"href",U+"/app/how-to-play"),a(g,"class","svelte-eh9uz6"),a(p,"class","corner svelte-eh9uz6"),a(e,"class","svelte-eh9uz6")},m(k,$){D(k,e,$),r(e,c),r(c,o),r(o,t),r(e,i),r(e,f),r(f,y),_.m(y,null),r(e,s),r(e,p),r(p,g),r(g,h)},p(k,[$]){l===(l=E(k))&&_?_.p(k,$):(_.d(1),_=l(k),_&&(_.c(),_.m(y,null)))},i:B,o:B,d(k){k&&n(e),_.d()}}}function ge(b,e,c){let o,t;return Y(b,he,u=>c(0,o=u)),Y(b,fe,u=>c(1,t=u)),[o,t]}class be extends W{constructor(e){super(),J(this,e,ge,ve,L,{})}}function Ee(b){let e,c,o,t,u,i,f,y,s,p,g,h,H,E,l,_,k,$,A,w,P,q,V;return{c(){e=m("footer"),c=m("div"),o=M(),t=m("p"),u=I(`Powered by
        `),i=m("a"),f=I("Google Maps Platform"),y=I(` |
        `),s=m("a"),p=I("SvelteKit"),g=I(` |
        `),h=m("a"),H=I("Tailwind CSS"),E=I(` |
        `),l=m("a"),_=I("DaisyUI"),k=M(),$=m("br"),A=M(),w=m("a"),P=I("Map icons created by kmg design - Flaticon"),q=M(),V=m("div"),this.h()},l(C){e=d(C,"FOOTER",{class:!0});var F=v(e);c=d(F,"DIV",{class:!0});var se=v(c);se.forEach(n),o=x(F),t=d(F,"P",{class:!0});var S=v(t);u=z(S,`Powered by
        `),i=d(S,"A",{target:!0,rel:!0,href:!0,class:!0});var N=v(i);f=z(N,"Google Maps Platform"),N.forEach(n),y=z(S,` |
        `),s=d(S,"A",{target:!0,rel:!0,href:!0,class:!0});var O=v(s);p=z(O,"SvelteKit"),O.forEach(n),g=z(S,` |
        `),h=d(S,"A",{target:!0,rel:!0,href:!0,class:!0});var j=v(h);H=z(j,"Tailwind CSS"),j.forEach(n),E=z(S,` |
        `),l=d(S,"A",{target:!0,rel:!0,href:!0,class:!0});var Q=v(l);_=z(Q,"DaisyUI"),Q.forEach(n),k=x(S),$=d(S,"BR",{}),A=x(S),w=d(S,"A",{target:!0,rel:!0,href:!0,class:!0});var X=v(w);P=z(X,"Map icons created by kmg design - Flaticon"),X.forEach(n),S.forEach(n),q=x(F),V=d(F,"DIV",{class:!0});var re=v(V);re.forEach(n),F.forEach(n),this.h()},h(){a(c,"class","corner corner-left svelte-xke1gi"),a(i,"target","_blank"),a(i,"rel","noreferrer"),a(i,"href","https://mapsplatform.google.com/"),a(i,"class","svelte-xke1gi"),a(s,"target","_blank"),a(s,"rel","noreferrer"),a(s,"href","https://kit.svelte.dev/"),a(s,"class","svelte-xke1gi"),a(h,"target","_blank"),a(h,"rel","noreferrer"),a(h,"href","https://tailwindcss.com/"),a(h,"class","svelte-xke1gi"),a(l,"target","_blank"),a(l,"rel","noreferrer"),a(l,"href","https://daisyui.com/"),a(l,"class","svelte-xke1gi"),a(w,"target","_blank"),a(w,"rel","noreferrer"),a(w,"href","https://www.flaticon.com/free-icons/map"),a(w,"class","svelte-xke1gi"),a(t,"class","w-full text-center text-xs px-14 svelte-xke1gi"),a(V,"class","corner corner-right svelte-xke1gi"),a(e,"class","flex items-center svelte-xke1gi")},m(C,F){D(C,e,F),r(e,c),r(e,o),r(e,t),r(t,u),r(t,i),r(i,f),r(t,y),r(t,s),r(s,p),r(t,g),r(t,h),r(h,H),r(t,E),r(t,l),r(l,_),r(t,k),r(t,$),r(t,A),r(t,w),r(w,P),r(e,q),r(e,V)},p:B,i:B,o:B,d(C){C&&n(e)}}}class ye extends W{constructor(e){super(),J(this,e,null,Ee,L,{})}}function ke(b){let e,c,o,t,u,i,f,y,s,p,g,h;f=new be({});const H=b[1].default,E=ne(H,b,b[0],null);return g=new ye({}),{c(){e=m("script"),o=m("script"),t=I(`window.initMap = (position) => {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                center: position,
            });
            return map;
        }`),u=M(),i=m("div"),Z(f.$$.fragment),y=M(),s=m("main"),E&&E.c(),p=M(),Z(g.$$.fragment),this.h()},l(l){const _=oe("svelte-1s2n5i9",document.head);e=d(_,"SCRIPT",{src:!0});var k=v(e);k.forEach(n),o=d(_,"SCRIPT",{});var $=v(o);t=z($,`window.initMap = (position) => {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                center: position,
            });
            return map;
        }`),$.forEach(n),_.forEach(n),u=x(l),i=d(l,"DIV",{class:!0});var A=v(i);ee(f.$$.fragment,A),y=x(A),s=d(A,"MAIN",{class:!0});var w=v(s);E&&E.l(w),w.forEach(n),p=x(A),ee(g.$$.fragment,A),A.forEach(n),this.h()},h(){e.defer=!0,e.async=!0,T(e.src,c="https://maps.googleapis.com/maps/api/js?key=AIzaSyBU3H6lIvnp1fJxtMSm6qCbyyuvernVrsc&callback=initMap&libraries=places")||a(e,"src",c),a(s,"class","svelte-uf2qk9"),a(i,"class","app svelte-uf2qk9")},m(l,_){r(document.head,e),r(document.head,o),r(o,t),D(l,u,_),D(l,i,_),te(f,i,null),r(i,y),r(i,s),E&&E.m(s,null),r(i,p),te(g,i,null),h=!0},p(l,[_]){E&&E.p&&(!h||_&1)&&ce(E,H,l,l[0],h?ue(H,l[0],_,null):ie(l[0]),null)},i(l){h||(G(f.$$.fragment,l),G(E,l),G(g.$$.fragment,l),h=!0)},o(l){K(f.$$.fragment,l),K(E,l),K(g.$$.fragment,l),h=!1},d(l){n(e),n(o),l&&n(u),l&&n(i),ae(f),E&&E.d(l),ae(g)}}}function $e(b,e,c){let{$$slots:o={},$$scope:t}=e;return b.$$set=u=>{"$$scope"in u&&c(0,t=u.$$scope)},[t,o]}class Me extends W{constructor(e){super(),J(this,e,$e,ke,L,{})}}export{Me as default};
