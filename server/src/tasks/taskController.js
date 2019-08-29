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
exports.longestComon = async (req, res) => {
	try {
		const { A, B } = req.body
		if (!A) return res.status(406).send(errorGenerate(406, 'A is required.'))
		if (!B) return res.status(406).send(errorGenerate(406, 'B is required.'))
	
		let lens1 = A.length
		let lens2 = B.length
		if(lens1!=lens2) return res.status(406).send(errorGenerate(406, 'A & B needs to be the same length.'))
		let array = Array(lens2+1).fill().map(() => Array(lens2+1).fill(0))
		for(let i=0; i<= lens1; i++){
			for(let j=0; j<= lens2; j++){
				if(i==0 || j==0){
					array[i][j]=0
				} else if(A[i-1]== B[j-1]){
					array[i][j] = array[i-1][j-1]+1
				} else {
					array[i][j] = Math.max(array[i-1][j], array[i][j-1])
				}
			}
		}
		let index = array[lens1][lens2] 
		let temp = index
		let lcs = Array(temp).fill().map(() => Array(lens2).fill(0))
		lcs[index] = ''; // Set the terminating characte
		let i = lens1
		let j = lens2
		while (i>0 && j>0){
			if(A[i-1]== B[j-1]){
				lcs[index-1] = A[i-1]
				--i
				--j
				--index
			}
			else if(array[i - 1][j] > array[i][j - 1]){
				--i
			}else{
				--j
			}
		}
		const longestCommonS = lcs.toString().replace(/,/g, '.')
		res.status(200).send(Object.assign({
			Task: 'Function that takes two strings, A and B, and returns the largest common subsequences of s1 and s2'
		}, errorGenerate(200, `${longestCommonS.replace('.', '').replace('.', '')}`))	)
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}

exports.fibonacciIterative = async (req, res) => {
	try {
		let { n } = req.body
		if (!n) return res.status(406).send(errorGenerate(406, 'The n number is required.'))
		if(n==0) return 0
		if(n==1) return 1
		let sum = 0
		let stack  =  []
		stack.push(n)
		while(stack.length > 0){
			n = stack.pop()
			if(n==0) {
				sum += 0
			}
			else if(n==1) {
				sum += 1
			} else {
				stack.push(n-1)
				stack.push(n-2)
			}
		}
		res.status(200).send(Object.assign({
			Task: 'Fibonaci iterative js'
		}, errorGenerate(200, `${sum}`))	)
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}
function fibonacci(n) {
	if(n==0) return 0
	if(n==1) return 1
	return fibonacci(n-1) + fibonacci(n-2)
}
exports.fibonacciRecursive = async (req, res) => {
	try {
		const { n } = req.body
		if (!n) return res.status(406).send(errorGenerate(406, 'The n number is required.'))
		res.status(200).send(Object.assign({
			Task: 'Fibonacci recursive js'
		}, errorGenerate(200, `${fibonacci(n)}`))	)
	} catch (e) {
		return res.status(500).send(errorGenerate(500, e.message))
	}
}