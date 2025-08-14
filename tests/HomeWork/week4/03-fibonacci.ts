function Fibanocci(n: number): number {
    if (n == 0) return 0
    let a = 0, b = 1
    for (let i = 1; i < n; i++) {

        const result = a + b;
        a = b
        b = result

    }

    return b
}

console.log(Fibanocci(1));
console.log(Fibanocci(2));
console.log((Fibanocci(3)));
console.log(Fibanocci(4));
console.log(Fibanocci(5));
console.log(Fibanocci(6));

