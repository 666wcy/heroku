(this.webpackJsonplibdrive=this.webpackJsonplibdrive||[]).push([[0],{152:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(30),s=a(0),c=a.n(s),o=a(11),i=a.n(o),l=a(19),d=a(17),u=a(195),h=a(201),p=a(12),j=a(13),g=a(15),m=a(14),b=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),isLoaded:!1,server:sessionStorage.getItem("server")||localStorage.getItem("server")},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)(d.a,{to:"/browse"})}}]),a}(s.Component),v=a(25),O=a.n(v),f=a(32),x=a(33),y=a.n(x),C=a(22),w=a.n(C),S=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),isLoaded:!1,metadata:{},server:sessionStorage.getItem("server")||localStorage.getItem("server")},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,r,s=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.auth,n=t.server,r="".concat(n,"/api/v1/metadata?a=").concat(a,"&r=0:16&s=popularity-des"),w.a.get(r).then((function(e){return s.setState({isLoaded:!0,metadata:e.data})})).catch((function(e){console.error(e),null==a||null==n?(alert("You are not authenticated"),s.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),s.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(n," the correct address?"))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.metadata;return t?Object(n.jsxs)("div",{className:"Browse",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(T,{metadata:a})]}):Object(n.jsx)("div",{className:"Loading",children:Object(n.jsx)(y.a,{color:"#4197fe",size:75})})}}]),a}(s.Component),k=a(44),_=a.n(k),N=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),category:n.props.match.params.category,isLoaded:!1,metadata:{},page:parseInt(_.a.parse(n.props.location.search).page)||1,range:"".concat(void 0===_.a.parse(n.props.location.search).page?"0:16":"".concat(16*(parseInt(_.a.parse(n.props.location.search).page)-1),":").concat(16*parseInt(_.a.parse(n.props.location.search).page))),server:sessionStorage.getItem("server")||localStorage.getItem("server")},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,r,s,c,o=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.auth,n=t.category,r=t.range,s=t.server,c="".concat(s,"/api/v1/metadata?a=").concat(a,"&c=").concat(n,"&r=").concat(r,"&s=alphabet-asc"),w.a.get(c).then((function(e){return o.setState({isLoaded:!0,metadata:e.data,pages:Math.ceil(e.data[0].length/16)})})).catch((function(e){console.error(e),null==a||null==s?(alert("You are not authenticated"),o.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),o.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(s," the correct address?"))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.metadata,r=e.page,s=e.pages;return t?Object(n.jsxs)("div",{className:"CategoryBrowse",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(T,{metadata:a}),Object(n.jsx)(de,{props:{page:r,pages:s,thisprops:this.props}})]}):Object(n.jsx)("div",{className:"Loading",children:Object(n.jsx)(y.a,{color:"#4197fe",size:75})})}}]),a}(s.Component),I=a(190),T=(a(152),function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={metadata:n.props.metadata},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.metadata;return Object(n.jsx)("div",{className:"Gallery",children:e.length?e.map((function(e){return Object(n.jsxs)("div",{className:"category",children:[Object(n.jsx)(l.b,{to:"/browse/".concat(e.name),className:"category__title no_decoration_link",children:e.name},ye()),Object(n.jsx)("div",{className:"items",children:e.children.length?e.children.map((function(e){return Object(n.jsxs)("figure",{className:"item__figure",children:[Object(n.jsx)(l.b,{to:"/view/".concat(e.id),children:Object(n.jsx)("img",{src:e.posterPath,className:"item__poster",alt:e.title},ye())},ye()),Object(n.jsx)(I.a,{className:"item__title",children:e.title},ye())]},ye())})):null})]},ye())})):null})}}]),a}(s.Component)),L=a(10),A=a(204),D=a(196),q=a(202),P=a(70),E=a.n(P),M=a(5),Y=a(194),z=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:"",error:"",password:"",server:"",tempServer:window.location.origin,username:""},n.handleTempServerChange=n.handleTempServerChange.bind(Object(L.a)(n)),n.handlePassChange=n.handlePassChange.bind(Object(L.a)(n)),n.handleUserChange=n.handleUserChange.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n.dismissError=n.dismissError.bind(Object(L.a)(n)),n}return Object(j.a)(a,[{key:"dismissError",value:function(){this.setState({error:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.auth,r=a.password,s=a.server,c=a.tempServer,o=a.username;return c?o?r?(w.a.get("".concat(c,"/api/v1/auth?u=").concat(o,"&p=").concat(r)).then((function(e){return t.setState({auth:e.data.auth,server:c})})).then((function(){n&&s&&(localStorage.setItem("server",s),sessionStorage.setItem("server",s),localStorage.setItem("auth",n),sessionStorage.setItem("auth",n),t.props.history.push("/"))})).catch((function(e){console.error(e),null==n||null==s?(alert("You are not authenticated"),t.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),t.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(s," the correct address?"))})),this.setState({error:""})):this.setState({error:"Password is required"}):this.setState({error:"Username is required"}):this.setState({error:"Server is required"})}},{key:"handleTempServerChange",value:function(e){this.setState({tempServer:e.target.value})}},{key:"handleUserChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.password,r=e.tempServer,s=e.username,c=this.props.classes;return Object(n.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(u.a,{}),Object(n.jsxs)("div",{className:c.paper,children:[Object(n.jsx)(A.a,{className:c.avatar,children:Object(n.jsx)(E.a,{})}),Object(n.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:c.form,onSubmit:this.handleSubmit,noValidate:!0,children:[t&&Object(n.jsx)("div",{style:{},children:Object(n.jsxs)("h3",{"data-test":"error",onClick:this.dismissError,children:[Object(n.jsx)("button",{onClick:this.dismissError,children:"\u2716"}),t]})}),Object(n.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"server",label:"Server",name:"server",autoComplete:"server",onChange:this.handleTempServerChange,value:r,autoFocus:!0}),Object(n.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",onChange:this.handleUserChange,value:s}),Object(n.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handlePassChange,value:a}),Object(n.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Sign In"})]})]})]})}}]),a}(s.Component),F=Object(M.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(z),R=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return localStorage.clear(),sessionStorage.clear(),Object(n.jsx)(d.a,{to:"/login"})}}]),a}(s.Component),V=a(45),U=a(51),B=a(197),W=a(23),J=a(198),G=a(200),K=a(205),H=a(101),Q=a(206),X=a(199),Z=a(98),$=a.n(Z),ee=a(71),te=a.n(ee),ae=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={accounts:{},auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),categories:{},isLoaded:!1,server:sessionStorage.getItem("server")||localStorage.getItem("server")},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,r,s=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.auth,n=t.server,r="".concat(n,"/api/v1/environment?a=").concat(a),w.a.get(r).then((function(e){return s.setState({accounts:e.data.account_list,categories:e.data.category_list,isLoaded:!0})})).catch((function(e){console.error(e),null==a||null==n?(alert("You are not authenticated"),s.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),s.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(n," the correct address?"))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.accounts,a=e.categories;return e.isLoaded?Object(n.jsx)("div",{className:"Nav",children:Object(n.jsx)(re,{props:{categories:a,accounts:t}})}):Object(n.jsx)("div",{className:"Loading"})}}]),a}(s.Component),ne=Object(B.a)((function(e){return{root:{backgroundColor:"#1f1f1f",color:"#ffffff"},grow:{flexGrow:1},title:Object(U.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(U.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(U.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),browse:{marginRight:"15px"}}}));function re(e){var t=ne(),a=Object(s.useState)(""),r=Object(V.a)(a,2),c=r[0],o=r[1];return Object(n.jsx)("div",{className:t.grow,children:Object(n.jsx)(J.a,{position:"static",className:t.root,children:Object(n.jsxs)(X.a,{children:[Object(n.jsx)(l.b,{to:"/",className:"no_decoration_link",children:Object(n.jsx)(I.a,{className:t.title,variant:"h6",noWrap:!0,children:"libDrive"})}),Object(n.jsxs)("form",{className:t.search,onSubmit:function(e){e.preventDefault(),window.location.hash="#/search/".concat(c)},children:[Object(n.jsx)("div",{className:t.searchIcon,children:Object(n.jsx)($.a,{})}),Object(n.jsx)(K.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){o(e.target.value)}})]}),Object(n.jsx)("div",{className:t.grow}),Object(n.jsx)(se,{props:e.props.categories}),Object(n.jsx)(ce,{props:e.props.accounts})]})})})}function se(e){var t=c.a.useState(null),a=Object(V.a)(t,2),r=a[0],s=a[1],o=ne(),i=function(){s(null)};return Object(n.jsxs)("div",{className:o.browse,children:[Object(n.jsx)(D.a,{"aria-controls":"browse-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:"Browse"}),Object(n.jsx)(H.a,{id:"browse-menu",anchorEl:r,keepMounted:!0,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:i,children:e.props.length?e.props.map((function(e){return Object(n.jsx)(l.b,{to:"/browse/".concat(e.name),className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:i,children:e.name})},ye())})):null})]})}function ce(e){var t=c.a.useState(null),a=Object(V.a)(t,2),r=a[0],s=a[1],o=function(){s(null)},i=Object(n.jsx)(te.a,{});return(e.props.pic.includes("http")||e.props.pic.includes("www"))&&(i=Object(n.jsx)("img",{src:e.props.pic,width:"32px",alt:"profile-pic"})),Object(n.jsxs)("div",{children:[Object(n.jsx)(G.a,{"aria-label":"more","aria-controls":"account-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:i}),Object(n.jsxs)(H.a,{id:"account-menu",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:Boolean(r),onClose:o,children:[Object(n.jsx)(l.b,{to:"/settings",className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:o,children:"Settings"})}),Object(n.jsx)(l.b,{to:"/logout",className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:o,children:"Logout"})})]})]})}var oe=a(207),ie=a(203),le=Object(B.a)((function(e){return{root:{"& > *":{position:"absolute",left:"50%",transform:"translate(-50%, -50%)",marginTop:e.spacing(4)}}}}));function de(e){var t=e.props,a=t.page,s=t.pages,c=t.thisprops,o=le();return a>s?Object(n.jsx)(d.a,{to:{pathname:c.location.pathname,search:"?page=".concat(s)}}):Object(n.jsx)("div",{className:o.root,children:Object(n.jsx)(oe.a,{page:a,count:s,variant:"outlined",color:"primary",renderItem:function(e){return Object(n.jsx)(l.b,{to:{pathname:c.location.pathname,search:"?page=".concat(e.page)},className:"no_decoration_link",children:Object(n.jsx)(ie.a,Object(r.a)({},e))},ye())}})})}var ue=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),isLoaded:!1,metadata:[],query:n.props.match.params.q,server:sessionStorage.getItem("server")||localStorage.getItem("server")},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,r,s,c=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.auth,n=t.query,r=t.server,s="".concat(r,"/api/v1/metadata?a=").concat(a,"&q=").concat(n),w.a.get(s).then((function(e){return c.setState({isLoaded:!0,metadata:e.data})})).catch((function(e){console.error(e),null==a||null==r?(alert("You are not authenticated"),c.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),c.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(r," the correct address?"))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.metadata;return t?Object(n.jsxs)("div",{className:"Search",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(T,{metadata:a})]}):Object(n.jsx)("div",{className:"Loading",children:Object(n.jsx)(y.a,{color:"#4197fe",size:75})})}}]),a}(s.Component),he=a(79),pe=a.n(he),je=a(78),ge=a.n(je),me=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),error:"",isLoaded:!1,secret:sessionStorage.getItem("secret"),server:sessionStorage.getItem("server")||localStorage.getItem("server")},n.handleCategoryTypeChange=n.handleCategoryTypeChange.bind(Object(L.a)(n)),n.handleCategoryNameChange=n.handleCategoryNameChange.bind(Object(L.a)(n)),n.handleCategoryIdChange=n.handleCategoryIdChange.bind(Object(L.a)(n)),n.handleCategoryDriveIdChange=n.handleCategoryDriveIdChange.bind(Object(L.a)(n)),n.handleAddCategory=n.handleAddCategory.bind(Object(L.a)(n)),n.handleRemoveCategory=n.handleRemoveCategory.bind(Object(L.a)(n)),n.handleSecretChange=n.handleSecretChange.bind(Object(L.a)(n)),n.handleAccountUsernameChange=n.handleAccountUsernameChange.bind(Object(L.a)(n)),n.handleAccountPasswordChange=n.handleAccountPasswordChange.bind(Object(L.a)(n)),n.handleAccountPicChange=n.handleAccountPicChange.bind(Object(L.a)(n)),n.handleAddAccount=n.handleAddAccount.bind(Object(L.a)(n)),n.handleRemoveAccount=n.handleRemoveAccount.bind(Object(L.a)(n)),n.dismissError=n.dismissError.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=(t.auth,t.secret),n=t.server;w.a.get("".concat(n,"/api/v1/config?secret=").concat(a)).then((function(t){return e.setState({config:t.data,isLoaded:!0,postConfig:t.data,tempSecret:t.data.secret_key})})).catch((function(t){console.error(t),t.response?401===t.response.status?(alert("Your credentials are invalid."),sessionStorage.removeItem("secret"),e.props.history.push("/settings/login")):alert("Something went wrong while communicating with the backend"):t.request&&alert("libDrive could not communicate with the backend. Is ".concat(n," the correct address?"))}))}},{key:"dismissError",value:function(){this.setState({error:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.secret,r=a.server;fetch("".concat(r,"/api/v1/config?secret=").concat(n),{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state.postConfig)}).then((function(e){e.ok&&alert("The config has been updated on the backend. The backend may need to be restarted for some settings to update.")})),w.a.post("".concat(r,"/api/v1/config?secret=").concat(n),this.state.postConfig).then((function(e){alert("The config has been updated on the backend. The backend may need to be restarted for some settings to update.")})).catch((function(e){console.error(e),null==auth||null==r?(alert("You are not authenticated"),t.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),t.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(r," the correct address?"))}))}},{key:"handleCategoryTypeChange",value:function(e){var t=e.target.value.split("_")[0],a=e.target.value.split("_")[1],n=this.state.postConfig;n.category_list[a].type=t,this.setState({postConfig:n})}},{key:"handleCategoryNameChange",value:function(e){var t=e.target.value,a=e.target.id.split("_")[1],n=this.state.postConfig;n.category_list[a].name=t,this.setState({postConfig:n})}},{key:"handleCategoryIdChange",value:function(e){var t=e.target.value,a=e.target.id.split("_")[1],n=this.state.postConfig;n.category_list[a].id=t,this.setState({postConfig:n})}},{key:"handleCategoryDriveIdChange",value:function(e){var t=e.target.value,a=e.target.id.split("_")[1],n=this.state.postConfig;n.category_list[a].driveId=t,this.setState({postConfig:n})}},{key:"handleAddCategory",value:function(e){var t=this.state.postConfig;t.category_list.push({type:"",name:"",id:"",driveId:""}),this.setState({postConfig:t})}},{key:"handleRemoveCategory",value:function(e){var t=e.target.id.split("_")[1],a=this.state.postConfig;a.category_list.splice(t,1),this.setState({postConfig:a})}},{key:"handleSecretChange",value:function(e){var t=e.target.value,a=this.state.postConfig;a.secret_key=t,this.setState({postConfig:a})}},{key:"handleAccountUsernameChange",value:function(e){var t=e.target.value,a=e.target.id.split("_")[1],n=this.state.postConfig;n.account_list[a].username=t,this.setState({postConfig:n})}},{key:"handleAccountPasswordChange",value:function(e){var t=e.target.value,a=e.target.id.split("_")[1],n=this.state.postConfig;n.account_list[a].password=t,this.setState({postConfig:n})}},{key:"handleAccountPicChange",value:function(e){var t=e.target.value,a=e.target.id.split("_")[1],n=this.state.postConfig;n.account_list[a].pic=t,this.setState({postConfig:n})}},{key:"handleAddAccount",value:function(e){var t=this.state.postConfig;t.account_list.push({username:"",password:"",pic:""}),this.setState({postConfig:t})}},{key:"handleRemoveAccount",value:function(e){var t=e.target.id.split("_")[1],a=this.state.postConfig;a.account_list.splice(t,1),this.setState({postConfig:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.config,r=t.isLoaded,s=this.props.classes;return r?Object(n.jsxs)("div",{className:"Settings",children:[Object(n.jsx)(ae,{}),Object(n.jsxs)("form",{className:s.Form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(n.jsx)(I.a,{variant:"h3",children:"Categories"}),a.category_list.length?a.category_list.map((function(t,a){return Object(n.jsxs)("div",{style:{margin:"30px"},children:[Object(n.jsxs)(q.a,{className:"TextField",id:"category-type_".concat(a),select:!0,label:"Select Type",variant:"outlined",value:"".concat(e.state.postConfig.category_list[a].type,"_").concat(a),onChange:e.handleCategoryTypeChange,children:[Object(n.jsx)(Q.a,{value:"movies_".concat(a),children:"Movies"},ye()),Object(n.jsx)(Q.a,{value:"tv_".concat(a),children:"TV Shows"},ye()),Object(n.jsx)(Q.a,{value:"other_".concat(a),children:"Other"},ye())]}),Object(n.jsx)(q.a,{className:"TextField",id:"category-name_".concat(a),label:"Name",variant:"outlined",value:e.state.postConfig.category_list[a].name,onChange:e.handleCategoryNameChange}),Object(n.jsx)(q.a,{className:"TextField",id:"category-id_".concat(a),label:"Folder ID",variant:"outlined",value:e.state.postConfig.category_list[a].id,onChange:e.handleCategoryIdChange}),Object(n.jsx)(q.a,{className:"TextField",id:"category-driveId_".concat(a),label:"Team Drive ID",variant:"outlined",value:e.state.postConfig.category_list[a].driveId,onChange:e.handleCategoryDriveIdChange}),Object(n.jsx)(G.a,{"aria-label":"remove",id:"category-remove_".concat(a),onClick:e.handleRemoveCategory,children:Object(n.jsx)(ge.a,{id:"category-remove_".concat(a)})})]})})):null,Object(n.jsx)(G.a,{"aria-label":"add",onClick:this.handleAddCategory,children:Object(n.jsx)(pe.a,{})}),Object(n.jsx)(I.a,{variant:"h3",children:"Accounts"}),a.account_list.length?a.account_list.map((function(t,r){return Object(n.jsxs)("div",{style:{margin:"30px"},children:[Object(n.jsx)(q.a,{className:"TextField",id:"account-username_".concat(r),label:"Username",variant:"outlined",value:e.state.postConfig.account_list[r].username,onChange:e.handleAccountUsernameChange}),Object(n.jsx)(q.a,{className:"TextField",id:"account-password_".concat(r),label:"Password",type:"password",variant:"outlined",value:e.state.postConfig.account_list[r].password,onChange:e.handleAccountPasswordChange}),Object(n.jsx)(q.a,{className:"TextField",id:"account-pic_".concat(r),label:"Picture",variant:"outlined",value:e.state.postConfig.account_list[r].pic,onChange:e.handleAccountPicChange}),Object(n.jsx)(G.a,{"aria-label":"remove",id:"account-remove_".concat(r),onClick:e.handleRemoveAccount,children:Object(n.jsx)(ge.a,{id:"account-remove_".concat(r)})}),Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"},children:Object(n.jsx)("img",{src:a.account_list[r].pic,width:"64px",alt:"profile-pic"})||Object(n.jsx)(te.a,{})})]})})):null,Object(n.jsx)(G.a,{"aria-label":"add",onClick:this.handleAddAccount,children:Object(n.jsx)(pe.a,{})}),Object(n.jsx)(I.a,{variant:"h3",children:"Secret Key"}),Object(n.jsx)(q.a,{className:"TextField",id:"outlined-basic",label:"Secret Key",type:"password",variant:"outlined",value:this.state.postConfig.secret_key,onChange:this.handleSecretChange}),Object(n.jsx)("br",{}),Object(n.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.submit,block:!0,children:"Submit"})]})]}):Object(n.jsx)("div",{className:"Loading",children:Object(n.jsx)(y.a,{color:"#4197fe",size:75})})}}]),a}(s.Component),be=Object(M.a)((function(e){return{Form:{textAlign:"center","& .MuiTextField-root":{width:"30ch",margin:e.spacing(1),textAlign:"left"},"& .MuiTypography-root":{margin:"30px 30px"}},submit:{margin:e.spacing(4,0,2),width:"20ch"}}}),{withTheme:!0})(me),ve=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),error:"",secret:"",server:sessionStorage.getItem("server")||localStorage.getItem("server")},n.handleSecretChange=n.handleSecretChange.bind(Object(L.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(L.a)(n)),n.dismissError=n.dismissError.bind(Object(L.a)(n)),n}return Object(j.a)(a,[{key:"dismissError",value:function(){this.setState({error:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.secret,r=a.server;return n?(w.a.get("".concat(r,"/api/v1/config?secret=").concat(n)).then((function(e){sessionStorage.setItem("secret",n),t.props.history.push("/settings")})).catch((function(e){console.error(e),e.response?401===e.response.status?alert("Your credentials are invalid."):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(r," the correct address?"))})),this.setState({error:""})):this.setState({error:"Secret is required"})}},{key:"handleSecretChange",value:function(e){this.setState({secret:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.secret,r=this.props.classes;return Object(n.jsxs)("div",{className:"SettingsLoginForm",children:[Object(n.jsx)(ae,{}),Object(n.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(u.a,{}),Object(n.jsxs)("div",{className:r.paper,children:[Object(n.jsx)(A.a,{className:r.avatar,children:Object(n.jsx)(E.a,{})}),Object(n.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:r.form,onSubmit:this.handleSubmit,noValidate:!0,children:[t&&Object(n.jsx)("div",{style:{},children:Object(n.jsxs)("h3",{"data-test":"error",onClick:this.dismissError,children:[Object(n.jsx)("button",{onClick:this.dismissError,children:"\u2716"}),t]})}),Object(n.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"secret",label:"Secret",name:"secret",type:"password",autoComplete:"secret",onChange:this.handleSecretChange,value:a,autoFocus:!0}),Object(n.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit,block:!0,children:"Sign In"})]})]})]})]})}}]),a}(s.Component),Oe=Object(M.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(ve),fe=a(100),xe=Object(fe.a)({palette:{type:"dark",primary:{main:"#4197fe"},secondary:{main:"#68a0e5"},error:{main:"#d32f2f"},warning:{main:"#ff9800"},success:{main:"#4caf50"},background:{default:"#111"}}});function ye(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var Ce=a(80),we=(a(155),a(156),function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={server:sessionStorage.getItem("server")||localStorage.getItem("server"),auth:sessionStorage.getItem("auth")||localStorage.getItem("auth"),isLoaded:!1,metadata:{},id:n.props.match.params.id},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,r,s,c=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.auth,n=t.id,r=t.server,s="".concat(r,"/api/v1/metadata?a=").concat(a,"&id=").concat(n),w.a.get(s).then((function(e){c.setState({metadata:e.data,isLoaded:!0})})).catch((function(e){console.error(e),null==a||null==r?(alert("You are not authenticated"),c.props.history.push("/logout")):e.response?401===e.response.status?(alert("Your credentials are invalid. Logging you out now."),c.props.history.push("/logout")):alert("Something went wrong while communicating with the backend"):e.request&&alert("libDrive could not communicate with the backend. Is ".concat(r," the correct address?"))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.metadata,r=this.state;return r.thisprops=this.props,t&&"file"==a.type?Object(n.jsxs)("div",{className:"View",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(Se,{props:r})]}):t&&"directory"==a.type&&a.title?Object(n.jsxs)("div",{className:"View",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(ke,{props:r})]}):t&&"directory"==a.type?Object(n.jsxs)("div",{className:"View",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(_e,{props:r})]}):Object(n.jsx)("div",{className:"Loading",children:Object(n.jsx)(y.a,{color:"#4197fe",size:75})})}}]),a}(s.Component));function Se(e){var t=e.props,a=t.auth,r=t.id,s=t.metadata,c=t.server;return Object(n.jsxs)("div",{className:"MovieView",children:[Object(n.jsx)("div",{className:"plyr__component",children:Object(n.jsx)(Ce.a,{source:{type:"video",poster:"https://drive.google.com/thumbnail?sz=w1920&id=".concat(s.id)||!1,sources:[{src:"".concat(c,"/api/v1/download/").concat(s.name,"?a=").concat(a,"&id=").concat(r)}]},options:{controls:["play-large","rewind","play","fast-forward","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","download","fullscreen"]}})}),Object(n.jsxs)("div",{className:"info__container",children:[Object(n.jsx)("div",{className:"info__left",children:Object(n.jsx)("img",{className:"info__poster",src:s.posterPath})}),Object(n.jsxs)("div",{className:"info__right",children:[Object(n.jsx)(I.a,{variant:"h2",className:"info__title",children:s.title}),Object(n.jsx)(I.a,{variant:"body1",className:"info__overview",style:{marginTop:"30px"},children:s.overview}),Object(n.jsx)(Ne,{props:e.props})]})]})]})}function ke(e){var t=e.props.metadata;return Object(n.jsx)("div",{className:"TVBView",children:Object(n.jsxs)("div",{className:"info__container",children:[Object(n.jsx)("div",{className:"info__left",children:Object(n.jsx)("img",{className:"info__poster",src:t.posterPath})}),Object(n.jsxs)("div",{className:"info__right",children:[Object(n.jsx)(I.a,{variant:"h2",className:"info__title",children:t.title}),Object(n.jsx)(I.a,{variant:"body1",className:"info__overview",style:{marginTop:"30px"},children:t.overview}),Object(n.jsx)("div",{className:"buttons__container",children:Object(n.jsx)("div",{className:"button",children:Object(n.jsx)(Ie,{props:e.props})})})]})]})})}function _e(e){var t=e.props,a=t.auth,r=(t.id,t.metadata),s=t.server,c=t.thisprops,o=parseInt(_.a.parse(c.location.search).q)||0;function i(e,t){return e===t?"pls-playing":""}return console.log(c.location),Object(n.jsxs)("div",{className:"TVSView",children:[Object(n.jsx)(I.a,{variant:"h2",style:{textAlign:"center",marginTop:"25px"},children:r.name}),Object(n.jsx)(I.a,{variant:"h5",style:{textAlign:"center",marginTop:"15px"},children:r.children[o].name}),Object(n.jsxs)("div",{className:"plyr__component",children:[Object(n.jsx)(Ce.a,{source:{type:"video",poster:"https://drive.google.com/thumbnail?sz=w1920&id=".concat(r.children[o].id)||!1,sources:[{src:"".concat(s,"/api/v1/download/").concat(r.children[o].name,"?a=").concat(a,"&id=").concat(r.children[o].id)}]},options:{controls:["play-large","rewind","play","fast-forward","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","download","fullscreen"]}}),Object(n.jsx)("div",{class:"plyr-playlist-wrapper",children:Object(n.jsx)("ul",{class:"plyr-playlist",children:r.children.length?r.children.map((function(e,t){return Object(n.jsx)("li",{className:i(t,o),children:Object(n.jsxs)(l.b,{to:{pathname:c.location.pathname,search:"?q=".concat(t)},children:[Object(n.jsx)("img",{class:"plyr-miniposter"}),e.name]},ye())})})):null})})]}),Object(n.jsx)("div",{style:{textAlign:"center",marginBottom:"5vh"},children:Object(n.jsx)(Ne,{props:{auth:a,id:r.children[o].id,metadata:r.children[o],server:s}})})]})}function Ne(e){var t=c.a.useState(null),a=Object(V.a)(t,2),r=a[0],s=a[1],o=function(){s(null)},i=e.props,l=i.auth,d=i.id,u=i.metadata,h=i.server;return Object(n.jsxs)("div",{className:"PlayerMenu",style:{marginTop:"30px"},children:[Object(n.jsx)(D.a,{"aria-controls":"player-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},variant:"contained",color:"primary",children:"External Player"}),Object(n.jsxs)(H.a,{id:"player-menu",anchorEl:r,keepMounted:!0,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:o,children:[Object(n.jsx)("a",{href:"vlc://".concat(h,"/api/v1/download/").concat(u.name,"?a=").concat(l,"&id=").concat(d),className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:o,children:"VLC"})}),Object(n.jsx)("a",{href:"potplayer://".concat(h,"/api/v1/download/").concat(u.name,"?a=").concat(l,"&id=").concat(d),className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:o,children:"PotPlayer"})}),Object(n.jsx)("a",{href:"".concat(h,"/api/v1/download/").concat(u.name,"?a=").concat(l,"&id=").concat(d),className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:o,children:"Download"})})]})]})}function Ie(e){var t=c.a.useState(null),a=Object(V.a)(t,2),r=a[0],s=a[1],o=function(){s(null)},i=e.props.metadata;return Object(n.jsxs)("div",{className:"ChildrenMenu",style:{marginTop:"30px"},children:[Object(n.jsx)(D.a,{"aria-controls":"children-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},variant:"contained",color:"primary",children:"Seasons"}),Object(n.jsx)(H.a,{id:"children-menu",anchorEl:r,keepMounted:!0,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:o,children:i.children.length?i.children.map((function(e){return Object(n.jsx)(l.b,{to:"/view/".concat(e.id),className:"no_decoration_link",children:Object(n.jsx)(Q.a,{onClick:o,children:e.name})},ye())})):null})]})}a(157);i.a.render(Object(n.jsx)(l.a,{children:Object(n.jsxs)(h.a,{theme:xe,children:[Object(n.jsx)(u.a,{}),Object(n.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(b,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/browse",render:function(e){return Object(n.jsx)(S,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/browse/:category",render:function(e){return Object(n.jsx)(N,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/login",render:function(e){return Object(n.jsx)(F,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/logout",render:function(e){return Object(n.jsx)(R,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/search/:q",render:function(e){return Object(n.jsx)(ue,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/settings",render:function(e){return Object(n.jsx)(be,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/settings/login",render:function(e){return Object(n.jsx)(Oe,Object(r.a)({},e),ye())}}),Object(n.jsx)(d.b,{exact:!0,path:"/view/:id",render:function(e){return Object(n.jsx)(we,Object(r.a)({},e),ye())}})]})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.e7b0424a.chunk.js.map