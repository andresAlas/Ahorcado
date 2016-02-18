var palabra = "Tamarindo";
var hombre;

var Ahorcado = function(con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
	this.dibujar();
} 

Ahorcado.prototype.dibujar = function()
{
	var dibujo = this.contexto;

	dibujo.beginPath();
	dibujo.lineWidth = 5;
	dibujo.strokeStyle = "black";
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{
		// intentos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "blue";
        dibujo.lineWidth = 3;
        dibujo.stroke();
		dibujo.closePath();
	}

	if(this.intentos > 1)
	{
		// intentos = 2 --> torso
		dibujo.beginPath();
		dibujo.moveTo(150,180);
        dibujo.lineTo(150,250);
        dibujo.strokeStyle = "blue";
        dibujo.lineWidth = 3;
        dibujo.stroke();
		dibujo.closePath();
	}

	if(this.intentos > 2)
	{
		// intentos = 3 --> brazos
        dibujo.beginPath();
        dibujo.moveTo(120,220);
        dibujo.lineTo(150,180);
        dibujo.lineTo(180,220);
        dibujo.strokeStyle = "blue";
        dibujo.lineWidth = 3;
        dibujo.stroke();
        dibujo.closePath();
	}

	if(this.intentos > 3)
	{
		// intentos = 4 --> piernas
        dibujo.beginPath();
        dibujo.moveTo(120,290);
        dibujo.lineTo(150,250);
        dibujo.lineTo(180,290);
        dibujo.strokeStyle = "blue";
        dibujo.lineWidth = 3;
        dibujo.stroke();
        dibujo.closePath();
	}

	if(this.intentos > 4)
	{
		// intentos = 5 --> ojos muertos
        dibujo.beginPath();
        //Ojo izquierdo
        dibujo.moveTo(125,120);
        dibujo.lineTo(145,145);
        dibujo.moveTo(145,120);
        dibujo.lineTo(125,145);

        //Ojo derecho
        dibujo.moveTo(155,120);
        dibujo.lineTo(175,145);
        dibujo.moveTo(175,120);
        dibujo.lineTo(155,145);

        dibujo.strokeStyle = "red";
        dibujo.lineWidth = 3;
        dibujo.stroke();
        dibujo.closePath();
	}
}

Ahorcado.prototype.trazar = function()
{
	this.intentos++
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert("Estas muerto");
	}
	this.dibujar();
}

function inicio()
{
	var canvas = document.getElementById("c");
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();

}

