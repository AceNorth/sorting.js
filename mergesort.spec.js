describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,5,3,4,1,6])).toEqual([[2,5,3],[4,1,6]]);
  });

  it('is able to split an array with an odd number of elements into two halves', function() {
    expect(split([7,2,5,3,4,1,6])).toEqual([[7,2,5,3],[4,1,6]]);
  });

});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2,3,5,7],[1,4,6])).toEqual([1,2,3,4,5,6,7]);
  });
});

describe('Merge Sort', function(){
  it('is able to sort an array', function(){
    expect(mergeSort([2,3,5,7,1,4,6])).toEqual([1,2,3,4,5,6,7]);
  });
  it('is able to sort another array', function(){
    expect(mergeSort([7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7]);
  });
  it('is able to sort an array with duplicates', function(){
    expect(mergeSort([2,3,5,7,1,6,6,4])).toEqual([1,2,3,4,5,6,6,7]);
  });
});