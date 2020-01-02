let a = [0,1,2,3];
let b = a[0 ...];

b.push(4);
a = [a[0], ... b];

console.log(a);