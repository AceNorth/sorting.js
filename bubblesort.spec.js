describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles single items', function(){
  	expect(bubbleSort([7])).toEqual([7]);
  });

  it('handles multiple items', function(){
  	expect(bubbleSort([5,1,2,4,3])).toEqual([1,2,3,4,5]);
  })

});

xdescribe('A new spy', function() {
	var foo, count = null;
	beforeEach(function() {
		foo = {
			setBar: compare
		}
		spyOn(foo, "setBar")
	})
	it('counts stuff', function(){
		console.log(foo.setBar.calls.count());
	})
	
})
