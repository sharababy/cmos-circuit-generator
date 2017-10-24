var expect  = require('chai').expect;
var request = require('request');

var server = require('../server').server;

function closeServer(server){

	server.close()
}

describe('Logical Ops', () => {

	it('Should give Correct NAND Logic', function(done) {
	    request('http://localhost:3001/=a1b' , function(error, response, body) {
	        expect(body).to.equal(`[{"name":"(a)","alias":"F","value":true,"count":0,"eval":0,"input1":null,"input2":null},{"name":"(b)","alias":"G","value":false,"count":0,"eval":0,"input1":null,"input2":null},{"name":"((b) & (a))","alias":"H","value":true,"input1":{"name":"(b)","alias":"G","value":false,"count":0,"eval":0,"input1":null,"input2":null},"input2":{"name":"(a)","alias":"F","value":true,"count":0,"eval":0,"input1":null,"input2":null},"count":1,"eval":1,"op":1}]`);
	        done();
	    });
	});


	it('Should give Correct NOR Logic', function(done) {
	    request('http://localhost:3001/=a2b' , function(error, response, body) {
	        expect(body).to.equal(`[{"name":"(a)","alias":"F","value":true,"count":0,"eval":0,"input1":null,"input2":null},{"name":"(b)","alias":"G","value":false,"count":0,"eval":0,"input1":null,"input2":null},{"name":"((b) ^ (a))","alias":"H","value":false,"input1":{"name":"(b)","alias":"G","value":false,"count":0,"eval":0,"input1":null,"input2":null},"input2":{"name":"(a)","alias":"F","value":true,"count":0,"eval":0,"input1":null,"input2":null},"count":1,"op":2,"eval":1}]`);
	        done();

	    });

	});

	setTimeout(closeServer , 5000 , server)
});