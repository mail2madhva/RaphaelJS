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
		text : 'Start Search',
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
		text : [ "Search", " " ],
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
		text : [ "View Single", "Search Results" ],
		func : function() {
			pages["page1"].hide();
			pages["page4"].show();
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
			pages["page3"].show();
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
			pages["page5"].show();
		}
	} ];

	// page 2 - Search 
	page_struct["page2"] = [

	{
		type : 'text',
		text : 'Search',
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
		text : [ "Choose Search ", "Type" , " "],
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
		text : [ "Pick a Trait from", "Search Terms" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 290,
		width : 180,
		height : 80,
		text : [ "Choose from Pick", "List, Date, Value" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 380,
		width : 180,
		height : 80,
		text : [ "Repeat Trait", "Selections" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 260,
		y : 530,
		width : 180,
		height : 80,
		text : [ "Submit" , "Go back to Start"],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'path',
		path : 'M 285 590 l 133 0',
		color : '#000',
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

	// page 3 - Search Results Summary 
	page_struct["page3"] = [ 
	 {
		type : 'text',
		text : 'Search Results Summary',
		x : 400,
		y : 100,
		font : "Arial, Helvetica, sans-serif",
		size : 24,
		color : '#003300'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 25,
		y : 250,
		width : 160,
		height : 80,
		text : [ "Redo", "Search" ],
		func : function() {
			pages["page3"].hide();
			pages["page2"].show();
		}
	}, {
		type : 'path',
		path : 'M 75 310 l 60 0',
		color : '#000',
		func : function() {
			pages["page2"].hide();
			pages["page3"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 190,
		y : 260,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'rect',
		x : 280,
		y : 170,
		width : 220,
		height : 250,
		text : "",
		borderColor : '#003300'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 290,
		y : 190,
		width : 200,
		height : 100,
		text : [ "Browse 'Results", "Summary List'", " " ]
	}, {
		type : 'text',
		text : '(Begin here)',
		x : 390,
		y : 260,
		font : "Arial, Helvetica, sans-serif",
		size : 14,
		color : '#000'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 290,
		y : 300,
		width : 200,
		height : 100,
		text : [ "View", "Results Location", "Map" ],
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
			pages["page5"].show();
		}
	},{
		type : 'path',
		path : 'M 630 310 l 82 0',
		color : '#000',
		func : function() {
			pages["page3"].hide();
			pages["page5"].show();
		}
	
	},
	{
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
			pages["page4"].show();
		}
	}, {
		type : 'path',
		path : 'M 370 580 l 110 0',
		color : '#000',
		func : function() {
			pages["page3"].hide();
			pages["page4"].show();
		}
	
	},{
		type : 'path',
		path : 'M 373 600 l 57 0',
		color : '#000',
		func : function() {
			pages["page3"].hide();
			pages["page4"].show();
		}
	
	}

	];

	// page 4 - single search Results
	page_struct["page4"] = [
 	{
		type : 'text',
		text : 'Single Search Results',
		x : 500,
		y : 50,
		font : "Arial, Helvetica, sans-serif",
		size : 24,
		color : '#003300'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 05,
		y : 150,
		width : 160,
		height : 100,
		text : [ "View", "Metadata", " " ]
	}, {
		type : 'text',
		text : '(Begin here)',
		x : 85,
		y : 220,
		font : "Arial, Helvetica, sans-serif",
		size : 14,
		color : '#003300'
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 170,
		y : 170,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'rect',
		x : 260,
		y : 120,
		width : 440,
		height : 520,
		text : "",
		borderColor : '#003300'
	},{
		type : 'text',
		text : 'Explore single record',
		x : 440,
		y : 137,
		font : "Arial, Helvetica, sans-serif bold",
		size : 18,
		color : '#003300'
	},{
		type : 'text',
		text : '(Begin here)',
		x : 575,
		y : 137,
		font : "Arial, Helvetica, sans-serif bold",
		size : 16,
		color : '#003300'
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 270,
		y : 150,
		width : 160,
		height : 100,
		text : [ "View", "Observation", "Diagram" ]
	}, {
		type : 'image',
		img_path : 'images/vertical_double_arrow.png',
		x : 325,
		y : 250,
		width : 55,
		height : 80,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 270,
		y : 330,
		width : 160,
		height : 100,
		text : [ "Explore", "Single", "Observations" ]

	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 440,
		y : 170,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 530,
		y : 150,
		width : 160,
		height : 100,
		text : [ "View", "Process", "Diagram" ]
	}, {
		type : 'image',
		img_path : 'images/vertical_double_arrow.png',
		x : 585,
		y : 250,
		width : 55,
		height : 80,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 530,
		y : 330,
		width : 160,
		height : 100,
		text : [ "View Single", "Method" ]
	}, {
		type : 'image',
		img_path : 'images/vertical_double_arrow.png',
		x : 585,
		y : 440,
		width : 55,
		height : 80,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 530,
		y : 530,
		width : 160,
		height : 100,
		text : [ "View Method", "Description" ]
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 710,
		y : 170,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 800,
		y : 150,
		width : 160,
		height : 100,
		text : [ "Add to", "Download" ],
		func : function() {
			pages["page4"].hide();
			pages["page5"].show();
		}
	}, {
		type : 'path',
		path : 'M 840 220 l 81 0',
		color : '#000',
		func : function() {
			pages["page4"].hide();
			pages["page5"].show();
		}
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 800,
		y : 530,
		width : 160,
		height : 100,
		text : [ "Go back", "to Start" ],
		func : function() {
			pages["page4"].hide();
			pages["page1"].show();
		}
	}, {
		type : 'path',
		path : 'M 870 600 l 42 0',
		color : '#000',
		func : function() {
			pages["page4"].hide();
			pages["page1"].show();
		}
	} ];
	// Download
	page_struct["page5"] = [
	 	{
		type : 'text',
		text : 'Download',
		x : 380,
		y : 50,
		font : "Arial, Helvetica, sans-serif",
		size : 24,
		color : '#003300'
	},{
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 25,
		y : 150,
		width : 160,
		height : 100,
		text : [ "Review", "Single Search", "Results" ],
		func : function() {
			pages["page5"].hide();
			pages["page4"].show();
		}
	}, {
		type : 'path',
		path : 'M 50 210 l 110 0',
		color : '#000',
		func : function() {
			pages["page5"].hide();
			pages["page4"].show();
		}
	}, {
		type : 'path',
		path : 'M 75 230 l 63 0',
		color : '#000',
		func : function() {
			pages["page5"].hide();
			pages["page4"].show();
		}

	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 190,
		y : 160,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 280,
		y : 150,
		width : 200,
		height : 100,
		text : [ "Review ", "List" ]
	}, {
		type : 'image',
		img_path : 'images/horizontal_double_arrow.png',
		x : 490,
		y : 160,
		width : 80,
		height : 55,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 590,
		y : 150,
		width : 160,
		height : 100,
		text : [ "Delete Records", "from List" ]
	}, {
		type : 'image',
		img_path : 'images/vertical_double_arrow.png',
		x : 355,
		y : 260,
		width : 55,
		height : 80,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 280,
		y : 350,
		width : 200,
		height : 100,
		text : [ "Accept", "Terms and ", "Conditions" ],
	}, {
		type : 'image',
		img_path : 'images/down_arrow.png',
		x : 355,
		y : 455,
		width : 54,
		height : 44,
		text : [ "" ],
	}, {
		type : 'image',
		img_path : 'images/workflow_box.png',
		x : 280,
		y : 505,
		width : 200,
		height : 100,
		text : [ "Download", "Selected Records" ],
	} ];

	// create a flow chart with pages.
	var flowChart = new FlowChart(paper, pages);
	flowChart.createPage(page_struct["page1"], "page1", false);
	flowChart.createPage(page_struct["page2"], "page2", false);
	flowChart.createPage(page_struct["page3"], "page3", false);
	flowChart.createPage(page_struct["page4"], "page4", false);
	flowChart.createPage(page_struct["page5"], "page5", false);
	//transform to different location , centring instead of changing all of the elements.
	pages["page1"].transform("t175, 50");
	pages["page1"].show();
	pages["page5"].transform("t115, 20");
	pages["page2"].transform("t115, 20");
	pages["page3"].transform("t115, 00");
}
