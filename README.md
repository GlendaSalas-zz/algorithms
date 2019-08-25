This is a project for algorithms

First of all you need to install all the node_modules for that
`npm install`
Then run the project `npm run dev`

# Searching algoritms

## Binary Search iterative
Binary search works by comparing the target value to the middle element of the array. If the target value is greater than the middle element, the left half of the list is eliminated from the search space, and the search continues in the right half. If the target value is less than the middle value, the right half is eliminated from the search space, and the search continues in the left half. This process is repeated until the middle element is equal to the target value, or if the algorithm returns that the element is not in the list at all.

*A limitation of binary search is that it can only search in a pre-sorted list. If the list is not pre-sorted, binary search will not work.*

The endpoint for an iterative search is `/search/binary-search-iterative`
### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     |  pre-sorted list               |
|  targte  |  Number       |   ✔     |  the target for the searching  |
