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