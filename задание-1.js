let arr = [1, 3, 0.816, null, 24, 27, 98, undefined, 25, undefined, ];

function evenNotEven(arr) {
let zero = 0;
let number = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        number += 1;
        if (arr[i] === null) {
            zero += 1;
        } else if (arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
 }
console.log(`В массиве: ${number} цифр, ${zero} null, ${even} чётных, ${odd} нечётных!`);
};

evenNotEven(arr);