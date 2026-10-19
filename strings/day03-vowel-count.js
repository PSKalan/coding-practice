let str = "PRATEEK";
let count = 0;
let a = str.length;
let vowel = "aeiou";

for(let i=0; i<=a-1; i++) {
    if(vowel.includes(str[i].toLowerCase())){
        count = count + 1;
    }
}
console.log(count);
