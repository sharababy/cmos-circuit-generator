
function send(){
	var exp = $("#exp").val();

	exp = exp.replace(/&/g,"1"); // replace all 1s
    exp = exp.split('^').join("2"); // replace all 2s
    exp = exp.replace(/~/g,"3"); // replace all 3s

	$.get("/="+exp, function(data, status){
        //console.log("Data: " + data + "\nStatus: " + status);
        $("#list").empty();
        $("#wires").empty();
        drawCircuit(data);
    });

	return false
}

function isTerminal1(v){

	if (v.input1.input1 === null) {
		return 1;
	}
	else {
		return 0;
	}
}

function isTerminal2(v){

	if (v.input2.input2 === null) {
		return 1;
	}
	else {
		return 0;
	}
}

function isChildNext(k,logic){

	if ( k < (logic.length-1) ){
		if (logic[k+1].input1 === null){
			return 0;
		}
		else{
			return 1;
		}
	}
	else
		return 1;
}

function getJumpLength(k,logic){

	var i = k+1;
	var length = 0;


	while( i < (logic.length) ){



		if (logic[i].eval === 1) {
			if (logic[k].name === logic[i].input2.name) {
				length++;
				return length;
			}
			else{
				length++;
			}
		}

		i++;
	}
}


function drawCircuit(data){

	var logic = JSON.parse(data);

	var bunch = [];

	var depth = 25;

	console.log("Logic: ",logic);

	for (var i = 0; i < logic.length; i++) {
		
		var v = logic[i];

		if (v.eval == 1) {
			
			var $canvas = $("<canvas></canvas>", {"id": "mod"+v.count, "class": "mod"});
			$canvas.attr("height","500");
			$canvas.attr("width","500");
			
			$("#list").append($canvas);

			var isT1 = isTerminal1(v);

			var isT2 = isTerminal2(v);

			var isDirect = isChildNext(i,logic);

			

			var wireSet = {}



			if (isDirect == 0) {

				var jumpLength = getJumpLength(i,logic)

				wireSet.startDepth = depth;
				wireSet.jumpLength = jumpLength;
				depth = depth + 20;

				bunch.push(wireSet);
			}
			else if (isDirect == 1){
				wireSet.startDepth = null;				

				bunch.push(wireSet);
			}

			if (v.op === 1) {
				nand("mod"+v.count,v.count,v.input1.name,v.input2.alias,v.input2.name,v.input1.alias,-120,-10,2,2,isT1,isT2,isDirect);
			}
			else if (v.op === 2) {

				nor("mod"+v.count,v.count,v.input1.name,v.input2.alias,v.input2.name,v.input1.alias,-120,-10,2,2,isT1,isT2,isDirect);
			}
			else if (v.op === 3) {
				
				not("mod"+v.count,v.count,v.input1.name,v.input1.alias,v.input1.name,v.input1.alias,-120,-10,2,2,isDirect);
			}
			
		}
	}

	console.log("Bunch:",bunch);

	for (var i = 0; i < bunch.length; i++) {
			

			var $canvas = $("<canvas></canvas>", {"id": "wireSet"+i, "class": "mod"});
			$canvas.attr("height","500");
			$canvas.attr("width","500");
			
			$("#wires").append($canvas);

	}

	for (var i = 0; i < bunch.length; i++) {
			

			if (bunch[i].startDepth !== null) {

				startWire("wireSet"+i ,bunch[i].startDepth,-120,-10,2,2);

				console.log("Jump length of ",i+1,bunch[i].jumpLength);

				continueWire("wireSet",i,bunch[i].startDepth,bunch[i].jumpLength,-120,-10,2,2)

			}
	}
		
	


}


