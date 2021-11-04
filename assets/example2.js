
function summa (nums) {
    let sum = 0;
    
    for (let index = 0; index < nums.length; index++) {   
        sum = sum + nums[index];
    }

    return sum;
}

function concatenate (strings, delim = ', ') {
    let res = '';
   
    for (let index = 0; index < strings.length; index++) {
        res = res + strings[index];
    
        if (index !== strings.length - 1) {
            res = res + delim;
        }
    }

    return res;
}

function minus (numbs) {
    let minu = 0;

    for (let index = 0; index < numbs.length; index++) {
        minu = minu - numbs[index];
    }

    return minu;
}

function delet (numbes) {
    let del = 1;

    for (let index = 0; index < numbes.length; index++) {
        del = del / numbes[index];
    }

    return del;
}

function object ()







let arr = [10, 0, 4, 4, 1];
console.log('final sum:', summa(arr));
console.log('final min:', minus(arr));
console.log('final del2:', delet(arr));

let parr = [10, 5, 2];
console.log('final del:', delet(parr));


console.log(arr);
console.log(typeof arr);
console.log(arr[0]);
console.log('last element', arr[arr.length - 1]);
console.log('arr.lenght:', arr.length);



console.log(arr[0]+arr[1]+arr[2]+arr[3]); // это мой кооод!!!!!



let names = ['Alisher', 'EgorKreed', 'McPox', 'Rauf&Faik', 'MACAN', 'McPox'];
console.log('final names', concatenate(names));
console.log('names joined by +', concatenate(names, '+'));
console.log('final names', concatenate(names, 'Dinero$$$$'));
console.log('key', concatenate(names, '////////'));



let morgen = [1, 2, 4, 6, 7.9, 8]; 
let morgenSum = summa(morgen);
console.log('O velikuy morgen', morgenSum);

let song = {
    musician: "Morgernshtern",
    song: "Аристократ",
    toplist: "first",
    scores: 10
};

