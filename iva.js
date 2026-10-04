(function(){
var $=function(i){return document.getElementById(i)};
var eur=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"});
function row(k,v){return "<dt>"+k+"</dt><dd>"+v+"</dd>"}
$("go").addEventListener("click",function(){
var a=parseFloat($("amt").value),t=parseFloat($("rate").value),o=$("out");
if(isNaN(a)||a<0){o.innerHTML="<dt>Error</dt><dd>Introduce un importe igual o mayor que 0.</dd>";return}
var base,cuota,total;
if($("mode").value==="add"){base=a;cuota=base*t/100;total=base+cuota}
else{total=a;base=total/(1+t/100);cuota=total-base}
o.innerHTML=row("Base imponible",eur.format(base))+row("IVA ("+t+" %)",eur.format(cuota))+row("Total",eur.format(total));
});})();
