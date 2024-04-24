// let para1 = document.createElement("p");
// para1.innerText = "Hey I am red!";
// document.querySelector('body').append(para1);
// para1.classList.add('red');


// let h3 = document.createElement("h3");
// h3.innerText = "Hey I am bule h3!";
// document.querySelector('body').append(h3);
// h3.classList.add('blue');

// let div = document.createElement("div");
// let h = document.createElement("h");
// let p = document.createElement("p");

// h1.innerText = 'i am a h';
// p.innerText = 'i am a p';
// div.append(h1);
// div.append(p);
// div.classList.add("box");
// document.querySelector('body').append(div);

// let btn = document.querySelector("button");
// btn.onclick = function () {
//     alert("button was clicked");
    // console.log("button was clicked");
// }

// let btns = document.querySelectorAll("button");
// for (const btn  of btns) {
//       btn.onclick = says;
// }

// function says() {
//     alert("hello world");
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click",function () {
//     alert("button was clicked");
// })

// let btn = document.querySelector("button");
// btn.addEventListener("click",function () {
// let h3 = document.querySelector("h3");
// let randoncolor = getRandomColor();
// h3.innerText = randoncolor;
// let div = document.querySelector("div");
// div.style.backgroundColor = randoncolor;
// console.log("color update");
    
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let p = document.querySelector("p");
// p.addEventListener("click",function () {
//     console.log("para was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function () {
//    console.log("mouse inside box"); 
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click",function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btns = document.querySelector("button");

// h1.addEventListener("click",function () {
//     h1.style.backgroundColor = "blue";
//     console.log(this.innerText);
// })
// h3.addEventListener("click",function () {
//     h3.style.backgroundColor = "blue";
//     console.log(this.innerText);
// })
// p.addEventListener("click",function () {
//     p.style.backgroundColor = "blue";
//     console.log(this.innerText);
// })
// btns.addEventListener("click",function () {
//     btns.style.backgroundColor = "blue";
//     console.log(this.innerText);
// })

// function changecolor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click", changecolor);
// h3.addEventListener("click", changecolor);
// p.addEventListener("click", changecolor);
// btns.addEventListener("click", changecolor);

// btns.addEventListener("click",function (event) {
//     console.log(event);
//     console.log('button clicked');
// });

// let form = document.querySelector("form");
// form.addEventListener("submit",function () {
//     alert("hello world");
// });

let h1 = document.querySelector("h1");
function changecolor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color change");
        },delay);
    })
}

async function demo() {
  await changecolor("red",1000); 
  await changecolor("orange",1000); 
  await changecolor("green",1000); 
   changecolor("blue",1000); 
}
// changecolor("red",1000)
// .then(()=>{
//     console.log("red color change");
//     return changecolor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color change");
//     return changecolor("green",1000);
// })
// .then(()=>{
//     console.log("green color change");
//     return changecolor("yellow",1000);
// })
// .then(()=>{
//     console.log("yellow color change");
//     return changecolor("blue",1000);
// })
// .catch((err)=>{
//     console.log("printed",err);
// })

// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("green",1000,()=>{
//           changecolor("yellow",1000,()=>{
//             changecolor("blue",1000,);
//           })
//         })
//     })
// })

// function hello() {
//    console.log("hello world"); 
// }

// function Demo() {
//     console.log("demo function");
//     hello();
// }

// console.log("hello welcome");
// Demo();
// console.log("bye done!");

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// setTimeout(()=>{
//     console.log("hello world");
// },2000);

// console.log("hello....");

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);
// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "blue";
// },3000);

// function savedata(data) {
//     let internate = Math.floor(Math.random()*10)+1;
//     if (internate > 4) {
//         console.log("your internate speed fast",data);
//     }
//     else{
//         console.log("your internet connection week");
//     }
// }

// savedata("apna collage");

// function savedata(data) {
//     return new Promise((sucess,failure)=>{
//         let internet = Math.floor(Math.random()*10)+1;
//         if (internet>4) {
//             sucess("sucess : data was saved",data);
//         }
//         else{
//             failure("failure : data was not saved");
//         }
//     });
// }
//  savedata("apna collage")
//  .then((result)=>{
//      console.log("promise was resolved");
//      console.log(result)
//      return savedata("hello world");
//  })
//  .then((result)=>{
//     console.log("promises was resolved1");
//     console.log(result);
//     return savedata("hello welcome");
//  })
//  .then((result)=>{
//     console.log("promises was resolved2");
//     console.log(result);
//     return savedata("good morning");
//  })
//  .catch((error)=>{
//      console.log("promise was rejected");
//      console.log("promises error",error);
//  })

// asyns function

// async function greet() {
//     return "hello world";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log(result);
// })
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
// let Demo = async ()=>{
//     return 5;
// }

// function getnum() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//    await getnum();
//    await getnum();
//    await getnum();
//    getnum();
// }