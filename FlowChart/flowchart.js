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
				drawRectangle(page_num, shape);
				break;

			case 'image':
				drawImage(page_num, shape.img_path, shape.x, shape.y,
						shape.width, shape.height, shape.text, shape.func);
				break;

			case 'text':
				drawText(page_num, shape);
				break;
				
			case 'path':
				drawPath(page_num, shape);
				break;
			}

		}
		if (!visible) {
			pages[page_num].hide();
		}

	};

	function drawRectangle(page_num, rectObj) {
		var page_set;
		if (pages[page_num]) {
			page_set = pages[page_num];
		} else {
			pages[page_num] = paper.set();
			page_set = pages[page_num];
		}

		var rect = paper.rect(rectObj.x, rectObj.y, rectObj.width,
				rectObj.height);
		page_set.push(rect);
		page_set.push(rect.attr({
			stroke : rectObj.borderColor,
			'stroke-width' : 1,
			'cursor': 'pointer'
		}));

		rect.node.onclick = rectObj.func;

	}

	function drawImage(page_num, image_path, x, y, width, height, text, func) {
		var page_set;
		if (pages[page_num]) {
			page_set = pages[page_num];
		} else {
			pages[page_num] = paper.set();
			page_set = pages[page_num];
		}

		var img = paper.image(image_path, x, y, width, height).attr({'cursor': 'pointer'});
		//        .transform("t" + sourceX + "," + sourceY + "s" + scaleX +","+ scaleY + ",0,0"); 
		page_set.push(img);
		var text_x = x + width / 2;
		var text_y = y + height / 2;
		for ( var i = 1; i <= text.length; i++) {
			var m_text_y = text_y;
			if (text.length >= 2) {
				var offset = -10;
				if (text.length == 3) {
					offset = -20;
				}
				m_text_y = text_y + (offset + (20 * (i - 1)));
			}
			var my_text = paper.text(text_x, m_text_y, text[i - 1]).attr({
				fill : '#000',
				"font-size" : 18,
				"font-family" : "Arial, Helvetica, sans-serif",
				'cursor': 'pointer'
			});
			my_text.node.onclick = func;
			page_set.push(my_text);
		}
		img.node.onclick = func;
	}

	function drawText(page_num, textObj) {
		var page_set;
		if (pages[page_num]) {
			page_set = pages[page_num];
		} else {
			pages[page_num] = paper.set();
			page_set = pages[page_num];
		}
		var text_obj = paper.text(textObj.x, textObj.y, textObj.text).attr({
			fill : textObj.color,
			"font-size" : textObj.size,
			"font-family" : textObj.font,
			'cursor': 'pointer'
		//"Arial, Helvetica, sans-serif",
		});
		
		text_obj.node.onclick = textObj.func;

		page_set.push(text_obj);

	}
	
	function drawPath(page_num, pathObj) {
		var page_set;
		if (pages[page_num]) {
			page_set = pages[page_num];
		} else {
			pages[page_num] = paper.set();
			page_set = pages[page_num];
		}
		
		var path = paper.path(pathObj.path);
		page_set.push(path.attr({
			stroke : pathObj.color,
			'stroke-width' : 1,
			'cursor': 'pointer'
		}));
	}
}
