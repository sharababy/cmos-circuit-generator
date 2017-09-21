
var convert = require( __dirname + '/infix_to_postfix.js');
var circuit = require( __dirname + '/circuit.js');

console.log("========= CMOS Circuit Gen =========");

//  ~  ---> not
//  &  ---> nand
//  ^  ---> nor







//let infix = "(((~a)^(~b))^(c^(~d)))";

let bool_values = [true,false/*,true,false*/];

let infix = "~(a&b)";

console.log("\nInfix Input = ", infix,"\n")

var postfix_exp = convert._to_postfix(infix)

console.log("Postfix Output = ",postfix_exp,"\n");
console.log("bool_values = ",bool_values);



//console.log(convert.precidence("~"));

circuit.contruct_circuit(postfix_exp,bool_values);




//gate.not("A",1);
//gate.nand("A","B",1);
//gate.nor("A","B",1);

