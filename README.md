This is a project for algorithms

First of all you need to install all the node_modules for that
`npm install`
Then run the project `npm run dev`

# Searching algoritms

## Binary Search
Binary search works by comparing the target value to the middle element of the array. If the target value is greater than the middle element, the left half of the list is eliminated from the search space, and the search continues in the right half. If the target value is less than the middle value, the right half is eliminated from the search space, and the search continues in the left half. This process is repeated until the middle element is equal to the target value, or if the algorithm returns that the element is not in the list at all.

*A limitation of binary search is that it can only search in a pre-sorted list. If the list is not pre-sorted, binary search will not work.*

* The endpoint for an iterative searching is `/search/binary-search-iterative`
* The endpoint for a recursive searching is `/search/binary-search-recursive`
### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     |  pre-sorted list               |
|  target  |  Number       |   ✔     |  the target for the searching  |

# Sorting algorithms

## Insertion sort
Is a sorting algorithm that builds a final sorted array (sometimes called a list) one element at a time. While sorting is a simple concept, it is a basic principle used in complex computer programs such as file search, data compression, and path finding. Running time is an important thing to consider when selecting a sorting algorithm since efficiency is often thought of in terms of speed. Insertion sort has an average and worst-case running time of **O(n^2)**, so in most cases, a faster algorithm is more desirable.

* The endpoint for an iterative searching is `/sort/insertion-sort`
### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     | List of numbers                |