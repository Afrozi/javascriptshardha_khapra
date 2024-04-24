// obj = [
//     {
//         name:"aman",
//         marks:87,
//     },{
//         name:"afrozkhan",
//         marks:89,
//     },{
//         name:"shardha",
//         marks:94.5,
//     }];

//     obj.forEach((stu) => {
//         console.log(stu.marks);
//     });

    // let num = [1,2,3,4,5,6,7,8];
    // let double = num.map((ele)=>{
    //  return ele*2
    // });

//     console.log(double);

// let mak = obj.map((ele)=>{
//     return ele.marks/10
// });

// console.log(mak);

// let arr = [2,4,8,690,8];
// let ans = arr.filter((ele)=>{
//     return ele>5;
// });
// console.log(ans);

// let wer = arr.some((ele)=>{
//     return ele%2 == 0
// })

// console.log(wer);

// let num = [1,2,3,4,5,6,7,8];
// let finalval = num.reduce((res,ele)=> {
//     console.log(res);
//     return  res+ele;
// });
// console.log(finalval);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let max = -1;
// for (let i = 0; i < arr.length; i++) {
//       if (max<arr[i]) {
//         max = arr[i];
//       }
// }

// console.log(max);

// let arr = [10,20,30,40];
// let nums =arr.every((ele)=> (arr%10==0));
// console.log(nums);

// function sum(a = 2,b) {
//     return a + b;
// }
// console.log(sum(1,3));
// console.log(sum(1));

let desc = ["afroz","khan","suno","vihar"];
let [winner,runnerup, ...other] = desc;

console.log(winner);
console.log(runnerup);
console.log(desc);
console.log(other);