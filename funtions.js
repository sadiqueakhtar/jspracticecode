//fUNCTIONS IN JAVA SCRIPT - funtion is a set of code which performs particular task

// funtion greet(){ // function definition
//    console.log("Good morning"); //task
//}
//great(); //calling a funtion
//greet();
//greet();

//funtion expression
//funtion add(num1,num2){
    //return num1+num2;
//}
//console.log(add(5,10));

// var add=function(num1,num2){
//     return num1+num2;
// }
// console.log(add(5,10));


//arrow funtion(anonamush funtion)
// var add=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add(5,10));

// //Default arrow funtion
// var add=(num1=5,num2=10)=>{
//     return num1+num2;
// }
// console.log(add());



//ARRAY - heterogeneous 
// var array - name= [v1,v2,....vn]

// var arr1=[50,"hello",true,30.2]
//index   0,   1,     2,   3
// console.log(arr1.length);

//push - to add the element is array
// var arr1=[50,"hello",true,30.2]
// console.log(arr1.push(20));
// console.log(arr1)

//pop - to remove the element from array
// var arr1=[50,"hello",true,30.2,20,false]
// console.log(arr1.pop())
// console.log(arr1)

// unshift - add the element at the start of the arrar
// console.log(arr1.unshift());
// console.log(arr1);

//shift - remove the elements from the start of the array
// console.log(arr1.shift());
// console.log(arr1);

// reverse
// var arr = [1,2,3,4,5,6]
// console.log(arr.reverse());

//splice
// var arr = [1,2,3,4,5,6]
// console.log(arr.splice(2,2));
// console.log(arr);

// includes
// console.log(arr.includes(5));
// console.log(arr);

// indexof
// console.log(arr.indexOf(4));

// slice 
// -------
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(arr.slice(2,8));
// console.log(arr);


//sort
// var arr2=[22,45,53,64,56,67,98,29,35]
// var check=arr2.sort(function(a,b){
//     // return a-b;//for ascending
//     return b - a; // for descinding
// })
// console.log(arr2);


///////strings
// var strings = "hi good afternoon"
// var strings2= "hi good afternoon"
// console.log(strings.length);
// console.log(strings.includes("good"));
// console.log(strings.startsWith("h"));
// console.log(strings.endsWith("n"));
// console.log(strings.replace("hi","hello"));
// console.log(strings.toUpperCase());

// var strings = "HELLO"
// console.log(strings.toLowerCase());


// MATHS METHODS
//pi
// var PI=Math.PI
// console.log(PI);

// console.log(PI.toFixed(3));

// //round
// var a= (5.3)
// console.log(Math.round(a));

// //floor
// var b = (8.4)
// console.log(Math.floor(b));

//pow
// let pow = Math.pow(5,6)
// console.log(pow);

//min
var min=Math.min(34,22,54,13,32)
console.log(min);

//max 
var max=Math.max(34,22,54,13,32)
console.log(max);

//random 
var random=Math.random().toFixed(2)*9
console.log(random);














