(function(){
document.addEventListener("click",function(e){
var l=document.getElementById("links"),m=document.getElementById("menu");if(!l||!m||!e.target.closest)return;
if(e.target.closest("#menu")){var o=l.classList.toggle("open");m.setAttribute("aria-expanded",o?"true":"false");m.textContent=o?"✕":"☰"}
else if(e.target.closest("#links a")||!e.target.closest("header")){l.classList.remove("open");m.setAttribute("aria-expanded","false");m.textContent="☰"}
});
})();
(function(){
document.querySelectorAll("img[data-logo]").forEach(function(i){i.src="logo.jpg"});
var NUM={colegio:"5521979103933",tecnico:"5521959512487"};
var OPT={colegio:["Educação Infantil","Ensino Fundamental – Anos Iniciais","Ensino Fundamental – Anos Finais","Ensino Médio","EJA"],tecnico:["Técnico em Enfermagem (turma da semana)","Técnico em Enfermagem (turma de sábado)"]};
var $=function(i){return document.getElementById(i)};
var unit=$("unit"),sel=$("interesse");

function fill(){if(!unit)return;sel.innerHTML="";OPT[unit.value].forEach(function(o){var e=document.createElement("option");e.textContent=o;sel.appendChild(e)});$("lblint").firstChild.textContent=unit.value==="tecnico"?"Turma de interesse":"Série ou segmento do aluno";$("fab").href="https://wa.me/"+NUM[unit.value]}
if(unit){unit.addEventListener("change",fill);var q=new URLSearchParams(location.search).get("unidade");if(q&&OPT[q])unit.value=q;fill();}else if(document.body.dataset.unit==="tecnico"){$("fab").href="https://wa.me/"+NUM.tecnico}
if($("f"))$("f").addEventListener("submit",function(e){
e.preventDefault();
var n=$("nome").value.trim(),t=$("tel").value.replace(/\D/g,"");
if(n.length<2){$("err").textContent="Informe seu nome.";$("nome").focus();return}
if(t.length<10){$("err").textContent="Informe um WhatsApp com DDD.";$("tel").focus();return}
$("err").textContent="";
var d=$("data").value,dt=d?d.split("-").reverse().join("/"):"a combinar";
var u=unit.value==="tecnico"?"Escola Técnica Atitude":"Colégio e Curso Atitude";
var txt="Olá! Meu nome é "+n+" e gostaria de: "+$("tipo").value+".\n"+
"Unidade: "+u+"\nInteresse: "+sel.value+"\nData preferida: "+dt+" ("+$("hora").value+")\n"+
"Meu WhatsApp: "+$("tel").value+($("msg").value.trim()?"\nMensagem: "+$("msg").value.trim():"");
window.open("https://wa.me/"+NUM[unit.value]+"?text="+encodeURIComponent(txt),"_blank","noopener");
});
if($("data"))$("data").min=new Date().toISOString().split("T")[0];
})();
