// função síncrona

console.log('inicio');

for (let index = 1; index <5; index++) {
    console.log(index);
}

console.log('fim');

// função assíncrona

console.log('inicio');

getCityFromZipcode('13185185').then(cidade => {
    console.log(cidade)
})

console.log('fim');



