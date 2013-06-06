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
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
		x : 500,
		y : 100,
		width : 160,
		height : 80,
		text : [ "Download" ],
		func : function() {
			pages["page1"].hide();
			pages["page2"].show();
		}
	} ];
	page_struct["page2"] = [

	{
		type : 'image',
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
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
		img_path : 'workflow_box.png',
		x : 260,
		y : 530,
		width : 180,
		height : 80,
		text : [ "Submit" ],
		func : function() {
			pages["page2"].hide();
			pages["page1"].show();
		}

	}, {
		type : 'image',
		img_path : 'workflow_box.png',
		x : 530,
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
		y : 170,
		width : 220,
		height : 330,
		text : ""
	}

	];

	// create a flow chart with pages.
	var flowChart = new FlowChart(paper, pages);
	flowChart.createPage(page_struct["page1"], "page1", true);
	flowChart.createPage(page_struct["page2"], "page2", false);
}
