window.onload = function() {

	var paper = new Raphael(document.getElementById('canvas_container'), 1000,
			700);

	// This is a datastructure for page_structure defenitions
	var page_struct = {};
	// This hash stores all nodes of a page in a paper.set()
	var pages = {};
	var visible = true;

	page_struct["page1"] = [ {
		type : 'text',
		text : 'Page 1',
		x : 300,
		y : 50,
		font : "Arial, Helvetica, sans-serif",
		size : 24,
		color : '#003300'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 10,
		y : 130,
		width : 160,
		height : 80,
		text : [ "First", " " ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	}, {
		type : 'text',
		text : '(Begin here)',
		x : 90,
		y : 180,
		font : "Arial, Helvetica, sans-serif",
		size : 14,
		color : '#000',
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/left_angled_double_arrow.png',
		x : 170,
		y : 150,
		width : 87,
		height : 75,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 10,
		y : 270,
		width : 160,
		height : 80,
		text : [ "Some Random", "Flow" ],
	}, {
		type : 'image',
		img_path : 'images/right_angled_double_arrow.png',
		x : 170,
		y : 250,
		width : 87,
		height : 75,
		text : [ "" ]
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 270,
		y : 200,
		width : 160,
		height : 80,
		text : [ "Some Random", "Flow" ],
	}, {
		type : 'image',
		img_path : 'images/right_arrow.png',
		x : 440,
		y : 210,
		width : 44,
		height : 54,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 500,
		y : 200,
		width : 160,
		height : 80,
		text : [ "OneMoreStep" ],
	} ];

	// page 2 - Search 
	page_struct["page2"] = [

	{
		type : 'text',
		text : 'Page 2',
		x : 350,
		y : 15,
		font : "Arial, Helvetica, sans-serif",
		size : 24,
		color : '#003300'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 250,
		y : 50,
		width : 200,
		height : 80,
		text : [ "Flow 2 ", "Type"],
	}, {
		type : 'text',
		text : '(Begin here)',
		x : 350,
		y : 110,
		font : "Arial, Helvetica, sans-serif",
		size : 14,
		color : '#000'
	},{
		type : 'image',
		img_path : 'images/down_arrow.png',
		x : 325,
		y : 130,
		width : 54,
		height : 44,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 200,
		width : 180,
		height : 80,
		text : [ "Flow 3", "Step 2" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 290,
		width : 180,
		height : 80,
		text : [ "Flow 4", "Step 3" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 380,
		width : 180,
		height : 80,
		text : [ "Flow 5", "Step 4" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 530,
		width : 180,
		height : 80,
		text : [ "Back" , "Go back to Start"],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'path',
		path : 'M 285 590 l 133 0',
		color : '#000',
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 470,
		y : 300,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 560,
		y : 290,
		width : 180,
		height : 80,
		text : [ "Flow 5", "type 4" ],
	}, {
		type : 'rect',
		x : 240,
		y : 180,
		width : 220,
		height : 300,
		text : "",
		borderColor : '#003300'
	}, {
		type : 'image',
		img_path : 'images/down_arrow.png',
		x : 325,
		y : 485,
		width : 54,
		height : 44,
		text : [ "" ],
	}

	];

	// create a flow chart with pages.
	var flowChart = new FlowChart(paper, pages);
	flowChart.createPage(page_struct["page1"], "page1", false);
	flowChart.createPage(page_struct["page2"], "page2", false);

	
	var container = document.getElementById("canvas_container");
	pages[container.getAttribute("page_num")].show(); 
	
}
