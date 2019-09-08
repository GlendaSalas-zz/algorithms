function findSmallest(arr){
	let smallest = arr[0]
	let smallestIndex = 0
	for (let i=0; i< arr.length; i++){
		if(arr[i] < smallest){
			smallest = arr[i]
			smallestIndex = i
		}
	}
	return smallestIndex
}
function selectionSort(arr){
	let newArr = []
	while(arr.length > 0){
		let smallest = findSmallest(arr)
		newArr.push( (arr.splice(smallest, 1))[0])
	}
	return newArr
}

export default selectionSort