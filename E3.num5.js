var nums = (x, n) => {
    let z = x;
    for (let i = 0; i < n; i++){
        z = x * x;
    }
    return z;
}

console.log(nums(3, 2));