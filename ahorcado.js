function inicio()
{

}

var Mascota = function(n,f,v)
{
	this.nombre = n;
	this.fuerza = f;
	this.voz = v;
}	

Mascota.prototype.hablar = function()
{
	alert(this.nombre + " dice: " + this.voz);
}

var perro = new Mascota("Dagoberto",100,"guua");
var gato = new Mascota("misifu",25,"miau");
perro.hablar();
gato.hablar();