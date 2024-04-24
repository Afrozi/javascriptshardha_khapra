console.log("hello world");
let a = 10;
let b = 5;
console.log("sum is :",a+b);
let pencilprice = 20;
let erasorprice = 15;
// let output = "the total price is :" + (pencilprice+erasorprice)+ " " +"Rupess";
let output = `the total price is : ${pencilprice + erasorprice} Rupess`;
console.log(output);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(++a);
console.log(a+=7);
let age = 18;
console.log(age != 18);
console.log("before it my statement");
let q = 23;
if (q >= 18) {
    console.log("you can vote");
    console.log("you can vote");
}
console.log("after it my statement");
if (q > 20) {
    console.log("you cannot vote");
}
let name = "afrozkhan";
if (name == "afrozkhan") {
    console.log(`welcome ${name}`);
};
let redlight = "green";
if (redlight == "red") {
    console.log("stop");
}
else if (redlight == "yellow") {
    console.log("slow down");
}
else if (redlight == "green") {
    console.log("go");
}
else{
    console.log("you cannot drive");
}
let size = "L";
if (size == "XL") {
    console.log("popcorn xl price 250");
}else if (size == "L") {
    console.log("popcorn l price 200");
}else if (size == "M") {
    console.log("popcorn m price 100");
}else if (size == "S") {
    console.log("popcorn s price 50");
}else{
    console.log("popcorn price is not define");
}
let thapa = "XL";
if (thapa == "XL") {
    console.log("2");
}else {
    console.log("3");
}

const ag = 15;
if (ag == 18) {
    let a = "b";
    if (a == "a") {
        console.log("aam admi party");
    }else if (a == "b") {
        console.log("bjp");
    }else if (a == "c") {
        console.log("congress");
    }else{
        console.log("no party");
    }
}else{
    console.log("age is a not 18");
}
let marks = 45;
if (marks >= 33) {
    console.log("pass");
    if (marks >= 80) {
        console.log("grade O+");
    }
    else{
        console.log("grade A");
    }
}
else{
    console.log("better luck next time");
}

if (marks >= 33 || marks >= 85) {
    console.log("pass");
    console.log("A+");
}else{
    console.log("fail");
}
let str = "apple";
if (str[0] == "p" && str.length > 3) {
    console.log("good string");
}else{
    console.log("not a good string");
}
let num = 12;
if ((num%3==0)&&(((num+1 == 15)||(num-1==11)))) {
    console.log("safe");
}else{
    console.log("unsafe");
}
 const color = "blue";
 switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("go slow");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("none stop");
 }

 let day = 7;
 switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("no weeks days");
 }

//  alert("something is wrong!");
//  let n = parseInt(prompt("enter your number"));

 let numb = 99;
 if (numb%10==0) {
    console.log("good");
 }else{
    console.log("bad");
 }

//  let user = prompt("Enter your name");
//  let ages = prompt("Enter your age");
//  let username = (`${user} is ${ages} years old`);
//  alert(username);

 const months = 3;
 switch (months) {
    case 1:
        console.log("January,february,march")
        break;
    case 2:
        console.log("april,may,june")
        break;
    case 3:
        console.log("july,august,eptember")
        break;
    case 4:
        console.log("october,november,december")
        break;
    default:
        console.log("not a months");
 }

let fruit = "Appleses";
if ((fruit[0] == "A") && (fruit.length > 5)) {
    console.log("is a golden");
}
else{
    console.log("is a not golden");
}

let c = 15;
let d = 12;
let e = 9;
if (a>b) {
    if (b>c) {
        console.log(`${a} is a largest number`);
    }
    else{
        console.log(`${c} is a largest number`);
    }
}
else{
    if (b>c) {
        console.log(`${b} is a largest number`);
    }
    else{
        console.log(`${c} is a largest number`)
    }
}

let small = 32;
let big = 47852;
if (small%10 == big%10) {
    console.log("same of last digit" + small);
}else{
    console.log("same of last digit");
}

let msg = '  hello  ';
let st = msg.trim();
console.log(st);

