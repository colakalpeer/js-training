/**Day 3: Exercises: Level 3
 
1.Get user input using prompt("Enter your age:"). If user is 18 or older, give feedback: 'You are old enough to drive'
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    Enter your age: 30 
    You are old enough to drive. 

    Enter your age:15
    You are left with 3 years to drive.

2.Compare the values of myAge and yourAge using if...else. Based on the comparison and log the result to console stating
who is older (me or you). Use prompt("Enter your age:") to get the age as input.

    Enter your age: 30
    You are 5 years older than me.

3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it on two ways

    . using if else
    . ternary operator

    let a = 4 
    let b = 3    

    4 is greater than 3 

4.Even numbers are divisible by 2 and the remainder is zero. How you check, if a number is even or not using JavaScript ?

    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is an odd number

 */



/**
 Level: 1 Solutions

 */

1.
let yas = prompt("Yaşınızı girin:");
if (yas >= 18) {
    console.log("Ehliyet alabilirsiniz.");
} else {
    console.log("Ehliyet alabilmeniz için " + (18 - yas) + " yıl beklemeniz gerekiyor.");
}

2.
let myAge = 25;
let yourAge = prompt("Yaşınızı girin:");
if (yourAge > myAge) {
    console.log("Benim yaşım " + myAge + ". Siz benden " + (yourAge - myAge) + " yaş büyüksünüz.");
} else {
    console.log("Benim yaşım " + myAge + ". Ben sizden " + (myAge - yourAge) + " yaş büyüğüm.");
}

3.
let a = 4;
let b = 3;

// if else kullanarak
if (a > b) {
    console.log(a + ", " + b + " 'den büyük");
} else {
    console.log(a + ", " + b + " 'den küçük");
}

// üçlü operatör kullanarak
console.log(a > b ? a + ", " + b + " 'den büyük" : a + ", " + b + " 'den küçük");

4.
let sayi = prompt("Bir sayı girin:");
if (sayi % 2 == 0) {
    console.log(sayi + " çift bir sayıdır.");
} else {
    console.log(sayi + " tek bir sayıdır.");
}