
function qS (list) {
	if (list.length < 2){
		return list
	} else {
		let pivot = list[0]
		let right = []
		let left = []
		list = list.slice(1)
		for(let i=0; i <= list.length; i++){
			if (list[i] <= pivot) left.push(list[i])
			if (list[i] > pivot) right.push(list[i])
		}
		return qS(left).concat(pivot, qS(right))
	}
}
export default qS