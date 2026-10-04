(function(){
var $=function(i){return document.getElementById(i)};
var f=new Intl.NumberFormat("es-ES",{maximumFractionDigits:4});
$("go").addEventListener("click",function(){
var x=parseFloat($("x").value),y=parseFloat($("y").value),op=$("op").value,r=$("res");
if(isNaN(x)||isNaN(y)){r.textContent="Introduce los dos valores (X e Y).";return}
if(op==="of")r.textContent="Resultado: "+f.format(y*x/100);
else if(op==="inc")r.textContent="Resultado: "+f.format(y*(1+x/100));
else if(op==="dec")r.textContent="Resultado: "+f.format(y*(1-x/100));
else{if(y===0){r.textContent="Y no puede ser 0 en esta operación.";return}r.textContent="Resultado: "+f.format(x/y*100)+" %"}
});})();
