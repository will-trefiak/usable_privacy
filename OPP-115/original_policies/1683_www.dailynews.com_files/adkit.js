var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,i){return t&&eachProp(t,function(t,r){(n||!hasProp(e,r))&&(!i||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[r]=t:(e[r]||(e[r]={}),mixin(e[r],t,n,i)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,i){var r=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return r.requireType=e,r.requireModules=i,n&&(r.originalError=n),r}function newContext(e){function t(e){var t,n;for(t=0;t<e.length;t++)if(n=e[t],"."===n)e.splice(t,1),t-=1;else if(".."===n){if(0===t||1==t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function n(e,n,i){var r,o,a,s,u,c,f,d,l,p,h,m,g=n&&n.split("/"),v=w.map,y=v&&v["*"];if(e&&(e=e.split("/"),f=e.length-1,w.nodeIdCompat&&jsSuffixRegExp.test(e[f])&&(e[f]=e[f].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),e=m.concat(e)),t(e),e=e.join("/")),i&&v&&(g||y)){a=e.split("/");e:for(s=a.length;s>0;s-=1){if(c=a.slice(0,s).join("/"),g)for(u=g.length;u>0;u-=1)if(o=getOwn(v,g.slice(0,u).join("/")),o&&(o=getOwn(o,c))){d=o,l=s;break e}!p&&y&&getOwn(y,c)&&(p=getOwn(y,c),h=s)}!d&&p&&(d=p,l=h),d&&(a.splice(0,l,d),e=a.join("/"))}return r=getOwn(w.pkgs,e),r?r:e}function i(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===E.contextName?(t.parentNode.removeChild(t),!0):void 0})}function r(e){var t=getOwn(w.paths,e);return t&&isArray(t)&&t.length>1?(t.shift(),E.require.undef(e),E.makeRequire(null,{skipMap:!0})([e]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function a(e,t,i,r){var a,s,u,c,f=null,d=t?t.name:null,l=e,p=!0,h="";return e||(p=!1,e="_@r"+(j+=1)),c=o(e),f=c[0],e=c[1],f&&(f=n(f,d,r),s=getOwn(M,f)),e&&(f?h=s&&s.normalize?s.normalize(e,function(e){return n(e,d,r)}):-1===e.indexOf("!")?n(e,d,r):e:(h=n(e,d,r),c=o(h),f=c[0],h=c[1],i=!0,a=E.nameToUrl(h))),u=!f||s||i?"":"_unnormalized"+(I+=1),{prefix:f,name:h,parentMap:t,unnormalized:!!u,url:a,originalName:l,isDefine:p,id:(f?f+"!"+h:h)+u}}function s(e){var t=e.id,n=getOwn(C,t);return n||(n=C[t]=new E.Module(e)),n}function u(e,t,n){var i=e.id,r=getOwn(C,i);!hasProp(M,i)||r&&!r.defineEmitComplete?(r=s(e),r.error&&"error"===t?n(r.error):r.on(t,n)):"defined"===t&&n(M[i])}function c(e,t){var n=e.requireModules,i=!1;t?t(e):(each(n,function(t){var n=getOwn(C,t);n&&(n.error=e,n.events.error&&(i=!0,n.emit("error",e)))}),i||req.onError(e))}function f(){globalDefQueue.length&&(apsp.apply(q,[q.length,0].concat(globalDefQueue)),globalDefQueue=[])}function d(e){delete C[e],delete k[e]}function l(e,t,n){var i=e.map.id;e.error?e.emit("error",e.error):(t[i]=!0,each(e.depMaps,function(i,r){var o=i.id,a=getOwn(C,o);!a||e.depMatched[r]||n[o]||(getOwn(t,o)?(e.defineDep(r,M[o]),e.check()):l(a,t,n))}),n[i]=!0)}function p(){var e,t,n=1e3*w.waitSeconds,o=n&&E.startTime+n<(new Date).getTime(),a=[],s=[],u=!1,f=!0;if(!y){if(y=!0,eachProp(k,function(e){var n=e.map,c=n.id;if(e.enabled&&(n.isDefine||s.push(e),!e.error))if(!e.inited&&o)r(c)?(t=!0,u=!0):(a.push(c),i(c));else if(!e.inited&&e.fetched&&n.isDefine&&(u=!0,!n.prefix))return f=!1}),o&&a.length)return e=makeError("timeout","Load timeout for modules: "+a,null,a),e.contextName=E.contextName,c(e);f&&each(s,function(e){l(e,{},{})}),o&&!t||!u||!isBrowser&&!isWebWorker||x||(x=setTimeout(function(){x=0,p()},50)),y=!1}}function h(e){hasProp(M,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,n,i){e.detachEvent&&!isOpera?i&&e.detachEvent(i,t):e.removeEventListener(n,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,E.onScriptLoad,"load","onreadystatechange"),m(t,E.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function v(){var e;for(f();q.length;){if(e=q.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var y,b,E,S,x,w={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},C={},k={},O={},q=[],M={},A={},V={},j=1,I=1;return S={require:function(e){return e.require?e.require:e.require=E.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?M[e.map.id]=e.exports:e.exports=M[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(w.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},b=function(e){this.events=getOwn(O,e.id)||{},this.map=e,this.shim=getOwn(w.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,n,i){i=i||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,E.startTime=(new Date).getTime();var e=this.map;return this.shim?void E.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;A[e]||(A[e]=!0,E.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id,i=this.depExports,r=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{r=E.execCb(n,o,i,r)}catch(a){e=a}else r=E.execCb(n,o,i,r);if(this.map.isDefine&&void 0===r&&(t=this.module,t?r=t.exports:this.usingExports&&(r=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else r=o;this.exports=r,this.map.isDefine&&!this.ignore&&(M[n]=r,req.onResourceLoad&&req.onResourceLoad(E,this.map,this.depMaps)),d(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=a(e.prefix);this.depMaps.push(i),u(i,"defined",bind(this,function(i){var r,o,f,l=getOwn(V,this.map.id),p=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=E.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(i.normalize&&(p=i.normalize(p,function(e){return n(e,h,!0)})||""),o=a(e.prefix+"!"+p,this.map.parentMap),u(o,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),f=getOwn(C,o.id),void(f&&(this.depMaps.push(o),this.events.error&&f.on("error",bind(this,function(e){this.emit("error",e)})),f.enable()))):l?(this.map.url=E.nameToUrl(l),void this.load()):(r=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),r.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(C,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&d(e.map.id)}),c(e)}),r.fromText=bind(this,function(n,i){var o=e.name,u=a(o),f=useInteractive;i&&(n=i),f&&(useInteractive=!1),s(u),hasProp(w.config,t)&&(w.config[o]=w.config[t]);try{req.exec(n)}catch(d){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+d,d,[t]))}f&&(useInteractive=!0),this.depMaps.push(u),E.completeLoad(o),m([o],r)}),void i.load(e.name,m,r,w))})),E.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){k[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,i,r;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,r=getOwn(S,e.id))return void(this.depExports[t]=r(this));this.depCount+=1,u(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&u(e,"error",bind(this,this.errback))}n=e.id,i=C[n],hasProp(S,n)||!i||i.enabled||E.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(C,e.id);t&&!t.enabled&&E.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},E={config:w,contextName:e,registry:C,defined:M,urlFetched:A,defQueue:q,Module:b,makeModuleMap:a,nextTick:req.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=w.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(w[t]||(w[t]={}),mixin(w[t],e,!0,!0)):w[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(V[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,n){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=E.makeShimExports(e)),t[n]=e}),w.shim=t),e.packages&&each(e.packages,function(e){var t,n;e="string"==typeof e?{name:e}:e,n=e.name,t=e.location,t&&(w.paths[n]=e.location),w.pkgs[n]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(C,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t))}),(e.deps||e.callback)&&E.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,r){function o(n,i,u){var f,d,l;return r.enableBuildCallback&&i&&isFunction(i)&&(i.__requireJsBuild=!0),"string"==typeof n?isFunction(i)?c(makeError("requireargs","Invalid require call"),u):t&&hasProp(S,n)?S[n](C[t.id]):req.get?req.get(E,n,t,o):(d=a(n,t,!1,!0),f=d.id,hasProp(M,f)?M[f]:c(makeError("notloaded",'Module name "'+f+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(v(),E.nextTick(function(){v(),l=s(a(null,t)),l.skipMap=r.skipMap,l.init(n,i,u,{enabled:!0}),p()}),o)}return r=r||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var i,r=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return-1!==r&&(!a||r>1)&&(i=e.substring(r,e.length),e=e.substring(0,r)),E.nameToUrl(n(e,t&&t.id,!0),i,!0)},defined:function(e){return hasProp(M,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(M,e)||hasProp(C,e)}}),t||(o.undef=function(e){f();var n=a(e,t,!0),r=getOwn(C,e);i(e),delete M[e],delete A[n.url],delete O[e],eachReverse(q,function(t,n){t[0]===e&&q.splice(n,1)}),r&&(r.events.defined&&(O[e]=r.events),d(e))}),o},enable:function(e){var t=getOwn(C,e.id);t&&s(e).enable()},completeLoad:function(e){var t,n,i,o=getOwn(w.shim,e)||{},a=o.exports;for(f();q.length;){if(n=q.shift(),null===n[0]){if(n[0]=e,t)break;t=!0}else n[0]===e&&(t=!0);h(n)}if(i=getOwn(C,e),!t&&!hasProp(M,e)&&i&&!i.inited){if(!(!w.enforceDefine||a&&getGlobal(a)))return r(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,o.deps||[],o.exportsFn])}p()},nameToUrl:function(e,t,n){var i,r,o,a,s,u,c,f=getOwn(w.pkgs,e);if(f&&(e=f),c=getOwn(V,e))return E.nameToUrl(c,t,n);if(req.jsExtRegExp.test(e))s=e+(t||"");else{for(i=w.paths,r=e.split("/"),o=r.length;o>0;o-=1)if(a=r.slice(0,o).join("/"),u=getOwn(i,a)){isArray(u)&&(u=u[0]),r.splice(0,o,u);break}s=r.join("/"),s+=t||(/^data\:|\?/.test(s)||n?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":w.baseUrl)+s}return w.urlArgs?s+((-1===s.indexOf("?")?"?":"&")+w.urlArgs):s},load:function(e,t){req.load(E,e,t)},execCb:function(e,t,n,i){return t.apply(i,n)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);E.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);return r(t.id)?void 0:c(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},E.require=E.makeRequire(),E}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.14",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,n,i){var r,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=n,n=i):e=[]),o&&o.context&&(a=o.context),r=getOwn(contexts,a),r||(r=contexts[a]=req.s.newContext(a)),o&&r.configure(o),r.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e){var t=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return t.type=e.scriptType||"text/javascript",t.charset="utf-8",t.async=!0,t},req.load=function(e,t,n){var i,r=e&&e.config||{};if(isBrowser)return i=req.createNode(r,t,n),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||isOpera?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=n,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;if(isWebWorker)try{importScripts(n),e.completeLoad(t)}catch(o){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,o,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,t,n){var i,r;"string"!=typeof e&&(n=t,t=e,e=null),isArray(t)||(n=t,t=null),!t&&isFunction(n)&&(t=[],n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(i=currentlyAddingScript||getInteractiveScript(),i&&(e||(e=i.getAttribute("data-requiremodule")),r=contexts[i.getAttribute("data-requirecontext")])),(r?r.defQueue:globalDefQueue).push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),define("requireJs",function(){}),define("requireDomReady",[],function(){"use strict";function e(e){var t;for(t=0;t<e.length;t+=1)e[t](c)}function t(){var t=f;u&&t.length&&(f=[],e(t))}function n(){u||(u=!0,a&&clearInterval(a),t())}function i(e){return u?e(c):f.push(e),i}var r,o,a,s="undefined"!=typeof window&&window.document,u=!s,c=s?document:null,f=[];if(s){if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1);else if(window.attachEvent){window.attachEvent("onload",n),o=document.createElement("div");try{r=null===window.frameElement}catch(d){}o.doScroll&&r&&window.external&&(a=setInterval(function(){try{o.doScroll(),n()}catch(e){}},30))}"complete"===document.readyState&&n()}return i.version="2.0.1",i.load=function(e,t,n,r){r.isBuild?n(null):i(n)},i}),define("core/adkitAPI",[],function(){var e=!1,t=null;return adkit.notifyReady=function(n){e=!0,t=n;var i=document.createEvent("HTMLEvents");i.initEvent("adkit-ready",!1,!1),window.dispatchEvent(i)},adkit.onReady=function(t){e?t():window.addEventListener("adkit-ready",t)},adkit.setCurrentContainer=function(e){t&&t.setCurrentContainer(e)},adkit.addItem=function(e,n){t&&t.addItem(e,n)},adkit.loadComponents=function(e,n){t&&t.loadComponents(e,n)},adkit.getServingParams=function(){var e=null;return t&&(e=t.getServingParams()),e},adkit.getAdInfo=function(){var e=null;return t&&(e=t.getAdInfo()),e},adkit.getSVData=function(e){var n=null;return t&&(n=t.getSVData(e)),n},adkit.clickedVersion=function(e,n){t&&t.clickedVersion(e,n)},adkit.getVersions=function(){t&&t.getVersions.apply(this,arguments)},adkit.getVersionCount=function(){var e=null;return t&&(e=t.getVersionCount()),e},adkit.getMinVersions=function(){var e=null;return t&&(e=t.getMinVersions()),e},adkit.getVersionDataByKey=function(e,n,i){t&&t.getVersionDataByKey(e,n,i)},adkit.getComponentsByType=function(e){return t?t.getComponentsByType(e):void 0},adkit}),define("core/infra/subject",[],function(){var e=function(){this.eventCBMap={}};return e.prototype.registerForEvent=function(e,t,n){"function"==typeof n&&"string"==typeof e&&"number"==typeof t&&(-1===t||t>0)&&(this.eventCBMap[e]||(this.eventCBMap[e]=[]),this.eventCBMap[e].push({cb:n,times:t}))},e.prototype.dispatchEvent=function(e){if("string"==typeof e&&this.eventCBMap[e]&&this.eventCBMap[e]){var t=this.eventCBMap[e];for(var n in t)t[n].cb(),t[n].times>0&&0===--t[n].times&&t.slice(parseInt(n),1)}},e}),define("core/logger",[],function(){var e=0,t=!1,n=function(n){t&&(n+=" "+i()),0==e&&!window.console},i=function(){var e=new Date,t=e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+":"+e.getMilliseconds();return t};return{debugLevel:e,addTimeStamp:t,log:n}}),define("core/eb",["core/infra/subject","core/logger"],function(e,t){var n="undefined"!=typeof EB&&EB?EB:null,i=!1,r=null,o=new e,a=function(e){"undefined"==typeof EBModulesToLoad&&(EBModulesToLoad=[]),e.usingVideo&&-1===EBModulesToLoad.indexOf("Video")&&EBModulesToLoad.push("Video"),e.usingSV&&-1===EBModulesToLoad.indexOf("SV")&&EBModulesToLoad.push("SV"),e.usingSVCatalog&&-1===EBModulesToLoad.indexOf("SVCAT")&&EBModulesToLoad.push("SVCAT")},s=function(e){i=!0,r=e,o.dispatchEvent("ready")},u=function(e){i?e():o.registerForEvent("ready",1,e)},c=function(){return r},f=function(e){n||(a(e),require(["client/EBLoader"],function(){n=EB,n.notifyCreativeWhenReady?n.notifyCreativeWhenReady(s):n.isInitialized()?s():n.addEventListener(EBG.EventName.EB_INITIALIZED,s)}))};return t.log("eb module loaded"),{init:f,onReady:u,getServingParams:c}}),define("core/adBuilder",[],function(){var e=null,t=null,n=null,i=function(e,i){t&&t.addItem(e,n,i)},r=function(i){t&&(e.items.length>0?t.addItems(e.items,n,i):i())},o=function(i,r,o){e=i,t=r,n=o},a=function(t){e&&r(t)};return{init:o,build:a,addItem:i}}),define("core/consts",[],function(){return{typePrefix:"adkit-"}}),define("core/utils/domUtils",[],function(){var e=document.createElement("div"),t=document.documentElement,n=function(e){return document.createElement(e)},i=function(e,t){var n=null;if(e&&t)for(var i=e.getElementsByTagName("*"),r=i.length,o=0;r>o;o++)if(i[o].getAttribute(t.attribute)===t.value){n=i[o];break}return n},r=function(e,t){var n=null;return n=t?i(t,{attribute:"id",value:e}):document.getElementById(e)},o=function(e,t){e&&t&&e.appendChild(t)},a=function(e){e&&(e.innerHTML="")},s=function(e){var t=r(e);a(t)},u=function(e,t){e&&t&&(e.innerHTML=t)},c=function(e,t){e&&t&&(e.textContent=t)},f=function(e,t){e&&t&&(e.id=t)},d=function(e){e&&(e.style.visibility="hidden")},l=function(e){e&&(e.style.visibility="visible")},p=function(e){return e?e.clientWidth:void 0},h=function(e){return e?e.clientHeight:void 0},m=function(e){return e?e.offsetWidth:void 0},g=function(e){return e?e.offsetHeight:void 0},v=function(e,t){if(e&&t){var n=window.getComputedStyle(e);return n.getPropertyValue(t)}},y=function(e,t){return e&&t?e[t]:void 0},b=function(e,t){if(e&&t)for(var n in t)e.style[n]=t[n]},E=function(e,t){if(e&&t)if("string"==typeof t)e.className=e.className?e.className+" "+t:t;else if(t instanceof Array)for(var n in t)e.className=e.className?e.className+" "+t[n]:t[n]},S=function(e,t){if(e&&t)if(e.classList)e.classList.remove(t);else if(e.className){var n=e.className.split(" ");n.splice(n.indexOf(t),1),e.className=n.join(" ")}},x=function(e,t){e&&t&&(e.className="",E(e,t))},w=function(e,t){if(e&&t)for(var n in t)e[n]=t[n]},C=function(e){var t=0,n=0;return n=e.offsetLeft,t=e.offsetTop,{top:t,left:n}},k=function(e,t,n){e&&t&&n&&e.addEventListener&&e.addEventListener(t,n)},O=function(e,t,n){t.forEach(function(t){k(e,t,n)})},q=function(e){return e?"hidden"!==e.style.visibility:void 0},M=function(e,t,n){e&&t&&n&&(e.style[t]=n)},A=function(e,t){if(e&&t)for(var n in t)e.setAttribute(n,t[n])},V=function(e,t,n){t.insertBefore(e,n)},j=function(e){return I(e)[0]},I=function(e){return document.getElementsByTagName(e)},B=function(e){var t=j("head");o(t,e)},T=function(e){return e in t.style},D=function(t,n,i){return e.style[t]=n,"undefined"==typeof i&&(i=n),e.style[t].indexOf(i)>-1},P=function(e){return document.createTextNode(e)},L=function(e,t){var n=null;return e&&(n=e.cloneNode(t)),n},R=function(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!1,!1),e.dispatchEvent(n)};return{createElement:n,getElementById:r,insertElementIntoContainer:o,clearElementContent:a,clearElementContentById:s,setElementHtmlContent:u,setElementTextContent:c,setElementId:f,hideElement:d,showElement:l,getElementWidth:p,getElementHeight:h,getElementContentWidth:m,getElementContentHeight:g,getCssProperty:v,applyStyle:b,addClass:E,removeClass:S,applyElementProperties:w,getOffsetSum:C,bindEvent:k,isVisible:q,setCssProperty:M,setClass:x,bindEvents:O,applyElementAttributes:A,insertElementBefore:V,getElementByTagName:j,getElementsByTagName:I,insertElementToHead:B,isStylePropertySupported:T,isStyleValueSupported:D,dispatchEvent:R,createTextNode:P,cloneElement:L,getElementProperty:y}}),define("core/compManager",["core/consts","core/utils/domUtils","core/logger"],function(e,t){var n={},i=null,r={},o=function(){i=t.getElementById("adkit-container")||t.getElementsByTagName("body")[0]},a=function(t){var n=null;if(t&&"string"==typeof t)if(0===t.indexOf(e.typePrefix)){var i=t.substring(e.typePrefix.length);n="comp/"+i+"/"+i}else n=t;return n},s=function(e,t){require([e],function(i){n[e]=i,t(i)},function(){t(null)})},u=function(e){var t=[];for(var i in e){var r=a(e[i]);r&&null==n[r]&&-1==t.indexOf(r)&&t.push(r)}return t},c=function(e,t){var i=u(e);i&&i.length?require(i,function(){for(var e in i)n[i[e]]=arguments[e];t()}):t()},f=function(e,t){var i=a(e);if(i){var r=n[i];r?t(r):s(i,t)}},d=function(e){var n=t.getElementById(e.id);return n||(n=t.createElement("div"),t.setElementId(n,e.id),i.appendChild(n)),n},l=function(e,t,n){if(e){var i=d(e);p(i,e,t,function(e){n&&n(e)})}},p=function(e,t,n,i){f(t.type,function(o){if(o){var a=new o({div:e,item:t,dataObjects:n});a.draw(),t.type in r||(r[t.type]=[]),r[t.type].push(a)}i(o)})},h=function(e,t,n){var i=0,r=e.length;e.forEach(function(e){l(e,t,function(){++i===r&&n()})})},m=function(e){i=t.getElementById(e)},g=function(e){return r[e]};return{init:o,addItem:l,addItems:h,createItem:p,loadComponents:c,setCurrentContainer:m,getComponentsByType:g}}),define("core/data/dataObjectList",[],function(){function e(){this.dataObjectsMap={},this.dataObjectsArray=[]}return e.prototype.addDataObject=function(e){if(e){var t=this.dataObjectsMap[e.getSignature()];null!=t?this.dataObjectsArray[t]=e:(this.dataObjectsArray.push(e),this.dataObjectsMap[e.getSignature()]=this.dataObjectsArray.length-1)}},e.prototype.clone=function(){var t=new e;return this.dataObjectsArray.forEach(function(e){t.addDataObject(e)}),t},e.prototype.getDataObjectBySignature=function(e){return this.dataObjectsArray[this.dataObjects[e]]},e.prototype.some=function(e){this.dataObjectsArray.some(e)},e}),define("core/adManager",["core/eb","core/adBuilder","core/compManager","core/data/dataObjectList"],function(e,t,n,i){var r=null,o=null,a=null,s=new i,u=function(e){var t=[],n="core/svManager",i="core/svCatalogManager";r.usingSV&&t.push(n),r.usingSVCatalog&&t.push(i);var u=t.length;return 0==t.length?void e():void require(t,function(){for(var i in arguments)t[i]==n?(o=arguments[i],o.init(r.svSchema),o.onReady(function(){var t=o.getDataObject();s.addDataObject(t),0==--u&&e()})):(a=arguments[i],a.init(r.svCatalogSchema),a.onReady(function(){0==--u&&e()}))})},c=function(t,i){r=t,e.init({usingSV:r.usingSV,usingSVCatalog:r.usingSVCatalog,usingVideo:r.usingVideo}),e.onReady(function(){u(function(){n.init(),f(i)})})},f=function(e){t.init(r,n,s),t.build(e)},d=function(){return r},l=function(e){return o?o.getSVData(e):null},p=function(e,t,n){a&&a.getVersionDataByKey(e,t,n)},h=function(){return a?a.getVersionCount():null},m=function(){return a?a.getMinVersions():null},g=function(){a&&a.getVersions.apply(this,arguments)},v=function(e,t){a&&a.clickedVersion(e,t)};return{init:c,addItem:t.addItem,getAdInfo:d,getSVData:l,getVersionDataByKey:p,getVersionCount:h,getMinVersions:m,getVersions:g,clickedVersion:v,setCurrentContainer:n.setCurrentContainer,loadComponents:n.loadComponents,getServingParams:e.getServingParams,getComponentsByType:n.getComponentsByType}}),define("core/localConfig",["config"],function(e){var t={};e&&(t=e);var n=function(){return t};return{getConfig:n}}),define("core/adkitValidator",["core/logger"],function(e){function t(){}t.prototype.validateConfig=function(t){var n=!0;if(t.ITEMS&&t.ITEMS instanceof Array&&t.ITEMS.length)for(i in t.ITEMS)t.ITEMS[i].id&&t.ITEMS[i].type||(n=!1);return e.log("validator module | isValid (config) = "+n),n},e.log("validator module loaded");var n=new t;return n}),define("core/configManager",["core/localConfig","core/adkitValidator","core/logger"],function(e,t,n){var i=function(e){e.ITEMS&&e.ITEMS instanceof Array&&e.ITEMS.length&&Array.prototype.push.apply(p.ITEMS,e.ITEMS)},r=function(e){if(e.SV&&e.SV instanceof Object&&e.SV.svData instanceof Array&&e.SV.svData.length)for(var t in e.SV.svData){var n=e.SV.svData[t];n instanceof Object&&"string"==typeof n.svKey&&(p.SV.svData[n.svKey.toLowerCase()]=n)}},o=function(e){if(e.SVCatalog&&e.SVCatalog instanceof Object&&e.SVCatalog.svData instanceof Array&&e.SVCatalog.svData.length){p.SVCatalog.minVersions=e.SVCatalog.minVersions,p.SVCatalog.maxVersions=e.SVCatalog.maxVersions;for(var t in e.SVCatalog.svData){var n=e.SVCatalog.svData[t];n instanceof Object&&"string"==typeof n.svCatKey&&(p.SVCatalog.svData[n.svCatKey.toLowerCase()]=n)}}},a=function(e){if(e.AdditionalAssets&&e.AdditionalAssets instanceof Array&&e.AdditionalAssets.length)for(var t in e.AdditionalAssets){var n=e.AdditionalAssets[t];n instanceof Object&&n.OrdinalNumber&&(p.AdditionalAssets[n.OrdinalNumber]=n)}},s=function(e){e instanceof Object&&(i(e),r(e),o(e),a(e))},u=function(){var i=e.getConfig();t.validateConfig(i)?s(i):n.log("config is not valid")},c=function(){return p.ITEMS},f=function(){return p.SV},d=function(){return p.SVCatalog},l=function(){return p.AdditionalAssets},p={ITEMS:[],SV:{svData:{}},SVCatalog:{svData:{}},AdditionalAssets:{}};return{init:u,getItems:c,getSV:f,getSVCatalog:d,getAdditionalAssets:l}}),define("core/adInfo",[],function(){return{usingVideo:!1,usingSV:!1,usingSVCatalog:!1,items:[],svSchema:{},svCatalogSchema:{},additionalAssets:{}}}),define("core/adInfoBuilder",["core/configManager","core/adInfo"],function(e,t){_adInfo=t;var n=function(){return _adInfo},i=function(){var t=!1,n=e.getSV().svData;for(var i in n){t=!0;break}return t},r=function(){var t=!1,n=e.getSVCatalog().svData;for(var i in n){t=!0;break}return t},o=function(e){var t=!1;if("adkit-video"===e.type||"adkit-youtube"===e.type)t=!0;else for(var n in e)if(e[n]instanceof Object&&o(e[n])){t=!0;break}return t},a=function(e){var t=!1;for(var n in e)if(o(e[n])){t=!0;break}return t},s=function(){e.init(),_adInfo.items=e.getItems(),_adInfo.usingSV=i(),_adInfo.usingSVCatalog=r(),_adInfo.svSchema=e.getSV(),_adInfo.svCatalogSchema=e.getSVCatalog(),_adInfo.additionalAssets=e.getAdditionalAssets(),_adInfo.usingVideo=a(_adInfo.items)};return{init:s,getAdInfo:n}}),define("core/main",["requireDomReady","core/adkitAPI","core/adManager","core/adInfoBuilder","core/logger"],function(e,t,n,i,r){var o=function(e){t.notifyReady(e),r.log("init external interface")};!function(){e(function(){i.init(),n.init(i.getAdInfo(),function(){o(n)})})}()}),function(){var e="/",t=function(e){return e.replace(/\/+$/,"")},n=function(){var e=null,t=null;if(document.currentScript)e=document.currentScript;else{var n=document.getElementsByTagName("script");for(var i in n){var r=n[i];if(r.src){if(-1!==r.src.search(/adkit\/\d_\d_\d_\d\/adkit.js/)){e=r;break}-1!==r.src.search(/\/adkit.js/)&&(t=r)}}!e&&t&&(e=t)}return e},i=function(){if(!adkit.environment){var n=window.location.pathname;adkit.environment={paths:{folderRoot:window.location.protocol+"//"+window.location.host+t(n.substring(0,n.lastIndexOf(e)))}}}},r=function(){return f?f:t(adkit.environment.paths.folderRoot)+"/"+a},o=function(){return"function"==typeof require};i();var a="config",s=n(),u=s.getAttribute("adkit-mode"),c=u?"serving"===u:!0,f=s.getAttribute("adkit-config"),d=r(),l=t(s.src.substring(0,s.src.lastIndexOf(e))+"/"),p="contrib/requirejs-domready/domReady",h=l+"/contrib/requirejs/require.js",m=c?t(adkit.environment.paths.nonCachedScript):"client",g=[d,a],v="contrib/require-css/css";if(o())require.config({baseUrl:l,paths:{requireDomReady:p,client:m,config:g,requireCss:v}}),require(["core/main"]);else{require={baseUrl:l,paths:{requireDomReady:p,client:m,config:g,requireCss:v},deps:["core/main"]};var y=document.createElement("script");y.type="text/javascript",y.src=h,s.parentNode.appendChild(y)}}(),define("adkit",function(){}),define("core/utils/stringUtils",[],function(){var e=document.createElement("div"),t=function(e){return"string"==typeof e?e.replace(/^\s+|\s+$/g,""):e},n=function(t){return e.innerHTML=t,e.textContent},i=function(t){return e.textContent=t,e.innerHTML};return{trim:t,htmlDecode:n,htmlEncode:i}}),define("core/utils/urlUtils",[],function(){var e=function(e,t){return e.replace(/^\w+:\/\//,t+"://")
},t=function(t){var n=window.location.protocol.slice(0,-1);return"http"===n||"https"===n?e(t,n):t},n=function(e){return 0==e.search(/^https?:\/\//)},i=function(e){if(e){var t=e.lastIndexOf(".");if(t>0){var n=e.substr(t);return n=n.toLowerCase()}}},r=function(e){return e&&0!=e.indexOf("http")?"http://"+e:e},o=function(e){return e?encodeURI(e):e};return{hasHttpProtocol:n,changeProtocol:e,changeToPageProtocol:t,getExtension:i,fixURL:r,escapeUrl:o}}),define("core/assetsManager",["core/logger","core/utils/stringUtils","core/utils/urlUtils"],function(e,t,n){var i=function(e){var n;if("schema"in e&&"src"in e)switch(e.schema){case"ordinal":n=o(e.src);break;case"url":n=s(e.src);break;case"workspace":n=r(t.trim(e.src))}return n},r=function(e){var t=EB.getAssetUrl(e,"");return t===e&&(t=EB.getAssetUrl("assets/"+e,"")),t},o=function(e){return EB.getAssetUrl("",e)},a=function(e){var i,a=t.trim(e);if(""===a)i=null;else{var u=parseInt(a);i=u==a?o(u):n.hasHttpProtocol(a)?s(a):r(a)}return i},s=function(e){return n.changeToPageProtocol(t.trim(e))},u=function(e){var t,n=typeof e;switch(n){case"number":t=o(e);break;case"object":t=i(e);break;case"string":t=a(e)}return t},c=function(e){var t=[];for(var n in e)t.push(u(e[n]));return t};return{parseAsset:u,parseAssets:c}}),define("core/infra/types",["core/assetsManager","core/utils/urlUtils"],function(e,t){var n=document.createElement("div"),i=function(e){return n.style.top=e,n.style.top===e},r=function(e){var t=null;return i(e)?t=e:i(e+"px")&&(t=e+"px"),t};return{"int":{parse:function(e){var t,n=parseInt(e);return n==e&&(t=n),t}},"float":{parse:function(e){var t,n=parseFloat(e);return n==e&&(t=n),t}},cssTop:{parse:function(e){return r(e)}},cssLeft:{parse:function(e){return r(e)}},cssWidth:{parse:function(e){return r(e)}},cssHeight:{parse:function(e){return r(e)}},bool:{parse:function(e){var t=null;if("boolean"==typeof e)t=e;else if("string"==typeof e){var n=e.toLowerCase();"true"===n?t=!0:"false"===n&&(t=!1)}return t}},assets:{parse:function(t){var n=null;return("string"==typeof t||"number"==typeof t||t instanceof Object&&!(t instanceof Array))&&(t=[t]),t instanceof Array&&(n=e.parseAssets(t)),n}},asset:{parse:function(t){var n=null;return("string"==typeof t||"number"==typeof t||t instanceof Object)&&(n=e.parseAsset(t)),n}},array:{parse:function(e){var t=null;return t=e instanceof Array?e:[]}},url:{parse:function(e){var n=null;return"string"==typeof e&&(n=t.fixURL(e)),n}}}}),define("core/utils/objectUtils",[],function(){var e=function(e){var t=null;try{t=JSON.parse(JSON.stringify(e))}catch(n){}return t},t=function(e){if(e)for(var t in e)null==e[t]&&delete e[t]},n=function(e){var t=null;if(e){t={};for(var i=Object.keys(e),r=i.length;r--;){var o=i[r];t[o.toLowerCase()]=t[o]instanceof Object?n(e[o],!0):e[o]}}return t};return{copyObject:e,removeUndefinedProperties:t,lowerCaseProperties:n}}),define("comp/baseComp",["core/infra/types","core/utils/objectUtils","core/logger"],function(e,t){function n(e){e&&(this.item=t.copyObject(e.item),this.dataObjects=e.dataObjects,this.div=e.div,this.normalize())}n.prototype.internalDraw=function(){"position"in this.item&&(this.div.style.position=this.item.position),"width"in this.item&&(this.div.style.width=this.item.width),"height"in this.item&&(this.div.style.height=this.item.height),"top"in this.item&&(this.div.style.top=this.item.top),"left"in this.item&&(this.div.style.left=this.item.left),"zIndex"in this.item&&(this.div.style.zIndex=this.item.zIndex)},n.prototype.getVariableData=function(e){var t=null,n=this;return e&&this.dataObjects.some(function(i){var r=i.getSignature()+"Key";return r in e?(t=n.getDataValue(i.getDataByKey(e[r])),!0):void 0}),t},n.prototype.convertFromPrevFormat=function(){if(this.item.params instanceof Object){for(var e in this.item.params)this.item[e]=this.item.params[e];delete this.item.params}},n.prototype.updateVariableData=function(e,t,n){var i=this.getVariableData(n);null!=i&&(e[t]=i)},n.prototype.getDataValue=function(e){var t=e instanceof Object?e.value:e;return"string"==typeof t||"number"==typeof t?t:null},n.prototype.normalizeDefaultProperty=function(){var e=this.getDefaultProperty();e&&this.updateVariableData(this.item,e,this.item)},n.prototype.normalizeProperties=function(){var e=this.getInputSchema();for(var t in e)"adkitComp"!==e[t]&&t in this.item&&(this.item[t]instanceof Object&&!(this.item[t]instanceof Array)&&this.updateVariableData(this.item,t,this.item[t]),this.item[t]=i(this.item[t],e[t]),null==this.item[t]&&delete this.item[t])},n.prototype.normalize=function(){this.convertFromPrevFormat(),this.normalizeDefaultProperty(),this.normalizeProperties()},n.prototype.draw=function(){this.div&&this.internalDraw()},n.prototype.getDefaultProperty=function(){return null},n.prototype.getInputSchema=function(){return n.inputSchema},n.inputSchema={top:"cssTop",left:"cssLeft",width:"cssWidth",height:"cssHeight",position:null,zIndex:null};var i=function(t,n){var r=t;if(t&&n)if(n in e)r=e[n].parse(t,n);else if(t instanceof Object&&n instanceof Object){var o=!0;t instanceof Array&&(n instanceof Array||(o=!1));for(var a in t)r[a]=o?i(t[a],n[a]):i(t[a],n)}return r};return n}),define("comp/graphicComp",["comp/baseComp","core/utils/objectUtils","core/logger"],function(e,t){function n(t){e.call(this,t)}return n.prototype=new e,n.prototype.internalDraw=function(){e.prototype.internalDraw.call(this),this.div.style.fontFamily="Arial,Helvetica,sans-serif","visible"in this.item&&(this.div.style.visibility=this.item.visible?"visible":"hidden"),"opacity"in this.item&&(this.div.style.opacity=this.item.opacity),"layout"in this.item&&(this.div.style.display=this.item.layout?"block":"none"),"bgColor"in this.item&&(this.div.style.backgroundColor=this.item.bgColor);var t="hidden";"overflow"in this.item&&(t=this.item.overflow),this.div.style.overflow=t;var n="normal";"wordBreak"in this.item&&(n=this.item.wordBreak),this.div.style.wordBreak=n},n.prototype.getInputSchema=function(){return n.inputSchema},n.inputSchema=t.copyObject(e.inputSchema),n.inputSchema.visible="bool",n.inputSchema.layout="bool",n.inputSchema.opacity=null,n.inputSchema.bgColor=null,n.inputSchema.overflow=null,n.inputSchema.wordBreak=null,n});