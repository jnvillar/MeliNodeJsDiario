/**
 * Created by jnvillar on 11/29/16.
 */
var articulos = []

var Articulo = function (titulo,contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
};

Articulo.prototype.getTitulo = function(){
    return this.titulo;
};

Articulo.prototype.getContenido = function(){
    return this.contenido();
};

function manejadorArticulos() {
    
}