// crescente
const array2 = [2, 33, 1, 20, 3, 43];

array2.sort((a, b) => {
    if( a < b) {
        return -1;
    }

    if( a > b) {
        return 1
    }
    return 0;
});

console.log(array2); // [ 1, 2, 3, 20, 33, 43 ]


// decrescente
const array3 = [2, 33, 1, 20, 3, 43];

array3.sort((a, b) => {
    if( a < b) {
        return 1;
    }

    if( a > b) {
        return -1
    }
    return 0;
});

console.log(array3); // [ 43, 33, 20, 3, 2, 1 ]

//enxuta crescente

const array = [2, 4, 1, 20, 3, 43];
array.sort((a, b) => {
    return a - b;
});
console.log(array); // [ 1, 2, 3, 4, 20, 43 ]

//enxuta decrescente

const array4 = [2, 4, 1, 20, 3, 43];
array4.sort((a, b) => {
    return b - a;
});
console.log(array4); // [ 43, 20, 4, 3, 2, 1 ]