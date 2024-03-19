// var myname="sadique"
// console.log(myname);
// console.log("my name is khan");

//rule for craating var name
// var haiii="hello"
// console.log(haiii);

// var sp12_abs="wao"
// console.log(sp12_abs);

// interview question diff btw null and undefine;
// var msd;
// console.log(msd);

// var msd=null
// console.log(msd);

//NaN = Not a Number 

// var a= 20/2
// console.log(isNaN(a));

// IsNaN
// var c="mumbai"/2
// console.log(isNaN(c));
//ans--NaN -->isNaN-true
//ans - proper value-->isNan-false

//expression and operators
//assignment operator
//  var a=20;
//  console.log(a);


//  arthmatic opertaor (+,-,*,/,%,++,--)

//++ -- increment operator decrement operators
// var a=10;
// console.log(a++);
// console.log(a);


//++
//pre            post
//increment      operators
//operators      increment


//-- 
//pre            post
//decrement      operators
//operators      decrement

//comparison operators--> = < > <= >= != ==,===
//  var a=10;
//  var b=20;
//  console.log(a<b);
//  console.log(b<a);
//  console.log(a<=b);
//  console.log(a!=b);

//very imp
// var a=true; //bool
// var b=1;    // num
// console.log(a==b); // (==) dont check
// console.log(a===b);//(===) check data type


// logical operator(and(&&),or(||),not(!))

// AND operator(&&)
// var a=20;
// var b=40;
// var c=60;
// console.log(b>a && a>c);

// console.log(b>a && b>c);

// console.log(c>a && c>b);

// OR operator(||)
// var a=20;
// var b=40;
// var c=60;
// console.log(b>a || a>c);

// console.log(b>a || b>c);

// console.log(c>a || c>b);

// NOT operator(!)
// var a = true;
// console.log(!a);

// var b = false;
// console.log(!b);

//control statement
//if 
//if-else
//if else if
//switch case

//if
//syntax
//initialisation
// if(condition){
//     printing statement
// }

//var a=200;
//var b=400;
//if (a>b){
//    console.log("b is lesser");
//}

//if-else
//initialisation
//if(condition){
// printing statement;
//}
//else{
//  printing statement
//}

// 
// var a=80;
// var b=40;
// if(a<b){
//     console.log("a si lesser");
// }
// else{
//     console.log("b is lesser");
// }

//if else if//or nested if//
//syntax
//initialisation;
//if(condition){
    // printing statement;
// }
// else if(condition){
    // p stmnt;
// }
// ..
// ..
// ..
// ..
// ..
// ..
// else{
    // p stmnt;
// }

// var a=20;
// var b=40;
// var c=60;
// if (a>b && a>c){
//     console.log("a is greater");
// }
// else if(b>a && b>c){
//     console.log("b is greater");
// }
// else{
//     console.log("c is greater");
// }

//TERNARY OPERATOR-- Type of operator with three operands
//syntax
//initialisation
//(condition)?printing statement1:printing statement2:

// var a=20;
// var b=40;
// (a<b)?console.log("a is lesser"):console.log("b is lesser")


// Q1
// var a=60
// if((a%2)==0);{
// console.log("a is even");
// }
// // Q2
// var age=18;
// if(age>=18){
//     console.log("eligible to vote");
// }
// else{
//     console.log("not eligible");
// }

//switch case - when the equal condition is evaluated 
//the switch case is used
//syntax
// initialisation;
// switch(condition);{
//     cases;
//default :
//printing statement;
// }

// var day="holiday";
// switch (day){
//     case "Monday":
//     case "Thusday":
//         console.log("6:00AM");
//         break;
//         case "Tuesday":
//         console.log("7:00AM");
//         break;
//         case "Wednesday":
//         console.log("5:00AM");
//         break;
//         case "Friday":
//         console.log("8:00AM");
//         break;
//         case "saturday":
//         console.log("9:00AM");
//         break;
//         case "Sunday":
//         console.log("12:00PM");
//         default:
//             console.log("Holiday");

// }


// loops in JS
// for loop
//while loop
// do while loops

// for loop
// syntex
// for (initialisation,condition,inc/dec){
    // task
// }

// 
// for(a=1; a<=10;a++){
//     console.log(a);
// }

//while loop
//syntax:
// iitialisation
//while(condition){
//    task
// }
// example
// var a=1;
// while(a<=10){
//     console.log(a);
//     a++;
// }

// do while loop
// syntax:
// intitialisation;
// do{
    // task;
    // inc/dec
    // while(condition);
// }

// var a=1;
// do{
//     console.log(a);
//     a++;
// }while(a<=10);



// for (var a=0; a<=20; a++){
//     if (a==0){
//         console.log(a+"is even");
//     }
//     else if(a%2==0){
//         console.log(a+"is even");
//     }
// }

//WAP to print good morning 1000 times.
// var a="good morning"
// console.log((a)*1000);

let a = 20;
console.log(a)