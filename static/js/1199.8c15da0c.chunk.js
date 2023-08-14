"use strict";(self.webpackChunkSmart_Contract_Reader_for_Ethereum=self.webpackChunkSmart_Contract_Reader_for_Ethereum||[]).push([[1199],{9386:function(e,t,n){n.d(t,{t0:function(){return A},zv:function(){return W},uA:function(){return O},uc:function(){return J},jb:function(){return F},zb:function(){return j},AV:function(){return C},Ic:function(){return te},Vs:function(){return re}});var r=n(93433),o=n(37762),a=n(74165),i=n(15861),s=n(29439),c=(Symbol(),Symbol()),u=Object.getPrototypeOf,l=new WeakMap,f=function(e){return e&&(l.has(e)?l.get(e):u(e)===Object.prototype||u(e)===Array.prototype)},d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.set(e,t)},p=function(e){return"object"===typeof e&&null!==e},v=new WeakMap,h=new WeakSet,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return p(e)&&!h.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=a.get(e);if((null==r?void 0:r[0])===t)return r[1];var c=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return d(c,!0),a.set(e,[t,c]),Reflect.ownKeys(e).forEach((function(t){if(!Object.getOwnPropertyDescriptor(c,t)){var r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(h.has(r))d(r,!1);else if(r instanceof Promise)delete o.value,o.get=function(){return n(r)};else if(v.has(r)){var a=v.get(r),u=(0,s.Z)(a,2),l=u[0],f=u[1];o.value=i(l,f(),n)}Object.defineProperty(c,t,o)}})),Object.preventExtensions(c)},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],m=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(o){if(!p(o))throw new Error("object required");var a=u.get(o);if(a)return a;var d=l[0],b=new Set,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++l[0];d!==t&&(d=t,b.forEach((function(n){return n(e,t)})))},w=l[1],y=function(e){return function(t,n){var o=(0,r.Z)(t);o[1]=[e].concat((0,r.Z)(o[1])),g(o,n)}},I=new Map,C=function(e){var t,n=I.get(e);n&&(I.delete(e),null==(t=n[1])||t.call(n))},W=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),E={deleteProperty:function(e,t){var n=Reflect.get(e,t);C(t);var r=Reflect.deleteProperty(e,t);return r&&g(["delete",[t],n]),r},set:function(t,r,o,a){var i=Reflect.has(t,r),s=Reflect.get(t,r,a);if(i&&(e(s,o)||u.has(o)&&e(s,u.get(o))))return!0;C(r),p(o)&&(o=function(e){return f(e)&&e[c]||null}(o)||o);var l=o;if(o instanceof Promise)o.then((function(e){o.status="fulfilled",o.value=e,g(["resolve",[r],e])})).catch((function(e){o.status="rejected",o.reason=e,g(["reject",[r],e])}));else{!v.has(o)&&n(o)&&(l=m(o));var d=!h.has(l)&&v.get(l);d&&function(e,t){if(I.has(e))throw new Error("prop listener already exists");if(b.size){var n=t[3](y(e));I.set(e,[t,n])}else I.set(e,[t])}(r,d)}return Reflect.set(t,r,l,a),g(["set",[r],o,s]),!0}},O=t(W,E);u.set(o,O);var k=[W,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++l[1];return w===e||b.size||(w=e,I.forEach((function(t){var n=(0,s.Z)(t,1)[0][1](e);n>d&&(d=n)}))),d},i,function(e){b.add(e),1===b.size&&I.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var o=r[3](y(t));I.set(t,[r,o])}));return function(){b.delete(e),0===b.size&&I.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0],o=n[1];o&&(o(),I.set(t,[r]))}))}}];return v.set(O,k),Reflect.ownKeys(o).forEach((function(e){var t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(O[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(W,e,t)})),O};return[m,v,h,e,t,n,o,a,i,u,l]},b=m(),g=(0,s.Z)(b,1)[0];function w(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function y(e,t,n){var r,o=v.get(e);o||console.warn("Please use proxy object");var a=[],i=o[3],s=!1,c=i((function(e){a.push(e),n?t(a.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(a.splice(0))})))}));return s=!0,function(){s=!1,c()}}var I=w({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),C={state:I,subscribe:function(e){return y(I,(function(){return e(I)}))},push:function(e,t){e!==I.view&&(I.view=e,t&&(I.data=t),I.history.push(e))},reset:function(e){I.view=e,I.history=[e]},replace:function(e){I.history.length>1&&(I.history[I.history.length-1]=e,I.view=e)},goBack:function(){if(I.history.length>1){I.history.pop();var e=I.history.slice(-1),t=(0,s.Z)(e,1)[0];I.view=t}},setData:function(e){I.data=e}},W={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return W.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return W.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(W.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!W.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},wait:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){try{localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(n){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink:function(e){try{var t=e.split("?"),n=(0,s.Z)(t,1)[0];localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))}catch(r){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink:function(){try{localStorage.removeItem(W.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage:function(){try{typeof localStorage<"u"&&localStorage.setItem(W.WCM_VERSION,"2.6.0")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData:function(){var e,t=null==(e=C.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},E=w({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),O={state:E,subscribe:function(e){return y(E.events,(function(){return e(function(e,t){var n=v.get(e);n||console.warn("Please use proxy object");var r=(0,s.Z)(n,3),o=r[0],a=r[1];return(0,r[2])(o,a(),t)}(E.events[E.events.length-1]))}))},initialize:function(){E.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(E.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){E.connectedWalletId=e},click:function(e){if(E.enabled){var t={type:"CLICK",name:e.name,userSessionId:E.userSessionId,timestamp:Date.now(),data:e};E.events.push(t)}},track:function(e){if(E.enabled){var t={type:"TRACK",name:e.name,userSessionId:E.userSessionId,timestamp:Date.now(),data:e};E.events.push(t)}},view:function(e){if(E.enabled){var t={type:"VIEW",name:e.name,userSessionId:E.userSessionId,timestamp:Date.now(),data:e};E.events.push(t)}}},k=w({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),j={state:k,subscribe:function(e){return y(k,(function(){return e(k)}))},setChains:function(e){k.chains=e},setWalletConnectUri:function(e){k.walletConnectUri=e},setIsCustomDesktop:function(e){k.isCustomDesktop=e},setIsCustomMobile:function(e){k.isCustomMobile=e},setIsDataLoaded:function(e){k.isDataLoaded=e},setIsUiLoaded:function(e){k.isUiLoaded=e},setIsAuth:function(e){k.isAuth=e}},x=w({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),A={state:x,subscribe:function(e){return y(x,(function(){return e(x)}))},setConfig:function(e){var t,n;O.initialize(),j.setChains(e.chains),j.setIsAuth(Boolean(e.enableAuthMode)),j.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),j.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),W.setModalVersionInStorage(),Object.assign(x,e)}},L="https://explorer-api.walletconnect.com";function Z(e,t){return M.apply(this,arguments)}function M(){return M=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(t,L)).searchParams.append("projectId",A.state.projectId),Object.entries(n).forEach((function(e){var t=(0,s.Z)(e,2),n=t[0],o=t[1];o&&r.searchParams.append(n,String(o))})),e.next=5,fetch(r);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}var U=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Z("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},P=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Z("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},S=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Z("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},D=function(e){return"".concat(L,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(A.state.projectId)},N=function(e){return"".concat(L,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(A.state.projectId)},_=Object.defineProperty,R=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,z=function(e,t,n){return t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},B=function(e,t){for(var n in t||(t={}))T.call(t,n)&&z(e,n,t[n]);if(R){var r,a=(0,o.Z)(R(t));try{for(a.s();!(r=a.n()).done;){n=r.value;V.call(t,n)&&z(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},H=W.isMobile(),K=w({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),J={state:K,getRecomendedWallets:function(){return(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,o,i,s,c,u,l,f,d,p,v,h,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=A.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",K.recomendedWallets);case 3:if(!W.isArray(n)){e.next=13;break}return o={recommendedIds:n.join(",")},e.next=7,S(o);case 7:i=e.sent,s=i.listings,(c=Object.values(s)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),K.recomendedWallets=c,e.next=31;break;case 13:if(u=j.state,l=u.chains,f=u.isAuth,d=null===l||void 0===l?void 0:l.join(","),p=W.isArray(r),v={page:1,sdks:f?"auth_v1":void 0,entries:W.RECOMMENDED_WALLET_AMOUNT,chains:d,version:2,excludedIds:p?r.join(","):void 0},!H){e.next=25;break}return e.next=22,P(v);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,U(v);case 27:e.t0=e.sent;case 28:h=e.t0,m=h.listings,K.recomendedWallets=Object.values(m);case 31:return e.abrupt("return",K.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){var n,o,i,s,c,u,l,f,d,p,v,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=B({},e),o=A.state,i=o.explorerRecommendedWalletIds,s=o.explorerExcludedWalletIds,c=K.recomendedWallets,"ALL"!==s){t.next=3;break}return t.abrupt("return",K.wallets);case 3:if(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):W.isArray(i)&&(n.excludedIds=i.join(",")),W.isArray(s)&&(n.excludedIds=[n.excludedIds,s].filter(Boolean).join(",")),j.state.isAuth&&(n.sdks="auth_v1"),u=e.page,l=e.search,!H){t.next=12;break}return t.next=9,P(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,U(n);case 14:t.t0=t.sent;case 15:return f=t.t0,d=f.listings,p=f.total,v=Object.values(d),h=l?"search":"wallets",t.abrupt("return",(K[h]={listings:[].concat((0,r.Z)(K[h].listings),v),total:p,page:null!==u&&void 0!==u?u:1},{listings:v,total:p}));case 21:case"end":return t.stop()}}),t)})))()},getWalletImageUrl:function(e){return D(e)},getAssetImageUrl:function(e){return N(e)},resetSearch:function(){K.search={listings:[],total:0,page:1}}},q=w({open:!1}),F={state:q,subscribe:function(e){return y(q,(function(){return e(q)}))},open:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=j.state,r=n.isUiLoaded,o=n.isDataLoaded;if(j.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),j.setChains(null===e||void 0===e?void 0:e.chains),C.reset("ConnectWallet"),r&&o)q.open=!0,t();else var a=setInterval((function(){var e=j.state;e.isUiLoaded&&e.isDataLoaded&&(clearInterval(a),q.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){q.open=!1}},G=Object.defineProperty,Q=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,$=function(e,t,n){return t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var ee=w({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),te={state:ee,subscribe:function(e){return y(ee,(function(){return e(ee)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(ee.themeMode=t),n&&(ee.themeVariables=function(e,t){for(var n in t||(t={}))X.call(t,n)&&$(e,n,t[n]);if(Q){var r,a=(0,o.Z)(Q(t));try{for(a.s();!(r=a.n()).done;)n=r.value,Y.call(t,n)&&$(e,n,t[n])}catch(i){a.e(i)}finally{a.f()}}return e}({},n))}},ne=w({open:!1,message:"",variant:"success"}),re={state:ne,subscribe:function(e){return y(ne,(function(){return e(ne)}))},openToast:function(e,t){ne.open=!0,ne.message=e,ne.variant=t},closeToast:function(){ne.open=!1}}},41199:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return c}});var r=n(74165),o=n(15861),a=n(15671),i=n(43144),s=n(9386),c=function(){function e(t){(0,a.Z)(this,e),this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.Ic.setThemeConfig,s.Ic.setThemeConfig(t),s.t0.setConfig(t),this.initUi()}return(0,i.Z)(e,[{key:"initUi",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,Promise.all([n.e(7365),n.e(4177)]).then(n.bind(n,44177));case 3:t=document.createElement("wcm-modal"),document.body.insertAdjacentElement("beforeend",t),s.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()}}]);