(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",i="navigate",l="restore",u="server-patch",a="prefetch",s="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=r(3935),u=n._(r(2636)),a=r(5471),s=r(3735),f=r(3341);r(4210);let c=r(9955),d=n._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function m(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:u,decoding:a,className:s,style:f,fetchPriority:c,placeholder:d,loading:p,unoptimized:h,fill:v,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:C,onLoad:w,onError:E,...P}=e;return i.default.createElement("img",{...P,...m(c),loading:p,width:u,height:l,decoding:a,"data-nimg":v?"fill":"1",className:s,style:f,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,d,b,y,_,h))},[r,d,b,y,_,E,h,t]),onLoad:e=>{let t=e.currentTarget;g(t,d,b,y,_,h)},onError:e=>{C(!0),"empty"!==d&&_(!0),E&&E(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.preload?((0,l.preload)(r.src,n),null):i.default.createElement(u.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let b=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(c.RouterContext),n=(0,i.useContext)(f.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:u}=e,g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let m=(0,i.useRef)(u);(0,i.useEffect)(()=>{m.current=u},[u]);let[b,y]=(0,i.useState)(!1),[_,C]=(0,i.useState)(!1),{props:w,meta:E}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:b,showAltText:_});return i.default.createElement(i.default.Fragment,null,i.default.createElement(h,{...w,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:C,ref:t}),E.priority?i.default.createElement(v,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),i=r(4532),l=r(3353),u=r(1410),a=r(9064),s=r(370),f=r(9955),c=r(4224),d=r(508),p=r(1516),g=r(4266),m=r(3991),h=new Set;function v(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:h,children:y,prefetch:_=null,passHref:C,replace:w,shallow:E,scroll:P,locale:O,onClick:S,onMouseEnter:j,onTouchStart:R,legacyBehavior:M=!1,...x}=e;r=y,M&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=o.default.useContext(f.RouterContext),k=o.default.useContext(c.AppRouterContext),z=null!=I?I:k,A=!I,T=!1!==_,L=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:N,as:D}=o.default.useMemo(()=>{if(!I){let e=b(u);return{href:e,as:h?b(h):e}}let[e,t]=(0,i.resolveHref)(I,u,!0);return{href:e,as:h?(0,i.resolveHref)(I,h):t||e}},[I,u,h]),U=o.default.useRef(N),F=o.default.useRef(D);M&&(n=o.default.Children.only(r));let B=M?n&&"object"==typeof n&&n.ref:t,[G,H,K]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(F.current!==D||U.current!==N)&&(K(),F.current=D,U.current=N),G(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,N,K,G]);o.default.useEffect(()=>{z&&H&&T&&v(z,N,D,{locale:O},{kind:L},A)},[D,N,H,O,T,null==I?void 0:I.locale,z,A,L]);let W={ref:V,onClick(e){M||"function"!=typeof S||S(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,n,i,u,a,s,f,c){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let g=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!c,scroll:e})};f?o.default.startTransition(g):g()}(e,z,N,D,w,E,P,O,A,T)},onMouseEnter(e){M||"function"!=typeof j||j(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&(T||!A)&&v(z,N,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},A)},onTouchStart(e){M||"function"!=typeof R||R(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&(T||!A)&&v(z,N,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},A)}};if((0,a.isAbsoluteUrl)(D))W.href=D;else if(!M||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(D,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);W.href=t||(0,g.addBasePath)((0,s.addLocale)(D,e,null==I?void 0:I.defaultLocale))}return M?o.default.cloneElement(n,W):o.default.createElement("a",{...x,...W},r)}),_=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]);let g=(0,n.useCallback)(()=>{c(!1)},[]);return[p,f,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(4210);let n=r(7757),o=r(3735);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:g,className:m,quality:h,width:v,height:b,fill:y=!1,style:_,onLoad:C,onLoadingComplete:w,placeholder:E="empty",blurDataURL:P,fetchPriority:O,layout:S,objectFit:j,objectPosition:R,lazyBoundary:M,lazyRoot:x,...I}=e,{imgConf:k,showAltText:z,blurComplete:A,defaultLoader:T}=t,L=k||o.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}let N=I.loader||T;delete I.loader,delete I.srcSet;let D="__next_img_default"in N;if(D){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!c&&(c=t)}let U="",F=l(v),B=l(b);if("object"==typeof(r=f)&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,P=P||e.blurDataURL,U=e.src,!y){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let G=!p&&("lazy"===g||void 0===g);(!(f="string"==typeof f?f:U)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,G=!1),u.unoptimized&&(d=!0),D&&f.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(O="high");let H=l(h),K=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:R}:{},z?{}:{color:"transparent"},_),V=A||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:a,blurHeight:s,blurDataURL:P||"",objectFit:K.objectFit})+'")':'url("'+E+'")',W=V?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),f=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[f]})}}({config:u,src:f,unoptimized:d,width:F,quality:H,sizes:c,loader:N}),Y={...I,loading:G?"lazy":g,fetchPriority:O,width:F,height:B,decoding:"async",className:m,style:{...K,...W},sizes:q.sizes,srcSet:q.srcSet,src:q.src},J={unoptimized:d,priority:p,placeholder:E,fill:y};return{props:Y,meta:J}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return a}});let n=r(8754),o=r(5471),i=r(4210),l=r(8872),u=n._(r(7746)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=l.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(2555)},1664:function(e,t,r){e.exports=r(5569)}}]);