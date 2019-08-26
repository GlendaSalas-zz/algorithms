import { errorGenerate } from './../handlers/errorHandlers'
exports.sortedMerge = async (req, res) => {
	try {
		const { A, B } = req.body
		if (!A) return res.status(406).send(errorGenerate(406, 'The list A is required.'))
		if (!B) return res.status(406).send(errorGenerate(406, 'The list B is required.'))
		let sizeA = A.length - 1
		let i = A.filter(v=> v!=='undefined').length - 1
		let j = B.filter(v=> v!==undefined).length - 1
		while(j >= 0){
			if(i>= 0 && A[i]> B[j]){
				A[sizeA] = B[i]
				-- i
			} else {
				A[sizeA] = B[j]
				-- j
			}
			-- sizeA
		}
		res.status(200).send(Object.assign({
			Task: 'You are given two sorted array, a and b, where a has a large enought buffer at the end to hold b, write a method to merge B into a in sorted order '
		}, errorGenerate(200, `${JSON.stringify(A)} was sort and merged.`))	)
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}