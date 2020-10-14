const reduzeSizeJSON = (input) => {
    let output = {
        h: [],
        d: []
    }
    
    for (let key of Object.keys(input[0])) {
        output.h.push(key)
    }
    
    for (let i = 0; i < input.length; i++) {
        output.d.push(Object.values(input[i]))
    }

    return output
}

const inputJSON = [
    {"username":"ali","hair_color":"brown","height":1.2},
    {"username":"marc","hair_color":"blue","height":1.4},
    {"username":"joe","hair_color":"brown","height":1.7},
    {"username":"zehua","hair_color":"black","height":1.8}
]

console.log(reduzeSizeJSON(inputJSON))