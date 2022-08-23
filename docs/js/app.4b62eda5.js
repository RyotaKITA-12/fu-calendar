(function(){"use strict";var t={8038:function(t,e,a){var r=a(144),s=a(998),n=a(3059),o=function(){var t=this,e=t._self._c;return e(s.Z,[e(n.Z,[e("router-view")],1)],1)},i=[],l={name:"App"},c=l,u=a(1001),d=(0,u.Z)(c,o,i,!1,null,null,null),p=d.exports,m=a(8345),h=a(6190),f=a(5715),v=a(2118),Z=a(4324),g=a(5808),_=a(4525),y=a(7015),x=a(1831),k=a(7423),b=a(3687),w=a(6313),S=a(7953),C=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{id:"inspire"}},[e("Nav"),e(n.Z,{staticClass:"grey lighten-3"},[e(v.Z,[e(k.Z,{attrs:{"min-height":"70vh",rounded:"lg"}},[e(k.Z,{staticClass:"d-flex",attrs:{tile:"",height:"64"}},[e(w.Z,{attrs:{flat:""}},[e(h.Z,{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v(" Today ")]),e(h.Z,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[e(Z.Z,{attrs:{small:""}},[t._v(" mdi-chevron-left ")])],1),e(h.Z,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[e(Z.Z,{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?e(S.qW,[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),e(b.Z),e(x.Z,{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(h.Z,t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),a),[e("span",[t._v(t._s(t.typeToLabel[t.type]))]),e(Z.Z,{attrs:{right:""}},[t._v(" mdi-menu-down ")])],1)]}}])},[e(g.Z,[e(_.Z,{on:{click:function(e){t.type="day"}}},[e(y.V9,[t._v("Day")])],1),e(_.Z,{on:{click:function(e){t.type="week"}}},[e(y.V9,[t._v("Week")])],1),e(_.Z,{on:{click:function(e){t.type="month"}}},[e(y.V9,[t._v("Month")])],1)],1)],1)],1)],1),e(k.Z,{attrs:{height:"600"}},[e(f.Z,{ref:"calendar",attrs:{type:t.type,events:t.events,"event-overlap-mode":t.mode,"event-overlap-threshold":30},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1)],1)],1)},$=[],P=a(6232),M=a(5550),I=a(3423),O=a(5495),U=a(7397),E=a(7912),T=a(4611),W=a(5137),A=function(){var t=this,e=t._self._c;return t.windowWidth>850?e("div",[e(P.Z,{attrs:{app:"",color:"white",flat:""}},[e(v.Z,{staticClass:"py-0 fill-height"},[e("router-link",{attrs:{to:"/"}},[e(O.Z,{attrs:{to:"/","max-height":"50","max-width":"200",src:a(6949),"lazy-src":a(3976)}})],1),e(b.Z),e(h.Z,{attrs:{to:"/",text:"","active-class":"deep-purple--text"}},[e(Z.Z,[t._v("mdi-home-account")]),t._v(" MYPAGE ")],1),e("div",{staticClass:"text-center"},[e(x.Z,{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(h.Z,t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[e(Z.Z,[t._v("mdi-account-cog")]),t._v(" FRIEND ")],1)]}}],null,!1,2343854370)},[e(g.Z,[e(E.Z,{attrs:{"active-class":"deep-purple--text"}},t._l(t.friends,(function(a){return e(_.Z,{attrs:{to:a.link}},[e(T.Z,[e(Z.Z,{domProps:{textContent:t._s(a.icon)}})],1),e(y.km,[e(y.V9,{domProps:{textContent:t._s(a.text)}})],1)],1)})),1)],1)],1)],1),e("div",{staticClass:"text-center"},[e(x.Z,{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(h.Z,t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[e(Z.Z,[t._v("mdi-magnify")]),t._v(" SEARCH ")],1)]}}],null,!1,1651113930)},[e(g.Z,[e(E.Z,{attrs:{"active-class":"deep-purple--text"}},t._l(t.searchs,(function(a){return e(_.Z,{attrs:{to:a.link}},[e(T.Z,[e(Z.Z,{domProps:{textContent:t._s(a.icon)}})],1),e(y.km,[e(y.V9,{domProps:{textContent:t._s(a.text)}})],1)],1)})),1)],1)],1)],1),e(h.Z,{attrs:{color:"red",text:""},on:{click:t.signOut}},[e(Z.Z,[t._v("mdi-logout")]),t._v(" LOGOUT ")],1),e(I.Z,{staticClass:"mr-10",staticStyle:{"margin-left":"20px"},attrs:{color:"grey darken-1",size:"48"}},[e("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpg, image/jpeg, image/png"},on:{change:t.updateIcon}}),t.photoUrl?t._e():e(Z.Z,{attrs:{dark:""},on:{click:t.changeIcon}},[t._v(" mdi-account-circle ")]),t.photoUrl?e("img",{attrs:{src:t.photoUrl},on:{click:t.changeIcon}}):t._e()],1)],1)],1)],1):e("div",[e(P.Z,{attrs:{app:"",color:"white",flat:""}},[e(v.Z,{staticClass:"py-0 fill-height"},[e("router-link",{attrs:{to:"/"}},[e(O.Z,{attrs:{to:"/","max-height":"50","max-width":"100",src:a(6949),"lazy-src":a(3976)}})],1),e(b.Z),e(h.Z,{attrs:{color:"red",text:""},on:{click:t.signOut}},[e(Z.Z,[t._v("mdi-logout")]),t._v(" LOGOUT ")],1),e(M.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),e(W.Z,{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(g.Z,{attrs:{nav:"",dense:""}},[e(E.Z,{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[e(_.Z,{attrs:{to:"/"}},[e(T.Z,[e(Z.Z,[t._v("mdi-home-account")])],1),e(y.V9,[t._v("マイページ")])],1),e(U.Z,{attrs:{value:t.active,disabled:"","no-action":"","prepend-icon":"mdi-account-cog"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(y.km,[e(y.V9,[t._v("フレンド")])],1)]},proxy:!0}])},[e(_.Z,[e(_.Z,{attrs:{to:"/friend"}},[e(T.Z,[e(Z.Z,[t._v("mdi-account")])],1),e(y.V9,[t._v("フレンドの管理")])],1)],1),e(_.Z,[e(_.Z,{attrs:{to:"/group"}},[e(T.Z,[e(Z.Z,[t._v("mdi-account-multiple")])],1),e(y.V9,[t._v("グループの管理")])],1)],1)],1),e(U.Z,{attrs:{value:t.active,disabled:"","no-action":"","prepend-icon":"mdi-account-cog"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(y.km,[e(y.V9,[t._v("検索")])],1)]},proxy:!0}])},[e(_.Z,[e(_.Z,{attrs:{to:"/search/date"}},[e(T.Z,[e(Z.Z,[t._v("mdi-clock")])],1),e(y.V9,[t._v("日時から検索")])],1)],1),e(_.Z,[e(_.Z,{attrs:{to:"/search/friend"}},[e(T.Z,[e(Z.Z,[t._v("mdi-account-search")])],1),e(y.V9,[t._v("フレンドから検索")])],1)],1)],1)],1)],1)],1)],1)},R=[],V=a(8844);const L={apiKey:"AIzaSyBRrMJIQPsP3X8ul77SEoFtrcGT-ID7ndQ",authDomain:"fu-calendar-9acef.firebaseapp.com",projectId:"fu-calendar-9acef",storageBucket:"fu-calendar-9acef.appspot.com",messagingSenderId:"58740389288",appId:"1:58740389288:web:cb8e51e15153d84e6a999d",measurementId:"G-HNXD2RKBW7"};V.Z.initializeApp(L);var N=V.Z,j={name:"App",data:()=>({friends:[{icon:"mdi-account",text:"フレンドの管理",link:"/friend"},{icon:"mdi-account-multiple",text:"グループの管理",link:"/group"}],searchs:[{icon:"mdi-clock",text:"日時から検索",link:"/search/date"},{icon:"mdi-account-search",text:"フレンドから検索",link:"/search/friend"}],auth:null,photoUrl:"",windowWidth:0,drawer:!1,group:null,active:!0}),watch:{group(){this.drawer=!1}},mounted(){window.addEventListener("resize",this.calculateWindowWidth),this.calculateWindowWidth(),this.auth=JSON.parse(sessionStorage.getItem("user")),console.log(this.auth.photoURL),this.photoUrl=this.auth.photoURL},beforeDestroy(){window.removeEventListener("resize",this.calculateWindowWidth)},methods:{signOut(){N.auth().signOut().then((()=>{localStorage.message="ログアウトに成功しました",this.$router.push("/signin")}))},changeIcon(){this.$refs.fileInput.click()},getAuth(){return N.auth().onAuthStateChanged((t=>t))},updateIcon(){const t=this.getAuth();t||(sessionStorage.removeItem("user"),this.$router.push("/signin"));const e=this.$refs.fileInput.files[0],a=JSON.parse(sessionStorage.getItem("user")),r=`/user/icon/${a.email}`;N.storage().ref().child(r).put(e).then((async t=>{const e=await t.ref.getDownloadURL();N.auth().onAuthStateChanged((t=>{t&&t.updateProfile({photoURL:e})})),this.auth.photoURL=e,sessionStorage.setItem("user",JSON.stringify(this.auth)),this.photoUrl=e}))},calculateWindowWidth(){this.windowWidth=window.innerWidth}}},D=j,z=(0,u.Z)(D,A,R,!1,null,null,null),q=z.exports,K={components:{Nav:q},data:()=>({focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day"},mode:"column",value:""}),mounted(){this.$refs.calendar.checkChange()},methods:{setToday(){this.focus=""},prev(){this.$refs.calendar.prev()},next(){this.$refs.calendar.next()}}},B=K,F=(0,u.Z)(B,C,$,!1,null,null,null),J=F.exports,G=a(4145),X=a(266),Q=a(1713),H=a(7808),Y=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{id:"inspire"}},[e("Nav"),e(n.Z,{staticClass:"grey lighten-3"},[e(v.Z,[e(k.Z,{attrs:{"min-height":"80vh",rounded:"lg"}},[e(Q.Z,{attrs:{"no-gutters":""}},[e(X.Z,{attrs:{cols:"3"}},[e(G.Z,{staticClass:"mx-auto white",staticStyle:{"padding-top":"10px"}},[e(H.Z,{staticStyle:{"padding-top":"20px","padding-left":"10px","padding-right":"10px"},attrs:{label:"add Email",type:"text"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(h.Z,{attrs:{color:"primary"}},[t._v("追加")])]},proxy:!0}]),model:{value:t.addUser,callback:function(e){t.addUser=e},expression:"addUser"}}),e(g.Z,{staticStyle:{height:"71vh","overflow-y":"auto"},attrs:{color:"blue-grey lighten-5"}},[e(E.Z,{attrs:{color:"primary"},model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}},t._l(t.users,(function([a,r]){return e(_.Z,{key:a},[e(T.Z,[e(Z.Z,[t._v(t._s(a))])],1),e(y.km,[e(y.V9,[t._v(t._s(r))])],1)],1)})),1)],1)],1)],1),e(X.Z)],1)],1)],1)],1)],1)},tt=[],et={components:{Nav:q},data:()=>({selectedUser:1,users:[["mdi-account","user1"],["mdi-account","user2"],["mdi-account","user3"],["mdi-account","user4"],["mdi-account","user5"],["mdi-account","user6"],["mdi-account","user7"],["mdi-account","user8"],["mdi-account","user9"],["mdi-account","user10"],["mdi-account","user11"],["mdi-account","user12"],["mdi-account","user13"],["mdi-account","user14"],["mdi-account","user15"],["mdi-account","user16"],["mdi-account","user17"],["mdi-account","user18"],["mdi-account","user19"],["mdi-account","user20"],["mdi-account","user21"],["mdi-account","user22"],["mdi-account","user23"],["mdi-account","user24"],["mdi-account","user25"]]})},at=et,rt=(0,u.Z)(at,Y,tt,!1,null,null,null),st=rt.exports,nt=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{id:"inspire"}},[e("Nav"),e(n.Z,{staticClass:"grey lighten-3"},[e(v.Z,[e(k.Z,{attrs:{"min-height":"80vh",rounded:"lg"}})],1)],1)],1)},ot=[],it={components:{Nav:q}},lt=it,ct=(0,u.Z)(lt,nt,ot,!1,null,null,null),ut=ct.exports,dt=a(8486),pt=a(255),mt=a(2348),ht=a(400),ft=a(1214),vt=a(7394),Zt=a(8695),gt=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{id:"inspire"}},[e("Nav"),e(n.Z,{staticClass:"grey lighten-3"},[e(v.Z,[e(ft.Z,{attrs:{multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[e(pt.Z,[e(ht.Z,{scopedSlots:t._u([{key:"default",fn:function({open:a}){return[e(Q.Z,{attrs:{"no-gutters":""}},[e(X.Z,{staticClass:"text--secondary",attrs:{cols:"8"}},[e(vt.Z5,{attrs:{"leave-absolute":""}},[a?e("span",[t._v("検索する日時を入力してください")]):e(Q.Z,{staticStyle:{width:"100%"},attrs:{"no-gutters":""}},[e(X.Z,{attrs:{cols:"4"}},[t._v(" 対象： ")]),e(X.Z,{attrs:{cols:"8"}},[t._v(" "+t._s(t.date_search.start||"0000-00-00")+" 　 "+t._s(t.time_search.start||"00:00")+" 　〜　 "+t._s(t.date_search.end||"0000-00-00")+" 　 "+t._s(t.time_search.end||"00:00")+" ")])],1)],1)],1)],1)]}}])}),e(mt.Z,[e(Q.Z,{attrs:{justify:"space-around","no-gutters":""}},[e(X.Z,{attrs:{cols:"3"}},[e(x.Z,{ref:"dateStartMenu",attrs:{"close-on-content-click":!1,"return-value":t.date_search.start,"offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.date_search,"start",e)},"update:return-value":function(e){return t.$set(t.date_search,"start",e)}},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(H.Z,t._g(t._b({attrs:{label:"Start date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date_search.start,callback:function(e){t.$set(t.date_search,"start",e)},expression:"date_search.start"}},"v-text-field",r,!1),a))]}}])},[e(dt.Z,{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[e(b.Z),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){t.$refs.dateStartMenu.isActive=!1}}},[t._v(" Cancel ")]),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dateStartMenu.save(t.date)}}},[t._v(" OK ")])],1)],1)],1),e(X.Z,{attrs:{cols:"2"}},[e(x.Z,{ref:"timeStartMenu",attrs:{"close-on-content-click":!1,"return-value":t.time_search.start,"offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.time_search,"start",e)},"update:return-value":function(e){return t.$set(t.time_search,"start",e)}},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(H.Z,t._g(t._b({attrs:{label:"Start time","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:t.time_search.start,callback:function(e){t.$set(t.time_search,"start",e)},expression:"time_search.start"}},"v-text-field",r,!1),a))]}}])},[e(Zt.Z,{staticClass:"mt-4",attrs:{"allowed-minutes":t.allowedStep,format:"24hr","no-title":"",scrollable:""},model:{value:t.timeStep,callback:function(e){t.timeStep=e},expression:"timeStep"}},[e(b.Z),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){t.$refs.timeStartMenu.isActive=!1}}},[t._v(" Cancel ")]),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.timeStartMenu.save(t.timeStep)}}},[t._v(" OK ")])],1)],1)],1),e(b.Z),e("div",{staticStyle:{"padding-top":"25px"}},[t._v("〜")]),e(b.Z),e(X.Z,{attrs:{cols:"3"}},[e(x.Z,{ref:"dateEndMenu",attrs:{"close-on-content-click":!1,"return-value":t.date_search.end,"offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.date_search,"end",e)},"update:return-value":function(e){return t.$set(t.date_search,"end",e)}},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(H.Z,t._g(t._b({attrs:{label:"End date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date_search.end,callback:function(e){t.$set(t.date_search,"end",e)},expression:"date_search.end"}},"v-text-field",r,!1),a))]}}])},[e(dt.Z,{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[e(b.Z),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){t.$refs.dateEndMenu.isActive=!1}}},[t._v(" Cancel ")]),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dateEndMenu.save(t.date)}}},[t._v(" OK ")])],1)],1)],1),e(X.Z,{attrs:{cols:"2"}},[e(x.Z,{ref:"timeEndMenu",attrs:{"close-on-content-click":!1,"return-value":t.time_search.end,"offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.time_search,"end",e)},"update:return-value":function(e){return t.$set(t.time_search,"end",e)}},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(H.Z,t._g(t._b({attrs:{label:"End time","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:t.time_search.end,callback:function(e){t.$set(t.time_search,"end",e)},expression:"time_search.end"}},"v-text-field",r,!1),a))]}}])},[e(Zt.Z,{staticClass:"mt-4",attrs:{"allowed-minutes":t.allowedStep,format:"24hr","no-title":"",scrollable:""},model:{value:t.timeStep,callback:function(e){t.timeStep=e},expression:"timeStep"}},[e(b.Z),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){t.$refs.timeEndMenu.isActive=!1}}},[t._v(" Cancel ")]),e(h.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.timeEndMenu.save(t.timeStep)}}},[t._v(" OK ")])],1)],1)],1)],1)],1)],1)],1),e(k.Z,{attrs:{"min-height":"70vh",rounded:"lg"}})],1)],1)],1)},_t=[],yt={components:{Nav:q},data:()=>({panel:[0],date:null,date_search:{start:null,end:null},time_search:{start:null,end:null}}),methods:{allowedStep:t=>t%15===0}},xt=yt,kt=(0,u.Z)(xt,gt,_t,!1,null,null,null),bt=kt.exports,wt=a(3697),St=a(4127),Ct=a(7955),$t=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{id:"inspire"}},[e("Nav"),e(n.Z,{staticClass:"grey lighten-3"},[e(v.Z,[e(ft.Z,{attrs:{multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[e(pt.Z,[e(ht.Z,{scopedSlots:t._u([{key:"default",fn:function({open:a}){return[e(Q.Z,{attrs:{"no-gutters":""}},[e(X.Z,{staticClass:"text--secondary",attrs:{cols:"8"}},[e(vt.Z5,{attrs:{"leave-absolute":""}},[a?e("span",[t._v("検索するフレンドを入力してください")]):e(Q.Z,{staticStyle:{width:"100%"},attrs:{"no-gutters":""}},[e(X.Z,{attrs:{cols:"4"}},[t._v(" 対象： ")]),e(X.Z,{attrs:{cols:"8"}},[e(Ct.Z,{attrs:{"active-class":"primary--text"}},t._l(t.values,(function(a){return e(St.Z,{key:a,attrs:{color:"primary"}},[t._v(" "+t._s(a)+" ")])})),1)],1)],1)],1)],1)],1)]}}])}),e(mt.Z,[e(Q.Z,{attrs:{justify:"space-around","no-gutters":""}},[e(X.Z,{attrs:{cols:"12"}},[e(wt.Z,{attrs:{items:t.items,dense:"",filled:"","small-chips":"",multiple:"",label:"Frieds"},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}})],1)],1)],1)],1)],1),e(k.Z,{attrs:{"min-height":"70vh",rounded:"lg"}},[e(k.Z,{staticClass:"d-flex",attrs:{tile:"",height:"64"}},[e(w.Z,{attrs:{flat:""}},[e(h.Z,{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v(" Today ")]),e(h.Z,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[e(Z.Z,{attrs:{small:""}},[t._v(" mdi-chevron-left ")])],1),e(h.Z,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[e(Z.Z,{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?e(S.qW,[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),e(b.Z),e(x.Z,{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(h.Z,t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),a),[e("span",[t._v(t._s(t.typeToLabel[t.type]))]),e(Z.Z,{attrs:{right:""}},[t._v(" mdi-menu-down ")])],1)]}}])},[e(g.Z,[e(_.Z,{on:{click:function(e){t.type="day"}}},[e(y.V9,[t._v("Day")])],1),e(_.Z,{on:{click:function(e){t.type="week"}}},[e(y.V9,[t._v("Week")])],1),e(_.Z,{on:{click:function(e){t.type="month"}}},[e(y.V9,[t._v("Month")])],1)],1)],1)],1)],1),e(k.Z,{attrs:{height:"600"}},[e(f.Z,{ref:"calendar",attrs:{type:t.type,events:t.events,"event-overlap-mode":t.mode,"event-overlap-threshold":30},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1)],1)],1)},Pt=[],Mt={components:{Nav:q},data:()=>({panel:[0],focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day"},mode:"column",values:"",items:["user1","user2","user3","user4"]}),mounted(){this.$refs.calendar.checkChange()},methods:{setToday(){this.focus=""},prev(){this.$refs.calendar.prev()},next(){this.$refs.calendar.next()}}},It=Mt,Ot=(0,u.Z)(It,$t,Pt,!1,null,null,null),Ut=Ot.exports,Et=a(7359),Tt=a(4886),Wt=a(9223),At=a(5125),Rt=function(){var t=this,e=t._self._c;return e(s.Z,[e(n.Z,{staticClass:"grey lighten-3"},[e("div",{staticStyle:{"margin-top":"50px"}},[e("div",{staticStyle:{"text-align":"center"}},[e("br"),e("img",{attrs:{width:"200px",src:a(6949)}}),e("br"),e("br")]),e(G.Z,{staticClass:"mx-auto mt-5 blue-grey--text text--darken-2",attrs:{width:"400px"}},[e("br"),e(Tt.EB,{staticClass:"justify-center"},[e("h1",{staticClass:"display-1"},[t._v("新規登録")])]),e(Wt.Z),e(Tt.ZB,[e(At.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(H.Z,{attrs:{"prepend-icon":"mdi-account",label:"User ID",rules:t.userIdRules,required:""},model:{value:t.user_id,callback:function(e){t.user_id=e},expression:"user_id"}}),e(H.Z,{attrs:{"prepend-icon":"mdi-email",label:"Email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(H.Z,{attrs:{type:t.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",label:"Password",rules:t.passwordRules,required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(Tt.h7,{staticClass:"justify-center"},[e(h.Z,{staticClass:"info",attrs:{disabled:!t.valid},on:{click:t.submit}},[t._v("登録")])],1),t.errorMessage?e(Et.Z,{staticStyle:{"text-align":"center","margin-top":"30px"},attrs:{dense:"",outlined:"",type:"error",elevation:"1"}},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e()],1)],1),e(Wt.Z),e("br"),e("p",{staticClass:"text-center"},[t._v("すでにアカウントを"),e("br"),t._v("お持ちの方は"),e("router-link",{attrs:{to:"/signin"}},[t._v("こちら")])],1),e("br")],1)],1)])],1)},Vt=[],Lt={name:"Signup",data:function(){return{showPassword:!1,user_id:"",userIdRules:[t=>!!t||"ユーザIDを入力してください",t=>6<=t.length||"6文字以上で入力してください"],email:"",emailRules:[t=>!!t||"メールアドレスを入力してください",t=>/.+@.+/.test(t)||"不正なメールアドレスです"],password:"",password_confirm:"",passwordRules:[t=>!!t||"パスワードを入力してください",t=>7<=t.length||"8文字以上で入力してください"],errorMessage:""}},computed:{},methods:{submit(){const t=V.Z.firestore().collection("users").doc("W6LJd07uAg2umoTzmXUL");t.get().then((t=>{t.exists?t.data()["userIds"].includes(this.user_id)?this.errorMessage="既に使用されていユーザIDです":V.Z.auth().createUserWithEmailAndPassword(this.email,this.password).then((async t=>{await t.user.updateProfile({displayName:this.user_id}),await V.Z.firestore().collection("users").doc("vKmx9TKToLQ7m5u6ovIA").update({[this.user_id]:this.email}),await V.Z.firestore().collection("users").doc("W6LJd07uAg2umoTzmXUL").update({userIds:V.Z.firestore.FieldValue.arrayUnion(this.user_id)}),localStorage.message="ユーザの新規作成に成功しました",this.$router.push("/signin")})).catch((t=>{this.errorMessage="ユーザの新規作成に失敗しました"})):console.log("No such data")}))}}},Nt=Lt,jt=(0,u.Z)(Nt,Rt,Vt,!1,null,null,null),Dt=jt.exports,zt=function(){var t=this,e=t._self._c;return e(s.Z,[e(n.Z,{staticClass:"grey lighten-3"},[e("div",{staticStyle:{"margin-top":"50px"}},[e("div",{staticStyle:{"text-align":"center"}},[e("br"),e("img",{attrs:{width:"200px",src:a(6949)}}),e("br"),e("br")]),e(G.Z,{staticClass:"mx-auto mt-5 blue-grey--text text--darken-2",attrs:{width:"400px"}},[e("br"),e(Tt.EB,{staticClass:"justify-center"},[e("h1",{staticClass:"display-1"},[t._v("ログイン")])]),e(Wt.Z),e(Tt.ZB,[e(At.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(H.Z,{attrs:{"prepend-icon":"mdi-email",label:"Email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(H.Z,{attrs:{type:t.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",label:"Password",rules:t.passwordRules,required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(Tt.h7,{staticClass:"justify-center"},[e(h.Z,{staticClass:"info",attrs:{disabled:!t.valid},on:{click:t.submit}},[t._v("ログイン")])],1),t.message?e(Et.Z,{staticStyle:{"text-align":"center","margin-top":"30px"},attrs:{dense:"",text:"",type:"success"}},[t._v(" "+t._s(t.message)+" ")]):t._e(),t.errorMessage?e(Et.Z,{staticStyle:{"text-align":"center","margin-top":"30px"},attrs:{dense:"",outlined:"",type:"error",elevation:"1"}},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e()],1)],1),e(Wt.Z),e("br"),e("p",{staticClass:"text-center"},[t._v("アカウントを"),e("br"),t._v("お持ちでない方は"),e("router-link",{attrs:{to:"/signup"}},[t._v("こちら")])],1),e("br")],1)],1)])],1)},qt=[],Kt={name:"Signin",data:function(){return{showPassword:!1,email:"",emailRules:[t=>!!t||"メールアドレスを入力してください",t=>/.+@.+/.test(t)||"不正なメールアドレスです"],password:"",passwordRules:[t=>!!t||"パスワードを入力してください",t=>7<=t.length||"8文字以上で入力してください"],message:"",errorMessage:""}},mounted(){localStorage.message&&(this.message=localStorage.message,localStorage.message="")},computed:{},methods:{submit(){N.auth().signInWithEmailAndPassword(this.email,this.password).then((t=>{const e={displayName:t.user.displayName,email:t.user.email,uid:t.user.uid,refreshToken:t.user.refreshToken,photoURL:t.user.photoURL};sessionStorage.setItem("user",JSON.stringify(e)),this.$router.push("/")})).catch((t=>{console.log("fail"),this.errorMessage="ログインに失敗しました"}))}}},Bt=Kt,Ft=(0,u.Z)(Bt,zt,qt,!1,null,null,null),Jt=Ft.exports;r.ZP.use(m.Z);const Gt=[{path:"/",name:"home",component:J,meta:{requiresAuth:!0}},{path:"/friend",name:"Friend",component:st},{path:"/group",name:"Group",component:ut},{path:"/search/date",name:"SearchDate",component:bt},{path:"/search/friend",name:"SearchFriend",component:Ut},{path:"/signin",name:"SignIn",component:Jt},{path:"/signup",name:"SignUp",component:Dt}],Xt=new m.Z({base:"",routes:Gt});Xt.beforeEach(((t,e,a)=>{const r=t.matched.some((t=>t.meta.requiresAuth));r?N.auth().onAuthStateChanged((e=>{e?a():a({path:"/signin",query:{redirect:t.fullPath}})})):a()}));var Qt=Xt,Ht=a(1705);r.ZP.use(Ht.Z);var Yt=new Ht.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:Qt,vuetify:Yt,render:t=>t(p)}).$mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.bcc4f49c.png"},3976:function(t,e,a){t.exports=a.p+"img/logo_small.939adb69.png"}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,n){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],n=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(e&&e(r);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(8038)}));r=a.O(r)})();
//# sourceMappingURL=app.4b62eda5.js.map