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
 
1.Write a script that prompt the user to enter base and height of the triangle and calculate and are of a triangle (area = 0.5 x b x h).

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



/**
 Level: 2 Solutions

 */

1.
let base = parseFloat(prompt("Tabanı girin: "));
let height = parseFloat(prompt("Yüsekliği girin: "));
let area = 0.5 * base * height;
console.log(`Üçgenin alanı ${area}`);

2.
let sideA = parseFloat(prompt("A kenarını girin: "));
let sideB = parseFloat(prompt("B kenarını girin: "));
let sideC = parseFloat(prompt("c kenarını girin "));
let perimeter = sideA + sideB + sideC;
console.log(`Üçgenin çevresi ${perimeter}`);

3.
let length = parseFloat(prompt("Uzunluğu girin: "));
let width = parseFloat(prompt("Genişliği girin: "));
let area2 = length * width;
let perimeter2 = 2 * (length + width);
console.log(`Dikdörtgenin alanı ${area2}, çevresi ${perimeter2}`);

4.
let radius = parseFloat(prompt("Yarıçapı girin: "));
let area3 = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;
console.log(`Çemberin alanı ${area3}, çevresi ${circumference}`);

5.
let slope = 2;
let x_intercept = 1;
let y_intercept = -2;
console.log(`Eğim: ${slope}, x-kesim noktası: ${x_intercept}, y-kesim noktası: ${y_intercept}`);

6.
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(`Eğim: ${slope2}`);

7.
//Both slope values were calculated earlier and both have a value of 2. So, they are equal.

8.
let x_values = [-3, 0, 1, 2, 3];
for(let x of x_values) {
    let y = x*x + 6*x + 9;
    console.log(`x=${x}, y=${y}`);
}

9.
let hours = parseFloat(prompt("Saat sayısını girin: "));
let rate = parseFloat(prompt("Saat başına ücreti girin: "));
let pay = hours * rate;
console.log(`Haftalık kazancınız ${pay}`);

10.
let ad = prompt("İsminizi girin: ");
let message = (ad.length > 7) ? "İsminiz uzun." : "İsminiz kısa.";
console.log(message);

11.
let firstName2 = prompt("Adınızı girin: ");
let lastName2 = prompt("Soyadınızı girin: ");
let message2 = (firstName2.length > lastName2.length) ? `Adınız, ${firstName2}, soyadınızdan, ${lastName2}, daha uzun.` : `Soyadınız, ${lastName2}, adınızdan, ${firstName2}, daha uzun.`;
console.log(message);

12.
let myAge = 250;
let yourAge = 25;
let message3 = `Ben sizden ${myAge - yourAge} yıl daha yaşlıyım.`;
console.log(message3);

13.
let birthYear = parseInt(prompt("Doğum yılınızı girin: "));
let age2 = new Date().getFullYear() - birthYear;
let message4 = (age2 >= 18) ? `Siz ${age2} yaşındasınız. Araba kullanabilirsiniz.` : `Siz ${age2} yaşındasınız. Araba kullanabilmek için ${18 - age2} yıl beklemeniz gerekiyor.`;
console.log(message);

14.
let years = parseFloat(prompt("Kaç yıl yaşadınız: "));
let seconds = years * 365 * 24 * 60 * 60;
console.log(`Sen ${seconds} saniye yaşadın.`);

15.
/*let now = new Date();

let year0 = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);
console.log(`DD-MM-YYYY HH:mm: ${day}-${month}-${year} ${hour}:${minute}`);
console.log(`DD/MM/YYYY HH:mm: ${day}/${month}/${year} ${hour}:${minute}`);*/

//The codes overlapped because there are values with the same name as the code blocks above. So I put question 15 in the comment line.





/**Day 3: Exercises: Level 3
 
1.Create a human readable time format using the Date time object. The hour and the minute should be all the time
two digits (7 hours should be 07 and 5 minutes should be 05)

    i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

 */



/**
 Level: 3 Solutions

 */

1.
/*let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // ayı 2 basamaklı hale getirir
let day = String(now.getDate()).padStart(2, '0'); // günü 2 basamaklı hale getirir
let hour = String(now.getHours()).padStart(2, '0'); // saati 2 basamaklı hale getirir
let minute = String(now.getMinutes()).padStart(2, '0'); // dakikayı 2 basamaklı hale getirir

console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);
*/

//The codes overlapped again because of the same name and again I used the comment line for answers.