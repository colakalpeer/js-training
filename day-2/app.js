
















































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