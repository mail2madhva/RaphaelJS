window.onload = function() {
	var paper = new Raphael(document.getElementById('canvas_container'), 800,
			500);

	
	var pages = paper.set();
	var visible = true;
	
	
	drawRectangle(paper,pages,"page1", 10, 100, 160, 80, [ "Search", "(Begin Here)" ]);
	drawRectangle(paper,pages, "page1", 10, 200, 160, 80, [ "View Single", "Search Results" ]);
	drawRectangle(paper, pages,"page1",270, 150, 160, 80, [ "Browse Results", "Summary" ]);
	drawRectangle(paper,pages, "page1",500, 150, 160, 80, [ "Download" ]);
	

	
	function drawRectangle(paper,pages, page_num, x, y, width, height, text) {
		var rect = paper.rect(x, y, width, height);

		pages.push(rect.attr({
			fill : '#D2E9DD'
		}));
		pages.push(rect.glow({
		    color: '#444',
		    offsety: -1
		}));
		var text_x = x + width / 2;
		var text_y = y + height / 2;
		for ( var i = 1; i <= text.length; i++) {
			var font_size = 20 - i;
			var m_text_y = text_y;
			if (text.length >= 2) {
				m_text_y = text_y + (-10 + (20 * (i - 1)));
			}
			var my_text = paper.text(text_x, m_text_y, text[i - 1]).attr({
				fill : '#000',
				"font-size" : font_size,
				"font-family" : "Arial, Helvetica, sans-serif",
				stroke : '#fff',
				'stroke-width' : 0.5
			});
			pages.push(my_text);
		}
		

		rect.node.onclick = function () { rect.attr("fill", "red");}; 
	
	}
	
	var triangle = paper.path("M180,150,200, 180,180,200z");
	triangle.attr({
		fill : '#9cf',
		stroke : '#ddd',
		'stroke-width' : 1
	});
	
	triangle.node.onclick = function () {
		if(visible) {
			pages.hide();
			visible =false
		} else {
			pages.show();
			visible = true;
		}
	}; 
	



	
	function drawShape(shapeMap, text) {
		
		
		
	}

}
