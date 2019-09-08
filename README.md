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
Binary search works by comparing the target value to the middle element of the array. If the target value is greater than the middle element, the left half of the list is eliminated from the search space, and the search continues in the right half. If the target value is less than the middle value, the right half is eliminated from the search space, and the search continues in                  the left half. This process is repeated until the middle element is equal to the target value, or if the algorithm returns that the element is not in the list at all.

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

### Quick sort
1. Pick a pivot. 
2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3. Call quicksort recursively on the two sub-arrays. 

**BigO O(n log n). Better than merge sort**
* The endpoint for the implementation of the sorting is `/sort/quick-sort`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     | List of numbers                |

### Selection sort
Selection sort is a neat algorithm but it's not very fast. Takes O(n^2)


**BigO O(n^2). Slow**
* The endpoint for the implementation of the sorting is `/sort/selection-sort`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  list    |  Array        |   ✔     | List of numbers                |


## Tasks

### Sorted merged
You are given two sorted array, a and b, where a has a large enought buffer at the end to hold b, write a method to merge B into a in sorted order.
* The endpoint is `/task/sorted-merge`
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
### MANGO SELLER SHORTEST PATH
Fin the shortest path for a graph of friends to a mango seller that the name starts with x letter
* The endpoint is `/task/shortest-path-seller`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  myFriends|  Array        |   ✔     | Array of friends  |
|  friends  |  Array        |   ✔     | Object of arrays  |
|  mango    |  String       |   ✔     | The persons's name starts with that letter    |
#### Example of body parameters
```json
{
	"myFriends" : ["lola", "pancho", "juan"],
	"friends" :{
		"lola":["juancho", "Paco", "rebeca"],
		"juan" : ["rosa"]
	},
	"mango" : "r"
}
```
#### Example of response
``` json
 {
    "network": "rebeca is a seller",
    "task": "Find in the network of your friends the mango seller",
    "code": 200,
    "message": "OK",
    "details": "The request has succeeded.",
    "description": "The mango seller with the shortest path r"
}
```


### Longest common subsequence
Write a function that takes two strings, A and B, and returns the largest common subsequences of s1 and s2
* The endpoint is `/task/longest-common-sequence`
#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  A       |  String        |   ✔     | Without spaces and the same lenght that B  |
|  B       |  String        |   ✔     | Without spaces and the same lenght that  A |

#### Example of body parameters
```json
{
	"A" : "ABAZDC",
	"B" : "BACBAD"
}
```
The result will be => **ABAD**

### Fibonacci
Fibonaci function
* The endpoint for the implementation of recursive is `/task/fibonacci-recursive`
* The endpoint for the implementation of iterative is `/task/fibonacci-iterative`

#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  n       |  String        |   ✔     | It need to be a number, a not long because de bigO  |

#### Example of body parameters
```json
{
	"n" : "15",
}
```
The result will be => **610**
### Sink island
The 1's are islands and the 0's are water, find the number of islands
* The endpoint for the implementation is `/task/sinkIslands`

#### BODY PARAMETERS
| Name     |      Type     | Required |  Description                  |
|----------|:-------------:|------:   |--------------------:          |
|  grid    |  Array[Array] |   ✔     | The grid is an array of array of the islands and water  |

#### Example of body parameters
```json
{
	"grid" : [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 1]]
}
```
The result will be => **3**