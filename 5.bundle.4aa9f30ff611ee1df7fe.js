(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{48:function(t,e,a){},62:function(t,e,a){"use strict";a(48)},68:function(t,e,a){"use strict";a.r(e);var s=a(3),i=a(2);new ClipboardJS(".ivu-btn");var n={data:function(){return{data:[],spinShow:!0,gameName:"bf1",statusGroup:"",cd:["",""],ud:["",""],page:1,limit:10,total:0,sum:[],totalSum:[],sortBy:[{value:"createDatetime",label:"举报时间倒序"},{value:"updateDatetime",label:"更新时间倒序"},{value:"n",label:"围观次数倒序"},{value:"commentsNum",label:"回复次数倒序"}],sortByValue:"updateDatetime",cheaterStatus:s.b}},created:function(){this.loadData()},watch:{$route:"loadData"},computed:{getAllStatusNum:function(){return _.sumBy(this.sum,(function(t){return t?t.num:0}))}},methods:{getTotalNum:function(t){var e=_.find(this.totalSum,["game",t]);return e?e.num:0},getStatusNum:function(t){var e=_.find(this.sum,["status",t]);return e?e.num:0},copied:function(){this.$Message.info("已复制")},loadData:function(){var t=this,e=this.$route.query,a=e.game,s=void 0===a?"bf1":a,n=e.status,l=void 0===n?"100":n,o=e.cd,u=void 0===o?"":o,r=e.ud,h=void 0===r?"":r,c=e.page,d=void 0===c?1:c,p=e.sort,m=void 0===p?"updateDatetime":p,g=e.limit,v=void 0===g?10:g,_={method:"get",url:"/cheaters/"};_.params={game:s,status:l,cd:u,ud:h,page:d,sort:m,tz:moment.tz.guess(),limit:v},this.gameName=s,this.statusGroup=l,this.cd=u.split(","),this.ud=h.split(","),this.page=Number.parseInt(d),this.limit=Number.parseInt(v),this.sortByValue=m,Object(i.b)(_).then((function(e){var a=e.data,s=a.data,i=a.total,n=a.sum,l=a.totalSum;t.spinShow=!1,t.data=s,t.total=i,t.sum=n,t.totalSum=l}))},handleStatus:s.i,handleRefresh:function(){this.spinShow=!0,this.loadData()},routerQuery:function(){var t=this.gameName,e=this.statusGroup,a=this.cd.join(","),s=this.ud.join(","),i=this.page,n=this.limit,l=this.sortByValue,o={};return o.status=e,","!==a&&(o.cd=a),","!==s&&(o.ud=s),1!==i&&(o.page=i),o.limit=n,""!==l&&(o.sort=l),""!==t&&(o.game=t),o},handleChanges:function(){this.spinShow=!0;var t=this.routerQuery();this.$router.push({name:"cheaters",query:t})},handleStatusChange:function(){this.page=1,this.handleChanges()},handleCDatepicker:function(t){this.cd=t,this.page=1,this.handleChanges()},handleUDatepicker:function(t){this.ud=t,this.page=1,this.handleChanges()},handlePageChange:function(t){this.page=t,this.handleChanges()},handlePageSizeChange:function(t){this.limit=t,this.handleChanges()},handleSortByChange:function(t){this.handleChanges()}}},l=(a(62),a(1)),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("Divider",[t._v(t._s(t.$t("list.title")))]),t._v(" "),a("p",[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.handleChanges},model:{value:t.gameName,callback:function(e){t.gameName=e},expression:"gameName"}},[a("Radio",{attrs:{label:"bf1"}},[a("span",[t._v(t._s(t.$t("list.filters.game.bf1"))+"("+t._s(t.getTotalNum("bf1"))+")")])]),t._v(" "),a("Radio",{attrs:{label:"bfv"}},[a("span",[t._v(t._s(t.$t("list.filters.game.bfv"))+"("+t._s(t.getTotalNum("bfv"))+")")])])],1)],1),t._v(" "),a("p",{staticClass:"mobile-hide"},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.handleStatusChange},model:{value:t.statusGroup,callback:function(e){t.statusGroup=e},expression:"statusGroup"}},[a("Radio",{attrs:{label:"100"}},[a("span",[t._v(t._s(t.$t("list.filters.status.all"))+"("+t._s(t.getAllStatusNum)+")")])]),t._v(" "),t._l(t.cheaterStatus,(function(e){return a("Radio",{key:e.value,attrs:{label:""+e.value}},[a("span",[t._v(t._s(e.label)+"("+t._s(t.getStatusNum(e.value))+")")])])}))],2)],1),t._v(" "),a("p",[a("span",{staticClass:"mobile-hide"},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.cd,type:"daterange","split-panels":"",placeholder:"举报时间范围"},on:{"on-change":t.handleCDatepicker}}),t._v(" "),a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.ud,type:"daterange","split-panels":"",placeholder:"更新时间范围"},on:{"on-change":t.handleUDatepicker}})],1),t._v(" "),a("Select",{staticClass:"desktop-hide",staticStyle:{width:"110px"},on:{"on-change":t.handleChanges},model:{value:t.statusGroup,callback:function(e){t.statusGroup=e},expression:"statusGroup"}},[a("Option",{attrs:{value:"100"}},[t._v(t._s(t.$t("list.filters.status.all"))+"("+t._s(t.getAllStatusNum)+")")]),t._v(" "),t._l(t.cheaterStatus,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label)+"("+t._s(t.getStatusNum(e.value))+")")])}))],2),t._v(" "),a("Select",{staticStyle:{width:"110px"},on:{"on-change":t.handleSortByChange},model:{value:t.sortByValue,callback:function(e){t.sortByValue=e},expression:"sortByValue"}},t._l(t.sortBy,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)],1),t._v(" "),a("p",[a("Button",{attrs:{icon:"ios-refresh"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleRefresh(e)}}},[t._v(t._s(t.$t("list.filters.refresh")))])],1),t._v(" "),a("div",{staticClass:"list"},[a("Page",{staticClass:"page",attrs:{"page-size":t.limit,"show-sizer":"","show-total":"",current:t.page,total:t.total,size:"small"},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}}),t._v(" "),a("ul",[t._m(0),t._v(" "),t._l(t.data,(function(e){return a("li",{key:e.originUserId},[a("span",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{width:"2.3rem",height:"2.3rem","border-radius":"2.3rem","margin-right":".4rem"},attrs:{src:e.avatarLink||"//bfban-static.bamket.com/assets/images/avatar.png",alt:"avatar"}}),t._v(" "),a("div",{staticStyle:{display:"flex","flex-direction":"column"}},[a("div",{staticStyle:{height:"1.6rem"}},[a("router-link",{attrs:{to:{name:"cheater",params:{ouid:""+e.originUserId}}}},[t._v(t._s(e.originId))]),t._v(" "),a("Button",{attrs:{size:"small",type:"text",icon:"ios-copy-outline","data-clipboard-text":e.originId},on:{click:t.copied}})],1),t._v(" "),a("span",[a("Icon",{attrs:{type:"md-eye"}}),t._v(" "+t._s(e.n)+"\n            "),a("Icon",{attrs:{type:"md-chatboxes"}}),t._v(" "+t._s(e.commentsNum)+"\n          ")],1)])]),t._v(" "),a("span",{staticClass:"mobile-hide"},[e.createDatetime?a("Time",{attrs:{time:e.createDatetime}}):t._e()],1),t._v(" "),a("span",[e.updateDatetime?a("Time",{attrs:{time:e.updateDatetime}}):t._e()],1)])}))],2),t._v(" "),a("Page",{staticClass:"page",attrs:{"page-size":t.limit,"show-sizer":"","show-total":"",current:t.page,total:t.total,size:"small"},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}}),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[e("b",[this._v("游戏ID")])]),this._v(" "),e("span",{staticClass:"mobile-hide"},[e("b",[this._v("举报时间")])]),this._v(" "),e("span",[e("b",[this._v("更新时间")])])])}],!1,null,"708fd98c",null);e.default=o.exports}}]);