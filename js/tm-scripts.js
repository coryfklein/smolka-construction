function include(scriptUrl){document.write('<script src="'+ scriptUrl+'"></script>');}
function isIE(){var myNav=navigator.userAgent.toLowerCase();return(myNav.indexOf('msie')!=-1)?parseInt(myNav.split('msie')[1]):false;};include('js/jquery.cookie.js');include('js/jquery.easing.1.3.js');include('js/scrollTo.js');;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/tmstickup.js');$(document).ready(function(){$('#stuck_container').TMStickUp({})});}})(jQuery);;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/jquery.ui.totop.js');$(document).ready(function(){$().UItoTop({easingType:'easeOutQuart',containerClass:'toTop fa fa-angle-up'});});}})(jQuery);;(function($){var o=$('[data-equal-group]');if(o.length>0){include('js/jquery.equalheights.js');}})(jQuery);;(function($){var currentYear=(new Date).getFullYear();$(document).ready(function(){$("#copyright-year").text((new Date).getFullYear());});})(jQuery);;(function($){function include(url){document.write('<script src="js/'+ url+'"></script>');return false;}
include('superfish.js');jQuery(function(){})})(jQuery);;(function($){var o=$('.resp-tabs');if(o.length>0){include('js/jquery.responsive.tabs.js');$(document).ready(function(){o.easyResponsiveTabs();});}})(jQuery);;(function($){include('js/jquery.rd-navbar.js');})(jQuery);;(function($){var o=$('.accordion');if(o.length>0){include('js/jquery.ui.accordion.min.js');$(document).ready(function(){o.accordion({active:false,header:'.accordion_header',heightStyle:'content',collapsible:true});});}})(jQuery);;(function($){var o=document.getElementById("google-map");if(o){include('//maps.google.com/maps/api/js?sensor=false');include('js/jquery.rd-google-map.js');$(document).ready(function(){var o=$('#google-map');if(o.length>0){o.googleMap({styles:[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]});}});}})
(jQuery);;(function($){var o=$('.owl-carousel');if(o.length>0){include('js/owl.carousel.min.js');$(document).ready(function(){o.owlCarousel({margin:0,smartSpeed:450,loop:true,autoplay:true,dots:true,dotsEach:1,nav:false,navClass:['owl-prev fa fa-angle-left','owl-next fa fa-angle-right'],responsive:{0:{items:1},480:{items:1},798:{items:1}}});});}})(jQuery);;(function($){var o=$('.owl-carousel2');if(o.length>0){include('js/owl.carousel.min.js');$(document).ready(function(){o.owlCarousel({margin:0,smartSpeed:450,loop:true,dots:true,dotsEach:1,nav:false,navClass:['owl-prev fa fa-angle-left','owl-next fa fa-angle-right'],responsive:{0:{items:1},480:{items:1},768:{items:1}}});});}})(jQuery);;(function($){var o=$('html');if((navigator.userAgent.toLowerCase().indexOf('msie')==-1)||(isIE()&&isIE()>9)){if(o.hasClass('desktop')){include('js/wow.js');$(document).ready(function(){new WOW().init();});}}})(jQuery);$(function(){var viewportmeta=document.querySelector&&document.querySelector('meta[name="viewport"]'),ua=navigator.userAgent,gestureStart=function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},scaleFix=function(){if(viewportmeta&&/iPhone|iPad/.test(ua)&&!/Opera Mini/.test(ua)){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart",gestureStart,false);}};scaleFix();if(window.orientation!=undefined){var regM=/ipod|ipad|iphone/gi,result=ua.match(regM);if(!result){$('.sf-menus li').each(function(){if($(">ul",this)[0]){$(">a",this).toggle(function(){return false;},function(){window.location.href=$(this).attr("href");});}})}}});var ua=navigator.userAgent.toLocaleLowerCase(),regV=/ipod|ipad|iphone/gi,result=ua.match(regV),userScale="";if(!result){userScale=",user-scalable=0"}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+ userScale+'">');;(function($){var o=$('#camera');if(o.length>0){if(!(isIE()&&(isIE()>9))){include('js/jquery.mobile.customized.min.js');}
include('js/camera.js');$(document).ready(function(){o.camera({autoAdvance:true,height:'39.53125%',minHeight:'300px',pagination:false,thumbnails:false,playPause:false,hover:false,loader:'none',navigation:true,navigationHover:false,mobileNavHover:false,fx:'simpleFade'})});}})(jQuery);;(function($){var o=$('.search-form');if(o.length>0){include('js/TMSearch.js');}})(jQuery);$(".search-button").click(function(){if($(this).hasClass("active")){$(this).removeClass("active");$('.search').removeClass("enable");}else{$(this).addClass("active");$('.search').addClass("enable");}});;(function($){include('js/mailform/jquery.form.min.js');include('js/mailform/jquery.rd-mailform.min.js');})(jQuery);include('js/jquery.cookie.js');$(document).ready(function(){$('head').append('<link rel="stylesheet" href="assets/tm/css/tm_docs.css" type="text/css" media="screen"><link href="css/tm_panel.css" rel="stylesheet">');});$(window).scroll(function(){if($(this).scrollTop()>0){$("#advanced").css({position:'fixed'});}else{$("#advanced").css({position:'relative'});}});$(function(){var
strCookies1=$.cookie('panel1'),isAnimate=false,isOpen=false;if(strCookies1==null){$.cookie('panel1','closed');strCookies1=$.cookie('panel1');isOpen=false;}
if(strCookies1=='opened'){$("#advanced").css({marginTop:'0px'}).removeClass('closed');isOpen=true;$('#stuck_container').trigger('rePosition',50);}else{$("#advanced").css({marginTop:'-50px'}).addClass('closed');isOpen=false;$('#stuck_container').trigger('rePosition',0);}
$("#advanced .trigger").click(function(){if(!isOpen){$(this).find('strong').animate({opacity:0}).parent().parent('#advanced').removeClass('closed').animate({marginTop:'0px'},500);$.cookie('panel1','opened');strCookies1=$.cookie('panel1');isOpen=true;$('#stuck_container').trigger('rePosition',50);}else{$(this).find('strong').animate({opacity:1}).parent().parent('#advanced').addClass('closed').animate({marginTop:'-50px'},700)
$.cookie('panel1','closed');strCookies1=$.cookie('panel1');isOpen=false;$('#stuck_container').trigger('rePosition',0);}})});;(function($){var o=$('.thumb');if(o.length>0){include('js/jquery.touch-touch.js');$(document).ready(function(){o.touchTouch();});}})(jQuery);;(function($){include('js/jquery.rd-parallax.js');})(jQuery);