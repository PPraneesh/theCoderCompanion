// const problems = [
//     {
//         "problemId": "mea",
//         "name": "Maximum Element in an array",
//         "description": "Given an array of integers, find the maximum element in it.",
//         "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array.",
//         "outputformat": "Print the maximum element in the array.",
//         "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
//         "input": "5\n1 2 3 4 5",
//         "output": "5",
//         "explanation": "The maximum element in the array is 5.",
//         "difficulty": "Easy"
//     },
//     {
//         "problemId": "capb",
//         "name": "Compute A power B",
//         "description": "Given two integers A and B, compute A raised to the power B.",
//         "inputformat": "The first line of input contains A and B separated by a space.",
//         "outputformat": "Print A raised to the power B.",
//         "constraint": "1 <= A, B <= 10^6",
//         "input": "2 3",
//         "output": "8",
//         "explanation": "2 raised to the power 3 is 8.",
//         "difficulty": "Medium"
//     },
//     {
//         "problemId": "ra",
//         "name": "Reverse Array",
//         "description": "Given an array of integers, reverse the array.",
//         "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array.",
//         "outputformat": "Print the reversed array.",
//         "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
//         "input": "5\n1 2 3 4 5",
//         "output": "5 4 3 2 1",
//         "explanation": "The reversed array is 5 4 3 2 1.",
//         "difficulty": "Easy"
//     }
//     ,
//     {
//         "problemId": "ls",
//         "name": "Linear Search",
//         "description": "Given an array of integers, find the index of a given element in the array.",
//         "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array. The third line contains the element to be searched.",
//         "outputformat": "Print the index of the element in the array. If the element is not found, print -1.",
//         "constraint": "1 <= N <= 1000, 1 <= A[i] <= 10^6",
//         "input": "5\n1 2 3 4 5\n3",
//         "output": "2",
//         "explanation": "The element 3 is found at index 2.",
//         "difficulty": "Easy"

