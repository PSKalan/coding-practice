let str = "PRATEEK";
let count = 0;
let vowel = "aeiou";
let a = str.length;

for (let i=0; i<a-1; i++) {
    if(vowel.includes(str[i].toLowerCase())) {
        count = count + 1;
    }
}

console.log(a-count);
 
