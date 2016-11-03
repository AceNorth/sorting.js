function split(wholeArray) {
  var halfway = Math.ceil(wholeArray.length/2);
  // console.log(halfway);

  var firstHalf = wholeArray.slice(0, halfway);
  var secondHalf = wholeArray.slice(halfway);

  return [firstHalf, secondHalf];
}

function merge(firstSortedArray, secondSortedArray){
	var mergedArray = []; //this is the array where we'll store our merged arrays

	//compare first elements of firstSorted Array with the first element of secondSorted Array, pick higher one, and push into a new array

var smaller;
	while (firstSortedArray.length && secondSortedArray.length){
		if(firstSortedArray[0]<secondSortedArray[0]){
			smaller = firstSortedArray.shift();
		} else smaller = secondSortedArray.shift();
		mergedArray.push(smaller);
	}
	var longer = firstSortedArray.length>0 ? firstSortedArray : secondSortedArray;
return mergedArray.concat(longer);

}

function mergeSort(array) {
	console.log(array);
	if (array.length === 2) {
		return merge(split(array));
	}
	return mergeSort(...split(array));
}

