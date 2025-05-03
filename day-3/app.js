/**Day 3: Exercises: Level 1 

1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the
typeof operator to check different data types.

2.Check if type of '10' is equal to 10

3.Check if parseInt('9.8') is equal to 10

4.Boolean value is either true or false.

    i.Write three JavaScript statement which provide truthy value.

    ii.Write three JavaScript statement which provide falsy value.

5.Figure out the result of the following comparison expression first without using console.log(). After you decide 
the result confirm it using console.log()
    
    i.    4 > 3
    ii.   4 >= 3
    iii.  4 < 3
    iv.   4 <= 3
    v.    4 == 4
    vi.   4 === 4
    vii.  4 != 4
    viii. 4 !== 4
    ix.   4 != '4'
    x.    4 == '4'
    xi.   4 === '4'
    xii.  Find the length of pyhton and jargon and make a falsy comparison statement.

6.Figure out the result of following expressions first without using console.log(). After you decide
the result confirm it by using console.log()

    i.    4 > 3 && 10 < 12
    ii.   4 > 3 && 10 > 12
    iii.  4 < 3 || 10 < 12
    iv.   4 > 3 || 10 > 12
    v.    !(4 > 3)
    vi.   !(4 < 3)
    vii.  !(false)
    viii. !(4 > 3 && 10 < 12)
    ix.   !(4 > 3 && 10 > 12)
    x.    !(4 === '4')
    xi.   There is no 'on' in both dragon and python
    
7.Use the date object to do the following activities 

    i.    What is the year today ?
    ii.   What is the month today as a number ?
    iii.  What is the date today ?
    iv.   What is the day today as a number ?
    v.    What is the hours now ?
    vi.   What is the minutes now ?
    vii.  Find out the numbers of seconds elapsed from January 1, 1970 to now.
   
*/





/**
 Level: 1 Solutions

 */

 1.
 let firstName = "Alper";
 let lastName = "Colak";
 let country = "Turkey";
 let city = "Ankara";
 let age = 31;
 let isMarried = false;
 let year = 2025;

 console.log(typeof firstName);
 console.log(typeof lastName);
 console.log(typeof country);
 console.log(typeof city);
 console.log(typeof age);
 console.log(typeof isMarried);
 console.log(typeof year);

 2.
 console.log(typeof '10' === 10);

 3.
 console.log(parseInt('9.8') === 10);

 4.
 //truthy values
 console.log(!!"Merhaba");
 console.log(!!1);
 console.log(!![]);


 //falsy values
 console.log(!!"");
 console.log(!!0);
 console.log(!!null);

5.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length != 'jargon'.length);

6.
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 < 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log((false));
console.log((4 > 3 && 10 < 12));
console.log((4 > 3 && 10 > 12));
console.log((4 === '4'));
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); 

7.
let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(now.getTime() / 1000));






























/**Day 3: Exercises: Level 2 
 
1.Write a script thath prompt the user to enter base and height of the triangle and calculate and are of a triangle (area = 0.5 x b x h).

    Enter base: 20
    Enter height: 10
    The area of the triangle is 100

2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate 
the perimeter of triangle (perimeter = a + b + c)

    Enter side a: 5
    Enter side b: 4
    Enter side c: 3
    The are of the triangle is 12

3.Get length and with using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle 
(perimeter = 2 x length + width))

4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle (c = 2 x pi x r) where pi = 3.14

5.Calculate the slope, x-intercept and y-intercept of y = 2x -2

6.Slope is (m = y2-y1/x2-x1). Find the slope between point (2,2) and point (6,10)

7.Compare the slope of above the questions.

8.Calculate the value of y (y = x^2+6x+9). Try to use different x values and figure out at what x value y is 0.

9.Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person ?

    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earn is 1120

10.If the length of your name is greater than 7 say, your name is long else say your name is short.

11.Compare your first name length and your family name length and you should get thıs output.

    let firstName = 'Alper'
    let lastName = 'Colak'

12.Declare two variables myAge and my yourAge and assign them initial values and myAge and yourAge.

    let myAge = 250
    let yourAge = 25
    
        I am 225 years older than you.

13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user
 to wait a certain amount of years.

    Enter birth year: 1993
    You are 31. You are old enough to drive

    Enter birth year: 2010
    You are 15. You will be allowed to drive after 3 years.

14.Write a script that prompt the user to enter number of years. Calculate a number of seconds a person can live.
Assume some one lives just hundred years.

    Enter number of years you live: 100
    You lived 3153600000 seconds.

15.Create a human readable time format using the Date time object

    i.   YYYY-MM-DD HH:mm
    ii.  DD-MM-YYYY HH:mm
    iii. DD/MM/YYYY HH:mm

 */











































































































/**Day 3: Exercises: Level 3
 
1.Create a human readable time format using the Date time object. The hour and the minute should be all the time
two digits (7 hours should be 07 and 5 minutes should be 05)

    i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05





 */