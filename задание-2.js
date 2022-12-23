function Prime(num) {
    if (!Number.isInteger(num) || num > 2 && num > 1000) return "данные неверны";
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
    if (num % i === 0) return "непростое число";
    if (num === 0) return "не относят ни к простым, ни к составным.";
    if (num === 1) return "не относят ни к простым, ни к составным.";
    return "простое число";
}
console.log(Prime(5)); 