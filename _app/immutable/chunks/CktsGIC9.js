import{a9 as B,aa as M,ab as p,m as y,g as f,b as N,ac as Y,ad as G,ae as $,G as D,f as w,af as C,ag as j,ah as z,u as T,ai as V,S as Z,aj as F,ak as H,al as J,am as K}from"./BgWa3U5y.js";import{s as Q,g as W}from"./DyVRT2aK.js";import{l as X}from"./DIeogL5L.js";let b=!1,E=Symbol();function ne(e,r,u){const n=u[r]??(u[r]={store:null,source:y(void 0),unsubscribe:p});if(n.store!==e&&!(E in u))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=p;else{var v=!0;n.unsubscribe=Q(e,t=>{v?n.source.v=t:N(n.source,t)}),v=!1}return e&&E in u?W(e):f(n.source)}function ue(){const e={};function r(){B(()=>{for(var u in e)e[u].unsubscribe();M(e,E,{enumerable:!1,value:!0})})}return[e,r]}function k(e){var r=b;try{return b=!1,[e(),b]}finally{b=r}}function h(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function ie(e,r,u,n){var L;var v=(u&J)!==0,t=!X||(u&H)!==0,o=(u&V)!==0,U=(u&K)!==0,O=!1,l;o?[l,O]=k(()=>e[r]):l=e[r];var q=Z in e||F in e,c=o&&(((L=Y(e,r))==null?void 0:L.set)??(q&&r in e&&(a=>e[r]=a)))||void 0,s=n,S=!0,P=!1,R=()=>(P=!0,S&&(S=!1,U?s=T(n):s=n),s);l===void 0&&n!==void 0&&(c&&t&&G(),l=R(),c&&c(l));var _;if(t)_=()=>{var a=e[r];return a===void 0?R():(S=!0,P=!1,a)};else{var A=(v?D:w)(()=>e[r]);A.f|=$,_=()=>{var a=f(A);return a!==void 0&&(s=void 0),a===void 0?s:a}}if((u&C)===0)return _;if(c){var x=e.$$legacy;return function(a,d){return arguments.length>0?((!t||!d||x||O)&&c(d?_():a),a):_()}}var g=!1,m=y(l),i=D(()=>{var a=_(),d=f(m);return g?(g=!1,d):m.v=a});return o&&f(i),v||(i.equals=j),function(a,d){if(arguments.length>0){const I=d?f(i):t&&o?z(a):a;if(!i.equals(I)){if(g=!0,N(m,I),P&&s!==void 0&&(s=I),h(i))return a;T(()=>f(i))}return a}return h(i)?i.v:f(i)}}export{ne as a,ie as p,ue as s};
