/**Day 2: Exercises: Level 1
 
1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

2.Print the string on the browser console using console.log()

3.Print the length of the string on the browser console using console.log()

4.Change all the string characters to capital letters using toUpperCase() method

5.Change all the string characters to capital letters using toLowerCase() method

6.Cut(slice) out the first word of the string using substr() or substring() method

7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

8.Check if the string contains a word Script using includes() method

9.Split the string into an array using split() method

10.Split the string 30 Days Of Javascript at the space using split() method

11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, split the string at the comma and change it to an array.

12.Change 30 Days Of Javascript to 30 Days Of Python using replace() method

13.What is character at index 15 in '30 Days Of Javascript' string? Use charAt() method

14.What is the character code of J in '30 Days Of Javascript' string using charCodeAt()

15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of Javascript.

16.Use lasIndexOf to determine the position of the last occurrence of a in 30 Days Of Javascript.

17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end
a sentence with because because because is a conjunction'

18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot
end a sentence with because because because is a conjunction'

19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end
a sentence with because because because is a conjunction'

20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g '30 Days Of Javascript'.

21.Use startsWith() method with the string 30 Days Of Javascript and make the result true

22.Use endsWith() method with the string 30 Days Of Javascript and make the result true

23.Use match() nethod to find all the a's in 30 Days Of Javascript

24.Use concat() and merge '30 Days Of' and 'JavaScript' to single string, '30 Days Of Javascript'

25.Use repeat() method to print 30 Days Of Javascript 2 times


 */





/**
 Level: 1 Solutions

 */

1.
let challenge = '30 Days Of Javascript';

2.
console.log(challenge);

3.
console.log(challenge.length);

4.
console.log(challenge.toUpperCase);

5.
console.log(challenge.toLowerCase);

6.
console.log(challenge.substr(0, challenge.indexOf(' ')));

7.
console.log(challenge.substr(challenge.indexOf(' ') +1));

8.
console.log(challenge.includes('Script'));

9.
console.log(challenge.split());

10.
console.log(challenge.split(' '));

11.
let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCompanies.split(', '));

12.
console.log(challenge.replace('JavaScript', 'Python'));

13.
console.log(challenge.charAt(15));

14.
console.log(challenge.charCodeAt(challenge.indexOf('J')));

15.
console.log(challenge.indexOf('a'));

16.
console.log(challenge.lastIndexOf('a'));

17.
let sentence = 'You can not end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

18.
console.log(sentence.lastIndexOf('because'));

19.
console.log(sentence.search('because'));

20.
let challengeWithSpaces = ' 30 Days Of JavaScript ';
console.log(challengeWithSpaces.trim());

21.
console.log(challenge.startsWith('30'));

22.
console.log(challenge.endsWith('JavaScript'));

23.
console.log(challenge.match(/a/g));

24.
let part1 = '30 Days of';
let part2 = 'JavaScript';
console.log(part1.concat(' ', part2));

25.
console.log(challenge.repeat(2));

