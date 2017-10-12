'use strict'

var stack = [];


function precidence(op){

	if (op == '~') {
		return 3;
	}
	else if (op == '&') {
		return 2;
	}
	else if (op == '^') {
		return 1;
	}
	else return 0;
}


function _to_postfix(infix_logic){

	var postfix = ""

	for (var counter = 0; counter < infix_logic.length; counter++) {
		
	
		if (infix_logic[counter] == '(') {
			
			
			stack.push(infix_logic[counter]);	
			//console.log(stack,postfix);
			debugger;
		}
		else if(infix_logic[counter] == ')'){
			

			var p = stack.pop();
			//console.log(stack,postfix);
			debugger;
			while(p != '('){
				
				postfix = postfix + p;
				
				p = stack.pop();
				//console.log(stack,postfix);
				debugger;
			}	
		}
		else if (infix_logic[counter] == '^' || infix_logic[counter] == '&' || infix_logic[counter] == '~') {

			if(stack.length != 0){
				if ( (precidence(stack[stack.length-1]) >=  precidence(infix_logic[counter]) ) && stack[stack.length-1] != "(" ) {
					//var p = stack.pop();
					//console.log(stack,postfix);
					debugger;
					while( precidence(stack[stack.length-1]) >=  precidence( infix_logic[counter] ) ){
							
						p = stack.pop();
						postfix = postfix + p;
						
						//console.log(stack,postfix);
						debugger;
					}
					
					
					stack.push(infix_logic[counter]);
					//console.log(stack,postfix);
					debugger;
				}
				else{
					
					
					stack.push(infix_logic[counter]);	
					//console.log(stack,postfix);
					debugger;
				}
			}
			else{
				

				stack.push(infix_logic[counter]);	
				//console.log(stack,postfix);
				debugger;
			}

		}
		else{
			

			postfix = postfix + infix_logic[counter];
			//console.log(stack,postfix);
			debugger;
			
		}
		
	}

	while(stack.length != 0){
		var p = stack.pop();
		debugger;
		postfix = postfix + p;
		//console.log(stack,postfix);
	}

	return postfix;
}


exports.precidence = precidence;
exports._to_postfix = _to_postfix;

