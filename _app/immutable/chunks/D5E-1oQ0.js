import{J as re,j as ae,K as W,w as m,h as g,L as ne,i as se,g as B,f as ie,o as fe,v as K,x as y,n as x,M as te,y as Z,k as $,l as le,N as H,O as z,q as ue,P,Q as O,R as X,T as D,m as ve,V as G,W as oe,X as _e,Y as de,Z as ce,_ as he,$ as pe,a0 as Ee,a1 as Ae,a2 as Te,a3 as Ie,a4 as Ne,a5 as ge}from"./BgWa3U5y.js";function ye(a,e){return e}function Me(a,e,r,f){for(var t=[],u=e.length,o=0;o<u;o++)de(e[o].e,t,!0);var d=u>0&&t.length===0&&r!==null;if(d){var A=r.parentNode;ce(A),A.append(r),f.clear(),M(a,e[0].prev,e[u-1].next)}he(t,()=>{for(var h=0;h<u;h++){var _=e[h];d||(f.delete(_.k),M(a,_.prev,_.next)),pe(_.e,!d)}})}function He(a,e,r,f,t,u=null){var o=a,d={flags:e,items:new Map,first:null},A=(e&W)!==0;if(A){var h=a;o=g?m(ne(h)):h.appendChild(re())}g&&se();var _=null,S=!1,i=ie(()=>{var v=r();return oe(v)?v:v==null?[]:z(v)});ae(()=>{var v=B(i),n=v.length;if(S&&n===0)return;S=n===0;let I=!1;if(g){var p=o.data===fe;p!==(n===0)&&(o=K(),m(o),y(!1),I=!0)}if(g){for(var E=null,T,c=0;c<n;c++){if(x.nodeType===8&&x.data===te){o=x,I=!0,y(!1);break}var s=v[c],l=f(s,c);T=F(x,d,E,null,s,l,c,t,e,r),d.items.set(l,T),E=T}n>0&&m(K())}g||Se(v,d,o,t,e,f,r),u!==null&&(n===0?_?Z(_):_=$(()=>u(o)):_!==null&&le(_,()=>{_=null})),I&&y(!0),B(i)}),g&&(o=x)}function Se(a,e,r,f,t,u,o){var Y,b,q,U;var d=(t&_e)!==0,A=(t&(O|D))!==0,h=a.length,_=e.items,S=e.first,i=S,v,n=null,I,p=[],E=[],T,c,s,l;if(d)for(l=0;l<h;l+=1)T=a[l],c=u(T,l),s=_.get(c),s!==void 0&&((Y=s.a)==null||Y.measure(),(I??(I=new Set)).add(s));for(l=0;l<h;l+=1){if(T=a[l],c=u(T,l),s=_.get(c),s===void 0){var j=i?i.e.nodes_start:r;n=F(j,e,n,n===null?e.first:n.next,T,c,l,f,t,o),_.set(c,n),p=[],E=[],i=n.next;continue}if(A&&we(s,T,l,t),(s.e.f&H)!==0&&(Z(s.e),d&&((b=s.a)==null||b.unfix(),(I??(I=new Set)).delete(s))),s!==i){if(v!==void 0&&v.has(s)){if(p.length<E.length){var C=E[0],N;n=C.prev;var k=p[0],L=p[p.length-1];for(N=0;N<p.length;N+=1)J(p[N],C,r);for(N=0;N<E.length;N+=1)v.delete(E[N]);M(e,k.prev,L.next),M(e,n,k),M(e,L,C),i=C,n=L,l-=1,p=[],E=[]}else v.delete(s),J(s,i,r),M(e,s.prev,s.next),M(e,s,n===null?e.first:n.next),M(e,n,s),n=s;continue}for(p=[],E=[];i!==null&&i.k!==c;)(i.e.f&H)===0&&(v??(v=new Set)).add(i),E.push(i),i=i.next;if(i===null)continue;s=i}p.push(s),n=s,i=s.next}if(i!==null||v!==void 0){for(var w=v===void 0?[]:z(v);i!==null;)(i.e.f&H)===0&&w.push(i),i=i.next;var R=w.length;if(R>0){var ee=(t&W)!==0&&h===0?r:null;if(d){for(l=0;l<R;l+=1)(q=w[l].a)==null||q.measure();for(l=0;l<R;l+=1)(U=w[l].a)==null||U.fix()}Me(e,w,ee,_)}}d&&ue(()=>{var V;if(I!==void 0)for(s of I)(V=s.a)==null||V.apply()}),P.first=e.first&&e.first.e,P.last=n&&n.e}function we(a,e,r,f){(f&O)!==0&&X(a.v,e),(f&D)!==0?X(a.i,r):a.i=r}function F(a,e,r,f,t,u,o,d,A,h){var _=(A&O)!==0,S=(A&Ee)===0,i=_?S?ve(t):G(t):t,v=(A&D)===0?o:G(o),n={i:v,v:i,k:u,a:null,e:null,prev:r,next:f};try{return n.e=$(()=>d(a,i,v,h),g),n.e.prev=r&&r.e,n.e.next=f&&f.e,r===null?e.first=n:(r.next=n,r.e.next=n.e),f!==null&&(f.prev=n,f.e.prev=n.e),n}finally{}}function J(a,e,r){for(var f=a.next?a.next.e.nodes_start:r,t=e?e.e.nodes_start:r,u=a.e.nodes_start;u!==f;){var o=Ae(u);t.before(u),u=o}}function M(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const xe=Symbol("is custom element"),Ce=Symbol("is html");function Oe(a,e,r,f){var t=Le(a);g&&(t[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||t[e]!==(t[e]=r)&&(e==="loading"&&(a[Ne]=r),r==null?a.removeAttribute(e):typeof r!="string"&&Re(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function Le(a){return a.__attributes??(a.__attributes={[xe]:a.nodeName.includes("-"),[Ce]:a.namespaceURI===Te})}var Q=new Map;function Re(a){var e=Q.get(a.nodeName);if(e)return e;Q.set(a.nodeName,e=[]);for(var r,f=a,t=Element.prototype;t!==f;){r=ge(f);for(var u in r)r[u].set&&e.push(u);f=Ie(f)}return e}export{He as e,ye as i,Oe as s};
