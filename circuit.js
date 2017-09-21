var gate = require( __dirname + '/gate_diagram.js');


let alias_count = 70;



function create_module(name1 , name2 , op , value){

	var space = name2 === "" ? "" : " ";

	if (op == '~') {
		var new_mod = {
			name : "~" + name1,
			alias: String.fromCharCode(alias_count),
			value:value
		}
		alias_count++;
	}
	else{
		var new_mod = {
			name : "("+name1 + space + op + space + name2 + ")",
			alias: String.fromCharCode(alias_count),
			value:value
		}
		alias_count++;
	}
	return new_mod;
}


function contruct_circuit(postfix,bool_values){

	var c = [];
	let compute_stack = [];
	let bool_stack = [];
	let input_count = 0;
	let mod_count = 0;
	
	for (var counter = 0; counter < postfix.length; counter++) {
		
	
		if (postfix[counter] == '&') {

			var input1 = compute_stack.pop();
			var input2 = compute_stack.pop();
			var value1 = bool_stack.pop();
			var value2 = bool_stack.pop();

			mod_count++;

			//gate.nand(input1,input2,mod_count);

			var final_value = !(value2 && value1);

			var new_mod = create_module(input1.name,input2.name,"&",final_value)

			compute_stack.push(new_mod);

			new_mod.input1 = input1;
			new_mod.input2 = input2;
			new_mod.count = mod_count;
			new_mod.eval = 1;
			new_mod.op = 1;

			c.push(new_mod);

		}
		else if(postfix[counter] == '^'){
			
			
			var input1 = compute_stack.pop();
			var input2 = compute_stack.pop();
			var value1 = bool_stack.pop();
			var value2 = bool_stack.pop();

			mod_count++;
			//gate.nor(input1,input2,mod_count);

			var final_value = !(value2 || value1);

			var new_mod = create_module(input1.name,input2.name,"^",final_value)

			compute_stack.push(new_mod);

			new_mod.input1 = input1;
			new_mod.input2 = input2;
			new_mod.count = mod_count;
			new_mod.op = 2;
			new_mod.eval = 1;

			c.push(new_mod);

		}
		else if(postfix[counter] == '~'){
			
			
			var input1 = compute_stack.pop();
			mod_count++;
			//gate.not(input1,mod_count);
			var value1 = bool_stack.pop();

			var final_value = !(value2);

			var new_mod = create_module(input1.name,input1.name,"~","",final_value)

			compute_stack.push(new_mod);

			new_mod.input1 = input1;
			new_mod.input2 = input2;
			new_mod.count = mod_count;
			new_mod.op = 3;
			new_mod.eval = 1;

			c.push(new_mod);

		}
		else{
			
			var new_mod = create_module(postfix[counter],"","",bool_values[input_count])
			compute_stack.push(new_mod);
			bool_stack.push(bool_values[input_count]);
			input_count++;

			new_mod.count = 0;
			new_mod.eval = 0;

			c.push(new_mod);
			
		}
		
	}

	// while(compute_stack.length != 0){
	// 	let p = compute_stack.pop();
	// 	postfix = postfix + p;
	// }
	alias_count = 70;

	return c;

}

exports.create_module = create_module;
exports.contruct_circuit = contruct_circuit;
