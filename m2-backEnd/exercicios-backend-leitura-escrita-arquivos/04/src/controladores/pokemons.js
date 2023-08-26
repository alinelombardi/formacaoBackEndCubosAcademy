const { listarPokemons, detalharPokemon } = require('utils-playground')

const mostrarPokemons = async (request, response) => {
    try {
        const pokemons = await listarPokemons(1);
        return response.status(200).json(pokemons);

    } catch (error) {
        return response.status(404).json(`Mensagem de erro: ${error.message}`);
    };
};

const exibirPokemon = async (request, response) => {
    const { informacao } = require.params;

    try {
        const pokemon = await detalharPokemon(informacao);

        const mostrar = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            abilities: pokemon.abilities,
            species: pokemon.species
        };

        return response.status(200).json(mostrar);

    } catch (error) {
        return response.status(404).json(`Mensagem de erro: ${error.message}`);
    };
};

module.exports = { mostrarPokemons, exibirPokemon };