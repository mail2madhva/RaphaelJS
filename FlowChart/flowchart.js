window.onload = function() {
	var paper = new Raphael(document.getElementById('canvas_container'), 800,
			700);

	//This is a datastructure for page_structure defenitions
	var page_struct = {};
	//This hash stores all nodes of a page in a paper.set()
	var pages = {};
	var visible = true;

	page_struct["page1"] = [

	{
		type : 'image',
		img_path: 'workflow_box.png',
		x : 10,
		y : 50,
		width : 160,
		height : 80,
		text : [ "Search", "(Begin Here)" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 10,
		y : 150,
		width : 160,
		height : 80,
		text : [ "View Single", "Search Results" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 270,
		y : 100,
		width : 160,
		height : 80,
		text : [ "Browse Results", "Summary" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 500,
		y : 100,
		width : 160,
		height : 80,
		text : [ "Download" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	}
		

	];
	page_struct["page2"] = [

	{
		type : 'image',
		img_path: 'workflow_box.png',
		x : 250,
		y : 50,
		width : 200,
		height : 80,
		text : [ "Choose Search Type", "(Begin here)"],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 260,
		y : 200,
		width : 180,
		height : 80,
		text : [ "Pick a Trait from", "Search Terms" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 260,
		y : 290,
		width : 180,
		height : 80,
		text : [ "Choose from Pick", "list, Date, Value" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 260,
		y : 380,
		width : 180,
		height : 80,
		text : [ "Repeat Trait" , "Selections"],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 260,
		y : 530,
		width : 180,
		height : 80,
		text : [ "Submit"],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	
	}, {
		type : 'image',
		img_path: 'workflow_box.png',
		x : 530,
		y : 300,
		width : 180,
		height : 80,
		text : [ "Edit Search", "Expression" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'rect',
		x : 240,
		y : 170,
		width : 220,
		height : 330,
		text: ""
	}

	]

	createPage(page_struct["page1"], "page1", true);
	createPage(page_struct["page2"], "page2", false);

	function createPage(page_struct_array, page_num, visible) {

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

	}

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
//		page_set.push(rect.attr({
//			fill : '#D2E9DD'
//		}));
		page_set.push(rect.glow({
			color : '#D2E9DD',
			offsety : -1
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
		
		var img = paper.image("workflow_box.png", x, y, width, height);
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
