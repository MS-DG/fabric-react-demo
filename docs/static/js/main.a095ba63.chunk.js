(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(113)},113:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(19),l=n.n(o),s=n(26),c=n(27),r=n(29),m=n(28),d=n(30),u=n(49),h=n(95),f=n(148),p=n(6),k=n(7),g=n(158),b=n(3),y=n(160),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a))))._onBreadcrumbItemClicked=function(e,t){console.log('Breadcrumb item with key "'.concat(t.key,'" has been clicked.'))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.createElement("div",null,i.createElement(y.a,{items:[{text:"\u6211\u7684\u6587\u6863",key:"TestKey0",href:"#",onClick:this._onBreadcrumbItemClicked},{text:"\u6587\u4ef6\u59391",key:"TestKey1",href:"#",onClick:this._onBreadcrumbItemClicked},{text:"\u6587\u4ef6\u59392",key:"TestKey2",href:"#",onClick:this._onBreadcrumbItemClicked},{text:"\u6587\u4ef6\u59393",key:"TestKey3",href:"#",onClick:this._onBreadcrumbItemClicked},{text:"\u6587\u4ef6\u59394",key:"TestKey4",href:"#",onClick:this._onBreadcrumbItemClicked},{text:"\u6587\u4ef6\u59395",key:"TestKey5",href:"#",onClick:this._onBreadcrumbItemClicked,isCurrentItem:!0}],maxDisplayedItems:3,overflowIndex:1,overflowAriaLabel:"More items",ariaLabel:"Breadcrumb with maxDisplayedItems set to two and overflowIndex set to 1"}))}}]),t}(i.Component),C=n(152),x=n(168),w=n(151),S=n(92),_=n(167),I=n(35),M=n(90),O=n(161),B=n(9),E=n(163),D=n(67),j=Object(b.v)({fileIconHeaderIcon:{padding:0,fontSize:"16px"},fileIconCell:{textAlign:"center",selectors:{"&:before":{content:".",display:"inline-block",verticalAlign:"middle",height:"100%",width:"0px",visibility:"hidden"}}},fileIconImg:{verticalAlign:"middle",maxHeight:"16px",maxWidth:"16px"},selectionDetails:{marginBottom:"20px"},fileList:{width:"100%",selectors:{"@media(min-width: 1024px)":{width:"90%"},"@media(min-width: 1366px)":{width:"80%"},"@media(min-width: 1920px)":{width:1200}}}}),T=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e)))._selection=void 0,n._allItems=void 0,n._showDialog=function(){console.log(Object(u.a)(n)),n.setState({hideDialog:!1})},n._closeDialog=function(){n.setState({hideDialog:!0})},n._onChangeText=function(e,t){n.setState({items:t?n._allItems.filter(function(e){return e.name.toLowerCase().indexOf(t)>-1}):n._allItems})},n._onColumnClick=function(e,t){var i=n.state,a=i.columns,o=i.items,l=a.slice(),s=l.filter(function(e){return t.key===e.key})[0];l.forEach(function(e){e===s?(s.isSortedDescending=!s.isSortedDescending,s.isSorted=!0):(e.isSorted=!1,e.isSortedDescending=!0)});var c=function(e,t,n){var i=t;return e.slice(0).sort(function(e,t){return(n?e[i]<t[i]:e[i]>t[i])?1:-1})}(o,s.fieldName,s.isSortedDescending);n.setState({columns:l,items:c})},n._allItems=function(){for(var e=[],t=0;t<500;t++){var n=N(new Date(2012,0,1),new Date),i=W(),a=P(),o=L(2);o=o.charAt(0).toUpperCase()+o.slice(1).concat(".".concat(a.docType));var l=L(2);l=l.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" "),e.push({name:o,value:o,iconName:a.url,fileType:a.docType,modifiedBy:l,dateModified:n.dateFormatted,dateModifiedValue:n.value,fileSize:i.value,fileSizeRaw:i.rawSize})}return e}();var a=[{key:"column1",name:"\u6587\u4ef6\u7c7b\u578b",className:j.fileIconCell,iconClassName:j.fileIconHeaderIcon,ariaLabel:"Column operations for File type, Press to sort on File type",iconName:"Page",isIconOnly:!0,fieldName:"name",minWidth:16,maxWidth:16,onColumnClick:n._onColumnClick,onRender:function(e){return i.createElement("img",{src:e.iconName,className:j.fileIconImg,alt:e.fileType+" file icon"})}},{key:"column2",name:"\u6587\u4ef6\u540d",fieldName:"name",minWidth:150,maxWidth:500,isRowHeader:!0,isResizable:!0,isSorted:!0,isSortedDescending:!1,sortAscendingAriaLabel:"Sorted A to Z",sortDescendingAriaLabel:"Sorted Z to A",onColumnClick:n._onColumnClick,data:"string",isPadded:!0},{key:"column3",name:"\u4fee\u6539\u65e5\u671f",fieldName:"dateModifiedValue",minWidth:70,maxWidth:100,isResizable:!0,onColumnClick:n._onColumnClick,data:"number",onRender:function(e){return i.createElement("span",null,e.dateModified)},isPadded:!0},{key:"column4",name:"\u4f5c\u8005",fieldName:"modifiedBy",minWidth:70,maxWidth:100,isResizable:!0,isCollapsible:!0,data:"string",onColumnClick:n._onColumnClick,onRender:function(e){return i.createElement("span",null,e.modifiedBy)},isPadded:!0},{key:"column5",name:"\u6587\u4ef6\u5927\u5c0f",fieldName:"fileSizeRaw",minWidth:70,maxWidth:90,isResizable:!0,isCollapsible:!0,data:"number",onColumnClick:n._onColumnClick,onRender:function(e){return i.createElement("span",null,e.fileSize)}},{key:"column6",name:"\u64cd\u4f5c",minWidth:90,maxWidth:120,isResizable:!1,isCollapsible:!1,data:"number",onRender:function(e){return i.createElement("div",null,i.createElement(x.a,{onClick:n._showDialog,iconProps:{iconName:"CloudDownload"}}),i.createElement(x.a,{menuIconProps:{iconName:"MoreVertical"},role:"button","aria-haspopup":!0,"aria-label":"Show actions",menuProps:{items:[{key:"delete",text:"\u5220\u9664"},{key:"rename",text:"\u91cd\u547d\u540d"},{key:"voice",text:"\u6587\u6863\u5f55\u97f3"},{key:"doc",text:"\u624b\u673a\u4e0a\u67e5\u770b"}]}}))}}];return n._selection=new f.a({onSelectionChanged:function(){n.setState({selectionDetails:n._getSelectionDetails()})}}),n.state={items:[],columns:a,selectionDetails:n._getSelectionDetails(),isModalSelection:!0,isCompactMode:!1,loaded:!1,hideDialog:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({items:e._allItems,loaded:!0})},1e3)}},{key:"render",value:function(){var e=this.state,t=e.columns,n=e.isCompactMode,a=e.items,o=e.selectionDetails,l=e.isModalSelection,s=e.loaded;return i.createElement(h.a,null,i.createElement(E.a,{maxWidth:"100%"},i.createElement(D.a,{align:"auto"},i.createElement(O.a,{messageBarType:B.a.info},o)),i.createElement(D.a,{align:"center",className:j.fileList},i.createElement(v,null),i.createElement(g.a,{selection:this._selection},i.createElement(C.a,{enableShimmer:!s,items:a,compact:n,columns:t,selectionMode:l?p.b.multiple:p.b.none,setKey:"set",layoutMode:k.e.justified,isHeaderVisible:!0,selection:this._selection,selectionPreservedOnEmptyClick:!0,onItemInvoked:this._onItemInvoked,enterModalSelectionOnTouch:!0,ariaLabelForSelectionColumn:"Toggle selection",ariaLabelForSelectAllCheckbox:"Toggle selection for all items"})))),i.createElement(_.a,{hidden:this.state.hideDialog,onDismiss:this._closeDialog,dialogContentProps:{type:I.a.normal,title:"\u4e0b\u8f7d",subText:"\u4fdd\u5b58\u6b64\u6587\u4ef6\u5230\u7535\u8111?"},modalProps:{isBlocking:!0}},i.createElement(M.a,null,i.createElement(w.a,{onClick:this._closeDialog,text:"\u4fdd\u5b58"}),i.createElement(S.a,{onClick:this._closeDialog,text:"\u53d6\u6d88"}))))}},{key:"componentDidUpdate",value:function(e,t){t.isModalSelection===this.state.isModalSelection||this.state.isModalSelection||this._selection.setAllSelected(!1)}},{key:"_onItemInvoked",value:function(e){alert("Item invoked: ".concat(e.name))}},{key:"_getSelectionDetails",value:function(){var e=this._selection.getSelectedCount();switch(e){case 0:return"No items selected";case 1:return"1 item selected: "+this._selection.getSelection()[0].name;default:return"".concat(e," items selected")}}}]),t}(i.Component);function N(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()));return{value:n.valueOf(),dateFormatted:n.toLocaleDateString()}}var R=[{name:"accdb"},{name:"csv"},{name:"docx"},{name:"dotx"},{name:"mpt"},{name:"odt"},{name:"one"},{name:"onepkg"},{name:"onetoc"},{name:"pptx"},{name:"pub"},{name:"vsdx"},{name:"xls"},{name:"xlsx"},{name:"xsn"}];function P(){var e=R[Math.floor(Math.random()*R.length)].name;return{docType:e,url:"https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/".concat(e,"_16x1.svg")}}function W(){var e=Math.floor(100*Math.random())+30;return{value:"".concat(e," KB"),rawSize:e}}var A="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt ".split(" "),z=0;function L(e){var t=z+e>A.length?0:z;return z=t+e,A.slice(t,z).join(" ")}var F=n(154),K=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).inputOpenFileRef=void 0,n._showModal=function(){n.setState({showModal:!0})},n._hideModal=function(){n.setState({showModal:!1})},n._showMessageBar=function(){n.setState({showMessageBar:!0}),setTimeout(n._hideMessageBar,2e3)},n._hideMessageBar=function(){n.setState({showMessageBar:!1})},n.inputOpenFileRef=i.createRef(),n.state={showModal:!1,showMessageBar:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"clickUpload",value:function(){this.inputOpenFileRef.current&&this.inputOpenFileRef.current.click()}},{key:"render",value:function(){var e=this;return i.createElement("div",null,i.createElement(F.a,{items:[{key:"commandBarItem2",text:"\u5237\u65b0",iconProps:{iconName:"Refresh"},onClick:this._showMessageBar},{key:"commandBarItem1",text:"\u4e0a\u4f20",iconProps:{iconName:"Upload"},onClick:this.clickUpload.bind(this)},{key:"upload-dummy",onRender:function(){return i.createElement("input",{ref:e.inputOpenFileRef,style:{display:"none"},type:"file"})}}],farItems:[{key:"farItem1",text:"Options",iconProps:{iconName:"SortLines"},subMenuProps:{items:[{key:"emailMessage",text:"Send Email",iconProps:{iconName:"Mail"},onClick:function(){console.log("test1")}},{key:"calendarEvent",text:"Make Calendar Event",iconProps:{iconName:"Calendar"},onClick:function(){console.log("test2")},subMenuProps:{items:[{key:"testButton",text:"Add to Outlook",onClick:function(){console.log("test3")}},{key:"testButton2",text:"Go to Bing",href:"http://www.bing.com",target:"_blank"}]}},{key:"splitButtonTest",text:"Other...",split:!0,subMenuProps:{items:[{key:"splitButtonSubMenu1",text:"Submenu Item w/o Keytip"},{key:"splitButtonSubMenu2",text:"Submenu Item w/o Keytip"}]}}]}}]}),this.state.showMessageBar&&i.createElement(O.a,{messageBarType:B.a.success},"\u5df2\u5237\u65b0"))}}]),t}(i.Component),U=n(153),q=n(164),H=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.createElement(q.a,U.a,i.createElement(K,null),i.createElement(T,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(89);Object(V.a)(),l.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,1,2]]]);
//# sourceMappingURL=main.a095ba63.chunk.js.map