jQuery(window).load(function () {
    
    
//     jQuery("#loadLayer").delay(600).queue(function (e) {
//         jQuery(this).css("display", "none"),
//         e()
//     }),
//     jQuery("#topPage>header").delay(4e3).queue(function (e) {
//         jQuery(this).addClass("loadComp"),
//         e()
//     });
//     var e = 8e3,
//         t = 3e3;
//     jQuery("#slide1 li").css({position: "relative", overflow: "hidden"}),
//     jQuery("#slide1 li").hide().css({position: "absolute", top: 0, left: 0}),
//     jQuery("#slide1 li:first").addClass("active").show(),
//     setInterval(function () {
//         var e = jQuery("#slide1 li.active"),
//             i = e.next("li").length
//                 ? e.next("li")
//                 : jQuery("#slide1 li:first");
//         e.fadeOut(t).removeClass("active"),
//         i.fadeIn(t).addClass("active")
//     }, e)
// }),
// jQuery(function () {
//     jQuery(".windowHeight").css("height", jQuery(window).outerHeight()),
//     jQuery(window).resize(function () {
//         jQuery(".windowHeight").css("height", jQuery(window).outerHeight())
//     })
// }),
// jQuery(function () {
//     jQuery("a[href^=#]").click(function () {
//         var e = 500,
//             t = jQuery(this).attr("href"),
//             i = jQuery(
//                 "#" == t || "" == t
//                     ? "html"
//                     : t
//             ),
//             o = i.offset().top;
//         return jQuery("body,html").animate({
//             scrollTop: o
//         }, e, "swing"),
//         !1
//     })
// }),
// window.onpageshow = function () {
//     var e = $(location).attr("hash");
//     if (e.length > 1 && $(e).length) {
//         var t = $(window).scrollTop(),
//             i = $(e).offset().top;
//         Math.abs(t - i) > 5 && $(window).scrollTop(i)
//     }
// },
//jQuery(function () {
//     jQuery(".trigger1, .trigger2"),
//     jQuery(window).scroll(function () {
//         var e = jQuery(window).height(),
//             t = jQuery(window).scrollTop();
//         jQuery(".trigger1, .trigger2").each(function () {
//             var i = jQuery(this).offset().top,
//                 o = navigator.userAgent;
//             o.indexOf("iPhone") > 0 || o.indexOf("Android") > 0 && o.indexOf("Mobile") > 0
//                 ? t > i - e + 50 && (jQuery(this).addClass("active"), jQuery(this).removeClass("standby"))
//                 : o.indexOf("iPad") > 0 || o.indexOf("Android") > 0
//                     ? t > i - e + 50 && (jQuery(this).addClass("active"), jQuery(this).removeClass("standby"))
//                     : t > i - e + 200 && (jQuery(this).addClass("active"), jQuery(this).removeClass("standby"))
//         })
//     })
// }),
// jQuery(function () {
//     jQuery(".acMenu>dt").on("click", function () {
//         jQuery(this).next().slideToggle(600),
//         jQuery(this).toggleClass("on")
//     })
// }),
jQuery(function () {
    jQuery("#gnavBtn").click(function () {
        return jQuery("#gnavPanel,#gnavBtn").toggleClass("open"),
        !1
    })
}),
jQuery("#gnavBtn"),
jQuery(function () {
    jQuery(window).scroll(function () {
        jQuery(this).scrollTop() > 0
            ? jQuery("#gnavPanel,#gnavBtn").removeClass("open")
            : jQuery("#gnavPanel,#gnavBtn").removeClass("open")
    })
});
// var startPos = 0;
// jQuery(window).scroll(function () {
//     var e = jQuery(this).scrollTop();
//     e > startPos
//         ? jQuery(window).scrollTop() >= 300 && jQuery("body>header").addClass("outside")
//         : jQuery("body>header").removeClass("outside"),
//     startPos = e
// }),
// $(function () {
//     $(".iziModal").iziModal({
//         closeButton: !1,
//         transitionIn: "fadeInUp",
//         transitionOut: "fadeOutUp"
//     })
// }),
// $(function () {
//     deSVG(".replace-svg", !0)
});