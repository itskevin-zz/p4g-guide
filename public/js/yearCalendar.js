var apr = document.getElementById("apr");
var aprCalendar = jsCalendar.new(apr, "11/04/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var may = document.getElementById("may");
var mayCalendar = jsCalendar.new(may, "01/05/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var jun = document.getElementById("jun");
var junCalendar = jsCalendar.new(jun, "01/06/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var jul = document.getElementById("jul");
var julCalendar = jsCalendar.new(jul, "01/07/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var aug = document.getElementById("aug");
var augCalendar = jsCalendar.new(aug, "01/08/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var sep = document.getElementById("sep");
var sepCalendar = jsCalendar.new(sep, "01/09/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var oct = document.getElementById("oct");
var octCalendar = jsCalendar.new(oct, "01/10/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var nov = document.getElementById("nov");
var novCalendar = jsCalendar.new(nov, "01/11/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var dec = document.getElementById("dec");
var decCalendar = jsCalendar.new(dec, "01/12/2011", {
    navigator : false,
    dayFormat : "DDD"
});           
var jan = document.getElementById("jan");
var janCalendar = jsCalendar.new(jan, "01/01/2012", {
    navigator : false,
    dayFormat : "DDD"
});           
var feb = document.getElementById("feb");
var febCalendar = jsCalendar.new(feb, "01/02/2012", {
    navigator : false,
    dayFormat : "DDD"
});           
var mar = document.getElementById("mar");
var marCalendar = jsCalendar.new(mar, "01/03/2012", {
    navigator : false,
    dayFormat : "DDD"
});     

aprCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
mayCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
junCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
julCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
augCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
sepCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
octCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
novCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
decCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
janCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
febCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
marCalendar.onDateClick(function(event, date){
    var link = date.toJSON().substr(5,5).replace("-","");
    window.location.href = "/day/"+link
})      
