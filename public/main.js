var samepage = false;

var ManejadorDeArticulos = function (cantPorPagina) {
    var articulos = [];
    var cantMax = 0;
    var cantPorPagina = cantPorPagina;
};

var manejadorDeArticulos = new ManejadorDeArticulos(3);


// ManejadorDeArticulos.prototype.getArticulos = function () {
//   return articulos.values();
// };

window.onload = function(){

    manejadorDeArticulos.load();
    manejadorDeArticulos.render();
};

window.onmousemove = function(){
    var x = Math.floor(Math.random()*11);
    var resultado = 0;
    // var y = Math.facto
    var resultado = 1;

    for(var i=1; i<=x; i++) {
        resultado *= i;
    }
    document.getElementById('numero').innerHTML= ' numero  '+ x + '   factorial ' + resultado;
};


function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
};


var Articulo = function (titulo, contenido, link, tieneLink) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.link = link;
    this.tieneLink = tieneLink;
};


Articulo.prototype.getTitulo = function(){
    return this.titulo;
};

Articulo.prototype.getContenido = function () {
    return this.contenido;

};


ManejadorDeArticulos.prototype.load = function () {
    // var a = Articulo("Chapecoense","Gana la copa");
    var nuevo1 = new Articulo("Chapecoense","Gana la copa",'index.html',true);
    var nuevo2 = new Articulo("Walter va a frontend","Lo decidio el mismisimo galperin, luego de ver su desempeño en la escuelita","index.html",false);
    var nuevo3 = new Articulo("Chapecoense","Gana la copa",'index.html',false);
    var nuevo4 = new Articulo("Chapecoense","Gana la copa",'index.html',true);
    var nuevo5 = new Articulo("Walter va a frontend","Lo decidio el mismisimo galperin, luego de ver su desempeño en la escuelita","index.html",false);
    var nuevo6 = new Articulo("Chapecoense","Gana la copa",'index.html',false);
    this.cantMax = 6;
    this.articulos = [nuevo1,nuevo2,nuevo3,nuevo4,nuevo5,nuevo6];

    // this.articulos.add(Articulo("San Lorenzo","Sigue descendiendo"));
    // this.articulos.add(Articulo("Boca","Invitado a libertadores"));
};

ManejadorDeArticulos.prototype.render = function () {
    document.getElementById('articulos').innerHTML = '';
    for(var i=0; i<this.articulos.length; i++){
        document.getElementById('articulos').innerHTML += this.articulos[i].render();
    }
};

Articulo.prototype.render = function () {
    //document.getElementById('articulos').innerHTML = '<article><div><h2>'+this.getTitulo()+'</h2></div><div><p>'+this.getContenido()+'<p></div> </article>';

    if(this.tieneLink) {
        //return  '<li><h2><article><div><a onclick="abrirNoticia(this.id)">' + this.getTitulo() + '</h2></div><div><p>' + this.getContenido() + '</p></div> </article></a></li></li>';
        return '<li><a onclick = "abrirNoticia(\''+this.link+'\')"><h2>' + this.getTitulo() + '</h2></div><div><p>' + this.getContenido() + '<p></div> </article></a></li>';
    }
    else{
        return '<li><a><article><div><h2>' + this.getTitulo() + '</h2></div><div><p>' + this.getContenido() + '<p></div> </article></a></li>';
    }
};

function abrirNoticia(link){
    if(!samepage) {
        location.href = link;
    }else{
        return '<div><h1> ajjajajaajja </h1></div>'
    }
}


