const 
	r = require('../'),
	expect = require('chai').expect;

describe('RemoveTabs', function(){
	it('should have not tabs.', function(){
		var tests = [
r`			remove
			tabs`,
			
r`			remove
				tabs
					tabs`,
			r`
			remove
			tabs`
		];
		
		var expected = [
			'remove\ntabs',
			'remove\n\ttabs\n\t\ttabs',
			'remove\ntabs'
		];
		
		for(var i = 0 ; i < tests.length ; i++) {
			expect(tests[i]).to.equal(expected[i]);
		}
	})
})