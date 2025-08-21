
// let string = "aslan&soft" ;
// let spl = string.split("&");
// console.log(spl);


// array training

// let arr = ["asla","n"]
// arr = arr[0]+"n"
// console.log(arr);

// let arr = ["daraxt", "qushlar", "issiq o'lka"]
// arr.unshift("")
// console.log(arr);

const fruits = [
  "olma", "banan", "nok", "uzum", "shaftoli", "anor", "apelsin", "mandarin", "kivi", "mango",
  "limon", "gilos", "olcha", "qulupnay", "malina", "ko'k", "qovun", "tarvuz", "anjir", "xurmo",
  "banan", "olma", "mango", "nok", "shaftoli", "apelsin", "uzum", "limon", "gilos", "qulupnay",
  "anor", "kivi", "mandarin", "malina", "ko'k", "anjir", "tarvuz", "qovun", "xurmo", "olcha",
  "banan", "olma", "mango", "nok", "shaftoli", "apelsin", "uzum", "limon", "gilos", "qulupnay",
  "anor", "kivi", "mandarin", "malina", "ko'k", "anjir", "tarvuz", "qovun", "xurmo", "olcha",
  "banan", "olma", "mango", "nok", "shaftoli", "apelsin", "uzum", "limon", "gilos", "qulupnay",
  "anor", "kivi", "mandarin", "malina", "ko'k", "anjir", "tarvuz", "qovun", "xurmo", "olcha",
  "banan", "olma", "mango", "nok", "shaftoli", "apelsin", "uzum", "limon", "gilos", "qulupnay"
];

console.log();


// for(let son = fruits.length; son > 0; son --){
//     console.log(son, fruits[son]);
// }
// for(let item in fruits){
//     console.log(    fruits[item]);
    
// }

for(let item of fruits){
    if(item == "mandarin"){
        console.log(item);
    }
    
}