
const arr = [14, 20, 88, 43, 79];


function sum(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

function avgNum(numbers) {
    const total = sum(numbers)
    const averageNumber = total / numbers.length;

    return averageNumber
}

console.log(sum(arr))
console.log(avgNum(arr))