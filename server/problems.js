const problems = [
    {
        "problemId": "mea",
        "name": "Maximum Element in an array",
        "description": "Given an array of integers, find the maximum element in it.",
        "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array.",
        "outputformat": "Print the maximum element in the array.",
        "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
        "input": "5\n1 2 3 4 5",
        "output": "5",
        "explanation": "The maximum element in the array is 5.",
        "difficulty": "Easy"
    },
    {
        "problemId": "capb",
        "name": "Compute A power B",
        "description": "Given two integers A and B, compute A raised to the power B.",
        "inputformat": "The first line of input contains A and B separated by a space.",
        "outputformat": "Print A raised to the power B.",
        "constraint": "1 <= A, B <= 10^6",
        "input": "2 3",
        "output": "8",
        "explanation": "2 raised to the power 3 is 8.",
        "difficulty": "Medium"
    },
    {
        "problemId": "ra",
        "name": "Reverse Array",
        "description": "Given an array of integers, reverse the array.",
        "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array.",
        "outputformat": "Print the reversed array.",
        "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
        "input": "5\n1 2 3 4 5",
        "output": "5 4 3 2 1",
        "explanation": "The reversed array is 5 4 3 2 1.",
        "difficulty": "Easy"
    }
    ,
    {
        "problemId": "ls",
        "name": "Linear Search",
        "description": "Given an array of integers, find the index of a given element in the array.",
        "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array. The third line contains the element to be searched.",
        "outputformat": "Print the index of the element in the array. If the element is not found, print -1.",
        "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
        "input": "5\n1 2 3 4 5\n3",
        "output": "2",
        "explanation": "The element 3 is found at index 2.",
        "difficulty": "Easy"

    },
    {
        "problemId": "rn",
        "name": "Repeated Numbers",
        "description": "You are given an array of N elements. All elements of the array are in range 1 to N-2. All elements occur once except two numbers, which occur twice. Your task is to find the two repeating numbers.",
        "inputformat": "The first line of input contains T - the number of test cases. It's followed by 2T lines, the first line contains N - the size of the array and second line contains the elements of the array.",
        "outputformat": "Print the 2 repeated numbers in sorted manner, for each test case, separated by new line.",
        "constraint": "1 <= T <= 100\n 4 <= N <= 10^6",
        "input": "2\n 8 \n 1 3 2 3 4 6 5 5 \n 10 \n 1 5 2 8 1 4 7 4 3 6",
        "output": "3 5 \n 1 4",
        "explanation": "Self Explanatory",
        "difficulty": "Medium"
    }
    ,
    {
        "problemId": "ue",
        "name": "Unique elements",
        "description": "Given an array of integers, find the unique elements in the array.",
        "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array.",
        "outputformat": "Print the unique elements in the array.",
        "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
        "input": "5\n1 2 3 4 5",
        "output": "1 2 3 4 5",
        "explanation": "All elements in the array are unique.",
        "difficulty": "Medium"
    },
    {
        "problemId": "tm",
        "name": "Transpose Matrix",
        "description": "Given a matrix of size N x N, transpose the matrix.",
        "inputformat": "The first line of input contains N - the size of the matrix. The next N lines contain N elements each.",
        "outputformat": "Print the transposed matrix.",
        "constraint": "1 <= N <= 1000, 1 <= A[i][j] <= 10^6",
        "input": "3\n1 2 3\n4 5 6\n7 8 9",
        "output": "1 4 7\n2 5 8\n3 6 9",
        "explanation": "The transposed matrix is 1 4 7\n2 5 8\n3 6 9.",
        "difficulty": "Medium"
    },
    {
        "problemId": "capb",
        "name": "Compute A power B",
        "description": "Given two integers A and B, compute A raised to the power B.",
        "inputformat": "The first line of input contains A and B separated by a space.",
        "outputformat": "Print A raised to the power B.",
        "constraint": "1 <= A, B <= 10^6",
        "input": "2 3",
        "output": "8",
        "explanation": "2 raised to the power 3 is 8.",
        "difficulty": "Medium"
    }
]

module.exports = problems;