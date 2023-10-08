const express = require('express');
const { Pool } = require('pg');

const app = express();

app.use(express.json());

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '220511',      
    database: 'aulaconexao'        
});

app.get('/:id', async (request, response) => {

    try {

        const resultado = await pool.query('select * from empresas');
        return response.json(resultado);

    } catch (error) {
        console.log(error.message);
    }

});

// app.get('/:id', async (request, response) => {
//     const { id } = request.params;
//     try {

//         const resultado = await pool.query(`select * from empresas where id = ${id}`); //falha de segurança
//         return response.json(resultado.rows);

//     } catch (error) {
//         console.log(error.message);
//     }

// });

app.get('/', async (request, response) => {
        // const { id } = request.params;
        const { pagina, porPagina } = request.query;
        try {

            // const query = 'select * from empresas where id = $1';
            // const params = [id];

            // const query = 'select * from empresas where nome = $1 or nome = $2';
            // const params = ['Google', 'Facebook'];

            // const query = 'update empresas set site = $1 where id = $2';
            // const params = ['www.cakewalk.com', 1];

            // const query = `select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario from empresas e join filiais f on e.id = f.empresa_id join pessoas p on e.id = p.empresa_id
            // `

            // const query = `select e.id as empresaId, f.id as filiaisId, e.nome, f.pais from empresas e right join filiais f on e.id = f.empresa_id;`;

            const query = 'select * from pessoas order by id asc limit $1 offset $2';
            const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina;
            const { rowCount } = await pool.query('select * from pessoas');

            const resultado = await pool.query(query, [porPagina, offset]);

            const result = {
                pagina,
                porPagina,
                total: rowCount,
                registros: resultado.rows,
            }
            return response.json(result);
    
        } catch (error) {
            console.log(error.message);
        }
    
    });

app.listen(3000);