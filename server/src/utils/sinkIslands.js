class SolutionSink {
	constructor(){

	}
	sinkIland(grid, r, c){
		if(grid[r][c] == 1) grid[r][c] = 0
		else return 
		if(r+1 < grid.length) 
			this.sinkIland(grid, r+1, c)
		if(r-1 >= 0) 
			this.sinkIland(grid, r-1, c)
		if(c+1 < grid.length) 
			this.sinkIland(grid, r, c+1)
		if(c-1 >= 0) 
			this.sinkIland(grid, r, c-1)
		
	}
}
export default SolutionSink