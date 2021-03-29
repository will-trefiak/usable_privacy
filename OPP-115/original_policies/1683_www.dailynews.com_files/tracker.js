"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,a,i,c=gap,f=e[t];switch(f&&"object"==typeof f&&"function"==typeof f.toJSON&&(f=f.toJSON(t)),"function"==typeof rep&&(f=rep.call(e,t,f)),typeof f){case"string":return quote(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":return String(f);case"object":if(!f)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(f)){for(a=f.length,r=0;a>r;r+=1)i[r]=str(r,f)||"null";return o=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+c+"]":"["+i.join(",")+"]",gap=c,o}if(rep&&"object"==typeof rep)for(a=rep.length,r=0;a>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,f),o&&i.push(quote(n)+(gap?": ":":")+o));else for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(o=str(n,f),o&&i.push(quote(n)+(gap?": ":":")+o));return o=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+c+"}":"{"+i.join(",")+"}",gap=c,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),window.btoa||(window.btoa=function(t){for(var e,r,n,o,a,i,c,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=(String.fromCharCode,function(){try{document.createElement("$")}catch(t){return t}}()),p=0,s=t.length,l=Math.max,g="";s>p;){if(e=t.charCodeAt(p++)||0,r=t.charCodeAt(p++)||0,c=t.charCodeAt(p++)||0,l(e,r,c)>255)throw u;n=e>>2&63,o=(3&e)<<4|r>>4&15,a=(15&r)<<2|c>>6&3,i=63&c,r?c||(i=64):a=i=64,g+=f.charAt(n)+f.charAt(o)+f.charAt(a)+f.charAt(i)}return g});var Analytics=function(){var t={},e={};return t.config={analytics_host:"analytics.tout.com",protocol:"https:"===document.location.protocol?"https://":"http://"},tracker=function(){},tracker.prototype.track=function(){},t.trackWithImage=function(e){try{encodedPayload=window.btoa(unescape(encodeURIComponent(JSON.stringify(e)))),imagescript=document.createElement("script"),imagescript.type="text/javascript",imagescript.async=!0,imagescript.defer=!0,imagescript.src=t.config.protocol+t.config.analytics_host+"/events?payload="+encodedPayload;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(imagescript,r)}catch(n){console.log(n)}},t.getBrowser=function(){return navigator.userAgent},t.getOs=function(){return null},t.getReferer=function(){var t="";try{t=window.top.document.referrer}catch(e){if(window.parent)try{t=window.parent.document.referrer}catch(r){t=""}}return""===t&&(t=document.referer),t},t.getCurrentTime=function(){return Math.floor((new Date).getTime()/1e3)},t.register=function(t,r){e[t]=r},t.unregister=function(t){delete e[t]},t.callback=function(){},t.track=function(r,n,o){if(r){n=n||{},partner={},n.browser=t.getBrowser(),n.os=t.getOs(),n.referer=t.getReferer(),n.trigger=r,n.timestamp=t.getCurrentTime();for(key in e)"partner_id"===key||"token"===key?partner[key]=e[key]:n[key]=e[key];t.trackWithImage({event:n},partner,o)}},t};"undefined"!=typeof aq&&aq&&aq[0]&&"init"==aq[0][0]&&function(t){t.analytics=new Analytics,t.push=function(e){if(e)if("function"==typeof e)e();else if(e.constructor==Array){var r=t.analytics[e[0]];"function"==typeof r&&r.apply(t.analytics,e.slice(1))}};var e;for(e=1;e<t.length;e++)t.push(t[e]);t.length=0}(aq);