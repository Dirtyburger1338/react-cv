(window["webpackJsonpreact-cv"]=window["webpackJsonpreact-cv"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/shell32_264.bdc4ab6b.ico"},function(e,t,a){e.exports=a.p+"static/media/Chrome-icon.86f49ad5.png"},function(e,t,a){e.exports=a.p+"static/media/imageres_5367.f81d3bf5.ico"},,,function(e,t,a){e.exports=a.p+"static/media/cmd-icon.dedf478d.ico"},function(e,t,a){e.exports=a.p+"static/media/note-icon.b98de453.ico"},function(e,t,a){e.exports=a.p+"static/media/more-settings.f8059619.svg"},function(e,t,a){e.exports=a.p+"static/media/star-favourite.3a08388a.png"},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),c=(a(23),a(2)),o=a(3),s=a(6),m=a(4),d=a(1),u=a(5),p=(a(24),a(9)),b=a.n(p),v=(a(25),a(8)),f=a(11),h=a.n(f),E=a(10),g=a.n(E),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={dirtyminiaturesActive:!1,snake3dActive:!1,minWidth:600,minHeight:400,x:10,y:10,isfullscreen:!1},a.clicks=[],a.handleFullScreenClick=a.handleFullScreenClick.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleFullScreenClick",value:function(){this.state.isfullscreen?(this.setState({isfullscreen:!1}),this.props.normalize("#folder")):(this.props.maximize("#folder"),this.setState({isfullscreen:!0}))}},{key:"clickHandler",value:function(e,t){var a=this;t.persist(),t.preventDefault(),this.clicks.push((new Date).getTime()),window.clearTimeout(this.timeout),this.timeout=window.setTimeout(function(){a.clicks.length>1&&a.clicks[a.clicks.length-1]-a.clicks[a.clicks.length-2]<300&&a.openShortcut(e)},300),this.setFolderIconActive(e)}},{key:"openShortcut",value:function(e){this.props.shortcutOpened(e)}},{key:"setFolderIconActive",value:function(e){this.setState({snake3dActive:!1,dirtyminiaturesActive:!1}),"dirtyminiatures"==e?this.setState({dirtyminiaturesActive:!0}):"snake3d"==e&&this.setState({snake3dActive:!0})}},{key:"render",value:function(){var e=this,t=this.state.isfullscreen?"\u2750":"\u2610";return r.a.createElement(v.a,{id:"folder",minHeight:"100",minWidth:"580",onMouseDown:function(){return e.props.active(".folder-exe")},default:{x:25,y:66,width:700,height:400},cancel:".not-draggable"},r.a.createElement("div",{className:this.state.isfullscreen?"folder-toolbar not-draggable":"folder-toolbar"},r.a.createElement("div",{className:"folder-toolbar-left-btns"},r.a.createElement("img",{src:b.a}),r.a.createElement("div",{className:"folder-toolbar-divider"}),r.a.createElement("img",{src:h.a}),r.a.createElement("img",{src:b.a}),r.a.createElement("div",{className:"folder-toolbar-divider"})),r.a.createElement("div",{className:"folder-toolbar-title"},"My Projects"),r.a.createElement("div",{className:"toolbar-btn-collection not-draggable"},r.a.createElement("button",{className:"folder-toolbar-btn minimize-btn",onClick:function(){return e.props.minimize(".folder-exe")}},"\u2015"),r.a.createElement("button",{className:"folder-toolbar-btn maximize-btn",onClick:this.handleFullScreenClick},t),r.a.createElement("button",{className:"folder-toolbar-btn close-btn",onClick:function(){return e.props.exit(".folder-exe")}},"\u2715"))),r.a.createElement("div",{className:"folder-btn-row not-draggable"},r.a.createElement("span",null,"File"),r.a.createElement("span",null,"Edit"),r.a.createElement("span",null,"Format"),r.a.createElement("span",null,"View"),r.a.createElement("span",null,"Help")),r.a.createElement("div",{className:"folder-navigation-bar  not-draggable"},r.a.createElement("div",{className:"arrow-btn-container"},r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"}))))),r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"}))))),r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 444.819 444.819"},r.a.createElement("g",null,r.a.createElement("path",{d:"M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561   L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416   C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848   c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693   C444.819,130.287,441.295,121.629,434.252,114.203z"})))),r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388    c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844    l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752    c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"})))))),r.a.createElement("div",{className:"folder-bread-crums"},r.a.createElement("div",null,r.a.createElement("div",{className:"folder-bread-crums-crums"},r.a.createElement("div",null," ",r.a.createElement("img",{src:b.a})),r.a.createElement("div",null,"\xab"),r.a.createElement("div",null,"user"),r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 50 50",version:"1.1"},r.a.createElement("path",{d:"M 18.136719 3 C 17.875 3.003906 17.628906 3.105469 17.441406 3.289063 L 11.417969 9.265625 C 11.027344 9.65625 11.023438 10.289063 11.410156 10.679688 L 25.644531 25.03125 L 11.296875 39.265625 C 10.902344 39.65625 10.898438 40.289063 11.289063 40.679688 L 17.265625 46.703125 C 17.65625 47.097656 18.289063 47.101563 18.679688 46.710938 L 39.765625 25.796875 C 40.15625 25.40625 40.160156 24.773438 39.769531 24.378906 L 18.859375 3.296875 C 18.667969 3.101563 18.40625 2.996094 18.136719 3 Z "}))),r.a.createElement("div",null,"src"),r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 50 50",version:"1.1"},r.a.createElement("path",{d:"M 18.136719 3 C 17.875 3.003906 17.628906 3.105469 17.441406 3.289063 L 11.417969 9.265625 C 11.027344 9.65625 11.023438 10.289063 11.410156 10.679688 L 25.644531 25.03125 L 11.296875 39.265625 C 10.902344 39.65625 10.898438 40.289063 11.289063 40.679688 L 17.265625 46.703125 C 17.65625 47.097656 18.289063 47.101563 18.679688 46.710938 L 39.765625 25.796875 C 40.15625 25.40625 40.160156 24.773438 39.769531 24.378906 L 18.859375 3.296875 C 18.667969 3.101563 18.40625 2.996094 18.136719 3 Z "}))),r.a.createElement("div",null,"My Projects")),r.a.createElement("div",{className:"folder-bread-crums-right-btns"},r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 444.819 444.819"},r.a.createElement("g",null,r.a.createElement("path",{d:"M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561   L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416   C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848   c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693   C444.819,130.287,441.295,121.629,434.252,114.203z"})))),r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 24 24",version:"1.1"},r.a.createElement("path",{d:"M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z "})))))),r.a.createElement("div",{className:"folder-search-box"},r.a.createElement("span",null,"Seach My Projects"),r.a.createElement("span",null,r.a.createElement("svg",{viewBox:"0 0 16 16",version:"1.1"},r.a.createElement("path",{d:"M 10.5 1 C 8.019531 1 6 3.019531 6 5.5 C 6 6.558594 6.382813 7.523438 7 8.292969 L 2.023438 13.269531 L 2.726563 13.980469 L 7.707031 9 C 8.476563 9.617188 9.441406 10 10.5 10 C 12.980469 10 15 7.980469 15 5.5 C 15 3.019531 12.980469 1 10.5 1 Z M 10.5 2 C 12.4375 2 14 3.5625 14 5.5 C 14 7.4375 12.4375 9 10.5 9 C 8.5625 9 7 7.4375 7 5.5 C 7 3.5625 8.5625 2 10.5 2 Z "}))))),r.a.createElement("div",{className:"folder-content-window not-draggable"},r.a.createElement("div",{className:"folder-content-shortcuts"},r.a.createElement("div",{onClick:function(t){return e.clickHandler("dirtyminiatures",t)},className:this.state.dirtyminiaturesActive?"folder-icon-active":""},r.a.createElement("img",{src:g.a}),r.a.createElement("span",null,"Dirtyminiatures.html")),r.a.createElement("div",{onClick:function(t){return e.clickHandler("snake3d",t)},className:this.state.snake3dActive?"folder-icon-active":""},r.a.createElement("img",{src:g.a}),r.a.createElement("span",null,"Snake3d.html")))))}}]),t}(r.a.Component),x=(a(29),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={minWidth:600,minHeight:400,x:10,y:10,isfullscreen:!1},a.handleFullScreenClick=a.handleFullScreenClick.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleFullScreenClick",value:function(){this.state.isfullscreen?(this.setState({isfullscreen:!1}),this.props.normalize("#cmd")):(this.props.maximize("#cmd"),this.setState({isfullscreen:!0}))}},{key:"render",value:function(){var e=this,t=this.state.isfullscreen?"\u2750":"\u2610";return r.a.createElement(v.a,{id:"cmd",minHeight:"100",minWidth:"300",onMouseDown:function(){return e.props.active(".cmd-exe")},default:{x:25,y:66,width:600,height:400},cancel:".not-draggable"},r.a.createElement("div",{className:this.state.isfullscreen?"toolbar not-draggable":"toolbar"},r.a.createElement("div",{className:"toolbar-title"},r.a.createElement("span",{className:"toolbar-icon"},"\u2587"),r.a.createElement("span",null,"Command Prompt")),r.a.createElement("div",{className:"toolbar-btn-collection not-draggable"},r.a.createElement("button",{className:"toolbar-btn minimize-btn",onClick:function(){return e.props.minimize(".cmd-exe")}},"\u2015"),r.a.createElement("button",{className:"toolbar-btn maximize-btn",onClick:this.handleFullScreenClick},t),r.a.createElement("button",{className:"toolbar-btn close-btn",onClick:function(){return e.props.exit(".cmd-exe")}},"\u2715"))),r.a.createElement("div",{className:"cmd-text-window not-draggable"},r.a.createElement("span",null,"Microsoft Windows [Version 10.0.016729.1087]",r.a.createElement("br",null),"(c)2017 Microsoft Corporation. All rights reserved.",r.a.createElement("br",null),r.a.createElement("br",null),"C:\\Users\\Guest")))}}]),t}(r.a.Component)),C=(a(30),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).stateChange=function(e){a.props.stateChange(e)},a.handleFullScreenClick=a.handleFullScreenClick.bind(Object(d.a)(a)),a.state={isfullscreen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleFullScreenClick",value:function(){console.log(this.state.isfullscreen),this.state.isfullscreen?(this.setState({isfullscreen:!1}),this.props.normalize("#notepad")):(this.props.maximize("#notepad"),this.setState({isfullscreen:!0}))}},{key:"render",value:function(){var e=this,t=this.state.isfullscreen?"\u2750":"\u2610";return r.a.createElement(v.a,{id:"notepad",minHeight:"100",minWidth:"300",onMouseDown:function(){return e.props.active(".notepad-exe")},default:{x:65,y:116,width:600,height:400},cancel:".not-draggable"},r.a.createElement("div",{className:this.state.isfullscreen?"notepad-toolbar not-draggable":"notepad-toolbar"},r.a.createElement("div",{className:"toolbar-title"},r.a.createElement("span",{className:"toolbar-icon"},"\u2587"),r.a.createElement("span",null,"Personal information.txt")),r.a.createElement("div",{className:"toolbar-btn-collection not-draggable"},r.a.createElement("button",{className:"notepad-toolbar-btn minimize-btn",onClick:function(){return e.props.minimize(".notepad-exe")}},"\u2015"),r.a.createElement("button",{className:"notepad-toolbar-btn maximize-btn",onClick:this.handleFullScreenClick},t),r.a.createElement("button",{className:"notepad-toolbar-btn close-btn",onClick:function(){return e.props.exit(".notepad-exe")}},"\u2715"))),r.a.createElement("div",{className:"toolbar-btn-row not-draggable"},r.a.createElement("span",null,"File"),r.a.createElement("span",null,"Edit"),r.a.createElement("span",null,"Format"),r.a.createElement("span",null,"View"),r.a.createElement("span",null,"Help")),r.a.createElement("div",{className:"notepad-text-window not-draggable"},r.a.createElement("span",null,'My name is Per "the s\xe4r" Nilsson',r.a.createElement("br",null),'I live in the Sundsvall AKA "The northern darkness" AKA "A regular town in Sweden".',r.a.createElement("br",null),r.a.createElement("br",null),"My life philosophy is to do as little as possible and devouring as many things as i can.")))}}]),t}(r.a.Component)),y=a(14),w=a.n(y),O=a(15),N=a.n(O),A=(a(31),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.getClockTime();var e=setInterval(function(){a.getClockTime()},1e3);a.setState({intervalId:e})},a.componentWillUnmount=function(){clearInterval(a.state.intervalId)},a.setActive=function(e){a.setState({activeProgram:e})},a.getClockTime=function(){a.setState({clock:(new Date).toTimeString().slice(0,5)})},a.state={activeProgram:"",clock:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"taskbar",className:"taskbar"},r.a.createElement("button",{className:"taskbar-startmenu-btn"},r.a.createElement("svg",{viewBox:"0 0 48 48"},r.a.createElement("path",{fill:"#ffffff",d:"M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"}))),r.a.createElement("button",{className:"taskbar-search-btn"},r.a.createElement("svg",{viewBox:"0 0 16 16",version:"1.1"},r.a.createElement("path",{fill:"#ffffff",d:"M 10.5 1 C 8.019531 1 6 3.019531 6 5.5 C 6 6.558594 6.382813 7.523438 7 8.292969 L 2.023438 13.269531 L 2.726563 13.980469 L 7.707031 9 C 8.476563 9.617188 9.441406 10 10.5 10 C 12.980469 10 15 7.980469 15 5.5 C 15 3.019531 12.980469 1 10.5 1 Z M 10.5 2 C 12.4375 2 14 3.5625 14 5.5 C 14 7.4375 12.4375 9 10.5 9 C 8.5625 9 7 7.4375 7 5.5 C 7 3.5625 8.5625 2 10.5 2 Z "}))),r.a.createElement("div",{className:"taskbar-active-programs"},this.props.OpenPrograms.map(function(t){return r.a.createElement("div",{className:"task-"+t+" "+(e.state.activeProgram===t?"active":"inactive"),key:t,onClick:function(){return e.props.taskbarItemClicked(t)}},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"Ico ",e.props.ActiveProgram," "),r.a.createElement("span",null,t))),r.a.createElement("div",{className:"bottom-border"}))})),r.a.createElement("div",{className:"taskbar-clock"},r.a.createElement("span",null,this.state.clock)))}}]),t}(r.a.Component)),L=(a(32),a(16)),S=a.n(L),z=a(17),j=a.n(z),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).closeTab=function(e){if(a.state.listOfOpenWebsites.length<2)a.props.exit(".browser-exe");else{var t=a.state.listOfOpenWebsites.filter(function(t){return t.name!=e}),n=t[0].name;a.setState({activeTab:n+"",listOfOpenWebsites:t},function(){console.log("tabs: ",a.state)})}},a.state={activeTab:"",minWidth:600,minHeight:400,x:710,y:10,isfullscreen:!1,listOfOpenWebsites:[]},a.listOfWebsites=[{name:"DirtyMiniatures",url:"http://dirtyminiatures.com/"},{name:"Snake3d",url:"http://google.com/"}],a.handleFullScreenClick=a.handleFullScreenClick.bind(Object(d.a)(a)),a.closeTab=a.closeTab.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleFullScreenClick",value:function(){this.state.isfullscreen?(this.setState({isfullscreen:!1}),this.props.normalize("#browser")):(this.props.maximize("#browser"),this.setState({isfullscreen:!0}))}},{key:"setbrowserIconActive",value:function(e){this.setState({snake3dActive:!1,dirtyminiaturesActive:!1}),"dirtyminiatures"===e?this.setState({dirtyminiaturesActive:!0}):"snake3d"===e&&this.setState({snake3dActive:!0})}},{key:"openNewPage",value:function(e){var t=!0,a=!1,n=void 0;try{for(var r,l=this.listOfWebsites[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var i=r.value;i.name.toLowerCase()===e.toLowerCase()&&(this.state.listOfOpenWebsites.some(function(t){return t.name.toLowerCase()===e.toLowerCase()})||this.state.listOfOpenWebsites.push(i),this.setState({activeTab:i.name}))}}catch(c){a=!0,n=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}}},{key:"render",value:function(){var e=this,t=this.state.isfullscreen?"\u2750":"\u2610",a="",n=this.state.activeTab;switch(this.state.activeTab.toLowerCase()){case"dirtyminiatures":a="https://dirtyminiatures.com/";break;case"snake3d":a="https://sogetivisitorclient.z6.web.core.windows.net/"}return r.a.createElement(v.a,{id:"browser",minHeight:"100",minWidth:"580",onMouseDown:function(){return e.props.active(".browser-exe")},default:{x:215,y:26,width:1100,height:700},cancel:".not-draggable"},r.a.createElement("div",{className:this.state.isfullscreen?"browser-toolbar not-draggable":"browser-toolbar"},r.a.createElement("div",{className:"browser-toolbar-tabs"},this.state.listOfOpenWebsites.map(function(t){return r.a.createElement("div",{key:t.name,className:n===t.name?"active-tab":"",onClick:function(a){a.stopPropagation(),e.openNewPage(t.name)}},r.a.createElement("span",null,t.name),r.a.createElement("span",{onClick:function(a){a.stopPropagation(),e.closeTab(t.name)}},"\u2715"))})),r.a.createElement("div",{className:"toolbar-btn-collection not-draggable"},r.a.createElement("button",{className:"browser-toolbar-btn minimize-btn",onClick:function(){return e.props.minimize(".browser-exe")}},"\u2015"),r.a.createElement("button",{className:"browser-toolbar-btn maximize-btn",onClick:this.handleFullScreenClick},t),r.a.createElement("button",{className:"browser-toolbar-btn close-btn",onClick:function(){return e.props.exit(".browser-exe")}},"\u2715"))),r.a.createElement("div",{className:"browser-navigation-bar  not-draggable"},r.a.createElement("div",{className:"browser-arrow-btn-container"},r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z"}))))),r.a.createElement("div",null,r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"}))))),r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 24 24",version:"1.1"},r.a.createElement("path",{d:"M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z "})))),r.a.createElement("div",{className:"browser-url-area"},r.a.createElement("div",null,r.a.createElement("div",{className:"browser-url-area-text"},r.a.createElement("div",null,r.a.createElement("img",{src:b.a})),r.a.createElement("div",null,a)),r.a.createElement("div",{className:"browser-url-area-favourite"},r.a.createElement("img",{src:j.a})))),r.a.createElement("div",{className:"browser-toolbar-user-icons"},r.a.createElement("span",{className:"user-icon"},r.a.createElement("div",null,"?")),r.a.createElement("span",{className:"more-settings-icon"},r.a.createElement("img",{src:S.a})))),r.a.createElement("div",{className:"browser-display-area"},r.a.createElement("iframe",{src:a,title:"browser"})))}}]),t}(r.a.Component),T=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={clicked:!1},a.closeModal=a.closeModal.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"closeModal",value:function(){this.setState({clicked:!0})}},{key:"render",value:function(){return r.a.createElement("div",{id:"modal-wrapper",className:this.state.clicked?"modal-remove":""},r.a.createElement("div",{id:"modal"},r.a.createElement("div",null,"Press F11 to enter fullscreen for the best user experience"),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.closeModal},"Got it"))),r.a.createElement("div",{id:"modal-trail"}))}}]),t}(r.a.Component)),M=(a(34),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).openAppFromIcon=function(e){var t=i.a.findDOMNode(Object(d.a)(a)).querySelector(e),n=t.querySelector(":scope > div");if("block"!==t.style.display){t.style.display="block";var r=a.state.OpenPrograms;r.push(e),a.setState({OpenPrograms:r}),a.setActiveWindow(e)}else 0===n.style.opacity?(console.log("opac"),a.openAppFromTaskbar(e)):a.setActiveWindow(e)},a.openAppFromTaskbar=function(e){var t=i.a.findDOMNode(Object(d.a)(a)),n=t.querySelector(e).querySelector(":scope > div");if("0"===n.style.opacity){var r=t.querySelectorAll(".taskbar-active-programs > div"),l=!0,c=!1,o=void 0;try{for(var s,m=r[Symbol.iterator]();!(l=(s=m.next()).done);l=!0){s.value.classList.contains("task-"+e)&&function(){var t=a.getCoords(e);n.style.display="flex",setTimeout(function(){new Promise(function(e,a){n.style.transform="translate("+t.x+"px ,"+t.y+"px ) scale(1)",n.style.opacity="1",setTimeout(function(){e(!0)},300)}).then(function(e){n.style.transition="none"})}.bind(Object(d.a)(a)),1)}()}}catch(u){c=!0,o=u}finally{try{l||null==m.return||m.return()}finally{if(c)throw o}}a.setActiveWindow(e)}else a.setActiveWindow(e),a.minimizeAppFromToolbar(e)},a.closeAppFromToolbar=function(e){i.a.findDOMNode(Object(d.a)(a)).querySelector(e).style.display="none";var t=a.state.OpenPrograms,n=t.indexOf(e);t.splice(n,1),a.setState({OpenPrograms:t})},a.minimizeAppFromToolbar=function(e){var t=i.a.findDOMNode(Object(d.a)(a)),n=t.querySelector(e).querySelector(":scope > div"),r=t.querySelectorAll(".taskbar-active-programs > div"),l=!0,c=!1,o=void 0;try{for(var s,m=r[Symbol.iterator]();!(l=(s=m.next()).done);l=!0){var u=s.value;if(u.classList.contains("task-"+e)){var p=u.getBoundingClientRect(),b=n.getBoundingClientRect(),v=n.style.transform.match(/[+-]?\d+(?:\.\d+)?/g),f=0,h=0;v&&(h=v[0],f=v[1],a.setCoords(e,h,f));var E=p.y-b.y-b.height,g=p.x-100-b.x+parseInt(h);E<b.height&&(E=p.y-b.height),n.style.transition="transform 0.3s ease-in-out, opacity 0.2s ease-in-out",n.style.transform="translate("+g+"px ,"+E+"px ) scale(0.5)",n.style.opacity="0",setTimeout(function(){n.style.display="none"},300)}}}catch(k){c=!0,o=k}finally{try{l||null==m.return||m.return()}finally{if(c)throw o}}},a.maximizeAppFromToolbar=function(e){i.a.findDOMNode(Object(d.a)(a)).querySelector(e).classList.add("program-fullscreen")},a.undoMaximizeAppFromToolbar=function(e){i.a.findDOMNode(Object(d.a)(a)).querySelector(e).classList.remove("program-fullscreen")},a.setActiveWindow=function(e){var t=i.a.findDOMNode(Object(d.a)(a)),n=t.querySelector(e);if(!n.classList.contains("program-window-front")){var r=t.querySelectorAll(".program"),l=!0,c=!1,o=void 0;try{for(var s,m=r[Symbol.iterator]();!(l=(s=m.next()).done);l=!0){var u=s.value;u.classList.remove("program-window-front"),u.classList.add("program-window-back")}}catch(p){c=!0,o=p}finally{try{l||null==m.return||m.return()}finally{if(c)throw o}}n.classList.remove("program-window-back"),n.classList.add("program-window-front")}a.taskbar.current.setActive(e)},a.openApp=function(e){a.openAppFromIcon(e),a.taskbar.current.setActive(e)},a.openShortcut=function(e){a.browser.current.openNewPage(e),a.openApp(".browser-exe"),a.taskbar.current.setActive(".browser-exe")},a.state={OpenPrograms:[],ActiveProgram:"",cmdActive:!1,cmdFullScreen:!1,biosClick:!1},a.listOfProgramCoords=[{name:".cmd-exe",x:"0",y:"0"},{name:".notepad-exe",x:"0",y:"0"},{name:".folder-exe",x:"0",y:"0"},{name:".browser-exe",x:"0",y:"0"}],a.taskbar=r.a.createRef(),a.browser=r.a.createRef(),a.openAppFromIcon=a.openAppFromIcon.bind(Object(d.a)(a)),a.closeAppFromToolbar=a.closeAppFromToolbar.bind(Object(d.a)(a)),a.minimizeAppFromToolbar=a.minimizeAppFromToolbar.bind(Object(d.a)(a)),a.render=a.render.bind(Object(d.a)(a)),a.clicks=[],a.timeout=null,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getCoords",value:function(e){return this.listOfProgramCoords.find(function(t){return t.name===e})}},{key:"setCoords",value:function(e,t,a){var n=this.listOfProgramCoords.findIndex(function(t){return t.name===e});this.listOfProgramCoords[n].y=a,this.listOfProgramCoords[n].x=t}},{key:"clickHandler",value:function(e,t){var a=this;t.persist(),t.preventDefault(),this.clicks.push((new Date).getTime()),window.clearTimeout(this.timeout),this.timeout=window.setTimeout(function(){a.clicks.length>1&&a.clicks[a.clicks.length-1]-a.clicks[a.clicks.length-2]<200&&a.openApp(e)},250)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"Menu-page",className:"module-page"},r.a.createElement(T,null),r.a.createElement("div",{className:"Menu-buttons"},r.a.createElement("div",{id:"cmd-btn",className:this.state.cmdActive?"preview-full":null,onClick:function(t){return e.clickHandler(".cmd-exe",t)},tabIndex:"0"},r.a.createElement("div",null,r.a.createElement("img",{src:w.a})),r.a.createElement("div",null,"Run skills batch job")),r.a.createElement("div",{id:"notepad-btn",tabIndex:"1",onClick:function(t){return e.clickHandler(".notepad-exe",t)}},r.a.createElement("div",null,r.a.createElement("img",{src:N.a})),r.a.createElement("div",null,"Per Nilsson bio")),r.a.createElement("div",{id:"folder-btn",tabIndex:"1",onClick:function(t){return e.clickHandler(".folder-exe",t)}},r.a.createElement("div",null,r.a.createElement("img",{src:b.a})),r.a.createElement("div",null,"Projects"))),r.a.createElement("div",{className:"program cmd-exe"},r.a.createElement(x,{exit:this.closeAppFromToolbar,maximize:this.maximizeAppFromToolbar,normalize:this.undoMaximizeAppFromToolbar,minimize:this.minimizeAppFromToolbar,active:this.setActiveWindow})),r.a.createElement("div",{className:"program notepad-exe"},r.a.createElement(C,{exit:this.closeAppFromToolbar,maximize:this.maximizeAppFromToolbar,normalize:this.undoMaximizeAppFromToolbar,minimize:this.minimizeAppFromToolbar,active:this.setActiveWindow})),r.a.createElement("div",{className:"program folder-exe"},r.a.createElement(k,{exit:this.closeAppFromToolbar,maximize:this.maximizeAppFromToolbar,normalize:this.undoMaximizeAppFromToolbar,minimize:this.minimizeAppFromToolbar,active:this.setActiveWindow,shortcutOpened:this.openShortcut})),r.a.createElement("div",{className:"program browser-exe"},r.a.createElement(F,{ref:this.browser,exit:this.closeAppFromToolbar,maximize:this.maximizeAppFromToolbar,normalize:this.undoMaximizeAppFromToolbar,minimize:this.minimizeAppFromToolbar,active:this.setActiveWindow})),r.a.createElement(A,{ref:this.taskbar,OpenPrograms:this.state.OpenPrograms,taskbarItemClicked:this.openAppFromTaskbar}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.f43e1fd7.chunk.js.map