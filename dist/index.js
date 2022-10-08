/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={487:t=>{var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=e},12:t=>{var e,n;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var a=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?n.push(e.charAt(a>>>6*(3-o)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,a=0;r<t.length;a=++r%4)0!=a&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*a+8)-1)<<2*a|e.indexOf(t.charAt(r))>>>6-2*a);return n}},t.exports=n},738:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},568:(t,e,n)=>{var r,a,o,s,i;r=n(12),a=n(487).utf8,o=n(738),s=n(487).bin,(i=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):a.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var n=r.bytesToWords(t),c=8*t.length,u=1732584193,h=-271733879,p=-1732584194,f=271733878,l=0;l<n.length;l++)n[l]=16711935&(n[l]<<8|n[l]>>>24)|4278255360&(n[l]<<24|n[l]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var g=i._ff,d=i._gg,y=i._hh,w=i._ii;for(l=0;l<n.length;l+=16){var b=u,m=h,v=p,T=f;u=g(u,h,p,f,n[l+0],7,-680876936),f=g(f,u,h,p,n[l+1],12,-389564586),p=g(p,f,u,h,n[l+2],17,606105819),h=g(h,p,f,u,n[l+3],22,-1044525330),u=g(u,h,p,f,n[l+4],7,-176418897),f=g(f,u,h,p,n[l+5],12,1200080426),p=g(p,f,u,h,n[l+6],17,-1473231341),h=g(h,p,f,u,n[l+7],22,-45705983),u=g(u,h,p,f,n[l+8],7,1770035416),f=g(f,u,h,p,n[l+9],12,-1958414417),p=g(p,f,u,h,n[l+10],17,-42063),h=g(h,p,f,u,n[l+11],22,-1990404162),u=g(u,h,p,f,n[l+12],7,1804603682),f=g(f,u,h,p,n[l+13],12,-40341101),p=g(p,f,u,h,n[l+14],17,-1502002290),u=d(u,h=g(h,p,f,u,n[l+15],22,1236535329),p,f,n[l+1],5,-165796510),f=d(f,u,h,p,n[l+6],9,-1069501632),p=d(p,f,u,h,n[l+11],14,643717713),h=d(h,p,f,u,n[l+0],20,-373897302),u=d(u,h,p,f,n[l+5],5,-701558691),f=d(f,u,h,p,n[l+10],9,38016083),p=d(p,f,u,h,n[l+15],14,-660478335),h=d(h,p,f,u,n[l+4],20,-405537848),u=d(u,h,p,f,n[l+9],5,568446438),f=d(f,u,h,p,n[l+14],9,-1019803690),p=d(p,f,u,h,n[l+3],14,-187363961),h=d(h,p,f,u,n[l+8],20,1163531501),u=d(u,h,p,f,n[l+13],5,-1444681467),f=d(f,u,h,p,n[l+2],9,-51403784),p=d(p,f,u,h,n[l+7],14,1735328473),u=y(u,h=d(h,p,f,u,n[l+12],20,-1926607734),p,f,n[l+5],4,-378558),f=y(f,u,h,p,n[l+8],11,-2022574463),p=y(p,f,u,h,n[l+11],16,1839030562),h=y(h,p,f,u,n[l+14],23,-35309556),u=y(u,h,p,f,n[l+1],4,-1530992060),f=y(f,u,h,p,n[l+4],11,1272893353),p=y(p,f,u,h,n[l+7],16,-155497632),h=y(h,p,f,u,n[l+10],23,-1094730640),u=y(u,h,p,f,n[l+13],4,681279174),f=y(f,u,h,p,n[l+0],11,-358537222),p=y(p,f,u,h,n[l+3],16,-722521979),h=y(h,p,f,u,n[l+6],23,76029189),u=y(u,h,p,f,n[l+9],4,-640364487),f=y(f,u,h,p,n[l+12],11,-421815835),p=y(p,f,u,h,n[l+15],16,530742520),u=w(u,h=y(h,p,f,u,n[l+2],23,-995338651),p,f,n[l+0],6,-198630844),f=w(f,u,h,p,n[l+7],10,1126891415),p=w(p,f,u,h,n[l+14],15,-1416354905),h=w(h,p,f,u,n[l+5],21,-57434055),u=w(u,h,p,f,n[l+12],6,1700485571),f=w(f,u,h,p,n[l+3],10,-1894986606),p=w(p,f,u,h,n[l+10],15,-1051523),h=w(h,p,f,u,n[l+1],21,-2054922799),u=w(u,h,p,f,n[l+8],6,1873313359),f=w(f,u,h,p,n[l+15],10,-30611744),p=w(p,f,u,h,n[l+6],15,-1560198380),h=w(h,p,f,u,n[l+13],21,1309151649),u=w(u,h,p,f,n[l+4],6,-145523070),f=w(f,u,h,p,n[l+11],10,-1120210379),p=w(p,f,u,h,n[l+2],15,718787259),h=w(h,p,f,u,n[l+9],21,-343485551),u=u+b>>>0,h=h+m>>>0,p=p+v>>>0,f=f+T>>>0}return r.endian([u,h,p,f])})._ff=function(t,e,n,r,a,o,s){var i=t+(e&n|~e&r)+(a>>>0)+s;return(i<<o|i>>>32-o)+e},i._gg=function(t,e,n,r,a,o,s){var i=t+(e&r|n&~r)+(a>>>0)+s;return(i<<o|i>>>32-o)+e},i._hh=function(t,e,n,r,a,o,s){var i=t+(e^n^r)+(a>>>0)+s;return(i<<o|i>>>32-o)+e},i._ii=function(t,e,n,r,a,o,s){var i=t+(n^(e|~r))+(a>>>0)+s;return(i<<o|i>>>32-o)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(i(t,e));return e&&e.asBytes?n:e&&e.asString?s.bytesToString(n):r.bytesToHex(n)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){var e,n;switch(t){case"GITHUB_TOKEN":try{e=Deno.env.get(t)}catch(t){e=GITHUB_TOKEN}break;case"GITHUB_MAIN_REPO":try{1==(e=(n=Deno.env.get(t)).split(", ")).length&&(e=n.split(","))}catch(t){1==(e=(n=GITHUB_MAIN_REPO).split(", ")).length&&(e=n.split(","))}break;case"GITHUB_SUB_REPO":try{1==(e=(n=Deno.env.get(t)).split(", ")).length&&(e=n.split(","))}catch(t){1==(e=(n=GITHUB_SUB_REPO).split(", ")).length&&(e=n.split(","))}break;case"GITHUB_CONFIG_NAME":try{e=Deno.env.get(t)}catch(t){e=GITHUB_CONFIG_NAME}break;default:e=Deno.env.get(t)}return e}async function e(t,e){var n=t.username,r=t.repo,a=t.token,o=t.filename,s=t.branch;if(!(a&&o&&s&&n))return console.error("[Error] Please Check the Config. (token/filename/branch/username)"),!1;if(!e)return console.error("[Error] Please Check the key."),!1;let i=encodeURI(`https://api.github.com/repos/${n}/${r}/commits?sha=${s}&dt=${Math.floor(1e8*Math.random())}`),c=await fetch(i,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${a}`,"User-Agent":"ghKV Clinet"}}),u=await c.json();u=u[0].sha;let h=encodeURI(`https://raw.githubusercontent.com/${n}/${r}/${u}${o}?dt=${Math.floor(1e8*Math.random())}`);console.log(h);let p=await fetch(h,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${a}`}}),f=await p.text();return console.log(f),f=JSON.parse(f),1==e?f:f[e]}const r="function"==typeof btoa,a="function"==typeof Buffer,o=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=((t=>{let e={};t.forEach(((t,n)=>e[t]=n))})(s),String.fromCharCode.bind(String)),c=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_"))),u=r?t=>btoa(t):a?t=>Buffer.from(t,"binary").toString("base64"):t=>{let e,n,r,a,o="";const i=t.length%3;for(let i=0;i<t.length;){if((n=t.charCodeAt(i++))>255||(r=t.charCodeAt(i++))>255||(a=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=n<<16|r<<8|a,o+=s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}return i?o.slice(0,i-3)+"===".substring(i):o},h=a?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let n=0,r=t.length;n<r;n+=4096)e.push(i.apply(null,t.subarray(n,n+4096)));return u(e.join(""))},p=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?i(192|e>>>6)+i(128|63&e):i(224|e>>>12&15)+i(128|e>>>6&63)+i(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return i(240|e>>>18&7)+i(128|e>>>12&63)+i(128|e>>>6&63)+i(128|63&e)},f=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,l=a?t=>Buffer.from(t,"utf8").toString("base64"):o?t=>h(o.encode(t)):t=>u(t.replace(f,p)),g=(t,e=!1)=>e?c(l(t)):l(t);function d(t,e,n){return new Response(JSON.stringify({statusCode:t,statusInfo:e}),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},status:n||200})}var y=n(568),w=n.n(y);async function b(t,n){var r=await e(t,"user");return w()(r[0].username+r[0].password+`${new Date(Date.now()).getFullYear()}${new Date(Date.now()).getMonth()+1}`)==n}async function m(t,e){var n=`https://api.github.com/repos/${t.username}/${t.repo}/contents/${e}?ref=${t.branch}`;let r=await fetch(n,{headers:{Accept:"application/vnd.github.v3.raw",Authorization:`token ${t.token}`,"User-Agent":"ghKV Clinet"}}).then((t=>t.json()));var a={"/":[]};console.log("Start.."),console.info(r),console.info(n);for(let n=0;n<r.length;n++)if("dir"==r[n].type){console.log("Dir: "+r[n].name);var o=await m(t,e+r[n].name+"/");console.info(o),a[r[n].name+"/"]=o["/"]}else{console.log("File: "+r[n].name);var s={filename:r[n].name,filepath:r[n].path};a["/"].push(s)}return a}async function v(t,e,n,r){var a,o=e,s=t.username,i=t.repo,c=t.token,u=t.branch;let h=await fetch(`https://api.github.com/repos/${s}/${i}/contents/${o}?ref=${u}`,{method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+c}});var p;a=(await h.json()).sha,p=r?n:g(n);let f={body:JSON.stringify({branch:u,message:"Upload by ESHexoN.",content:p,sha:a}),method:"PUT",headers:{accept:"application/vnd.github.v3+json","content-type":"application/json;charset=UTF-8","user-agent":"ESHexoN Client",Authorization:"token "+c}},l=await fetch(`https://api.github.com/repos/${s}/${i}/contents/${o}?ref=${u}`,f);return console.info(`https://api.github.com/repos/${s}/${i}/contents/${o}?ref=${u}`),200==l.status||201==l.status||(console.log(l.status),!1)}async function T(t,e){var n,r=e,a=t.username,o=t.repo,s=t.token,i=t.branch;let c=await fetch(`https://api.github.com/repos/${a}/${o}/contents/${r}?ref=${i}`,{method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+s}});n=(await c.json()).sha;let u={body:JSON.stringify({branch:i,message:"Delete by ESHexoN.",sha:n}),method:"DELETE",headers:{accept:"application/vnd.github.v3+json","content-type":"application/json;charset=UTF-8","user-agent":"ESHexoN Client",Authorization:"token "+s}},h=await fetch(`https://api.github.com/repos/${a}/${o}/contents/${r}?ref=${i}`,u);return console.info(`https://api.github.com/repos/${a}/${o}/contents/${r}?ref=${i}`),200==h.status||201==h.status||(console.log(h.status),!1)}const _=["githubUploadToken","user"];var k;const $=async(t,n,r)=>{if(console.log("Get Config Status: "+r),1==r)return await e(t,n);for(k in console.log(_),_)if(console.log(_[k]),_[k]==n)return console.log("Catch!"),"NEED_TOKEN";var a=await e(t,n);if(1==n)for(let t=0;t<_.length;t++)delete a[_[t]];return a};addEventListener("fetch",(n=>{n.respondWith(async function(n){const r=n.url,a=new URL(r),o=(a.hostname,a.pathname),s=(Date.now(new Date),t("GITHUB_TOKEN")),i=t("GITHUB_MAIN_REPO")[0],c=t("GITHUB_MAIN_REPO")[1],u=t("GITHUB_SUB_REPO")[0],h=t("GITHUB_SUB_REPO")[1],p=t("GITHUB_CONFIG_NAME"),f={username:u.split("/")[0],repo:u.split("/")[1],token:s,filename:p,branch:h},l={username:i.split("/")[0],repo:i.split("/")[1],token:s,branch:c};if(o.startsWith("/api/reg")){if(_=await e(f,"user"))return d("403","已有注册账号，如需注册，请删除已有账号重试。");var y=await n.text();return y=JSON.parse(y),/^[a-z0-9_-]{3,15}$/.test(y.username)?await async function(t,n,r,a){var o=t.username,s=t.repo,i=t.token,c=t.filename,u=t.branch;let h=await fetch(`https://api.github.com/repos/${o}/${s}/contents/${c}?ref=${u}`,{method:"GET",headers:{"content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+i}}),p=(await h.json()).sha;var f;(f=await e(t,!0)).user=r,f=JSON.stringify(f);let l={body:JSON.stringify({branch:u,message:"Upload Database by ghKV.",content:g(f),sha:p}),method:"PUT",headers:{accept:"application/vnd.github.v3+json","content-type":"application/json;charset=UTF-8","user-agent":"ghKV Client",Authorization:"token "+i}},d=await fetch(`https://api.github.com/repos/${o}/${s}/contents${c}?ref=${u}`,l);return 200==d.status||201==d.status}(f,0,[{username:y.username,password:y.password}])?d("200","注册成功。"):d("500","注册失败。"):d("403","用户名或密码不符合要求。")}var _,k;return o.startsWith("/api/login")?(y=await n.text(),y=JSON.parse(y),(_=await e(f,"user"))&&_[0].username==y.username&&_[0].password==y.password?d("200",w()(_[0].username+_[0].password+`${new Date(Date.now()).getFullYear()}${new Date(Date.now()).getMonth()+1}`)):d("403","用户名或密码错误。")):o.startsWith("/api/check_token")?(y=JSON.parse(await n.text()).token,1==await b(f,y)?d("200","Token 有效。"):d("403","Token 无效。")):o.startsWith("/api/get_posts_list")?(y=JSON.parse(await n.text()).token,1==await b(f,y)?d("200",await async function(t){return JSON.stringify(await m(t,"source/_posts/"))}(l)):d("403","Token 无效。")):o.startsWith("/api/get_drafts_list")?(y=JSON.parse(await n.text()).token,1==await b(f,y)?d("200",await async function(t){return JSON.stringify(await m(t,"source/_drafts/"))}(l)):d("403","Token 无效。")):o.startsWith("/api/add_posts")?(y=JSON.parse(await n.text()),1==await b(f,y.token)?await v(l,"posts",y.filename,y.content,y.b64)?d("200","上传成功。"):d("500","上传失败。"):d("403","Token 无效。")):o.startsWith("/api/add_drafts")?(y=JSON.parse(await n.text()),1==await b(f,y.token)?await v(l,y.filename,y.content,y.b64)?d("200","上传成功。"):d("500","上传失败。"):d("403","Token 无效。")):o.startsWith("/api/delete_posts")||o.startsWith("/api/delete_drafts")?(y=JSON.parse(await n.text()),1==await b(f,y.token)?await T(l,y.filename)?d("200","删除成功。"):d("500","删除失败。"):d("403","Token 无效。")):o.startsWith("/api/edit_config")?(y=JSON.parse(await n.text()),1==await b(f,y.token)?await v(l,y.filename,y.content,y.b64)?d("200","修改成功。"):d("500","修改失败。"):d("403","Token 无效。")):o.startsWith("/api/get_config")?(y=JSON.parse(await n.text())).token&&1==await b(f,y.token)?d("200","object"!=typeof(k=await $(f,y.key,!0))?k:JSON.stringify(k)):d("403","object"!=typeof(k=await $(f,y.key,!1))?k:JSON.stringify(k)):o.startsWith("/api/set_config")?(y=JSON.parse(await n.text())).token&&1==await b(f,y.token)?(k=await $(f,y.key,!0))?d("200","修改成功。"):d("500","修改失败。"):d("403","Token 无效。"):new Response(JSON.stringify({main:i,mainbranch:c,sub:u,subbranch:h,config:p}))}(n.request))}))})()})();