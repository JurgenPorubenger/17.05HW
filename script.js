// let age = +prompt();
// let acsess= age > 18? ("доступ разрешен"):("доступ запрещен");
// console.log(acsess);


// let acsess= +prompt();;
// switch (acsess){
//     case (acsess<20):
//         console.log("podrosti");
//     break;
//     case (acsess<50):
//         console.log("ok");
//     break;
//     default:console.log ("yes");
// let array= ["okok","olkok","olklo"];
// console.log(array.length);

// for (let i=0;i<9;i++){
//     if(i%2!=1&&i!==0){
//     console.log(i);
//     }
// }

// let promp= +prompt();
// let sum=1;
//
// for (let i=1;i<=promp;++i) {
//     sum=sum*i;
//     console.log(sum);
// }




// let promp= +prompt();
// let sum=1;

// for (let i=promp;i>1;i--) {
//     sum= sum*(promp-(promp-i));
//     console.log(sum);
// }

// for (let i=1;i<=promp;i++) {
//     sum= sum*(sum-(sum-i));
//     console.log(sum);
// }



// let i=1;
// while (i<=promp) {
//     sum= sum*(sum-(sum-i));
//     i++;
//     console.log(sum);
// }


// let promp= +prompt();
// let d=promp;
// let sum=0;
// for (i=0;i<promp;i++) {
//     sum=sum+d;
//     console.log(sum);
// }
// let prom = +prompt();
// function f(a,d,progres) {
//     for (i=0;i<prom;i++){
//         progres+=d;
//         console.log(progres);
//     }
// }
//
//
// f(prom,prom,prom);

// let arr = [1,2,3,4];
// console.log(arr[arr.length-1]);
// let str = "stroka";
// console.log(str[str.length-1]);


// let him = [];
// let her = [];
//
// let arr = ["gregovna","santavich","cruzovna","gavnovich","sukaich","blyatich"];
// for (let i=0; i<arr.length; i++) {
//     let otch=arr[i];
//     // console.log(otch[otch.length-1]);
//     if (otch[otch.length-1]=="a"){
//         her.push(otch);
//         // console.log(her[]);
//     }else him.push(otch);
// }
// console.log(her);
// console.log(him);


// let arr = [12,23,31,64,5,16];
// let max=0;
// let min=0;
//
// for(i=0;i<arr.length;i++) {
//     // console.log(arr[i]);
//     if (arr[i]>arr[0]){
//         max=arr[i];
//         console.log(max);
//     }
// }
let number = [];
let string = [];


let arr = [12,23,31,64,5,"umnica","lavash","zubochistka",[67,"zorro",12],48,125,["zadnica",85, 17] ];

 for(i=0;i<arr.length;i++) {

     if (typeof arr[i] === "number") {
         number.push(arr[i]);
         // console.log(number);
     }
     else if (typeof arr[i] === "string") {
         string.push(arr[i]);
         // console.log(string);
     }
     else {
         // if (typeof arr[i][i]==="number") {
         let arrIntoArr = arr[i];
         // arrIntoArr=arrIntoArr[2];
         // let deepArrArr= arrIntoArr[0];

         for (k = 0; k < arrIntoArr.length; k++) {

             if (typeof arrIntoArr[k] === "number") {
                 number.push(arrIntoArr[k]);
             }
             // console.log(arrIntoArr[k]);
             else {
                 string.push(arrIntoArr[k]);
                 // console.log(arrIntoArr[k]);
             }
             // console.log(arrIntoArr.length);

         }

     }
 }
    console.log(number);
    console.log(string);

