# API FOR ALGORITHMS
This is an API made in **NodeJs** and **Express** for the implementation of the following:
- searching
- sorting
- tasks
# Run the API

First of all you need to install all the node_modules for that
`npm install`
Then run the project `npm run dev`

# Documentations
## Searching algoritms

### Binary Search
Binary search works by comparing the target value to the middle element of the array. If the target value is greater than the middle element, the left half of the list is eliminated from the search space, and the search continues in the right half. If the target value is less than the middle value, the right half is eliminated from the search space, and the search continues in the left half. This process is repeated until the middle element is equal to the target value, or if the algorithm returns that the element is not in the list at all.

*A limitation of binary search is that it can only search in a pre-sorted list. If the list is not pre-sorted, binary search will not work.*

* The endpoint for the implementation of the iterative searching is `/search/binary-search-iterative`
* The endpoint for the implementation of the  recursive searching is `/search/binary-search-recursive`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     |  pre-sorted list               |
|  target  |  Number       |   ✔     |  the target for the searching  |

## Sorting algorithms

### Insertion sort
Is a sorting algorithm that builds a final sorted array (sometimes called a list) one element at a time. While sorting is a simple concept, it is a basic principle used in complex computer programs such as file search, data compression, and path finding. Running time is an important thing to consider when selecting a sorting algorithm since efficiency is often thought of in terms of speed. Insertion sort has an average and worst-case running time of **O(n^2)**, so in most cases, a faster algorithm is more desirable.

* The endpoint for the implementation of the sorting is `/sort/insertion-sort`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     | List of numbers                |
### Merge sort
Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a **divide and conquer algorithm**.
1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
**merge sort has an average and worst-case performance of O(n log n).**
* The endpoint for the implementation of the sorting is `/sort/merge-sort`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     | List of numbers                |
## Tasks

### Sorted merged
You are given two sorted array, a and b, where a has a large enought buffer at the end to hold b, write a method to merge B into a in sorted order.
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  A       |  Array        |   ✔     | List of numbers with undefined spaces  |
|  B       |  Array        |   ✔     | List of numbers                |
#### Example of body parameters
```json
{
	"A" : [10, 12, 13,14,18, "undefined", "undefined", "undefined",  "undefined", "undefined"],
	"B" : [16, 17, 19, 20, 22]
}
```
### Longest common subsequence
Write a function that takes two strings, A and B, and returns the largest common subsequences of s1 and s2
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  A       |  String        |   ✔     | Without spaces and the same lenght that B  |
|  B       |  String        |   ✔     | Without spaces and the same lenght that  A |

#### Example of body parameters
```json
{
	"A" : 'ABAZDC',
	"B" : 'BACBAD'
}
```
The result will be => **ABAD**