(self.webpackChunkSmart_Contract_Reader_for_Ethereum=self.webpackChunkSmart_Contract_Reader_for_Ethereum||[]).push([[8971],{70503:function(e,t,n){var r=n(56690).default,i=n(89728).default,o=n(61655).default,s=n(26389).default,c=n(68041),a=!1,u=function(e){"use strict";o(n,e);var t=s(n);function n(e,i,o){var s;return r(this,n),(s=t.call(this)).targets=i,s.options=o,s.connections=e,s.connected=!1,s.status="loading",s.interval=o.interval||5e3,s.name=o.name||"default",s.inSetup=!0,s.connect(),s}return i(n,[{key:"connect",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.connection&&"connected"===this.connection.status&&t>=this.connection.index)a;else if(0===this.targets.length)a;else{var n=this.targets[t],r=n.protocol,i=n.location;this.connection=this.connections[r](i,this.options);var o=function(n){return e.connectionError(t,n)};this.connection.once("error",o),this.connection.on("connect",(function(){e.connection.off("error",o),e.connection.once("error",(function(t){return e.onError(t)})),e.connection.once("close",(function(){e.connected=!1,e.emitClose(),e.closing||e.refresh()})),e.connection.target=e.targets[t],e.connection.index=t,e.targets[t].status=e.connection.status,e.connected=!0,e.inSetup=!1,e.emit("connect")})),this.connection.on("data",(function(t){return e.emit("data",t)})),this.connection.on("payload",(function(t){return e.emit("payload",t)}))}}},{key:"onError",value:function(e){if(this.listenerCount("error"))return this.emit("error",e);console.warn("[eth-provider] Uncaught connection error: "+e.message)}},{key:"refresh",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;clearTimeout(this.connectTimer),this.connectTimer=setTimeout((function(){return e.connect()}),t)}},{key:"connectionError",value:function(e,t){this.connection&&this.connection.close&&this.connection.close(),this.targets[e].status=t,this.targets.length-1===e?(this.inSetup=!1,this.refresh()):this.connect(++e)}},{key:"emitClose",value:function(){this.emit("close")}},{key:"close",value:function(){this.closing=!0,this.connection&&this.connection.close&&!this.connection.closed?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer),clearTimeout(this.setupTimer)}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e){var t=this;this.inSetup?this.setupTimer=setTimeout((function(){return t.send(e)}),100):this.connection.closed?this.error(e,"Not connected",4900):this.connection.send(e)}}]),n}(c);e.exports=u},8971:function(e,t,n){var r=n(27899),i=n(30166),o=n(93100),s={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},c="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,a="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;s.ethereum&&(s.ethereum.__isProvider=!0);var u={injected:s.ethereum||n(93798)(s.web3),ipc:n(61637)("IPC connections are unavliable in the browser"),ws:n(6540)(c),http:n(71809)(a)};e.exports=function(e,t){!e||Array.isArray(e)||"object"!==typeof e||t||(t=e,e=void 0),e||(e=["injected","frame"]),t||(t={}),(e=[].concat(e)).forEach((function(e){if(e.startsWith("alchemy")&&!t.alchemyId)throw new Error("Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: '123abc' }");if(e.startsWith("infura")&&!t.infuraId)throw new Error("Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: '123abc' }")}));var n=o(t);return i(u,r(e,n),t)}},71809:function(e,t,n){var r,i=n(56690).default,o=n(89728).default,s=n(61655).default,c=n(26389).default,a=n(68041),u=n(93032).v4,d=function(e){"use strict";s(n,e);var t=c(n);function n(e,o,s){var c;return i(this,n),c=t.call(this),r=e,c.options=s,c.connected=!1,c.subscriptions=!1,c.status="loading",c.url=o,c.pollId=u(),setTimeout((function(){return c.create()}),0),c._emit=function(){var e;return c.closed?null:(e=c).emit.apply(e,arguments)},c}return o(n,[{key:"onError",value:function(e){!this.closed&&this.listenerCount("error")&&this.emit("error",e)}},{key:"create",value:function(){var e=this;if(!r)return this.onError(new Error("No HTTP transport available"));this.on("error",(function(){e.connected&&e.close()})),this.init()}},{key:"init",value:function(){var e=this;this.send({jsonrpc:"2.0",method:"net_version",params:[],id:1},(function(t,n){if(t)return e.onError(t);e.connected=!0,e._emit("connect"),e.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[e.pollId,"immediate"]},(function(t,n){t||(e.subscriptions=!0,e.pollSubscriptions())}))}))}},{key:"pollSubscriptions",value:function(){var e=this;this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},(function(t,n){if(t)return e.subscriptionTimeout=setTimeout((function(){return e.pollSubscriptions()}),1e4),e.onError(t);e.closed||(e.subscriptionTimeout=e.pollSubscriptions()),n&&n.map((function(e){var t;try{t=JSON.parse(e)}catch(n){t=!1}return t})).filter((function(e){return e})).forEach((function(t){return e._emit("payload",t)}))}))}},{key:"close",value:function(){clearTimeout(this.subscriptionTimeout),this._emit("close"),this.closed=!0,this.removeAllListeners()}},{key:"filterStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.res=e,t.message}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this._emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e,t){var n=this;if(this.closed)return this.error(e,"Not connected");if("eth_subscribe"===e.method){if(!this.subscriptions)return this.error(e,"Subscriptions are not supported by this HTTP endpoint");e.pollId=this.pollId}var i=new r,o=!1,s=function(r,s){if(!o)if(i.abort(),o=!0,t)t(r,s);else{var c=e.id,a=e.jsonrpc,u=r?{id:c,jsonrpc:a,error:{message:r.message,code:r.code}}:{id:c,jsonrpc:a,result:s};n._emit("payload",u)}};try{i.open("POST",this.url,!0),i.setRequestHeader("Content-Type","application/json"),i.timeout=6e4,i.onerror=s,i.ontimeout=s,i.onreadystatechange=function(){if(4===i.readyState)try{var e=JSON.parse(i.responseText);s(e.error,e.result)}catch(t){s(t)}},i.send(JSON.stringify(e))}catch(c){false,s({message:c.message,code:-1})}}}]),n}(a);e.exports=function(e){return function(t,n){return new d(e,t,n)}}},93798:function(e,t,n){var r=n(56690).default,i=n(89728).default,o=n(61655).default,s=n(26389).default,c=function(e){"use strict";o(n,e);var t=s(n);function n(e,i){var o;return r(this,n),o=t.call(this),e?setTimeout((function(){return o.onError(new Error("Injected web3 provider is not currently supported"))}),0):setTimeout((function(){return o.onError(new Error("No injected provider found"))}),0),o}return i(n,[{key:"onError",value:function(e){this.listenerCount("error")&&this.emit("error",e)}}]),n}(n(68041));e.exports=function(e){return function(t){return new c(e,t)}}},61637:function(e,t,n){var r=n(56690).default,i=n(89728).default,o=n(61655).default,s=n(26389).default,c=function(e){"use strict";o(n,e);var t=s(n);function n(e){var i;return r(this,n),i=t.call(this),setTimeout((function(){return i.onError(new Error(e))}),0),i}return i(n,[{key:"onError",value:function(e){this.listenerCount("error")&&this.emit("error",e)}}]),n}(n(68041));e.exports=function(e){return function(){return new c(e)}}},6540:function(e,t,n){var r,i=n(56690).default,o=n(89728).default,s=n(61655).default,c=n(26389).default,a=n(68041),u=n(43102),d=function(e){"use strict";s(n,e);var t=c(n);function n(e,o,s){var c;return i(this,n),(c=t.call(this)).socketListeners=[],r=e,setTimeout((function(){return c.create(o,s)}),0),c}return o(n,[{key:"create",value:function(e,t){if(!r)return this.onError(new Error("No WebSocket transport available"));try{this.socket=new r(e,[],{origin:t.origin})}catch(n){return this.onError(n)}this.addSocketListener("error",this.onError.bind(this)),this.addSocketListener("open",this.onOpen.bind(this)),this.addSocketListener("close",this.onClose.bind(this))}},{key:"addSocketListener",value:function(e,t){this.socket.addEventListener(e,t),this.socketListeners.push({event:e,handler:t})}},{key:"removeAllSocketListeners",value:function(){var e=this;this.socketListeners.forEach((function(t){var n=t.event,r=t.handler;e.socket.removeEventListener(n,r)})),this.socketListeners=[]}},{key:"onOpen",value:function(){this.emit("connect"),this.addSocketListener("message",this.onMessage.bind(this))}},{key:"onMessage",value:function(e){var t=this,n="string"===typeof e.data?e.data:"";u(n,(function(e,n){e||n.forEach((function(e){Array.isArray(e)?e.forEach((function(e){return t.emit("payload",e)})):t.emit("payload",e)}))}))}},{key:"onError",value:function(e){this.listenerCount("error")&&this.emit("error",e)}},{key:"onClose",value:function(e){e&&e.reason,e&&e.code;this.socket&&(this.removeAllSocketListeners(),this.socket=null),this.closed=!0,this.emit("close"),this.removeAllListeners()}},{key:"close",value:function(){this.socket&&r&&this.socket.readyState!==r.CLOSED?(this.removeAllSocketListeners(),this.addSocketListener("error",(function(){})),this.addSocketListener("close",this.onClose.bind(this)),this.socket.terminate?this.socket.terminate():this.socket.close()):this.onClose()}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e){var t=this;try{this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((function(n){return t.send(e)}),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(e,"Not connected")):this.socket.send(JSON.stringify(e))}catch(n){false,this.error(e,n.message)}}}]),n}(a);e.exports=function(e){return function(t,n){return new d(e,t,n)}}},93032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return a.default}});var r=l(n(66244)),i=l(n(64509)),o=l(n(29699)),s=l(n(40194)),c=l(n(39533)),a=l(n(52269)),u=l(n(43216)),d=l(n(95930)),f=l(n(65464));function l(e){return e&&e.__esModule?e:{default:e}}},9110:function(e,t){"use strict";function n(e){return 14+(e+64>>>9<<4)+1}function r(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function i(e,t,n,i,o,s){return r((c=r(r(t,e),r(i,s)))<<(a=o)|c>>>32-a,n);var c,a}function o(e,t,n,r,o,s,c){return i(t&n|~t&r,e,t,o,s,c)}function s(e,t,n,r,o,s,c){return i(t&r|n&~r,e,t,o,s,c)}function c(e,t,n,r,o,s,c){return i(t^n^r,e,t,o,s,c)}function a(e,t,n,r,o,s,c){return i(n^(t|~r),e,t,o,s,c)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if("string"===typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var i=0;i<t.length;++i)e[i]=t.charCodeAt(i)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",i=0;i<n;i+=8){var o=e[i>>5]>>>i%32&255,s=parseInt(r.charAt(o>>>4&15)+r.charAt(15&o),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;for(var i=1732584193,u=-271733879,d=-1732584194,f=271733878,l=0;l<e.length;l+=16){var h=i,p=u,v=d,m=f;i=o(i,u,d,f,e[l],7,-680876936),f=o(f,i,u,d,e[l+1],12,-389564586),d=o(d,f,i,u,e[l+2],17,606105819),u=o(u,d,f,i,e[l+3],22,-1044525330),i=o(i,u,d,f,e[l+4],7,-176418897),f=o(f,i,u,d,e[l+5],12,1200080426),d=o(d,f,i,u,e[l+6],17,-1473231341),u=o(u,d,f,i,e[l+7],22,-45705983),i=o(i,u,d,f,e[l+8],7,1770035416),f=o(f,i,u,d,e[l+9],12,-1958414417),d=o(d,f,i,u,e[l+10],17,-42063),u=o(u,d,f,i,e[l+11],22,-1990404162),i=o(i,u,d,f,e[l+12],7,1804603682),f=o(f,i,u,d,e[l+13],12,-40341101),d=o(d,f,i,u,e[l+14],17,-1502002290),i=s(i,u=o(u,d,f,i,e[l+15],22,1236535329),d,f,e[l+1],5,-165796510),f=s(f,i,u,d,e[l+6],9,-1069501632),d=s(d,f,i,u,e[l+11],14,643717713),u=s(u,d,f,i,e[l],20,-373897302),i=s(i,u,d,f,e[l+5],5,-701558691),f=s(f,i,u,d,e[l+10],9,38016083),d=s(d,f,i,u,e[l+15],14,-660478335),u=s(u,d,f,i,e[l+4],20,-405537848),i=s(i,u,d,f,e[l+9],5,568446438),f=s(f,i,u,d,e[l+14],9,-1019803690),d=s(d,f,i,u,e[l+3],14,-187363961),u=s(u,d,f,i,e[l+8],20,1163531501),i=s(i,u,d,f,e[l+13],5,-1444681467),f=s(f,i,u,d,e[l+2],9,-51403784),d=s(d,f,i,u,e[l+7],14,1735328473),i=c(i,u=s(u,d,f,i,e[l+12],20,-1926607734),d,f,e[l+5],4,-378558),f=c(f,i,u,d,e[l+8],11,-2022574463),d=c(d,f,i,u,e[l+11],16,1839030562),u=c(u,d,f,i,e[l+14],23,-35309556),i=c(i,u,d,f,e[l+1],4,-1530992060),f=c(f,i,u,d,e[l+4],11,1272893353),d=c(d,f,i,u,e[l+7],16,-155497632),u=c(u,d,f,i,e[l+10],23,-1094730640),i=c(i,u,d,f,e[l+13],4,681279174),f=c(f,i,u,d,e[l],11,-358537222),d=c(d,f,i,u,e[l+3],16,-722521979),u=c(u,d,f,i,e[l+6],23,76029189),i=c(i,u,d,f,e[l+9],4,-640364487),f=c(f,i,u,d,e[l+12],11,-421815835),d=c(d,f,i,u,e[l+15],16,530742520),i=a(i,u=c(u,d,f,i,e[l+2],23,-995338651),d,f,e[l],6,-198630844),f=a(f,i,u,d,e[l+7],10,1126891415),d=a(d,f,i,u,e[l+14],15,-1416354905),u=a(u,d,f,i,e[l+5],21,-57434055),i=a(i,u,d,f,e[l+12],6,1700485571),f=a(f,i,u,d,e[l+3],10,-1894986606),d=a(d,f,i,u,e[l+10],15,-1051523),u=a(u,d,f,i,e[l+1],21,-2054922799),i=a(i,u,d,f,e[l+8],6,1873313359),f=a(f,i,u,d,e[l+15],10,-30611744),d=a(d,f,i,u,e[l+6],15,-1560198380),u=a(u,d,f,i,e[l+13],21,1309151649),i=a(i,u,d,f,e[l+4],6,-145523070),f=a(f,i,u,d,e[l+11],10,-1120210379),d=a(d,f,i,u,e[l+2],15,718787259),u=a(u,d,f,i,e[l+9],21,-343485551),i=r(i,h),u=r(u,p),d=r(d,v),f=r(f,m)}return[i,u,d,f]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(n(t)),i=0;i<t;i+=8)r[i>>5]|=(255&e[i/8])<<i%32;return r}(e),8*e.length))};t.default=u},86877:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=n},39533:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="00000000-0000-0000-0000-000000000000"},65464:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(43216))&&r.__esModule?r:{default:r};var o=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};t.default=o},13007:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},60626:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)};var r=new Uint8Array(16)},43911:function(e,t){"use strict";function n(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function r(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){var t=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof e){var o=unescape(encodeURIComponent(e));e=[];for(var s=0;s<o.length;++s)e.push(o.charCodeAt(s))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var c=e.length/4+2,a=Math.ceil(c/16),u=new Array(a),d=0;d<a;++d){for(var f=new Uint32Array(16),l=0;l<16;++l)f[l]=e[64*d+4*l]<<24|e[64*d+4*l+1]<<16|e[64*d+4*l+2]<<8|e[64*d+4*l+3];u[d]=f}u[a-1][14]=8*(e.length-1)/Math.pow(2,32),u[a-1][14]=Math.floor(u[a-1][14]),u[a-1][15]=8*(e.length-1)&4294967295;for(var h=0;h<a;++h){for(var p=new Uint32Array(80),v=0;v<16;++v)p[v]=u[h][v];for(var m=16;m<80;++m)p[m]=r(p[m-3]^p[m-8]^p[m-14]^p[m-16],1);for(var y=i[0],b=i[1],g=i[2],w=i[3],k=i[4],_=0;_<80;++_){var I=Math.floor(_/20),S=r(y,5)+n(I,b,g,w)+k+t[I]+p[_]>>>0;k=w,w=g,g=r(b,30)>>>0,b=y,y=S}i[0]=i[0]+y>>>0,i[1]=i[1]+b>>>0,i[2]=i[2]+g>>>0,i[3]=i[3]+w>>>0,i[4]=i[4]+k>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]};t.default=i},95930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=c;var r,i=(r=n(43216))&&r.__esModule?r:{default:r};for(var o=[],s=0;s<256;++s)o.push((s+256).toString(16).slice(1));function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}var a=function(e){var t=c(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0);if(!(0,i.default)(t))throw TypeError("Stringified UUID is invalid");return t};t.default=a},66244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,o,s=(r=n(60626))&&r.__esModule?r:{default:r},c=n(95930);var a=0,u=0;var d=function(e,t,n){var r=t&&n||0,d=t||new Array(16),f=(e=e||{}).node||i,l=void 0!==e.clockseq?e.clockseq:o;if(null==f||null==l){var h=e.random||(e.rng||s.default)();null==f&&(f=i=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==l&&(l=o=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:u+1,m=p-a+(v-u)/1e4;if(m<0&&void 0===e.clockseq&&(l=l+1&16383),(m<0||p>a)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,u=v,o=l;var y=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;d[r++]=y>>>24&255,d[r++]=y>>>16&255,d[r++]=y>>>8&255,d[r++]=255&y;var b=p/4294967296*1e4&268435455;d[r++]=b>>>8&255,d[r++]=255&b,d[r++]=b>>>24&15|16,d[r++]=b>>>16&255,d[r++]=l>>>8|128,d[r++]=255&l;for(var g=0;g<6;++g)d[r+g]=f[g];return t||(0,c.unsafeStringify)(d)};t.default=d},64509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(64040)),i=o(n(9110));function o(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("v3",48,i.default);t.default=s},64040:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,n){function r(e,r,s,c){var a;if("string"===typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"===typeof r&&(r=(0,o.default)(r)),16!==(null===(a=r)||void 0===a?void 0:a.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+e.length);if(u.set(r),u.set(e,r.length),(u=n(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,s){c=c||0;for(var d=0;d<16;++d)s[c+d]=u[d];return s}return(0,i.unsafeStringify)(u)}try{r.name=e}catch(a){}return r.DNS=s,r.URL=c,r};var r,i=n(95930),o=(r=n(65464))&&r.__esModule?r:{default:r};var s="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=s;var c="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=c},29699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(86877)),i=s(n(60626)),o=n(95930);function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t,n){if(r.default.randomUUID&&!t&&!e)return r.default.randomUUID();var s=(e=e||{}).random||(e.rng||i.default)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(var c=0;c<16;++c)t[n+c]=s[c];return t}return(0,o.unsafeStringify)(s)};t.default=c},40194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(64040)),i=o(n(43911));function o(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("v5",80,i.default);t.default=s},43216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(13007))&&r.__esModule?r:{default:r};var o=function(e){return"string"===typeof e&&i.default.test(e)};t.default=o},52269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(43216))&&r.__esModule?r:{default:r};var o=function(e){if(!(0,i.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)};t.default=o},43102:function(e){var t,n;e.exports=function(e,r){var i=[];e.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(e){var o;t&&(e=t+e);try{o=JSON.parse(e)}catch(s){return t=e,clearTimeout(n),void(n=setTimeout((function(){return r(new Error("Parse response timeout"))}),15e3))}clearTimeout(n),t=null,o&&i.push(o)})),r(null,i)}},93100:function(e){e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/".concat(e.infuraId),"https://mainnet.infura.io/v3/".concat(e.infuraId)],alchemy:["wss://eth-mainnet.ws.alchemyapi.io/v2/".concat(e.alchemyId),"https://eth-mainnet.alchemyapi.io/v2/".concat(e.alchemyId)],infuraGoerli:["wss://goerli.infura.io/ws/v3/".concat(e.infuraId),"https://goerli.infura.io/v3/".concat(e.infuraId)],alchemyGoerli:["wss://eth-goerli.ws.alchemyapi.io/v2/".concat(e.alchemyId),"https://eth-goerli.alchemyapi.io/v2/".concat(e.alchemyId)],infuraPolygon:["https://polygon-mainnet.infura.io/v3/".concat(e.infuraId)],infuraArbitrum:["https://arbitrum-mainnet.infura.io/v3/".concat(e.infuraId)],infuraOptimism:["https://optimism-mainnet.infura.io/v3/".concat(e.infuraId)],infuraSepolia:["wss://sepolia.infura.io/ws/v3/".concat(e.infuraId),"https://sepolia.infura.io/v3/".concat(e.infuraId)],gnosis:["https://rpc.gnosischain.com"],optimism:["https://mainnet.optimism.io"]}}},30166:function(e,t,n){var r=n(17061).default,i=n(17156).default,o=n(68041),s=n(95344).default,c=n(70503),a=function(e){function t(t){e.status=t,e instanceof o&&e.emit("status",t)}function n(){return s.apply(this,arguments)}function s(){return(s=i(r().mark((function n(){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.send("eth_syncing");case 3:if(!n.sent){n.next=5;break}t("syncing");case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function c(){return a.apply(this,arguments)}function a(){return(a=i(r().mark((function i(){return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.inSetup){r.next=2;break}return r.abrupt("return",setTimeout(c,1e3));case 2:return r.prev=2,r.next=5,e.send("eth_chainId");case 5:t("connected"),setTimeout(n,500),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),t("disconnected");case 12:case"end":return r.stop()}}),i,null,[[2,9]])})))).apply(this,arguments)}return t("loading"),c(),e.on("connect",(function(){return c()})),e.on("close",(function(){return t("disconnected")})),e};e.exports=function(e,t,n){if(e.injected.__isProvider&&t.map((function(e){return e.type})).indexOf("injected")>-1)return delete e.injected.__isProvider,a(e.injected);var r=new s(new c(e,t,n));return r.setMaxListeners(128),a(r)}},27899:function(e,t,n){var r=n(861).default,i=function(e){return"injected"===e?"injected":e.endsWith(".ipc")?"ipc":e.startsWith("wss://")||e.startsWith("ws://")?"ws":e.startsWith("https://")||e.startsWith("http://")?"http":""};e.exports=function(e,t){var n;return(n=[]).concat.apply(n,r([].concat(e).map((function(e){return t[e]?t[e].map((function(t){return{type:e,location:t,protocol:i(t)}})):{type:"custom",location:e,protocol:i(e)}})))).filter((function(e){return!(!e.protocol&&"injected"!==e.type)||(console.log('eth-provider | Invalid provider preset/location: "'+e.location+'"'),!1)}))}},95344:function(e,t,n){"use strict";var r=n(42122).default,i=n(861).default,o=n(17061).default,s=n(17156).default,c=n(56690).default,a=n(89728).default,u=n(66115).default,d=n(61655).default,f=n(26389).default,l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=l(n(68041)),p=n(21941),v=function(e){d(n,e);var t=f(n);function n(e){var r;return c(this,n),(r=t.call(this)).promises={},r.attemptedSubscriptions=new Set,r.subscriptions=[],r.checkConnectionRunning=!1,r.nextId=1,r.connected=!1,r.accounts=[],r.selectedAddress=void 0,r.coinbase=void 0,r.enable=r.enable.bind(u(r)),r.doSend=r.doSend.bind(u(r)),r.send=r.send.bind(u(r)),r.sendBatch=r.sendBatch.bind(u(r)),r.subscribe=r.subscribe.bind(u(r)),r.unsubscribe=r.unsubscribe.bind(u(r)),r.resumeSubscriptions=r.resumeSubscriptions.bind(u(r)),r.sendAsync=r.sendAsync.bind(u(r)),r.sendAsyncBatch=r.sendAsyncBatch.bind(u(r)),r.isConnected=r.isConnected.bind(u(r)),r.close=r.close.bind(u(r)),r.request=r.request.bind(u(r)),r.connection=e,r.on("connect",r.resumeSubscriptions),r.connection.on("connect",(function(){return r.checkConnection(1e3)})),r.connection.on("close",(function(){r.connected=!1,r.attemptedSubscriptions.clear(),r.emit("close"),r.emit("disconnect")})),r.connection.on("payload",(function(e){var t=e.id,n=e.method,i=e.error,o=e.result;if("undefined"!==typeof t){if(r.promises[t]){var s=r.promises[t].method;if(s&&["eth_accounts","eth_requestAccounts"].includes(s)){var c=o||[];r.accounts=c,r.selectedAddress=c[0],r.coinbase=c[0]}e.error?r.promises[t].reject(i):r.promises[t].resolve(o),delete r.promises[t]}}else n&&n.indexOf("_subscription")>-1&&(r.emit(e.params.subscription,e.params.result),r.emit(n,e.params),r.emit("message",{type:e.method,data:{subscription:e.params.subscription,result:e.params.result}}),r.emit("data",e))})),r.on("newListener",(function(e){Object.keys(r.eventHandlers).includes(e)&&!r.attemptedSubscription(e)&&r.connected&&(r.startSubscription(e),"networkChanged"===e&&console.warn("The networkChanged event is being deprecated, use chainChanged instead"))})),r.eventHandlers={networkChanged:function(e){r.networkVersion="string"===typeof e?parseInt(e):e,r.emit("networkChanged",r.networkVersion)},chainChanged:function(e){r.providerChainId=e,r.manualChainId||r.emit("chainChanged",e)},chainsChanged:function(e){r.emit("chainsChanged",e)},accountsChanged:function(e){r.selectedAddress=e[0],r.emit("accountsChanged",e)},assetsChanged:function(e){r.emit("assetsChanged",e)}},r}return a(n,[{key:"chainId",get:function(){return this.manualChainId||this.providerChainId}},{key:"checkConnection",value:function(){var e=s(o().mark((function e(){var t,n=this,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:4e3,!this.checkConnectionRunning&&!this.connected){e.next=3;break}return e.abrupt("return");case 3:return clearTimeout(this.checkConnectionTimer),this.checkConnectionTimer=void 0,this.checkConnectionRunning=!0,e.prev=6,e.next=9,this.doSend("net_version",[],void 0,!1);case 9:return this.networkVersion=e.sent,e.next=12,this.doSend("eth_chainId",[],void 0,!1);case 12:this.providerChainId=e.sent,this.connected=!0,e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),this.checkConnectionTimer=setTimeout((function(){return n.checkConnection()}),t),this.connected=!1;case 20:return e.prev=20,this.checkConnectionRunning=!1,this.connected&&this.emit("connect",{chainId:this.providerChainId}),e.finish(20);case 24:case"end":return e.stop()}}),e,this,[[6,16,20,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"attemptedSubscription",value:function(e){return this.attemptedSubscriptions.has(e)}},{key:"setSubscriptionAttempted",value:function(e){this.attemptedSubscriptions.add(e)}},{key:"startSubscription",value:function(){var e=s(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("starting subscription for ".concat(t," events")),this.setSubscriptionAttempted(t),e.prev=2,e.next=5,this.subscribe("eth_subscribe",t);case 5:n=e.sent,this.on(n,this.eventHandlers[t]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.warn("Unable to subscribe to ".concat(t),e.t0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"resumeSubscriptions",value:function(){var e=this;Object.keys(this.eventHandlers).forEach((function(t){e.listenerCount(t)&&!e.attemptedSubscription(t)&&e.startSubscription(t)}))}},{key:"enable",value:function(){var e=s(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.doSend("eth_accounts");case 2:if(!((t=e.sent).length>0)){e.next=11;break}return this.accounts=t,this.selectedAddress=t[0],this.coinbase=t[0],this.emit("enable"),e.abrupt("return",t);case 11:throw(n=new Error("User Denied Full Provider")).code="4001",n;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"doSend",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.manualChainId,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=function(i,o){var s="object"===typeof e?e.method:e,c="object"===typeof e?e.params:n,a="object"===typeof e&&e.chainId||r;if(!s)return o(new Error("Method is not a valid string."));try{var u=(0,p.create)(s,c,t.nextId++,a);t.promises[u.id]={resolve:function(e){return i(e)},reject:o,method:u.method},t.connection.send(u)}catch(d){o(d)}};return this.connected||!i?new Promise(o):new Promise((function(e,n){var r=function(){return clearTimeout(i),e(new Promise(o))},i=setTimeout((function(){t.off("connect",r),n(new Error("Not connected"))}),5e3);t.once("connect",r)}))}},{key:"send",value:function(){var e=s(o().mark((function e(t,n){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t||n&&!Array.isArray(n)){e.next=3;break}return r=n,e.abrupt("return",this.doSend(t,r));case 3:if(!t||"object"!==typeof t||"function"!==typeof n){e.next=6;break}return i=n,e.abrupt("return",this.sendAsync(t,i));case 6:return e.abrupt("return",this.request(t));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendBatch",value:function(e){var t=this;return Promise.all(e.map((function(e){return t.doSend(e.method,e.params)})))}},{key:"subscribe",value:function(){var e=s(o().mark((function e(t,n){var r,s,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:[],e.next=3,this.doSend(t,[n].concat(i(r)));case 3:return s=e.sent,this.subscriptions.push(s),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"unsubscribe",value:function(){var e=s(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.doSend(t,[n]);case 2:if(!(r=e.sent)){e.next=7;break}return this.subscriptions=this.subscriptions.filter((function(e){return e!==n})),this.removeAllListeners(n),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendAsync",value:function(){var e=s(o().mark((function e(t,n){var i,s,c,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&"function"===typeof n){e.next=2;break}return e.abrupt("return",new Error("Invalid or undefined callback provided to sendAsync"));case 2:if(t){e.next=4;break}return e.abrupt("return",n(new Error("Invalid Payload")));case 4:if(!Array.isArray(t)){e.next=10;break}return i=t.map((function(e){return r(r({},e),{},{jsonrpc:"2.0"})})),s=n,e.abrupt("return",this.sendAsyncBatch(i,s));case 10:return c=r(r({},t),{},{jsonrpc:"2.0"}),a=n,e.prev=12,e.next=15,this.doSend(c.method,c.params);case 15:u=e.sent,a(null,{id:c.id,jsonrpc:c.jsonrpc,result:u}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),a(e.t0);case 22:case"end":return e.stop()}}),e,this,[[12,19]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendAsyncBatch",value:function(){var e=s(o().mark((function e(t,n){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.sendBatch(t);case 3:r=e.sent,i=r.map((function(e,n){return{id:t[n].id,jsonrpc:t[n].jsonrpc,result:e}})),n(null,i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"isConnected",value:function(){return this.connected}},{key:"close",value:function(){var e=this;this.connection&&this.connection.close&&this.connection.close(),this.off("connect",this.resumeSubscriptions),this.connected=!1;var t=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((function(n){return e.emit(n,t)})),this.subscriptions=[],this.manualChainId=void 0,this.providerChainId=void 0,this.networkVersion=void 0,this.selectedAddress=void 0,this.coinbase=void 0}},{key:"request",value:function(){var e=s(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.doSend(t.method,t.params,t.chainId));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setChain",value:function(e){"number"===typeof e&&(e="0x"+e.toString(16));var t=e!==this.chainId;this.manualChainId=e,t&&this.emit("chainChanged",this.chainId)}}]),n}(h.default);t.default=v},21941:function(e,t,n){"use strict";var r=n(861).default,i=n(42122).default;Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0,t.create=function(e){var t=arguments.length>3?arguments[3]:void 0,n={id:arguments.length>2?arguments[2]:void 0,method:e,params:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],jsonrpc:"2.0"};if(t&&(n.chainId=t),"eth_sendTransaction"===n.method){var o=function(e){if("eth_sendTransaction"!==e.method)return!1;var t=e.params[0]||{},n=t.chainId;return"chainId"in t&&parseInt(n)!==parseInt(e.chainId||n)}(n);if(o)throw new Error("Payload chainId (".concat(o,") inconsistent with specified target chainId: ").concat(t));return function(e){var t=e.params[0]||{};return i(i({},e),{},{params:[i(i({},t),{},{chainId:t.chainId||e.chainId})].concat(r(e.params.slice(1)))})}(n)}return n}},17156:function(e){function t(e,t,n,r,i,o,s){try{var c=e[o](s),a=c.value}catch(u){return void n(u)}c.done?t(a):Promise.resolve(a).then(r,i)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var s=e.apply(n,r);function c(e){t(s,i,o,c,a,"next",e)}function a(e){t(s,i,o,c,a,"throw",e)}c(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);