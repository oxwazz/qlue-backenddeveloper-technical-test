const setsOfNumber = (num) => {
    let min = num-1
    let result = num
    let coba = []

    for (let i = num-1; i > 0; i--) {
        while (min > 0) {
            if (result - min >= 0) {
                result -= min
                coba.push(min)
                min++
            } else if (result - min < min) {
                min--
            }
        }
        console.log(coba)
        result = num
        coba = []
        min = i-1
    }
    
    for (let j = 0; j < result; j++) {
        coba.push(1)
    }
    console.log(coba)
}

setsOfNumber(4)