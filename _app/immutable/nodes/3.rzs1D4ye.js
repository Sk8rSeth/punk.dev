import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as rt,z as K,g as vt,A as i,C as d,D as C,F as O,w as t,B as a,G as x,I as Q}from"../chunks/CDwO1_HK.js";import{s as p,e as ot}from"../chunks/C5-4yb13.js";import{i as u}from"../chunks/CgOwoeeM.js";import{e as R,i as T,s as I}from"../chunks/CAZSlmrA.js";import{t as n,a as l,c as ct}from"../chunks/ClEugyDf.js";import{c as dt}from"../chunks/CMxSOZBb.js";import{s as lt}from"../chunks/Dh1mnNg3.js";import{i as nt}from"../chunks/DQn1Tzjs.js";import{p as mt}from"../chunks/CF1M12zO.js";import{o as _t}from"../chunks/6Mbh98Zb.js";import{g as pt}from"../chunks/CGxipEcu.js";var ut=n('<span class="tag svelte-1ic7qa2"> </span>'),ft=n('<div class="tags svelte-1ic7qa2"></div>'),gt=n('<img class="featured-image svelte-1ic7qa2">'),ht=n('<div class="excerpt svelte-1ic7qa2"> </div>'),qt=n('<div class="content-area svelte-1ic7qa2"><div class="post-content svelte-1ic7qa2"><h1 class="svelte-1ic7qa2"> </h1> <div class="post-meta svelte-1ic7qa2"><time> </time> <!></div> <!> <!> <!></div></div>'),xt=n('<div class="content-area svelte-1ic7qa2"><p>Select a post from the archive to read.</p></div>'),wt=n('<button><div class="post-title svelte-1ic7qa2"> </div> <div class="post-date svelte-1ic7qa2"> </div></button>'),bt=n('<div class="no-posts svelte-1ic7qa2">No posts yet.</div>'),kt=n('<div class="main-content-area svelte-1ic7qa2"><div class="main-content-container punkcard svelte-1ic7qa2"><div class="punkcard-content"><div class="inner-container"><h2 class="section-title">//Product</h2> <!></div></div></div></div> <div class="logs-archive punkcard svelte-1ic7qa2"><div class="punkcard-content"><div class="inner-container"><h2 class="section-title">//All-Products</h2> <div class="archive-list svelte-1ic7qa2"><!> <!></div></div></div></div>',1);function Nt(U,A){rt(A,!1),mt(A,"data",8);let w=O([]),e=O(null),b="";_t(async()=>{const v=window.location.pathname.match(/\/products\/([^\/]+)/);b=v?v[1]:"",C(w,await pt("products")),b&&C(e,t(w).find(c=>c.slug===b))});function V(s){C(e,s),window.history.pushState({},s.title,`/products/${s.slug}`)}nt();var F=kt(),k=K(F),L=i(k),z=i(L),B=i(z),W=d(i(B),2);{var X=s=>{var v=qt(),c=i(v),_=i(c),f=i(_,!0);a(_);var g=d(_,2),m=i(g),D=i(m,!0);a(m);var y=d(m,2);{var P=r=>{var o=ft();R(o,5,()=>t(e).tags,T,(h,S)=>{var q=ut(),st=i(q,!0);a(q),x(()=>p(st,t(S))),l(h,q)}),a(o),l(r,o)};u(y,r=>{t(e).tags&&t(e).tags.length>0&&r(P)})}a(g);var H=d(g,2);{var tt=r=>{var o=gt();x(()=>{I(o,"src",t(e).featuredImage),I(o,"alt",t(e).title)}),l(r,o)};u(H,r=>{t(e).featuredImage&&r(tt)})}var J=d(H,2);{var at=r=>{var o=ht(),h=i(o,!0);a(o),x(()=>p(h,t(e).excerpt)),l(r,o)};u(J,r=>{t(e).excerpt&&r(at)})}var et=d(J,2);{var it=r=>{var o=ct(),h=K(o);dt(h,()=>t(e).Content,(S,q)=>{q(S,{})}),l(r,o)};u(et,r=>{t(e).Content&&r(it)})}a(c),a(v),x(r=>{p(f,t(e).title),I(m,"datetime",t(e).date),p(D,r)},[()=>new Date(t(e).date).toLocaleDateString()],Q),l(s,v)},Y=s=>{var v=xt();l(s,v)};u(W,s=>{t(e)?s(X):s(Y,!1)})}a(B),a(z),a(L),a(k);var G=d(k,2),M=i(G),N=i(M),j=d(i(N),2),E=i(j);R(E,1,()=>t(w),T,(s,v)=>{var c=wt();let _;var f=i(c),g=i(f,!0);a(f);var m=d(f,2),D=i(m,!0);a(m),a(c),x((y,P)=>{_=lt(c,1,"archive-item svelte-1ic7qa2",null,_,y),p(g,t(v).title),p(D,P)},[()=>({active:t(e)&&t(e).slug===t(v).slug}),()=>new Date(t(v).date).toLocaleDateString()],Q),ot("click",c,()=>V(t(v))),l(s,c)});var Z=d(E,2);{var $=s=>{var v=bt();l(s,v)};u(Z,s=>{t(w).length===0&&s($)})}a(j),a(N),a(M),a(G),l(U,F),vt()}export{Nt as component};
