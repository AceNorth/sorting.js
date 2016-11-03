function bubbleSort(array) {
	let limiter = array.length;
	for (let x = 0; x < array.length; x++) {
		for (let i = 0; i < limiter; i++) {
			swap(array, i, i+1);
		}
		limiter--;
	}
	return array;
}

function compare(a,b) {
	return a > b;
}

function swap(array, index1, index2) {
	if (compare(array[index1] , array[index2])) {
		let temp = array[index2];
		array[index2] = array[index1];
		array[index1] = temp;
	}
}