(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{42:function(t,e,r){t.exports=r(46)},43:function(t,e){function r(t,e,r,a,n,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(a,n)}t.exports=function(t){return function(){var e=this,a=arguments;return new Promise((function(n,i){var s=t.apply(e,a);function o(t){r(s,n,i,o,c,"next",t)}function c(t){r(s,n,i,o,c,"throw",t)}o(void 0)}))}}},46:function(t,e,r){var a=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function o(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{o({},"")}catch(t){o=function(t,e,r){return t[e]=r}}function c(t,e,r,a){var n=e&&e.prototype instanceof h?e:h,i=Object.create(n.prototype),s=new $(a||[]);return i._invoke=function(t,e,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return x()}for(r.method=n,r.arg=i;;){var s=r.delegate;if(s){var o=b(s,r);if(o){if(o===u)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=l(t,e,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}(t,r,s),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function h(){}function d(){}function v(){}var f={};f[n]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(I([])));m&&m!==e&&r.call(m,n)&&(f=m);var _=v.prototype=h.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(e){o(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var a;this._invoke=function(n,i){function s(){return new e((function(a,s){!function a(n,i,s,o){var c=l(t[n],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,s,o)}),(function(t){a("throw",t,s,o)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,o)}))}o(c.arg)}(n,i,a,s)}))}return a=a?a.then(s,s):s()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,u;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function I(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=_.constructor=v,v.constructor=d,d.displayName=o(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,o(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var s=new y(c(e,r,a,n),i);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},g(_),o(_,s,"Generator"),_[n]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=I,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var o=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(o&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=a}catch(t){Function("r","regeneratorRuntime = r")(a)}},51:function(t,e,r){},66:function(t,e,r){"use strict";r(51)},73:function(t,e,r){"use strict";r.r(e);var a=r(42),n=r.n(a),i=r(43),s=r.n(i),o=r(2),c=r(3),l={data:function(){return{cheater:{originId:""},origins:[],games:[],timelineList:[],verify:{status:"1",checkbox:[],suggestion:""},spinShow:!0,idExist:!1,verifySpinShow:!1,reply:{cheaterId:"",userId:"",content:"",toFloor:"",toUserId:""},replySpinShow:!1,gameName:"",isCheaterExist:!0,replyModal:!1,cheatMethodsGlossary:c.a,updateUserInfospinShow:!1}},watch:{$route:"loadData"},created:function(){this.loadData()},updated:function(){new LazyLoad({})},methods:{loadData:function(){var t=this,e=this.$route.params.ouid;Object(o.b)({method:"get",url:"/cheaters/".concat(e)}).then((function(e){t.spinShow=!1;var r=e.data.data,a=r.cheater,n=r.games,i=r.origins,s=r.reports,o=r.verifies,l=r.confirms,u=r.replies;if(0===a.length)return t.isCheaterExist=!1,!1;t.isCheaterExist=!0,t.cheater=a[0],t.origins=_.sortBy(i,"createDatetime").reverse(),t.games=_.sortBy(n,"game"),s=_.each(s,(function(t,e,r){t.type="report"})),o=_.each(o,(function(t,e,r){t.type="verify"})),l=_.each(l,(function(t,e,r){t.type="confirm"})),u=_.each(u,(function(t,e,r){t.type="reply"})),s=_.each(s,(function(t){t.description=Object(c.k)(t.description)})),u=_.each(u,(function(t,e,r){t.content=Object(c.k)(t.content)}));var h=s.concat(o,l,u);h=_.sortBy(h,(function(t){return new Date(t.createDatetime).getTime()})),h=_.each(h,(function(t,e){t.floor=e+1})),t.timelineList=h}))},jumpToBookmark:function(t){var e=t.target.dataset.hash,r=document.querySelector(e),a=r.offsetParent.offsetTop+r.offsetParent.offsetParent.offsetTop+r.offsetParent.offsetParent.offsetParent.offsetTop-document.querySelector("header").offsetHeight;document.documentElement.scrollTop=a,r.setAttribute("style","background: rgba(255, 153, 1, 0.15)"),setTimeout((function(){r.setAttribute("style","transition: background 1s ease .5s;")}),100)},handleStatus:c.i,convertCheatMethods:c.e,doVerify:function(){var t=this;return s()(n.a.mark((function e(){var r,a,i,s,l,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.verify.status,a=t.verify.suggestion,i=t.verify.checkbox.join(","),s=t.cheater.originUserId,("1"!==r||""!==i)&&""!==a.trim()){e.next=7;break}return t.$Message.warning("请填写完整"),e.abrupt("return",!1);case 7:return t.verifySpinShow=!0,e.next=10,Object(o.b)({method:"post",url:"/cheaters/status",data:{originUserId:s}});case 10:if(l=e.sent,!(u=l.data).error){e.next=15;break}return t.$Message.error(u.msg),e.abrupt("return",!1);case 15:if(0!==u.error||"1"!==u.status){e.next=19;break}if(confirm("当前是 confirmed hacker 状态，你确定要处理成 ".concat(Object(c.i)(r)," 吗？"))){e.next=19;break}return t.verifySpinShow=!1,e.abrupt("return",!1);case 19:a=Object(c.h)(a),Object(o.b)({method:"post",url:"/cheaters/verify",data:{status:r,suggestion:a,cheatMethods:i,originUserId:s}}).then((function(e){t.verifySpinShow=!1;var r=e.data;if(0===e.data.error){t.verify.status="1",t.verify.suggestion="",t.verify.checkbox=[];var a=r.data,n=a.id,i=a.userId,s=a.createDatetime,o=a.status,l=a.suggestion,u=a.username,h=a.cheatMethods,d=a.privilege;t.cheater.status=o,t.timelineList.push({type:"verify",id:n,userId:i,createDatetime:Object(c.f)(s),status:"6"===o?"1":o,suggestion:l,cheatMethods:h,username:u,privilege:d}),t.$Message.success("提交成功")}else t.$Message.error("failed "+r.msg)}));case 21:case"end":return e.stop()}}),e)})))()},doConfirm:function(t){var e=this,r=t.target.dataset,a=r.userVerifyCheaterId,n=(r.userVerifyCheaterUsername,r.cheatMethods),i=this.$store.state.user.userId,s=this.$route.params.ouid;Object(o.b)({method:"post",url:"/cheaters/confirm",data:{userVerifyCheaterId:a,userId:i,originUserId:s,cheatMethods:n}}).then((function(t){var r=t.data;if(0===r.error){var s=r.data.createDatetime;e.cheater.status="1",e.timelineList.push({type:"confirm",userId:i,userVerifyCheaterId:a,createDatetime:Object(c.f)(s),cheatMethods:n,username:e.$store.state.user.username})}else e.$Message.warning(r.msg)}))},isSelf:function(t){var e=this.$store.state.user.userId;return parseInt(e)===parseInt(t)},handleReply:function(t){var e=t.target.dataset,r=e.floor,a=e.userId;this.reply.toFloor="undefined"===r?"":r,this.reply.toUserId="undefined"===a?"":a,this.replyModal=!0},cancelReply:function(){this.reply={}},doReply:function(){var t=this;this.replySpinShow=!0;var e=this.cheater.id,r=this.$store.state.user.userId,a=this.reply,n=a.toFloor,i=a.toUserId,s=this.cheater.originUserId,l=this.reply.content,u=void 0===l?"":l,h={cheaterId:e,userId:r,content:u=Object(c.h)(u),originUserId:s};n&&(h.toFloor=n),i&&(h.toUserId=i),Object(o.b)({method:"post",url:"/cheaters/reply",data:h}).then((function(e){t.replySpinShow=!1;var r=e.data;if(0===r.error){var a=r.data,n=a.createDatetime,i=a.content,s=a.status;t.$Message.success("回复成功"),t.cancelReply();var o=t.$store.state.user.username,l=t.$store.state.user.uId;t.timelineList.push({type:"reply",createDatetime:Object(c.f)(n),content:i,foo:o,fooUId:l,bar:"",barUId:""}),t.cheater.status=s}else t.$Message.error(r.msg)}))},handleCmdEnter:function(t,e){if((t.metaKey||t.ctrlKey)&&13==t.keyCode)switch(e){case"reply":this.doReply();break;case"verify":this.doVerify()}},updateCheaterInfo:function(t){var e=this;if(c.n.call(t.target,60),!Boolean(this.$store.state.user))return this.$Message.error("请登录"),!1;this.updateUserInfospinShow=!0;var r=this.cheater.originUserId;Object(o.b)({method:"post",url:"/cheaters/updateCheaterInfo",data:{originUserId:r}}).then((function(t){e.updateUserInfospinShow=!1;var r=t.data;if(0===r.error){var a=r.data.origin,n=a.cheaterGameName,i=a.originUserId,s=a.avatarLink;e.cheater.originId=n,e.cheater.originUserId=i,e.cheater.avatarLink=s,e.origins.unshift(r.data.origin),e.$Message.success("更新完成")}else e.$Message.error(r.msg)}))}},computed:{isVerified:function(){return this.verifies.length>0},isAdmin:function(){var t=this.$store.state.user,e=!!t&&"normal"!==t.userPrivilege;return Boolean(e)},isLogin:function(){return Boolean(this.$store.state.user)}}},u=(r(66),r(1)),h=Object(u.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[t.isCheaterExist?r("div",{staticStyle:{position:"relative"}},[r("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative"}},[r("span",{staticStyle:{"font-size":"1.6rem"}},[t._v("\n            "+t._s(t.cheater.originId)+"\n          ")]),t._v(" "),r("div",[r("Tag",{attrs:{color:"error"}},[t._v("\n              "+t._s(t.handleStatus(t.cheater.status,t.$i18n.locale))+"\n            ")]),t._v(" "),t.cheater.cheatMethods?r("Tag",{attrs:{color:"warning"}},[t._v("\n              "+t._s(t.convertCheatMethods(t.cheater.cheatMethods,t.$i18n.locale))+"\n            ")]):t._e()],1),t._v(" "),r("p",[r("span",[t._v("\n              "+t._s(t.$t("detail.info.viewTimes",{msg:"viewTimes"}))+"\n              "),r("span",{staticClass:"is-size-6"},[t._v(t._s(t.cheater.n||0))]),t._v("\n              次\n            ")]),t._v(" "),r("span",[t._v("\n                "+t._s(t.$t("detail.info.reply",{msg:"reply"}))+"\n                "),r("span",{staticClass:"is-size-6"},[t._v(t._s(t.cheater.commentsNum||0))]),t._v("\n                次\n            ")])]),t._v(" "),r("p",[r("span",[r("span",[t._v(t._s(t.$t("detail.info.firstReportTime",{msg:"firstReportTime"})))]),t._v(" "),r("span",{staticClass:"is-size-6"},[t.cheater.createDatetime?r("Time",{attrs:{time:t.cheater.createDatetime}}):t._e()],1)]),t._v(" "),r("span",[r("span",[t._v(t._s(t.$t("detail.info.recentUpdateTime",{msg:"recentUpdateTime"})))]),t._v(" "),r("span",{staticClass:"is-size-6"},[t.cheater.updateDatetime?r("Time",{attrs:{time:t.cheater.updateDatetime}}):t._e()],1)])]),t._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[t._v(t._s(t.$t("detail.info.reportedGames",{msg:"reportedGames"})))])]),t._v(" "),r("div",t._l(t.games,(function(e){return r("router-link",{key:e.game,attrs:{to:{name:"cheaters"}}},[t._v("\n                "+t._s(e.game)+"\n              ")])})),1)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.cheater.originId,expression:"cheater.originId"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[t._v(t._s(t.$t("detail.info.gameScores",{msg:"gameScores"})))])]),t._v(" "),t._l(t.games,(function(e){return r("p",{key:e.game},[r("Tag",[t._v("\n                "+t._s(e.game)+"\n              ")]),t._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+e.game=="bf1",expression:"`${g.game}` === 'bf1'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bf1/profile/pc/"+t.cheater.originId}},[t._v("\n                battlefieldtracker\n              ")]),t._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+e.game=="bf1",expression:"`${g.game}` === 'bf1'"}],attrs:{target:"_blank",href:"http://bf1stats.com/pc/"+t.cheater.originId}},[t._v("\n                bf1stats\n              ")]),t._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+e.game=="bfv",expression:"`${g.game}` === 'bfv'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bfv/profile/origin/"+t.cheater.originId}},[t._v("\n                battlefieldtracker\n              ")]),t._v(" "),r("a",{attrs:{target:"_blank",href:"https://www.247fairplay.com/CheatDetector/"+t.cheater.originId}},[t._v("\n                247fairplay\n              ")])],1)})),t._v(" "),t.cheater.trackerShot?r("a",{attrs:{href:t.cheater.trackerShot,target:"_blank"}},[t._v("bf1tracker数据截图")]):t._e(),t._v(" "),t.cheater.trackerWeaponShot?r("a",{attrs:{href:t.cheater.trackerWeaponShot,target:"_blank"}},[t._v("bf1tracker武器截图")]):t._e(),t._v(" "),t.cheater.bf1statsShot?r("a",{attrs:{href:t.cheater.bf1statsShot,target:"_blank"}},[t._v("bf1stats数据截图")]):t._e()],2),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.cheater.avatarLink,expression:"cheater.avatarLink"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[t._v(t._s(t.$t("detail.info.originAvatar",{msg:"originAvatar"})))])]),t._v(" "),r("img",{attrs:{src:t.cheater.avatarLink,alt:"avatar",width:"208",height:"208"}})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.origins.length,expression:"origins.length"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[t._v(t._s(t.$t("detail.info.historyID",{msg:"historyID"})))])]),t._v(" "),r("table",[t._m(0),t._v(" "),r("tbody",t._l(t.origins,(function(e){return r("tr",{key:e.id},[r("td",[r("Time",{attrs:{time:e.createDatetime}})],1),t._v(" "),r("td",[t._v(t._s(e.cheaterGameName))])])})),0)])]),t._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("h2",[r("span",[t._v(t._s(t.$t("detail.info.dealRecord",{msg:"dealRecord"})))])]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("p",{staticClass:"hint"},[t._v("\n              "+t._s(t.$t("detail.info.discription1",{msg:"discription1"}))+"\n              "),r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updateCheaterInfo(e)}}},[r("span",[t._v(t._s(t.$t("detail.info.updateButton",{msg:"updateButton"})))])]),t._v("，\n              "),r("span",[t._v(t._s(t.$t("detail.info.discription2",{msg:"discription2"})))])]),t._v(" "),r("p",{staticClass:"hint"},[t._v("\n              "+t._s(t.$t("detail.info.discription3",{msg:"discription3"}))+"\n            ")]),t._v(" "),r("p",{staticClass:"hint"},[t._v("\n              "+t._s(t.$t("detail.info.discription4",{msg:"discription4"}))+"\n            ")])]),t._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:t.updateUserInfospinShow,expression:"updateUserInfospinShow"}],attrs:{size:"large",fix:""}})],1),t._v(" "),r("div",[r("h2",{staticStyle:{margin:"1rem 0"}},[t._v(t._s(t.$t("detail.info.timeLine",{msg:"timeLine"})))]),t._v(" "),t._l(t.timelineList,(function(e){return r("TimelineItem",{key:e.createDatetime,attrs:{pending:""}},["report"===e.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[r("Time",{attrs:{time:e.createDatetime}}),t._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+e.uId}}}},["admin"===e.privilege?r("Tag",{attrs:{color:"success"}},[t._v("\n                    "+t._s(t.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):t._e(),t._v(" "),r("b",[t._v(t._s(e.username))])],1),t._v(" "),t._v("\n                "+t._s(t.$t("detail.info.report",{msg:"report"}))+"\n\n                "),r("router-link",{attrs:{to:{name:"cheater",ouid:""+e.originUserId}}},[t._v("\n                  "+t._s(e.cheaterGameName)+"\n                ")]),t._v(" "),t._v("\n                "+t._s(t.$t("detail.info.inGame",{msg:"inGame"}))+"\n\n                "),r("router-link",{attrs:{to:{name:"cheaters",query:{game:""+e.game}}}},[t._v("\n                  "+t._s(e.game)+"\n                ")]),t._v(" "),t._v("\n\t\t\t\t"+t._s(t.$t("detail.info.gaming",{msg:"gaming"}))+"\n\n                "),r("b",[t._v("\n                  "+t._s(t.convertCheatMethods(e.cheatMethods||"",t.$i18n.locale))+"\n                ")])],1),t._v(" "),e.bilibiliLink?r("p",[r("Tag",{attrs:{color:"primary"}},[t._v("\n                  "+t._s(t.$t("detail.info.videoLink",{msg:"videoLink"}))+"\n                ")]),t._v(" "),r("a",{attrs:{href:e.bilibiliLink,target:"_blank"}},[t._v(t._s(e.bilibiliLink))])],1):t._e(),t._v(" "),e.description?r("div",{staticClass:"description",domProps:{innerHTML:t._s(e.description)}}):t._e(),t._v(" "),t.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+e.floor,"data-user-id":""+e.userId},on:{click:function(e){return e.preventDefault(),t.handleReply(e)}}},[t._v(t._s(t.$t("detail.info.reply",{msg:"reply"})))])]):t._e()]):t._e(),t._v(" "),"verify"===e.type?r("div",{staticClass:"timeline-content bookmark",attrs:{id:"user-verify-cheater-"+e.id}},[r("div",{staticClass:"timeline-time"},[e.createDatetime?r("Time",{attrs:{time:e.createDatetime}}):t._e(),t._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+e.uId}}}},["admin"===e.privilege?r("Tag",{attrs:{color:"success"}},[t._v("\n                    "+t._s(t.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):t._e(),t._v(" "),r("b",[t._v(t._s(e.username))])],1),t._v(" "),t._v("\n                "+t._s(t.$t("detail.info.judge",{msg:"judge"}))+"\n\n                "),r("Tag",{attrs:{color:"warning"}},[t._v("\n                  "+t._s(t.handleStatus(e.status,t.$i18n.locale))+"\n                ")]),t._v(" "),e.cheatMethods?r("span",[t._v("\n              ，\n              "+t._s(t.$t("detail.info.cheatMethod",{msg:"cheatMethod"}))+"\n\n              "),r("b",[t._v("\n                "+t._s(t.convertCheatMethods(e.cheatMethods||"",t.$i18n.locale))+"\n              ")])]):t._e()],1),t._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:t._s(e.suggestion)}}),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.isAdmin&&"1"!==t.cheater.status&&"1"===e.status&&!t.isSelf(e.userId),expression:"isAdmin && cheater.status !== '1' && l.status === '1' && !isSelf(l.userId)"}]},[r("a",{attrs:{href:"#","data-user-verify-cheater-id":e.id,"data-cheat-methods":e.cheatMethods,"data-user-verify-cheater-username":e.username},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.doConfirm(e)}}},[r("Icon",{attrs:{type:"md-thumbs-up"}}),t._v(" "),t._v("\n                  "+t._s(t.$t("detail.info.agreeJudgement",{msg:"agreeJudgement"}))+"\n                ")],1)]),t._v(" "),t.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+e.floor,"data-user-id":""+e.userId},on:{click:function(e){return e.preventDefault(),t.handleReply(e)}}},[t._v(t._s(t.$t("detail.info.reply",{msg:"reply"})))])]):t._e()]):t._e(),t._v(" "),"confirm"===e.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[e.createDatetime?r("Time",{attrs:{time:e.createDatetime}}):t._e(),t._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+e.uId}}}},["admin"===e.privilege?r("Tag",{attrs:{color:"success"}},[t._v("\n                    "+t._s(t.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):t._e(),t._v(" "),r("b",[t._v(t._s(e.username))])],1),t._v(" "),t._v("\n                "+t._s(t.$t("detail.info.agreeWith",{msg:"agreeWith"}))+"\n                "),r("a",{attrs:{"data-hash":"#user-verify-cheater-"+e.userVerifyCheaterId},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.jumpToBookmark(e)}}},[t._v("\n                  # "+t._s(t.$t("detail.info.thisChoice",{msg:"thisChoice"}))+"\n                ")]),t._v(" "),t._v("\n                ，"+t._s(t.$t("detail.info.cheatMethod",{msg:"cheatMethod"}))+"\n\n                "),r("b",[t._v("\n                  "+t._s(t.convertCheatMethods(e.cheatMethods||"",t.$i18n.locale))+"\n                ")])],1),t._v(" "),t.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+e.floor,"data-user-id":""+e.userId},on:{click:function(e){return e.preventDefault(),t.handleReply(e)}}},[t._v(t._s(t.$t("detail.info.reply",{msg:"reply"})))])]):t._e()]):t._e(),t._v(" "),"reply"===e.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[e.createDatetime?r("Time",{attrs:{time:e.createDatetime}}):t._e(),t._v(" "),e.foo?r("router-link",{attrs:{to:{name:"account",params:{uId:""+e.fooUId}}}},["admin"===e.fooPrivilege?r("Tag",{attrs:{color:"success"}},[t._v("\n                    "+t._s(t.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):t._e(),t._v(" "),r("b",[t._v(t._s(e.foo))])],1):t._e(),t._v("\n                "+t._s(t.$t("detail.info.reply",{msg:"reply"}))+"\n                "),e.bar?r("router-link",{attrs:{to:{name:"account",params:{uId:""+e.barUId}}}},["admin"===e.barPrivilege?r("Tag",{attrs:{color:"success"}},[t._v("\n                    "+t._s(t.$t("detail.info.administrator",{msg:"administrator"}))+"\n                  ")]):t._e(),t._v(" "),r("b",[t._v(t._s(e.bar))])],1):t._e()],1),t._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),t.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+e.floor,"data-user-id":""+e.userId},on:{click:function(e){return e.preventDefault(),t.handleReply(e)}}},[t._v(t._s(t.$t("detail.info.reply",{msg:"reply"})))])]):t._e()]):t._e()])})),t._v(" "),r("Page",{staticClass:"page",attrs:{"page-size":t.limit,"show-total":"",current:t.page,total:t.total,size:"small"},on:{"on-change":t.handlePageChange}})],2),t._v(" "),t.isLogin?r("div",[r("p",{staticClass:"hint"},[r("span",[t._v(t._s(t.$t("detail.info.replyManual1",{msg:"replyManual1"})))]),r("a",{attrs:{href:"https://sm.ms/",target:"_blank"}},[r("span",[t._v(t._s(t.$t("detail.info.uploadPicButton",{msg:"uploadPicButton"})))])]),t._v("，"),r("span",[t._v(t._s(t.$t("detail.info.replyManual2",{msg:"replyManual2"})))])]),t._v(" "),r("Form",{staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("p",[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"What's your opinion?"},on:{"on-keydown":function(e){return t.handleCmdEnter(e,"reply")}},model:{value:t.reply.content,callback:function(e){t.$set(t.reply,"content",e)},expression:"reply.content"}})],1),t._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.doReply(e)}}},[t._v(t._s(t.$t("detail.info.reply",{msg:"reply"})))]),t._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:t.replySpinShow,expression:"replySpinShow"}],attrs:{size:"large",fix:""}})],1)],1):t._e(),t._v(" "),"1"===t.cheater.status?r("div",[r("Divider")],1):t._e(),t._v(" "),r("p",{staticClass:"hint"},[t._v(t._s(t.$t("detail.info.replyManual3",{msg:"replyManual3"})))]),t._v(" "),t.isAdmin?r("div",[r("Divider",[t._v(t._s(t.$t("detail.info.adminConsole",{msg:"adminConsole"})))]),t._v(" "),r("p",{staticClass:"hint"},[t._v(t._s(t.$t("detail.info.adminManual1",{msg:"adminManual1"})))]),t._v(" "),r("p",{staticClass:"hint"},[t._v(t._s(t.$t("detail.info.adminManual2",{msg:"adminManual2"})))]),t._v(" "),r("h2",{staticStyle:{margin:"1rem 0"}},[t._v(t._s(t.$t("detail.info.judgement",{msg:"judgement"})))]),t._v(" "),r("Form",{ref:"verifyForm",staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("FormItem",{attrs:{label:"Opinion"}},[r("Select",{model:{value:t.verify.status,callback:function(e){t.$set(t.verify,"status",e)},expression:"verify.status"}},[r("Option",{attrs:{value:"1"}},[t._v(t._s(t.$t("detail.info.choice1",{msg:"choice1"})))]),t._v(" "),r("Option",{attrs:{value:"2"}},[t._v(t._s(t.$t("detail.info.choice2",{msg:"choice2"})))]),t._v(" "),r("Option",{attrs:{value:"3"}},[t._v(t._s(t.$t("detail.info.choice3",{msg:"choice3"})))]),t._v(" "),r("Option",{attrs:{value:"4"}},[t._v(t._s(t.$t("detail.info.choice4",{msg:"choice4"})))])],1)],1),t._v(" "),r("FormItem",{directives:[{name:"show",rawName:"v-show",value:"1"===t.verify.status,expression:"verify.status === '1'"}],attrs:{label:"CheatMethod"}},[r("CheckboxGroup",{model:{value:t.verify.checkbox,callback:function(e){t.$set(t.verify,"checkbox",e)},expression:"verify.checkbox"}},t._l(t.cheatMethodsGlossary,(function(e){return r("Checkbox",{key:e.value,attrs:{label:e.value}},[t._v("\n                  "+t._s(t.$t("cheatMethods."+e.value))+"\n                ")])})),1)],1),t._v(" "),r("FormItem",{attrs:{label:"Reason"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"Write something"},on:{"on-keydown":function(e){return t.handleCmdEnter(e,"verify")}},model:{value:t.verify.suggestion,callback:function(e){t.$set(t.verify,"suggestion",e)},expression:"verify.suggestion"}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.doVerify(e)}}},[t._v(t._s(t.$t("detail.info.commit",{msg:"commit"})))])],1),t._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:t.verifySpinShow,expression:"verifySpinShow"}],attrs:{size:"large",fix:""}})],1)],1):t._e(),t._v(" "),r("Modal",{attrs:{title:"Reply","ok-text":"Send","cancel-text":"Cancel"},on:{"on-ok":t.doReply,"on-cancel":t.cancelReply},model:{value:t.replyModal,callback:function(e){t.replyModal=e},expression:"replyModal"}},[t.isLogin?r("div",[r("Form",{ref:"replyForm",staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"Say something"},on:{"on-keydown":function(e){return t.handleCmdEnter(e,"reply")}},model:{value:t.reply.content,callback:function(e){t.$set(t.reply,"content",e)},expression:"reply.content"}})],1)],1):r("div",[t._v(t._s(t.$t("detail.info.replyManual4",{msg:"replyManual4"})))])]),t._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1):r("div",[t._v("404 不存在")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",[e("b",[this._v("Update Time")])]),this._v(" "),e("td",[e("b",[this._v("ID")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("td",[e("b",[this._v("Operating Time")])]),this._v(" "),e("td",[e("b",[this._v("Action")])])])]),this._v(" "),e("tbody")])}],!1,null,null,null);e.default=h.exports}}]);