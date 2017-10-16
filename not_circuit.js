function not(id,mod_num,a_name,a_alias,b_name,b_alias,x_off,y_off,x_scale,y_scale){

			var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(x_scale*(x_off+235),y_scale*(y_off+30));
			ctx.lineTo(x_scale*(x_off+265),y_scale*(y_off+30));
			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+30));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+80)); // T formation

			
			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+110)); // Pmos
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+110));
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+80));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+80));
			

			ctx.moveTo(x_scale*(x_off+225),y_scale*(y_off+80)); // topper line for parellel block
			ctx.lineTo(x_scale*(x_off+225),y_scale*(y_off+110)); 

			
			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+110)); // mid axis line
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+150));

			ctx.lineTo(x_scale*(x_off+235),y_scale*(y_off+150));
			ctx.lineTo(x_scale*(x_off+235),y_scale*(y_off+180));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+180));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+190));


			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+240)); // the ground symbol
			ctx.moveTo(x_scale*(x_off+240),y_scale*(y_off+240));
			ctx.lineTo(x_scale*(x_off+260),y_scale*(y_off+240));
			ctx.moveTo(x_scale*(x_off+243),y_scale*(y_off+245));
			ctx.lineTo(x_scale*(x_off+257),y_scale*(y_off+245));
			ctx.moveTo(x_scale*(x_off+246),y_scale*(y_off+250));
			ctx.lineTo(x_scale*(x_off+254),y_scale*(y_off+250));

			ctx.moveTo(x_scale*(x_off+230),y_scale*(y_off+150)); // topper line for n-mos 1
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+180));


			ctx.moveTo(x_scale*(x_off+230),y_scale*(y_off+165)); // perpendicular line in nmos 1
			ctx.lineTo(x_scale*(x_off+182),y_scale*(y_off+165));

			
			ctx.moveTo(x_scale*(x_off+217),y_scale*(y_off+95)); // perpendicular line in pmos 1
			ctx.lineTo(x_scale*(x_off+182),y_scale*(y_off+95));

			
			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+135)); // output line
			ctx.lineTo(x_scale*(x_off+400),y_scale*(y_off+135));


			ctx.moveTo(x_scale*(x_off+182),y_scale*(y_off+95)); // common input line
			ctx.lineTo(x_scale*(x_off+182),y_scale*(y_off+165));

			ctx.moveTo(x_scale*(x_off+182),y_scale*(y_off+135)); // common input line
			ctx.lineTo(x_scale*(x_off+100),y_scale*(y_off+135));

			ctx.stroke();


			var circ1=canvas.getContext("2d");
			circ1.beginPath();
			circ1.arc(202,170,3,0,2*Math.PI);
			circ1.stroke();


			var text=canvas.getContext("2d");
			text.font="22px Verdana";
			text.fillText("NOT - MODULE "+mod_num,10,20);
			
			text.font="17px Verdana";
			text.fillText(a_alias+"  (INPUT)",10,230);
			

			text.font="16px Verdana";
			text.fillStyle="#FF0000"
			text.fillText("Legend",10,420);
			text.fillStyle="#000000"
			text.fillText(a_name+" = "+a_alias,10,455);
}
/*
a&b^c&(~d)	
(((a&b)^d)&(e^(~f)))^((g^(~h))&(i&(j^k)))
*/

