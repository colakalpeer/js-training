/**Day 6: Exercises: Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

1.Iterate 0 to 10 using for loop, do the same using while and do while loop

2.Iterate 10 to 0 using for loop, do the same using while and do while loop

3.Iterate 0 to n using for loop

4.Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######


5.Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100


6.Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000


7.Use for loop to iterate from 0 to 100 and print only even numbers

8.Use for loop to iterate from 0 to 100 and print only odd numbers

9.Use for loop to iterate from 0 to 100 and print only prime numbers

10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    The sum of all numbers from 0 to 100 is 5050.

11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

      [2550, 2500]

13.Develop a small script which generate array of 5 random numbers

14.Develop a small script which generate array of 5 random numbers and the numbers must be unique

15.Develop a small script which generate a six characters random id:

    5j2khz

*/

/**
 Level: 1 Solutions

 */

1.
// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i2 = 0;
// do {
//     console.log(i2);
//     i2++
// } while (i2 <= 5) 

2.
let i = 10;

while (i >= 0) {
  console.log(i);
  i--;
}

let j = 10;

do {
  console.log(j);
  j--;
} while (j >= 0);

3.
let n = 10;

for (let i = 0; i <= n; i++) {
  console.log(i);
}

4.
let stars = "";

for (let i = 1; i <= 7; i++) {
  stars += "#";
  console.log(stars);
}

5.
for (let i = 0; i <= 10; i++) {
 console.log(i + " x " + i + " = " + (i * i)); 
}
