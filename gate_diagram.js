function _nand_(a,b,mod_count){

	console.log(" Module ",mod_count," : NAND of ",a.name," and ",b.name);
	console.log("=============================================\n");

	console.log("\tConnect 2 P-MOS in parellel , and give them V(dd) as input on one end.");
	console.log("\tConnect 2 N-MOS in series , and give them Ground as input on one end.");

	console.log("\tThe N-MOS circuit and P-MOS circuit are connected in series\n");

	console.log("\tInput ",a.name," is given to 1 P-MOS and 1 N-MOS");
	console.log("\tInput ",b.name," is given to 1 P-MOS and 1 N-MOS\n");

	console.log("\tThe Output is taken from the wire connecting the 2 Circuits\n")

	console.log("NAND CIRCUIT : ",a.name," and ",b.name," as Inputs")
	console.log("--------------------------------------------------");
	console.log("\n\n\tWhere ",a.alias," = ",a.name);
	console.log("\n\tWhere ",b.alias," = ",b.name);

	console.log();
	console.log("                          V(dd)");
	console.log("                           |");
	console.log("                           |");
	console.log("                           |");
	console.log("                  .________________.");
	console.log(a.alias , " -------,       |                |");
	console.log("          |-----o||",a.value,b.alias,"------o||",b.value);
	console.log("          |       |________________|");
	console.log("          |               |");
	console.log("          |               |");
	console.log("          |               |");
	console.log("          |               |---------------- Y (output) ",!(a.value && b.value));
	console.log("          |               |");
	console.log("          |               |");
	console.log("          |---------------||--.",a.value);
	console.log("                              |  ");
	console.log("   ",b.alias,"--------------------||--'",b.value);
	console.log("                           |");
	console.log("                           |");
	console.log("                           |");
	console.log("                          ---");
	console.log("                          ```");
	console.log("                          GND");


	console.log("\nNet List: ");
	console.log("S.no  | Transistor | { GATE  \t, SOURCE \t , DRAIN }")
	console.log("1.        P-MOS      {",a.name,"\t, V(dd) \t ,   Y(output) }")
	console.log("2.        P-MOS      {",b.name,"\t, V(dd) \t ,   Y(output) }")
	console.log("3.        N-MOS      {",a.name,"\t, N-MOS 1 (DRAIN),   Y(output) }")
	console.log("4.        N-MOS      {",b.name,"\t, GND   \t ,   N-MOS 2 (SOURCE) }")
	console.log("\n")
}


function _nor_(a,b,mod_count){

	console.log(" Module ",mod_count," : NOR of ",a.name," and ",b.name);
	console.log("=============================================\n");

	console.log("\tConnect 2 P-MOS in series , and give them V(dd) as input on one end.");
	console.log("\tConnect 2 N-MOS in parellel , and give them Ground as input on one end.");

	console.log("\tThe N-MOS circuit and P-MOS circuit are connected in series\n");

	

	console.log("\tInput ",a.name," is given to 1 P-MOS and 1 N-MOS");
	console.log("\tInput ",b.name," is given to 1 P-MOS and 1 N-MOS\n");

	console.log("\tThe Output is taken from the wire connecting the 2 Circuits\n")


	console.log("NOR CIRCUIT : ",a.name," and ",b.name," as Inputs")
	console.log("--------------------------------------------------")
	console.log("\n\n\tWhere ",a.alias," = ",a.name);
	console.log("\n\tWhere ",b.alias," = ",b.name);

	console.log();
	
	
	
	console.log("                          GND");
	console.log("                          ```");
	console.log("                          ---");
	console.log("                           |");
	console.log("                           |");
	console.log("                           |");
	console.log("                  .________________.");
	console.log(a.alias , " -------,       |                |");
	console.log("          |------||",a.value,"     ",b.alias,"-------||",b.value,);
	console.log("          |       |________________|");
	console.log("          |               |");
	console.log("          |               |");
	console.log("          |               |");
	console.log("          |               |---------------- Y (output) ",!(a.value || b.value));
	console.log("          |               |");
	console.log("          |               |");
	console.log("          |--------------o||--.",a.value,);
	console.log("                              |  ");
	console.log("   ",b.alias,"-------------------o||--'",b.value,);
	console.log("                           |");
	console.log("                           |");
	console.log("                           |");
	console.log("                          V(dd)");
	

	console.log("\nNet List: ");
	console.log("S.no  | Transistor | { GATE  \t, SOURCE \t,  DRAIN }")
	console.log("1.        P-MOS      {",a.name,"\t, V(dd) \t,  P-MOS 2 (SOURCE) }")
	console.log("2.        P-MOS      {",b.name,"\t, P-MOS 1 (DRAIN), Y(output) }")
	console.log("3.        N-MOS      {",a.name,"\t, GND \t\t,  Y(output) }")
	console.log("4.        N-MOS      {",b.name,"\t, GND \t\t,  Y(output) }")
	console.log("\n")
}


function _not_(a,mod_count){

	console.log("\n\n Module ",mod_count," : NOT of ",a.name);
	console.log("==========================================\n");

	console.log("\tConnect a P-MOS in series with an N-MOS.");
	console.log("\tGive them V(dd) as input on one end. and give them Ground as output on the other end.");

	console.log("\tThe N-MOS circuit and P-MOS circuit are given",a.alias,"as input\n");

	console.log("\tThe Output is taken from the wire connecting the N-MOS and the P-MOS\n")

	console.log("NOT CIRCUIT : ",a.name," as Input")
	console.log("-------------------------------------------")
	console.log("\n\n\tWhere ",a.alias," = ",a.name);

	console.log();
	
	
	console.log();
	console.log("                 V(dd)");
	console.log("                  |");
	console.log("                  |");
	console.log("                  |");
	console.log("                  /");
	console.log(a.alias , " ------------o||",a.value);
	console.log("                  \\");
	console.log("                  |");
	console.log("                  |---------------- Y (output) ",!a.value);
	console.log("                  |");
	console.log("                  |");
	console.log("                  /");
	console.log(a.alias , " -------------||",a.value);
	console.log("                  \\");
	console.log("                  |");
	console.log("                  |");
	console.log("                  |");
	console.log("                 ---");
	console.log("                 ```");
	console.log("                 GND");
	

	console.log("\nNet List: ");
	console.log("S.no  | Transistor | { GATE  \t, SOURCE \t,  DRAIN }")
	console.log("1.        P-MOS      {",a.name,"\t, V(dd) \t,  Y(output) }")
	console.log("2.        N-MOS      {",a.name,"\t, GND \t\t,  Y(output) }")
	
	console.log("\n")

	
}


exports.not = _not_;
exports.nand = _nand_;
exports.nor = _nor_;