function not(id,mod_num,a_name,a_alias,b_name,b_alias){

			var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(235,30);
			ctx.lineTo(265,30);
			ctx.moveTo(250,30);
			ctx.lineTo(250,80); // T formation

			
			ctx.moveTo(250,110); // Pmos
			ctx.lineTo(230,110);
			ctx.lineTo(230,80);
			ctx.lineTo(250,80);
			

			ctx.moveTo(225,80); // topper line for parellel block
			ctx.lineTo(225,110); 

			
			ctx.moveTo(250,110); // mid axis line
			ctx.lineTo(250,150);

			ctx.lineTo(235,150);
			ctx.lineTo(235,180);
			ctx.lineTo(250,180);
			ctx.lineTo(250,190);


			ctx.lineTo(250,240); // the ground symbol
			ctx.moveTo(240,240);
			ctx.lineTo(260,240);
			ctx.moveTo(243,245);
			ctx.lineTo(257,245);
			ctx.moveTo(246,250);
			ctx.lineTo(254,250);

			ctx.moveTo(230,150); // topper line for n-mos 1
			ctx.lineTo(230,180);


			ctx.moveTo(230,165); // perpendicular line in nmos 1
			ctx.lineTo(215,165);

			
			ctx.moveTo(217,95); // perpendicular line in pmos 1
			ctx.lineTo(202,95);

			
			ctx.moveTo(250,135); // output line
			ctx.lineTo(300,135);


			ctx.stroke();


			var circ1=canvas.getContext("2d");
			circ1.beginPath();
			circ1.arc(220,95,3,0,2*Math.PI);
			circ1.stroke();

			
			var text=canvas.getContext("2d");
			text.font="16px Verdana";
			text.fillText("NOT MODULE "+mod_num+" = "+"~"+a_name,10,20);

			text.font="12px Verdana";
			text.fillText("Y (OUTPUT)",320,140);

			text.font="12px Verdana";
			text.fillText(a_alias+"  (INPUT)",130,100);
			text.fillText(a_alias+"  (INPUT)",145,170);
			
			text.fillStyle="#FF0000"
			text.fillText("Legend",50,260);
			text.fillStyle="#000000"
			text.fillText(a_name+" = "+a_alias,50,275);
			

}
