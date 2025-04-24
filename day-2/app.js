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


/**Day 2: Exercises: Level 2

1.Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

2.Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same 
-- with charity you give love, so don't just give money but reach out your hand instead."

3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal to 10.

5.Check if 'on' is found in both python and jargon

6.I hope this course is not full of jargon. Check if jargon is in the sentence.

7.Generate a random number between 0 and 100 inclusively.

8.Generate a random number between 50 and 100 inclusively.

9.Generate a random number between 0 and 255 inclusively.

10.Access thr 'JavaScript' string character using a random number.

11.Use console.log() and escape characters to print the following pattern.

        1 1 1 1 1
        2 1 2 4 8
        3 1 3 9 27
        4 1 4 16 64
        5 1 5 25 125

12.Use substr to slice out the phrase because because because from the following sentence:'You can not end a sentence with
because because because is a conjunction'
 
 */


1.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

2.
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same --with charity you give love, so don't just give money but reach out your hand instead.");

3.
let num = 10;
if (typeof num != 10) {
    num = Number(num);
}
console.log(num, typeof num);

4.
let floatNum = parseFloat('9.8');
if (floatNum !== 10) {
    floatNum = Math.ceil(floatNum);
}
console.log(floatNum);

5.
console.log('python'.includes('on') && 'jargon'.includes('on'));

6.
let sentence2 = "I hope this course is not full of jargon.";
console.log(sentence2.includes('jargon'));

7.
console.log(Math.floor(Math.random() * 101));

8.
console.log(Math.floor(Math.random()* 51 ) + 50);

9.
console.log(Math.floor(Math.random() * 256));

10.
let js = 'JavaScript';
let randIndex = Math.floor(Math.random() * js.length);
console.log(js[randIndex]);

11.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

12.
let fullSentence = 'You cannot end a sentence with because because because is a conjunction';
let start = fullSentence.indexOf('because');
let end = fullSentence.lastIndexOf('because') + 'because'.length;
let becausePhrase = fullSentence.substr(start, end-start);
console.log(becausePhrase);




/**Day 2: Exercises: Level 3

1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' You can not
end a sentence with because because because is a conjunction.

2.Use match() to count the number of because in the following sentence. 'You can not end a sentence with because because because is a conjunction.

3.Clean the following text and find the most frequent word (hint, use replace and regular expression).

*/



