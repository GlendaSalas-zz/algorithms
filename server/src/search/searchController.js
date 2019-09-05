import { errorGenerate } from './../handlers/errorHandlers'
import { Node } from './../utils/dfs'
exports.binarySearch = async (req, res) => {
	try {
		const { list } = req.body
		const { target } = req.body
		if (!target || !list) return res.status(406).send(errorGenerate(406, 'Target and list are required.'))
		let first = 0
		let last = list.length - 1
		let midpoint
		while(first<=last){
			midpoint = parseInt((first+last)/2)
			if(list[midpoint]=== target) return res.status(200).send(errorGenerate(200, `${target} is in the list`))
			if(target < list[midpoint]){
				last = midpoint - 1
			} else {
				first = midpoint + 1
			}
		}
		return res.status(200).send(errorGenerate(200, `${target} is not in the list`))
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}
const binarySearchRecursive = async (list, target, start=0, end=0) =>{
	if (end === 0) end = list.length - 1
	if (start === end) return `${target} is not in the list`
	if (start > end) return `${target} is not in the list`
	let midpoint = parseInt((start + end)/2)
	if (target === list[midpoint]) return `${target} is in the list`
	if (target < list[midpoint]) return binarySearchRecursive(list, target, start, midpoint-1)
	return binarySearchRecursive(list, target, midpoint+1, end)	
}
exports.binarySearchR = async (req, res) => {
	try {
		const { list } = req.body
		const { target } = req.body
		if (!target || !list) return res.status(406).send(errorGenerate(406, 'Target and list are required.'))
		const answer = await  binarySearchRecursive(list, target)
		return res.status(200).send(errorGenerate(200, answer))
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}
exports.depthFirstSearch = async (req, res) => {
	try {
		const { N } = req.body	
		if (!N) return res.status(406).send(errorGenerate(406, 'The N value is required.'))
		const a = new Node('a')
		const b = new Node('b')
		const c = new Node('c')
		const d = new Node('d')
		const e = new Node('e')
		const f = new Node('f')
		a.children = [b, c, d]
		b.children = [e, f]
		const result = a.preorder('e')
		return res.status(200).send(Object.assign({ three: a },errorGenerate(200, `The ${N} value is ${result} in the three`)))
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}


