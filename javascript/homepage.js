//Globsl vsriables
var keepcount = 0;
var windowsize = 0;
var id;
// Slider function
function slidedivs(){
if(keepcount == 0){
var divin = $("#header-slider-div-two");
var divout = $("#header-slider-div-one");
}else{
var divin = $("#header-slider-div-one");
var divout = $("#header-slider-div-two");
}
divout.animate({left: '-100%'}, 2000);
$.when(divin.animate({left: '0px'}, 2000)).then(function () {
divout.css('left','100%');
if(keepcount == 0){
keepcount = 1;
}else{
keepcount = 0;
}
setTimeout(slidedivs, 5000);
});
}
//Check window size after change and perform actions depending on size. Keeps a
//count on the current window size as well
function doneResizing(){
var $window = $(window);
windowsize = $window.width();
if (windowsize > 1001) {
$('#nav-container').show();
$('#hamburger').hide();
setcolordiv();
} else{
$('#nav-container').hide();
$('#hamburger').show();
}
}
//Jquery resize function
$(window).resize(function() {
clearTimeout(id);
id = setTimeout(doneResizing, 200);
});
// Functions positions the page color marker
function setcolordiv(){
var width2 = $("#holdimages").width(); 
var elewidth = $(".click").eq(0).width();
var showpos = width2 + 5;
$("#focused-color").css("width",elewidth);
$("#focused-color").css({top: 0, left:showpos});
$("#focused-color").show();
}
$(document).ready(function(){
// Get the window size
setTimeout(doneResizing, 200);
//Start the slider
setTimeout(slidedivs, 5000);
//Position the page color indicator
setcolordiv();
//Toggles the header options for mobile
$('#hamburger').click(function(){
$('#nav-container').toggle();
});
//Hover function which controls the page indicator
$('.click').hover(function(){
if(windowsize >= 1001){
var width = $(this).width(); 
$("#show-color").css("width",width);
var pos = $(this).position();
var width2 = $("#holdimages").width(); 
var showpos = (width2 + pos.left) + 5;
$("#show-color").css({top: 0, left:showpos});
$("#show-color").show();
}
});
//Hide the hover page indicator when leave nav menu.
$('#nav-container').mouseleave(function(){
$("#show-color").hide();
});
});