let delta = "apnacollage";
console.log(delta.toUpperCase());
console.log(delta.toLowerCase());
console.log(delta.indexOf("la"));
let newmsg = delta.trim().toLocaleUpperCase();
console.log(newmsg);
console.log(delta.slice(4,delta.length));
console.log(delta.replace("apna","success"));
let veg = "patato";
console.log(veg.repeat(6));
let cal = "   hello  ";
console.log(cal.trim().toLocaleUpperCase());
let khan = "apnacollage";
console.log(khan.slice(4,9));
console.log(khan.indexOf("na"));
console.log(khan.replace("apna", "you"));
console.log(khan.slice(4).replace("ll","tt"));

// array
let arr = ["afrzokhan","mohankumar","rahulkumar","mohitkumar","sultan"];
console.log(arr);

const fru = ["mango","apple","litchi"];
console.log(fru);

let cars = ["maruti","bmw","xuv","safari","scorpio","swift"];
console.log(cars.push("ferrari"));
console.log(cars);
console.log(cars.pop());
console.log(cars);
console.log(cars.unshift("ferrari"));
console.log(cars);
console.log(cars.unshift("toyota"));
console.log(cars);
console.log(cars.shift());
console.log(cars);
console.log(cars.shift());
console.log(cars);

let mon = ['january','july','march','august'];
console.log(mon);
console.log(mon.shift());
console.log(mon.shift());
console.log(mon.unshift("june"));
console.log(mon.unshift("july"));
console.log(mon);
console.log(mon.splice(0,2, "july june"));
console.log(mon);
console.log(mon.reverse().indexOf("march"));

//nested array

let nest = [ [2,4],[3,6],[4,8]];
console.log(nest);

// loop

for (let i=1;i<11;i++) {
    console.log(i);
}
console.log("backwords");
for (let i=10;i>=1;i--) {
    console.log(i);
}
console.log("backwords");
for (let i=1;i<15;i=i+2) {
    console.log(i);   
}
console.log("backwords");
for (let i=15;i>=1;i=i-2) {
     console.log(i); 
}
// while loop
console.log("while loop");
let i = 1;
while (i<=10) {
    console.log(i);
    i++;
}
console.log("while loop");
let s = 1;
while (s<=15) {
    console.log(s);
    s = s+2;
}
console.log("while loop");
let k = 10;
while (k>1) {
    console.log(k);
    k = k-2;
}

// const favMovie = "avatar";
// let guess = prompt("guess my favorite movie");
// while ((guess!= favMovie)&&(guess!="quite")) {
//     guess = prompt("guess my favorite movie");
// }
// if (guess == favMovie) {
//     console.log("welcome");
// }else{
//     console.log("quite");
// }
console.log("while");
let g = 1;
while (g<=5) {
    if (g == 3) {
        break;
    }
    console.log(g);
    g++;
}

let app = ["mango","banana","apple","pineapple","greapes","orange"];
for (let index = 0; index < app.length; index++) {
    const element = app[index];
    console.log(element);
    
}

for (let index = app.length; index>=0; index--) {
    const element = app[index];
    console.log(element);
}
console.log("hello");
let laptop = [["afrzokhan",89],["amankumar",80],["sultan",90],["shehbazkhan",76]];
for (let i = 0; i < laptop.length; i++) {
    for (let j = 0; j < laptop.length[i]; j++) {
        console.log(laptop[i][j]);
    }
}

for (const apps of app) {
    console.log(apps);
}

for (const lap of laptop) {
    for (const map of lap) {
        console.log(map);
    }
}

// objects

let obj = {name:"afrozkhan",age:21,marks:75,rollno:22005};
console.log(obj);

let threads = {username:"@afrozkhan",
                content:"this is a contents",
                likes:150,
                reposts:50,tags:"Bank account"
            };

   console.log(threads);

const stu = {name:"afrozkhan",age:23,marks:94,city:"Delhi"};
   console.log(stu);
   console.log(delete stu.marks);
   console.log(stu);

// nested obj

const classinfo = {
    aman:{
        grade:"A",
        city:"delhi"
    },
    shardha:{
        grade:"B",
        city:"pune"
    },
    afrozkhan:{
        grade:"A+",
        city:"mumbai"
    }
}
console.log(classinfo);

