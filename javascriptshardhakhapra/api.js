// let jsondata = '{"fact":"The Amur leopard is one of the most endangered animals in the world.","length":68}';
// let validjson = JSON.parse(jsondata);
// console.log(validjson.fact);

// let stu = {
//     name:"afrozkhan",
//     roll_no:45,
// };

// let bson = JSON.stringify(stu);
// console.log(bson);

// let url = "https://catfact.ninja/fact";
// async function getfact() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data.fact);
//     } catch (error) {
//         console.log(error);
//     }
// }

// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "yellow";
// }

// let h1 = document.querySelector("h1");
// h1.classList.add("blue");
// h1.classList.remove('blue');
// h1.classList.toggle('blue');
// h1.classList

let para1 = document.createElement("p");
para1.innerText = "Hey I am a FullSatck Developer!";
document.querySelector("body").append(para1);
para1.classList.add("blue");

let h3 = document.createElement("h3");
h3.innerText = "Hey i am a developer";
document.querySelector("body").append(h3);
h3.classList.add("blue");
