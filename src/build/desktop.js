!function(e,o){"function"==typeof define&&define.amd?define(["jquery"],function(n){return o(n,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=o(require("jquery"),e,e.document,e.Math):o(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,o,n,t,i){var a=e(o),s=e(n);e.fn.fullpage=function(l){function r(e){e.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=l.controlArrowColor&&(e.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(".fp-controlArrow.fp-prev").hide()}function c(){de.append('<div id="fp-nav"><ul></ul></div>'),he=e("#fp-nav"),he.addClass(function(){return l.showActiveTooltip?"fp-show-active "+l.navigationPosition:l.navigationPosition});for(var o=0;o<e(".fp-section").length;o++){var n="";l.anchors.length&&(n=l.anchors[o]);var n='<li><a href="#'+n+'"><span></span></a>',t=l.navigationTooltips[o];"undefined"!=typeof t&&""!==t&&(n+='<div class="fp-tooltip '+l.navigationPosition+'">'+t+"</div>"),n+="</li>",he.find("ul").append(n)}}function f(){e(".fp-section").each(function(){var o=e(this).find(".fp-slide");o.length?o.each(function(){F(e(this))}):F(e(this))}),d()}function d(){var o=e(".fp-section.active"),n=o.find("SLIDES_WRAPPER"),t=o.find(".fp-scrollable");n.length&&(t=n.find(".fp-slide.active")),t.mouseover(),k(o),L(o),e.isFunction(l.afterLoad)&&l.afterLoad.call(o,o.data("anchor"),o.index(".fp-section")+1),e.isFunction(l.afterRender)&&l.afterRender.call(be)}function p(){var o;if(!l.autoScrolling||l.scrollBar){for(var i=a.scrollTop(),s=0,r=t.abs(i-n.querySelectorAll(".fp-section")[0].offsetTop),c=n.querySelectorAll(".fp-section"),f=0;f<c.length;++f){var d=t.abs(i-c[f].offsetTop);r>d&&(s=f,r=d)}o=e(c).eq(s)}if(!l.autoScrolling||l.scrollBar){if(!o.hasClass("active")){if(Ve=!0,i=e(".fp-section.active"),s=i.index(".fp-section")+1,r=D(o),c=o.data("anchor"),f=o.index(".fp-section")+1,d=o.find(".fp-slide.active"),d.length)var p=d.data("anchor"),u=d.index();xe&&(o.addClass("active").siblings().removeClass("active"),e.isFunction(l.onLeave)&&l.onLeave.call(i,s,f,r),e.isFunction(l.afterLoad)&&l.afterLoad.call(o,c,f),k(o),H(c,f-1),l.anchors.length&&(ue=c,K(u,p,c,f))),clearTimeout(Be),Be=setTimeout(function(){Ve=!1},100)}l.fitToSection&&(clearTimeout(Ee),Ee=setTimeout(function(){xe&&(e(".fp-section.active").is(o)&&(ye=!0),x(o),ye=!1)},1e3))}}function u(e){return e.find(".fp-slides").length?e.find(".fp-slide.active").find(".fp-scrollable"):e.find(".fp-scrollable")}function v(e,o){if($e.m[e]){var n,t;if("down"==e?(n="bottom",t=pe.moveSectionDown):(n="top",t=pe.moveSectionUp),0<o.length){if(!(n="top"===n?!o.scrollTop():"bottom"===n?o.scrollTop()+1+o.innerHeight()>=o[0].scrollHeight:void 0))return!0;t()}else t()}}function h(o){var n=o.originalEvent;if(!g(o.target)&&m(n)){l.autoScrolling&&o.preventDefault(),o=e(".fp-section.active");var i=u(o);xe&&!me&&(n=ne(n),ze=n.y,He=n.x,o.find(".fp-slides").length&&t.abs(Ie-He)>t.abs(Re-ze)?t.abs(Ie-He)>a.width()/100*l.touchSensitivity&&(Ie>He?$e.m.right&&pe.moveSlideRight():$e.m.left&&pe.moveSlideLeft()):l.autoScrolling&&t.abs(Re-ze)>a.height()/100*l.touchSensitivity&&(Re>ze?v("down",i):ze>Re&&v("up",i)))}}function g(o,n){n=n||0;var t=e(o).parent();return n<l.normalScrollElementTouchThreshold&&t.is(l.normalScrollElements)?!0:n==l.normalScrollElementTouchThreshold?!1:g(t,++n)}function m(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function S(e){e=e.originalEvent,l.fitToSection&&fe.stop(),m(e)&&(e=ne(e),Re=e.y,Ie=e.x)}function w(e,o){for(var n=0,i=e.slice(t.max(e.length-o,1)),a=0;a<i.length;a++)n+=i[a];return t.ceil(n/o)}function b(n){var i=(new Date).getTime();if(l.autoScrolling&&!ge){n=n||o.event;var a=n.wheelDelta||-n.deltaY||-n.detail,s=t.max(-1,t.min(1,a));return 149<Te.length&&Te.shift(),Te.push(t.abs(a)),l.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1),n=e(".fp-section.active"),n=u(n),a=i-De,De=i,a>200&&(Te=[]),xe&&(i=w(Te,10),a=w(Te,70),i>=a&&(0>s?v("down",n):v("up",n))),!1}l.fitToSection&&fe.stop()}function C(o){var n=e(".fp-section.active").find(".fp-slides"),t=n.find(".fp-slide").length;if(!(!n.length||me||2>t)){var t=n.find(".fp-slide.active"),i=null,i="prev"===o?t.prev(".fp-slide"):t.next(".fp-slide");if(!i.length){if(!l.loopHorizontal)return;i=t.siblings("prev"===o?":last":":first")}me=!0,P(n,i)}}function y(){e(".fp-slide.active").each(function(){te(e(this),"internal")})}function x(o,n,t){var i=o.position();if("undefined"!=typeof i&&(n={element:o,callback:n,isMovementUp:t,dest:i,dtop:i.top,yMovement:D(o),anchorLink:o.data("anchor"),sectionIndex:o.index(".fp-section"),activeSlide:o.find(".fp-slide.active"),activeSection:e(".fp-section.active"),leavingSection:e(".fp-section.active").index(".fp-section")+1,localIsResizing:ye},!(n.activeSection.is(o)&&!ye||l.scrollBar&&a.scrollTop()===n.dtop))){if(n.activeSlide.length)var s=n.activeSlide.data("anchor"),r=n.activeSlide.index();if(l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof n.isMovementUp&&(!n.isMovementUp&&"up"==n.yMovement||n.isMovementUp&&"down"==n.yMovement)&&(n.isMovementUp?e(".fp-section.active").before(n.activeSection.nextAll(".fp-section")):e(".fp-section.active").after(n.activeSection.prevAll(".fp-section").get().reverse()),ie(e(".fp-section.active").position().top),y(),n.wrapAroundElements=n.activeSection,n.dest=n.element.position(),n.dtop=n.dest.top,n.yMovement=D(n.element)),e.isFunction(l.onLeave)&&!n.localIsResizing){if(!1===l.onLeave.call(n.activeSection,n.leavingSection,n.sectionIndex+1,n.yMovement))return;B(n.activeSection)}o.addClass("active").siblings().removeClass("active"),xe=!1,K(r,s,n.anchorLink,n.sectionIndex),T(n),ue=n.anchorLink,H(n.anchorLink,n.sectionIndex)}}function T(o){if(l.css3&&l.autoScrolling&&!l.scrollBar)U("translate3d(0px, -"+o.dtop+"px, 0px)",!0),l.scrollingSpeed?ke=setTimeout(function(){A(o)},l.scrollingSpeed):A(o);else{var n=$(o);e(n.element).animate(n.options,l.scrollingSpeed,l.easing).promise().done(function(){A(o)})}}function $(e){var o={};return l.autoScrolling&&!l.scrollBar?(o.options={top:-e.dtop},o.element=".fullpage-wrapper"):(o.options={scrollTop:e.dtop},o.element="html, body"),o}function A(o){o.wrapAroundElements&&o.wrapAroundElements.length&&(o.isMovementUp?e(".fp-section:first").before(o.wrapAroundElements):e(".fp-section:last").after(o.wrapAroundElements),ie(e(".fp-section.active").position().top),y()),o.element.find(".fp-scrollable").mouseover(),e.isFunction(l.afterLoad)&&!o.localIsResizing&&l.afterLoad.call(o.element,o.anchorLink,o.sectionIndex+1),k(o.element),L(o.element),xe=!0,e.isFunction(o.callback)&&o.callback.call(this)}function k(o){var n=o.find(".fp-slide.active");n.length&&(o=e(n)),o.find("img[data-src], video[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src")})}function L(o){o.find("video, audio").each(function(){var o=e(this).get(0);o.hasAttribute("autoplay")&&"function"==typeof o.play&&o.play()})}function B(o){o.find("video, audio").each(function(){var o=e(this).get(0);o.hasAttribute("data-ignore")||"function"!=typeof o.pause||o.pause()})}function E(){if(!Ve&&!l.lockAnchors){var e=o.location.hash.replace("#","").split("/"),n=e[0],e=e[1];if(n.length){var t="undefined"==typeof ue,i="undefined"==typeof ue&&"undefined"==typeof e&&!me;(n&&n!==ue&&!t||i||!me&&ve!=e)&&W(n,e)}}}function M(e){xe&&(e.pageY<Fe?pe.moveSectionUp():e.pageY>Fe&&pe.moveSectionDown()),Fe=e.pageY}function P(o,n){var i=n.position(),a=n.index(),s=o.closest(".fp-section"),r=s.index(".fp-section"),c=s.data("anchor"),f=s.find(".fp-slidesNav"),d=Q(n),p=ye;if(l.onSlideLeave){var u,v=s.find(".fp-slide.active"),h=v.index();if(u=h==a?"none":h>a?"left":"right",!p&&"none"!==u&&e.isFunction(l.onSlideLeave)&&!1===l.onSlideLeave.call(v,c,r+1,h,u,a))return void(me=!1)}n.addClass("active").siblings().removeClass("active"),k(n),!l.loopHorizontal&&l.controlArrows&&(s.find(".fp-controlArrow.fp-prev").toggle(0!==a),s.find(".fp-controlArrow.fp-next").toggle(!n.is(":last-child"))),s.hasClass("active")&&K(a,d,c,r);var g=function(){p||e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(n,c,r+1,d,a),me=!1};l.css3?(i="translate3d(-"+t.round(i.left)+"px, 0px, 0px)",I(o.find(".fp-slidesContainer"),0<l.scrollingSpeed).css(ae(i)),Le=setTimeout(function(){g()},l.scrollingSpeed,l.easing)):o.animate({scrollLeft:t.round(i.left)},l.scrollingSpeed,l.easing,function(){g()}),f.find(".active").removeClass("active"),f.find("li").eq(a).find("a").addClass("active")}function V(){if(R(),Se){var o=e(n.activeElement);o.is("textarea")||o.is("input")||o.is("select")||(o=a.height(),t.abs(o-Oe)>20*t.max(Oe,o)/100&&(pe.reBuild(!0),Oe=o))}else clearTimeout(Ae),Ae=setTimeout(function(){pe.reBuild(!0)},350)}function R(){var e=l.responsive||l.responsiveWidth,o=l.responsiveHeight;e&&pe.setResponsive(a.width()<e),o&&(be.hasClass("fp-responsive")||pe.setResponsive(a.height()<o))}function I(e){var o="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass("fp-notransition"),e.css({"-webkit-transition":o,transition:o})}function z(e,o){if(825>e||900>o){var n=t.min(100*e/825,100*o/900).toFixed(2);de.css("font-size",n+"%")}else de.css("font-size","100%")}function H(o,n){l.menu&&(e(l.menu).find(".active").removeClass("active"),e(l.menu).find('[data-menuanchor="'+o+'"]').addClass("active")),l.navigation&&(e("#fp-nav").find(".active").removeClass("active"),o?e("#fp-nav").find('a[href="#'+o+'"]').addClass("active"):e("#fp-nav").find("li").eq(n).find("a").addClass("active"))}function D(o){var n=e(".fp-section.active").index(".fp-section");return o=o.index(".fp-section"),n==o?"none":n>o?"up":"down"}function F(e){e.css("overflow","hidden");var o,n=e.closest(".fp-section"),t=e.find(".fp-scrollable");t.length?o=t.get(0).scrollHeight:(o=e.get(0).scrollHeight,l.verticalCentered&&(o=e.find(".fp-tableCell").get(0).scrollHeight)),n=Ce-parseInt(n.css("padding-bottom"))-parseInt(n.css("padding-top")),o>n?t.length?t.css("height",n+"px").parent().css("height",n+"px"):(l.verticalCentered?e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):e.wrapInner('<div class="fp-scrollable" />'),e.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:n+"px",size:"10px",alwaysVisible:!0})):O(e),e.css("overflow","")}function O(e){e.find(".fp-scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()}function q(e){e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+N(e)+'px;" />')}function N(e){var o=Ce;return(l.paddingTop||l.paddingBottom)&&(o=e,o.hasClass("fp-section")||(o=e.closest(".fp-section")),e=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom")),o=Ce-e),o}function U(e,o){o?I(be):be.addClass("fp-notransition"),be.css(ae(e)),setTimeout(function(){be.removeClass("fp-notransition")},10)}function Y(o){var n=e('.fp-section[data-anchor="'+o+'"]');return n.length||(n=e(".fp-section").eq(o-1)),n}function W(e,o){var n=Y(e);"undefined"==typeof o&&(o=0),e===ue||n.hasClass("active")?j(n,o):x(n,function(){j(n,o)})}function j(e,o){if("undefined"!=typeof o){var n,t=e.find(".fp-slides");n=e.find(".fp-slides");var i=n.find('.fp-slide[data-anchor="'+o+'"]');i.length||(i=n.find(".fp-slide").eq(o)),n=i,n.length&&P(t,n)}}function _(e,o){e.append('<div class="fp-slidesNav"><ul></ul></div>');var n=e.find(".fp-slidesNav");n.addClass(l.slidesNavPosition);for(var t=0;o>t;t++)n.find("ul").append('<li><a href="#"><span></span></a></li>');n.css("margin-left","-"+n.width()/2+"px"),n.find("li").first().find("a").addClass("active")}function K(e,o,n,t){t="",l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof n&&(t=n),"undefined"==typeof o&&(o=e),ve=o,X(t+"/"+o)):("undefined"!=typeof e&&(ve=o),X(n))),G()}function X(e){if(l.recordHistory)location.hash=e;else if(Se||we)history.replaceState(i,i,"#"+e);else{var n=o.location.href.split("#")[0];o.location.replace(n+"#"+e)}}function Q(e){var o=e.data("anchor");return e=e.index(),"undefined"==typeof o&&(o=e),o}function G(){var o=e(".fp-section.active"),n=o.find(".fp-slide.active"),t=o.data("anchor"),i=Q(n),o=o.index(".fp-section"),o=String(o);l.anchors.length&&(o=t),n.length&&(o=o+"-"+i),o=o.replace("/","-").replace("#",""),de[0].className=de[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),""),de.addClass("fp-viewing-"+o)}function J(){var e,t=n.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(t,null);for(var s in a)t.style[s]!==i&&(t.style[s]="translate3d(1px,1px,1px)",e=o.getComputedStyle(t).getPropertyValue(a[s]));return n.body.removeChild(t),e!==i&&0<e.length&&"none"!==e}function Z(){if(Se||we){var o=oe();e(".fullpage-wrapper").off("touchstart "+o.down).on("touchstart "+o.down,S),e(".fullpage-wrapper").off("touchmove "+o.move).on("touchmove "+o.move,h)}}function ee(){if(Se||we){var o=oe();e(".fullpage-wrapper").off("touchstart "+o.down),e(".fullpage-wrapper").off("touchmove "+o.move)}}function oe(){return o.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ne(e){var o=[];return o.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,o.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,we&&m(e)&&l.scrollBar&&(o.y=e.touches[0].pageY,o.x=e.touches[0].pageX),o}function te(e,o){pe.setScrollingSpeed(0,"internal"),"undefined"!=typeof o&&(ye=!0),P(e.closest(".fp-slides"),e),"undefined"!=typeof o&&(ye=!1),pe.setScrollingSpeed(Pe.scrollingSpeed,"internal")}function ie(e){l.scrollBar?be.scrollTop(e):l.css3?U("translate3d(0px, -"+e+"px, 0px)",!1):be.css("top",-e)}function ae(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function se(e,o,n){switch(o){case"up":$e[n].up=e;break;case"down":$e[n].down=e;break;case"left":$e[n].left=e;break;case"right":$e[n].right=e;break;case"all":"m"==n?pe.setAllowScrolling(e):pe.setKeyboardScrolling(e)}}function le(){ie(0),e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),e(".fp-section").css({height:"","background-color":"",padding:""}),e(".fp-slide").css({width:""}),be.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),e(".fp-section, .fp-slide").each(function(){O(e(this)),e(this).removeClass("fp-table active")}),be.addClass("fp-notransition"),be.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){e(this).replaceWith(this.childNodes)}),fe.scrollTop(0)}function re(e,o,n){l[e]=o,"internal"!==n&&(Pe[e]=o)}function ce(e,o){console&&console[e]&&console[e]("fullPage: "+o)}var fe=e("html, body"),de=e("body"),pe=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},l),function(){l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,ce("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&ce("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),l.continuousVertical&&l.scrollBar&&(l.continuousVertical=!1,ce("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(l.anchors,function(o,n){(e("#"+n).length||e('[name="'+n+'"]').length)&&ce("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}(),e.extend(e.easing,{easeInOutCubic:function(e,o,n,t,i){return 1>(o/=i/2)?t/2*o*o*o+n:t/2*((o-=2)*o*o+2)+n}}),e.extend(e.easing,{easeInQuart:function(e,o,n,t,i){return t*(o/=i)*o*o*o+n}}),pe.setAutoScrolling=function(o,n){re("autoScrolling",o,n);var t=e(".fp-section.active");l.autoScrolling&&!l.scrollBar?(fe.css({overflow:"hidden",height:"100%"}),pe.setRecordHistory(l.recordHistory,"internal"),be.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&ie(t.position().top)):(fe.css({overflow:"visible",height:"initial"}),pe.setRecordHistory(!1,"internal"),be.css({"-ms-touch-action":"","touch-action":""}),ie(0),t.length&&fe.scrollTop(t.position().top))},pe.setRecordHistory=function(e,o){re("recordHistory",e,o)},pe.setScrollingSpeed=function(e,o){re("scrollingSpeed",e,o)},pe.setFitToSection=function(e,o){re("fitToSection",e,o)},pe.setLockAnchors=function(e){l.lockAnchors=e},pe.setMouseWheelScrolling=function(e){e?n.addEventListener?(n.addEventListener("mousewheel",b,!1),n.addEventListener("wheel",b,!1),n.addEventListener("DOMMouseScroll",b,!1)):n.attachEvent("onmousewheel",b):n.addEventListener?(n.removeEventListener("mousewheel",b,!1),n.removeEventListener("wheel",b,!1),n.removeEventListener("DOMMouseScroll",b,!1)):n.detachEvent("onmousewheel",b)},pe.setAllowScrolling=function(o,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){se(o,n,"m")})):o?(pe.setMouseWheelScrolling(!0),Z()):(pe.setMouseWheelScrolling(!1),ee())},pe.setKeyboardScrolling=function(o,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){se(o,n,"k")})):l.keyboardScrolling=o},pe.moveSectionUp=function(){var o=e(".fp-section.active").prev(".fp-section");o.length||!l.loopTop&&!l.continuousVertical||(o=e(".fp-section").last()),o.length&&x(o,null,!0)},pe.moveSectionDown=function(){var o=e(".fp-section.active").next(".fp-section");o.length||!l.loopBottom&&!l.continuousVertical||(o=e(".fp-section").first()),!o.length||l.onBeforeMoveSection&&e.isFunction(l.onBeforeMoveSection)&&!1===l.onBeforeMoveSection.call(this,direction,currentSlide,destiny,slides,activeSection)||x(o,null,!1)},pe.silentMoveTo=function(e,o){pe.setScrollingSpeed(0,"internal"),pe.moveTo(e,o),pe.setScrollingSpeed(Pe.scrollingSpeed,"internal")},pe.moveTo=function(e,o){var n=Y(e);"undefined"!=typeof o?W(e,o):0<n.length&&x(n)},pe.moveSlideRight=function(){C("next")},pe.moveSlideLeft=function(){C("prev")},pe.reBuild=function(o){if(!be.hasClass("fp-destroyed")){ye=!0;var n=a.width();Ce=a.height(),l.resize&&z(Ce,n),e(".fp-section").each(function(){var o=e(this).find(".fp-slides"),n=e(this).find(".fp-slide");l.verticalCentered&&e(this).find(".fp-tableCell").css("height",N(e(this))+"px"),e(this).css("height",Ce+"px"),l.scrollOverflow&&(n.length?n.each(function(){F(e(this))}):F(e(this))),1<n.length&&P(o,o.find(".fp-slide.active"))}),(n=e(".fp-section.active").index(".fp-section"))&&pe.silentMoveTo(n+1),ye=!1,e.isFunction(l.afterResize)&&o&&l.afterResize.call(be),e.isFunction(l.afterReBuild)&&!o&&l.afterReBuild.call(be)}},pe.setResponsive=function(o){var n=be.hasClass("fp-responsive");o?n||(pe.setAutoScrolling(!1,"internal"),pe.setFitToSection(!1,"internal"),e("#fp-nav").hide(),be.addClass("fp-responsive")):n&&(pe.setAutoScrolling(Pe.autoScrolling,"internal"),pe.setFitToSection(Pe.autoScrolling,"internal"),e("#fp-nav").show(),be.removeClass("fp-responsive"))};var ue,ve,he,ge,me=!1,Se=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),we="ontouchstart"in o||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,be=e(this),Ce=a.height(),ye=!1,xe=!0,Te=[],$e={m:{up:!0,down:!0,left:!0,right:!0}};$e.k=e.extend(!0,{},$e.m);var Ae,ke,Le,Be,Ee,Me,Pe=e.extend(!0,{},l);e(this).length&&(be.css({height:"100%",position:"relative"}),be.addClass("fullpage-wrapper"),e("html").addClass("fp-enabled")),l.css3&&(l.css3=J()),pe.setAllowScrolling(!0),be.removeClass("fp-destroyed"),e(l.sectionSelector).each(function(){e(this).addClass("fp-section")}),e(l.slideSelector).each(function(){e(this).addClass("fp-slide")}),l.navigation&&c(),e(".fp-section").each(function(o){var n=e(this),t=e(this).find(".fp-slide"),i=t.length;if(o||0!==e(".fp-section.active").length||e(this).addClass("active"),e(this).css("height",Ce+"px"),l.paddingTop&&e(this).css("padding-top",l.paddingTop),l.paddingBottom&&e(this).css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[o]&&e(this).css("background-color",l.sectionsColor[o]),"undefined"!=typeof l.anchors[o]&&(e(this).attr("data-anchor",l.anchors[o]),e(this).hasClass("active")&&H(l.anchors[o],o)),i>0){o=100*i;var a=100/i;t.wrapAll('<div class="fp-slidesContainer" />'),t.parent().wrap('<div class="fp-slides" />'),e(this).find(".fp-slidesContainer").css("width",o+"%"),i>1&&(l.controlArrows&&r(e(this)),l.slidesNavigation&&_(e(this),i)),t.each(function(o){e(this).css("width",a+"%"),l.verticalCentered&&q(e(this))}),n=n.find(".fp-slide.active"),n.length?te(n):t.eq(0).addClass("active")}else l.verticalCentered&&q(e(this))}).promise().done(function(){pe.setAutoScrolling(l.autoScrolling,"internal");var t=e(".fp-section.active").find(".fp-slide.active");if(t.length&&(0!==e(".fp-section.active").index(".fp-section")||0===e(".fp-section.active").index(".fp-section")&&0!==t.index())&&te(t),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(de),l.navigation&&(he.css("margin-top","-"+he.height()/2+"px"),he.find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")),l.menu&&l.css3&&e(l.menu).closest(".fullpage-wrapper").length&&e(l.menu).appendTo(de),l.scrollOverflow?("complete"===n.readyState&&f(),a.on("load",f)):d(),R(),!l.animateAnchor&&(t=o.location.hash.replace("#","").split("/")[0],t.length)){var i=e('[data-anchor="'+t+'"]');i.length&&(l.autoScrolling?ie(i.position().top):(ie(0),fe.scrollTop(i.position().top)),H(t,null),e.isFunction(l.afterLoad)&&l.afterLoad.call(i,t,i.index(".fp-section")+1),i.addClass("active").siblings().removeClass("active"))}G(),a.on("load",function(){var e=o.location.hash.replace("#","").split("/"),n=e[0],e=e[1];n&&W(n,e)})});var Ve=!1;a.on("scroll",p);var Re=0,Ie=0,ze=0,He=0,De=(new Date).getTime();a.on("hashchange",E),s.keydown(function(o){clearTimeout(Me);var n=e(":focus");n.is("textarea")||n.is("input")||n.is("select")||!l.keyboardScrolling||!l.autoScrolling||(-1<e.inArray(o.which,[40,38,32,33,34])&&o.preventDefault(),Me=setTimeout(function(){var n=o.shiftKey;switch(ge=o.ctrlKey,o.which){case 38:case 33:$e.k.up&&pe.moveSectionUp();break;case 32:if(n&&$e.k.up){pe.moveSectionUp();break}case 40:case 34:$e.k.down&&pe.moveSectionDown();break;case 36:$e.k.up&&pe.moveTo(1);break;case 35:$e.k.down&&pe.moveTo(e(".fp-section").length);break;case 37:$e.k.left&&pe.moveSlideLeft();break;case 39:$e.k.right&&pe.moveSlideRight()}},150))}),s.keyup(function(e){ge=e.ctrlKey}),e(o).blur(function(){ge=!1}),be.mousedown(function(e){2==e.which&&(Fe=e.pageY,be.on("mousemove",M))}),be.mouseup(function(e){2==e.which&&be.off("mousemove")});var Fe=0;s.on("click touchstart","#fp-nav a",function(o){o.preventDefault(),o=e(this).parent().index(),x(e(".fp-section").eq(o))}),s.on("click touchstart",".fp-slidesNav a",function(o){o.preventDefault(),o=e(this).closest(".fp-section").find(".fp-slides");var n=o.find(".fp-slide").eq(e(this).closest("li").index());P(o,n)}),l.normalScrollElements&&(s.on("mouseenter",l.normalScrollElements,function(){pe.setMouseWheelScrolling(!1)}),s.on("mouseleave",l.normalScrollElements,function(){pe.setMouseWheelScrolling(!0)})),e(".fp-section").on("click touchstart",".fp-controlArrow",function(){e(this).hasClass("fp-prev")?$e.m.left&&pe.moveSlideLeft():$e.m.right&&pe.moveSlideRight()}),a.resize(V);var Oe=Ce;pe.destroy=function(o){pe.setAutoScrolling(!1,"internal"),pe.setAllowScrolling(!1),pe.setKeyboardScrolling(!1),be.addClass("fp-destroyed"),clearTimeout(Le),clearTimeout(ke),clearTimeout(Ae),clearTimeout(Be),clearTimeout(Ee),a.off("scroll",p).off("hashchange",E).off("resize",V),s.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(".fp-section").off("click",".fp-controlArrow"),o&&le()}}}),$(window).resize(function(){location.reload()}),$(document).ready(function(){$("[data-src]").each(function(){var e=$(this).data("src");$(this).attr("src",e)});var e="<img width='178' height='201' data-src='src/img/page-oapp_card2.png' alt='Card de horário'>",o="<img class='page-oapp_iphone' src='src/img/page-oapp_iphone.png' alt='Vou de ônibus no iPhone'>",n="<p class=\"dots\">							<a onClick=\"return ga('send', 'event', 'page-vouagora', 'dots', 'vouagora');\"  class=\"vouagora\" href=\"javascript:void(0)\"></a>							<a onClick=\"return ga('send', 'event', 'page-vouagora', 'dots', 'trabalho');\"  class=\"trabalho\" href=\"javascript:void(0)\"></a>							<a onClick=\"return ga('send', 'event', 'page-vouagora', 'dots', 'estudo');\"  class=\"estudo\" href=\"javascript:void(0)\"></a>						</p>";$(".page-oapp figure img").before(e),$(".page-oapp .wrap").before(o),$(".page-vouagora .section-p").after(n),$fullPage=$("#fullpage--vbd"),$mobile=$(".mobile"),$pageHome=$(".page-home"),$pageApp=$(".page-oapp"),$pageVouagora=$(".page-vouagora"),$nav=$(".nav-site"),$nextPage=$(".next-page"),$slideVouagora=$(".mobile-sections_vouagora"),$mobile.width($mobile.width()).height($mobile.height()),$nextPage.addClass("load"),$nextPage.click(function(){$.fn.fullpage.moveSectionDown()}),$fullPage.fullpage({css3:!0,scrollBar:!0,onLeave:function(e,o,n){if(o>1&&($nav.addClass("fixed"),$(".page-home_action").removeClass("form-active")),1==o&&($mobile.removeClass("pageApp-move pageApp-mobile"),$nav.removeClass("fixed")),2==o){$mobile.addClass("pageApp-mobile"),$mobile.removeClass("pageVouagora");var t=!0;t&&(ga("send","event","pagina","desceu-dobra-pagina"),t=!1)}o>3&&$mobile.addClass("pageVouagora"),4==o&&$(".page-free .fp-tableCell").animate({scrollTop:10},"400")},afterLoad:function(e,o){1==o&&($(".view").removeClass("view"),$.fn.fullpage.setAutoScrolling(!0)),o>=2&&($mobile.addClass("pageApp-move"),$pageApp.addClass("view"),$.fn.fullpage.setAutoScrolling(!0)),o>=3?($mobile.addClass("pageVouagora"),$pageVouagora.addClass("view"),$.fn.fullpage.setAutoScrolling(!0),$.getScript("src/build/social.js")):3>o&&$mobile.removeClass("pageVouagora"),4==o?($nav.addClass("gray"),$nextPage.addClass("none"),$.fn.fullpage.setAutoScrolling(!1)):($nextPage.removeClass("none"),$nav.removeClass("gray"))}});var t=$(".mobile-sections").width(),i=$(".mobile-sections").height();$(".mobile-sections_item").width(t).height(i);$slideVouagora.data("owlCarousel");$slideVouagora.owlCarousel({singleItem:!0,slideSpeed:600,navigation:!0,pagination:!1,afterInit:function(){$slideVouagora.removeAttr("style")},afterAction:function(){var e=this.currentItem+1;$(".dots a:nth-child("+e+")").addClass("active").siblings().removeClass("active")}}),$(".arrow.next").on("click",function(){$slideVouagora.trigger("owl.next")}),$(".arrow.prev").on("click",function(){$slideVouagora.trigger("owl.prev")}),$(".page-free .fp-tableCell").on("scroll",function(){0==$(".page-free .fp-tableCell").scrollTop()&&$.fn.fullpage.setAutoScrolling(!0)}),$(".logo-site, .download").on("click",function(){$.fn.fullpage.moveTo(1)}),$nav.on("click","a",function(){var e=$(this).index()+2;if(e>3&&8>e){$.fn.fullpage.moveTo(4);var o=$(this).data("target");console.log($(o).position().top-20),$(".page-free .fp-tableCell").animate({scrollTop:$(o).position().top-20},"3000")}else $.fn.fullpage.moveTo(e)})});