//     },
//     {
//         "problemId": "rn",
//         "name": "Repeated Numbers",
//         "description": "You are given an array of N elements. All elements of the array are in range 1 to N-2. All elements occur once except two numbers, which occur twice. Your task is to find the two repeating numbers.",
//         "inputformat": "The first line of input contains T - the number of test cases. It's followed by 2T lines, the first line contains N - the size of the array and second line contains the elements of the array.",
//         "outputformat": "Print the 2 repeated numbers in sorted manner, for each test case, separated by new line.",
//         "constraint": "1 <= T <= 100\n 4 <= N <= 10^6",
//         "input": "2\n8\n1 3 2 3 4 6 5 5\n10\n1 5 2 8 1 4 7 4 3 6",
//         "output": "3 5\n1 4",
//         "explanation": "Self Explanatory",
//         "difficulty": "Medium"
//     }
//     ,
//     {
//         "problemId": "ue",
//         "name": "Unique elements",
//         "description": "Given an array of integers, find the unique elements in the array.",
//         "inputformat": "The first line of input contains N - the size of the array and the second line contains the elements of the array.",
//         "outputformat": "Print the unique elements in the array.",
//         "constraint": "1 <= N <= 1000,\n1 <= A[i] <= 10^6",
//         "input": "5\n1 2 3 4 5",
//         "output": "1 2 3 4 5",
//         "explanation": "All elements in the array are unique.",
//         "difficulty": "Medium"
//     },
//     {
//         "problemId": "tm",
//         "name": "Transpose Matrix",
//         "description": "Given a matrix of size N x N, transpose the matrix.",
//         "inputformat": "The first line of input contains N - the size of the matrix. The next N lines contain N elements each.",
//         "outputformat": "Print the transposed matrix.",
//         "constraint": "1 <= N <= 1000, 1 <= A[i][j] <= 10^6",
//         "input": "3\n1 2 3\n4 5 6\n7 8 9",
//         "output": "1 4 7\n2 5 8\n3 6 9",
//         "explanation": "The transposed matrix is 1 4 7\n2 5 8\n3 6 9.",
//         "difficulty": "Medium"
//     }, {
//         "problemId": "xandy",
//         "name": "X and Y set bits",
//         "description": "Given two numbers X and Y, find the number whose binary representation has its Xth and Yth bits set to 1 and remaining bits set to 0.",
//         "inputformat": "The first line of input contains T - the number of test cases. It's followed by T lines. Each subsequent line contains two integers: X - the index of the first set bit and Y - the index of the second set bit, separated by a space.",
//         "outputformat": "For each test case, print the number whose binary representation has its Xth and Yth bits set to 1 and the remaining bits set to zero, separated by a new line.Since this number can be very large, print the result % 1000000007.",
//         "constraint": "1 <= T <= 10^5, 0 <= X,Y <= 10^5",
//         "input": "3\n4 3\n5 0\n15 30",
//         "output": "24\n33\n73774585",
//         "explanation": "Test-Case 1\nThe binary representation of the number that has bits at position 3 and 4 set is 11000 = 24\nTest-Case 2\nThe binary representation of the number that has the bit at position 5 and 0 set is 100001 = 33",
//         "difficulty": "medium"
//     },
//     {
//         "problemId": "capb",
//         "name": "Compute A power B",
//         "description": "Given two integers A and B, compute A raised to the power B.",
//         "inputformat": "The first line of input contains A and B separated by a space.",
//         "outputformat": "Print A raised to the power B.",
//         "constraint": "1 <= A, B <= 10^6",
//         "input": "2 3",
//         "output": "8",
//         "explanation": "2 raised to the power 3 is 8.",
//         "difficulty": "Medium"
//     }
// ]
const problems =[{
    "problemId":"cc",
"name":"Clock Conversion",
"description":"Given the time in 24-hour format, output the equivalent time in 12-hour format.\n24-hour format divides the day into 24 hours from 00 to 23, each of which has 60 minutes from 00 to 59\n12-hour format divides the day into two halves: the first half is AM, and the second half is PM. In each half, the hours are numbered in the order 12,01,02,03,…,11. Each hour has 60 minutes numbered from 00 to 59.",
"inputformat":"The first line contains a single integer t (1≤t≤1440) — the number of test cases. \nThe only line of each test case contains a string s of length 5 with format hh:mm representing a valid time in the 24-hour format. hh represents the hour from 00 to 23, and mm represents the minute from 00 to 59.\nThe input will always be a valid time in 24-hour format.",
"outputformat":"For each test case, output two strings separated by a space ('hh:mm AM' or 'hh:mm PM'), which are the 12-hour equivalent to the time provided in the test case (without quotes).You should output the time exactly as indicated; in particular, you should not remove leading zeroes.",
"constraint":" (1≤t≤1440)",
"input":"6\n09:41\n18:06\n12:14\n00:59\n00:00\n14:34",
"output":"09:41 AM\n06:06 PM\n12:14 PM\n12:59 AM\n12:00 AM\n02:34 PM",
"explanation":"Self Explanatory",
"difficulty":"Easy",
"testInput":"50\n21:37\n10:49\n16:06\n02:08\n05:44\n07:33\n22:09\n00:10\n16:02\n18:31\n04:59\n13:04\n21:45\n07:21\n00:13\n01:18\n18:33\n20:33\n05:42\n16:56\n09:07\n22:26\n19:08\n00:14\n00:33\n23:02\n23:44\n14:08\n06:23\n23:13\n23:16\n09:40\n21:21\n13:05\n14:37\n16:11\n15:59\n17:29\n08:39\n20:07\n12:22\n07:29\n18:46\n13:56\n16:19\n03:46\n02:51\n13:58\n05:35\n00:58",
"testOutput":"09:37 PM\n10:49 AM\n04:06 PM\n02:08 AM\n05:44 AM\n07:33 AM\n10:09 PM\n12:10 AM\n04:02 PM\n06:31 PM\n04:59 AM\n01:04 PM\n09:45 PM\n07:21 AM\n12:13 AM\n01:18 AM\n06:33 PM\n08:33 PM\n05:42 AM\n04:56 PM\n09:07 AM\n10:26 PM\n07:08 PM\n12:14 AM\n12:33 AM\n11:02 PM\n11:44 PM\n02:08 PM\n06:23 AM\n11:13 PM\n11:16 PM\n09:40 AM\n09:21 PM\n01:05 PM\n02:37 PM\n04:11 PM\n03:59 PM\n05:29 PM\n08:39 AM\n08:07 PM\n12:22 PM\n07:29 AM\n06:46 PM\n01:56 PM\n04:19 PM\n03:46 AM\n02:51 AM\n01:58 PM\n05:35 AM\n12:58 AM",
"bestCode":'#include<bits/stdc++.h> using namespace std; int main(){ int test; cin>>test; while(test--){ string s; cin>>s; int h1= s[0]-`0`; int h2= s[1]-`0`; int m1= s[3]-`0`; int m2=s[4]-`0`; int hour = h1*10+h2; int min = m1*10+m2; int thour,tmin=min; string t; hour>12 ? thour = hour-12: thour = hour; hour<12 ? t="AM" : t="PM"; if(thour==0) thour=12; if(thour<10 && tmin<10) cout<<"0"<<thour<<":"<<"0"<<tmin<<" "<<t<<endl; else if(thour<10) cout<<"0"<<thour<<":"<<tmin<<" "<<t<<endl; else if(tmin<10) cout<<thour<<":"<<"0"<<tmin<<" "<<t<<endl; else cout<<thour<<":"<<tmin<<" "<<t<<endl; } }'
},]
module.exports = problems;