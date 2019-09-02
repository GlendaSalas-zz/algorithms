class Node {
	constructor(node, children = ''){
		this.data = node
		this.children = children
	}
	preorder(n){
		let stack = []
		stack.push(this)
		while(stack.length > 0) {
			let node = stack.pop()
			if(node.data==n) return true
			if (node.children) {
				stack = stack.concat(node.children.reverse())
			} 
		}
		return false
	}
}
module.exports = { Node }