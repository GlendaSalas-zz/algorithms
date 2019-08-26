import { errorGenerate } from './../handlers/errorHandlers'
exports.insertionSort = async (req, res) => {
	try {
		const { list } = req.body
		if (!list) return res.status(406).send(errorGenerate(406, 'The list is required.'))
		const size = list.length - 1
		for (let slot=0; slot<=size; slot++){
			let value = list[slot]
			let testSlot = slot - 1
			while(testSlot > -1 && list[testSlot] > value){
				list[testSlot +  1] = list[testSlot]
				testSlot = testSlot - 1
			}
			list[testSlot+1] = value
		}
		return res.status(200).send(errorGenerate(200, `${JSON.stringify(list)} was sort.`))
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}
const merge = async (Arr, start, mid, end)=>{
	let temp = []
	let i = start
	let j = mid + 1
	let k = 0
	while(i<= mid && j<= end){
		if(Arr[i] <= Arr[j]){
			temp[k] = Arr[i]
			k += 1
			i += 1
		} else {
			temp[k] = Arr[j]
			k += 1
			j += 1
		}
	}
	while(i <= mid){
		temp[k] = Arr[i]
		k += 1
		i += 1
	}
	while (j<= end){
		temp[k] = Arr[j]
		k += 1
		j += 1
	}
	for (i= start; i<= end; i += 1){
		Arr[i] = temp [i-start]
	}
	return temp
}
const mergeSorting = async(list, start, end)=> {
	if(start < end ){
		let mid = parseInt((start + end) / 2)
		mergeSorting(list, start, mid)
		mergeSorting(list, mid+1, end)
		return merge(list, start, mid, end)
	} 
}
exports.mergeSort = async (req, res) => {
	try {
		const { list } = req.body
		if (!list) return res.status(406).send(errorGenerate(406, 'The list is required.'))
		const result = await mergeSorting(list, 0, list.length - 1)
		res.status(200).send(errorGenerate(200, `${JSON.stringify(result)} was sort.`))	
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}
