// For-in Loop works on object and Arrays 

let myobj = {
    abhi : 45,
    shek:67,
    hariom:90,
    avinsah: 89,
}
for (const key in myobj) {
    console.log(`Marks of ${key} is ${myobj[key]}`);
}   


// for in loop in arrays

let arr = [12,3,4,6,7,8];
for (let x in arr) {
    console.log(arr[x]);
}