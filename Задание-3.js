function getSum (a) { 
    return function (b) {
        return a + b
    }
}
  
console.log(getSum(23)(77))
