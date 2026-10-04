(function(){
var $=function(i){return document.getElementById(i)};
function ts(s){var p=s.split("-");return Date.UTC(+p[0],+p[1]-1,+p[2])}
var fmt={timeZone:"UTC",weekday:"long",day:"numeric",month:"long",year:"numeric"};
$("go1").addEventListener("click",function(){
var a=$("d1").value,b=$("d2").value,r=$("r1");
if(!a||!b){r.textContent="Elige las dos fechas.";return}
var d=Math.round((ts(b)-ts(a))/864e5),n=Math.abs(d);
var w=Math.floor(n/7),rest=n%7;
r.textContent=n+" días"+(d<0?" (la fecha final es anterior a la inicial)":"")+" = "+w+" semanas y "+rest+" días.";
});
$("go2").addEventListener("click",function(){
var a=$("d3").value,n=parseInt($("n").value,10),r=$("r2");
if(!a||isNaN(n)){r.textContent="Elige la fecha e introduce un número de días.";return}
r.textContent=new Date(ts(a)+n*864e5).toLocaleDateString("es-ES",fmt);
});})();
