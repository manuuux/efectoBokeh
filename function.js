var nodoPadre = document.getElementById("contenido");
var count= 1;
var color=1;
var somant=0;
var sombra=10;
function creadiv(){
  if(somant>sombra){
    document.getElementById("text").style.textShadow="0px 0px "+sombra+"px white";
    somant=sombra;
    sombra=sombra-10;
    if(sombra==0){sombra=10;}
  }else{
    document.getElementById("text").style.textShadow = "0px 0px "+sombra+"px white";
    somant=sombra;
    sombra=sombra+10;
    if(sombra==100){somant=110;}
  }
  var nodoHijo = document.createElement("div");
  var altura = nodoPadre.offsetHeight;
  var ancho = nodoPadre.offsetWidth;
  nodoHijo.id="p"+count;
  nodoHijo.className="particula";
  var x = Math.floor((Math.random())*ancho);
  var y = Math.floor((Math.random())*altura);

  nodoHijo.style.left = x + "px";
  nodoHijo.style.top = y + "px";
  nodoHijo.style.backgroundColor="hsl("+color+", 100%, 50%)"
  nodoHijo.style.boxShadow="0 0 10px hsl("+color+",100%,50%)"
  if(count%2==0){
    nodoHijo.style.opacity=0.2;
  }
  var tam = Math.floor(((Math.random())*8)+2);
  nodoHijo.style.width=tam+"0px";
  nodoHijo.style.height=tam+"0px";
  nodoPadre.appendChild(nodoHijo);
  count=count+1;
  color=color+5;
  
  var nodoeliminar = document.getElementById("p"+(count-50));
  nodoPadre.removeChild(nodoeliminar);
  
}
