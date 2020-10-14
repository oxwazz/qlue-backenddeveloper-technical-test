const getPrimes = (num) => {
    let primeNumber = []
    let prima = true

    for (let j = 2; j < num; j++) {
        for (let i = 2; i < j; i++ ) {
            if (j % i == 0) {
                prima = prima && false
            } else {
                prima = prima && true
            }
        }
        if (prima == true) {
            primeNumber.push(j)
        }
        prima = true
    }
   return primeNumber
}

console.log(getPrimes(5))
console.log(getPrimes(10))