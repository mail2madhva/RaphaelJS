window.onload = function() {
	var paper = new Raphael(document.getElementById('canvas_container'), 500,
			500);
	var tetronimo = paper.rect(200, 200, 160, 80);

	tetronimo.attr({
		fill : '#9cf',
		stroke : '#ddd',
		'stroke-width' : 5,
		'stroke-linejoin' : 'round'
	});

	var my_text = paper.text(280, 240, 'my text goes here').attr({
		fill : '#fff'
	});

}
