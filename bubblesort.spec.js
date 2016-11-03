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

  it('calls the compare function the correct number of times', function() {
  	spyOn(window, "compare").andCallThrough;
  	bubbleSort([2,9,6,8]);
  	expect(compare.calls.count()).toEqual(10);
  })

});
