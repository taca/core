/* Contao Open Source CMS, (c) 2005-2015 Leo Feyer, LGPL license */
var AjaxRequest={themePath:Contao.script_url+"system/themes/"+Contao.theme+"/images/",toggleNavigation:function(e,t){e.blur();var a=$(t),n=$(e).getFirst("img");return a?("none"==a.getStyle("display")?(a.setStyle("display","inline"),n.src=AjaxRequest.themePath+"modMinus.gif",$(e).store("tip:title",Contao.lang.collapse),(new Request.Contao).post({action:"toggleNavigation",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(a.setStyle("display","none"),n.src=AjaxRequest.themePath+"modPlus.gif",$(e).store("tip:title",Contao.lang.expand),(new Request.Contao).post({action:"toggleNavigation",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):(new Request.Contao({evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(a){var o=new Element("li",{id:t,"class":"tl_parent",html:a,styles:{display:"inline"}}).inject($(e).getParent("li"),"after");o.getElements("a").each(function(e){e.href=e.href.replace(/&ref=[a-f0-9]+/,"&ref="+Contao.referer_id)}),$(e).store("tip:title",Contao.lang.collapse),n.src=AjaxRequest.themePath+"modMinus.gif",AjaxRequest.hideBox(),window.fireEvent("ajax_change")}}).post({action:"loadNavigation",id:t,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleStructure:function(e,t,a,n){e.blur();var o=$(t),i=$(e).getFirst("img");return o?("none"==o.getStyle("display")?(o.setStyle("display","inline"),i.src=AjaxRequest.themePath+"folMinus.gif",$(e).store("tip:title",Contao.lang.collapse),new Request.Contao({field:e}).post({action:"toggleStructure",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(o.setStyle("display","none"),i.src=AjaxRequest.themePath+"folPlus.gif",$(e).store("tip:title",Contao.lang.expand),new Request.Contao({field:e}).post({action:"toggleStructure",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):(new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(o){var l=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}});if(new Element("ul",{"class":"level_"+a,html:o}).inject(l,"bottom"),5==n)l.inject($(e).getParent("li"),"after");else{for(var s,r=!1,c=$(e).getParent("li");"element"==typeOf(c)&&(s=c.getNext("li"));)if(c=s,c.hasClass("tl_folder")){r=!0;break}r?l.inject(c,"before"):l.inject(c,"after")}l.getElements("a").each(function(e){e.href=e.href.replace(/&ref=[a-f0-9]+/,"&ref="+Contao.referer_id)}),$(e).store("tip:title",Contao.lang.collapse),i.src=AjaxRequest.themePath+"folMinus.gif",window.fireEvent("structure"),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}}).post({action:"loadStructure",id:t,level:a,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleFileManager:function(e,t,a,n){e.blur();var o=$(t),i=$(e).getFirst("img"),l=$(e).getNext("img");return o?("none"==o.getStyle("display")?(o.setStyle("display","inline"),i.src=AjaxRequest.themePath+"folMinus.gif",l.src=AjaxRequest.themePath+"folderO.gif",$(e).store("tip:title",Contao.lang.collapse),new Request.Contao({field:e}).post({action:"toggleFileManager",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(o.setStyle("display","none"),i.src=AjaxRequest.themePath+"folPlus.gif",l.src=AjaxRequest.themePath+"folderC.gif",$(e).store("tip:title",Contao.lang.expand),new Request.Contao({field:e}).post({action:"toggleFileManager",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):(new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(a){var o=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}});new Element("ul",{"class":"level_"+n,html:a}).inject(o,"bottom"),o.inject($(e).getParent("li"),"after"),o.getElements("a").each(function(e){e.href=e.href.replace(/&ref=[a-f0-9]+/,"&ref="+Contao.referer_id)}),$(e).store("tip:title",Contao.lang.collapse),i.src=AjaxRequest.themePath+"folMinus.gif",l.src=AjaxRequest.themePath+"folderO.gif",AjaxRequest.hideBox(),window.fireEvent("ajax_change")}}).post({action:"loadFileManager",id:t,level:n,folder:a,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},togglePagetree:function(e,t,a,n,o){e.blur(),Backend.getScrollOffset();var i=$(t),l=$(e).getFirst("img");return i?("none"==i.getStyle("display")?(i.setStyle("display","inline"),l.src=AjaxRequest.themePath+"folMinus.gif",$(e).store("tip:title",Contao.lang.collapse),new Request.Contao({field:e}).post({action:"togglePagetree",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(i.setStyle("display","none"),l.src=AjaxRequest.themePath+"folPlus.gif",$(e).store("tip:title",Contao.lang.expand),new Request.Contao({field:e}).post({action:"togglePagetree",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):(new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(a){var n=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}});new Element("ul",{"class":"level_"+o,html:a}).inject(n,"bottom"),n.inject($(e).getParent("li"),"after"),n.getElements("a").each(function(e){e.href=e.href.replace(/&ref=[a-f0-9]+/,"&ref="+Contao.referer_id)}),$(e).store("tip:title",Contao.lang.collapse),l.src=AjaxRequest.themePath+"folMinus.gif",AjaxRequest.hideBox(),window.fireEvent("ajax_change")}}).post({action:"loadPagetree",id:t,level:o,field:a,name:n,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleFiletree:function(e,t,a,n,o,i){e.blur(),Backend.getScrollOffset();var l=$(t),s=$(e).getFirst("img");return l?("none"==l.getStyle("display")?(l.setStyle("display","inline"),s.src=AjaxRequest.themePath+"folMinus.gif",$(e).store("tip:title",Contao.lang.collapse),new Request.Contao({field:e}).post({action:"toggleFiletree",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(l.setStyle("display","none"),s.src=AjaxRequest.themePath+"folPlus.gif",$(e).store("tip:title",Contao.lang.expand),new Request.Contao({field:e}).post({action:"toggleFiletree",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!1):(new Request.Contao({field:e,evalScripts:!0,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(a){var n=new Element("li",{id:t,"class":"parent",styles:{display:"inline"}});new Element("ul",{"class":"level_"+i,html:a}).inject(n,"bottom"),n.inject($(e).getParent("li"),"after"),n.getElements("a").each(function(e){e.href=e.href.replace(/&ref=[a-f0-9]+/,"&ref="+Contao.referer_id)}),$(e).store("tip:title",Contao.lang.collapse),s.src=AjaxRequest.themePath+"folMinus.gif",AjaxRequest.hideBox(),window.fireEvent("ajax_change")}}).post({action:"loadFiletree",id:t,folder:a,level:i,field:n,name:o,state:1,REQUEST_TOKEN:Contao.request_token}),!1)},toggleSubpalette:function(e,t,a){e.blur();var n=$(t);return n?void(e.value?(e.value="",e.checked="",n.setStyle("display","none"),new Request.Contao({field:e}).post({action:"toggleSubpalette",id:t,field:a,state:0,REQUEST_TOKEN:Contao.request_token})):(e.value=1,e.checked="checked",n.setStyle("display","block"),new Request.Contao({field:e}).post({action:"toggleSubpalette",id:t,field:a,state:1,REQUEST_TOKEN:Contao.request_token}))):void new Request.Contao({field:e,evalScripts:!1,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(a,n){var o=new Element("div",{id:t,html:a,styles:{display:"block"}}).inject($(e).getParent("div").getParent("div"),"after");n.javascript&&(document.write=function(e){var t="";e.replace(/<script src="([^"]+)"/i,function(e,a){t=a}),t&&Asset.javascript(t,{onLoad:function(){Browser.exec(n.javascript)}})},Browser.exec(n.javascript)),e.value=1,e.checked="checked",o.getElements("a").each(function(e){e.href=e.href.replace(/&ref=[a-f0-9]+/,"&ref="+Contao.referer_id)}),AjaxRequest.hideBox(),window.fireEvent("subpalette"),window.fireEvent("ajax_change")}}).post({action:"toggleSubpalette",id:t,field:a,load:1,state:1,REQUEST_TOKEN:Contao.request_token})},toggleVisibility:function(e,t,a){e.blur();var n,o,i,l,s,r=null,c=$(e).getFirst("img"),d=1==c.get("data-state"),g=e.getParent("div");return null===c.get("data-state")&&(d=-1==c.src.indexOf("invisible"),console.warn('Using a visibility toggle without a "data-state" attribute is deprecated. Please adjust your Contao DCA file.')),g.hasClass("tl_right")?r=g.getPrevious("div").getElement("img"):g.hasClass("tl_listing_container")?(r=e.getParent("td").getPrevious("td").getFirst("div.list_icon"),null===r&&(r=e.getParent("td").getPrevious("td").getElement("div.cte_type")),null===r&&(r=e.getParent("tr").getFirst("td").getElement("div.list_icon_new"))):(o=g.getNext("div"))&&(o.hasClass("cte_type")&&(r=o),null===r&&(r=o.getFirst("div.list_icon"))),null!==r&&("img"==r.nodeName.toLowerCase()?r.getParent("ul.tl_listing").hasClass("tl_tree_xtnd")?(i=r.get("data-icon"),l=r.get("data-icon-disabled"),null===r.get("data-icon")&&(i=r.src.replace(/.*\/([a-z0-9]+)_?\.(gif|png|jpe?g|svg)$/,"$1.$2"),console.warn('Using a row icon without a "data-icon" attribute is deprecated. Please adjust your Contao DCA file.')),null===r.get("data-icon-disabled")&&(l=r.src.replace(/.*\/([a-z0-9]+)_?\.(gif|png|jpe?g|svg)$/,"$1_.$2"),console.warn('Using a row icon without a "data-icon-disabled" attribute is deprecated. Please adjust your Contao DCA file.')),r.src=AjaxRequest.themePath+(d?l:i)):(s=r.getParent("a"),-1==s.href.indexOf("do=feRedirect")&&(r=(o=s.getNext("a"))?o.getFirst("img"):new Element("img")),i=r.get("data-icon"),l=r.get("data-icon-disabled"),null===r.get("data-icon")&&(n=r.src.replace(/.*_([0-9])\.(gif|png|jpe?g|svg)/,"$1"),i=r.src.replace(/_[0-9]\.(gif|png|jpe?g|svg)/,(1==n.toInt()?"":"_"+(n.toInt()-1))+".$1").split(/[\\/]/).pop(),console.warn('Using a row icon without a "data-icon" attribute is deprecated. Please adjust your Contao DCA file.')),null===r.get("data-icon-disabled")&&(n=r.src.replace(/.*_([0-9])\.(gif|png|jpe?g|svg)/,"$1"),l=r.src.replace(/(_[0-9])?\.(gif|png|jpe?g|svg)/,(n==r.src?"_1":"_"+(n.toInt()+1))+".$2").split(/[\\/]/).pop(),console.warn('Using a row icon without a "data-icon-disabled" attribute is deprecated. Please adjust your Contao DCA file.')),r.src=AjaxRequest.themePath+(d?l:i)):r.hasClass("cte_type")?d?(r.addClass("unpublished"),r.removeClass("published")):(r.addClass("published"),r.removeClass("unpublished")):(i=r.get("data-icon"),l=r.get("data-icon-disabled"),null===r.get("data-icon")&&(i=r.getStyle("background-image").replace(/.*\/([a-z0-9]+)_?\.(gif|png|jpe?g|svg)\);?$/,"$1.$2"),console.warn('Using a row icon without a "data-icon" attribute is deprecated. Please adjust your Contao DCA file.')),null===r.get("data-icon-disabled")&&(l=r.getStyle("background-image").replace(/.*\/([a-z0-9]+)_?\.(gif|png|jpe?g|svg)\);?$/,"$1_.$2"),console.warn('Using a row icon without a "data-icon-disabled" attribute is deprecated. Please adjust your Contao DCA file.')),r.setStyle("background-image","url("+AjaxRequest.themePath+(d?l:i)+")"))),"tl_style"==a&&g.getParent("div").getElement("pre").toggleClass("disabled"),d?(c.src=AjaxRequest.themePath+"invisible.gif",c.set("data-state",0),new Request.Contao({url:window.location.href,followRedirects:!1}).get({tid:t,state:0,rt:Contao.request_token})):(c.src=AjaxRequest.themePath+"visible.gif",c.set("data-state",1),new Request.Contao({url:window.location.href,followRedirects:!1}).get({tid:t,state:1,rt:Contao.request_token})),!1},toggleFeatured:function(e,t){e.blur();var a=$(e).getFirst("img"),n=1==a.get("data-state");return null===a.get("data-state")&&(n=-1==a.src.indexOf("featured_"),console.warn('Using a featured toggle without a "data-state" attribute is deprecated. Please adjust your Contao DCA file.')),n?(a.src=AjaxRequest.themePath+"featured_.gif",a.set("data-state",0),(new Request.Contao).post({action:"toggleFeatured",id:t,state:0,REQUEST_TOKEN:Contao.request_token})):(a.src=AjaxRequest.themePath+"featured.gif",a.set("data-state",1),(new Request.Contao).post({action:"toggleFeatured",id:t,state:1,REQUEST_TOKEN:Contao.request_token})),!1},toggleFieldset:function(e,t,a){e.blur();var n=$("pal_"+t);return n.hasClass("collapsed")?(n.removeClass("collapsed"),(new Request.Contao).post({action:"toggleFieldset",id:t,table:a,state:1,REQUEST_TOKEN:Contao.request_token})):(n.addClass("collapsed"),(new Request.Contao).post({action:"toggleFieldset",id:t,table:a,state:0,REQUEST_TOKEN:Contao.request_token})),!1},toggleCheckboxGroup:function(e,t){e.blur();var a=$(t),n=$(e).getFirst("img");return a?("block"!=a.getStyle("display")?(a.setStyle("display","block"),n.src=AjaxRequest.themePath+"folMinus.gif",(new Request.Contao).post({action:"toggleCheckboxGroup",id:t,state:1,REQUEST_TOKEN:Contao.request_token})):(a.setStyle("display","none"),n.src=AjaxRequest.themePath+"folPlus.gif",(new Request.Contao).post({action:"toggleCheckboxGroup",id:t,state:0,REQUEST_TOKEN:Contao.request_token})),!0):!1},liveUpdate:function(e,t){var a=$(t);a&&new Request.Contao({onRequest:$("lu_message").set("html",'<p class="tl_info">Connecting to the Live Update server</p>'),onSuccess:function(t,a){t?$("lu_message").set("html",a.content):$(e).submit()}}).post({action:"liveUpdate",id:a.value,REQUEST_TOKEN:Contao.request_token})},displayBox:function(e){var t=$("tl_ajaxBox"),a=$("tl_ajaxOverlay"),n=window.getScroll();null===a&&(a=new Element("div",{id:"tl_ajaxOverlay"}).inject($(document.body),"bottom")),a.set({styles:{display:"block",top:n.y+"px"}}),null===t&&(t=new Element("div",{id:"tl_ajaxBox"}).inject($(document.body),"bottom")),t.set({html:e,styles:{display:"block",top:n.y+100+"px"}})},hideBox:function(){var e=$("tl_ajaxBox"),t=$("tl_ajaxOverlay");t&&t.setStyle("display","none"),e&&e.setStyle("display","none")}},Backend={currentId:null,xMousePosition:0,yMousePosition:0,popupWindow:null,themePath:Contao.script_url+"system/themes/"+Contao.theme+"/images/",getMousePosition:function(e){Backend.xMousePosition=e.client.x,Backend.yMousePosition=e.client.y},openWindow:function(e,t,a){e.blur(),t=Browser.ie?t+40:t+17,a=Browser.ie?a+30:a+17,Backend.popupWindow=window.open(e.href,"","width="+t+",height="+a+",modal=yes,left=100,top=50,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")},openModalWindow:function(e,t,a){new SimpleModal({width:e,hideFooter:!0,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}}).show({title:t,contents:a})},openModalImage:function(e){var t=e||{},a=new SimpleModal({width:t.width,hideFooter:!0,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});a.show({title:t.title,contents:'<img src="'+t.url+'" alt="">'})},openModalIframe:function(e){var t=e||{},a=(window.getSize().y-180).toInt();(!t.height||t.height>a)&&(t.height=a);var n=new SimpleModal({width:t.width,hideFooter:!0,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});n.show({title:t.title,contents:'<iframe src="'+t.url+'" width="100%" height="'+t.height+'" frameborder="0"></iframe>'})},openModalSelector:function(e){var t=e||{},a=(window.getSize().y-180).toInt();(!t.height||t.height>a)&&(t.height=a);var n=new SimpleModal({width:t.width,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});n.addButton(Contao.lang.close,"btn",function(){this.hide()}),n.addButton(Contao.lang.apply,"btn primary",function(){var e,a,n,o=window.frames["simple-modal-iframe"],i=[];if(void 0===o)return void alert("Could not find the SimpleModal frame");if(-1!=o.document.location.href.indexOf("contao/main.php"))return void alert(Contao.lang.picker);for(e=o.document.getElementById("tl_select").getElementsByTagName("input"),n=0;n<e.length;n++)e[n].checked&&!e[n].id.match(/^check_all_/)&&(e[n].id.match(/^reset_/)||i.push(e[n].get("value")));if(t.tag)$(t.tag).value=i.join(","),-1!=o.document.location.href.indexOf("contao/page.php")&&($(t.tag).value="{{link_url::"+$(t.tag).value+"}}"),t.self.set("href",t.self.get("href").replace(/&value=[^&]*/,"&value="+i.join(",")));else{a=$("ctrl_"+t.id),a.value=i.join("	");var l=-1!=o.document.location.href.indexOf("contao/page.php")?"reloadPagetree":"reloadFiletree";new Request.Contao({field:a,evalScripts:!1,onRequest:AjaxRequest.displayBox(Contao.lang.loading+" …"),onSuccess:function(e,a){$("ctrl_"+t.id).getParent("div").set("html",a.content),a.javascript&&Browser.exec(a.javascript),AjaxRequest.hideBox(),window.fireEvent("ajax_change")}}).post({action:l,name:t.id,value:a.value,REQUEST_TOKEN:Contao.request_token})}this.hide()}),n.show({title:t.title,contents:'<iframe src="'+t.url+'" name="simple-modal-iframe" width="100%" height="'+t.height+'" frameborder="0"></iframe>',model:"modal"})},openModalBrowser:function(e,t,a,n){var o="file.php",i="file"==a?"&amp;switch=1":"",l=-1!=t.indexOf("{{link_url::");"file"!=a||""!=t&&!l||(o="page.php"),l&&(t=t.replace(/^\{\{link_url::([0-9]+)\}\}$/,"$1"));var s=new SimpleModal({width:768,btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}});s.addButton(Contao.lang.close,"btn",function(){this.hide()}),s.addButton(Contao.lang.apply,"btn primary",function(){var t,a,o,i=window.frames["simple-modal-iframe"];if(void 0===i)return void alert("Could not find the SimpleModal frame");for(a=i.document.getElementById("tl_select").getElementsByTagName("input"),o=0;o<a.length;o++)if(a[o].checked&&!a[o].id.match(/^reset_/)){t=a[o].get("value");break}isNaN(t)||(t="{{link_url::"+t+"}}"),n.document.getElementById(e).value=t,this.hide()}),s.show({title:n.document.getElement("div.mce-title").get("text"),contents:'<iframe src="contao/'+o+"?table=tl_content&amp;field=singleSRC&amp;value="+t+i+'" name="simple-modal-iframe" width="100%" height="'+(window.getSize().y-180).toInt()+'" frameborder="0"></iframe>',model:"modal"})},getScrollOffset:function(){document.cookie="BE_PAGE_OFFSET="+window.getScroll().y+"; path="+(Contao.path||"/")},autoSubmit:function(e){Backend.getScrollOffset();var t=new Element("input",{type:"hidden",name:"SUBMIT_TYPE",value:"auto"}),a=$(e)||e;t.inject(a,"bottom"),a.submit()},vScrollTo:function(e){window.addEvent("load",function(){window.scrollTo(null,parseInt(e))})},limitPreviewHeight:function(){var e=null,t=null,a="",n=0;$$("div.limit_height").each(function(o){if(e=o.getCoordinates(),0===n&&(n=o.className.replace(/[^0-9]*/,"").toInt()),n){if(o.setStyle("height",n),t=new Element("img",{"class":"limit_toggler",alt:"",title:Contao.lang.expand,width:20,height:24,"data-state":0}),new Tips.Contao(t,{offset:{x:0,y:30}}),e.height<n)return t.src=Backend.themePath+"expand_.gif",void t.inject(o,"after");t.src=Backend.themePath+"expand.gif",t.setStyle("cursor","pointer"),t.addEvent("click",function(){a=this.getPrevious("div").getStyle("height").toInt(),this.getPrevious("div").setStyle("height",a>n?n:""),0==this.get("data-state")?(this.src=Backend.themePath+"collapse.gif",this.set("data-state",1),this.store("tip:title",Contao.lang.collapse)):(this.src=Backend.themePath+"expand.gif",this.set("data-state",0),this.store("tip:title",Contao.lang.expand))}),t.inject(o,"after")}})},toggleCheckboxes:function(e,t){for(var a=$$("input"),n=$(e).checked?"checked":"",o=0;o<a.length;o++)"checkbox"==a[o].type.toLowerCase()&&(t&&a[o].id.substr(0,t.length)!=t||(a[o].checked=n))},toggleCheckboxGroup:function(e,t){var a=$(e).className,n=$(e).checked?"checked":"";if("tl_checkbox"==a){var o=$(t)?$$("#"+t+" .tl_checkbox"):$(e).getParent("fieldset").getElements(".tl_checkbox");o.each(function(e){e.checked=n})}else"tl_tree_checkbox"==a&&$$("#"+t+" .parent .tl_tree_checkbox").each(function(e){e.checked=n});Backend.getScrollOffset()},toggleCheckboxElements:function(e,t){var a=$(e).checked?"checked":"";$$("."+t).each(function(e){e.hasClass("tl_checkbox")&&(e.checked=a)}),Backend.getScrollOffset()},toggleWrap:function(e){var t=$(e),a="off"==t.getProperty("wrap")?"soft":"off";t.setProperty("wrap",a)},toggleUnchanged:function(){$$("#result-list .tl_confirm").each(function(e){e.toggleClass("hidden")})},blink:function(){},addColorPicker:function(){return!0},pickPage:function(e){var t=320,a=112;Backend.currentId=e,Backend.ppValue=$(e).value,Backend.getScrollOffset(),window.open($$("base")[0].href+"contao/page.php?value="+Backend.ppValue,"","width="+t+",height="+a+",modal=yes,left="+(Backend.xMousePosition?Backend.xMousePosition-t/2:200)+",top="+(Backend.yMousePosition?Backend.yMousePosition-a/2+80:100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},pickFile:function(e,t){var a=320,n=112;Backend.currentId=e,Backend.ppValue=$(e).value,Backend.getScrollOffset(),window.open($$("base")[0].href+"contao/file.php?value="+Backend.ppValue+"&filter="+t,"","width="+a+",height="+n+",modal=yes,left="+(Backend.xMousePosition?Backend.xMousePosition-a/2:200)+",top="+(Backend.yMousePosition?Backend.yMousePosition-n/2+80:100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},collapsePalettes:function(){$$("fieldset.hide").each(function(e){e.addClass("collapsed")}),$$("label.error, label.mandatory").each(function(e){var t=e.getParent("fieldset");t&&t.removeClass("collapsed")})},addInteractiveHelp:function(){new Tips.Contao("p.tl_tip",{offset:{x:9,y:21},text:function(e){return e.get("html")}}),["a[title]","input[title]"].each(function(e){new Tips.Contao($$(e).filter(function(e){return""!=e.title}),{offset:{x:0,y:26}})}),$$("img[title]").filter(function(e){return""!=e.title}).each(function(e){new Tips.Contao(e,{offset:{x:0,y:"gimage"==e.get("class")?60:30}})})},makeParentViewSortable:function(e){var t=new Scroller(document.getElement("body"),{onChange:function(e,t){this.element.scrollTo(this.element.getScroll().x,t)}}),a=new Sortables(e,{constrain:!0,opacity:.6,onStart:function(){t.start()},onComplete:function(){t.stop()},onSort:function(e){var t=e.getParent("ul"),a=0;t&&t.getChildren("li").each(function(e){var t=e.getFirst("div");t&&(t.hasClass("wrapper_stop")&&a>0&&a--,t.className=t.className.replace(/(^|\s)indent[^\s]*/g,""),a>0&&t.addClass("indent").addClass("indent_"+a),t.hasClass("wrapper_start")&&a++)})},handle:".drag-handle"});a.active=!1,a.addEvent("start",function(){a.active=!0}),a.addEvent("complete",function(e){if(a.active){var t,n,o,i;e.getPrevious("li")?(t=e.get("id").replace(/li_/,""),n=e.getPrevious("li").get("id").replace(/li_/,""),o=window.location.search.replace(/id=[0-9]*/,"id="+t)+"&act=cut&mode=1&pid="+n,i=window.location.href.replace(/\?.*$/,""),new Request.Contao({url:i+o,followRedirects:!1}).get()):e.getParent("ul")&&(t=e.get("id").replace(/li_/,""),n=e.getParent("ul").get("id").replace(/ul_/,""),o=window.location.search.replace(/id=[0-9]*/,"id="+t)+"&act=cut&mode=2&pid="+n,i=window.location.href.replace(/\?.*$/,""),new Request.Contao({url:i+o,followRedirects:!1}).get())}})},makeMultiSrcSortable:function(e,t){var a=new Sortables($(e),{constrain:!0,opacity:.6}).addEvent("complete",function(){var a,n=[],o=$(e).getChildren("li");for(a=0;a<o.length;a++)n.push(o[a].get("data-id"));$(t).value=n.join(",")});a.fireEvent("complete")},makeWizardsSortable:function(){$$(".tl_listwizard").each(function(e){new Sortables(e,{constrain:!0,opacity:.6,handle:".drag-handle"})}),$$(".tl_tablewizard").each(function(e){var t=e.getElement(".sortable");new Sortables(t,{constrain:!0,opacity:.6,handle:".drag-handle",onComplete:function(){Backend.tableWizardResort(t)}})}),$$(".tl_modulewizard").each(function(e){new Sortables(e.getElement(".sortable"),{constrain:!0,opacity:.6,handle:".drag-handle"})}),$$(".tl_optionwizard").each(function(e){new Sortables(e.getElement(".sortable"),{constrain:!0,opacity:.6,handle:".drag-handle"})}),$$(".tl_checkbox_wizard").each(function(e){var t=e.getElement(".sortable");t.hasClass("sortable-done")||(new Sortables(t,{constrain:!0,opacity:.6,handle:".drag-handle"}),t.addClass("sortable-done"))})},listWizard:function(e,t,a){var n,o,i,l,s,r=$(a),c=$(e).getParent("li"),d=r.getChildren(),g=r.get("data-tabindex");switch(Backend.getScrollOffset(),t){case"copy":var u=c.clone(!0).inject(c,"before");(n=c.getFirst("input"))&&(u.getFirst("input").value=n.value);break;case"up":(o=c.getPrevious("li"))?c.inject(o,"before"):c.inject(r,"bottom");break;case"down":(i=c.getNext("li"))?c.inject(i,"after"):c.inject(r.getFirst("li"),"before");break;case"delete":d.length>1?c.destroy():c.getFirst("input").set("value","")}for(l=r.getChildren(),s=0;s<l.length;s++)(n=l[s].getFirst('input[type="text"]'))&&n.set("tabindex",g++);new Sortables(r,{constrain:!0,opacity:.6,handle:".drag-handle"})},tableWizard:function(e,t,a){var n,o,i,l,s,r=$(a),c=r.getElement("tbody"),d=c.getChildren(),g=$(e).getParent("td"),u=g.getParent("tr"),h=r.getElement("thead").getFirst("tr"),f=u.getChildren(),p=0;for(s=0;s<f.length&&f[s]!=g;s++)p++;switch(Backend.getScrollOffset(),t){case"rcopy":var m=new Element("tr");for(s=0;s<f.length;s++)i=f[s].clone(!0).inject(m,"bottom"),(n=f[s].getFirst("textarea"))&&(i.getFirst("textarea").value=n.value);m.inject(u,"after");break;case"rup":(o=u.getPrevious("tr"))?u.inject(o,"before"):u.inject(c,"bottom");break;case"rdown":(i=u.getNext("tr"))?u.inject(i,"after"):u.inject(c,"top");break;case"rdelete":d.length>1?u.destroy():u.getElements("textarea").set("text","");break;case"ccopy":for(s=0;s<d.length;s++)l=d[s].getChildren()[p],i=l.clone(!0).inject(l,"after"),(n=l.getFirst("textarea"))&&(i.getFirst("textarea").value=n.value);h.getFirst("td").clone(!0).inject(h.getLast("td"),"before");break;case"cmovel":if(p>0)for(s=0;s<d.length;s++)l=d[s].getChildren()[p],l.inject(l.getPrevious(),"before");else for(s=0;s<d.length;s++)l=d[s].getChildren()[p],l.inject(d[s].getLast(),"before");break;case"cmover":if(p<f.length-2)for(s=0;s<d.length;s++)l=d[s].getChildren()[p],l.inject(l.getNext(),"after");else for(s=0;s<d.length;s++)l=d[s].getChildren()[p],l.inject(d[s].getFirst(),"before");break;case"cdelete":if(f.length>2){for(s=0;s<d.length;s++)d[s].getChildren()[p].destroy();h.getFirst("td").destroy()}else for(s=0;s<d.length;s++)d[s].getElements("textarea").set("text","")}Backend.tableWizardResort(c),new Sortables(c,{constrain:!0,opacity:.6,handle:".drag-handle",onComplete:function(){Backend.tableWizardResort(c)}}),Backend.tableWizardResize()},tableWizardResort:function(e){var t,a,n,o,i=e.getChildren(),l=e.get("data-tabindex");for(n=0;n<i.length;n++)for(a=i[n].getChildren(),o=0;o<a.length;o++)(t=a[o].getFirst("textarea"))&&(t.set("tabindex",l++),t.name=t.name.replace(/\[[0-9]+\][[0-9]+\]/g,"["+n+"]["+o+"]"))},tableWizardResize:function(e){var t=Cookie.read("BE_CELL_SIZE");if(null!==t||null!==e)if(null!==e)t="",$$(".tl_tablewizard textarea").each(function(a){a.setStyle("width",(a.getStyle("width").toInt()*e).round().limit(142,284)),a.setStyle("height",(a.getStyle("height").toInt()*e).round().limit(66,132)),""==t&&(t=a.getStyle("width")+"|"+a.getStyle("height"))}),Cookie.write("BE_CELL_SIZE",t,{path:Contao.path});else if(null!==t){var a=t.split("|");$$(".tl_tablewizard textarea").each(function(e){e.setStyle("width",a[0]),e.setStyle("height",a[1])})}},moduleWizard:function(e,t,a){var n,o,i,l,s,r,c=$(a),d=c.getElement("tbody"),g=$(e).getParent("tr"),u=d.getChildren(),h=d.get("data-tabindex");switch(Backend.getScrollOffset(),t){case"copy":var f=new Element("tr");for(i=g.getChildren(),s=0;s<i.length;s++){var p=i[s].clone(!0).inject(f,"bottom");(o=i[s].getFirst("select"))&&(p.getFirst("select").value=o.value)}f.inject(g,"after"),f.getElement(".chzn-container").destroy(),f.getElement(".tl_select_column").destroy(),new Chosen(f.getElement("select.tl_select")),Stylect.convertSelects(),Backend.convertEnableModules();break;case"up":(f=g.getPrevious("tr"))?g.inject(f,"before"):g.inject(d,"bottom");break;case"down":(f=g.getNext("tr"))?g.inject(f,"after"):g.inject(d,"top");break;case"delete":u.length>1&&g.destroy()}for(u=d.getChildren(),s=0;s<u.length;s++)for(i=u[s].getChildren(),r=0;r<i.length;r++)(l=i[r].getFirst("a.chzn-single"))&&l.set("tabindex",h++),(o=i[r].getFirst("select"))&&(o.name=o.name.replace(/\[[0-9]+\]/g,"["+s+"]")),(n=i[r].getFirst('input[type="checkbox"]'))&&(n.set("tabindex",h++),n.name=n.name.replace(/\[[0-9]+\]/g,"["+s+"]"));new Sortables(d,{constrain:!0,opacity:.6,handle:".drag-handle"})},optionsWizard:function(e,t,a){var n,o,i,l,s=$(a),r=s.getElement("tbody"),c=$(e).getParent("tr"),d=r.getChildren(),g=r.get("data-tabindex");switch(Backend.getScrollOffset(),t){case"copy":var u=new Element("tr");for(o=c.getChildren(),i=0;i<o.length;i++){var h=o[i].clone(!0).inject(u,"bottom");(n=o[i].getFirst("input"))&&(h.getFirst("input").value=n.value,"checkbox"==n.type&&(h.getFirst("input").checked=n.checked?"checked":""))}u.inject(c,"after");break;case"up":(u=c.getPrevious("tr"))?c.inject(u,"before"):c.inject(r,"bottom");break;case"down":(u=c.getNext("tr"))?c.inject(u,"after"):c.inject(r,"top");break;case"delete":d.length>1&&c.destroy()}for(d=r.getChildren(),i=0;i<d.length;i++)for(o=d[i].getChildren(),l=0;l<o.length;l++)(n=o[l].getFirst("input"))&&(n.set("tabindex",g++),n.name=n.name.replace(/\[[0-9]+\]/g,"["+i+"]"),"checkbox"==n.type&&(n.id=n.name.replace(/\[[0-9]+\]/g,"").replace(/\[/g,"_").replace(/\]/g,"")+"_"+i,n.getNext("label").set("for",n.id)));new Sortables(r,{constrain:!0,opacity:.6,handle:".drag-handle"})},keyValueWizard:function(e,t,a){var n,o,i,l,s=$(a),r=s.getElement("tbody"),c=$(e).getParent("tr"),d=r.getChildren(),g=r.get("data-tabindex");switch(Backend.getScrollOffset(),t){case"copy":var u=new Element("tr");for(o=c.getChildren(),i=0;i<o.length;i++){var h=o[i].clone(!0).inject(u,"bottom");(n=o[i].getFirst("input"))&&(h.getFirst().value=n.value)}u.inject(c,"after");break;case"up":(u=c.getPrevious("tr"))?c.inject(u,"before"):c.inject(r,"bottom");break;case"down":(u=c.getNext("tr"))?c.inject(u,"after"):c.inject(r,"top");break;case"delete":d.length>1&&c.destroy()}for(d=r.getChildren(),i=0;i<d.length;i++)for(o=d[i].getChildren(),l=0;l<o.length;l++)(n=o[l].getFirst("input"))&&(n.set("tabindex",g++),n.name=n.name.replace(/\[[0-9]+\]/g,"["+i+"]"));new Sortables(r,{constrain:!0,opacity:.6,handle:".drag-handle"})},checkboxWizard:function(e,t,a){var n,o=$(a).getElement(".sortable"),i=$(e).getParent("span");switch(Backend.getScrollOffset(),t){case"up":(n=i.getPrevious("span"))?i.inject(n,"before"):i.inject(o,"bottom");break;case"down":(n=i.getNext("span"))?i.inject(n,"after"):i.inject(o,"top")}},metaWizard:function(e,t){var a=e.getParent("div").getElement("select");if(""!=a.value){var n=$(t).getLast("li").clone(),o=n.getElement("span"),i=o.getElement("img");n.setProperty("data-language",a.value),o.set("text",a.options[a.selectedIndex].text+" "),i.inject(o,"bottom"),n.getElements("input").each(function(e){e.value="",e.name=e.name.replace(/\[[a-z]{2}(_[A-Z]{2})?\]/,"["+a.value+"]");var t=e.getPrevious("label"),n=parseInt(t.get("for").replace(/ctrl_[^_]+_/,""));t.set("for",t.get("for").replace(n,n+1)),e.id=t.get("for")}),n.className="even"==n.className?"odd":"even",n.inject($(t),"bottom"),e.getParent("div").getElement('input[type="button"]').setProperty("disabled",!0),a.options[a.selectedIndex].setProperty("disabled",!0),a.value="",a.fireEvent("liszt:updated")}},metaDelete:function(e){var t=e.getParent("li"),a=e.getParent("div").getElement("select");null===t.getPrevious()&&null===t.getNext()?t.getElements("input").each(function(e){e.value=""}):(a.getElement("option[value="+t.getProperty("data-language")+"]").removeProperty("disabled"),t.destroy(),a.fireEvent("liszt:updated"))},toggleAddLanguageButton:function(e){var t=e.getParent("div").getElement('input[type="button"]');""!=e.value?t.removeProperty("disabled"):t.setProperty("disabled",!0)},updateModuleLink:function(e){var t=e.getParent("tr").getLast("td"),a=t.getElement("a.module_link");a.href=a.href.replace(/id=[0-9]+/,"id="+e.value),e.value>0?(t.getElement("a.module_link").setStyle("display","inline"),t.getElement("img.module_image").setStyle("display","none")):(t.getElement("a.module_link").setStyle("display","none"),
t.getElement("img.module_image").setStyle("display","inline"))},convertEnableModules:function(){$$("img.mw_enable").filter(function(e){return!e.hasEvent("click")}).each(function(e){e.addEvent("click",function(){Backend.getScrollOffset();var t=e.getNext("input");t.checked?(t.checked="",e.src=Backend.themePath+"invisible.gif"):(t.checked="checked",e.src=Backend.themePath+"visible.gif")})})},enableImageSizeWidgets:function(){$$(".tl_image_size").each(function(e){var t=e.getElement("select"),a=e.getChildren("input")[0],n=e.getChildren("input")[1],o=function(){if(""===t.get("value")||t.get("value").toInt().toString()===t.get("value")){a.readOnly=!0,n.readOnly=!0;var e=$(t.getSelected()[0]).get("text");e=e.split("(").length>1?e.split("(").getLast().split(")")[0].split("x"):["",""],a.set("value","").set("placeholder",1*e[0]||""),n.set("value","").set("placeholder",1*e[1]||"")}else a.set("placeholder",""),n.set("placeholder",""),a.readOnly=!1,n.readOnly=!1};o(),t.addEvent("change",o),t.addEvent("keyup",o)})},enableToggleSelect:function(){var e,t,a,n,o,i,l=$("tl_select"),s=[],r=function(l){for(t=s.indexOf(l),a=s.indexOf(e),o=Math.min(t,a),i=Math.max(t,a),n=s[a].checked?!0:!1,o;i>=o;o++)s[o].checked=n};l&&(s=l.getElements('input[type="checkbox"]')),$$(".toggle_select").each(function(t){t.addEvent("click",function(a){var n=$(t).getElement('input[type="checkbox"],input[type="radio"]');if(n){if("radio"==n.type)return void(n.checked||(n.checked="checked"));a.shift&&e?r(n):(n.checked=n.checked?"":"checked","Backend.toggleCheckboxes(this)"==n.get("onclick")&&Backend.toggleCheckboxes(n)),e=n}})}),s.each(function(t){t.addEvent("click",function(t){t.shift&&e&&r(this),e=this})})},editPreviewWizard:function(e){e=$(e);var t,a,n=e.getElement("img"),o={},i=!1,l=e.get("data-original-width"),s=e.get("data-original-height"),r=function(){return n.getComputedSize().width/l},c=function(){var e=r(),a=n.getComputedSize();t.setStyles({top:a.computedTop+(o.y.get("value")*e).round()+"px",left:a.computedLeft+(o.x.get("value")*e).round()+"px",width:(o.width.get("value")*e).round()+"px",height:(o.height.get("value")*e).round()+"px"}),o.width.get("value").toInt()&&o.height.get("value").toInt()?t.setStyle("display",""):t.setStyle("display","none")},d=function(){var e=r(),a=t.getStyles("top","left","width","height"),i=n.getComputedSize(),c={x:Math.max(0,Math.min(l,(a.left.toFloat()-i.computedLeft)/e)).round(),y:Math.max(0,Math.min(s,(a.top.toFloat()-i.computedTop)/e)).round()};c.width=Math.min(l-c.x,a.width.toFloat()/e).round(),c.height=Math.min(s-c.y,a.height.toFloat()/e).round(),c.width&&c.height?t.setStyle("display",""):(c.x=c.y=c.width=c.height="",t.setStyle("display","none")),Object.each(c,function(e,t){o[t].set("value",e)})},g=function(t){t.preventDefault(),i||(i=!0,a={x:t.page.x-e.getPosition().x-n.getComputedSize().computedLeft,y:t.page.y-e.getPosition().y-n.getComputedSize().computedTop},u(t))},u=function(o){if(i){o.preventDefault();var l=n.getComputedSize(),s={x:[Math.max(0,Math.min(l.width,a.x)),Math.max(0,Math.min(l.width,o.page.x-e.getPosition().x-l.computedLeft))],y:[Math.max(0,Math.min(l.height,a.y)),Math.max(0,Math.min(l.height,o.page.y-e.getPosition().y-l.computedTop))]};t.setStyles({top:Math.min(s.y[0],s.y[1])+l.computedTop+"px",left:Math.min(s.x[0],s.x[1])+l.computedLeft+"px",width:Math.abs(s.x[0]-s.x[1])+"px",height:Math.abs(s.y[0]-s.y[1])+"px"}),d()}},h=function(e){u(e),i=!1},f=function(){e.getParent().getElements('input[name^="importantPart"]').each(function(e){["x","y","width","height"].each(function(t){e.get("name").substr(13,t.length)===t.capitalize()&&(o[t]=e=$(e))})}),4===Object.getLength(o)&&(Object.each(o,function(e){e.getParent().setStyle("display","none")}),e.addClass("tl_edit_preview_enabled"),t=new Element("div",{"class":"tl_edit_preview_important_part"}).inject(e),c(),n.addEvent("load",c),e.addEvents({mousedown:g,touchstart:g}),$(document.documentElement).addEvents({mousemove:u,touchmove:u,mouseup:h,touchend:h,touchcancel:h,resize:c}))};window.addEvent("domready",f)}};document.addEvent("mousedown",function(e){Backend.getMousePosition(e)}),window.addEvent("domready",function(){$(document.body).addClass("js"),Browser.Features.Touch&&$(document.body).addClass("touch"),Backend.collapsePalettes(),Backend.addInteractiveHelp(),Backend.convertEnableModules(),Backend.makeWizardsSortable(),Backend.enableImageSizeWidgets(),Backend.enableToggleSelect(),void 0!=Elements.chosen&&$$("select.tl_chosen").chosen(),$$("textarea.monospace").each(function(e){Backend.toggleWrap(e)})}),window.addEvent("load",function(){Backend.limitPreviewHeight()}),window.addEvent("ajax_change",function(){Backend.addInteractiveHelp(),Backend.makeWizardsSortable(),Backend.enableImageSizeWidgets(),Backend.enableToggleSelect(),void 0!=Elements.chosen&&$$("select.tl_chosen").filter(function(e){return"none"!=e.getStyle("display")}).chosen()});