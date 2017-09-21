function nor(id,mod_num,a_name,a_alias,b_name,b_alias){

			var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(235,30);
			ctx.lineTo(265,30);
			ctx.moveTo(250,30);
			ctx.lineTo(250,70); // T formation

			ctx.moveTo(230,70); // mos parellel block
			ctx.lineTo(270,70);
			ctx.lineTo(270,80);
			ctx.lineTo(290,80);
			ctx.lineTo(290,110);
			ctx.lineTo(270,110);
			ctx.lineTo(270,120);
			ctx.lineTo(230,120);
			ctx.lineTo(230,110);
			ctx.lineTo(210,110);
			ctx.lineTo(210,80);
			ctx.lineTo(230,80);
			ctx.lineTo(230,70);

			ctx.moveTo(205,80); // topper line for parellel block
			ctx.lineTo(205,110); 

			ctx.moveTo(295,80); // topper line for parellel block
			ctx.lineTo(295,110);

			ctx.moveTo(250,120); // mid axis line
			ctx.lineTo(250,150);

			ctx.lineTo(235,150);
			ctx.lineTo(235,180);
			ctx.lineTo(250,180);
			ctx.lineTo(250,190);

			ctx.lineTo(235,190);
			ctx.lineTo(235,220);
			ctx.lineTo(250,220);

			ctx.lineTo(250,240); // the ground symbol
			ctx.moveTo(240,240);
			ctx.lineTo(260,240);
			ctx.moveTo(243,245);
			ctx.lineTo(257,245);
			ctx.moveTo(246,250);
			ctx.lineTo(254,250);

			ctx.moveTo(230,150); // topper line for n-mos 1
			ctx.lineTo(230,180);

			ctx.moveTo(230,190); // topper line for n-mos 2
			ctx.lineTo(230,220);

			ctx.moveTo(230,165); // perpendicular line in nmos 1
			ctx.lineTo(215,165);

			ctx.moveTo(230,205); // perpendicular line in nmos 2
			ctx.lineTo(215,205);

			ctx.moveTo(197,95); // perpendicular line in pmos 1
			ctx.lineTo(182,95);

			ctx.moveTo(303,95); // perpendicular line in pmos 2
			ctx.lineTo(318,95);

			ctx.moveTo(250,135); // output line
			ctx.lineTo(300,135);


			ctx.stroke();


			var circ1=canvas.getContext("2d");
			circ1.beginPath();
			circ1.arc(200,95,3,0,2*Math.PI);
			circ1.stroke();

			var circ2=canvas.getContext("2d");
			circ2.beginPath();
			circ2.arc(300,95,3,0,2*Math.PI);
			circ2.stroke();

			var text=canvas.getContext("2d");
			text.font="16px Verdana";
			text.fillText("NOR MODULE "+mod_num+" = "+a_name+"^"+b_name,10,20);

			text.font="12px Verdana";
			text.fillText("Y (OUTPUT)",320,140);

			text.font="12px Verdana";
			text.fillText(a_alias+"  (INPUT)",110,100);
			text.fillText(a_alias+"  (INPUT)",145,170);
			text.fillText(b_alias+"  (INPUT)",145,210);
			text.fillText(b_alias+"  (INPUT)",320,100);

			text.fillStyle="#FF0000"
			text.fillText("Legend",50,260);
			text.fillStyle="#000000"
			text.fillText(a_name+" = "+a_alias,50,275);
			text.fillText(b_name+" = "+b_alias,50,290);


			}
