
// Approach 1
// let str1 = "MADAN";
// let str2 = "";
// let a = str1.length;
// for(let i = a-1; i>=0; i--) {
//     str2= str2 + str1[i];
// }

// for(i=0; i<=a-1; i++) {
//     if (str1[i]!=str2[i]) {
//         console.log("Given Text is not Palindrome")
//         break;
//     }
//     if (i==a-1) {
//         console.log("Given Text is a Palindrome")
//     }
// }

// Approach2 

let str = "MADAN";
a = str.length-1;

for(let i=0; i<=a; i++) {
    if(str[i]!=str[a-i]) {
      console.log("Given Text is not Palindrome")
         break;
    }
    if (i=a) {
        console.log("Given Text is a Palindrome")
    }

}


