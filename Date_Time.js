// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate =  new Date(2024, 0, 17)
// let myCreatedDate =  new Date(2024, 0, 17, 5, 3)
// console.log(myCreatedDate.tolocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long" 
})