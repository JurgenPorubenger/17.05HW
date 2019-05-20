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




let promp= +prompt();
let sum=1;

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

let i=promp;
while (i>0) {
    sum=promp*(promp-(-promp+i));
    // sum= sum*(sum-(sum-i));
    i--;
    console.log(sum);
}
