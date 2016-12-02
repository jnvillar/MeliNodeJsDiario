var samepage = false;

var ManejadorDeArticulos = function () {
    var articulos = [];

};

var manejadorDeArticulos = new ManejadorDeArticulos();


window.onload = function(){

    manejadorDeArticulos.load();
    manejadorDeArticulos.render("articulos");
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

ManejadorDeArticulos.prototype.render = function(objectId){
    var result = "";
    for (var i = 0; i<this.articulos.length; i++) {
        result += "<li>"+this.articulos[i].render(i, this.articulos[i].contenido)+"</li>";
    }
    document.getElementById("articulos").innerHTML = result;
};

ManejadorDeArticulos.prototype.load = function () {
    // var a = Articulo("Chapecoense","Gana la copa");
    var nuevo1 = new Articulo("Nico Rosberg se retira de la Fórmula 1: bomba para el automovilismo mundial","Apenas cinco días después de consagrarse por primera vez campeón mundial de Fórmula 1, Nico Rosberg anunció en Viena su retiro. La decisión del alemán, de apenas 31 años, cae como una bomba para el ambiente del automovilismo mundial, ya que no había indicios que permitieran suponer semejante medida. Mirá también: Fórmula 1: Nico Rosberg les agradeció a sus padres con un emotivo video Rosberg cumplió su sueño hace cinco días en el Gran Premio de Abu Dhabi, donde además igualó el logro de su padre, Keke Rosberg, quien se coronó en 1982.",'index.html',true);
    var nuevo2 = new Articulo("Otra vez aumentan las prepagas: un 6% a partir de enero","Las prepagas vuelven a subir la cuota de los afiliados. Así le dijo a Clarín el Superintendente de Servicios de Salud, Luis Scervino quien adelantó que en los próximos días el Gobierno autorizará un aumento del 6% en las cuotas de las prepagas que regirá a partir de enero. Mirá también: El oficialismo logró dictamen de Ganancias sin apoyo opositor y siguen las dudas Este año las cuotas de las empresas de medicina privada tuvieron un ajuste en marzo, del 9% retroactivo a febrero, en compensación por desfases de 2015, un 15% en junio, un adicional del 5% de julio, y otro 9% en octubre. En total un aumento acumulado del 42,6%. Si se excluyera del cálculo el 9% de marzo por ser compensatorio de 2015 y se computa el 6% de enero que cubre 2016, el aumento acumulado es del 38,6%, dijo Cerviño.","index.html",false);
    var nuevo3 = new Articulo("Una polémica ley permitirá que los chicos puedan ir a bailar con los grandes","El control de las actividades nocturnas siempre arrastra discusiones. Resulta difícil la supervisión e involucra a actores con características complejas: los jóvenes y los adolescentes. La Legislatura bonaerense se sumergió otra vez en ese laberinto y resolvió aprobar en la noche del miércoles una reforma a la denominada “Ley de Nocturnidad” para habilitar el ingreso de menores de entre 14 y 17 años a boliches bailables junto con mayores, en ciudades con menos de 30 mil habitantes. La reforma llega a pocos días del inicio de la temporada de verano, cuando se intensifica la frecuencia y cantidad de fiestas, bailes y salidas. Y alcanza a por lo menos cuatro municipios ubicados en la Costa, donde comienza la temporada en un par de semanas: Pinamar, Mar Chiquita, San Cayetano y Monte Hermoso. En términos técnicos, la normativa faculta a 58 municipios con hasta 30 mil habitantes a regular a través de los concejos deliberantes las condiciones y los requisitos para permitir la convivencia de menores y mayores en los locales bailables. Es una excepción en la ley 14.050 que prohíbe la presencia de chicos con menos de 18 años en esos lugares. Los ediles podrán entonces “regular, a través de sus concejos deliberantes, sobre otros límites etarios, conforme a su realidad socio-demográfica y cultural, estableciendo como límite de tal atribución legislativa, la prohibición de ingreso a los menores de 14 años a los locales e instalaciones bailables, cualquiera sea su denominación”. La iniciativa del senador Patricio García (Bloque Peronista) tuvo un fuerte respaldo de los intendentes de todos los colores políticos. El jefe comunal de General Alvear, Alejandro Celillo (Cambiemos), viajó hasta La Plata para apoyar la reforma. “Pronto enviaremos el proyecto de ordenanza para reglamentar el ingreso de menores”, anticipó ayer el alcalde. También recibió el aval de los intendentes de Laprida, Hipólito Yrigoyen, Daireaux, Carmen de Areco y Colón, entre otros municipios. Walter Torchio, de Carlos Casares explicó que “en el pueblo hay un solo boliche y sin esta modificación no existe la posibilidad de que los más chicos puedan empezar a salir, como ocurre en ciudades grandes del Conurbano o el resto de la Provincia”. En las localidades del interior la oferta nocturna es reducida. “Vemos cómo muchos jóvenes viajan de un lugar a otro para asistir a fiestas y resulta un peligro los traslados en plena madrugada”, fue uno de los argumentos . El senador García aclaró que, en realidad, la nueva legislación devuelve a los municipios la facultad de reglamentar esta actividad, que les fue quitada con la ley 14.050.",'index.html',false);
    var nuevo4 = new Articulo("Alfonso Prat Gay: Nos faltan 2 puntos para llegar a 10","El ministro de Hacienda, Alfonso Prat-Gay, eligió hoy utilizar la calificación de gestión como hizo el presidente Mauricio Macri, al destacar que al Gabinete le faltan dos puntos para llegar a 10. Nos faltan dos puntos para llegar a 10… Mejorar la gestión de cara del año que viene para madurar muchas de las decisiones que tomamos , expresó el funcionario. Prat-Gay formuló estas declaraciones durante una conferencia de prensa tras finalizar la primer parte del retiro espiritual que realizaba el Gabinete en el chalet de veraneo de Chapadmalal, ubicado en la ciudad de Mar del Plata. Asimismo, reiteró que la modificación del Impuesto a las Ganancias que auspicia el Ejecutivo significa la rebaja más alta de la historia y apuntó contra la oposición al asegurar que es gratis la demagogia de decir 'quiero bajar todo' cuando no se es gobierno. Tenemos que ser muy responsables en la situación fiscal en que estamos, porque cada peso, es un peso más para atender la situación social muy precaria que recibimos, enfatizó Prat Gay, al defender una vez más el proyecto oficial vinculado al impuesto a las ganancias. En una conferencia de prensa ofrecida en el marco del retiro espiritual que el presidente Mauricio Macri encabeza en Chapadmalal con sus funcionarios, el titular de Hacienda insistió: Lo que cobró de más Cristina Fernández de Kirchner (por ganancias) se lo devolvemos al contribuyente. Al ser consultado sobre el valor del dólar, Prat Gay fue contundente: Me río, con respeto, pero me río respecto del tipo de cambio. El funcionario recordó que hace una semana decían que un dólar a 15,30  está atrasado y ahora, en 15,80, parece que se disparó. En un régimen de flotación cambiaria eso es lo que se presume que ocurra, explicó el titular del Palacio de Hacienda y agregó que el tipo de cambio subió en línea con el resto de las monedas de la región. En este sentido, aseguró que la principal preocupación del Gobierno sigue siendo la inflación. El precio que nos preocupa es el precio de los alimentos, de la canasta básica. Después de una primera mitad del año con fuertes subas, la inflación se acomodó y estamos cerrando con un nivel de 1.5%, que es lo que prometíamos. Del contacto con la prensa también participaron la ministra de Seguridad de la Nación, Patricia Bullricha, y el titular del Ministerio del Interior, Rogelio Frigerio. En este marco, Frigerio estimó que el diálogo con los gobernadores peronistas va a continuar como hasta ahora, en una construcción de gobernabilidad de ida y vuelta",'index.html',true);
    var nuevo5 = new Articulo("Walter va a frontend","Lo decidio el mismisimo galperin, luego de ver su desempeño en la escuelita","index.html",false);
    var nuevo6 = new Articulo("Chapecoense","Gana la copa",'index.html',false);
    this.cantMax = 6;
    this.articulos = [nuevo1,nuevo2,nuevo3,nuevo4,nuevo5,nuevo6];

    // this.articulos.add(Articulo("San Lorenzo","Sigue descendiendo"));
    // this.articulos.add(Articulo("Boca","Invitado a libertadores"));
};

function cambiar(id){
    vista=document.getElementById(id).style.display;
    if (vista=='none')
        vista='block';
    else
        vista='none';

    document.getElementById(id).style.display = vista;
};

Articulo.prototype.render = function(objectId, noticia){
    return '<article><div><h3>' + this.titulo + '</h3></div><div>' +
        '<a href="#" onclick="cambiar(' + objectId + ')">' + "Ver Contenido" + '</a></div></article>' +
        '<div id=' + objectId + ' style="display: none;">' + noticia + '</div>';
};







