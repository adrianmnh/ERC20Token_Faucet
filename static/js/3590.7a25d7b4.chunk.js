"use strict";(self.webpackChunkSmart_Contract_Reader_for_Ethereum=self.webpackChunkSmart_Contract_Reader_for_Ethereum||[]).push([[3590],{83590:function(r,t,e){e.r(t),e.d(t,{EditionDrop:function(){return w}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),i=e(97326),o=e(60136),s=e(29388),p=e(91648),f=e(92854),h=e(19560),d=function(){function r(t){(0,c.Z)(this,r),(0,p._)(this,"events",void 0),this.events=t}return(0,u.Z)(r,[{key:"getAllClaimerAddresses",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.events.getEvents("TokensClaimed");case 2:return e=r.sent.filter((function(r){return!(!r.data||!h.O$.isBigNumber(r.data.tokenId))&&r.data.tokenId.eq(t)})),r.abrupt("return",Array.from(new Set(e.filter((function(r){var t;return"string"===typeof(null===(t=r.data)||void 0===t?void 0:t.claimer)})).map((function(r){return r.data.claimer})))));case 4:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),r}(),l=e(56095),v=e(17498),Z=e(81895),w=(e(64166),e(60862),e(89806),e(79955),e(87962),e(7605),function(r){(0,o.Z)(e,r);var t=(0,s.Z)(e);function e(r,u,o){var s,h;(0,c.Z)(this,e);var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},Z=arguments.length>4?arguments[4]:void 0,w=arguments.length>5?arguments[5]:void 0,k=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.d6(r,u,Z,l,o);return s=t.call(this,k,o,w),h=(0,i.Z)(s),(0,p._)((0,i.Z)(s),"abi",void 0),(0,p._)((0,i.Z)(s),"sales",void 0),(0,p._)((0,i.Z)(s),"platformFees",void 0),(0,p._)((0,i.Z)(s),"encoder",void 0),(0,p._)((0,i.Z)(s),"estimator",void 0),(0,p._)((0,i.Z)(s),"events",void 0),(0,p._)((0,i.Z)(s),"metadata",void 0),(0,p._)((0,i.Z)(s),"app",void 0),(0,p._)((0,i.Z)(s),"roles",void 0),(0,p._)((0,i.Z)(s),"royalties",void 0),(0,p._)((0,i.Z)(s),"claimConditions",void 0),(0,p._)((0,i.Z)(s),"checkout",void 0),(0,p._)((0,i.Z)(s),"history",void 0),(0,p._)((0,i.Z)(s),"interceptor",void 0),(0,p._)((0,i.Z)(s),"owner",void 0),(0,p._)((0,i.Z)(s),"createBatch",(0,f.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc1155.lazyMint.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,p._)((0,i.Z)(s),"claimTo",(0,f.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){var c,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!(u.length>3&&void 0!==u[3])||u[3],r.abrupt("return",h.erc1155.claimTo.prepare(t,e,a,{checkERC20Allowance:c}));case 2:case"end":return r.stop()}}),r)})));return function(t,e,n){return r.apply(this,arguments)}}())),(0,p._)((0,i.Z)(s),"claim",(0,f.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){var a,c,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=!(u.length>2&&void 0!==u[2])||u[2],r.next=3,h.contractWrapper.getSignerAddress();case 3:return c=r.sent,r.abrupt("return",h.claimTo.prepare(c,t,e,a));case 5:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,p._)((0,i.Z)(s),"burnTokens",(0,f.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc1155.burn.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),s.abi=f.e.parse(Z),s.metadata=new f.ag(s.contractWrapper,f.dp,s.storage),s.app=new f.a$(s.contractWrapper,s.metadata,s.storage),s.roles=new f.ah(s.contractWrapper,e.contractRoles),s.royalties=new f.ai(s.contractWrapper,s.metadata),s.sales=new f.aj(s.contractWrapper),s.claimConditions=new f.am(s.contractWrapper,s.metadata,s.storage),s.events=new f.aQ(s.contractWrapper),s.history=new d(s.events),s.encoder=new f.af(s.contractWrapper),s.estimator=new f.aP(s.contractWrapper),s.platformFees=new f.aS(s.contractWrapper),s.interceptor=new f.aR(s.contractWrapper),s.checkout=new v.a(s.contractWrapper),s.owner=new f.aU(s.contractWrapper),s}return(0,u.Z)(e,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getAll(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwned",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getOwned(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalCount());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.bJ)("transfer"),Z.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getClaimTransaction",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){var c,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!(u.length>3&&void 0!==u[3])||u[3],r.abrupt("return",this.erc1155.getClaimTransaction(t,e,a,{checkERC20Allowance:c}));case 2:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.contractWrapper.call(t,e,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()}]),e}(l.S));(0,p._)(w,"contractRoles",f.dq)},56095:function(r,t,e){e.d(t,{S:function(){return s}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),i=e(91648),o=e(92854),s=function(){function r(t,e,u){var s=this;(0,c.Z)(this,r);var p=this;(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"erc1155",void 0),(0,i._)(this,"_chainId",void 0),(0,i._)(this,"transfer",(0,o.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){var c,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=u.length>3&&void 0!==u[3]?u[3]:[0],r.abrupt("return",p.erc1155.transfer.prepare(t,e,a,c));case 2:case"end":return r.stop()}}),r)})));return function(t,e,n){return r.apply(this,arguments)}}())),(0,i._)(this,"setApprovalForAll",(0,o.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",s.erc1155.setApprovalForAll.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,i._)(this,"airdrop",(0,o.dd)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){var a,c=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:[0],r.abrupt("return",p.erc1155.airdrop.prepare(t,e,a));case 2:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),this.contractWrapper=t,this.storage=e,this.erc1155=new o.aK(this.contractWrapper,this.storage,u),this._chainId=u}return(0,u.Z)(r,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"get",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.get(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalSupply(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.balanceOf(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"balance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.balance(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"isApproved",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.isApproved(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()}]),r}()},17498:function(r,t,e){e.d(t,{a:function(){return g}});var n,a=e(1413),c=e(74165),u=e(15671),i=e(43144),o=e(15861),s=e(4942),p=e(91648),f=e(92854),h=e(17389),d="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),l=(n={},(0,s.Z)(n,f.cA.Mainnet,"Ethereum"),(0,s.Z)(n,f.cA.Goerli,"Goerli"),(0,s.Z)(n,f.cA.Polygon,"Polygon"),(0,s.Z)(n,f.cA.Mumbai,"Mumbai"),(0,s.Z)(n,f.cA.Avalanche,"Avalanche"),n);function v(r){return(0,h.Z)(r in l,"chainId not supported by paper: ".concat(r)),l[r]}function Z(r,t){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)((0,c.Z)().mark((function r(t,e){var n,a,u;return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=v(e),r.next=3,fetch("".concat(d,"/register-contract?contractAddress=").concat(t,"&chain=").concat(n));case 3:return a=r.sent,r.next=6,a.json();case 6:return u=r.sent,(0,h.Z)(u.result.id,"Contract is not registered with paper"),r.abrupt("return",u.result.id);case 9:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var k={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};function y(r,t){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,c.Z)().mark((function r(t,e){var n,u;return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(d,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,a.Z)((0,a.Z)((0,a.Z)({contractId:t},k),e),{},{metadata:(0,a.Z)((0,a.Z)({},e.metadata),{},{via_platform:"thirdweb"}),hideNativeMint:!0,hidePaperWallet:!!e.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1}))});case 2:return n=r.sent,r.next=5,n.json();case 5:return u=r.sent,(0,h.Z)(u.checkoutLinkIntentUrl,"Failed to create checkout link intent"),r.abrupt("return",u.checkoutLinkIntentUrl);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var g=function(){function r(t){(0,u.Z)(this,r),(0,p._)(this,"contractWrapper",void 0),this.contractWrapper=t}return(0,i.Z)(r,[{key:"getCheckoutId",value:function(){var r=(0,o.Z)((0,c.Z)().mark((function r(){return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=Z,r.t1=this.contractWrapper.readContract.address,r.next=4,this.contractWrapper.getChainID();case 4:return r.t2=r.sent,r.abrupt("return",(0,r.t0)(r.t1,r.t2));case 6:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isEnabled",value:function(){var r=(0,o.Z)((0,c.Z)().mark((function r(){return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,this.getCheckoutId();case 3:return r.abrupt("return",!!r.sent);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",!1);case 9:case"end":return r.stop()}}),r,this,[[0,6]])})));return function(){return r.apply(this,arguments)}}()},{key:"createLinkIntent",value:function(){var r=(0,o.Z)((0,c.Z)().mark((function r(t){return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=y,r.next=3,this.getCheckoutId();case 3:return r.t1=r.sent,r.t2=t,r.next=7,(0,r.t0)(r.t1,r.t2);case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),r}()}}]);