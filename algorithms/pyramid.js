const pry = n => {
    for(let i = 1; i<= n; i++){
        console.log(`'${" ".repeat(n - i)}${"#".repeat(i * 2 - 1)}${" ".repeat(n - i)}'`)
    }
}
pry(3)