const classinfos = [
    {name:"afrozkhan",grade:"A",city:"pune"},
    {name:"shehbaz",grade:"B",city:"mumbai"},
    {name:"sultan",grade:"C",city:"delhi"}
]
console.log(classinfos);

let stop = Math.random();
 stop = stop * 1000000
 stop = Math.floor(stop);
 console.log(stop);

//  let max = parseInt(prompt("Enter the max number"));
//  const random = Math.floor(Math.random()*max)+1
//  let guess = parseInt(prompt("guess your number"));
//    while (true) {
//        if (guess == "quite") {
//          console.log("user adult");
//            break;
//        }
//        if (guess == random) {
//             console.log("welcome");
//             break;
//        }
//        else{
//         guess = parseInt(prompt("guess your number"));
//        }
//    }

   let roll = Math.random();
   roll = roll*5+1;
   roll = Math.floor(roll)+1;
   console.log(roll);

   const car = {
    name:"maruti",
    model:2017,
    color:"white"
   };
   console.log(car.name);

const uno = {
    name:"afrozkhan",
    age:"21",
    city:"New York"
};
console.log(uno);
console.log(uno.country = "USA");
console.log(uno)

let check = [1,2,3,4,5,6,2,3];
let jack = 2;
for (let i = 0; i < check.length; i++) {
     if (check[i] == jack) {
        check.splice(i,1);
     }
}
console.log(check);


function rolldice() {
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();

function printInfo(name) {
    console.log(name);
}

printInfo("shardha");

function classFore(name,age) {
    console.log(`${name} age is a ${age}`);
}

classFore(`afrozkhan`,21);

function avrage(a,b,c) {
    console.log((a+b+c)/3);
}

// avrage(2,3,5);

// function printtable(a) {
//     for (let i = 1; i <=10; i++) {
//         console.log(i*a);
//     }
// }

// printtable();

function adult(age) {
    if (age >= 18) {
        return "adult";
    }
    else{
        return "not adult";
    }
}

 console.log(adult(17));

function getsum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = sum+i;
    }
    return sum;
}

 console.log(getsum(6));

 let strev = ["hi","hello","bye","!"];

 function concat(strev) {
    let result;
    for (let i = 0; i < strev.length; i++) {
        result +=strev[i];
    }
    return result;
 }

 console.log(concat(strev));

//  let nasa = "afrozkhan";
 let sum = function(a,b) {
     return a+b;
 }

 sum(5,7);

 function multiple(func,count) {
    for (let i = 1; i<=count; i++) {
        func();
    }
 }

 let greet = function () {
    console.log("hello");
 }

 multiple(greet,100);

 let odd = function (n) {
    console.log(!(n%2==0));
 }
 let even = function (n) {
    console.log(n%2==0);
 }

 function oddeven(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n%2==0));
         }
         return odd;
    }
   else if (request == "even") {
        let odd = function (n) {
            console.log(!(n%2==0));
         }
         return even;
    }else{
        console.log("wrong request");
    }
 }

 
 let request = "odd"; //even


 const ins = {
    name:"afrozkhan",
    eng:75,
    maths:61,
    science:47,
    social_science:67,
    physical:93,
     avgget (){
         let avg = (this.eng+this.maths+this.science)/3;
         console.log(avg);
     }
 }

 try {
    console.log(a);
 } catch (error) {
    console.log("a is a not define");
 }

 // arrow function

 const suo = (a,b) =>{
      console.log(a+b);
 }

 const cube = (n)=>{
    return n * n * n;
 }
 cube(3)
//  suo(3,5)

const muls = (a,b) => a * b ;
console.log(muls(3,6));

// console.log("hi");
// setTimeout(()=>{console.log("apna collage")},2000);
// console.log("hi");
// setInterval(()=>{console.log("apna collage")},2000);


ea = [1,2,3,4,5,5,6,7];

ea.forEach((ele)=> {
    console.log(ele);
})

//  ea.forEach(function(ele) {
//     console.log(ele);
// })

// let print = function (ele) {
//     console.log(ele);
// };

// ea.forEach(print);

