window.onload = function() {
	var paper = new Raphael(document.getElementById('canvas_container'), 800,
			500);

	drawRectangle(paper, 10, 100, 160, 80, [ "Search", "(Begin Here)" ]);
	drawRectangle(paper, 10, 200, 160, 80, [ "View Single", "Search Results" ]);
	drawRectangle(paper, 250, 150, 160, 80, [ "Browse Results", "Sumamry" ]);
	drawRectangle(paper, 500, 150, 160, 80, [ "Download" ]);

	function drawRectangle(paper, x, y, width, height, text) {
		var tetronimo = paper.rect(x, y, width, height);

		tetronimo.attr({
			fill : '#9cf',
			stroke : '#ddd',
			'stroke-width' : 5,
			'stroke-linejoin' : 'round'
		});

		var text_x = x + width / 2;
		var text_y = y + height / 2;
		for ( var i = 1; i <= text.length; i++) {
			var font_size = 17 - i;
			var m_text_y = text_y;
			if (text.length >= 2) {
				m_text_y = text_y + (-20 + (20 * (i - 1)));
			}
			var my_text = paper.text(text_x, m_text_y, text[i - 1]).attr({
				fill : '#fff',
				"font-size" : font_size,
				"font-family" : "Arial, Helvetica, sans-serif"
			});
		}

	}

}
