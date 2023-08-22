const bancoDados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email: 'guido@cubos.academy',
            status: true
        },
        {
            id: 2,
            nome: 'Isa',
            email: 'isa@cubos.academy',
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: "Primeiro Servidor",
            descrição: "Construindo o primeiro servidor"
        }
    ]
}



module.exports = bancoDados;