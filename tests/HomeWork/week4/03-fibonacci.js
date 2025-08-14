function Fibanocci(n) {
    if (n == 0)
        return 0;
    var a = 0, b = 1;
    for (var i = 1; i < n; i++) {
        var result = a + b;
        a = b;
        b = result;
    }
    return b;
}
console.log(Fibanocci(1));
console.log(Fibanocci(2));
console.log((Fibanocci(3)));
console.log(Fibanocci(4));
console.log(Fibanocci(5));
console.log(Fibanocci(6));
