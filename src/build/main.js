$(document).ready(function(){var e=$(".avise-me"),a=$(".page-home_action"),i=(e.find("form"),$(".mobile-sections_vouagora"));e.find("button").click(function(){return a.hasClass("form-active")?void 0:(a.addClass("form-active"),ga("send","event","download","ios-avise-me","avise-me"),!1)}),e.find(".close").click(function(){a.removeClass("form-active"),ga("send","event","download","ios-avise-me","close")}),mobile&&$("[data-src]").each(function(){var e=$(this).data("src");$(this).attr("src",e)}),mobile&&i.owlCarousel({singleItem:!0,stagePadding:50,items:1,afterAction:function(){var e=this.currentItem+1;$(".dots a:nth-child("+e+")").addClass("active").siblings().removeClass("active")}}),$(".dots").on("click","a",function(){var e=$(this).index();i.trigger("owl.goTo",e),$(this).addClass("active").siblings().removeClass("active")})});