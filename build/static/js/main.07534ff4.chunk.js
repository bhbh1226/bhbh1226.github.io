(this["webpackJsonpbhbh1226.github.io"]=this["webpackJsonpbhbh1226.github.io"]||[]).push([[0],{22:function(t,e,c){},23:function(t,e,c){},24:function(t,e,c){},25:function(t,e,c){},26:function(t,e,c){},28:function(t,e,c){},29:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},45:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(16),r=c.n(i),o=(c(22),c(23),c(5)),s=c(47),l=(c(24),c(25),c(26),c(3)),j=function(t){var e=t.type,c=Object(n.useContext)(f).themeColors,a=Object(n.useState)(100*Math.random()+"%"),i=Object(o.a)(a,2),r=i[0],s=i[1],j=Object(n.useState)(40*Math.random()+"%"),u=Object(o.a)(j,1)[0],d=Object(n.useState)("0"),b=Object(o.a)(d,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){switch(e){case"light":s(Math.random()*(m+w)+"px"),O(Math.ceil(30*Math.random())+1+"px");break;case"dark":s(Math.random()*(m+D)+"px"),O(Math.ceil(14*Math.random())+1+"px");break;default:O(Math.ceil(30*Math.random())+1+"px")}}),[e]),"light"===e?Object(l.jsx)("div",{className:"star light",style:{width:h,height:h,fontSize:h,left:r,top:u,color:c.starLight}}):Object(l.jsx)("div",{className:"star dark",style:{width:h,height:h,left:r,top:u,background:c.starDark}})},u=c(17),d=(c(28),function(t){var e=t.type,c=Object(u.useContext)(f).themeColors,a=Object(n.useState)("0"),i=Object(o.a)(a,2),r=i[0],s=i[1],j=Object(n.useState)("0"),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(n.useState)("0"),x=Object(o.a)(O,2),k=x[0],g=x[1],p=Object(n.useState)("0"),y=Object(o.a)(p,2),v=y[0],w=y[1];switch(Object(n.useEffect)((function(){switch(e){case"light":s(5*Math.random()+10+"px"),h(400*Math.random()+400+"px"),g(Math.random()*(m+L)+"px"),w(40*Math.random()+"%");break;case"dark":s(12*Math.random()+10+"px"),h(400*Math.random()+400+"px"),g(Math.random()*(m+S)+"px"),w(30*Math.random()+40+"%")}}),[e]),e){case"light":return Object(l.jsx)("div",{className:"line light",style:{width:b,height:r,left:k,top:v,background:c.lineLight}});case"dark":return Object(l.jsx)("div",{className:"line dark",style:{width:b,height:r,left:k,top:v,background:c.lineDark}});default:return Object(l.jsx)("div",{className:"line light",style:{width:b,height:r,left:k,top:v,background:c.lineDark}})}}),b=(c(29),function(t){var e=t.left,c=t.duration;return Object(l.jsx)(s.a.div,{className:"sea",animate:{left:[null,e,0],transition:{ease:["easeIn","easeInOut"],duration:c,repeat:1/0}}})}),h=function(t){var e=t.type,c=Object(n.useContext)(f).themeColors;switch(e){case"white":return Object(l.jsx)("div",{className:"cloud white",style:{background:c.cloudWhite}});case"pink":return Object(l.jsx)("div",{className:"cloud pink",style:{background:c.cloudPink}});case"ivory":return Object(l.jsx)("div",{className:"cloud ivory",style:{background:c.cloudIvory}})}},O=function(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(0),r=Object(o.a)(i,2),u=r[0],O=r[1],x=Object(n.useState)(0),k=Object(o.a)(x,2),g=k[0],p=k[1],y=Object(n.useState)(0),m=Object(o.a)(y,2),M=m[0],N=m[1],I=Object(n.useState)(0),P=Object(o.a)(I,2),W=P[0],E=P[1],X=Object(n.useState)(0),F=Object(o.a)(X,2),A=F[0],B=F[1],J=Object(n.useState)(0),T=Object(o.a)(J,2),z=T[0],H=T[1],K=Object(n.useState)(0),R=Object(o.a)(K,2),V=R[0],Y=R[1],q=Object(n.useContext)(f),G=q.scrollX,Q=q.setScrollX,U=q.themeColors,Z=Object(n.createRef)(),$=function(t){return Array.apply(null,Array(t))};return Object(n.useEffect)((function(){a(G),H(C(G,[0,v],[0,-w])+"px"),Y(C(G,[0,v],[0,-D])+"px"),E(C(G,[0,v],[0,-L])+"px"),B(C(G,[0,v],[0,-S])+"px"),O(C(G,[0,v],[0,-v/3.5])+"px"),p(C(G,[0,v],[0,-v/5])+"px"),N(C(G,[0,v],[0,-v/6.5])+"px")}),[G]),Object(n.useEffect)((function(){null!==Z.current&&Z.current.addEventListener("wheel",(function(t){Q((function(e){return Math.max(Math.min(e+t.deltaY,v),0)})),t.preventDefault()}))}),[Z,Q]),Object(l.jsxs)(s.a.div,{id:"container",ref:Z,children:[Object(l.jsx)(s.a.div,{className:"background",animate:{x:-c}}),Object(l.jsxs)("div",{className:"sky",style:{background:U.sky},children:[Object(l.jsx)("div",{className:"sun"}),Object(l.jsx)("div",{className:"sun-light"}),Object(l.jsx)(s.a.div,{className:"stars light",animate:{x:z},children:$(10).map((function(){return Object(l.jsx)(j,{type:"light"})}))}),Object(l.jsx)(s.a.div,{className:"stars dark",animate:{x:V},children:$(20).map((function(){return Object(l.jsx)(j,{type:"dark"})}))}),Object(l.jsx)(s.a.div,{className:"lines light",animate:{x:W},children:$(5).map((function(){return Object(l.jsx)(d,{type:"light"})}))}),Object(l.jsx)(s.a.div,{className:"lines dark",animate:{x:A},children:$(8).map((function(){return Object(l.jsx)(d,{type:"dark"})}))}),Object(l.jsxs)(s.a.div,{className:"clouds white",animate:{x:u},children:[Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"}),Object(l.jsx)(h,{type:"white"})]}),Object(l.jsxs)(s.a.div,{className:"clouds pink",animate:{x:g},children:[Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"}),Object(l.jsx)(h,{type:"pink"})]}),Object(l.jsxs)(s.a.div,{className:"clouds ivory",animate:{x:M},children:[Object(l.jsx)(h,{type:"ivory"}),Object(l.jsx)(h,{type:"ivory"}),Object(l.jsx)(h,{type:"ivory"}),Object(l.jsx)(h,{type:"ivory"})]})]}),Object(l.jsx)(s.a.div,{className:"ground",style:{background:U.ground},animate:{x:-c},children:Object(l.jsxs)("div",{className:"seas",children:[Object(l.jsx)(b,{left:150,duration:4}),Object(l.jsx)(b,{left:100,duration:5.5}),Object(l.jsx)(b,{left:100,duration:5}),Object(l.jsx)(b,{left:180,duration:4.5})]})})]})},x=(c(42),function(t){var e=t.children,c=t.onClick;return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){console.log("asdf"),c()},children:e})})}),k=function(){var t=Object(n.useContext)(f),e=t.scrollX,c=t.setScrollX,a=Object(n.useState)(0),i=Object(o.a)(a,2),r=i[0],j=i[1],u=Object(n.useState)(7.4),d=Object(o.a)(u,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){var t=[0,1*m,2*m,3*m,4*m,v],c=[0,v];j("calc(".concat(C(e,t,[0,16,36,60.5,80.7,100]),"% - ").concat(C(e,c,[0,7.4]),"em)")),h(C(e,t,[6.4,7.4,9.8,7.4,7.4,7.4])+"em")}),[e]),Object(l.jsx)("div",{id:"home-ui",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(x,{onClick:function(){c(0)},children:"Home"}),Object(l.jsx)(x,{onClick:function(){c(1*m)},children:"Activitys"}),Object(l.jsx)(x,{onClick:function(){c(2*m)},children:"Visitor's Book"}),Object(l.jsx)(x,{onClick:function(){c(3*m)},children:"PentaKill"}),Object(l.jsx)(x,{onClick:function(){c(4*m)},children:"Christmas"}),Object(l.jsx)(x,{onClick:function(){c(v)},children:"Contact"}),Object(l.jsx)(s.a.div,{className:"indicator",animate:{left:r,width:b}})]})})},g=[{sky:[255,134,177,254,254,226],ground:[196,56,93],starLight:[255,183,232],starDark:[255,203,177],lineLight:[252,191,172,252,191,172],lineDark:[255,123,160,255,123,160],cloudWhite:[254,255,236,253,254,220],cloudPink:[255,147,171,255,188,173],cloudIvory:[253,203,171,254,210,183]},{sky:[75,134,180,203,233,255],ground:[42,77,105],starLight:[173,203,227],starDark:[99,172,229],lineLight:[99,172,229,99,172,229],lineDark:[42,77,105,42,77,105],cloudWhite:[231,239,246,231,239,246],cloudPink:[75,134,180,163,193,217],cloudIvory:[183,213,237,163,193,217]},{sky:[108,91,123,255,134,148],ground:[53,92,125],starLight:[246,114,128],starDark:[192,108,132],lineLight:[192,108,132,192,108,132],lineDark:[53,92,125,53,92,125],cloudWhite:[231,239,246,231,239,246],cloudPink:[108,91,123,226,94,108],cloudIvory:[226,94,108,226,94,108]},{sky:[84,121,128,177,244,193],ground:[89,79,79],starLight:[157,224,173],starDark:[69,173,168],lineLight:[69,173,168,69,173,168],lineDark:[89,79,79,89,79,79],cloudWhite:[229,252,194,229,252,194],cloudPink:[84,121,128,137,204,153],cloudIvory:[137,204,153,137,204,153]},{sky:[57,37,21,122,88,47],ground:[221,215,206],starLight:[210,210,210],starDark:[220,220,220],lineLight:[230,230,230,230,230,230],lineDark:[214,165,91,214,165,91],cloudWhite:[22,91,51,20,107,58],cloudPink:[136,43,34,182,64,64],cloudIvory:[214,165,91,197,183,123]},{sky:[150,150,150,226,226,226],ground:[120,120,120],starLight:[221,221,221],starDark:[204,204,204],lineLight:[204,204,204,204,204,204],lineDark:[120,120,120,120,120,120],cloudWhite:[238,238,238,238,238,238],cloudPink:[150,150,150,216,216,216],cloudIvory:[206,206,206,206,206,206]}],p=function(t){var e={};return e.sky="linear-gradient(to bottom, rgb(".concat(t.sky[0],", ").concat(t.sky[1],", ").concat(t.sky[2],") 35%, rgb(").concat(t.sky[3],", ").concat(t.sky[4],", ").concat(t.sky[5],") 60%)"),e.ground="rgb(".concat(t.ground[0],", ").concat(t.ground[1],", ").concat(t.ground[2],")"),e.starLight="rgb(".concat(t.starLight[0],", ").concat(t.starLight[1],", ").concat(t.starLight[2],")"),e.starDark="rgb(".concat(t.starDark[0],", ").concat(t.starDark[1],", ").concat(t.starDark[2],")"),e.lineLight="linear-gradient(90deg, transparent 0.1%, rgb(".concat(t.lineLight[0],", ").concat(t.lineLight[1],", ").concat(t.lineLight[2],") 3%, rgb(").concat(t.lineLight[3],", ").concat(t.lineLight[4],", ").concat(t.lineLight[5],") 97%, transparent 99.9%)"),e.lineDark="linear-gradient(90deg, transparent 0.1%, rgb(".concat(t.lineDark[0],", ").concat(t.lineDark[1],", ").concat(t.lineDark[2],") 3%, rgb(").concat(t.lineDark[3],", ").concat(t.lineDark[4],", ").concat(t.lineDark[5],") 97%, transparent 99.9%)"),e.cloudWhite="linear-gradient(rgb(".concat(t.cloudWhite[0],", ").concat(t.cloudWhite[1],", ").concat(t.cloudWhite[2],"), rgb(").concat(t.cloudWhite[3],", ").concat(t.cloudWhite[4],", ").concat(t.cloudWhite[5],") 50%)"),e.cloudPink="linear-gradient(rgb(".concat(t.cloudPink[0],", ").concat(t.cloudPink[1],", ").concat(t.cloudPink[2],"), rgb(").concat(t.cloudPink[3],", ").concat(t.cloudPink[4],", ").concat(t.cloudPink[5],") 50%)"),e.cloudIvory="linear-gradient(rgb(".concat(t.cloudIvory[0],", ").concat(t.cloudIvory[1],", ").concat(t.cloudIvory[2],"), rgb(").concat(t.cloudIvory[3],", ").concat(t.cloudIvory[4],", ").concat(t.cloudIvory[5],") 50%)"),e},f=(c(43),Object(n.createContext)()),y=6,m=window.innerWidth,v=m*(y-1),w=v/14,D=v/10,L=v/12,S=v/8,C=function(t,e,c){var n=0,a=!1;return e.map((function(i,r){var o=e[r],s=e[r-1],l=c[r],j=c[r-1];return t<=i&&!a&&(n=0===r?c[0]:(s*l-t*l+t*j-o*j)/(s-o),a=!0),a})),n},M=function(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(p(g[0])),r=Object(o.a)(i,2),s=r[0],j=r[1];return Object(n.useEffect)((function(){j(function(t){var e=Math.floor(t/m),c=t%m,n={};if(0===c)return p(g[e]);if(e===y-1)return p(g[y-1]);for(var a=function(){var t=Object(o.a)(r[i],2),a=t[0],s=t[1].map((function(t,n){return Math.floor(C(c,[0,m],[t,g[e+1][a][n]]))}));n[a]=s},i=0,r=Object.entries(g[e]);i<r.length;i++)a();return p(n)}(c))}),[c]),Object(l.jsx)("div",{id:"home",children:Object(l.jsxs)(f.Provider,{value:{scrollX:c,setScrollX:a,themeColors:s},children:[Object(l.jsx)(O,{}),Object(l.jsx)(k,{})]})})};var N=function(){return Object(l.jsx)("div",{id:"app",children:Object(l.jsx)(M,{})})},I=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),I()}},[[45,1,2]]]);
//# sourceMappingURL=main.07534ff4.chunk.js.map