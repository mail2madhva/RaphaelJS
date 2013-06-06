window.onload = function() {

	var paper = new Raphael(document.getElementById('canvas_container'), 800,
			700);

	// This is a datastructure for page_structure defenitions
	var page_struct = {};
	// This hash stores all nodes of a page in a paper.set()
	var pages = {};
	var visible = true;

	page_struct["page1"] = [ {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 10,
		y : 130,
		width : 160,
		height : 80,
		text : [ "Search", "(Begin Here)" ],
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
		text : [ "View Single", "Search Results" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
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
		text : [ "Browse Results", "Summary" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
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
		text : [ "Download" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	} ];

	// page 2
	page_struct["page2"] = [

	{
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 250,
		y : 50,
		width : 200,
		height : 80,
		text : [ "Choose Search Type", "(Begin here)" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
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
		text : [ "Pick a Trait from", "Search Terms" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 290,
		width : 180,
		height : 80,
		text : [ "Choose from Pick", "List, Date, Value" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 380,
		width : 180,
		height : 80,
		text : [ "Repeat Trait", "Selections" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}

	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 530,
		width : 180,
		height : 80,
		text : [ "Submit" ],
		func : function() {
			pages["page2"].hide();
			pages["page3"].show();
		}

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
		text : [ "Edit Search", "Expression" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'rect',
		x : 240,
		y : 180,
		width : 220,
		height : 300,
		text : ""
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

	// page 3
	page_struct["page3"] = [

	{
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 25,
		y : 250,
		width : 160,
		height : 80,
		text : [ "Redo", "Search" ],
		func : function() {
			pages["page3"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 190,
		y : 260,
		width : 80,
		height : 55,
		text : [ "" ],
	} ,{
		type : 'rect',
		x : 280,
		y : 170,
		width : 220,
		height : 250,
		text : ""
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 290,
		y : 190,
		width : 200,
		height : 100,
		text : [ "Browse 'Results", "Summary List'", "(Begin here)" ],
		func : function() {
			pages["page3"].hide();
			pages["page1"].show();
		}
	},{
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 290,
		y : 300,
		width : 200,
		height : 100,
		text : [ "View", "Results Location", "Map" ],
		func : function() {
			pages["page3"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 510,
		y : 260,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 590,
		y : 250,
		width : 160,
		height : 80,
		text : [ "Add to", "Download" ],
		func : function() {
			pages["page3"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/vertical_double_arrow.png',
		x : 365,
		y : 440,
		width : 55,
		height : 80,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 300,
		y : 540,
		width : 200,
		height : 80,
		text : [ "Click Single Result ", "Search" ],
		func : function() {
			pages["page3"].hide();
			pages["page1"].show();
		}
	}
	
	];

	// create a flow chart with pages.
	var flowChart = new FlowChart(paper, pages);
	flowChart.createPage(page_struct["page1"], "page1", false);
	flowChart.createPage(page_struct["page2"], "page2", false);
	flowChart.createPage(page_struct["page3"], "page3", true);

}
