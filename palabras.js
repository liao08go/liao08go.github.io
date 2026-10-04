(function(){
var $=function(i){return document.getElementById(i)};
var nf=new Intl.NumberFormat("es-ES");
function row(k,v){return "<dt>"+k+"</dt><dd>"+v+"</dd>"}
function upd(){
var t=$("txt").value,s=t.trim();
var w=s?s.split(/\s+/).length:0;
var c=Array.from(t).length,cs=Array.from(t.replace(/\s/g,"")).length;
var p=t.split(/\n\s*\n/).filter(function(x){return x.trim()}).length;
var m=w?Math.max(1,Math.ceil(w/200)):0;
$("out").innerHTML=row("Palabras",nf.format(w))+row("Caracteres (con espacios)",nf.format(c))+row("Caracteres (sin espacios)",nf.format(cs))+row("Párrafos",nf.format(p))+row("Lectura estimada",m+" min");
}
$("txt").addEventListener("input",upd);upd();
})();
