function nor(id,mod_num,a_name,a_alias,b_name,b_alias,x_off,y_off,x_scale,y_scale,isT1,isT2,isDirect){

			var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(x_scale*(x_off+235),y_scale*(y_off+30));
			ctx.lineTo(x_scale*(x_off+265),y_scale*(y_off+30));
			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+30));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+50)); // T formation

			ctx.moveTo(x_scale*(x_off+230),y_scale*(y_off+170)); // mos parellel block
			ctx.lineTo(x_scale*(x_off+270),y_scale*(y_off+170));
			ctx.lineTo(x_scale*(x_off+270),y_scale*(y_off+180));
			ctx.lineTo(x_scale*(x_off+290),y_scale*(y_off+180));
			ctx.lineTo(x_scale*(x_off+290),y_scale*(y_off+210));
			ctx.lineTo(x_scale*(x_off+270),y_scale*(y_off+210));
			ctx.lineTo(x_scale*(x_off+270),y_scale*(y_off+220));
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+220));
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+210));
			ctx.lineTo(x_scale*(x_off+210),y_scale*(y_off+210));
			ctx.lineTo(x_scale*(x_off+210),y_scale*(y_off+180));
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+180));
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+170));

			ctx.moveTo(x_scale*(x_off+240),y_scale*(y_off+240));
			ctx.moveTo(x_scale*(x_off+205),y_scale*(y_off+180)); // topper line for parellel block
			ctx.lineTo(x_scale*(x_off+205),y_scale*(y_off+210)); 

			ctx.moveTo(x_scale*(x_off+295),y_scale*(y_off+180)); // topper line for parellel block
			ctx.lineTo(x_scale*(x_off+295),y_scale*(y_off+210));

			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+120)); // mid axis line
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+170));

			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+50)); // serial block
			ctx.lineTo(x_scale*(x_off+235),y_scale*(y_off+50));
			ctx.lineTo(x_scale*(x_off+235),y_scale*(y_off+80));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+80));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+90));



			ctx.lineTo(x_scale*(x_off+235),y_scale*(y_off+90));
			ctx.lineTo(x_scale*(x_off+235),y_scale*(y_off+120));
			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+120));

			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+220));


			ctx.lineTo(x_scale*(x_off+250),y_scale*(y_off+240)); // the ground symbol
			ctx.moveTo(x_scale*(x_off+240),y_scale*(y_off+240));
			ctx.lineTo(x_scale*(x_off+260),y_scale*(y_off+240));
			ctx.moveTo(x_scale*(x_off+243),y_scale*(y_off+245));
			ctx.lineTo(x_scale*(x_off+257),y_scale*(y_off+245));
			ctx.moveTo(x_scale*(x_off+246),y_scale*(y_off+250));
			ctx.lineTo(x_scale*(x_off+254),y_scale*(y_off+250));

			ctx.moveTo(x_scale*(x_off+230),y_scale*(y_off+90)); // topper line for n-mos 1
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+120));

			ctx.moveTo(x_scale*(x_off+230),y_scale*(y_off+50)); // topper line for n-mos 2
			ctx.lineTo(x_scale*(x_off+230),y_scale*(y_off+80));


			
			ctx.moveTo(x_scale*(x_off+225),y_scale*(y_off+105)); // perpendicular line in serial 2
			ctx.lineTo(x_scale*(x_off+183),y_scale*(y_off+105));

			ctx.moveTo(x_scale*(x_off+225),y_scale*(y_off+65)); // perpendicular line in serial 1
			ctx.lineTo(x_scale*(x_off+210),y_scale*(y_off+65));
			
			ctx.moveTo(x_scale*(x_off+204),y_scale*(y_off+195)); // perpendicular line in parellel 1
			ctx.lineTo(x_scale*(x_off+182),y_scale*(y_off+195));

			ctx.moveTo(x_scale*(x_off+296),y_scale*(y_off+195)); // perpendicular line in parellel 2
			ctx.lineTo(x_scale*(x_off+310),y_scale*(y_off+195));

			ctx.moveTo(x_scale*(x_off+250),y_scale*(y_off+135)); // output line
			ctx.lineTo(x_scale*(x_off+400),y_scale*(y_off+135));

			ctx.moveTo(x_scale*(x_off+182),y_scale*(y_off+105)); // common input line
			ctx.lineTo(x_scale*(x_off+182),y_scale*(y_off+195));

			ctx.moveTo(x_scale*(x_off+182),y_scale*(y_off+135)); // common input line
			


			if (isT1 == 0) {
				ctx.lineTo(x_scale*(x_off+100),y_scale*(y_off+135));
			}
			else{
				ctx.lineTo(x_scale*(x_off+150),y_scale*(y_off+135));
			}

			if (isT2 == 0) {
				
				ctx.moveTo(x_scale*(x_off+210),y_scale*(y_off+65)); // perpendicular line in serial 1
				ctx.lineTo(x_scale*(x_off+210),y_scale*(y_off+40));
				ctx.lineTo(x_scale*(x_off+310),y_scale*(y_off+40));
				ctx.lineTo(x_scale*(x_off+310),y_scale*(y_off+260));
			}


			ctx.stroke();


			var circ1=canvas.getContext("2d");
			circ1.beginPath();
			circ1.arc(x_scale*(x_off+225),y_scale*(y_off+105),3,0,2*Math.PI);
			circ1.stroke();

			var circ2=canvas.getContext("2d");
			circ2.beginPath();
			circ2.arc(x_scale*(x_off+225),y_scale*(y_off+65),3,0,2*Math.PI);
			circ2.stroke();

			var text=canvas.getContext("2d");
			text.font="22px Verdana";
			text.fillText("NOR - MODULE "+mod_num,10,20);

			// text.font="12px Verdana";
			// text.fillText("Y (OUTPUT)",320,140);

			text.font="17px Verdana";
			text.fillText(a_alias+"  (INPUT)",10,230);

			text.fillText(b_alias,400,375);
			text.fillText(b_alias,155,115);
			
			
			text.font="16px Verdana";
			text.fillStyle="#FF0000"
			text.fillText("Legend",10,420);
			text.fillStyle="#000000"
			text.fillText(a_name+" = "+a_alias,10,455);
			text.fillText(b_name+" = "+b_alias,10,495);

			}
