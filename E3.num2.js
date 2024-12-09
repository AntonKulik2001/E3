function primeNums(x) {
    let isPrime, result;
    isPrime = true;

    if (x > 1 && x <= 1000) {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ? `Число ${x} является простым` : `Число ${x} не является простым`
    }   else if (x > 1000) {
        result = 'Данные неверны';
    }
    return result;
}

console.log(primeNums(22));