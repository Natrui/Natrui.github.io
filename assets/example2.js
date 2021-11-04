function log(...args) {
    console.log(...args);
}

function pretty(obj) {
    return JSON.stringify(obj, null, 2);
}

function deserialize(str) {
    return JSON.parse(str)
}

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

let arr = [10, 0, 4, 4, 1];
    // console.log('final sum:', summa(arr));
    // console.log('final min:', minus(arr));
    // console.log('final del2:', delet(arr));

let parr = [10, 5, 2];

// console.log('final del:', delet(parr));
// console.log(arr);
// console.log(typeof arr);
// console.log(arr[0]);
// console.log('last element', arr[arr.length - 1]);
// console.log('arr.lenght:', arr.length);

// console.log(arr[0]+arr[1]+arr[2]+arr[3]); // это мой кооод!!!!!

let names = ['Alisher', 'EgorKreed', 'McPox', 'Rauf&Faik', 'MACAN', 'McPox'];

// console.log('final names', concatenate(names));
// console.log('names joined by +', concatenate(names, '+'));
// console.log('final names', concatenate(names, 'Dinero$$$$'));
// console.log('key', concatenate(names, '////////'));

let morgen = [1, 2, 4, 6, 7.9, 8]; 
let morgenSum = summa(morgen);
//console.log('O velikuy morgen', morgenSum);


function setField(obj, key, value) {
    obj[key] = value;
}

function increment(num) {
    num = num + 1;
    // console.log('num in function increment', num);
    return num;
}

let song = {
    musician: "Morgernshtern",
    song: "Аристократ",
    toplist: "first",
    scores: 10
};

let songAlias = song;

//log('song object:', song);

let songStr = pretty(song);

let song2 = deserialize(songStr);

// log('song and song2', song, song2);

// log('is song and song2 equal?', song === song2);

setField(songAlias, 'length', 1011);

// log('songAlias', songAlias);

// log('song', song);

// log(song === songAlias);

let n = 100;

let retN = increment(n);

// log('n:', n);

// log('retN', retN);

// let obj = new Object();

let obj = {
    id: 1,
    name: 'Ivan',
    email: 'ivan@fail.com',
    jobs: ['police', 'manager', 'waiter', 'builder', 'teacher'],
    info: {
        height: 185,
        weight: 190
    },
    sayName(p1) {
        log('My name is ' + this.name + '; ' + p1);
    }
};

let jobs = obj.jobs;

for (let i = 0; i < jobs.length; i++) {
    log('Ivan\' job:', jobs[i]);
}

obj.jobs.push('hobo');

log(obj);

// object iteration 1

let objKeysStr = '';

for (let key in obj) {
    objKeysStr = objKeysStr + key;
    log('obj key', key, ' and value', obj[key]);
}

log(objKeysStr)

log('...and info keys')

for (let key in obj.info) {
    log('obj.info key', key);
}

// object iteration 2

let values = [];

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    log('key', key, 'value', value);
    values.push(value);
}

log('values', values);

log('is key with name id in obj?', 'id' in obj);
log('is key with name surname in obj?', 'surname' in obj);

delete obj.id; // delete key from object

if ('id' in obj) {
    log('yes, i have an id', obj['id'], obj.id)
} else {
    log('no, obj hasn\'t id key')
}

obj.sayName('asdf');

