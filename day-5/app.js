/**Day 5: Exercises: Level 1
 
1.Declare an empty array;
2.Declare an array with more than 5 number of elements
3.Find the length of your array
4.Get the first item, the middle item and the last item of the array
5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7.Print the array using console.log()
8.Print the number of companies in the array
9.Print the first company, middle and last company
10.Print out each company
11.Change each company name to uppercase one by one and print them out
12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14.Filter out companies which have more than one 'o' without the filter method
15.Sort the array using sort() method
16.Reverse the array using reverse() method
17.Slice out the first 3 companies from the array
18.Slice out the last 3 companies from the array
19.Slice out the middle IT company or companies from the array
20.Remove the first IT company from the array
21.Remove the middle IT company or companies from the array
22.Remove the last IT company from the array
23.Remove all IT companies

*/




/**
 Level: 1 Solutions

 */

1.
const arr = [];

2.
const numbers = [12, 0.29, 3.471, 100, 641, 0.9];

3.
console.log(numbers.length);

4.
const firstItem = numbers[0];

const middleItem = numbers[Math.floor(numbers.length / 2)];

const lastItem = numbers[numbers.length -1];

5.
const mixedDataTypes = [12, true, "Alper", 0.21, "", false, 311];

console.log(mixedDataTypes.length);

6.
let ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

7.
console.log(ItCompanies);

8.
console.log(ItCompanies.length);

9.
const firstItem2 = ItCompanies[0];

const middleItem2 = ItCompanies[Math.floor(ItCompanies.length / 2)];

const lastItem2 = ItCompanies[ItCompanies.length -1];

10.
console.log(ItCompanies);

11.
console.log(ItCompanies.map(company => company.toUpperCase()));

12.
let sentence = ItCompanies.join(', ') + ' are big IT companies ';
console.log(sentence);

13.
console.log(ItCompanies.includes("Facebook")); //true

console.log(ItCompanies.includes("YouTube")); //false

14.
let filteredCompanies = [];

for (let company of ItCompanies) {
    let count = 0;
    for (let char of company) {
        if (char.toLowerCase() === 'o') {
            count++;
        }
    }
    if (count >= 2) {
        filteredCompanies.push(company);
    }
}

console.log(filteredCompanies);

15.
ItCompanies.sort();

console.log(ItCompanies);

16.
ItCompanies.reverse();

console.log(ItCompanies);

17.
let firstThreeCompanies = ItCompanies.slice(0, 3);

console.log(firstThreeCompanies);

18.
let lastThreeCompanies = ItCompanies.slice(-3);

console.log(lastThreeCompanies);

19.


20.
ItCompanies.shift();

console.log(ItCompanies);

21.

22.
ItCompanies.shift();

console.log(ItCompanies);

23.
ItCompanies.length = 0;

console.log(ItCompanies);