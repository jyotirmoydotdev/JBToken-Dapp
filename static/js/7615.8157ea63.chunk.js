"use strict";(self.webpackChunkjbtoken_dapp=self.webpackChunkjbtoken_dapp||[]).push([[7615],{97615:function(r,t,n){n.r(t),n.d(t,{Edition:function(){return v}});var e=n(74165),a=n(15861),u=n(15671),c=n(43144),i=n(97326),o=n(60136),p=n(29388),s=n(66259),f=n(94590),d=n(15540),h=n(81895),v=(n(64166),n(60862),n(89806),n(79955),n(62349),n(7605),function(r){(0,o.Z)(n,r);var t=(0,p.Z)(n);function n(r,c,o){var p;(0,u.Z)(this,n);var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.dd(r,c,h,d);return p=t.call(this,l,o,v),(0,s._)((0,i.Z)(p),"abi",void 0),(0,s._)((0,i.Z)(p),"metadata",void 0),(0,s._)((0,i.Z)(p),"app",void 0),(0,s._)((0,i.Z)(p),"roles",void 0),(0,s._)((0,i.Z)(p),"sales",void 0),(0,s._)((0,i.Z)(p),"platformFees",void 0),(0,s._)((0,i.Z)(p),"encoder",void 0),(0,s._)((0,i.Z)(p),"estimator",void 0),(0,s._)((0,i.Z)(p),"events",void 0),(0,s._)((0,i.Z)(p),"royalties",void 0),(0,s._)((0,i.Z)(p),"signature",void 0),(0,s._)((0,i.Z)(p),"interceptor",void 0),(0,s._)((0,i.Z)(p),"owner",void 0),(0,s._)((0,i.Z)(p),"mint",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.mint.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,s._)((0,i.Z)(p),"mintTo",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.mintTo.prepare(t,n));case 1:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}())),(0,s._)((0,i.Z)(p),"mintAdditionalSupply",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.mintAdditionalSupply.prepare(t,n));case 1:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}())),(0,s._)((0,i.Z)(p),"mintAdditionalSupplyTo",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n,a){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.mintAdditionalSupplyTo.prepare(t,n,a));case 1:case"end":return r.stop()}}),r)})));return function(t,n,e){return r.apply(this,arguments)}}())),(0,s._)((0,i.Z)(p),"mintBatch",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.mintBatch.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,s._)((0,i.Z)(p),"mintBatchTo",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.mintBatchTo.prepare(t,n));case 1:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}())),(0,s._)((0,i.Z)(p),"burn",(0,f.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.burn.prepare(t,n));case 1:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}())),p.abi=f.e.parse(h||[]),p.metadata=new f.ag(p.contractWrapper,f.dr,p.storage),p.app=new f.a$(p.contractWrapper,p.metadata,p.storage),p.roles=new f.ah(p.contractWrapper,n.contractRoles),p.royalties=new f.ai(p.contractWrapper,p.metadata),p.sales=new f.aj(p.contractWrapper),p.encoder=new f.af(p.contractWrapper),p.estimator=new f.aP(p.contractWrapper),p.events=new f.aQ(p.contractWrapper),p.platformFees=new f.aS(p.contractWrapper),p.interceptor=new f.aR(p.contractWrapper),p.signature=new f.aL(p.contractWrapper,p.storage,p.roles),p.owner=new f.aU(p.contractWrapper),p}return(0,c.Z)(n,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAll",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getAll(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwned",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getOwned(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalCount());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){var t;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.bJ)("transfer"),h.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getMintTransaction",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getMintTransaction(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n,a){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:n,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n,e){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n,a){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.contractWrapper.call(t,n,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n,e){return r.apply(this,arguments)}}()}]),n}(d.S));(0,s._)(v,"contractRoles",f.dq)},15540:function(r,t,n){n.d(t,{S:function(){return p}});var e=n(74165),a=n(15861),u=n(15671),c=n(43144),i=n(66259),o=n(94590),p=function(){function r(t,n,c){var p=this;(0,u.Z)(this,r);var s=this;(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"erc1155",void 0),(0,i._)(this,"_chainId",void 0),(0,i._)(this,"transfer",(0,o.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n,a){var u,c=arguments;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=c.length>3&&void 0!==c[3]?c[3]:[0],r.abrupt("return",s.erc1155.transfer.prepare(t,n,a,u));case 2:case"end":return r.stop()}}),r)})));return function(t,n,e){return r.apply(this,arguments)}}())),(0,i._)(this,"setApprovalForAll",(0,o.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.setApprovalForAll.prepare(t,n));case 1:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}())),(0,i._)(this,"airdrop",(0,o.d6)(function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){var a,u=arguments;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:[0],r.abrupt("return",s.erc1155.airdrop.prepare(t,n,a));case 2:case"end":return r.stop()}}),r)})));return function(t,n){return r.apply(this,arguments)}}())),this.contractWrapper=t,this.storage=n,this.erc1155=new o.aK(this.contractWrapper,this.storage,c),this._chainId=c}return(0,c.Z)(r,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"get",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.get(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalSupply(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.balanceOf(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()},{key:"balance",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.balance(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"isApproved",value:function(){var r=(0,a.Z)((0,e.Z)().mark((function r(t,n){return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.isApproved(t,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,n){return r.apply(this,arguments)}}()}]),r}()}}]);