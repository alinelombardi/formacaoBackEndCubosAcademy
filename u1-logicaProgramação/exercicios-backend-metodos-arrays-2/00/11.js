const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" }
]

const profBack = professores.filter((professor) => {
    return professor.stack === "backend";
});

const profFront = professores.filter((professor) => {
    return professor.stack === "frontend";
});

console.log(profBack);
console.log(profFront);