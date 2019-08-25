function binarySearchRecursive(list, target, start=0, end = 0){
	if (end === 0) end = list.length - 1
	if (start === end) return `${target} is not in the list`
	if (start > end) return `${target} is not in the list`
	let midpoint = parseInt((start + end)/2)
	if (target === list[midpoint]) return `${target} is in the list`
	if (target < list[midpoint]) return binarySearchRecursive(list, target, start, midpoint-1)
	return binarySearchRecursive(list, target, midpoint+1, end)
}
const myList = [12, 34, 67, 90, 100, 112, 156, 178]
const binaryResult = binarySearchRecursive(myList, 155)
console.log(binaryResult)