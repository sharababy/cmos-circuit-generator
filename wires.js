function startWire(id , depth,x_off,y_off,x_scale,y_scale){

	var canvas = document.getElementById(id);
	var ctx = canvas.getContext("2d");	

	ctx.beginPath();
	ctx.moveTo(x_scale*(x_off+350),y_scale*(y_off+0));
	ctx.lineTo(x_scale*(x_off+350),y_scale*(y_off+depth));
	ctx.lineTo(x_scale*(x_off+400),y_scale*(y_off+depth));


	ctx.stroke();

}


function continueWire(idPrefix, id, depth, jumpLength ,x_off, y_off, x_scale, y_scale){

	for (var i = id+1; i <= id+jumpLength-1 ; i++) {

		var canvas = document.getElementById(idPrefix+i);

		//console.log(idPrefix+i);

		var ctx = canvas.getContext("2d");	

		ctx.beginPath();
		ctx.moveTo(x_scale*(x_off+0),y_scale*(y_off+depth));
		ctx.lineTo(x_scale*(x_off+400),y_scale*(y_off+depth));

		ctx.stroke();

		

	}

	var finalElement = id+jumpLength;

	var canvas = document.getElementById(idPrefix+finalElement);

		//console.log("Final: ",idPrefix+finalElement);

		var ctx = canvas.getContext("2d");	

		ctx.beginPath();
		ctx.moveTo(x_scale*(x_off+0),y_scale*(y_off+depth));
		ctx.lineTo(x_scale*(x_off+315),y_scale*(y_off+depth));
		ctx.lineTo(x_scale*(x_off+315),y_scale*(y_off+0));

		ctx.stroke();
		

}