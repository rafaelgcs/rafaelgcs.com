(this["webpackJsonprafaelgcs.com"]=this["webpackJsonprafaelgcs.com"]||[]).push([[15],{502:function(e,t,r){"use strict";var n=r(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(22)),i=r(0),c=(0,a.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"}),"ArrowForwardTwoTone");t.default=c},554:function(e,t,r){"use strict";var n=r(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(22)),i=r(0),c=(0,a.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=c},632:function(e,t,r){"use strict";var n=r(3),a=r(2),i=r(1),c=r(8),o=r(226),s=r(11),u=r(5),l=r(98),d=r(123);function f(e){return Object(l.a)("MuiCardMedia",e)}Object(d.a)("MuiCardMedia",["root","media","img"]);var p=r(0),v=["children","className","component","image","src","style"],b=Object(u.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,n=r.isMediaComponent,a=r.isImageComponent;return[t.root,n&&t.media,a&&t.img]}})((function(e){var t=e.ownerState;return Object(a.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),h=["video","audio","picture","iframe","img"],m=["picture","img"],g=i.forwardRef((function(e,t){var r=Object(s.a)({props:e,name:"MuiCardMedia"}),i=r.children,u=r.className,l=r.component,d=void 0===l?"div":l,g=r.image,j=r.src,O=r.style,w=Object(n.a)(r,v),y=-1!==h.indexOf(d),M=!y&&g?Object(a.a)({backgroundImage:'url("'.concat(g,'")')},O):O,T=Object(a.a)({},r,{component:d,isMediaComponent:y,isImageComponent:-1!==m.indexOf(d)}),P=function(e){var t=e.classes,r={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(o.a)(r,f,t)}(T);return Object(p.jsx)(b,Object(a.a)({className:Object(c.a)(P.root,u),as:d,role:!y&&g?"image":void 0,ref:t,style:M,ownerState:T,src:y?g||j:void 0},w,{children:i}))}));t.a=g},674:function(e,t,r){"use strict";var n=r(15),a=r(2),i=r(3),c=r(1),o=r(378),s=r(96),u=r(0);var l=function(e){var t=e.children,r=e.defer,a=void 0!==r&&r,i=e.fallback,o=void 0===i?null:i,l=c.useState(!1),d=Object(n.a)(l,2),f=d[0],p=d[1];return Object(s.a)((function(){a||p(!0)}),[a]),c.useEffect((function(){a&&p(!0)}),[a]),Object(u.jsx)(c.Fragment,{children:f?t:o})},d=r(393),f=r(38),p=r(41),v=r(54),b=r(27),h=r(28),m=r(23),g=r(34),j=r(6),O=r(8),w=r(5),y=r(9),M=["anchor","classes","className","width","style"],T=Object(w.a)("div",{skipSx:!0})((function(e){var t=e.theme,r=e.ownerState;return Object(a.a)({position:"fixed",top:0,left:0,bottom:0,zIndex:t.zIndex.drawer-1},"left"===r.anchor&&{right:"auto"},"right"===r.anchor&&{left:"auto",right:0},"top"===r.anchor&&{bottom:"auto",right:0},"bottom"===r.anchor&&{top:"auto",bottom:0,right:0})})),P=c.forwardRef((function(e,t){var r=e.anchor,n=e.classes,c=void 0===n?{}:n,o=e.className,s=e.width,l=e.style,f=Object(i.a)(e,M),p=e;return Object(u.jsx)(T,Object(a.a)({className:Object(O.a)("PrivateSwipeArea-root",c.root,c["anchor".concat(Object(y.a)(r))],o),ref:t,style:Object(a.a)(Object(j.a)({},Object(d.c)(r)?"width":"height",s),l),ownerState:p},f))})),S=["BackdropProps"],x=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],k=null;function C(e,t,r){return"right"===e?r.body.offsetWidth-t[0].pageX:t[0].pageX}function H(e,t,r){return"bottom"===e?r.innerHeight-t[0].clientY:t[0].clientY}function E(e,t){return e?t.clientWidth:t.clientHeight}function R(e,t,r,n){return Math.min(Math.max(r?t-e:n+t-e,0),n)}var X="undefined"!==typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),Y={enter:h.b.enteringScreen,exit:h.b.leavingScreen},L=c.forwardRef((function(e,t){var r=Object(o.a)({name:"MuiSwipeableDrawer",props:e}),s=Object(m.a)(),h=r.anchor,j=void 0===h?"left":h,O=r.disableBackdropTransition,w=void 0!==O&&O,y=r.disableDiscovery,M=void 0!==y&&y,T=r.disableSwipeToOpen,L=void 0===T?X:T,W=r.hideBackdrop,B=r.hysteresis,D=void 0===B?.52:B,z=r.minFlingVelocity,A=void 0===z?450:z,I=r.ModalProps,F=(I=void 0===I?{}:I).BackdropProps,N=r.onClose,V=r.onOpen,_=r.open,J=r.PaperProps,q=void 0===J?{}:J,G=r.SwipeAreaProps,K=r.swipeAreaWidth,Q=void 0===K?20:K,U=r.transitionDuration,Z=void 0===U?Y:U,$=r.variant,ee=void 0===$?"temporary":$,te=Object(i.a)(r.ModalProps,S),re=Object(i.a)(r,x),ne=c.useState(!1),ae=Object(n.a)(ne,2),ie=ae[0],ce=ae[1],oe=c.useRef({isSwiping:null}),se=c.useRef(),ue=c.useRef(),le=c.useRef(),de=c.useRef(!1),fe=c.useRef();Object(b.a)((function(){fe.current=null}),[_]);var pe=c.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.mode,n=void 0===r?null:r,a=t.changeTransition,i=void 0===a||a,c=Object(d.b)(s,j),o=-1!==["right","bottom"].indexOf(c)?1:-1,u=Object(d.c)(j),l=u?"translate(".concat(o*e,"px, 0)"):"translate(0, ".concat(o*e,"px)"),f=le.current.style;f.webkitTransform=l,f.transform=l;var p="";if(n&&(p=s.transitions.create("all",Object(g.a)({easing:void 0,style:void 0,timeout:Z},{mode:n}))),i&&(f.webkitTransition=p,f.transition=p),!w&&!W){var v=ue.current.style;v.opacity=1-e/E(u,le.current),i&&(v.webkitTransition=p,v.transition=p)}}),[j,w,W,s,Z]),ve=Object(v.a)((function(e){if(de.current)if(k=null,de.current=!1,ce(!1),oe.current.isSwiping){oe.current.isSwiping=null;var t,r=Object(d.b)(s,j),n=Object(d.c)(j);t=n?C(r,e.changedTouches,Object(f.a)(e.currentTarget)):H(r,e.changedTouches,Object(p.a)(e.currentTarget));var a=n?oe.current.startX:oe.current.startY,i=E(n,le.current),c=R(t,a,_,i),o=c/i;Math.abs(oe.current.velocity)>A&&(fe.current=1e3*Math.abs((i-c)/oe.current.velocity)),_?oe.current.velocity>A||o>D?N():pe(0,{mode:"exit"}):oe.current.velocity<-A||1-o>D?V():pe(E(n,le.current),{mode:"enter"})}else oe.current.isSwiping=null})),be=Object(v.a)((function(e){if(le.current&&de.current&&(null===k||k===oe.current)){var t=Object(d.b)(s,j),r=Object(d.c)(j),n=C(t,e.touches,Object(f.a)(e.currentTarget)),a=H(t,e.touches,Object(p.a)(e.currentTarget));if(_&&le.current.contains(e.target)&&null===k){var i=function(e){var t=e.domTreeShapes,r=e.start,n=e.current,a=e.anchor,i={x:"scrollLeft",y:"scrollTop"},c={x:"scrollWidth",y:"scrollHeight"},o={x:"clientWidth",y:"clientHeight"};return t.some((function(e){var t=n>=r;"top"!==a&&"left"!==a||(t=!t);var s="left"===a||"right"===a?"x":"y",u=Math.round(e[i[s]]),l=u>0,d=u+e[o[s]]<e[c[s]];return!!(t&&d||!t&&l)}))}({domTreeShapes:function(e,t){for(var r=[];e&&e!==t.parentElement;){var n=Object(p.a)(t).getComputedStyle(e);"absolute"===n.getPropertyValue("position")||"hidden"===n.getPropertyValue("overflow-x")||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push(e),e=e.parentElement}return r}(e.target,le.current),start:r?oe.current.startX:oe.current.startY,current:r?n:a,anchor:j});if(i)return void(k=!0);k=oe.current}if(null==oe.current.isSwiping){var c=Math.abs(n-oe.current.startX),o=Math.abs(a-oe.current.startY),u=r?c>o&&c>3:o>c&&o>3;if(u&&e.cancelable&&e.preventDefault(),!0===u||(r?o>3:c>3)){if(oe.current.isSwiping=u,!u)return void ve(e);oe.current.startX=n,oe.current.startY=a,M||_||(r?oe.current.startX-=20:oe.current.startY-=20)}}if(oe.current.isSwiping){var l=E(r,le.current),v=r?oe.current.startX:oe.current.startY;_&&!oe.current.paperHit&&(v=Math.min(v,l));var b=R(r?n:a,v,_,l);if(_)if(oe.current.paperHit)0===b&&(oe.current.startX=n,oe.current.startY=a);else{if(!(r?n<l:a<l))return;oe.current.paperHit=!0,oe.current.startX=n,oe.current.startY=a}null===oe.current.lastTranslate&&(oe.current.lastTranslate=b,oe.current.lastTime=performance.now()+1);var h=(b-oe.current.lastTranslate)/(performance.now()-oe.current.lastTime)*1e3;oe.current.velocity=.4*oe.current.velocity+.6*h,oe.current.lastTranslate=b,oe.current.lastTime=performance.now(),e.cancelable&&e.preventDefault(),pe(b)}}})),he=Object(v.a)((function(e){if(!e.defaultPrevented&&!e.defaultMuiPrevented&&(!_||!W&&ue.current.contains(e.target)||le.current.contains(e.target))){var t=Object(d.b)(s,j),r=Object(d.c)(j),n=C(t,e.touches,Object(f.a)(e.currentTarget)),a=H(t,e.touches,Object(p.a)(e.currentTarget));if(!_){if(L||e.target!==se.current)return;if(r){if(n>Q)return}else if(a>Q)return}e.defaultMuiPrevented=!0,k=null,oe.current.startX=n,oe.current.startY=a,ce(!0),!_&&le.current&&pe(E(r,le.current)+(M?15:-20),{changeTransition:!1}),oe.current.velocity=0,oe.current.lastTime=null,oe.current.lastTranslate=null,oe.current.paperHit=!1,de.current=!0}}));return c.useEffect((function(){if("temporary"===ee){var e=Object(f.a)(le.current);return e.addEventListener("touchstart",he),e.addEventListener("touchmove",be,{passive:!_}),e.addEventListener("touchend",ve),function(){e.removeEventListener("touchstart",he),e.removeEventListener("touchmove",be,{passive:!_}),e.removeEventListener("touchend",ve)}}}),[ee,_,he,be,ve]),c.useEffect((function(){return function(){k===oe.current&&(k=null)}}),[]),c.useEffect((function(){_||ce(!1)}),[_]),Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(d.a,Object(a.a)({open:!("temporary"!==ee||!ie)||_,variant:ee,ModalProps:Object(a.a)({BackdropProps:Object(a.a)({},F,{ref:ue})},te),hideBackdrop:W,PaperProps:Object(a.a)({},q,{style:Object(a.a)({pointerEvents:"temporary"!==ee||_?"":"none"},q.style),ref:le}),anchor:j,transitionDuration:fe.current||Z,onClose:N,ref:t},re)),!L&&"temporary"===ee&&Object(u.jsx)(l,{children:Object(u.jsx)(P,Object(a.a)({anchor:j,ref:se,width:Q},G))})]})}));t.a=L}}]);
//# sourceMappingURL=15.e918ba69.chunk.js.map