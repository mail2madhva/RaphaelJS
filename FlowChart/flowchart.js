/*
 * @author: Madhu V Rao
 * Flowchart builder class - accepts a page with all kinds of shapes/images
 */
function FlowChart(paper, pages) {
	var self = this;
	self.createPage = function createPage(page_struct_array, page_num, visible) {

		for ( var i = 0; i < page_struct_array.length; i++) {
			var shape = page_struct_array[i];
			switch (shape.type) {

			case 'rect':
				drawRectangle(page_num, shape.x, shape.y, shape.width,
						shape.height, shape.text, shape.func);
				break;

			case 'image':
				drawImage(page_num, shape.img_path, shape.x, shape.y,
						shape.width, shape.height, shape.text, shape.func);
				break;
			}

		}
		if (!visible) {
			pages[page_num].hide();
		}

	};

	function drawRectangle(page_num, x, y, width, height, text, func) {
		var page_set;
		if (pages[page_num]) {
			page_set = pages[page_num];
		} else {
			pages[page_num] = paper.set();
			page_set = pages[page_num];
		}

		var rect = paper.rect(x, y, width, height);
		page_set.push(rect);
		page_set.push(rect.attr({
			stroke : '#008000',
			'stroke-width' : 1
		}));
		page_set.push(rect.glow({
			color : '#D2E9DD',
			offsety : -1
		}));
		
		//this logic handles placing the text message on the rectangle.
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
			my_text.node.onclick = func;
			page_set.push(my_text);
		}

		rect.node.onclick = func;

	}
	
	function drawImage(page_num, image_path, x , y, width, height, text, func) {
		var page_set;
		if (pages[page_num]) {
			page_set = pages[page_num];
		} else {
			pages[page_num] = paper.set();
			page_set = pages[page_num];
		}
		
		var img = paper.image(image_path, x, y, width, height);
//        .transform("t" + sourceX + "," + sourceY + "s" + scaleX +","+ scaleY + ",0,0"); 
		page_set.push(img);
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
			});
			my_text.node.onclick = func;
			page_set.push(my_text);
		}
		
		img.node.click = func;
		
	}

	//	var triangle = paper.path("M180,150,200, 180,180,200z");
	//	tri.push(triangle);
	//	tri.push(triangle.attr({
	//		fill : '#9cf',
	//		stroke : '#ddd',
	//		'stroke-width' : 1
	//	}));
	//	
	//	triangle.node.onclick = function () {
	//		if(visible) {
	//			pages.hide();
	//			visible =false
	//		} else {
	//			pages.show();
	//			visible = true;
	//		}
	//	}; 

}
