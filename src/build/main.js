$(document).ready(function(){var e=$(".avise-me"),i=$(".page-home_action"),o=(e.find("form"),$(".mobile-sections_vouagora")),a=$(".double-mac_with-bacon"),s=$(".nav-site nav"),t=$(".logo-site"),l=$(".page-oapp");isMobile&&(a.click(function(){$(this).toggleClass("active"),s.slideToggle()}),s.on("click","a",function(){var e=$(this).data("target");$("html,body").animate({scrollTop:$(e).offset().top-56},1e3),s.slideToggle(),a.toggleClass("active")}),t.click(function(){$("html,body").animate({scrollTop:0},1e3),s.slideUp(),a.removeClass("active")}),$(window).scroll(function(){var e=$(window).scrollTop(),i=l.offset().top;e>=i?$(".nav-site").addClass("fixed"):$(".nav-site").removeClass("fixed")})),e.find("button").click(function(){return i.hasClass("form-active")?void 0:(i.addClass("form-active"),ga("send","event","download","ios-avise-me","avise-me"),!1)}),e.find(".close").click(function(){i.removeClass("form-active"),ga("send","event","download","ios-avise-me","close")}),isMobile&&$("[data-src]").each(function(){var e=$(this).data("src");$(this).attr("src",e)}),isMobile&&o.owlCarousel({stagePadding:50,items:1,afterAction:function(){var e=this.currentItem+1;$(".dots a:nth-child("+e+")").addClass("active").siblings().removeClass("active")}}),$(".dots").on("click","a",function(){console.log("cu");var e=$(this).index();o.trigger("owl.goTo",e),$(this).addClass("active").siblings().removeClass("active")})});