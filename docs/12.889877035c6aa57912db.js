(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{SQpI:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=[],u="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";n.definition={prefix:"fab",iconName:"youtube",icon:[576,512,e,"f167",u]},n.faYoutube=n.definition,n.prefix="fab",n.iconName="youtube",n.width=576,n.height=512,n.ligatures=e,n.unicode="f167",n.svgPathData=u},TeY9:function(l,n,t){"use strict";t.d(n,"a",function(){return b});var e=t("LiEJ"),u=t("pN2L"),a=t("Jg5f"),i=t("G2Mx"),o=t("pday"),r=t("/gsZ"),c=function(){return(c=Object.assign||function(l){for(var n,t=1,e=arguments.length;t<e;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(l[u]=n[u]);return l}).apply(this,arguments)},b=function(){function l(l,n){this.cd=l,this.platform=n,this.state$=new e.a({copied:!1,height:"100%"}),this.trackY=!0,this.trackX=!1}return l.prototype.ngAfterViewInit=function(){this.updateHeight()},l.prototype.updateHeight=function(){this.updateState(!this.height&&this.codeEl?{height:this.codeEl.nativeElement.offsetHeight+"px"}:{height:this.height+"px"}),this.scrollable.update()},l.prototype.updateState=function(l){this.state$.next(c({},this.state$.value,l)),this.cd.detectChanges()},l.prototype.copy=function(){var l=this;Object(u.a)(this.code).pipe(Object(a.a)(function(n){var t=document.createElement("textarea");if(t.value=n,document.body.appendChild(t),l.platform.IOS){var e=document.createRange();e.selectNodeContents(t);var u=window.getSelection();u.removeAllRanges(),u.addRange(e),t.readOnly=!0,t.setSelectionRange(0,999999)}else t.select();document.execCommand("copy"),document.body.removeChild(t),l.updateState({copied:!0})}),Object(i.a)(1),Object(o.a)(3500),Object(r.a)(function(){return l.updateState({copied:!1})})).subscribe()},l}()},YzpY:function(l,n,t){"use strict";var e=t("LoAr"),u=t("AFqu"),a=t("WT9V"),i=t("Hc9t"),o=t("rXXt"),r=t("//aV"),c=t("y7gG"),b=t("U+go"),s=t("JZJv"),d=t("Gien"),p=t("GcYS"),m=t("WV+C"),g=t("0xYh"),f=t("Z5FQ");t("TeY9"),t.d(n,"a",function(){return h}),t.d(n,"b",function(){return O});var h=e.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;min-width:100%;margin-top:2em;margin-bottom:3em;border:2px solid #2196f3;overflow:hidden;border-radius:.5em;box-shadow:0 3px 10px rgba(0,0,0,.1)}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar-thumb{border-radius:4px;opacity:.7}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar-thumb:active{opacity:1}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-vertical{width:6px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-vertical:active, [_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-vertical:hover{width:10px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-horizontal{height:6px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-horizontal:active, [_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .ng-scrollbar-horizontal:hover{height:10px}[_nghost-%COMP%]   ng-scrollbar[_ngcontent-%COMP%]     .code-scrollbar{transition:all .1s ease}pre[_ngcontent-%COMP%]{min-height:100%;min-width:100%;margin:0;display:inline-flex;word-wrap:normal;min-height:100%}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#e3f2fd;display:inline-block;height:100%;padding:1.7em 2em!important;border-radius:0;flex:1;margin:0;box-shadow:none;overflow:hidden;border:none;min-height:100%}button[_ngcontent-%COMP%]{position:absolute;right:1em;top:1em}.copy-message[_ngcontent-%COMP%]{color:#2196f3;background-color:#e3f2fd;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;font-weight:700;border-radius:.2em}span[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function y(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,"pre",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["        "])),(l()(),e.rb(2,0,[[1,0],["codeEL",1]],null,0,"code",[["class","hljs"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.Ib(-1,null,["\n      "]))],null,function(l,n){l(n,2,0,n.component.code)})}function x(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["          "])),(l()(),e.rb(2,0,[[1,0],["codeEL",1]],null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),e.qb(3,540672,null,0,u.b,[u.c,e.z],{code:[0,"code"]},null),(l()(),e.Ib(-1,null,["\n        "]))],function(l,n){l(n,3,0,n.component.code)},function(l,n){l(n,2,0,!0,e.Bb(n,3).highlightedCode)})}function I(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,y)),e.qb(2,16384,null,0,a.k,[e.Q,e.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.ib(0,[["enabled",2]],null,0,null,x))],function(l,n){l(n,2,0,n.component.disabled,e.Bb(n,3))},null)}function v(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,5,"div",[["class","hljs copy-message"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,i.b,i.a)),e.qb(2,9158656,null,0,o.b,[e.k,o.d,[8,null],[2,o.a]],null,null),(l()(),e.Ib(-1,0,["done"])),(l()(),e.rb(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Copied!"]))],function(l,n){l(n,2,0)},function(l,n){l(n,1,0,e.Bb(n,2).inline)})}function z(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,6,null,null,null,null,null,null,null)),(l()(),e.rb(1,0,null,null,5,"ng-scrollbar",[["barClass","code-scrollbar"],["thumbClass","code-scrollbar-thumb"]],[[4,"height",null],[2,"ng-scrollbar-auto-hide",null]],[[null,"cdkObserveContent"]],function(l,n,t){var e=!0;return"cdkObserveContent"===n&&(e=!1!==l.component.updateHeight()&&e),e},r.b,r.a)),e.qb(2,1196032,null,0,c.a,[c.b,e.k,e.z],null,{event:"cdkObserveContent"}),e.qb(3,4374528,[[2,4]],0,b.a,[s.a],{trackX:[0,"trackX"],trackY:[1,"trackY"],barClass:[2,"barClass"],thumbClass:[3,"thumbClass"],overlay:[4,"overlay"],disableOnBreakpoints:[5,"disableOnBreakpoints"],disableScrollbars:[6,"disableScrollbars"]},null),(l()(),e.ib(16777216,null,0,1,null,I)),e.qb(5,16384,null,0,a.k,[e.Q,e.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.ib(0,[["copiedMessage",2]],0,0,null,v))],function(l,n){var t=n.component;l(n,3,0,t.trackX,t.trackY,"code-scrollbar","code-scrollbar-thumb",!0,!1,t.disabled),l(n,5,0,!n.context.$implicit.copied,e.Bb(n,6))},function(l,n){l(n,1,0,n.context.$implicit.height,e.Bb(n,3).autoHideClass)})}function O(l){return e.Kb(2,[e.Gb(671088640,1,{codeEl:0}),e.Gb(671088640,2,{scrollable:0}),(l()(),e.ib(16777216,null,null,2,null,z)),e.qb(3,16384,null,0,a.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),e.Db(131072,a.b,[e.h]),(l()(),e.rb(5,0,null,null,4,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","Copy code"],["matTooltipClass","copy-tooltip"],["matTooltipPosition","before"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.copy()&&e),e},d.d,d.b)),e.qb(6,180224,null,0,p.b,[e.k,m.a,g.e,[2,f.a]],{color:[0,"color"]},null),(l()(),e.rb(7,0,null,0,2,"mat-icon",[["aria-label","Copy code"],["class","md-24 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,i.b,i.a)),e.qb(8,9158656,null,0,o.b,[e.k,o.d,[8,null],[2,o.a]],null,null),(l()(),e.Ib(-1,0,["content_paste"]))],function(l,n){var t=n.component;l(n,3,0,e.Jb(n,3,0,e.Bb(n,4).transform(t.state$))),l(n,6,0,"accent"),l(n,8,0)},function(l,n){l(n,5,0,e.Bb(n,6).disabled||null,"NoopAnimations"===e.Bb(n,6)._animationMode),l(n,7,0,e.Bb(n,8).inline)})}},b9cQ:function(l,n,t){"use strict";t.r(n);var e=t("LoAr"),u=function(){return function(){}}(),a=t("C9Ky"),i=t("7tlY"),o=t("/q0v"),r=t("wwR/"),c=t("iwai"),b=t("FOLC"),s=t("SeAg"),d=t("WT9V"),p=t("//aV"),m=t("U+go"),g=t("JZJv"),f=t("ChgE"),h=t("fxml"),y=t("YzpY"),x=t("TeY9"),I=t("WV+C"),v=t("fDe+"),z=t("jQpT"),O=t("Jg5f"),C=t("SQpI"),_=t("gX+C"),M=function(){function l(l,n,t){this._gallery=l,this._title=t,this.arr=P,this.code=k,this.youtubeIcon=C.faYoutube,this.videoIcon=_.faVideo,this.media$=n.asObservable().pipe(Object(O.a)(function(l){return"sm"===l.mqAlias||"xs"===l.mqAlias?{thumbWidth:80,thumbHeight:80}:{thumbWidth:120,thumbHeight:90}}))}return l.prototype.ngOnInit=function(){this._title.setTitle("Advanced | ngx-gallery");var l=this._gallery.ref("mixed");this.arr.map(function(n){switch(n.type){case r.f.Image:l.addImage({src:n.src,thumb:n.thumb,title:n.title});break;case r.f.Video:l.addVideo({src:n.src,thumb:n.thumb,poster:n.poster});break;case r.f.Youtube:l.addYoutube({src:n.src});break;default:l.addIframe({src:n.src,thumb:n.thumb})}})},l}(),P=[{type:"image",src:"assets/img/img13.jpg",thumb:"assets/img/thumb/img13.jpg",title:"Scelerisque dapibus fringilla consequat scelerisque torquent senectus porttitor, placerat fames convallis molestie lobortis diam aliquam"},{type:"image",src:"assets/img/img11.jpg",thumb:"assets/img/thumb/img11.jpg",title:"Lorem ipsum curabitur auctor netus facilisis inceptos vivamus fusce inceptos, ullamcorper ipsum id pharetra curabitur leo curabitur."},{type:"image",src:"assets/img/img3.jpg",thumb:"assets/img/thumb/img3.jpg",title:"Iaculis eros leo interdum erat tellus primis pharetra pulvinar, elit risus blandit tempus praesent himenaeos porta, neque elit neque ullamcorper ipsum curabitur at tempus aliquet quam fringilla."},{type:"image",src:"assets/img/img4.jpg",thumb:"assets/img/thumb/img4.jpg",title:"Morbi etiam interdum velit lacinia platea magna libero curae auctor"},{type:"video",src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",thumb:"http://laza.jalbum.net/Testing%20Base%20as%20site/Media/slides/big_buck_bunny.jpg",poster:"http://laza.jalbum.net/Testing%20Base%20as%20site/Media/slides/big_buck_bunny.jpg"},{type:"youtube",src:"-OvvpsfU3NQ"},{type:"iframe",src:"https://material.angular.io/",thumb:"https://vignette.wikia.nocookie.net/random-ness/images/5/5f/TEH_POOTIS_MAN.jpg/revision/latest?cb=20130508152055"}],k={template:'<gallery id="mixedExample" [thumbTemplate]="thumbTemplate" [itemTemplate]="itemTemplate"></gallery>\n\n\x3c!-- Add custom template to thumbnails --\x3e\n<ng-template #thumbTemplate let-type="type">\n  <span *ngIf="type === \'youtube\'" class="item-type">\n    <fa-icon [icon]="youtubeIcon" size="lg"></fa-icon>\n  </span>\n  <span *ngIf="type === \'video\'" class="item-type">\n    <fa-icon [icon]="videoIcon" size="lg"></fa-icon>\n  </span>\n</ng-template>\n\n\x3c!-- Add custom template to image items --\x3e\n<ng-template #itemTemplate\n             let-index="index"\n             let-type="type"\n             let-data="data"\n             let-currIndex="currIndex">\n  <span *ngIf="type === \'image\' && index === currIndex" [@slideAnimation] class="item-text">\n    {{data?.title}}\n  </span>\n</ng-template>',component:"import { Component, OnInit } from '@angular/core';\nimport { Gallery, GalleryRef } from '@ngx-gallery/core';\n\n@Component({...})\nexport class AppComponent implements OnInit {\n\n  galleryId = 'mixedExample';\n\n  constructor(private gallery: Gallery) { }\n\n  ngOnInit() {\n    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);\n\n    galleryRef.addImage({\n      src: 'IMAGE_URL',\n      thumb: '(OPTIONAL)IMAGE_THUMBNAIL_URL',\n      title: 'Some title'\n    });\n\n    galleryRef.addVideo({\n      src: 'VIDEO_URL',\n      thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',\n      poster: '(OPTIONAL)VIDEO_POSTER_URL'\n    });\n\n    // Add a video item with multiple url sources\n    galleryRef.addVideo({\n      src: [\n        { url: 'MP4_URL', type: 'video/mp4' },\n        { url: 'OGG_URL', type: 'video/ogg' }\n      ],\n      thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',\n      poster: '(OPTIONAL)VIDEO_POSTER_URL'\n    });\n\n    galleryRef.addYoutube({\n      src: 'VIDEO_ID'\n    });\n\n    galleryRef.addIframe({\n      src: 'IFRAME_URL',\n      thumb: '(OPTIONAL)IMAGE_THUMBNAIL_URL'\n    });\n  }\n}"},T=t("SPdK"),j=e.pb({encapsulation:0,styles:[["#mixed{margin:2em 0 3em}  #mixed .item-type{padding:6px;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.5)}  #mixed .item-text{position:absolute;top:0;left:0;right:0;color:#fff;background-color:rgba(0,0,0,.5);margin:3em auto 0;border-radius:4px;width:100%;max-width:500px;padding:20px 25px;text-align:justify}"]],data:{animation:[{type:7,name:"slideAnimation",definitions:[{type:0,name:"in",styles:{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},{type:4,styles:null,timings:400}],options:null},{type:1,expr:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},timings:400}],options:null}],options:{}}]}});function L(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"gallery",[["id","mixed"]],null,null,null,o.b,o.a)),e.qb(1,770048,null,0,r.c,[r.b],{id:[0,"id"],thumbWidth:[1,"thumbWidth"],thumbHeight:[2,"thumbHeight"],itemTemplate:[3,"itemTemplate"],thumbTemplate:[4,"thumbTemplate"]},null)],function(l,n){l(n,1,0,"mixed",n.context.$implicit.thumbWidth,n.context.$implicit.thumbHeight,e.Bb(n.parent,55),e.Bb(n.parent,54))},null)}function w(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"span",[["class","item-type"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.qb(2,573440,null,0,b.a,[s.c,b.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null)],function(l,n){l(n,2,0,n.component.youtubeIcon,"lg")},function(l,n){l(n,1,0,e.Bb(n,2).renderedIconHTML)})}function q(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"span",[["class","item-type"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),e.qb(2,573440,null,0,b.a,[s.c,b.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null)],function(l,n){l(n,2,0,n.component.videoIcon,"lg")},function(l,n){l(n,1,0,e.Bb(n,2).renderedIconHTML)})}function A(l){return e.Kb(0,[(l()(),e.ib(16777216,null,null,1,null,w)),e.qb(1,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,q)),e.qb(3,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){l(n,1,0,"youtube"===n.context.type),l(n,3,0,"video"===n.context.type)},null)}function B(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"span",[["class","item-text"]],[[24,"@slideAnimation",0]],null,null,null,null)),(l()(),e.Ib(1,null,[" "," "]))],null,function(l,n){l(n,0,0,void 0),l(n,1,0,null==n.parent.context.data?null:n.parent.context.data.title)})}function E(l){return e.Kb(0,[(l()(),e.ib(16777216,null,null,1,null,B)),e.qb(1,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],function(l,n){l(n,1,0,"image"===n.context.type&&n.context.index===n.context.currIndex)},null)}function N(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,53,"ng-scrollbar",[],[[2,"ng-scrollbar-auto-hide",null]],null,null,p.b,p.a)),e.qb(1,4374528,null,0,m.a,[g.a],{overlay:[0,"overlay"]},null),(l()(),e.rb(2,0,null,0,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Advanced"])),(l()(),e.rb(5,0,null,0,46,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,45,"section",[],null,null,null,null,null)),(l()(),e.rb(7,0,null,null,2,"section-title",[],null,null,null,f.b,f.a)),e.qb(8,49152,null,0,h.a,[],null,null),(l()(),e.Ib(-1,0,["Overview"])),(l()(),e.rb(10,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The gallery supports the ability for items and thumbnails to extend their templates. To do so, you have to define your custom template, then the content can be provided as an "])),(l()(),e.rb(12,0,null,null,0,"code",[["class","hljs"]],[[8,"textContent",0]],null,null,null,null)),(l()(),e.rb(13,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Use "])),(l()(),e.rb(15,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[itemTemplate]"])),(l()(),e.Ib(-1,null,[" for items and "])),(l()(),e.rb(18,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[thumbTemplate]"])),(l()(),e.Ib(-1,null,[" for thumbnails."])),(l()(),e.rb(21,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Passing in data to a custom template"])),(l()(),e.rb(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["When using a custom template, additional context data can be used to render the data as needed."])),(l()(),e.rb(25,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),e.rb(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Available data:"])),(l()(),e.rb(28,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['let-index="index"'])),(l()(),e.Ib(-1,null,[", "])),(l()(),e.rb(31,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['let-type="type"'])),(l()(),e.Ib(-1,null,[", "])),(l()(),e.rb(34,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['let-data="data"'])),(l()(),e.Ib(-1,null,[" and "])),(l()(),e.rb(37,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['let-currIndex="currIndex"'])),(l()(),e.rb(39,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Example"])),(l()(),e.ib(16777216,null,null,2,null,L)),e.qb(42,16384,null,0,d.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),e.Db(131072,d.b,[e.h]),(l()(),e.rb(44,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Template"])),(l()(),e.rb(46,0,null,null,1,"hl-code",[],null,null,null,y.b,y.a)),e.qb(47,4243456,null,0,x.a,[e.h,I.a],{code:[0,"code"],height:[1,"height"]},null),(l()(),e.rb(48,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Code"])),(l()(),e.rb(50,0,null,null,1,"hl-code",[],null,null,null,y.b,y.a)),e.qb(51,4243456,null,0,x.a,[e.h,I.a],{code:[0,"code"],height:[1,"height"]},null),(l()(),e.rb(52,0,null,0,1,"footer",[],null,null,null,v.b,v.a)),e.qb(53,49152,null,0,z.a,[],null,null),(l()(),e.ib(0,[["thumbTemplate",2]],null,0,null,A)),(l()(),e.ib(0,[["itemTemplate",2]],null,0,null,E))],function(l,n){var t=n.component;l(n,1,0,!0),l(n,42,0,e.Jb(n,42,0,e.Bb(n,43).transform(t.media$))),l(n,47,0,t.code.template,400),l(n,51,0,t.code.component,400)},function(l,n){l(n,0,0,e.Bb(n,1).autoHideClass),l(n,12,0,"<ng-template>")})}function S(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"advanced-example",[],null,null,null,N,j)),e.qb(1,114688,null,0,M,[r.b,T.j,s.i],null,null)],function(l,n){l(n,1,0)},null)}var R=e.nb("advanced-example",M,S,{},{},[]),H=t("y7gG"),Y=t("LYzL"),V=t("eXL1"),K=t("C7Lb"),U=t("s8WJ"),G=t("GiBk"),D=t("981U"),Q=t("+3V+"),W=t("Ho7M"),X=t("dgjn"),J=t("/hyk"),F=t("GcYS"),$=t("rXXt"),Z=t("abkR"),ll=t("IvSS"),nl=t("V3Ng"),tl=t("a198"),el=t("0xYh"),ul=t("w9fW"),al=t("CYrO"),il=t("vvyD"),ol=t("AFqu"),rl=t("UelK"),cl=t("WgBV"),bl=t("LxDK"),sl=t("V7OE"),dl=t("PCNd"),pl=t("rh80");t.d(n,"AdvancedExampleModuleNgFactory",function(){return ml});var ml=e.ob(u,[],function(l){return e.yb([e.zb(512,e.j,e.db,[[8,[a.a,i.a,R]],[3,e.j],e.x]),e.zb(4608,d.m,d.l,[e.u,[2,d.z]]),e.zb(4608,H.c,H.c,[]),e.zb(4608,Y.b,Y.b,[]),e.zb(4608,V.c,V.c,[V.i,V.e,e.j,V.h,V.f,e.q,e.z,d.d,K.b,[2,d.g]]),e.zb(5120,V.j,V.k,[V.c]),e.zb(5120,U.c,U.d,[V.c]),e.zb(135680,U.e,U.e,[V.c,e.q,[2,d.g],[2,U.b],U.c,[3,U.e],V.e]),e.zb(4608,T.j,T.i,[T.d,T.g]),e.zb(5120,e.b,function(l,n){return[T.m(l,n)]},[d.d,e.B]),e.zb(4608,G.k,G.q,[d.d,e.B,G.o]),e.zb(4608,G.r,G.r,[G.k,G.p]),e.zb(4608,r.n,r.o,[]),e.zb(5120,G.a,function(l,n){return[l,new r.p(n)]},[G.r,r.n]),e.zb(4608,G.n,G.n,[]),e.zb(6144,G.l,null,[G.n]),e.zb(4608,G.j,G.j,[G.l]),e.zb(6144,G.b,null,[G.j]),e.zb(4608,G.g,G.m,[G.b,e.q]),e.zb(4608,G.c,G.c,[G.g]),e.zb(1073742336,d.c,d.c,[]),e.zb(1073742336,D.r,D.r,[[2,D.x],[2,D.o]]),e.zb(1073742336,H.d,H.d,[]),e.zb(1073742336,I.b,I.b,[]),e.zb(1073742336,Q.c,Q.c,[]),e.zb(1073742336,W.d,W.d,[]),e.zb(1073742336,X.b,X.b,[]),e.zb(1073742336,K.a,K.a,[]),e.zb(1073742336,Y.j,Y.j,[[2,Y.c],[2,s.g]]),e.zb(1073742336,J.b,J.b,[]),e.zb(1073742336,Y.s,Y.s,[]),e.zb(1073742336,F.c,F.c,[]),e.zb(1073742336,$.c,$.c,[]),e.zb(1073742336,Z.g,Z.g,[]),e.zb(1073742336,ll.c,ll.c,[]),e.zb(1073742336,V.g,V.g,[]),e.zb(1073742336,U.j,U.j,[]),e.zb(1073742336,nl.h,nl.h,[]),e.zb(1073742336,tl.b,tl.b,[]),e.zb(1073742336,el.a,el.a,[]),e.zb(1073742336,ul.k,ul.k,[]),e.zb(1073742336,Y.k,Y.k,[]),e.zb(1073742336,al.a,al.a,[]),e.zb(1073742336,il.a,il.a,[]),e.zb(1073742336,ol.d,ol.d,[]),e.zb(1073742336,T.e,T.e,[]),e.zb(1073742336,rl.b,rl.b,[]),e.zb(1073742336,cl.a,cl.a,[]),e.zb(1073742336,bl.a,bl.a,[]),e.zb(1073742336,sl.a,sl.a,[[2,T.k],e.B]),e.zb(1073742336,m.d,m.d,[]),e.zb(1073742336,g.c,g.c,[]),e.zb(1073742336,m.b,m.b,[]),e.zb(1073742336,b.f,b.f,[]),e.zb(1073742336,dl.a,dl.a,[]),e.zb(1073742336,G.e,G.e,[]),e.zb(1073742336,G.d,G.d,[]),e.zb(1073742336,r.g,r.g,[]),e.zb(1073742336,u,u,[]),e.zb(256,tl.a,{separatorKeyCodes:[pl.f]},[]),e.zb(256,G.o,"XSRF-TOKEN",[]),e.zb(256,G.p,"X-XSRF-TOKEN",[]),e.zb(1024,D.m,function(){return[[{path:"",component:M}]]},[])])})},"fDe+":function(l,n,t){"use strict";var e=t("LoAr"),u=t("UelK"),a=t("SPdK"),i=t("Gien"),o=t("GcYS"),r=t("WV+C"),c=t("0xYh"),b=t("Z5FQ"),s=t("iwai"),d=t("FOLC"),p=t("SeAg");t("jQpT"),t.d(n,"a",function(){return m}),t.d(n,"b",function(){return g});var m=e.pb({encapsulation:0,styles:[['[_nghost-%COMP%]{box-shadow:inset 0 3px 8px 0 rgba(0,0,0,.08);background-color:#2196f3;display:flex;flex-direction:column;color:#fff;padding:3em 2em;font-size:.9em;font-family:Roboto,"Helvetica Neue",sans-serif}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin-right:.5em}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:400;color:#fff;text-align:center;margin-top:0;margin-bottom:1.5em}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#fff176;text-decoration:underline}.icon[_ngcontent-%COMP%]{background:#fff;margin:5px}fa-icon[_ngcontent-%COMP%]{margin:0 .3em}.twitter[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#00b0e8}.github[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#000}']],data:{}});function g(l){return e.Kb(2,[(l()(),e.rb(0,0,null,null,28,"div",[["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.qb(1,737280,null,0,u.d,[a.h,e.k,a.l],{layout:[0,"layout"]},null),e.qb(2,737280,null,0,u.c,[a.h,e.k,[6,u.d],a.l],{align:[0,"align"]},null),(l()(),e.rb(3,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,1,"a",[["href","https://www.patreon.com/bePatron?u=5594898"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,0,"img",[["alt","npm"],["data-canonical-src","https://c5.patreon.com/external/logo/become_a_patron_button.png"],["src","https://camo.githubusercontent.com/3d9b27bdf72d7e5407fbad6f9240f6cadc98a7a5/68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e2e706e67"],["style","max-width:100%;"]],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),e.rb(7,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Images from "])),(l()(),e.rb(9,0,null,null,1,"a",[["href","https://pixabay.com/"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Pixabay"])),(l()(),e.rb(11,0,null,null,5,"h3",[["fxLayout",""],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.qb(12,737280,null,0,u.d,[a.h,e.k,a.l],{layout:[0,"layout"]},null),e.qb(13,737280,null,0,u.c,[a.h,e.k,[6,u.d],a.l],{align:[0,"align"]},null),(l()(),e.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["\xa9 2018 Angular Gallery"])),(l()(),e.rb(16,0,null,null,0,"iframe",[["frameborder","0"],["height","20px"],["scrolling","0"],["src","https://ghbtns.com/github-btn.html?user=murhafsousli&repo=ngx-gallery&type=star&count=true"],["width","85px"]],null,null,null,null,null)),(l()(),e.rb(17,0,null,null,11,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Created by Murhaf Sousli "])),(l()(),e.rb(19,0,null,null,4,"a",[["class","icon twitter"],["href","https://twitter.com/MurhafSousli"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,20)._haltDisabledEvents(t)&&u),u},i.c,i.a)),e.qb(20,180224,null,0,o.a,[r.a,c.e,e.k,[2,b.a]],null,null),(l()(),e.rb(21,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,s.b,s.a)),e.qb(22,573440,null,0,d.a,[p.c,d.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Cb(23,2),(l()(),e.rb(24,0,null,null,4,"a",[["class","icon github"],["href","https://github.com/MurhafSousli"],["mat-icon-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,25)._haltDisabledEvents(t)&&u),u},i.c,i.a)),e.qb(25,180224,null,0,o.a,[r.a,c.e,e.k,[2,b.a]],null,null),(l()(),e.rb(26,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,s.b,s.a)),e.qb(27,573440,null,0,d.a,[p.c,d.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Cb(28,2)],function(l,n){l(n,1,0,"column"),l(n,2,0,"center center"),l(n,12,0,""),l(n,13,0,"center center");var t=l(n,23,0,"fab","twitter");l(n,22,0,t,"lg");var e=l(n,28,0,"fab","github");l(n,27,0,e,"lg")},function(l,n){l(n,19,0,e.Bb(n,20).disabled?-1:e.Bb(n,20).tabIndex||0,e.Bb(n,20).disabled||null,e.Bb(n,20).disabled.toString(),"NoopAnimations"===e.Bb(n,20)._animationMode),l(n,21,0,e.Bb(n,22).renderedIconHTML),l(n,24,0,e.Bb(n,25).disabled?-1:e.Bb(n,25).tabIndex||0,e.Bb(n,25).disabled||null,e.Bb(n,25).disabled.toString(),"NoopAnimations"===e.Bb(n,25)._animationMode),l(n,26,0,e.Bb(n,27).renderedIconHTML)})}},"gX+C":function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=[],u="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z";n.definition={prefix:"fas",iconName:"video",icon:[576,512,e,"f03d",u]},n.faVideo=n.definition,n.prefix="fas",n.iconName="video",n.width=576,n.height=512,n.ligatures=e,n.unicode="f03d",n.svgPathData=u},jQpT:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){return function(){}}()}}]);